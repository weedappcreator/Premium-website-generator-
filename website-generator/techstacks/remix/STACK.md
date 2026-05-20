# Tech Stack: Remix

## When to Use

- Full-stack React apps
- Form-heavy applications
- Progressive enhancement
- When you love React + want better data loading

## Setup

```bash
npx create-remix@latest
cd my-site
```

## Structure

```
app/
├── root.tsx
├── routes/
│   ├── _index.tsx
│   ├── about.tsx
│   └── blog.$slug.tsx
└── components/
```

## Key Features

- File-based routing
- Nested layouts
- Loader/Action pattern
- Form handling
- SSR by default

## Deployment

- Vercel
- Fly.io
- Docker
- Any Node.js host
