import { buildCompositionHtml, DEFAULT_VIDEO_CONFIG, VIDEO_PRESETS } from '@/lib/hyperframes';
import type { VideoExportConfig } from '@/lib/hyperframes';
import fs from 'fs';
import path from 'path';
import os from 'os';

export async function POST(req: Request) {
  try {
    const { html, preset, config: userConfig } = await req.json();

    if (!html) {
      return Response.json({ error: 'Missing html parameter' }, { status: 400 });
    }

    // Merge preset + user config
    const presetConfig = preset && VIDEO_PRESETS[preset] ? VIDEO_PRESETS[preset] : {};
    const config: VideoExportConfig = {
      ...DEFAULT_VIDEO_CONFIG,
      ...presetConfig,
      ...userConfig,
    };

    // Build the HyperFrames composition
    const compositionHtml = buildCompositionHtml(html, config);

    // Write to temp file
    const tmpDir = path.join(os.tmpdir(), 'premium-website-gen');
    if (!fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir, { recursive: true });
    }

    const compositionPath = path.join(tmpDir, `composition-${Date.now()}.html`);
    fs.writeFileSync(compositionPath, compositionHtml);

    return Response.json({
      success: true,
      compositionPath,
      compositionHtml,
      config,
      renderCommand: `npx @hyperframes/cli render ${compositionPath} --output output.mp4 --width ${config.width} --height ${config.height} --fps ${config.fps}`,
    });
  } catch (error) {
    console.error('Video export error:', error);
    return Response.json(
      { error: 'Failed to generate video composition' },
      { status: 500 }
    );
  }
}
