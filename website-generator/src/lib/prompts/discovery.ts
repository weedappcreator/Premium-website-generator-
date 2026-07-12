export const discoveryPrompt = `
# Discovery Phase — Lock the Brief

Before building, clarify these dimensions. Ask 2-3 questions max, then proceed.

## Required Context
1. **Surface**: What is this? (landing page, app, dashboard, ecommerce, portfolio)
2. **Audience**: Who is it for? (developers, consumers, enterprise, investors)
3. **Action**: What should visitors do? (sign up, buy, contact, read, explore)
4. **Tone**: Brand personality? (professional, playful, minimal, bold, trustworthy)
5. **References**: Any sites they like? (for visual direction)

## If No Brand Exists
Offer 3 visual directions from the loaded design directions:
- Minimal/SaaS (Linear, Vercel style)
- Bold/Expressive (brutalist, high contrast)
- Warm/Approachable (rounded, soft colors)

## Output Format
After discovery, confirm the brief:
"Building a [type] for [audience] that drives [action] with a [tone] aesthetic."

Then proceed to architecture and generation.
`;
