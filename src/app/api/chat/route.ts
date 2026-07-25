import type { FileNode } from "@/lib/file-system";
import { VirtualFileSystem } from "@/lib/file-system";
import { streamText, appendResponseMessages } from "ai";
import { buildStrReplaceTool } from "@/lib/tools/str-replace";
import { buildFileManagerTool } from "@/lib/tools/file-manager";
import { buildFigmaTool } from "@/lib/tools/figma";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { getLanguageModel } from "@/lib/provider";
import { generationPrompt } from "@/lib/prompts/generation";
import { buildKBContext, detectContextFromPrompt } from "@/lib/knowledge-base";
import { buildTasteSkillContext } from "@/lib/taste-skill";
import { buildLenisContext } from "@/lib/lenis";
import { buildGsapContext } from "@/lib/gsap";
import { buildReactBitsContext } from "@/lib/react-bits";

export async function POST(req: Request) {
  const {
    messages,
    files,
    projectId,
  }: { messages: any[]; files: Record<string, FileNode>; projectId?: string } =
    await req.json();

  const userMessage = messages[messages.length - 1]?.content || '';
  const userMessageStr = typeof userMessage === 'string' ? userMessage : JSON.stringify(userMessage);
  const kbContext = detectContextFromPrompt(userMessageStr);
  const kbContent = buildKBContext(kbContext);

  // Build enhanced prompt with all integrations
  const integrationSections: string[] = [];

  // Always inject Taste Skill anti-slop design intelligence
  integrationSections.push(buildTasteSkillContext(userMessageStr));

  // Inject GSAP context when motion/animation is relevant
  const msg = userMessageStr.toLowerCase();
  if (msg.includes('animation') || msg.includes('scroll') || msg.includes('gsap')
    || msg.includes('motion') || msg.includes('parallax') || msg.includes('sticky')
    || msg.includes('pin') || msg.includes('agency') || msg.includes('awwwards')) {
    integrationSections.push(buildGsapContext());
  }

  // Inject Lenis context when smooth scroll is relevant
  if (msg.includes('smooth') || msg.includes('lenis') || msg.includes('buttery')
    || msg.includes('premium') || msg.includes('agency') || msg.includes('portfolio')) {
    integrationSections.push(buildLenisContext());
  }

  // Inject React Bits context when animated components are relevant
  if (msg.includes('animated') || msg.includes('effect') || msg.includes('creative')
    || msg.includes('react-bits') || msg.includes('text effect') || msg.includes('background')
    || msg.includes('fancy') || msg.includes('interactive')) {
    integrationSections.push(buildReactBitsContext());
  }

  // Inject video export context when requested
  if (msg.includes('video') || msg.includes('export') || msg.includes('mp4') || msg.includes('demo')) {
    integrationSections.push(`
## Video Export (HyperFrames)
When a user asks to export their website as a video demo, use the \`/api/export-video\` endpoint.
POST with \`{ html, preset, config }\`. Presets: social-clip (1080x1920), demo-landscape (1920x1080), square (1080x1080), story (1080x1920 short), thumbnail.
The endpoint generates a HyperFrames composition that auto-scrolls through the website and renders it to MP4.
`);
  }

  const enhancedPrompt = `${generationPrompt}
${integrationSections.join('\n')}
${kbContent ? `\n## Knowledge Base Context\n${kbContent}` : ''}

## Workflow Rules
1. Use the loaded skill and design direction to guide your implementation
2. Apply the design system colors and fonts from the visual direction
3. Use integrations (auth, payment, analytics, etc.) when relevant
4. For templates: use \`node src/lib/template-loader.js fetch <name>\` to load from GitHub
5. Run quality checks before shipping components
6. Apply Taste Skill anti-slop rules — check the quality gate before presenting work`;

  messages.unshift({
    role: "system",
    content: enhancedPrompt,
    providerOptions: {
      anthropic: { cacheControl: { type: "ephemeral" } },
    },
  });

  // Reconstruct the VirtualFileSystem from serialized data
  const fileSystem = new VirtualFileSystem();
  fileSystem.deserializeFromNodes(files);

  const model = getLanguageModel();
  // Use fewer steps for mock provider to prevent repetition
  const isMockProvider = !process.env.ANTHROPIC_API_KEY;
  const result = streamText({
    model,
    messages,
    maxTokens: 10_000,
    maxSteps: isMockProvider ? 4 : 40,
    onError: (err: any) => {
      console.error(err);
    },
    tools: {
      str_replace_editor: buildStrReplaceTool(fileSystem),
      file_manager: buildFileManagerTool(fileSystem),
      figma: buildFigmaTool(),
    },
    onFinish: async ({ response }) => {
      // Save to project if projectId is provided and user is authenticated
      if (projectId) {
        try {
          // Check if user is authenticated
          const session = await getSession();
          if (!session) {
            console.error("User not authenticated, cannot save project");
            return;
          }

          // Get the messages from the response
          const responseMessages = response.messages || [];
          // Combine original messages with response messages
          const allMessages = appendResponseMessages({
            messages: [...messages.filter((m) => m.role !== "system")],
            responseMessages,
          });

          await prisma.project.update({
            where: {
              id: projectId,
              userId: session.userId,
            },
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

  return result.toDataStreamResponse();
}

export const maxDuration = 120;
