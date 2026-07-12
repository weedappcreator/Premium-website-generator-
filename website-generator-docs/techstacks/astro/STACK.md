# Tech Stack: Astro

## When to Use

- Content-heavy sites (blogs, docs)
- Landing pages
- Marketing sites
- Performance-critical sites
- Minimal JavaScript needed

## Setup

```bash
npm create astro@latest
cd my-site
```

## Structure

```
src/
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   └── blog/
│       ├── index.astro
│       └── [slug].md
└── components/
    └── Header.astro
```

## Key Features

- Zero JS by default (islands architecture)
- Markdown/MDX support built-in
- Framework agnostic (React, Vue, Svelte components)
- SSG by default, SSR optional
- Image optimization
- RSS feed generation

## Recommended Packages

```json
{
  "dependencies": {
    "astro": "^5",
    "@astrojs/sitemap": "^3",
    "@astrojs/mdx": "^4"
  }
}
```

## Deployment

- Netlify
- Vercel
- GitHub Pages
- Any static host
