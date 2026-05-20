/**
 * Higgsfield Client — AI media generation (images, video, speech-to-video)
 * 
 * Usage:
 *   node higgsfield.mjs image "a futuristic cityscape at sunset"
 *   node higgsfield.mjs video --image-url <url> "cinematic camera movement"
 *   node higgsfield.mjs motions
 *
 * Environment:
 *   HIGGSFIELD_KEY_ID     — Your key ID from higgsfield.ai
 *   HIGGSFIELD_KEY_SECRET — Your key secret
 */

import { HiggsfieldClient, InputImage } from '@higgsfield/client';

const KEY_ID = process.env.HIGGSFIELD_KEY_ID;
const KEY_SECRET = process.env.HIGGSFIELD_KEY_SECRET;

if (!KEY_ID || !KEY_SECRET) {
  console.error('Error: HIGGSFIELD_KEY_ID and HIGGSFIELD_KEY_SECRET required.');
  console.error('Get your keys at: https://higgsfield.ai');
  process.exit(1);
}

const client = new HiggsfieldClient({ credentials: `${KEY_ID}:${KEY_SECRET}` });

async function imageGenerate(prompt, options = {}) {
  const input = {
    prompt,
    aspect_ratio: options.aspectRatio || '16:9',
    ...(options.model && { model: options.model }),
    ...(options.resolution && { resolution: options.resolution }),
    ...(options.cameraFixed !== undefined && { camera_fixed: options.cameraFixed }),
  };

  console.log(`Generating image: "${prompt}"`);
  console.log(`Model: ${options.model || 'flux-pro/kontext/max'}`);

  const jobSet = await client.subscribe('/v1/text2image/flux-pro/kontext/max', {
    input,
    withPolling: true,
  });

  if (jobSet.isCompleted) {
    const url = jobSet.jobs[0]?.results?.raw?.url || jobSet.jobs[0]?.results?.min?.url;
    console.log(`Image URL: ${url}`);
    return url;
  }

  console.log('Job submitted. Request ID:', jobSet.requestId);
  return null;
}

async function imageToVideo(imageUrl, prompt, options = {}) {
  const input = {
    model: options.model || 'dop-turbo',
    prompt,
    input_images: [InputImage.fromUrl(imageUrl)],
    ...(options.duration && { duration: options.duration }),
  };

  console.log(`Generating video from image: ${imageUrl}`);
  console.log(`Prompt: "${prompt}"`);

  const jobSet = await client.subscribe('/v1/image2video/dop', {
    input,
    withPolling: true,
  });

  if (jobSet.isCompleted) {
    const url = jobSet.jobs[0]?.results?.raw?.url;
    console.log(`Video URL: ${url}`);
    return url;
  }

  console.log('Job submitted. Request ID:', jobSet.requestId);
  return null;
}

async function getMotions() {
  const motions = await client.getMotions();
  console.log('Available motions:');
  motions.forEach(m => console.log(`  ${m.id}: ${m.name}`));
  return motions;
}

// CLI
const args = process.argv.slice(2);
const command = args[0];

const options = {};
for (let i = 1; i < args.length; i++) {
  if (args[i].startsWith('--')) {
    const key = args[i].slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const value = args[i + 1]?.startsWith('--') ? true : args[i + 1];
    if (value !== undefined) {
      options[key] = isNaN(value) ? value : Number(value);
      i++;
    }
  } else if (!options.prompt) {
    options.prompt = args.slice(i).join(' ');
    break;
  }
}

async function main() {
  switch (command) {
    case 'image':
      await imageGenerate(options.prompt, options);
      break;
    case 'video':
      if (!options.imageUrl) {
        console.error('Error: --image-url required for video generation');
        process.exit(1);
      }
      await imageToVideo(options.imageUrl, options.prompt, options);
      break;
    case 'motions':
      await getMotions();
      break;
    case 'help':
    default:
      console.log(`
Higgsfield AI — Image & Video Generation

Usage:
  node higgsfield.mjs <command> [prompt] [options]

Commands:
  image <prompt>          Generate image from text
  video <prompt>          Generate video from image (--image-url required)
  motions                 List available motion presets

Options:
  --aspect-ratio <ratio>  Image aspect ratio: 16:9, 4:3, 1:1, 9:16 (default: 16:9)
  --model <name>          Model name
  --resolution <res>      Output resolution
  --image-url <url>       Input image URL (for video)
  --duration <seconds>    Video duration
  --camera-fixed <bool>   Fix camera position (true/false)

Environment:
  HIGGSFIELD_KEY_ID       Your key ID
  HIGGSFIELD_KEY_SECRET   Your key secret

Examples:
  node higgsfield.mjs image "a modern SaaS dashboard" --aspect-ratio 16:9
  node higgsfield.mjs video "cinematic zoom" --image-url https://example.com/img.jpg
      `);
      break;
  }
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
