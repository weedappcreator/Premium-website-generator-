---
name: critique
description: Five-dimensional design self-critique framework. Use after generating any website to evaluate quality before delivery. Scores: Philosophy, Hierarchy, Detail, Function, Innovation.
---

# 5-Dimensional Design Critique

From [Open Design](https://github.com/nexu-io/open-design). Run this self-review after generating a website to catch quality issues before delivery.

## How It Works

Score each dimension 1–10. Any score below 7 requires a fix before shipping.

---

## 1. Philosophy (Brand Alignment)

**Question**: Does the design reflect a clear, coherent aesthetic philosophy?

**Check**:
- [ ] Can you name the design direction (Editorial, Minimal, Brutalist, etc.)?
- [ ] Is the direction consistent across all pages and components?
- [ ] Does it avoid "AI slop" — generic gradients, Inter font, purple-to-blue?
- [ ] Would someone recognize this design from its category alone? (If yes, it's too generic)
- [ ] Does it avoid the first-order reflex (category → predictable palette)?
- [ ] Does it avoid the second-order reflex (category + anti-reference → predictable alternative)?

**Score**: ___/10

---

## 2. Hierarchy (Information Architecture)

**Question**: Is the visual hierarchy clear and intentional?

**Check**:
- [ ] Can you identify the most important element on each page in under 2 seconds?
- [ ] Does the eye flow naturally from headline → subheadline → CTA?
- [ ] Are heading sizes meaningfully different (≥1.25 ratio between steps)?
- [ ] Is there a clear primary action on every page?
- [ ] Are secondary actions visually subordinate?
- [ ] Is whitespace used to separate sections, not just borders?
- [ ] Body text line length ≤ 75 characters?

**Score**: ___/10

---

## 3. Detail (Craft Quality)

**Question**: Are the small things done right?

**Check**:
- [ ] No pure black (#000) or pure white (#fff) — all neutrals are tinted?
- [ ] OKLch color space used (not HSL/RGB for design decisions)?
- [ ] Consistent spacing scale (not random pixel values)?
- [ ] Hover states on all interactive elements?
- [ ] Focus states visible for keyboard navigation?
- [ ] Loading states for async operations?
- [ ] Error states for forms?
- [ ] Empty states for lists/tables?
- [ ] No em dashes in copy?
- [ ] No side-stripe borders (>1px accent border on cards)?
- [ ] No gradient text (background-clip: text with gradient)?
- [ ] No glassmorphism as default?
- [ ] No modal as first thought?

**Score**: ___/10

---

## 4. Function (Usability)

**Question**: Does it work well for the user?

**Check**:
- [ ] All links and buttons are clickable (min 44×44px touch targets)?
- [ ] Forms have proper labels, validation, and error messages?
- [ ] Navigation is clear and consistent?
- [ ] Content is scannable (headings, bullets, short paragraphs)?
- [ ] Works on mobile (responsive breakpoints tested)?
- [ ] Works on tablet (intermediate breakpoints)?
- [ ] Page loads in under 2 seconds?
- [ ] Images are optimized (WebP, lazy loading)?
- [ ] SEO meta tags present (title, description, OG, Twitter)?
- [ ] Accessible (WCAG 2.1 AA contrast ratios)?

**Score**: ___/10

---

## 5. Innovation (Differentiation)

**Question**: Is there something memorable about this design?

**Check**:
- [ ] Is there ONE thing someone will remember about this site?
- [ ] Does it do something unexpected (layout, animation, interaction)?
- [ ] Does it avoid the "card grid of icon + heading + text" template?
- [ ] Does it avoid the "hero-metric template" (big number, small label, stats)?
- [ ] Does it use animation purposefully, not decoratively?
- [ ] Does it have a unique voice in its copy?
- [ ] Would this design stand out among 10 competitor sites?

**Score**: ___/10

---

## Scoring Guide

| Total Score | Verdict | Action |
|---|---|---|
| 45–50 | Exceptional | Ship immediately |
| 35–44 | Strong | Minor tweaks, then ship |
| 25–34 | Adequate | Fix dimensions below 7 |
| 15–24 | Weak | Major revision needed |
| 5–14 | Poor | Start over with different direction |

## Fix Protocol

For any dimension scoring below 7:

1. **Identify** the specific failing checks
2. **Apply** the relevant Impeccable command:
   - Philosophy → `impeccable bolder` or `impeccable quieter`
   - Hierarchy → `impeccable layout` or `impeccable typeset`
   - Detail → `impeccable polish` or `impeccable harden`
   - Function → `impeccable audit` or `impeccable adapt`
   - Innovation → `impeccable delight` or `impeccable overdrive`
3. **Re-score** after fixes
4. **Ship** when all dimensions ≥ 7
