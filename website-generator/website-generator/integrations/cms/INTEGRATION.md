# Integration: CMS

## Options

### Sanity
- **Best for**: Structured content, real-time, customizable
- **Setup**: `npm install next-sanity`
- **Features**: Visual editing, webhooks, GROQ query language

### Contentful
- **Best for**: Enterprise, multi-language, workflows
- **Setup**: `npm install contentful`
- **Features**: Content modeling, localization, environments

### MDX (Local)
- **Best for**: Developer blogs, no external dependency
- **Setup**: Built into Astro/Next.js
- **Features**: Markdown + React components

### Strapi
- **Best for**: Self-hosted, open source
- **Setup**: Docker or npm
- **Features**: REST/GraphQL API, media library

## Decision Guide

| Need | Choose |
|---|---|
| Developer blog | MDX |
| Visual editing + flexible | Sanity |
| Enterprise + multi-lang | Contentful |
| Self-hosted | Strapi |
