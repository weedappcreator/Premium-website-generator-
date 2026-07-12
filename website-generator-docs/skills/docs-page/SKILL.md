# Skill: Documentation Page

## Purpose
Generate developer-friendly documentation sites with 3-column layout.

## Structure

```
/
├── Left Sidebar (navigation tree)
├── Main Content (markdown-rendered docs)
├── Right Sidebar (table of contents)
└── Top Bar (search, version selector, theme toggle)
```

## Layout

- **Left sidebar**: Collapsible navigation tree, active page highlighted
- **Main content**: Prose-optimized reading, max 75ch line length
- **Right sidebar**: On-page TOC, sticky, shows current section
- **Top bar**: Search (Cmd+K), version dropdown, GitHub link, theme toggle

## Content Elements

- Code blocks with syntax highlighting + copy button
- Callouts (info, warning, tip, danger)
- Inline code with monospace font
- Tables for API references
- Before/after code examples
- Step-by-step guides with numbered lists
- Cross-references to other docs

## Navigation

- Breadcrumbs above content
- Previous/Next page links at bottom
- Search with fuzzy matching
- Version selector for multi-version docs
- Language selector if i18n

## Anti-Patterns
- Don't use marketing-style layouts
- Don't hide navigation behind clicks
- Don't use decorative animations
- Don't make code blocks hard to copy
- Don't use tiny font sizes (16px minimum)

## Technical Requirements
- MDX support for interactive examples
- Full-text search (Algolia, Pagefind, or client-side)
- Syntax highlighting (Shiki, Prism)
- Dark mode
- Print-friendly CSS
- Schema markup (TechArticle)
