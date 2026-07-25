/**
 * Taste Skill — Anti-Slop Design Intelligence Integration
 *
 * Integrates the taste-skill framework's 3-dial system, design engineering
 * directives, and anti-slop patterns into the website generator's prompt pipeline.
 *
 * Source: https://github.com/darkroomengineering/taste-skill (tasteskill.dev)
 */

export interface DesignDials {
  DESIGN_VARIANCE: number; // 1-10: 1 = Perfect Symmetry, 10 = Artsy Chaos
  MOTION_INTENSITY: number; // 1-10: 1 = Static, 10 = Cinematic / Physics
  VISUAL_DENSITY: number;   // 1-10: 1 = Art Gallery / Airy, 10 = Cockpit / Packed
}

const DIAL_PRESETS: Record<string, DesignDials> = {
  'landing-saas': { DESIGN_VARIANCE: 7, MOTION_INTENSITY: 6, VISUAL_DENSITY: 4 },
  'landing-agency': { DESIGN_VARIANCE: 9, MOTION_INTENSITY: 8, VISUAL_DENSITY: 3 },
  'landing-premium': { DESIGN_VARIANCE: 7, MOTION_INTENSITY: 6, VISUAL_DENSITY: 3 },
  'portfolio-designer': { DESIGN_VARIANCE: 8, MOTION_INTENSITY: 7, VISUAL_DENSITY: 3 },
  'portfolio-developer': { DESIGN_VARIANCE: 6, MOTION_INTENSITY: 5, VISUAL_DENSITY: 4 },
  'editorial-blog': { DESIGN_VARIANCE: 6, MOTION_INTENSITY: 4, VISUAL_DENSITY: 3 },
  'public-sector': { DESIGN_VARIANCE: 3, MOTION_INTENSITY: 2, VISUAL_DENSITY: 5 },
  'ecommerce': { DESIGN_VARIANCE: 6, MOTION_INTENSITY: 5, VISUAL_DENSITY: 5 },
  'dashboard': { DESIGN_VARIANCE: 4, MOTION_INTENSITY: 3, VISUAL_DENSITY: 7 },
  'default': { DESIGN_VARIANCE: 8, MOTION_INTENSITY: 6, VISUAL_DENSITY: 4 },
};

/**
 * Infer design dials from user prompt signals.
 */
export function inferDesignDials(userMessage: string): DesignDials {
  const msg = userMessage.toLowerCase();

  if (msg.includes('minimalist') || msg.includes('clean') || msg.includes('calm') || msg.includes('linear'))
    return { DESIGN_VARIANCE: 5, MOTION_INTENSITY: 3, VISUAL_DENSITY: 2 };
  if (msg.includes('premium') || msg.includes('luxury') || msg.includes('apple'))
    return DIAL_PRESETS['landing-premium'];
  if (msg.includes('playful') || msg.includes('wild') || msg.includes('awwwards') || msg.includes('experimental') || msg.includes('agency'))
    return DIAL_PRESETS['landing-agency'];
  if (msg.includes('trust') || msg.includes('public') || msg.includes('government') || msg.includes('regulated'))
    return DIAL_PRESETS['public-sector'];
  if (msg.includes('dashboard') || msg.includes('admin'))
    return DIAL_PRESETS['dashboard'];
  if (msg.includes('ecommerce') || msg.includes('shop') || msg.includes('store'))
    return DIAL_PRESETS['ecommerce'];
  if (msg.includes('portfolio'))
    return msg.includes('design') ? DIAL_PRESETS['portfolio-designer'] : DIAL_PRESETS['portfolio-developer'];
  if (msg.includes('blog') || msg.includes('editorial'))
    return DIAL_PRESETS['editorial-blog'];
  if (msg.includes('saas'))
    return DIAL_PRESETS['landing-saas'];

  return DIAL_PRESETS['default'];
}

/**
 * Build the taste-skill design intelligence prompt section.
 * This injects the 3-dial system and anti-slop rules into the generation prompt.
 */
export function buildTasteSkillContext(userMessage: string): string {
  const dials = inferDesignDials(userMessage);

  return `
## TASTE SKILL — ANTI-SLOP DESIGN INTELLIGENCE

### Design Read
Before generating any code, state a one-line "Design Read":
"Reading this as: <page kind> for <audience>, with a <vibe> language, leaning toward <design system or aesthetic family>."

### Three Dials (Active Configuration)
These dials control ALL layout, motion, and density decisions:
- **DESIGN_VARIANCE: ${dials.DESIGN_VARIANCE}** (1=Symmetry, 10=Chaos)
- **MOTION_INTENSITY: ${dials.MOTION_INTENSITY}** (1=Static, 10=Cinematic)
- **VISUAL_DENSITY: ${dials.VISUAL_DENSITY}** (1=Airy, 10=Packed)

### Anti-Default Discipline
Do NOT default to: AI-purple gradients, centered hero over dark mesh, three equal feature cards, generic glassmorphism everywhere, infinite micro-animations, Inter + slate-900.

### Typography Anti-Slop
- **Sans default:** Geist, Outfit, Cabinet Grotesk, Satoshi — NOT Inter (unless explicitly requested)
- **Serif is VERY DISCOURAGED as default.** Only use when brief explicitly names a serif or is genuinely editorial/luxury/heritage
- **BANNED as defaults:** Fraunces, Instrument_Serif
- Font pairings: Geist + Geist Mono, Satoshi + JetBrains Mono, Cabinet Grotesk + Inter Tight

### Color Calibration
- Max 1 accent color. Saturation < 80% default.
- **THE LILA RULE:** AI Purple/Blue glow is discouraged. Use neutral bases (Zinc/Slate/Stone) with singular accents.
- **COLOR CONSISTENCY LOCK:** Once accent chosen, use on WHOLE page. No switching.
- **PREMIUM-CONSUMER PALETTE BAN:** beige/cream + brass/clay/oxblood/ochre banned as default. Alternatives: Cold Luxury, Forest, Black and Tan, Cobalt + Cream, Terracotta + Slate.

### Layout Discipline (Hard Rules)
- **Hero MUST fit initial viewport.** Headline max 2 lines desktop, subtext max 20 words, CTAs visible without scroll.
- **ANTI-CENTER BIAS:** Centered hero avoided when DESIGN_VARIANCE > 4. Use Split Screen, left-aligned, asymmetric.
- **Navigation single line on desktop.** Max height 80px, default 64-72px.
- **Section-Layout-Repetition Ban:** Each layout family used at most ONCE per page.
- **ZIGZAG ALTERNATION CAP:** Max 2 consecutive image+text splits before breaking pattern.
- **EYEBROW RESTRAINT:** Max 1 eyebrow per 3 sections. No eyebrow on every section.
- **SPLIT-HEADER BAN:** Left headline + right paragraph layout banned as default. Stack vertically.
- **Page Theme Lock:** ONE theme per page. No random section inversions.

### Interactive States (mandatory)
- Loading: skeletal loaders matching layout shape
- Empty states: beautifully composed, indicate how to populate
- Error states: clear, inline for forms
- **BUTTON CONTRAST CHECK:** Verify text readable against button bg. WCAG AA min.
- **CTA BUTTON WRAP BAN:** Button text fits one line at desktop. Max 3 words for primary CTAs.
- **NO DUPLICATE CTA INTENT:** "Get in touch" + "Contact us" + "Let's talk" = same intent = pick ONE.

### Content Density
- Default per section: short headline (≤8 words) + sub-paragraph (≤25 words) + one visual/CTA.
- **Quotes max 3 lines.** Attribution: name + role + company.
- **Copy self-audit before ship:** Check every visible string for grammar, unclear referents, AI hallucination.
- **Fake-precise numbers banned.** 92%, 4.1x, 48k must come from real data or be labeled mock.

### Motion Rules (when MOTION_INTENSITY > ${dials.MOTION_INTENSITY > 4 ? '4 — ACTIVE' : '4 — MINIMAL'})
${dials.MOTION_INTENSITY > 4 ? `- Page MUST actually move: entry transitions on hero, scroll-reveal on key sections, hover physics on CTAs.
- Use Motion (from "motion/react") for scroll-reveal via whileInView.
- Use GSAP ScrollTrigger only for pin/scrub effects (sticky-stack, horizontal-pan).
- **MARQUEE MAX ONE PER PAGE.**
- **MOTION MUST BE MOTIVATED:** Each animation must communicate hierarchy, storytelling, feedback, or state transition.
- Honor prefers-reduced-motion. NON-NEGOTIABLE.` : `- Keep motion minimal: 150-250ms transitions for state changes only.
- No scroll-driven animations, no parallax, no magnetic physics.
- prefers-reduced-motion still honored.`}

### Image Strategy
- **Image-generation tool first** (Higgsfield) for section-specific assets.
- **Real web images second** (picsum.photos with descriptive seeds).
- **Hero needs a real visual.** Text + gradient blob is not a hero.
- **Div-based fake screenshots BANNED.**
- **Logo walls:** Use real SVGs from Simple Icons CDN. No plain text wordmarks. LOGO-ONLY, no category labels.

### Shape Consistency Lock
Pick ONE corner-radius scale and stick to it: all-sharp (0), all-soft (12-16px), or all-pill (full radius). Mixed systems only with documented rule.
`;
}
