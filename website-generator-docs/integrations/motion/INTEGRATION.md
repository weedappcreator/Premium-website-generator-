# Integration: Motion.dev Animation Library

## What It Is

[Motion](https://motion.dev) is the modern animation library with **374+ production-ready animation examples** across React, JavaScript, and Vue. It's the successor to Framer Motion.

## Why It Matters

Most AI-generated sites have boring, generic animations (or none at all). Motion.dev examples give you access to professional, polished animations that make sites feel premium.

## Categories Available

| Category | Count | Examples |
|---|---|---|
| **Basics** | 99 | Spring, keyframes, drag, gestures, transitions |
| **Layout Animations** | 10 | Shared layout, reorder, scale correction |
| **Scroll** | 10 | Scroll-triggered, scroll-linked, parallax, hide header |
| **Text** | 35 | Typewriter, split text, scramble, wavy, reveal |
| **Carousel** | 30 | Coverflow, autoplay, thumbnail, parallax, lightbox |
| **Navigation** | 10 | Mega menu, smooth tabs, command palette |
| **Buttons** | 12 | Copy, create, dots morph, floating action, hold to confirm |
| **Forms** | 9 | Characters remaining, color picker, iOS slider |
| **Dialog** | 11 | Modal, sheet modal, context menu, popover |
| **Loading** | 23 | Circle spinner, jumping dots, shimmer, progress bar, infinite |
| **Interactions** | 12 | Swipe actions, tilt card, multi-state badge |
| **Cursor** | 24 | Magnetic, trail, follow, custom content, hover |
| **Ticker** | 18 | Overflow, draggable, text hover effect |
| **Base UI** | 13 | Accordion, checkbox, dialog, menu, select, tabs, toast |
| **Radix** | 30 | Radix primitives with motion animations |

## How to Use

### 1. Scrape Examples

Use the scraper script to fetch example source code:

```bash
node website-generator/integrations/motion/scraper.mjs <example-slug>
# Example:
node website-generator/integrations/motion/scraper.mjs react-scroll-zoom-hero
node website-generator/integrations/motion/scraper.mjs react-typewriter
node website-generator/integrations/motion/scraper.mjs react-confetti
```

### 2. Browse & Search

Visit [motion.dev/examples](https://motion.dev/examples) and search by:
- Category (scroll, text, carousel, buttons, etc.)
- Platform (React, JavaScript, Vue)
- Keywords (parallax, typewriter, modal, etc.)

### 3. Tell the LLM

When generating a site, tell the LLM:

```
"Use motion.dev for animations. Scrape the 'react-scroll-zoom-hero' example for the hero section."
"Add a typewriter effect using motion.dev's react-typewriter example."
"Use motion.dev carousel examples for the product showcase."
```

## Motion MCP Server (Motion+ Members)

If you have Motion+, you can use the MCP server to pull examples directly into your project:

```json
{
  "servers": {
    "motion": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@motiondev/mcp@latest"],
      "env": {
        "MOTION_API_KEY": "<your-motion-plus-key>"
      }
    }
  }
}
```

## Top Examples for Website Generation

### Hero Sections
- `react-hero-stagger` — Staggered hero entrance
- `react-scroll-zoom-hero` — Scroll-based zoom hero
- `react-parallax` — Parallax hero background

### Text Animations
- `react-typewriter` — Typewriter effect
- `react-split-text` — Split text reveal
- `react-split-text-wavy` — Wavy text animation
- `react-scramble-text` — Scramble text on hover

### Scroll Effects
- `react-scroll-hide-header` — Hide header on scroll
- `react-scroll-horizontal` — Horizontal scroll gallery
- `react-scroll-image-reveal` — Image reveal on scroll
- `react-scroll-text-lines` — Text lines scroll effect

### Loading States
- `react-skeleton-shimmer` — Skeleton loading shimmer
- `react-loading-circle-spinner` — Circle spinner
- `react-loading-jumping-dots` — Jumping dots
- `react-infinite-loading` — Infinite scroll loading

### Interactive Elements
- `react-tilt-card` — 3D tilt on hover
- `react-cursor-magnetic` — Magnetic cursor target
- `react-confetti` — Confetti celebration
- `react-toast-stack` — Stacked notifications

### Navigation
- `react-mega-menu` — Mega menu with animations
- `react-command-palette` — Command palette
- `react-context-menu` — Context menu
- `react-smooth-tabs` — Smooth animated tabs

## Installation

```bash
npm install motion
```

## Basic Usage

```tsx
import { motion } from "motion/react"

// Simple animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Hello World
</motion.div>

// Stagger children
<motion.div
  variants={{
    container: { transition: { staggerChildren: 0.1 } }
  }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        item: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
      }}
    >
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

## Integration with Impeccable

Impeccable's `animate` command works with Motion to ensure animations follow best practices:
- No bounce/elastic easing (use exponential curves)
- No CSS layout property animation
- Purposeful motion, not decorative

```
/impeccable animate  # Review and refine all animations
```
