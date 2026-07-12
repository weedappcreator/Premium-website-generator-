# Workspace — Multi-Project Environment

This workspace contains **independent projects**, each with its own codebase, configuration, and LLM provider.

## Projects

### 1. **website-generator**
AI-powered website builder. Generate, edit, and deploy websites via LLM chat.

```bash
cd website-generator
npm install
npm run dev              # with default LLM_PROVIDER
npm run dev:opencode    # Force OpenCode (175+ models)
npm run dev:ollama      # Force Ollama (local models)
npm run dev:claude      # Force Claude
```

### 2. **marketing-agency** *(Coming)*
Marketing automation and campaign builder.

```bash
cd marketing-agency
npm install
npm run dev
```

### 3. **automations** *(Coming)*
Workflow automation and task scheduling.

```bash
cd automations
npm install
npm run dev
```

---

## Working with Any LLM

Each project is **LLM-agnostic**. Use any provider:

```bash
# OpenCode (Claude, GPT, Gemini, DeepSeek, etc.)
LLM_PROVIDER=opencode npm run dev

# Ollama (local models)
LLM_PROVIDER=ollama npm run dev

# Claude direct API
LLM_PROVIDER=claude npm run dev

# Fallback to mock if no keys
npm run dev
```

Edit `.env` or `.env.local` in each project to set `LLM_PROVIDER` and API keys.

---

## Switching Projects

To work on a specific project from Claude Code:

```
"Switch to website-generator and add feature X"
"Open marketing-agency and update the dashboard"
"Go to automations and fix the scheduler"
```

I'll change context to that project's directory and work on it independently.

---

## Project Independence

Each project is:
- ✅ **Separate git repository** (own `.git/` history)
- ✅ **Own dependencies** (`node_modules/`)
- ✅ **Own database** (`prisma/` + SQLite)
- ✅ **Own configuration** (`.env`, `.env.local`)
- ✅ **Own deployment** (can deploy separately)

**Changes in one project never affect others.**

---

## Getting Started

1. **website-generator** is ready → `cd website-generator && npm install && npm run dev`
2. **marketing-agency** & **automations** are templates → set them up when needed

Each has a README with detailed setup instructions.
