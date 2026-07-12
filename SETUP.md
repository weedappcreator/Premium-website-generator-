# Workspace Setup Guide

## Quick Start

### 1. Website Generator (Ready)

```bash
cd website-generator
npm install
npm run dev
```

Visit: `http://localhost:3000`

### 2. Marketing Agency (Template)

When ready to build:

```bash
cd marketing-agency
npm init -y
npm install react next typescript tailwindcss
# ... configure as needed
```

### 3. Automations (Template)

When ready to build:

```bash
cd automations
npm init -y
npm install react next typescript tailwindcss
# ... configure as needed
```

---

## How to Use with Different LLMs

### Option A: OpenCode (175+ models)

```bash
# In any project directory:
export LLM_PROVIDER=opencode
export OPENCODE_API_KEY=your_key_here
npm run dev
```

Get API key: https://opencode.dev

### Option B: Ollama (Local models)

```bash
# Start Ollama server first
ollama serve

# In another terminal, in project directory:
export LLM_PROVIDER=ollama
export OLLAMA_BASE_URL=http://localhost:11434/v1
npm run dev
```

Pull a model:
```bash
ollama pull llama2         # Llama 2
ollama pull mistral        # Mistral
ollama pull neural-chat    # Neural Chat
```

### Option C: Claude (Anthropic)

```bash
export LLM_PROVIDER=claude
export ANTHROPIC_API_KEY=your_key_here
npm run dev
```

### Option D: Demo/Mock (No API needed)

```bash
npm run dev
```

Falls back to mock responses if no provider is configured.

---

## Project Independence

Each project has:
- ✅ Own `.env` (LLM configuration)
- ✅ Own `package.json` (dependencies)
- ✅ Own `.git` history
- ✅ Own database (if applicable)

**You can run multiple projects simultaneously:**

```bash
# Terminal 1: website-generator
cd website-generator && npm run dev:opencode

# Terminal 2: marketing-agency
cd marketing-agency && npm run dev:ollama

# Terminal 3: automations
cd automations && npm run dev:claude
```

Each runs independently with its own LLM.

---

## Switching Projects in Claude Code

When working with an LLM (Claude Code, OpenCode CLI, etc.):

```
"Switch to website-generator and add feature X"
→ I change context to website-generator/

"Go to marketing-agency and build the dashboard"
→ I change context to marketing-agency/

"Open automations and fix the scheduler"
→ I change context to automations/
```

Each project is worked on independently.

---

## Environment Variables

Create `.env.local` in each project for secrets:

```bash
# website-generator/.env.local
LLM_PROVIDER=opencode
OPENCODE_API_KEY=sk-...
DATABASE_URL=...

# marketing-agency/.env.local
LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://localhost:11434/v1

# automations/.env.local
LLM_PROVIDER=claude
ANTHROPIC_API_KEY=sk-ant-...
```

`.env.local` is in `.gitignore` — secrets stay local.

---

## Common Commands Reference

```bash
# Install dependencies
npm install

# Development
npm run dev              # Use LLM_PROVIDER from .env
npm run dev:opencode    # Force OpenCode
npm run dev:ollama      # Force Ollama
npm run dev:claude      # Force Claude

# Production
npm run build
npm run start

# Testing & Linting
npm run test
npm run lint

# Database (if applicable)
npx prisma migrate dev  # Create/apply migrations
npx prisma studio      # Browse DB GUI
```

---

## Troubleshooting

**Port already in use?**
```bash
# Change port in next.config.js or set:
PORT=3001 npm run dev
```

**LLM not responding?**
1. Check `.env` has correct `LLM_PROVIDER` and API keys
2. Test API key separately
3. Check OpenCode/Ollama/Claude API status
4. Fallback to mock mode: unset `LLM_PROVIDER`

**Dependencies missing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Database issues?**
```bash
# Reset database (⚠️ deletes data)
npm run db:reset

# Or with Prisma:
npx prisma migrate reset
```

---

## Next Steps

1. ✅ **website-generator** — Start developing
2. 🚧 **marketing-agency** — Set up when ready
3. 🚧 **automations** — Set up when ready

Questions? Check each project's README.
