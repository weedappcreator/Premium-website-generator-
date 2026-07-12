# Complete Integration Index

Everything you need to generate production-ready websites using scraped high-star GitHub repositories, battle-tested templates, agent frameworks, and 1000+ skills.

---

## 🎯 Complete Directory Structure

```
website-generator/
│
├── FRAMEWORKS-INTEGRATION.md          ← Read first: Agent framework guide
├── COMPLETE-INTEGRATION-INDEX.md      ← You are here
│
├── skills/
│   ├── website-planner-agent/         ← Orchestrates discovery
│   ├── prompting-mastery/             ← Master prompting patterns
│   ├── agency-agents-lib/             ← 61 specialized agents
│   │   ├── design/                    ← 10 design agents
│   │   ├── engineering/               ← 27 engineering agents
│   │   └── marketing/                 ← 12+ marketing agents
│   │
│   └── awesome-agent-skills-index/    ← 1000+ curated skills
│
├── techstacks-integration/            ← Complete full-stack boilerplates
│   ├── nextjs-full-integration/       ← Next.js 16 (ixartz)
│   │   └── All setup: App Router, Tailwind, Drizzle ORM, Testing
│   │
│   ├── astro-full-integration/        ← Astro (ixartz)
│   │   └── Blog + Portfolio setup
│   │
│   ├── react-full-integration/        ← React SPA (react-boilerplate)
│   │   └── Scalable architecture
│   │
│   └── fullstack-remix-integration/   ← Remix/Multi-stack (NoQuarter)
│       └── Full-stack ready
│
├── templates-integrated/              ← Production-ready templates
│   ├── relivator-saas-ecommerce/      ← E-commerce + SaaS (Next.js 15)
│   │   └── Stripe, Auth, Dashboard, Shop, Pricing
│   │
│   ├── play-astro-startup/            ← Startup landing (Astro)
│   │   └── Hero, Features, Pricing, Blog, CTA
│   │
│   └── astrowind-blog-portfolio/      ← Blog + Portfolio (Astro)
│       └── MDX, Dark mode, SEO
│
├── integrations/
│   ├── design-systems-full/           ← 73 production design systems
│   │   ├── claude/
│   │   ├── linear/
│   │   ├── stripe/
│   │   └── ... (70 more)
│   │
│   └── design-directions/             ← 5 visual schools
│
├── techstacks/                        ← Reference guides
│   ├── nextjs/STACK.md
│   ├── react/STACK.md
│   ├── astro/STACK.md
│   ├── remix/STACK.md
│   ├── nuxt/STACK.md
│   └── vanilla/STACK.md
│
└── workflows/
    └── generate.md                    ← Main generation workflow
```

---

## 🚀 Quick Start: Complete Workflow

### Step 1: Client Brief & Discovery (15 min)

```bash
# Load: skills/website-planner-agent/SKILL.md
# This orchestrates 5-agent discovery in parallel:
#   - Discovery Agent (extracts requirements)
#   - Market Research Agent (analyzes competitors)
#   - Brand Detective Agent (identifies personality)
#   - Design Explorer Agent (recommends 3 aesthetics)
#   - Architecture Agent (plans structure + tech)

CLIENT BRIEF:
"Build landing page for AI writing tool.
Modern, trendy, tech-savvy audience.
Goal: 1000 signups in 3 months."

OUTPUT: Website Plan (PLAN.md)
```

### Step 2: Select Template (5 min)

Based on website type, pick a template:

| Website Type | Template | Tech | Location |
|---|---|---|---|
| SaaS + E-commerce | **relivator** | Next.js 15 | `templates-integrated/relivator-saas-ecommerce/` |
| Startup Landing | **play-astro** | Astro | `templates-integrated/play-astro-startup/` |
| Blog + Portfolio | **astrowind** | Astro | `templates-integrated/astrowind-blog-portfolio/` |
| Custom SPA | **react-boilerplate** | React | `techstacks-integration/react-full-integration/` |
| Full-stack API | **Remix** | Remix | `techstacks-integration/fullstack-remix-integration/` |

### Step 3: Load Design System (5 min)

Pick aesthetic from agent discovery, then load design system:

```bash
# Agent recommended: "Modern Minimal"
# Load design system: integrations/design-systems-full/linear/DESIGN.md
# OR: integrations/design-systems-full/vercel/DESIGN.md
# OR: integrations/design-systems-full/stripe/DESIGN.md

# Copy DESIGN.md content into your project
cat integrations/design-systems-full/linear/DESIGN.md
```

### Step 4: Clone Template Boilerplate (5 min)

```bash
# Navigate to template
cd templates-integrated/relivator-saas-ecommerce/

# Install dependencies
npm install
# or
pnpm install

# Start dev server
npm run dev
```

### Step 5: Customize with Agents (30-60 min)

Assign specialized agents from `skills/agency-agents-lib/`:

```bash
# Load agents based on specializations needed

# For UI: Load from skills/agency-agents-lib/design/
#   - UI Designer
#   - Brand Guardian
#   - Visual Storyteller

# For Code: Load from skills/agency-agents-lib/engineering/
#   - Frontend Developer
#   - Backend Architect
#   - Database Architect

# For Content: Load from skills/agency-agents-lib/marketing/
#   - Content Creator
#   - SEO Specialist
#   - Growth Hacker
```

### Step 6: Execute Skills (Varies)

Reference `skills/awesome-agent-skills-index/SKILLS.md` for detailed execution:

```bash
# DESIGN SKILLS
- Component Design
- Information Architecture
- Interaction Design
- Accessibility Audit

# CODING SKILLS
- Frontend Development
- API Integration
- Database Schema
- Performance Optimization

# TESTING SKILLS
- Unit Testing
- Integration Testing
- E2E Testing
- Performance Testing

# DEPLOYMENT SKILLS
- CI/CD Setup
- Environment Configuration
- Monitoring Setup
- Auto-scaling
```

### Step 7: Deploy (10 min)

Use boilerplate deployment configs:

```bash
# Next.js: Deploy to Vercel
npm run build
vercel deploy

# Astro: Deploy to Netlify/Vercel
npm run build
# Output: dist/

# React: Build & deploy to any host
npm run build
# Output: dist/
```

---

## 📚 Tech Stack Boilerplates (Full Integration)

### 1. Next.js 16 (ixartz/Next-js-Boilerplate)

**Location:** `techstacks-integration/nextjs-full-integration/`

**What's Included:**
- ✅ App Router + Page Router support
- ✅ TypeScript
- ✅ Tailwind CSS 4
- ✅ Drizzle ORM
- ✅ Prisma (optional)
- ✅ Testing: Vitest + Testing Library + Playwright
- ✅ Code quality: ESLint, Prettier, Husky, Lint-Staged
- ✅ Documentation: Storybook
- ✅ Monitoring: Sentry
- ✅ Deployment: Vercel ready

**Setup:**
```bash
cd techstacks-integration/nextjs-full-integration/
npm install
npm run dev

# Build
npm run build

# Deploy
vercel deploy
```

**Key Features:**
- Developer experience first
- Scalable monorepo structure
- API routes + server actions
- Image optimization
- Font optimization
- Script optimization

**Best For:**
- Full-stack SaaS
- Complex web applications
- Server-rendered sites
- Real-time applications

---

### 2. Astro (ixartz/Astro-boilerplate)

**Location:** `techstacks-integration/astro-full-integration/`

**What's Included:**
- ✅ Astro v4+
- ✅ React Islands (for interactivity)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ MDX (for blog)
- ✅ Dark mode
- ✅ SEO optimization
- ✅ Code quality tools
- ✅ Responsive design

**Setup:**
```bash
cd techstacks-integration/astro-full-integration/
npm install
npm run dev

# Build
npm run build

# Deploy
netlify deploy
# or
vercel deploy
```

**Key Features:**
- Static-first with islands architecture
- Markdown support
- Fast performance (0JS by default)
- Perfect for blogs, portfolios, documentation
- Easy MDX integration

**Best For:**
- Content-heavy sites
- Blogs
- Documentation sites
- Portfolio sites
- Static marketing sites

---

### 3. React SPA (react-boilerplate)

**Location:** `techstacks-integration/react-full-integration/`

**What's Included:**
- ✅ React 19
- ✅ Vite bundler
- ✅ TypeScript
- ✅ Testing: Jest + React Testing Library
- ✅ Routing: React Router
- ✅ State: Redux/Context
- ✅ Styling: Tailwind CSS
- ✅ Code quality tools
- ✅ Offline support

**Setup:**
```bash
cd techstacks-integration/react-full-integration/
npm install
npm run dev

# Build
npm run build

# Deploy to any static host
netlify deploy --prod --dir=dist
```

**Key Features:**
- Production-ready architecture
- Offline-first foundation
- Performance optimized
- Best practices included
- Highly scalable

**Best For:**
- Single-page applications (SPA)
- Progressive web apps (PWA)
- Interactive dashboards
- Client-heavy applications

---

### 4. Remix/Full-stack (NoQuarterTeam/boilerplate)

**Location:** `techstacks-integration/fullstack-remix-integration/`

**What's Included:**
- ✅ Remix framework
- ✅ Next.js support
- ✅ Expo (React Native)
- ✅ Prisma ORM
- ✅ TypeScript
- ✅ tRPC (type-safe RPC)
- ✅ Database migrations
- ✅ Authentication
- ✅ Testing setup

**Setup:**
```bash
cd techstacks-integration/fullstack-remix-integration/
npm install
npm run dev

# Build
npm run build

# Deploy
remix deploy
```

**Key Features:**
- True full-stack (server + client)
- Form-native approach
- Nested routing
- Server actions
- Database-ready
- Mobile-ready (Expo)

**Best For:**
- Full-stack applications
- Complex forms
- Real-time collaboration
- Multi-platform (web + mobile)

---

## 🎨 Production Templates

### 1. Relivator (Next.js 15 E-commerce + SaaS)

**Location:** `templates-integrated/relivator-saas-ecommerce/`

**Tech:** Next.js 15, React 19, TypeScript, Tailwind, Drizzle ORM, PostgreSQL/Neon

**Features:**
- ✅ E-commerce store
- ✅ SaaS dashboard
- ✅ Pricing page
- ✅ Payment processing (Stripe)
- ✅ Authentication (better-auth)
- ✅ Admin panel
- ✅ Dark mode
- ✅ Internationalization (i18n)
- ✅ API with tRPC

**Pages Included:**
- `/` - Landing page
- `/products` - Store catalog
- `/checkout` - Shopping cart
- `/dashboard` - User dashboard
- `/admin` - Admin panel
- `/pricing` - Pricing page
- `/docs` - Documentation
- `/blog` - Blog

**What to Copy:**
```bash
# Copy components
cp -r relivator-saas-ecommerce/src/components/* your-project/

# Copy pages
cp -r relivator-saas-ecommerce/src/app/* your-project/app/

# Copy database schema
cp relivator-saas-ecommerce/src/db/schema.ts your-project/

# Copy API routes
cp -r relivator-saas-ecommerce/src/api/* your-project/api/
```

**Best For:**
- E-commerce platforms
- SaaS products with shop
- Subscription services
- Digital product sales

---

### 2. Play Astro (Startup Landing)

**Location:** `templates-integrated/play-astro-startup/`

**Tech:** Astro, React (islands), TypeScript, Tailwind CSS

**Features:**
- ✅ Modern hero section
- ✅ Feature showcase
- ✅ Testimonials carousel
- ✅ Pricing table
- ✅ Newsletter signup
- ✅ Blog section
- ✅ Dark mode
- ✅ Mobile responsive
- ✅ SEO optimized

**Sections:**
- Hero with CTA
- Feature grid
- How it works (steps)
- Testimonials (carousel)
- Pricing (3 tiers)
- FAQ
- Newsletter signup
- Footer

**What to Copy:**
```bash
# Copy components
cp -r play-astro-startup/src/components/* your-project/

# Copy pages
cp -r play-astro-startup/src/pages/* your-project/pages/

# Copy layouts
cp -r play-astro-startup/src/layouts/* your-project/layouts/
```

**Best For:**
- SaaS landing pages
- Startup websites
- Product launches
- Marketing sites

---

### 3. AstroWind (Blog + Portfolio)

**Location:** `templates-integrated/astrowind-blog-portfolio/`

**Tech:** Astro, React, TypeScript, Tailwind CSS, MDX

**Features:**
- ✅ Blog with MDX
- ✅ Portfolio projects
- ✅ Dark mode
- ✅ Full-text search
- ✅ RSS feed
- ✅ SEO optimization
- ✅ Analytics ready
- ✅ Fast performance

**Content Types:**
- Blog posts (MDX)
- Portfolio projects
- Case studies
- Testimonials
- Team members

**What to Copy:**
```bash
# Copy components
cp -r astrowind-blog-portfolio/src/components/* your-project/

# Copy layouts
cp -r astrowind-blog-portfolio/src/layouts/* your-project/

# Copy blog content
cp -r astrowind-blog-portfolio/src/content/* your-project/content/

# Copy styles
cp astrowind-blog-portfolio/src/styles/* your-project/styles/
```

**Best For:**
- Developer blogs
- Portfolio sites
- Technical documentation
- Company websites

---

## 🎯 Design Systems (73 Available)

All available in: `integrations/design-systems-full/`

Each includes:
- `DESIGN.md` - Complete design specification
- `preview.html` - Light theme preview
- `preview-dark.html` - Dark theme preview

### By Category:

**AI/LLM Platforms (11 systems):**
- claude/ - Claude design system
- cohere/
- elevenlab/
- mistral/
- ollama/
- And 6 more...

**Developer Tools (10 systems):**
- cursor/
- raycast/
- vercel/
- warp/
- supabase/
- And 5 more...

**SaaS (15 systems):**
- linear/ - Clean, minimal
- notion/ - Workspace-y
- cal/ - Calendar app
- zapier/ - Integration platform
- And 11 more...

**Fintech (8 systems):**
- stripe/ - Professional
- coinbase/ - Crypto-friendly
- wise/ - Modern finance
- kraken/
- And 4 more...

**E-commerce (12 systems):**
- shopify/
- nike/
- airbnb/
- amazon/
- And 8 more...

**Design Tools (6 systems):**
- figma/
- framer/
- webflow/
- And 3 more...

**Media & Tech (8 systems):**
- apple/
- spotify/
- ibm/
- spacex/
- And 4 more...

### How to Use:

```bash
# Load a design system
cat integrations/design-systems-full/linear/DESIGN.md

# Copy into your project
cp integrations/design-systems-full/linear/DESIGN.md your-project/design-tokens.md

# Apply colors & typography
# Use the hex codes from DESIGN.md in your tailwind.config.js
```

---

## 🤖 Agent Framework (61 Agents)

Location: `skills/agency-agents-lib/`

### Design Agents (10):
- UI Designer
- UX Architect
- Brand Guardian
- Visual Storyteller
- Inclusive Visuals Specialist
- Image Prompt Engineer
- And 4 more...

### Engineering Agents (27):
- Frontend Developer
- Backend Architect
- Mobile App Builder
- Security Engineer
- Database Architect
- DevOps Engineer
- And 21 more...

### Marketing Agents (12+):
- Content Creator
- Social Media Strategist
- Growth Hacker
- Email Marketer
- SEO Specialist
- And 7+ more...

### How to Use:

```bash
# Load an agent
cat skills/agency-agents-lib/design/UI_Designer.md

# Or reference in prompt:
"Load the UI Designer agent from skills/agency-agents-lib/design/UI_Designer.md
and have them design the landing page hero component following [Design System]"
```

---

## 📖 Skills Index (1000+)

Location: `skills/awesome-agent-skills-index/SKILLS.md`

### Research Skills:
- Market research
- Competitive analysis
- User research
- Data analysis
- Trend forecasting

### Planning Skills:
- Site architecture
- User flow mapping
- Content strategy
- Project scoping
- Timeline estimation

### Design Skills:
- UI Design
- UX Design
- Branding
- Illustration
- Animation design

### Coding Skills:
- Frontend development
- Backend development
- Database design
- API development
- Testing

### Testing Skills:
- Unit testing
- Integration testing
- E2E testing
- Performance testing
- Accessibility testing

### Deployment Skills:
- CI/CD setup
- Infrastructure
- Monitoring
- Scaling
- Disaster recovery

### How to Use:

```bash
# Search for specific skills
grep -i "website" skills/awesome-agent-skills-index/SKILLS.md
grep -i "conversion" skills/awesome-agent-skills-index/SKILLS.md
grep -i "seo" skills/awesome-agent-skills-index/SKILLS.md

# Reference in project
"Follow the [Skill Name] from skills/awesome-agent-skills-index/SKILLS.md"
```

---

## 🎬 Prompting Guide

Location: `skills/prompting-mastery/SKILL.md`

Complete guide covering:
- 5 elements of effective prompts
- ROPE framework (Role, Objectives, Parameters, Execution)
- Multi-agent orchestration patterns
- Parallel agent execution
- Sequential agent handoff
- Real-world prompt examples
- Tech stack-specific prompts

---

## 🔄 Complete Workflow Example

### Project: AI Writing Assistant Landing Page

**Timeline: 1 week**

```
Day 1: Discovery
├─ Read: FRAMEWORKS-INTEGRATION.md
├─ Run: website-planner-agent with client brief
└─ Output: Website Plan (PLAN.md)

Day 2: Design
├─ Load: design-systems-full/linear/DESIGN.md
├─ Assign: UI Designer + Brand Guardian agents
├─ Create: Figma mockups or HTML prototypes
└─ Output: Design specs

Day 3-4: Development
├─ Choose template: play-astro-startup or relivator-saas-ecommerce
├─ Clone: techstacks-integration/nextjs-full-integration/
├─ Assign: Frontend Developer agent
├─ Implement: Components, pages, integrations
└─ Output: Working dev site

Day 5: Testing & Polish
├─ Assign: QA agent
├─ Run skills: Performance testing, accessibility testing
├─ Polish: Animations, microcopy, interactions
└─ Output: Polish report

Day 6-7: Deploy & Monitor
├─ Deploy: npm run build && vercel deploy
├─ Setup: Analytics, error tracking
├─ Monitor: Performance metrics
└─ Output: Live site
```

---

## 📊 Sources & Credits

### Frameworks:
- **Agency Agents:** https://github.com/msitarzewski/agency-agents
- **Awesome Design MD:** https://github.com/VoltAgent/awesome-design-md
- **Awesome Agent Skills:** https://github.com/VoltAgent/awesome-agent-skills

### Tech Stack Boilerplates:
- **Next.js:** https://github.com/ixartz/Next-js-Boilerplate
- **Astro:** https://github.com/ixartz/Astro-boilerplate
- **React:** https://github.com/react-boilerplate/react-boilerplate
- **Remix:** https://github.com/NoQuarterTeam/boilerplate

### Templates:
- **Relivator:** https://github.com/reliverse/relivator
- **Play Astro:** https://github.com/TailGrids/play-astro
- **AstroWind:** https://github.com/arthelokyo/astrowind

---

## 🎯 Next Steps

1. **Start here:** Read `FRAMEWORKS-INTEGRATION.md`
2. **Then:** Pick a client brief
3. **Run discovery:** Use `website-planner-agent`
4. **Select template:** From `templates-integrated/`
5. **Load design system:** From `integrations/design-systems-full/`
6. **Assign agents:** From `skills/agency-agents-lib/`
7. **Execute skills:** Reference `skills/awesome-agent-skills-index/`
8. **Deploy:** Use boilerplate deployment configs
9. **Monitor:** Set up analytics + error tracking

---

**You now have everything needed to generate production-ready websites at scale using battle-tested frameworks, templates, and agent systems.**
