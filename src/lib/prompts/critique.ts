export const critiquePrompt = `
# 5-Dimensional Critique — Self-Review Before Shipping

Score each dimension 1-10. Any score below 7 requires fixes.

## Dimensions

### 1. Philosophy (Brand Alignment)
- Does the design match the stated brief and audience?
- Is there a clear point of view, or is it generic AI output?
- Fix: \`impeccable bolder\` to strengthen voice, \`quieter\` to reduce noise

### 2. Hierarchy (Visual Clarity)
- Can you instantly tell what's most important?
- Is there clear visual flow (top → bottom, primary → secondary)?
- Fix: \`impeccable layout\` to restructure, \`typeset\` for typography

### 3. Detail (Craft Quality)
- Are edge cases handled? (empty states, long text, mobile)
- Consistent spacing, alignment, border radii?
- Fix: \`impeccable polish\` for refinement, \`harden\` for edge cases

### 4. Function (Usability & Accessibility)
- Keyboard navigation works?
- Color contrast passes WCAG AA?
- Semantic HTML, ARIA labels, focus states?
- Fix: \`impeccable audit\` for accessibility, \`adapt\` for responsiveness

### 5. Innovation (Memorability)
- Is there something unexpected or delightful?
- Would this stand out from competitors?
- Fix: \`impeccable delight\` for micro-interactions, \`overdrive\` for boldness

## Scoring
- 8-10: Ship it
- 6-7: Fix before shipping
- Below 6: Major rework needed

## Anti-Patterns to Avoid
- Generic hero with gradient background + centered text
- Lorem ipsum placeholder text
- Stock-looking imagery
- Inconsistent spacing (mixing 16px, 24px, 32px randomly)
- No mobile consideration
- Missing hover/focus states on interactive elements
`;
