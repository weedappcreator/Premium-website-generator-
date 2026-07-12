# Tech Stack: React (Vite)

## When to Use

- SPAs with client-side routing
- Dashboards, admin panels
- Interactive apps
- When SSR not needed

## Setup

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

## Structure

```
src/
├── main.tsx
├── App.tsx
├── components/
├── pages/
├── hooks/
├── utils/
└── styles/
```

## Recommended Packages

```json
{
  "dependencies": {
    "react": "^19",
    "react-dom": "^19",
    "react-router-dom": "^7",
    "tailwindcss": "^4"
  }
}
```

## Deployment

- Vercel
- Netlify
- GitHub Pages
- Any static host
