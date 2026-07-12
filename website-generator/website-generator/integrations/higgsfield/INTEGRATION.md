# Integration: Higgsfield AI — Image & Video Generation

## What It Is

[Higgsfield](https://higgsfield.ai) is an AI media platform with 100+ models for image, video, voice, and audio generation. Official SDK: `@higgsfield/client`.

## Why It Matters for Website Generation

Professional websites need professional media:
- **Hero images** — Generated from brand descriptions using Flux Pro Kontext
- **Product photos** — AI-generated with Soul 2.0 for realistic fashion/product visuals
- **Video backgrounds** — Animate static images into cinematic videos with DoP model
- **Motion control** — Precise camera movement control (zoom, pan, orbit, dolly)
- **Character consistency** — Soul ID for consistent characters across multiple shots

## Available Models

### Text-to-Image
| Endpoint | Model | Best For |
|---|---|---|
| `/v1/text2image/flux-pro/kontext/max` | Flux Pro Kontext Max | Highest quality, text rendering |
| `/v1/text2image/flux-pro/kontext/pro` | Flux Pro Kontext Pro | Professional quality |
| `/v1/text2image/flux-pro/kontext/dev` | Flux Pro Kontext Dev | Development/testing |
| `/v1/text2image/soul` | Soul 2.0 | Ultra-realistic fashion/product |

### Image-to-Video
| Endpoint | Model | Best For |
|---|---|---|
| `/v1/image2video/dop` | DoP Turbo | Fast video from image |
| `/v1/image2video/dop` | DoP Pro | High-quality cinematic video |

### Speech-to-Video
| Endpoint | Model | Best For |
|---|---|---|
| `/v1/image2video/speak/v2` | Speak v2 | Lip-sync avatar videos |

## How to Use

### 1. Get API Keys

Sign up at [higgsfield.ai](https://higgsfield.ai) → Get `KEY_ID` and `KEY_SECRET`.

### 2. Set Environment Variables

```bash
export HIGGSFIELD_KEY_ID="your-key-id"
export HIGGSFIELD_KEY_SECRET="your-key-secret"
```

### 3. Generate Media

```bash
# Generate a hero image
node integrations/higgsfield/higgsfield.mjs image "a modern SaaS dashboard with gradient background" --aspect-ratio 16:9

# Generate video from an image
node integrations/higgsfield/higgsfield.mjs video "cinematic camera zoom" --image-url https://example.com/hero.jpg

# List available motions
node integrations/higgsfield/higgsfield.mjs motions
```

### 4. Tell the LLM

When generating a site, tell the LLM:

```
"Generate a hero image using Higgsfield: 'a modern tech workspace with soft lighting'"
"Create a video background from the hero image using Higgsfield DoP model"
```

## Common Website Use Cases

### Landing Page Hero Image
```bash
node integrations/higgsfield/higgsfield.mjs image \
  "minimalist SaaS product dashboard on a clean desk, soft natural lighting, modern office" \
  --aspect-ratio 16:9
```

### E-commerce Product Photo
```bash
node integrations/higgsfield/higgsfield.mjs image \
  "professional product photography of a leather wallet on marble surface, studio lighting" \
  --aspect-ratio 1:1
```

### Video Hero Background
```bash
# First generate the image, then animate it:
node integrations/higgsfield/higgsfield.mjs video \
  "slow cinematic zoom, dramatic lighting" \
  --image-url <generated-image-url>
```

### Portfolio Background
```bash
node integrations/higgsfield/higgsfield.mjs image \
  "abstract geometric shapes in brand colors, subtle gradient, modern art style" \
  --aspect-ratio 21:9
```

## SDK Usage (Node.js)

```javascript
import { HiggsfieldClient, InputImage } from '@higgsfield/client';

const client = new HiggsfieldClient({
  credentials: `${KEY_ID}:${KEY_SECRET}`
});

// Text-to-Image
const imageJob = await client.subscribe('/v1/text2image/flux-pro/kontext/max', {
  input: {
    prompt: 'A futuristic cityscape at sunset',
    aspect_ratio: '16:9',
  },
  withPolling: true,
});

if (imageJob.isCompleted) {
  console.log(imageJob.jobs[0].results.raw.url);
}

// Image-to-Video
const videoJob = await client.subscribe('/v1/image2video/dop', {
  input: {
    model: 'dop-turbo',
    prompt: 'Cinematic camera movement',
    input_images: [InputImage.fromUrl('https://example.com/image.jpg')],
  },
  withPolling: true,
});

if (videoJob.isCompleted) {
  console.log(videoJob.jobs[0].results.raw.url);
}
```

## Integration with Website Generator Workflow

Add media generation to the content phase:

1. **Generate base structure** → workflow/generate.md
2. **Generate hero images** → Higgsfield Flux Pro with brand direction
3. **Generate product photos** → Higgsfield Soul 2.0 for realistic visuals
4. **Generate video backgrounds** → Higgsfield DoP model from static images
5. **Add motion control** → Use preset motions for camera movement
