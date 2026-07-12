---
name: higgsfield-credit-optimizer
description: >
  Use when the user wants to generate images or videos on Higgsfield and needs
  to pick the most credit-efficient model for their specific task. Triggers on:
  "generate image/video", "cheapest model", "save credits", "low budget",
  "which model uses least credits", "optimize credit usage", or when about to
  run any Higgsfield generation with limited credits remaining.
user-invocable: true
metadata:
  tags: [higgsfield, credits, optimization, budget, model-selection, efficiency, cheap]
  version: 1.0.0
  created: 2026-05-20
  parent: higgsfield
---

# Higgsfield Credit Optimizer

Pick the cheapest model that delivers acceptable quality. Always start here before generating.

---

## Quick Decision: What Are You Making?

Answer the question → get the cheapest viable model.

### IMAGE GENERATION

| Task | Cheapest Model | Cost | When to Upgrade |
|------|---------------|------|-----------------|
| Background / texture / abstract | Z-Image | 0.15 | Need sharpness → Nano Banana (1) |
| Generic placeholder image | Z-Image | 0.15 | Need quality → Seedream 5.0 Lite (1) |
| Portrait / person | Higgsfield Soul | 0.5 | Need fashion aesthetic → Soul 2.0 (Free) |
| Product photo | Nano Banana | 1 | Need 4K → Nano Banana Pro (2) |
| Image with text/logo | Nano Banana 2 | 1.5 | Complex text → GPT Image 1.5 (2) |
| Cinematic keyframe (for I2V) | Soul Cinema Preview | Low | Need 4K → Kling Image 3.0 |
| Multi-reference blend | Multi Reference | 1.5 | Need 14 refs → Nano Banana Pro (2) |
| Image editing / inpainting | Flux Kontext | varies | Need max quality → Flux Kontext Max |
| Photo style transformation | Photodump | Low | Need custom style → manual prompt |
| Sketch-to-image | Nano Banana | 1 | Need max detail → Nano Banana Pro (2) |
| Native 4K | Kling Image 3.0 | Mid | Need editing → Kling Image 3.0 Omni |
| Fast versatile 2K | Seedream 5.0 Lite | 1 | Need 4K → Seedream 4.5 (1) |
| Artistic / stylized | Wan 2.2 | 1 | Need painterly → Wan 2.6 (Mid) |

### VIDEO GENERATION

| Task | Cheapest Model | Cost/10s | When to Upgrade |
|------|---------------|----------|-----------------|
| Simple camera move (zoom/pan) | DoP Lite | Free | Need quality → DoP Standard |
| Fast iteration / test | Seedance Pro | Low | Need quality → Seedance 1.5 Pro |
| Character drama (no audio) | Kling 2.6 | ~10 | Need audio → Kling 3.0 |
| Fast Kling quality | Kling 2.5 Turbo | Low | Need best → Kling 3.0 |
| Artistic / stylized video | Wan 2.6 | Mid | Need 60fps → Wan 2.7 |
| VFX / fluid motion | Minimax Hailuo 02 | Low | Need quality → Hailuo 2.3 |
| Nature / environment | Veo 3 | Mid | Need ref images → Veo 3.1 |
| Budget Veo quality | Veo 3.1 Lite | Low | Need 4K → Veo 3.1 |
| Epic scale / spectacle | Sora 2 | Premium | No cheaper option |
| Lip-sync + multilingual | Seedance 1.5 Pro | Mid | Need 12 assets → Seedance 2.0 |
| Maximum reference control | Seedance 2.0 | Premium | Need fewer refs → Kling O1 |
| Cinematic + audio | Kling 3.0 | Premium | No audio needed → Kling 2.6 |
| Motion transfer from video | Kling 3.0 Motion Control | Premium | No cheaper option |
| Animate still image | DoP Turbo | Low | Need cinematic → DoP Pro |

---

## Credit Cost Reference (Exact)

### Image Models

| Model | Cost | Notes |
|-------|------|-------|
| Z-Image | 0.15 | Cheapest option, lower quality |
| Higgsfield Soul | 0.5 | Good for portraits |
| Kling O1 | 0.5 | 2K square |
| Seedream 5.0 Lite | 1 | Fast, versatile 2K |
| Seedream 4.5 | 1 | 4K versatile |
| Nano Banana | 1 | Sketch-to-image |
| Wan 2.2 | 1 | Artistic/stylized |
| Reve | 1 | Alternative option |
| Nano Banana 2 | 1.5 | Fast pro-quality + text |
| Multi Reference | 1.5 | Blend multiple refs |
| FLUX.2 Pro | 1.5 | High fidelity |
| Flux Kontext Max | 1.5 | Image editing |
| GPT Image 1.5 | 2 | Complex prompts + text |
| Nano Banana Pro | 2 | Max fidelity, 14 refs |
| Character Swap | 2 | Face consistency |
| FLUX.2 Flex | 5-6 | Premium quality |
| FLUX.2 Max | 5-6 | Premium quality |
| Soul 2.0 | Free | 5K free generations |

### Video Models (per 10 seconds, approximate)

| Model | Cost | Notes |
|-------|------|-------|
| DoP Lite | Free | Limited, basic camera moves |
| Seedance Pro | Low | Fast iteration, no audio |
| Kling 2.5 Turbo | Low | Fast Kling quality |
| Veo 3.1 Lite | Low | Budget 3.1 quality, 1080p |
| Minimax Hailuo 02 | Low | Budget motion |
| DoP Standard | Low-Mid | Better camera moves |
| DoP Turbo | Low-Mid | Fast I2V |
| Kling 2.6 | ~10 | Character drama, no audio |
| Wan 2.6 | Mid | Artistic, stylized |
| Veo 3 | Mid | Nature, environment |
| Minimax Hailuo 2.3 | Mid | VFX, fluid motion |
| Wan 2.7 | Mid | 60fps, first+last frame |
| Seedance 1.5 Pro | Mid | Best lip-sync |
| Veo 3.1 | Mid-High | Ref images, 4K |
| Kling 3.0 | Premium | Audio, multi-shot, 15s |
| Sora 2 | Premium | Epic scale |
| Seedance 2.0 | Premium | 12-asset multimodal |
| Kling 3.0 Motion Control | Premium | Motion transfer |

---

## The Golden Rules of Credit Efficiency

### Rule 1: Image First, Video Second
Never generate video until your base image is perfect.
- Image costs: 0.15–2 credits
- Video costs: Free–10+ credits
- **Savings:** 5-10x by getting the image right first

```
WRONG: Generate 5 videos at 10 credits each to find the right look = 50 credits
RIGHT: Generate 10 images at 1 credit each, pick best, animate once = 10 + 10 = 20 credits
```

### Rule 2: Use Free/Low Tier for 80% of Work
Reserve premium models for hero shots only.
- 80% of shots: DoP Lite, Seedance Pro, Kling 2.5 Turbo, Soul 2.0
- 20% of shots (hero): Kling 3.0, Sora 2, Veo 3.1

### Rule 3: Batch Similar Shots
Generate all shots with the same character/style in one session.
- Warm-up cost is amortized across all generations
- No need to re-establish style/character between shots

### Rule 4: Use Apps for Specific Tasks
Face swap, style transfer, transitions — use the App, not a model.
- Apps are optimized for their specific task
- Manual prompting costs more in failed generations

### Rule 5: Shorter is Cheaper
5-second video costs less than 10-second.
- Only generate the duration you actually need
- Extend later if needed (Veo 3.1 supports extension)

---

## Budget Scenarios

### You Have 42% Credits Left (~300 credits on Pro, ~630 on Ultimate)

**If Pro plan (700 total, ~300 remaining):**
- You can generate ~30 videos at Kling 2.6 cost (~10 each)
- Or ~300 images at Nano Banana cost (1 each)
- Or ~150 images at Nano Banana Pro cost (2 each)
- **Recommended mix:** 200 images (200 credits) + 10 videos (100 credits)

**If Ultimate plan (1500 total, ~630 remaining):**
- You can generate ~63 videos at Kling 2.6 cost (~10 each)
- Or ~630 images at Nano Banana cost (1 each)
- **Recommended mix:** 400 images (400 credits) + 23 videos (230 credits)

### Tight Budget Strategy (< 100 credits remaining)
1. Use Soul 2.0 for all images (Free, 5K gens)
2. Use DoP Lite for all videos (Free, limited)
3. Use Z-Image for backgrounds (0.15 each)
4. Only use paid models for absolute hero shots
5. **You can still generate 500+ images and 10+ videos**

### Medium Budget Strategy (100-500 credits)
1. Use Nano Banana for most images (1 each)
2. Use Seedance Pro for test videos (Low cost)
3. Use Kling 2.6 for character videos (~10 each)
4. Reserve Kling 3.0 for 2-3 hero shots only
5. **You can generate 200+ images and 20+ videos**

### Comfortable Budget Strategy (500+ credits)
1. Use Nano Banana Pro for quality images (2 each)
2. Use Kling 2.6 for most videos (~10 each)
3. Use Kling 3.0 for hero shots with audio
4. Use Cinema Studio for polished sequences
5. **Full creative freedom with smart prioritization**

---

## Model Upgrade Path

When the cheapest model isn't good enough, upgrade in this order:

### Image Upgrade Path
```
Z-Image (0.15) → Higgsfield Soul (0.5) → Nano Banana (1) → Nano Banana 2 (1.5) → Nano Banana Pro (2)
```

### Video Upgrade Path
```
DoP Lite (Free) → Seedance Pro (Low) → Kling 2.5 Turbo (Low) → Kling 2.6 (~10) → Kling 3.0 (Premium)
```

### I2V Upgrade Path
```
DoP Lite (Free) → DoP Standard (Low-Mid) → DoP Turbo (Low-Mid) → Veo 3.1 Lite (Low) → Veo 3.1 (Mid-High)
```

---

## Website Generation Credit Budget

For generating media for a website, here's the most efficient allocation:

### Minimal Website (5-10 credits)
- 5 hero images: Soul 2.0 (Free) or Nano Banana (5 credits)
- 0 videos: Use CSS animations instead
- **Total: 0-5 credits**

### Standard Website (20-40 credits)
- 10 images: Nano Banana (10 credits)
- 2 video backgrounds: DoP Turbo (Low-Mid each, ~4-6 credits total)
- 3 product photos: Nano Banana Pro (6 credits)
- **Total: 20-22 credits**

### Premium Website (50-100 credits)
- 15 images: Nano Banana Pro (30 credits)
- 4 video backgrounds: Kling 2.6 or Veo 3.1 Lite (~20-30 credits)
- 5 product photos: Nano Banana Pro (10 credits)
- 1 hero video: Kling 3.0 (Premium, ~15-20 credits)
- **Total: 75-90 credits**

### E-commerce Website (100-200 credits)
- 30 product images: Nano Banana Pro (60 credits)
- 10 category images: Soul 2.0 (Free) or Nano Banana (10 credits)
- 6 video backgrounds: Kling 2.6 (~60 credits)
- 5 lifestyle images: Soul 2.0 (Free)
- **Total: 130-150 credits**

---

## Quick Reference: Cheapest Model by Use Case

| Use Case | Cheapest Model | Cost |
|----------|---------------|------|
| "I just need any image" | Z-Image | 0.15 |
| "I need a person/portrait" | Soul 2.0 | Free |
| "I need a product photo" | Nano Banana | 1 |
| "I need an image with text" | Nano Banana 2 | 1.5 |
| "I need a 4K image" | Nano Banana Pro | 2 |
| "I need to edit an image" | Flux Kontext | varies |
| "I need a simple video" | DoP Lite | Free |
| "I need a test video" | Seedance Pro | Low |
| "I need character video (no audio)" | Kling 2.6 | ~10 |
| "I need character video (with audio)" | Kling 3.0 | Premium |
| "I need nature/environment video" | Veo 3 | Mid |
| "I need artistic/stylized video" | Wan 2.6 | Mid |
| "I need VFX/fluid motion" | Minimax Hailuo 02 | Low |
| "I need epic scale/spectacle" | Sora 2 | Premium |
| "I need lip-sync" | Seedance 1.5 Pro | Mid |
| "I need motion transfer" | Kling 3.0 Motion Control | Premium |
| "I need to animate a still" | DoP Turbo | Low-Mid |

---

## Related Skills

- `higgsfield-models` — Full model comparison and specs
- `higgsfield-assist` — Credit optimization + platform copilot
- `higgsfield-prompt` — MCSLA prompt formula
- `higgsfield-cinema` — Cinema Studio workflows
- `higgsfield-pipeline` — Full production workflows
