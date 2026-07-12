export interface HiggsfieldImageParams {
  prompt: string;
  model?: 'soul-2.0' | 'nano-banana' | 'z-image' | 'nano-banana-pro' | 'seedream-lite';
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16' | '3:2';
  width?: number;
  height?: number;
}

export interface HiggsfieldVideoParams {
  prompt: string;
  imageUrl?: string;
  model?: 'dop-lite' | 'kling-2.6' | 'seedance-pro' | 'veo-3';
  duration?: 5 | 10;
}

export const HIGGSFIELD_MODELS = {
  images: [
    { name: 'z-image', cost: 0.15, quality: 'low', bestFor: 'backgrounds, textures, abstract' },
    { name: 'soul-2.0', cost: 0, quality: 'good', bestFor: 'portraits, people, lifestyle' },
    { name: 'nano-banana', cost: 1, quality: 'good', bestFor: 'product photos, general purpose' },
    { name: 'seedream-lite', cost: 1, quality: 'good', bestFor: 'fast versatile 2K' },
    { name: 'nano-banana-pro', cost: 2, quality: 'excellent', bestFor: '4K product shots, 14 refs' },
  ],
  videos: [
    { name: 'dop-lite', cost: 0, quality: 'basic', bestFor: 'simple camera moves, testing' },
    { name: 'seedance-pro', cost: 0.5, quality: 'good', bestFor: 'fast iteration, no audio' },
    { name: 'kling-2.6', cost: 10, quality: 'excellent', bestFor: 'character drama, no audio' },
    { name: 'veo-3', cost: 5, quality: 'excellent', bestFor: 'nature, environment' },
  ],
};

export function recommendImageModel(task: string): string {
  const t = task.toLowerCase();
  if (t.includes('background') || t.includes('texture') || t.includes('abstract')) return 'z-image';
  if (t.includes('portrait') || t.includes('person') || t.includes('people')) return 'soul-2.0';
  if (t.includes('product') || t.includes('photo')) return 'nano-banana';
  if (t.includes('4k') || t.includes('high res') || t.includes('premium')) return 'nano-banana-pro';
  return 'nano-banana';
}

export function recommendVideoModel(task: string): string {
  const t = task.toLowerCase();
  if (t.includes('test') || t.includes('simple') || t.includes('basic')) return 'dop-lite';
  if (t.includes('character') || t.includes('person')) return 'kling-2.6';
  if (t.includes('nature') || t.includes('environment')) return 'veo-3';
  return 'seedance-pro';
}

export function buildImagePrompt(params: HiggsfieldImageParams): string {
  const model = params.model || recommendImageModel(params.prompt);
  return `Generate image: "${params.prompt}"
Model: ${model}
Aspect: ${params.aspectRatio || '16:9'}
Optimized for web (compress to WebP, max 1920px width)`;
}

export function buildVideoPrompt(params: HiggsfieldVideoParams): string {
  const model = params.model || recommendVideoModel(params.prompt);
  return `Generate video: "${params.prompt}"
Model: ${model}
Duration: ${params.duration || 5}s
${params.imageUrl ? `Source image: ${params.imageUrl}` : ''}
Optimized for web (compress to MP4/WebM, max 1080p)`;
}
