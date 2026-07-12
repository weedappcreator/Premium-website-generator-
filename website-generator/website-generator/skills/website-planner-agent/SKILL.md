# Skill: Website Planner Agent

## Purpose

Orchestrate multi-agent workflows to analyze client briefs, discover aesthetic direction, plan website structure, and generate production-ready specifications—without manual input.

**Inspired by:** [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) (10k+ stars) and [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) (1000+ skills)

## How It Works

A **Lead Agent** orchestrates 5 specialized sub-agents in parallel, then synthesizes findings into a unified website plan.

```
Client Brief Input
  ↓
Lead Orchestrator Agent
  ├→ Discovery Agent (analyzes client brief)
  ├→ Market Research Agent (identifies industry, competitors, trends)
  ├→ Brand Detective Agent (extracts brand values, personality, target audience)
  ├→ Design Explorer Agent (recommends 3 aesthetic directions with rationale)
  └→ Architecture Agent (plans site structure, pages, components)
       ↓
    WAIT for all to complete
       ↓
    Synthesize → Website Plan (PLAN.md)
```

## Agent Roles & Responsibilities

### 1. Lead Orchestrator Agent

**Role:** Chief architect coordinating all discovery work.

**Inputs:**
- Client brief (description, goals, target audience, constraints)
- Industry category (SaaS, e-commerce, agency, portfolio, etc.)

**Process:**
1. Parse client brief into structured data
2. Spawn 4 sub-agents in parallel
3. Wait for all to complete (with timeout: 60s)
4. Synthesize findings into unified plan
5. Output: `website-plan.md` + agent reports

**Prompt Template:**
```
You are the Lead Orchestrator for website planning.

Client Brief:
{{ brief }}

Your tasks:
1. Spawn 4 agents in parallel:
   - Discovery Agent: Analyze the brief, extract requirements
   - Market Research Agent: Research industry + competitors
   - Brand Detective Agent: Identify brand personality + values
   - Design Explorer Agent: Recommend 3 aesthetic directions
   - Architecture Agent: Plan site structure

2. Wait for all agents to complete

3. Synthesize all findings into a unified Website Plan:
   - Executive Summary
   - Client Goals & Constraints
   - Target Audience Profile
   - Recommended Aesthetic Direction (with rationale)
   - Site Structure (pages, components, integrations)
   - Tech Stack Recommendation
   - Next Steps

Output as markdown with agent credits.
```

---

### 2. Discovery Agent

**Role:** Extract requirements, goals, success metrics from client brief.

**Inputs:**
- Raw client brief
- Industry hints

**Process:**
1. Parse brief for explicit requirements
2. Infer implicit needs (e.g., "improve conversions" → CTA testing, analytics)
3. Identify constraints (budget, timeline, technical skills)
4. Define success metrics (CTR, sign-ups, time-on-site, etc.)
5. Flag unknowns or gaps

**Output:**
```markdown
## Discovery Report

### Explicit Requirements
- ...

### Inferred Needs
- ...

### Constraints
- ...

### Success Metrics
- ...

### Gaps to Clarify
- ...
```

**Prompt Template:**
```
You are a Discovery Agent specializing in extracting hidden requirements.

Client Brief:
{{ brief }}

Your job:
1. List all EXPLICIT requirements mentioned
2. Infer IMPLICIT needs (e.g., "modern site" → A/B testing, analytics)
3. Identify CONSTRAINTS (budget, timeline, skills, technical debt)
4. Define SUCCESS METRICS (what does "success" look like?)
5. Flag UNKNOWNS (what would you ask the client?)

Be thorough. Include edge cases and second-order effects.
```

---

### 3. Market Research Agent

**Role:** Research industry trends, competitors, market positioning.

**Inputs:**
- Industry/category
- Client's target market
- Competitor hints (if provided)

**Process:**
1. Identify top 3-5 competitors
2. Analyze their websites (design, features, messaging)
3. Research industry trends (2025-2026)
4. Identify market gaps
5. Recommend positioning angle

**Output:**
```markdown
## Market Research Report

### Industry Overview
- Trends for [Year]
- Market leaders
- Emerging players

### Competitor Analysis
| Competitor | Design Style | Key Features | Messaging |
|---|---|---|---|
| ... | ... | ... | ... |

### Market Gaps
- Opportunity 1
- Opportunity 2
- ...

### Positioning Recommendation
- Unique angle
- Differentiation strategy
```

**Prompt Template:**
```
You are a Market Research Agent for web strategy.

Industry/Category: {{ category }}
Target Market: {{ target_market }}

Your job:
1. Identify top 3-5 direct competitors
2. Analyze their website designs, features, messaging
3. Research 2025-2026 industry trends
4. Identify unmet market needs
5. Recommend a differentiation strategy

Provide data-driven insights. Include sources where possible.
```

---

### 4. Brand Detective Agent

**Role:** Extract brand personality, values, voice, target audience from brief.

**Inputs:**
- Client brief
- Any existing brand guidelines
- Company mission/vision (if provided)

**Process:**
1. Identify core values (innovation, trust, community, etc.)
2. Define brand personality (friendly, professional, playful, etc.)
3. Determine tone of voice (formal, conversational, technical, etc.)
4. Profile target audience (demographics, psychographics, pain points)
5. Recommend visual metaphors or symbolic directions

**Output:**
```markdown
## Brand Report

### Brand Values
- Value 1: [description]
- Value 2: [description]
- ...

### Brand Personality
- Archetype: [Hero/Sage/Creator/etc.]
- Traits: [friendly, innovative, trustworthy, etc.]
- Voice: [formal/conversational/playful/technical]

### Target Audience
- Demographics: [age, role, location, etc.]
- Psychographics: [values, aspirations, pain points]
- Behaviors: [how they discover products, decide, buy]

### Visual Metaphors
- Symbolic themes (nature, technology, community, etc.)
- Color psychology alignment
- Typography personality match
```

**Prompt Template:**
```
You are a Brand Detective Agent.

Client Brief: {{ brief }}

Your job:
1. Identify the brand's CORE VALUES (even if implicit)
2. Define BRAND PERSONALITY (archetype + traits)
3. Determine TONE OF VOICE (formal? playful? technical?)
4. Profile TARGET AUDIENCE (who are they, really?)
5. Recommend VISUAL METAPHORS that align with brand

Output a comprehensive brand report.
```

---

### 5. Design Explorer Agent

**Role:** Recommend 3 aesthetic directions with design systems and rationale.

**Inputs:**
- Brand report (from Brand Detective)
- Market research (from Market Research Agent)
- Industry category

**Process:**
1. Analyze brand personality + market positioning
2. Select 3 distinct aesthetic directions from [5 visual schools](../integrations/design-directions/):
   - **Editorial Monocle** (luxury, publishing, culture)
   - **Modern Minimal** (SaaS, dev tools, startups)
   - **Human Approachable** (consumer, marketplace, education)
   - **Tech Utility** (dashboards, admin, data tools)
   - **Brutalist Experimental** (art, agency, creative)
3. For each direction:
   - Explain why it fits
   - Show color palette
   - List 3 inspiration websites
   - Provide component examples
4. Recommend the top choice with confidence score

**Output:**
```markdown
## Design Exploration Report

### Direction 1: [Name]
- Rationale: Why this fits the brand
- Color Palette: [colors with hex]
- Inspiration: [3 websites]
- Component Style: [describe]
- Confidence: 85%

### Direction 2: [Name]
- Rationale: ...
- Color Palette: ...
- Inspiration: ...
- Component Style: ...
- Confidence: 70%

### Direction 3: [Name]
- ...

### Recommended Direction
**[Direction Name]** - Confidence: 85%

Rationale: [Why this is the best fit]
```

**Prompt Template:**
```
You are a Design Explorer Agent specializing in aesthetic direction.

Brand Profile:
{{ brand_report }}

Market Context:
{{ market_research }}

Your job:
1. Recommend 3 aesthetic directions from these schools:
   - Editorial Monocle (luxury, publishing)
   - Modern Minimal (SaaS, startups)
   - Human Approachable (consumer, education)
   - Tech Utility (dashboards, admin)
   - Brutalist Experimental (art, creative)

2. For each direction:
   - Explain why it fits the brand
   - Show color palette (with hex codes)
   - List 3 inspiration websites
   - Describe component style

3. Recommend your top pick with confidence score (0-100%)

Be specific. Use real websites as references.
```

---

### 6. Architecture Agent

**Role:** Plan site structure, page hierarchy, components, integrations.

**Inputs:**
- Discovery report (requirements + metrics)
- Market research (feature benchmarks)
- Design direction (aesthetic constraints)
- Industry category

**Process:**
1. Define page hierarchy (home, about, features, pricing, blog, contact, etc.)
2. Identify key components (hero, cards, forms, testimonials, etc.)
3. Plan data flows (what's static? dynamic? API-driven?)
4. Recommend integrations (analytics, auth, CMS, payments, etc.)
5. Suggest tech stack (Next.js, React, Astro, Remix, etc.)
6. Create sitemap + wireframe descriptions

**Output:**
```markdown
## Architecture Plan

### Page Hierarchy
```
/
├── / (home)
├── /features
├── /pricing
├── /blog
├── /about
├── /contact
└── /login
```

### Core Components
- Hero Section (headline, CTA, visual)
- Feature Grid (icon, title, description)
- Testimonial Card (avatar, quote, author)
- Pricing Table (tiers, features, CTA)
- Contact Form (fields, validation, submit)

### Data Flows
- Static content: [pages]
- Dynamic content: [pages]
- API integrations: [services]

### Recommended Tech Stack
- Framework: [Next.js/React/Astro/Remix]
- Styling: Tailwind CSS
- Components: shadcn/ui (or custom)
- State: [Context/Redux/Zustand]
- CMS: [Sanity/MDX/Contentful]
- Analytics: [GA4/Plausible]
- Auth: [Clerk/Supabase/Auth0]

### Integration Checklist
- [ ] Analytics
- [ ] Auth
- [ ] CMS
- [ ] Email
- [ ] Payment (if e-commerce)
- [ ] SEO
- [ ] Social

### Wireframe Descriptions
[Page name]: [description of layout, sections, components]
```

**Prompt Template:**
```
You are an Architecture Agent for website planning.

Requirements: {{ discovery }}
Market Benchmarks: {{ market_research }}
Design Direction: {{ design_direction }}
Industry: {{ industry }}

Your job:
1. Plan the SITE STRUCTURE (page hierarchy, routes)
2. Identify CORE COMPONENTS (hero, cards, forms, etc.)
3. Plan DATA FLOWS (static, dynamic, API)
4. Recommend TECH STACK (framework, styling, CMS, etc.)
5. Suggest INTEGRATIONS (analytics, auth, payments, etc.)
6. Create WIREFRAME DESCRIPTIONS for each page

Be practical. Consider performance, maintenance, scalability.
```

---

## Agent Orchestration Pattern

### Spawn Agents in Parallel (Pseudocode)

```python
async def orchestrate_website_plan(brief: str, industry: str):
    """
    Lead Orchestrator spawns all agents, waits for completion.
    """

    # Spawn all agents in parallel
    discovery_task = spawn_agent(
        role="Discovery Agent",
        prompt=discovery_prompt(brief),
        timeout=60
    )

    market_task = spawn_agent(
        role="Market Research Agent",
        prompt=market_prompt(industry),
        timeout=60
    )

    brand_task = spawn_agent(
        role="Brand Detective Agent",
        prompt=brand_prompt(brief),
        timeout=60
    )

    design_task = spawn_agent(
        role="Design Explorer Agent",
        prompt=design_prompt(brand_task, market_task),  # Depends on brand + market
        timeout=60
    )

    arch_task = spawn_agent(
        role="Architecture Agent",
        prompt=arch_prompt(discovery_task, market_task, design_task),
        timeout=60
    )

    # Wait for all to complete
    results = await asyncio.gather(
        discovery_task, market_task, brand_task,
        design_task, arch_task,
        timeout=120
    )

    # Synthesize into unified plan
    plan = synthesize_plan(results)
    return plan
```

---

## Usage Workflow

### Step 1: Collect Client Brief
```
What does the client want to build?
- Industry/product type
- Target audience
- Goals & success metrics
- Constraints (budget, timeline, tech)
- Existing brand assets
```

### Step 2: Trigger Orchestrator Agent
```bash
npm run plan:website --brief="path/to/brief.md" --industry="SaaS"
# OR
claude-code /website-planner-agent "Your client brief text here"
```

### Step 3: Agents Run in Parallel
```
⏳ Spawning 5 agents...
  → Discovery Agent
  → Market Research Agent
  → Brand Detective Agent
  → Design Explorer Agent
  → Architecture Agent

⏳ Agents working... (60 seconds)

✅ All agents complete
```

### Step 4: Review Synthesized Plan
```
website-plan.md
├── Executive Summary
├── Client Goals
├── Target Audience
├── Recommended Aesthetic (with 3 options)
├── Site Structure
├── Tech Stack
├── Integration Plan
└── Agent Reports (appendix)
```

### Step 5: Proceed to Generation
```
Load recommended design direction from integrations/design-directions/
Load recommended tech stack from techstacks/
Run workflows/generate.md
```

---

## Integration with Website Generator

### Link to Design Directions
Agents reference from: `integrations/design-directions/DIRECTIONS.md`

### Link to Tech Stacks
Agents reference from: `techstacks/[framework]/STACK.md`

### Link to Component Library
Agents can suggest: `21st.dev Magic` for components

### Link to Design Systems
Agents reference from: `integrations/design-systems/CATALOG.md` (73+ systems)

---

## When to Use Website Planner Agent

✅ **Best for:**
- New website projects with no clear direction
- Client briefs that need structured analysis
- Teams without a dedicated discovery phase
- Quick turnaround projects (need plan in hours, not days)
- Portfolio/agency showcasing analysis depth

❌ **Don't use if:**
- Client has locked design direction already
- Existing brand guidelines are comprehensive
- Timeline is extremely tight (prefer manual planning)

---

## Agent Behavior Notes

### Parallel Execution
- All agents run simultaneously (5 agents × 60s = 5-60s total runtime)
- Lead Orchestrator waits for slowest agent (with timeout)

### Fault Tolerance
- If one agent fails: Use defaults or skip that report
- If all agents fail: Error gracefully, ask user to refine brief

### Hallucination Mitigation
- Each agent cites sources (competitor URLs, industry reports, etc.)
- Market Research Agent is most prone to hallucination; requires verification
- Design Explorer Agent uses predefined schools; hard to go wrong

### Cost Optimization
- 6 agent calls per project (1 orchestrator + 5 specialists)
- ~3-5 minutes runtime (depends on LLM latency)
- Batch processing: Can run 10 projects simultaneously if API allows

---

## Example Output

### Input Brief
```
We're building a SaaS product for freelance designers
to collaborate on projects remotely. We want to feel
modern, trust-building, and community-driven. Target:
small design teams (2-10 people). Goal: 500 signups
in 6 months.
```

### Output Plan (Excerpt)

```markdown
# Website Plan: DesignTeam Pro

## Recommended Aesthetic Direction
**Modern Minimal** - Confidence: 92%

Why: Your target audience (designers) expect clean,
contemporary aesthetics. Modern Minimal resonates with
tech-forward teams and emphasizes your product, not
decoration.

Color Palette:
- Primary: #0066CC (trust, professional)
- Accent: #7B5FFF (creativity)
- Neutral: #F5F5F5 to #1A1A1A

Inspiration:
- Linear.app (collaboration + clean)
- Figma (designer-friendly, community-focused)
- Vercel (modern startup aesthetic)

## Site Structure
/ (Home) → Hero + Social Proof + Features
/features → Detailed feature comparison
/pricing → 3 tiers, highlight team plans
/case-studies → Real team stories
/docs → Integration guides
/community → User showcase, stories
/contact → Sales inquiry form

## Tech Stack Recommendation
- Framework: Next.js 15
- Styling: Tailwind CSS v4
- Components: shadcn/ui
- CMS: MDX (for docs + blog)
- Auth: Clerk
- Analytics: Plausible
- Email: Resend

## Next Steps
1. Run design direction workflow
2. Build components using 21st.dev Magic
3. Implement site structure with Next.js
4. Populate content + integrations
5. Deploy to Vercel
```

---

## Files to Reference

- [`integrations/design-directions/DIRECTIONS.md`](../integrations/design-directions/) — 5 visual schools
- [`integrations/design-systems/CATALOG.md`](../integrations/design-systems/) — 73+ design systems
- [`techstacks/`](../techstacks/) — Framework guides
- [`integrations/motion/CATALOG.md`](../integrations/motion/) — Animation library
- [`skills/critique/SKILL.md`](../critique/) — 5D review framework
