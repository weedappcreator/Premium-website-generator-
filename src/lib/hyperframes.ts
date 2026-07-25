/**
 * HyperFrames Video Export Integration
 *
 * Enables exporting generated websites as MP4 video demos/previews
 * using HyperFrames' HTML-to-video rendering engine.
 *
 * Source: https://github.com/heygen-com/hyperframes
 */

export interface VideoExportConfig {
  width: number;
  height: number;
  fps: number;
  duration: number; // seconds
  format: 'mp4' | 'webm';
  quality: 'draft' | 'production';
}

export interface VideoExportResult {
  success: boolean;
  outputPath?: string;
  error?: string;
  durationMs?: number;
}

export const DEFAULT_VIDEO_CONFIG: VideoExportConfig = {
  width: 1920,
  height: 1080,
  fps: 30,
  duration: 15,
  format: 'mp4',
  quality: 'draft',
};

export const VIDEO_PRESETS: Record<string, Partial<VideoExportConfig>> = {
  'social-clip': { width: 1080, height: 1920, fps: 30, duration: 15 },
  'demo-landscape': { width: 1920, height: 1080, fps: 30, duration: 30 },
  'thumbnail': { width: 1280, height: 720, fps: 1, duration: 1 },
  'story': { width: 1080, height: 1920, fps: 30, duration: 10 },
  'square': { width: 1080, height: 1080, fps: 30, duration: 15 },
};

/**
 * Build a HyperFrames composition document from a generated website's HTML.
 * Wraps the site HTML in HyperFrames' data-* timing attributes for rendering.
 */
export function buildCompositionHtml(
  siteHtml: string,
  config: VideoExportConfig = DEFAULT_VIDEO_CONFIG
): string {
  const durationMs = config.duration * 1000;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Video Export</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: ${config.width}px; height: ${config.height}px; overflow: hidden; }
    .clip { position: absolute; inset: 0; }
    .scroll-container {
      width: 100%; height: 100%;
      overflow-y: auto; scroll-behavior: smooth;
    }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"><\/script>
</head>
<body>
  <!-- HyperFrames composition root -->
  <div class="clip" data-enter="0" data-exit="${durationMs}">
    <!-- Auto-scroll the website for the video duration -->
    <div class="scroll-container" id="site-container">
      ${siteHtml}
    </div>
  </div>

  <script>
    // Auto-scroll animation for video capture
    gsap.registerPlugin(ScrollTrigger);
    const container = document.getElementById('site-container');
    const scrollDistance = container.scrollHeight - container.clientHeight;

    const tl = gsap.timeline({ paused: true });
    tl.to(container, {
      scrollTop: scrollDistance,
      duration: ${config.duration - 2},
      delay: 1,
      ease: "power1.inOut"
    });

    // Register timeline for HyperFrames seek
    window.__timelines = [tl];
  <\/script>
</body>
</html>`;
}

/**
 * Generate the CLI command to render a composition to video.
 */
export function buildRenderCommand(
  compositionPath: string,
  outputPath: string,
  config: VideoExportConfig = DEFAULT_VIDEO_CONFIG
): string {
  return `npx @hyperframes/cli render ${compositionPath} --output ${outputPath} --width ${config.width} --height ${config.height} --fps ${config.fps} --format ${config.format}`;
}

/**
 * Recommend a video preset based on the user's intent.
 */
export function recommendPreset(intent: string): string {
  const msg = intent.toLowerCase();
  if (msg.includes('tiktok') || msg.includes('reel') || msg.includes('story') || msg.includes('vertical'))
    return 'social-clip';
  if (msg.includes('square') || msg.includes('instagram'))
    return 'square';
  if (msg.includes('thumbnail') || msg.includes('screenshot'))
    return 'thumbnail';
  if (msg.includes('story') || msg.includes('short'))
    return 'story';
  return 'demo-landscape';
}
