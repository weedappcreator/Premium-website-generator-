/**
 * Lenis Smooth Scroll Integration
 *
 * Integrates Lenis (darkroomengineering/lenis) smooth scroll library
 * into the website generator as an available tool for generated websites.
 *
 * Source: https://github.com/darkroomengineering/lenis
 */

export const LENIS_VERSION = '^1.1';

/**
 * Lenis initialization snippet for generated websites.
 * This is injected into App.jsx when smooth scroll is requested.
 */
export const LENIS_REACT_SNIPPET = `
import { ReactLenis } from 'lenis/react';

function SmoothScrollProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
`;

/**
 * Lenis + GSAP ScrollTrigger integration snippet.
 * Required when using GSAP animations with Lenis smooth scroll.
 */
export const LENIS_GSAP_SNIPPET = `
import { useEffect } from 'react';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function useLenisGsap() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(lenis.raf);
    };
  }, [lenis]);
}
`;

/**
 * CSS styles recommended when using Lenis.
 */
export const LENIS_CSS = `
/* Lenis smooth scroll base styles */
html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
`;

/**
 * Build the Lenis prompt section for the system prompt.
 */
export function buildLenisContext(): string {
  return `
## Smooth Scroll — Lenis Integration
When a user requests smooth scrolling, parallax effects, or premium scroll behavior, use **Lenis** (from \`lenis/react\`).

### Setup Pattern
1. Wrap the app in \`<ReactLenis root>\` provider
2. Configure with: \`lerp: 0.1, duration: 1.2, smoothWheel: true\`
3. If using GSAP ScrollTrigger, sync via \`lenis.on('scroll', ScrollTrigger.update)\`

### When to Use Lenis
- User asks for "smooth scroll", "buttery scroll", "premium feel"
- Agency/portfolio sites where scroll experience matters (MOTION_INTENSITY > 5)
- Scroll-driven animations that benefit from interpolated scroll position
- Parallax effects

### When NOT to Use Lenis
- Simple landing pages with no scroll effects
- Dashboard/product UI (MOTION_INTENSITY < 4)
- Accessibility-first sites (smooth scroll can cause discomfort)
- Always respect \`prefers-reduced-motion\` — disable Lenis when reduced motion is preferred

### Available Import
\`\`\`jsx
import { ReactLenis, useLenis } from 'lenis/react';
\`\`\`

### GSAP + Lenis Sync (when both are used)
\`\`\`jsx
const lenis = useLenis();
useEffect(() => {
  if (!lenis) return;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}, [lenis]);
\`\`\`
`;
}
