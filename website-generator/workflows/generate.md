# Website Generation Workflow

## Phase 1: Discovery

1. Read `prompts/discovery.md`
2. Lock the brief — surface, audience, tone, brand context, scale
3. If no brand exists → offer 5 visual directions from `integrations/design-directions/DIRECTIONS.md`
4. Document requirements and confirm with client

## Phase 2: Architecture

1. Read `prompts/architecture.md`
2. Plan site structure, pages, and component hierarchy
3. Choose tech stack from `techstacks/` based on requirements
4. List required integrations from `integrations/`
5. If client references a known product → check `integrations/design-systems/CATALOG.md`

## Phase 3: Skill Selection

Load the matching skill from `skills/`:

| Website Type | Skill File |
|---|---|
| Landing page | `skills/landing-page/SKILL.md` |
| E-commerce | `skills/ecommerce/SKILL.md` |
| Portfolio | `skills/portfolio/SKILL.md` |
| SaaS product | `skills/saas/SKILL.md` |
| Blog/content | `skills/blog/SKILL.md` |
| Agency site | `skills/agency/SKILL.md` |
| Pricing page | `skills/pricing-page/SKILL.md` |
| Dashboard | `skills/dashboard/SKILL.md` |
| Documentation | `skills/docs-page/SKILL.md` |

## Phase 4: Generation

Follow this order:

1. **Project setup** — Initialize project with chosen tech stack
2. **Design direction** — Bind chosen direction's palette + fonts into `:root` (from `integrations/design-directions/`)
3. **Layout & routing** — Create page structure
4. **Components** — Build reusable UI components (use 21st.dev Magic for polished components)
5. **Styling** — Apply design system / theme
6. **Media** — Generate images, video using Higgsfield (see `integrations/higgsfield/INTEGRATION.md`)
7. **Animations** — Add motion using Motion.dev examples (see `integrations/motion/CATALOG.md`)
8. **Content** — Add placeholder or real content
9. **Integrations** — Connect third-party services
10. **SEO** — Add meta tags, structured data, sitemap
11. **Performance** — Optimize images, lazy loading, caching

### Animation Selection Guide

When adding animations, consult `integrations/motion/CATALOG.md` and pick from:

| Page Element | Recommended Motion Examples |
|---|---|
| Hero section | `react-hero-stagger`, `react-scroll-zoom-hero`, `react-parallax` |
| Text headings | `react-typewriter`, `react-split-text`, `react-scramble-text` |
| Feature cards | `react-tilt-card`, `react-card-stack`, `react-staggered-grid` |
| Loading states | `react-skeleton-shimmer`, `react-loading-jumping-dots` |
| Navigation | `react-mega-menu`, `react-smooth-tabs`, `react-command-palette` |
| Testimonials | `react-carousel`, `react-toast-stack` |
| CTAs/Buttons | `react-confetti`, `react-floating-action-button`, `react-hold-to-confirm` |
| Forms | `react-characters-remaining`, `react-number-counter` |
| Scroll effects | `react-scroll-hide-header`, `react-scroll-image-reveal` |

To scrape an example's source code:
```bash
node integrations/motion/scraper.mjs <example-slug>
```

## Phase 5: Critique (5-Dimensional Review)

Run the self-review from `skills/critique/SKILL.md`. Score each dimension 1–10:

| Dimension | What It Checks | Fix Command |
|---|---|---|
| **Philosophy** | Brand alignment, no AI slop | `impeccable bolder` / `quieter` |
| **Hierarchy** | Visual clarity, information flow | `impeccable layout` / `typeset` |
| **Detail** | Craft quality, edge cases | `impeccable polish` / `harden` |
| **Function** | Usability, accessibility | `impeccable audit` / `adapt` |
| **Innovation** | Memorability, differentiation | `impeccable delight` / `overdrive` |

**Any score below 7 → fix before shipping.**

## Phase 6: Impeccable Polish

1. Run `impeccable audit` — catch anti-patterns automatically
2. Run `impeccable polish` — final quality pass
3. Run `npx impeccable detect <path>` — deterministic anti-pattern scan
4. Fix any issues found

## Phase 7: Delivery

1. Provide deployment instructions
2. List environment variables needed
3. Document any manual configuration required
4. Show device frame previews (from `integrations/device-frames/FRAMES.md`)
