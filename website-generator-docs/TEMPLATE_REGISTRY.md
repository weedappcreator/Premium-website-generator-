# Template Registry

On-demand template loading from GitHub. Templates are fetched only when needed, not stored locally.

## Usage

```bash
# Fetch a template on-demand
node src/lib/template-loader.js fetch <template-name>

# List available templates
node src/lib/template-loader.js list

# Search templates by type
node src/lib/template-loader.js search landing
```

## Integrations (27 templates)

| Name | Type | Tech Stack | GitHub Repo |
|------|------|------------|-------------|
| Landing-Page | Landing Page | HTML/Tailwind | tailwindtoolbox/Landing-Page |
| Next-JS-Landing-Page-Starter-Template | Landing Page | Next.js/React | ixartz/Next-JS-Landing-Page-Starter-Template |
| Precart | E-commerce | Next.js | mukesh7700/Precart |
| astro-landing-page | Landing Page | Astro | mhyfritz/astro-landing-page |
| awesome-landing-pages | Landing Page | HTML/CSS | PaulleDemon/awesome-landing-pages |
| landwind | Landing Page | Tailwind | themesberg/landwind |
| next-enterprise | Enterprise | Next.js | Blazity/next-enterprise |
| next-js-boilerplate | Boilerplate | Next.js | ixartz/Next-js-Boilerplate |
| next-saas-starter | SaaS | Next.js | Blazity/next-saas-starter |
| nextjs-subscription-payments | SaaS/Payments | Next.js/Stripe | vercel/nextjs-subscription-payments |
| nextly-template | Landing Page | Next.js | web3templates/nextly-template |
| nike_landing_page | Landing Page | React/Tailwind | adrianhajdin/nike_landing_page |
| open-react-template | Landing Page | React | cruip/open-react-template |
| orebishopping | E-commerce | React | noorjsdivs/orebishopping |
| purplify-ecommerce-bloom | E-commerce | React | StrangerSeemanta/purplify-ecommerce-bloom |
| shadcn-landing-page | Landing Page | React/shadcn | leoMirandaa/shadcn-landing-page |
| shadcn-landing-page-nobruf | Landing Page | React/shadcn | nobruf/shadcn-landing-page |
| skateshop | E-commerce | Next.js/shadcn | sadmann7/skateshop |
| tailwind-landing-page-template | Landing Page | HTML/Tailwind | cruip/tailwind-landing-page-template |
| vercel-platforms | Multi-tenant | Next.js | vercel/platforms |
| material-tailwind | UI Kit | React/Tailwind | creativetimofficial/material-tailwind |
| material-tailwind-dashboard | Dashboard | React/Tailwind | creativetimofficial/material-tailwind-dashboard-react |
| bagisto | E-commerce | Laravel | bagisto/bagisto |
| free-nonprofit-starter-website | Nonprofit | HTML/CSS | smartergiving/free-nonprofit-starter-website |
| awesome-n8n-templates | Automation | n8n | ScraperNode/awesome-n8n-templates |
| higgsfield-ai-prompt-skill | AI Media | Higgsfield | OSideMedia/higgsfield-ai-prompt-skill |
| open-react-template-new | Landing Page | React | cruip/open-react-template |

## Templates-Integrated (5 repos)

| Name | Type | Tech Stack | GitHub Repo |
|------|------|------------|-------------|
| astrowind-blog-portfolio | Blog/Portfolio | Astro | arthelokyo/astrowind |
| jamstack-themes | Multi | Jamstack | onweru/jamstackthemes |
| learning-zone-templates | Multi | HTML/CSS | learning-zone/website-templates |
| play-astro-startup | Startup | Astro | TailGrids/play-astro |
| relivator-saas-ecommerce | SaaS/E-commerce | Next.js | reliverse/relivator |

## Techstacks Integration (4)

| Name | Stack | GitHub Path |
|------|-------|-------------|
| nextjs-full-integration | Next.js | website-generator/techstacks-integration/nextjs-full-integration |
| react-full-integration | React | website-generator/techstacks-integration/react-full-integration |
| fullstack-remix-integration | Remix | website-generator/techstacks-integration/fullstack-remix-integration |
| astro-full-integration | Astro | website-generator/techstacks-integration/astro-full-integration |

## Fetching Templates

Templates are fetched from GitHub raw content:
```
https://raw.githubusercontent.com/{owner}/{repo}/main/{file}
```

For repos using `master` branch, replace `main` with `master`.

## Template Selection Guide

| Need | Recommended Template |
|------|---------------------|
| SaaS landing | next-saas-starter, next-enterprise |
| E-commerce | skateshop, Precart, orebishopping |
| Simple landing | landwind, Landing-Page, tailwind-landing-page-template |
| Dashboard | material-tailwind-dashboard |
| Blog | astrowind-blog-portfolio |
| Payments | nextjs-subscription-payments |
| Multi-tenant | vercel-platforms |
