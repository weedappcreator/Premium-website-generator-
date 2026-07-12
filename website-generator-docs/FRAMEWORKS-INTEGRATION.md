# Frameworks Integration Guide

This document explains the imported frameworks and how to use them in website generation.

## What's Included

### 1. **Agency-Agents Library** (61 Specialized Agents)
📍 Location: `skills/agency-agents-lib/`

**Source:** [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) (10k+ ⭐)

**What it contains:**
- **Design Division** (10 agents): UI Designer, UX Architect, Brand Guardian, Visual Storyteller, etc.
- **Engineering Division** (27 agents): Frontend, Backend, Mobile, Security, Database, etc.
- **Marketing Division** (12+ agents): Content, Social Media, SEO, Email, Growth Hacker, etc.
- **Integrations** (11 platforms): Claude Code, Cursor, GitHub Copilot, Gemini CLI, Qwen, OpenCode, etc.
- **Examples** (real-world agent orchestrations)

**Structure:**
```
agency-agents-lib/
├── design/             ← 10 design agents
├── engineering/        ← 27 engineering agents
├── marketing/          ← 12+ marketing agents
├── integrations/       ← Platform-specific configs
└── examples/           ← Multi-agent orchestration examples
```

**How to Use:**
Load agents from this library when building multi-agent workflows. For a website project:

```markdown
# Website Project: DesignTeam Pro

## Agents Assigned

### Design Team
- Load from: `agency-agents-lib/design/UI_Designer.md`
- Load from: `agency-agents-lib/design/Brand_Guardian.md`
- Load from: `agency-agents-lib/design/UX_Architect.md`

### Engineering Team
- Load from: `agency-agents-lib/engineering/Frontend_Developer.md`
- Load from: `agency-agents-lib/engineering/Backend_Architect.md`

### Marketing Team
- Load from: `agency-agents-lib/marketing/Content_Creator.md`
- Load from: `agency-agents-lib/marketing/Growth_Hacker.md`
```

**Agent Orchestration Pattern:**
```
Lead Orchestrator
  ├→ UI Designer (layout, components)
  ├→ Brand Guardian (brand consistency)
  ├→ Frontend Developer (code quality)
  ├→ UX Architect (information architecture)
  └→ Content Creator (copy & messaging)
```

---

### 2. **Design Systems Library** (73 Systems)
📍 Location: `integrations/design-systems-full/`

**Source:** [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)

**What it contains:**
73 production-grade design systems from real brands:

- **AI & LLM Platforms** (11 systems): Claude, Cohere, ElevenLabs, Mistral, Ollama, etc.
- **Developer Tools** (10 systems): Cursor, Expo, Raycast, Vercel, Warp, etc.
- **SaaS & Productivity** (15 systems): Linear, Notion, Cal.com, Zapier, etc.
- **Fintech** (8 systems): Stripe, Coinbase, Wise, Kraken, etc.
- **E-commerce** (12 systems): Shopify, Nike, Airbnb, etc.
- **Design Tools** (6 systems): Figma, Framer, Webflow, etc.
- **Media & Tech** (8 systems): Apple, Spotify, IBM, SpaceX, etc.
- **Automotive** (3 systems): Tesla, BMW, Ferrari

**Structure (per design system):**
```
design-systems-full/
├── claude/
│   ├── DESIGN.md          ← Full design system in Stitch format
│   ├── preview.html       ← Light theme preview
│   └── preview-dark.html  ← Dark theme preview
├── linear/
├── stripe/
├── figma/
... (71 more systems)
```

**Stitch DESIGN.md Format Includes:**
1. Visual Theme
2. Color Palette (hex codes)
3. Typography (fonts, sizes, weights)
4. Component Styling (buttons, cards, inputs, etc.)
5. Layout Principles
6. Depth & Elevation
7. Guidelines & Rules
8. Responsive Behavior
9. Agent Prompts

**How to Use:**
When a client says "make it look like X", load that system:

```bash
# Load Claude's design system
cat integrations/design-systems-full/claude/DESIGN.md | \
  xargs -I {} echo "Use this design system: {}"

# Load Stripe's design system
cat integrations/design-systems-full/stripe/DESIGN.md | \
  xargs -I {} echo "Use this design system: {}"
```

**Integration with Agents:**
```
UI Designer reads: design-systems-full/[brand]/DESIGN.md
  → Generates components matching that system
  → Applies colors, typography, spacing
  → Follows component patterns
```

---

### 3. **Agent Skills Index** (1000+ Skills)
📍 Location: `skills/awesome-agent-skills-index/SKILLS.md`

**Source:** [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) (1000+ skills)

**What it contains:**
1500+ line curated list of skills across categories:
- **Research Skills** (discovery, market analysis, competitive intelligence)
- **Planning Skills** (architecture, roadmapping, UX planning)
- **Design Skills** (UI/UX, branding, illustration, animation)
- **Coding Skills** (frontend, backend, full-stack, database)
- **Testing Skills** (QA, performance, accessibility, security)
- **Deployment Skills** (CI/CD, monitoring, scaling)
- **Marketing Skills** (copywriting, SEO, analytics, social media)
- **Sales Skills** (discovery calls, pitch, negotiations)

**Format:**
Each skill is documented with:
- **Skill Name** — What it does
- **Agent** — Who performs it (from agency-agents or custom)
- **Input** — What data it needs
- **Output** — What it produces
- **Tools** — Dependencies (APIs, libraries, frameworks)
- **Success Criteria** — How to measure it

**How to Use:**
```markdown
# Website Project Skills Checklist

- [ ] Discovery Research (from SKILLS.md → Research section)
- [ ] Market Analysis (from SKILLS.md → Research section)
- [ ] User Research (from SKILLS.md → Design section)
- [ ] Wireframing (from SKILLS.md → Design section)
- [ ] Component Design (from SKILLS.md → Design section)
- [ ] Frontend Development (from SKILLS.md → Coding section)
- [ ] Performance Testing (from SKILLS.md → Testing section)
- [ ] SEO Optimization (from SKILLS.md → Marketing section)
- [ ] Deploy to Production (from SKILLS.md → Deployment section)
```

**Search Skills:**
```bash
grep -i "website" skills/awesome-agent-skills-index/SKILLS.md
grep -i "design discovery" skills/awesome-agent-skills-index/SKILLS.md
grep -i "conversion" skills/awesome-agent-skills-index/SKILLS.md
```

---

## Complete Workflow: Using All 3 Frameworks

### Step 1: Project Initialization
```
Client Brief: "Build landing page for AI writing tool"
  ↓
Load Discovery Skills from: SKILLS.md (awesome-agent-skills-index)
  → Understand target audience
  → Analyze competitors
  → Define success metrics
```

### Step 2: Assign Agent Team
```
Based on project scope, assign from: agency-agents-lib/
  → UI Designer (component design)
  → Brand Guardian (brand alignment)
  → Frontend Developer (code quality)
  → Content Creator (messaging)
```

### Step 3: Select Design Direction
```
Client wants "modern, minimalist aesthetic"
  ↓
Load Design System from: design-systems-full/
  Options:
  - linear/ (clean SaaS aesthetic)
  - stripe/ (professional tech)
  - vercel/ (modern startup)
  ↓
Pick best match + load DESIGN.md
```

### Step 4: Execute Design Skills
```
From SKILLS.md (Design section):
  → Component Design (using loaded design system)
  → Information Architecture
  → Interaction Design
  → Accessibility Audit
```

### Step 5: Execute Code Skills
```
From SKILLS.md (Coding section):
  → Frontend Implementation
  → Component Library Setup
  → Performance Optimization
  → Testing
```

### Step 6: Ship
```
From SKILLS.md (Deployment section):
  → Deploy to Production
  → Monitor Performance
  → A/B Testing Setup
```

---

## File Structure Summary

```
website-generator/
├── FRAMEWORKS-INTEGRATION.md      ← You are here
│
├── skills/
│   ├── website-planner-agent/     ← Orchestrator for agent teams
│   ├── agency-agents-lib/         ← 61 specialized agents
│   │   ├── design/                ← 10 design agents
│   │   ├── engineering/           ← 27 engineering agents
│   │   ├── marketing/             ← 12+ marketing agents
│   │   ├── integrations/          ← Platform configs
│   │   └── examples/              ← Multi-agent examples
│   │
│   └── awesome-agent-skills-index/
│       └── SKILLS.md              ← 1000+ skills index
│
├── integrations/
│   ├── design-systems-full/       ← 73 production design systems
│   │   ├── claude/
│   │   ├── linear/
│   │   ├── stripe/
│   │   ├── figma/
│   │   └── ... (68 more)
│   │
│   └── design-directions/         ← 5 visual schools
│       ├── editorial-monocle/
│       ├── modern-minimal/
│       ├── human-approachable/
│       ├── tech-utility/
│       └── brutalist-experimental/
│
└── workflows/
    └── generate.md                ← Main generation workflow
```

---

## Quick Reference: When to Use Each Framework

| Framework | When to Use | What For |
|---|---|---|
| **website-planner-agent** | Project kickoff | Orchestrate discovery + design planning |
| **agency-agents-lib** | Building the team | Assign specialized agents to tasks |
| **SKILLS.md** | Execution | Reference detailed skill definitions |
| **design-systems-full** | Design phase | Pick visual direction + load design system |

---

## Integration with Existing Workflow

### Before (Original workflow)
```
Client Brief
  ↓
Manual Planning
  ↓
Generate Components
  ↓
Ship
```

### After (With frameworks)
```
Client Brief
  ↓
website-planner-agent (orchestrates discovery)
  ├→ Market Research Agent
  ├→ Brand Detective Agent
  ├→ Design Explorer Agent
  └→ Architecture Agent
  ↓
Assign Agent Team (from agency-agents-lib)
  ├→ UI Designer
  ├→ Frontend Developer
  ├→ Content Creator
  └→ QA Tester
  ↓
Execute Skills (from SKILLS.md)
  ├→ Component Design
  ├→ Frontend Implementation
  ├→ Performance Testing
  └→ Deployment
  ↓
Load Design System (from design-systems-full)
  → Apply visual direction
  → Generate pixel-perfect components
  ↓
Ship
```

---

## Customization & Extension

### Add Custom Agent
```
Create: skills/agency-agents-lib/design/Custom_Agent.md
Follow format from existing agents (roles, workflows, outputs)
```

### Add Design System
```
Create: integrations/design-systems-full/[brand]/DESIGN.md
Follow Stitch DESIGN.md format
Include: colors, typography, components, guidelines
```

### Add New Skill
```
Edit: skills/awesome-agent-skills-index/SKILLS.md
Add entry under appropriate category (Design, Coding, etc.)
```

---

## Links

- **Agency Agents**: https://github.com/msitarzewski/agency-agents
- **Awesome Design MD**: https://github.com/VoltAgent/awesome-design-md
- **Awesome Agent Skills**: https://github.com/VoltAgent/awesome-agent-skills
