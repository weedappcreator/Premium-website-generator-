# Automations — Workflow & Task Automation Platform

AI-powered workflow automation, task scheduling, and integration orchestration.

## Setup

```bash
npm install
npm run dev
```

## LLM Provider

Set your preferred LLM in `.env`:

```env
LLM_PROVIDER=opencode          # Claude, GPT, Gemini, DeepSeek, etc.
# LLM_PROVIDER=ollama          # Local models
# LLM_PROVIDER=claude          # Anthropic direct
OPENCODE_API_KEY=your_key_here
```

## Available Commands

```bash
npm run dev              # Start with default LLM_PROVIDER
npm run dev:opencode    # Force OpenCode
npm run dev:ollama      # Force Ollama
npm run build           # Production build
npm run lint            # Run ESLint
```

## Project Status

🚧 **Template** — Ready for development

This is a template project. Set it up when you're ready to build automation features.
