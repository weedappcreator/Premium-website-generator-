import { streamText } from "ai";
import { getLanguageModel } from "./provider";
import { buildSystemPrompt, type GenerationContext } from "./context-builder";
import { buildStrReplaceTool } from "./tools/str-replace";
import { buildFileManagerTool } from "./tools/file-manager";
import { buildFigmaTool } from "./tools/figma";
import { VirtualFileSystem, type FileNode } from "./file-system";

export interface GenerationResult {
  stream: ReturnType<typeof streamText>["textStream"];
  files: Record<string, FileNode>;
  context: GenerationContext;
}

export async function runGenerationPipeline(
  ctx: GenerationContext,
  existingFiles: Record<string, FileNode> = {}
): Promise<GenerationResult> {
  // Step 1: Build full context from knowledge base
  const systemPrompt = buildSystemPrompt(ctx);

  // Step 2: Initialize virtual file system
  const fileSystem = new VirtualFileSystem();
  fileSystem.deserializeFromNodes(existingFiles);

  // Step 3: Get language model (the "power source")
  const model = getLanguageModel();

  // Step 4: Stream generation with full context
  const result = streamText({
    model,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: ctx.userPrompt },
    ],
    maxTokens: 10_000,
    maxSteps: 40,
    tools: {
      str_replace_editor: buildStrReplaceTool(fileSystem),
      file_manager: buildFileManagerTool(fileSystem),
      figma: buildFigmaTool(),
    },
  });

  return {
    stream: result.textStream,
    files: fileSystem.serialize(),
    context: ctx,
  };
}

export interface PipelineConfig {
  context: GenerationContext;
  existingFiles?: Record<string, FileNode>;
  onFileChange?: (files: Record<string, FileNode>) => void;
  onToken?: (token: string) => void;
}
