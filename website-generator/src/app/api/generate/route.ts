import type { FileNode } from "@/lib/file-system";
import { VirtualFileSystem } from "@/lib/file-system";
import { streamText, appendResponseMessages } from "ai";
import { buildStrReplaceTool } from "@/lib/tools/str-replace";
import { buildFileManagerTool } from "@/lib/tools/file-manager";
import { buildFigmaTool } from "@/lib/tools/figma";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { getLanguageModel } from "@/lib/provider";
import { buildSystemPrompt } from "@/lib/context-builder";

export async function POST(req: Request) {
  const {
    messages,
    files,
    projectId,
    context,
  }: { 
    messages: any[]; 
    files: Record<string, FileNode>; 
    projectId?: string;
    context: {
      designDirection: string;
      websiteType: string;
      techStack: string;
      template: string;
      integrations: string[];
      userPrompt: string;
    };
  } = await req.json();

  // Build full system prompt with loaded knowledge base context
  const systemPrompt = buildSystemPrompt(context);

  messages.unshift({
    role: "system",
    content: systemPrompt,
    providerOptions: {
      anthropic: { cacheControl: { type: "ephemeral" } },
    },
  });

  const fileSystem = new VirtualFileSystem();
  fileSystem.deserializeFromNodes(files);

  const model = getLanguageModel();
  const isMockProvider = !process.env.ANTHROPIC_API_KEY && !process.env.GEMINI_API_KEY && !process.env.OPENCODE_API_KEY;
  
  const result = streamText({
    model,
    messages,
    maxTokens: 10_000,
    maxSteps: isMockProvider ? 4 : 40,
    onError: (err: any) => {
      console.error("[Generate] Stream error:", err);
    },
    tools: {
      str_replace_editor: buildStrReplaceTool(fileSystem),
      file_manager: buildFileManagerTool(fileSystem),
      figma: buildFigmaTool(),
    },
    onFinish: async ({ response }) => {
      if (projectId) {
        try {
          const session = await getSession();
          if (!session) return;

          const responseMessages = response.messages || [];
          const allMessages = appendResponseMessages({
            messages: [...messages.filter((m) => m.role !== "system")],
            responseMessages,
          });

          await prisma.project.update({
            where: { id: projectId, userId: session.userId },
            data: {
              messages: JSON.stringify(allMessages),
              data: JSON.stringify(fileSystem.serialize()),
            },
          });
        } catch (error) {
          console.error("Failed to save project data:", error);
        }
      }
    },
  });

  return result.toDataStreamResponse({
    getErrorMessage: (error) => {
      console.error("[Generate] Error:", error);
      return error instanceof Error ? error.message : "Unknown error";
    },
  });
}

export const maxDuration = 120;
