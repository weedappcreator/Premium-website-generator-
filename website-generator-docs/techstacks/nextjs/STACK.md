# Tech Stack: Next.js

## When to Use

- SEO-critical sites
- Dynamic apps with auth
- E-commerce
- SaaS marketing + app
- Blogs with SSR/SSG

## Setup

```bash
npx create-next-app@latest my-site --typescript --tailwind --app
cd my-site
```

## Structure

```
app/
├── layout.tsx          ← Root layout
├── page.tsx            ← Home page
├── about/
│   └── page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
└── api/                ← API routes
    └── route.ts
```

## Key Features

- App Router (React Server Components)
- File-based routing
- Server-side rendering
- Static generation
- API routes
- Image optimization (`next/image`)
- Font optimization (`next/font`)
- Metadata API for SEO

## Recommended Packages

```json
{
  "dependencies": {
    "next": "^15",
    "react": "^19",
    "react-dom": "^19",
    "next-seo": "^6",
    "@vercel/analytics": "^1"
  }
}
```

## Deployment

- Vercel (recommended, zero config)
- Docker
- Node.js server
