# Skill: Prompting Mastery

## Purpose

Master the art of prompting agents, LLMs, and multi-agent systems to generate production-ready websites through effective communication patterns, frameworks, and real-world examples.

## Part 1: Core Prompting Principles

### 1. The Five Elements of Effective Prompts

Every prompt should include these 5 elements (in order):

```
1. ROLE      — Who is responding? (e.g., "You are a Senior UI Designer")
2. CONTEXT   — What's the situation? (e.g., "Building a SaaS landing page")
3. TASK      — What do you want? (e.g., "Design 5 hero component variations")
4. CONSTRAINTS — What are the limits? (e.g., "Mobile-first, Tailwind CSS, <2KB")
5. OUTPUT    — What format? (e.g., "React component + design tokens")
```

### Example: Complete Prompt Structure

```markdown
You are a Senior UI Designer specializing in SaaS products.

CONTEXT:
- Building a landing page for an AI writing assistant
- Target audience: Content creators (age 25-45)
- Brand: Modern, trustworthy, minimalist
- Tech: Next.js + Tailwind CSS

TASK:
Design 3 hero section variations that:
1. Lead with benefit (not feature)
2. Include social proof element
3. Have clear primary CTA
4. Work on mobile (375px) and desktop (1440px)

CONSTRAINTS:
- Use only Tailwind CSS utilities
- Max 3 colors from this palette: [colors]
- Components must be reusable
- Accessibility: WCAG 2.1 AA

OUTPUT:
For each variation, provide:
- React component code
- Design rationale (1-2 sentences)
- Responsive breakpoints
- Accessibility notes
```

---

### 2. The ROPE Framework

**R**ole → **O**bjectives → **P**arameters → **E**xecution

#### Role (Who?)
```
✅ Specific: "You are a Senior Frontend Developer experienced in Next.js"
❌ Vague: "You are a developer"

✅ Specific: "You are a Brand Strategist who specializes in SaaS"
❌ Vague: "You are a strategist"
```

#### Objectives (What?)
```
✅ Clear: "Generate component library with 15 core components"
❌ Vague: "Make components"

✅ Clear: "Design 3 pricing page layouts that test different positioning strategies"
❌ Vague: "Design pricing pages"
```

#### Parameters (Constraints)
```
✅ Specific: "Use Next.js 15, TypeScript, Tailwind CSS v4, <3KB per component"
❌ Vague: "Use modern tech"

✅ Specific: "Color palette limited to: [hex codes]. Typography: Inter (sans), Courier (mono)"
❌ Vague: "Make it look nice"
```

#### Execution (How?)
```
✅ Detailed: "Output as: Code block (React) + Design token JSON + Usage examples"
❌ Vague: "Give me the files"

✅ Detailed: "For each page: markup + styles + interactions + mobile responsiveness"
❌ Vague: "Build the site"
```

---

## Part 2: Prompting Patterns for Website Generation

### Pattern 1: Design Direction Discovery

**Use this when:** Client has no clear aesthetic direction.

```markdown
You are a Design Strategist specializing in brand-market fit.

PROJECT BRIEF:
{{ CLIENT_BRIEF }}

TASK:
Recommend 3 aesthetic directions from these schools:
1. Editorial Monocle (luxury, publishing)
2. Modern Minimal (SaaS, tech)
3. Human Approachable (consumer, education)
4. Tech Utility (dashboards, admin)
5. Brutalist Experimental (creative, art)

For each direction:
- Why it fits this client
- Color palette (hex codes)
- Typography recommendations
- 3 real-world examples (URLs)
- Component style (buttons, cards, forms)

CONSTRAINTS:
- Be concise (rationale: 1-2 sentences max)
- Cite real websites as examples
- Include color accessibility scores

OUTPUT FORMAT:
## Direction 1: [Name]
**Why:** [Rationale]
**Colors:** [Palette with hex]
**Typography:** [Font stack]
**Examples:** [3 URLs]
**Components:** [Style description]
**Accessibility:** [WCAG scores]
```

### Pattern 2: Agent Team Assembly

**Use this when:** You need to assign specialized agents to a project.

```markdown
You are an Agent Orchestrator managing a specialized team.

PROJECT SCOPE:
{{ PROJECT_SCOPE }}

TASK:
Assign the optimal agent team from this library:
- Location: skills/agency-agents-lib/
- Divisions: design/, engineering/, marketing/

For this project, recommend:
1. Lead Agent (orchestrator)
2. 3-5 specialist agents
3. Parallel execution plan
4. Handoff sequence (who passes to whom)

For each agent:
- Why they're needed
- What they'll deliver
- Success criteria
- Dependencies

OUTPUT FORMAT:
## Team Assignment

### Lead Orchestrator
**Agent:** [Name]
**Role:** [Description]
**Deliverable:** [Output]

### Specialist 1
**Agent:** [Name]
**Role:** [Description]
**Input:** [What they receive]
**Output:** [What they deliver]
**Dependencies:** [Agents they depend on]
```

### Pattern 3: Tech Stack Selection

**Use this when:** Choosing the right framework for a project.

```markdown
You are a Technical Architect.

PROJECT REQUIREMENTS:
{{ REQUIREMENTS }}

TASK:
Recommend the optimal tech stack from:
1. Next.js (full-stack, SSR, API routes)
2. React (SPA, client-only, Vite)
3. Astro (static, islands, content-first)
4. Vanilla (no framework, lightweight)
5. Nuxt (Vue-based, SSR, DX-first)
6. Remix (full-stack, form-native)

For the recommendation:
- Why this stack fits the requirements
- Key advantages for this project
- Potential drawbacks
- Team skill requirements
- Performance targets
- Deployment strategy

CONSTRAINTS:
- Consider maintenance burden
- Team expertise
- Performance targets
- Time to market
- Scalability needs

OUTPUT FORMAT:
## Recommended Stack: [Framework]

**Why:** [Rationale - 2-3 sentences]
**Advantages:**
- [Advantage 1]
- [Advantage 2]
- ...

**Potential Drawbacks:**
- [Risk 1]
- [Risk 2]

**Setup:**
```bash
[Step-by-step setup commands]
```

**Performance Targets:**
- LCP: [time]
- FID: [time]
- CLS: [score]
```

### Pattern 4: Design System Application

**Use this when:** Applying a production design system to a project.

```markdown
You are a Design Systems Engineer.

DESIGN SYSTEM TO APPLY:
[Load from: integrations/design-systems-full/[brand]/DESIGN.md]

PROJECT:
{{ PROJECT_SCOPE }}

TASK:
Apply this design system to the project by:
1. Mapping client requirements to design tokens
2. Creating component spec sheet
3. Documenting implementation in chosen tech stack
4. Identifying custom extensions needed

OUTPUT:
## Design System Application: [Brand]

### Design Tokens
```json
{
  "colors": { ... },
  "typography": { ... },
  "spacing": { ... }
}
```

### Component Spec Sheet
| Component | Variants | Props | Notes |
|---|---|---|---|
| Button | Primary, Secondary, Tertiary | size, disabled, loading | ... |
| Card | Default, Elevated, Outlined | | ... |

### Tech Stack Implementation
[Framework-specific setup]

### Custom Extensions
- [Extension 1: Why needed]
- [Extension 2: Why needed]
```

### Pattern 5: Skills Execution Checklist

**Use this when:** Breaking down a project into executable skills.

```markdown
You are a Project Manager.

PROJECT DELIVERABLES:
{{ DELIVERABLES }}

TASK:
Create a skills checklist from: skills/awesome-agent-skills-index/SKILLS.md

Break down the project into discrete, executable skills:
- Research phase
- Planning phase
- Design phase
- Implementation phase
- Testing phase
- Deployment phase

For each skill:
- Owner (which agent)
- Input requirements
- Success criteria
- Estimated effort
- Dependencies

OUTPUT FORMAT:
## Skills Execution Roadmap

### Phase 1: Research
- [ ] Skill 1 (from SKILLS.md)
  - Owner: [Agent]
  - Input: [What's needed]
  - Output: [What's delivered]
  - Success: [Criteria]
  - Effort: [T-shirt size: S/M/L/XL]
  - Depends on: [Prior skills]

- [ ] Skill 2
  - ...

### Phase 2: Planning
- [ ] ...

### Phase 3: Design
- [ ] ...

[Continue for all phases]
```

---

## Part 3: Multi-Agent Orchestration Prompts

### Pattern 6: Parallel Agent Execution

**Use this when:** Spawning multiple agents simultaneously.

```markdown
You are the Lead Orchestrator coordinating a team of specialists.

CLIENT BRIEF:
{{ BRIEF }}

TEAM:
{{ AGENT_LIST }}

TASK:
Coordinate these agents in parallel:
1. {{ AGENT_1 }} - Parallel track
2. {{ AGENT_2 }} - Parallel track
3. {{ AGENT_3 }} - Parallel track
4. {{ AGENT_4 }} - Parallel track
5. {{ AGENT_5 }} - Parallel track

For each agent:
- Give them their specific prompt (see below)
- Collect their outputs
- Wait for all to complete (60 second timeout)
- Synthesize findings into unified output

AGENT PROMPTS:

{{ AGENT_1_PROMPT }}
---
{{ AGENT_2_PROMPT }}
---
{{ AGENT_3_PROMPT }}
---
{{ AGENT_4_PROMPT }}
---
{{ AGENT_5_PROMPT }}

SYNTHESIS TASK:
Once all agents complete, create unified output:
- Executive summary
- Key findings from each agent
- Conflicts/alignments between findings
- Recommendations (prioritized)
- Next steps
```

### Pattern 7: Sequential Agent Handoff

**Use this when:** Agents depend on each other's outputs.

```markdown
You are the Lead Orchestrator managing sequential work.

INITIAL BRIEF:
{{ BRIEF }}

SEQUENCE:

Step 1: Discovery Agent
[Discovery prompt]
Output: {{ DISCOVERY_OUTPUT }}

Step 2: Market Research Agent (depends on Step 1)
[Market Research prompt]
Input: {{ DISCOVERY_OUTPUT }}
Output: {{ MARKET_OUTPUT }}

Step 3: Brand Detective Agent (depends on Step 1 + 2)
[Brand prompt]
Input: {{ DISCOVERY_OUTPUT }}, {{ MARKET_OUTPUT }}
Output: {{ BRAND_OUTPUT }}

Step 4: Design Explorer Agent (depends on Step 1 + 2 + 3)
[Design prompt]
Input: {{ DISCOVERY_OUTPUT }}, {{ MARKET_OUTPUT }}, {{ BRAND_OUTPUT }}
Output: {{ DESIGN_OUTPUT }}

SYNTHESIS:
Combine all outputs into final website plan.
```

---

## Part 4: Prompt Templates by Use Case

### Template: Landing Page Generation

```markdown
You are a Senior Landing Page Designer.

PRODUCT BRIEF:
- Product: {{ PRODUCT_NAME }}
- Value prop: {{ VALUE_PROP }}
- Target audience: {{ AUDIENCE }}
- CTA goal: {{ GOAL (e.g., "Sign up for beta") }}
- Tech: {{ TECH_STACK }}
- Design system: Load from integrations/design-systems-full/[brand]/DESIGN.md

TASK:
Generate a complete landing page with sections:
1. Hero (headline, subheadline, CTA, visual)
2. Problem/Solution (2-3 sections)
3. Features (3-6 key features with icons)
4. Social Proof (logos, testimonials, metrics)
5. FAQ (5-7 common questions)
6. Final CTA (same goal as hero)

CONSTRAINTS:
- Mobile-first responsive design
- Lighthouse score > 95
- {{ COLOR_PALETTE }}
- {{ TYPOGRAPHY }}
- Accessible (WCAG 2.1 AA)

OUTPUT:
- Full page component (React/Vue/Astro)
- Mobile + desktop mockups
- Interaction specs
- Performance metrics
```

### Template: SaaS Dashboard

```markdown
You are a Senior Dashboard Designer.

DASHBOARD REQUIREMENTS:
- Primary user: {{ USER_ROLE }}
- Key metrics: {{ METRICS }}
- Update frequency: {{ FREQUENCY }}
- Data sources: {{ SOURCES }}
- Tech: {{ TECH_STACK }}

TASK:
Design a dashboard with:
1. Header (navigation, filters, date range)
2. KPI cards (4-6 key metrics)
3. Charts (line, bar, pie - as appropriate)
4. Data table (sortable, filterable)
5. Sidebar (navigation, settings)

CONSTRAINTS:
- Real-time updates preferred
- Responsive (mobile + desktop)
- Dark mode support
- Performance: First interaction < 1s

OUTPUT:
- Component architecture diagram
- Wireframes (mobile + desktop)
- Interactive prototype
- Component code (React/Vue/Astro)
```

### Template: E-commerce Product Page

```markdown
You are a Senior E-commerce Designer.

PRODUCT:
- Category: {{ CATEGORY }}
- Price point: {{ PRICE }}
- Target: {{ AUDIENCE }}
- Unique selling point: {{ USP }}
- Tech: {{ TECH_STACK }}

TASK:
Design product page with:
1. Product images (hero, gallery)
2. Product info (name, rating, price, availability)
3. Variants (size, color, options)
4. Description (features, specs, benefits)
5. Social proof (reviews, testimonials)
6. CTA (Add to cart, Wishlist)
7. Related products
8. Trust signals (shipping, returns, guarantee)

CONSTRAINTS:
- Mobile-optimized
- Performance: Images < 100KB total
- Accessibility: Color contrast > 4.5:1
- Schema markup (Product, Offer, Review)

OUTPUT:
- Full page component
- Image optimization strategy
- Responsive layouts
- Conversion optimization notes
```

---

## Part 5: Common Prompting Mistakes & Fixes

| ❌ Mistake | ✅ Fix | Why |
|---|---|---|
| "Create a website" | "Create a Next.js landing page with hero, features, pricing, and FAQ sections following the [Design System] design system" | Specificity = better output |
| "Make it look good" | "Apply the Linear design system (color palette: [colors], typography: [fonts])" | Design systems give consistency |
| "Use your best judgment" | "Follow WCAG 2.1 AA accessibility standards, mobile-first design, Lighthouse > 95" | Clear constraints = predictable quality |
| "Do whatever you think is right" | "Your success criteria are: [metric 1], [metric 2], [metric 3]" | Success metrics guide decisions |
| One long paragraph | Structured sections (Role, Context, Task, Constraints, Output) | Parsing is easier for agents |

---

## Part 6: Prompting by Framework Integration

### Next.js Integration Prompt
```markdown
You are a Senior Next.js Developer.

REQUIREMENTS:
{{ REQUIREMENTS }}

TECH STACK:
- Framework: Next.js 15
- Styling: Tailwind CSS v4
- UI Components: shadcn/ui
- State: React Context + Zustand
- API: Server actions + Route handlers
- Database: Prisma + PostgreSQL
- Auth: Clerk
- Hosting: Vercel

TASK:
Generate complete {{ COMPONENT_TYPE }} component that:
1. Uses App Router (not Pages Router)
2. Implements server/client pattern appropriately
3. Includes TypeScript types
4. Follows Tailwind CSS conventions
5. Is fully responsive
6. Includes error boundaries + loading states
7. Passes accessibility audit

OUTPUT:
- app/component.tsx
- lib/hooks.ts (custom hooks)
- lib/types.ts (TypeScript types)
- Integration instructions
```

### React + Vite Integration Prompt
```markdown
You are a Senior React Developer.

REQUIREMENTS:
{{ REQUIREMENTS }}

TECH STACK:
- Bundler: Vite
- Framework: React 19
- Styling: Tailwind CSS v4
- State: Zustand
- HTTP: Axios
- Build: TypeScript

TASK:
Generate {{ COMPONENT }} for use in a Vite SPA that:
1. Uses React hooks (no class components)
2. Optimizes re-renders (memo, useCallback)
3. Lazy loads when appropriate
4. Includes error handling
5. Is fully responsive
6. Accessible (WCAG 2.1 AA)

OUTPUT:
- src/components/Component.tsx
- src/hooks/useComponent.ts
- src/types/component.ts
```

### Astro Integration Prompt
```markdown
You are a Senior Astro Developer.

REQUIREMENTS:
{{ REQUIREMENTS }}

TECH STACK:
- Framework: Astro 4+
- Styling: Tailwind CSS v4
- Islands: React (for interactive components)
- Static: .astro files
- SSG: Pre-built static HTML

TASK:
Generate {{ PAGE_TYPE }} for static site that:
1. Uses .astro files for static markup
2. Uses React for interactive islands only
3. Optimizes for static generation
4. Includes dynamic routing (optional)
5. Fully responsive
6. Fast TTL < 0.5s

OUTPUT:
- pages/{{ page }}.astro
- components/{{ component }}.astro
- components/{{ interactive }}.tsx (for islands)
```

---

## Part 7: Real-World Prompt Examples

### Example 1: Complete SaaS Landing Page Prompt

```markdown
You are a Senior SaaS Landing Page Designer.

PROJECT:
- Product: TaskFlow (task management for remote teams)
- Value prop: "Real-time collaboration without the bloat"
- Audience: Remote engineering managers (age 30-45)
- Goal: Get 100 sign-ups in first month
- Design system: Load from integrations/design-systems-full/linear/DESIGN.md
- Tech: Next.js 15 + Tailwind CSS + shadcn/ui

SECTIONS:
1. Hero: Headline "Async collaboration that works" + CTA "Start free"
2. Problem: "Async teams waste hours in meetings"
3. Solution: "TaskFlow syncs work without sync meetings"
4. Features: Distributed task assignment, async comments, async reviews, real-time notifications
5. Social proof: [3-5 customer logos]
6. Testimonial: [1 customer quote]
7. Pricing: [3 tiers - free, pro, enterprise]
8. FAQ: 5-7 questions
9. Footer CTA: "Try TaskFlow free"

DESIGN CONSTRAINTS:
- Apply Linear design system exactly
- Mobile-first (375px, 768px, 1440px breakpoints)
- Max 2 animations (subtle, < 300ms)
- Lighthouse: > 95 (LCP < 1.5s)
- Dark mode support
- Fully accessible (WCAG 2.1 AA)

TECHNICAL:
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS utilities only
- Responsive images (next/image)
- Server components where possible
- Form validation with react-hook-form

OUTPUT:
1. Full page component (app/page.tsx)
2. Section components (components/*.tsx)
3. Design tokens (tailwind.config.ts overrides)
4. Mobile mockups (figma link or screenshot)
5. Performance audit (metrics)
6. Accessibility audit (WCAG checklist)
7. Deployment checklist (Vercel)
```

### Example 2: Multi-Agent Design Discovery Prompt

```markdown
You are the Lead Orchestrator for a website project.

CLIENT BRIEF:
"We're building a fitness app for busy professionals. We need a modern, energetic, trustworthy website that converts sign-ups. Target: tech professionals age 25-40. Budget: $5k. Timeline: 6 weeks."

PARALLEL AGENTS:

AGENT 1: Discovery Agent
- Extract requirements
- Define success metrics
- Flag unknowns

AGENT 2: Market Research Agent
- Analyze competitors (Peloton, Apple Fitness, Beachbody)
- Identify market gaps
- Recommend positioning

AGENT 3: Brand Detective Agent
- Define brand personality (energetic + professional)
- Target audience psychographics
- Visual metaphors

AGENT 4: Design Explorer Agent
- Recommend 3 aesthetic directions from 5 schools
- Top pick with confidence score

AGENT 5: Architecture Agent
- Plan site structure (pages, components)
- Recommend tech stack
- Integration checklist

EXECUTION:
- Spawn all 5 agents simultaneously
- 60 second timeout per agent
- Collect all outputs
- Synthesize into unified Website Plan

OUTPUT:
- Unified Website Plan (PLAN.md)
- Design direction recommendation (with 3 options)
- Tech stack recommendation
- Site structure (sitemap)
- Agent reports (appendix)
```

---

## Best Practices Summary

1. **Be Specific** — "Create a button" → "Create a primary action button (blue, 16px, 8px padding) in React with disabled + loading states"

2. **Provide Context** — Always include: who's the user, what's the goal, what's the constraint

3. **Use Frameworks** — ROPE (Role, Objectives, Parameters, Execution)

4. **Load Design Systems** — Reference from `integrations/design-systems-full/[brand]/DESIGN.md`

5. **Reference Agents** — Load from `skills/agency-agents-lib/`

6. **Reference Skills** — Load from `skills/awesome-agent-skills-index/SKILLS.md`

7. **Test Outputs** — Always review generated code/designs for quality

8. **Iterate** — If output isn't right, refine the prompt (usually more specific = better)

9. **Use Parallel Execution** — For independent tasks, spawn agents in parallel (faster)

10. **Chain Sequential Tasks** — When agents depend on each other, execute in sequence

---

## Prompting Resources

- **Design Systems:** `integrations/design-systems-full/`
- **Agents:** `skills/agency-agents-lib/`
- **Skills:** `skills/awesome-agent-skills-index/SKILLS.md`
- **Integration Guide:** `FRAMEWORKS-INTEGRATION.md`
- **Tech Stacks:** `techstacks/*/STACK.md`
