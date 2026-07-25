/**
 * GSAP Animation Library Integration
 *
 * Integrates GSAP (GreenSock Animation Platform) into the website generator
 * for scroll-driven animations, sticky-stacks, horizontal-pan, and more.
 *
 * Source: https://github.com/greensock/gsap
 */

export const GSAP_VERSION = '^3.12';

/**
 * Build the GSAP prompt section for the system prompt.
 */
export function buildGsapContext(): string {
  return `
## GSAP Animation Library (Available)
GSAP is available for advanced scroll-driven animations. Use it for:
- **ScrollTrigger:** Pin sections, scrub animations on scroll, trigger reveals
- **Sticky-Stack:** Cards that stack on scroll (pin at viewport top)
- **Horizontal-Pan:** Scroll-hijack for horizontal scrolling sections
- **Timeline sequences:** Orchestrated multi-step animations

### When to Use GSAP vs Motion
| Use Case | Library |
|----------|---------|
| Simple scroll-reveal (fade in, slide up) | Motion \`whileInView\` |
| Hover/tap micro-interactions | Motion |
| Spring physics, drag | Motion |
| Pin/scrub scroll effects | GSAP ScrollTrigger |
| Horizontal scroll hijack | GSAP ScrollTrigger |
| Sticky card stacks | GSAP ScrollTrigger |
| Complex timeline sequences | GSAP |
| Text split animations | GSAP SplitText |

### Import Pattern
\`\`\`jsx
"use client";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
\`\`\`

### Critical Rules
- Always \`"use client"\` for GSAP components
- Always cleanup: \`const ctx = gsap.context(() => { ... }, ref); return () => ctx.revert();\`
- Pin triggers: use \`start: "top top"\` for viewport-top pinning
- Respect \`prefers-reduced-motion\`: check with \`useReducedMotion()\` from Motion
- Never animate \`width\`, \`height\`, \`top\`, \`left\` — use \`transform\` and \`opacity\`

### Sticky-Stack Pattern
\`\`\`jsx
ScrollTrigger.create({
  trigger: card,
  start: "top top",
  pin: true,
  pinSpacing: false,
});
\`\`\`

### Lenis + GSAP Sync (when smooth scroll is active)
\`\`\`jsx
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
\`\`\`
`;
}
