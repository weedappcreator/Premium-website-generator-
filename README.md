<p align="center">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/AI_Powered-Gemini%20%7C%20Claude%20%7C%20GPT-FF6F00?style=flat-square" alt="AI Powered" />
  <img src="https://img.shields.io/badge/License-Private-red?style=flat-square" alt="License" />
</p>

<h1 align="center">Premium Website Generator</h1>

<p align="center">
  <strong>AI-powered website builder that generates $5,000+ quality websites with integrated design intelligence.</strong>
</p>

<p align="center">
  Chat with AI. Get production-ready, premium websites. <br/>
  Not templates. Not AI slop. Real design-studio quality.
</p>

---

## What This Is

An AI website generator that produces work indistinguishable from top design agencies. It combines **6 world-class design intelligence systems** into a single generation engine:

| Source | What It Provides |
|--------|-----------------|
| [Impeccable](https://github.com/pbakaus/impeccable) | Design register system, typography rules, color strategies, motion principles, absolute bans |
| [Awesome Design MD](https://github.com/voltagent/awesome-design-md) | 73 real brand design systems (Stripe, Apple, Linear, Nike, etc.) |
| [Anthropic Frontend Design](https://github.com/anthropics/skills) | Anti-AI-default patterns, two-pass design workflow, critique system |
| [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines) | Accessibility, forms, animation, performance, dark mode rules |
| [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 50+ styles, 161 palettes, 57 font pairings, 99 UX guidelines |
| [Intopia Accessibility](https://github.com/Intopia/intopia-web-accessibility-skill) | WCAG 2.2 AA compliance, component-level acceptance criteria |

---

## How It Works

```
User Brief ──> AI Design Engine ──> Production-Ready Website
                    │
                    ├── Identifies design register (Brand vs Product)
                    ├── Names a real visual reference before coding
                    ├── Selects typography from curated catalogs (not AI defaults)
                    ├── Picks a named color strategy (Restrained/Committed/Full/Drenched)
                    ├── Applies motion intentionally (not scattered)
                    ├── Enforces WCAG 2.2 AA accessibility
                    ├── Runs 12-point quality gate before presenting
                    └── Rejects AI-tell patterns (cream backgrounds, gradient text, card grids...)
```

### The Anti-Slop System

The generator actively blocks the patterns that make AI-generated sites look generic:

- **Banned fonts**: Fraunces, Playfair Display, Inter, DM Sans, Space Grotesk + 15 more training-data defaults
- **Banned patterns**: gradient text, glassmorphism, identical card grids, eyebrow labels on every section, numbered section markers, hero-metric templates
- **Banned colors**: cream/sand/beige backgrounds (the #1 AI default of 2026)
- **Required**: Named design direction, contrast verification, all interaction states, reduced-motion support

---

## Features

- **Multi-LLM Support** — Works with Claude, GPT, Gemini, DeepSeek, Ollama (local), and 175+ models via OpenCode
- **Live Preview** — Real-time rendering in a sandboxed iframe with Babel JSX compilation
- **Virtual File System** — In-memory file management with full create/edit/rename/delete
- **73 Brand References** — Generate sites inspired by Apple, Stripe, Linear, Nike, Ferrari, Spotify, and more
- **Figma Import** — Pull designs directly from Figma into the generator
- **Media Generation** — AI-powered image and video creation via Higgsfield
- **Template System** — Start from curated starter templates when needed
- **Project Persistence** — Save, load, and manage multiple projects with SQLite
- **Auth System** — JWT-based authentication with anonymous-to-registered project conversion

---

## Quick Start

```bash
# Clone
git clone git@github.com:weedappcreator/Premium-website-generator-.git
cd Premium-website-generator-

# Install
npm install
npx prisma generate

# Configure
cp .env.example .env.local
# Add your API key (OPENCODE_API_KEY, ANTHROPIC_API_KEY, or GEMINI_API_KEY)

# Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start building.

### Available Dev Commands

```bash
npm run dev              # Default provider (from .env)
npm run dev:opencode     # Force OpenCode (175+ models)
npm run dev:claude       # Force Anthropic Claude
npm run dev:ollama       # Force Ollama (local models)
npm run build            # Production build
npm run test             # Run tests
npm run db:reset         # Reset database
npm run models           # List available models
```

---

## Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/chat/           # AI streaming endpoint (Vercel AI SDK)
│   ├── landing/            # Public landing page
│   └── [projectId]/        # Project workspace
├── components/             # React components
├── lib/
│   ├── prompts/
│   │   └── generation.tsx  # The core design intelligence prompt
│   ├── tools/              # AI tool definitions (str_replace_editor, file_manager)
│   ├── contexts/           # React contexts (Chat, FileSystem)
│   ├── file-system.ts      # Virtual file system
│   └── provider.ts         # Multi-LLM provider selection
├── generated/prisma/       # Prisma client
└── middleware.ts            # Auth middleware
```

### Request Flow

```
User Message ──> /api/chat ──> AI Provider (Claude/GPT/Gemini)
                                    │
                              streamText() with tools
                                    │
                              Tool calls stream back
                                    │
                              FileSystemContext applies mutations
                                    │
                              PreviewFrame re-renders (Babel + iframe)
```

---

## Design Intelligence Resources

### `/awesome-design-md/` — 73 Brand Design Systems

Real design tokens extracted from production websites:

<details>
<summary>Available brands (click to expand)</summary>

Airbnb, Airtable, Apple, Binance, BMW, BMW M, Bugatti, Cal.com, Claude, Clay, ClickHouse, Cohere, Coinbase, Composio, Cursor, Dell (1996), ElevenLabs, Expo, Ferrari, Figma, Framer, HashiCorp, HP, IBM, Intercom, Kraken, Lamborghini, Linear, Mastercard, Meta, Minimax, Mintlify, Miro, Mistral, MongoDB, Nike, Notion, NVIDIA, Ollama, OpenCode, Pinterest, PlayStation, PostHog, Raycast, Renault, Replicate, Revolut, Runway, Sanity, Sentry, Shopify, SpaceX, Spotify, Starbucks, Stripe, Supabase, Superhuman, Tesla, The Verge, Together AI, Uber, Vercel, Vodafone, Warp, Webflow, Wise, xAI, Zapier

</details>

### `/impeccable/` — Design Craft System

Complete reference library: brand register, product register, typography, color, layout, motion, animation, polish, audit, critique, and more.

### `/ui-ux-pro-max-skill/` — Design Database

50+ design styles, 161 color palettes, 57 font pairings, 161 product types, 99 UX guidelines, 25 chart types across 10 technology stacks.

### `/intopia-web-accessibility-skill/` — Accessibility

WCAG 2.2 AA acceptance criteria for every common component: buttons, forms, modals, tables, accordions, tabs, tooltips, and more.

---

## Quality Gate

Every generated website is checked against a 12-point quality gate:

| # | Check | Standard |
|---|-------|----------|
| 1 | Slop test | Would someone say "AI made that"? If yes, redesign |
| 2 | Contrast | Every text element ≥ 4.5:1 ratio |
| 3 | Hierarchy | Headings have proper rhythm and scale |
| 4 | Spacing | Varied rhythm, not uniform padding |
| 5 | States | All interactive elements: hover, focus, active, disabled |
| 6 | Motion | Intentional animation + `prefers-reduced-motion` |
| 7 | Responsive | Works at 375px, 768px, 1024px, 1440px |
| 8 | Accessibility | Keyboard nav, screen reader, alt text, form labels |
| 9 | Performance | Lazy loading, no layout shift, optimized images |
| 10 | Named direction | Color strategy and design decisions are intentional |
| 11 | No banned patterns | Checked against absolute bans list |
| 12 | Agency test | Would a $5K agency ship this? |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Frontend | React 18+, TailwindCSS 4 |
| AI | Vercel AI SDK, multi-provider (Claude, GPT, Gemini, Ollama) |
| Database | SQLite via Prisma |
| Auth | JWT (jose) + bcrypt |
| Preview | @babel/standalone (client-side JSX) |
| Deployment | Vercel |

---

## Environment Variables

```env
# Choose one provider
LLM_PROVIDER=opencode          # opencode | anthropic | ollama | gemini

# API Keys (add the one matching your provider)
OPENCODE_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GEMINI_API_KEY=...
OLLAMA_BASE_URL=http://localhost:11434

# Optional
DATABASE_URL=file:./prisma/dev.db
JWT_SECRET=your-secret
```

---

<p align="center">
  <sub>Built with design intelligence. Not templates.</sub>
</p>
