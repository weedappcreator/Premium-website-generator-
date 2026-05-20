# Website Generator — LLM-Agnostic Project

> **For any LLM**: Read this file first. Then follow the workflow in `workflows/generate.md`.

## What This Is

A structured knowledge base that any LLM (Claude, GPT, Gemini, local models, etc.) can load to generate production-ready websites from client briefs.

## How to Use

1. Read `prompts/discovery.md` to lock the client brief
2. Pick a visual direction from `integrations/design-directions/`
3. Load the relevant skill from `skills/` based on website type
4. Select tech stack from `techstacks/`
5. Add integrations from `integrations/` as needed
6. Run `workflows/generate.md` for the step-by-step process

## Project Structure

```
website-generator/
├── README.md              ← You are here
├── workflows/
│   └── generate.md        ← Step-by-step generation process
├── skills/                ← Website type specializations
│   ├── landing-page/      ← High-converting landing pages
│   ├── ecommerce/         ← Online stores
│   ├── portfolio/         ← Personal/portfolio sites
│   ├── saas/              ← SaaS product marketing
│   ├── blog/              ← Content/blog sites
│   ├── agency/            ← Agency/consulting sites
│   ├── pricing-page/      ← Conversion-optimized pricing
│   ├── dashboard/         ← Admin/analytics dashboards
│   ├── docs-page/         ← Developer documentation
│   ├── frontend-design/   ← Anthropic: bold aesthetic direction
│   ├── impeccable/        ← Design quality engine (23 commands)
│   └── critique/          ← 5-dimensional self-review framework
├── integrations/          ← Third-party services + design systems
│   ├── auth/              ← Clerk, Supabase, Auth0, NextAuth
│   ├── payment/           ← Stripe, PayPal, LemonSqueezy
│   ├── analytics/         ← GA4, Plausible, PostHog
│   ├── cms/               ← Sanity, Contentful, MDX
│   ├── email/             ← Resend, SendGrid, Mailchimp
│   ├── crm/               ← HubSpot, Pipedrive
│   ├── seo/               ← Meta tags, schema, sitemap
│   ├── social/            ← Sharing, feeds, testimonials
│   ├── component-library/ ← 21st.dev Magic: component generation
│   ├── motion/            ← Motion.dev: 374+ animation examples
│   ├── design-directions/ ← 5 visual schools with OKLch palettes
│   ├── design-systems/    ← 152 brand-grade design systems
│   ├── device-frames/     ← iPhone, Pixel, iPad, MacBook frames
│   └── higgsfield/          ← AI media generation (images, video)
├── techstacks/            ← Framework options
│   ├── nextjs/
│   ├── react/
│   ├── astro/
│   ├── vanilla/
│   ├── nuxt/
│   └── remix/
├── prompts/               ← Prompt templates
│   ├── discovery.md       ← Client brief-locking protocol
│   ├── architecture.md    ← Site structure planning
│   └── generation.md      ← Code generation prompts
└── templates/             ← Base templates
    ├── base/
    ├── components/
    └── layouts/
```

## Quick Start

```
Client says: "I need a landing page for my SaaS product"
→ Run: prompts/discovery.md (lock the brief)
→ Pick: integrations/design-directions/ (choose visual direction)
→ Load: skills/landing-page/SKILL.md
→ Load: techstacks/nextjs/STACK.md
→ Run: workflows/generate.md
→ Use: 21st.dev Magic for polished components
→ Use: Motion.dev for animations
→ Run: skills/critique/ (5-dimensional review)
→ Run: impeccable audit + polish
```

## Visual Directions (Open Design)

When the client has no brand, pick ONE of 18 curated schools. Each ships a CSS-ready OKLch palette + font stack.

| Direction | Best For | Example |
|---|---|---|
| **Editorial Monocle** | Publishing, luxury, culture | Monocle, FT Weekend |
| **Modern Minimal** | SaaS, dev tools, startups | Linear, Vercel |
| **Human Approachable** | Consumer, marketplace, education | Airbnb, Duolingo |
| **Tech Utility** | Dashboards, admin, data tools | Datadog, GitHub |
| **Brutalist Experimental** | Art, agency, creative portfolios | Are.na, mschf |
| **Dark Mode Native** | Dev tools, creative software, crypto | Raycast, Arc |
| **Swiss International** | Architecture, museums, design studios | Pentagram, Herzog & de Meuron |
| **Japanese Minimal** | Wellness, mindfulness, artisan | Muji, Nendo |
| **Neobrutalism** | Startups, creator tools, indie | Gumroad, Figma |
| **Glassmorphism** | Consumer apps, fintech, premium SaaS | Apple iOS, macOS |
| **Corporate Enterprise** | B2B SaaS, consulting, finance | IBM, Salesforce |
| **Playful Memphis** | Consumer apps, education, social | Google, Slack |
| **Nordic / Scandinavian** | Lifestyle, furniture, sustainability | Spotify, &Tradition |
| **Cyberpunk / Neon** | Gaming, crypto, AI, cybersecurity | Cyberpunk 2077 UI |
| **Art Deco / Luxury** | Jewelry, hotels, fashion, premium | Cartier, Four Seasons |
| **Organic / Natural** | Sustainable, organic, wellness | Patagonia, Allbirds |
| **Gradient Tech** | SaaS startups, AI, fintech | Stripe, Supabase |
| **Bento Grid** | Product showcases, Apple-style | Apple product pages |

**Full specs**: `integrations/design-directions/DIRECTIONS.md`

## Design Systems (Open Design)

152 brand-grade design systems available. When a client says "make it look like X", load that system.

**Top picks**: Linear, Vercel, Stripe, Notion, Airbnb, Apple, Supabase, Arc

**Full catalog**: `integrations/design-systems/CATALOG.md`

## Component Generation: 21st.dev Magic

MCP server configured in `.vscode/mcp.json` — like v0 but inside your IDE.

- **Pre-built professional components** — navbars, hero sections, pricing tables, testimonials, footers, forms, cards, modals
- **Multiple design styles** — minimal, glassmorphism, brutalist, editorial, gradient, dark mode
- **Framework support** — React, Next.js, Tailwind CSS, shadcn/ui
- **SVGL integration** — professional brand logos and icons

**Usage**: Tell the LLM "Use 21st.dev Magic to create a [component type]"

## Animation Library: Motion.dev

374+ production-ready animation examples with scraper.

- **Scrape any example**: `node integrations/motion/scraper.mjs <slug>`
- **Browse the catalog**: `integrations/motion/CATALOG.md`
- **Install**: `npm install motion`

**Top picks**: `react-scroll-zoom-hero`, `react-typewriter`, `react-tilt-card`, `react-confetti`, `react-skeleton-shimmer`

## AI Media Generation: Higgsfield

Generate professional images and videos for websites. 100+ models including Flux Pro, Soul 2.0, DoP video.

- **Images** — Hero images, product photos, backgrounds (Flux Pro Kontext)
- **Video** — Cinematic hero backgrounds from static images (DoP model)
- **Motion control** — Precise camera movement (zoom, pan, orbit)
- **Character consistency** — Soul ID for consistent characters

**Setup**:
```bash
export HIGGSFIELD_KEY_ID="your-id"
export HIGGSFIELD_KEY_SECRET="your-secret"
```

**Usage**:
```bash
node integrations/higgsfield/higgsfield.mjs image "modern SaaS dashboard" --aspect-ratio 16:9
node integrations/higgsfield/higgsfield.mjs video "cinematic zoom" --image-url <url>
```

**Full docs**: `integrations/higgsfield/INTEGRATION.md`

## Design Quality Stack

### 1. Frontend Design (Anthropic)
**Role**: Creative direction during generation — commits to BOLD aesthetic choices.

### 2. Impeccable (Paul Bakaus)
**Role**: Quality control after generation — 23 commands, 27 anti-pattern rules.

### 3. 5-Dimensional Critique (Open Design)
**Role**: Self-review before shipping — scores Philosophy, Hierarchy, Detail, Function, Innovation.

**Workflow**: `frontend-design` sets vision → generate → `critique` reviews → `impeccable` polishes → ship

## Rules for Any LLM

1. **Lock the brief first** — read `prompts/discovery.md`, confirm with client
2. **Pick a visual direction** — never improvise a brand, use the 5 schools
3. **Load the matching skill** — for the website type
4. **Generate incrementally** — structure → components → styling → animations → integrations
5. **Run the critique** — 5-dimensional review before shipping
6. **Run impeccable audit** — catch anti-patterns, polish, ship
