# Integration: 21st.dev Magic Component Library

## What It Is

21st.dev Magic is an AI-powered component generation tool — like v0 but inside your IDE. It gives the LLM access to a curated library of professional, modern UI components inspired by 21st.dev's collection.

## What It Provides

- **Pre-built professional components** — navbars, hero sections, pricing tables, feature grids, testimonials, footers, forms, cards, modals
- **Multiple design styles** — minimal, glassmorphism, brutalist, editorial, gradient, dark mode
- **Framework support** — React, Next.js, Tailwind CSS, shadcn/ui
- **SVGL integration** — professional brand logos and icons
- **TypeScript** — fully typed components

## How to Use

### In VS Code (Workspace Config)

The MCP server is configured in `.vscode/mcp.json`. When you open this workspace in VS Code, the Magic server is available to any AI agent (Copilot, Cline, etc.).

### With Any LLM

Tell the LLM to use Magic to generate components:

```
"Use 21st.dev Magic to create a hero section with a gradient background and animated CTA"
"Generate a pricing table with 3 tiers using Magic"
"Create a testimonial carousel component via Magic"
```

### Component Categories Available

| Category | Examples |
|---|---|
| **Navigation** | Navbar, sidebar, breadcrumbs, tabs |
| **Hero** | Gradient hero, minimal hero, video hero |
| **Features** | Feature grid, bento grid, icon list |
| **Pricing** | 3-tier pricing, comparison table |
| **Testimonials** | Card carousel, quote grid, video testimonials |
| **CTA** | Banner CTA, inline CTA, floating CTA |
| **Forms** | Contact form, newsletter signup, login |
| **Cards** | Blog cards, product cards, team cards |
| **Footers** | Multi-column footer, minimal footer |
| **Modals** | Dialog, drawer, toast notifications |

## Workflow Integration

1. **Generate base structure** using the website-generator workflow
2. **Use Magic** to generate polished, production-ready components
3. **Apply Impeccable** to audit and refine the design quality
4. **Customize** to match the client's brand

## MCP Configuration

```json
{
  "servers": {
    "magic": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@21st-dev/magic@latest"],
      "env": {
        "API_KEY": "<your-api-key>"
      }
    }
  }
}
```

### Config Locations

| IDE | Config Path |
|---|---|
| VS Code (workspace) | `.vscode/mcp.json` |
| VS Code (global) | `~/Library/Application Support/Code/User/mcp.json` |
| Cursor | `~/.cursor/mcp.json` |
| Windsurf | `~/.codeium/windsurf/mcp_config.json` |
| Cline | `~/.cline/mcp_config.json` |
| Claude Code | `~/.claude/mcp_config.json` |

## API Key

Get your API key at [21st.dev/magic/console](https://21st.dev/magic/console)
