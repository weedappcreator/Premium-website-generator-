# Architecture Planning

## Site Structure

Map out the page hierarchy:

```
/
├── / (Home)
├── /about
├── /services (or /products)
├── /pricing
├── /blog
│   └── /blog/[slug]
├── /contact
└── /legal
    ├── /privacy
    └── /terms
```

## Component Hierarchy

Identify reusable components:

- **Layout**: Navbar, Footer, Sidebar, Container
- **Sections**: Hero, Features, Testimonials, CTA, Pricing, FAQ
- **UI**: Buttons, Cards, Forms, Modals, Alerts
- **Content**: BlogPost, AuthorCard, ImageGallery

## Tech Stack Decision Matrix

| Need | Recommendation |
|---|---|
| SEO-heavy, content site | Astro or Next.js |
| Dynamic app with auth | Next.js or Remix |
| Simple landing page | Vanilla HTML/CSS or Astro |
| E-commerce | Next.js + Stripe / Shopify |
| Blog-first | Astro or Next.js |
| Vue ecosystem | Nuxt |
| No JS needed | Vanilla HTML/CSS |

## Integration Checklist

Review `integrations/` directory and select based on client needs:

- **Auth**: Clerk, Supabase Auth, Auth0, NextAuth
- **Payment**: Stripe, PayPal, Gumroad, LemonSqueezy
- **Analytics**: Google Analytics, Plausible, PostHog, Vercel Analytics
- **CMS**: Sanity, Contentful, Strapi, MDX
- **Email**: Resend, SendGrid, Mailchimp, ConvertKit
- **CRM**: HubSpot, Salesforce, Pipedrive
- **SEO**: Schema markup, sitemap, Open Graph, Twitter Cards
- **Social**: Social sharing, social proof widgets, feed embeds
