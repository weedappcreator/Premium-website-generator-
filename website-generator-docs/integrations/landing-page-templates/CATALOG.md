# Landing Page Template Catalog

Extracted from top GitHub repos with >500 stars tagged `tailwindcss` + `landing-page`. Provides structural patterns, component layouts, and generation prompts for professional landing page generation.

## Sources Analyzed

| Repo | Stars | Stack | Sections |
|------|-------|-------|----------|
| [cruip/tailwind-landing-page-template](https://github.com/cruip/tailwind-landing-page-template) | 4.4k | Next.js + TypeScript + Tailwind | Hero, Features, Business Categories, Testimonial, CTA, Banner |
| [ixartz/Next-JS-Landing-Page-Starter-Template](https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template) | 2.1k | Next.js + TypeScript + Tailwind | Hero, Features, Sponsors, CTA, Footer |
| [leoMirandaa/shadcn-landing-page](https://github.com/leoMirandaa/shadcn-landing-page) | 1.9k | React + Vite + TypeScript + shadcn/ui + Tailwind | Hero, Features, Services, HowItWorks, Pricing, Team, Testimonials, FAQ, Stats, Newsletter, CTA |
| [tailwindtoolbox/Landing-Page](https://github.com/tailwindtoolbox/Landing-Page) | 1.4k | HTML + Tailwind | Hero, Features, Pricing, Testimonials, CTA |
| [adrianhajdin/nike_landing_page](https://github.com/adrianhajdin/nike_landing_page) | 1.5k | React + Vite + Tailwind | Hero, SuperQuality, Services, PopularProducts, SpecialOffer, Reviews, Subscribe |
| [nobruf/shadcn-landing-page](https://github.com/nobruf/shadcn-landing-page) | 1.2k | Next.js + shadcn/ui + TypeScript + Tailwind | Hero, Features, Pricing, Testimonials, CTA |
| [web3templates/nextly-template](https://github.com/web3templates/nextly-template) | 1k | Next.js + Tailwind | Hero, Features, Pricing, Testimonials, FAQ, CTA |
| [themesberg/landwind](https://github.com/themesberg/landwind) | 1k | HTML + Tailwind + Flowbite | Hero, Features, Stats, Testimonials, Pricing, CTA, Team, Contact |
| [PaulleDemon/awesome-landing-pages](https://github.com/PaulleDemon/awesome-landing-pages) | 970 | HTML + CSS | Multiple landing page variants |
| [mhyfritz/astro-landing-page](https://github.com/mhyfritz/astro-landing-page) | 672 | Astro + Tailwind | Hero, Features, Pricing, FAQ, CTA |

---

## Universal Landing Page Section Order

```
1. Navbar/Header (sticky, with logo, nav links, CTA button, mobile menu)
2. Hero (headline, subheadline, CTA buttons, hero image/illustration)
3. Logos/Sponsors (trusted by companies)
4. Features (product capabilities, alternating image+text rows)
5. How It Works (step-by-step process)
6. Services (what you offer)
7. Statistics/Social Proof (numbers, metrics)
8. Pricing (3-tier pricing cards)
9. Team (team members with photos)
10. Testimonials (customer quotes, carousel)
11. FAQ (accordion)
12. Newsletter (email signup)
13. CTA (final call-to-action banner)
14. Footer (links, social, copyright)
```

---

## Component Breakdown by Repo

### Cruip Templates (open-react-template + tailwind-landing-page-template)
| Component | File | Description |
|-----------|------|-------------|
| Hero | `hero-home.tsx` | Split layout with illustration, gradient background |
| Features | `features.tsx` | Feature cards with icons |
| Features Planet | `features-planet.tsx` | Animated planet visualization |
| Workflows | `workflows.tsx` | Step-by-step workflow display |
| Testimonials | `testimonials.tsx` | Customer testimonial cards |
| Large Testimonial | `large-testimonial.tsx` | Full-width featured testimonial |
| CTA | `cta.tsx` | Call-to-action banner |
| Banner | `banner.tsx` | Top announcement banner |
| Business Categories | `business-categories.tsx` | Category grid with icons |
| Accordion | `accordion.tsx` | FAQ accordion |
| Modal Video | `modal-video.tsx` | Video popup |
| Spotlight | `spotlight.tsx` | Spotlight effect overlay |
| Page Illustration | `page-illustration.tsx` | Decorative SVG elements |

### shadcn-landing-page (leoMirandaa)
| Component | File | Description |
|-----------|------|-------------|
| Hero | `Hero.tsx` | Hero with cards overlay |
| HeroCards | `HeroCards.tsx` | Floating info cards on hero |
| Features | `Features.tsx` | Feature grid with icons |
| Services | `Services.tsx` | Service cards |
| HowItWorks | `HowItWorks.tsx` | 3-step process with numbers |
| Pricing | `Pricing.tsx` | 3-tier pricing cards |
| Team | `Team.tsx` | Team member cards |
| Testimonials | `Testimonials.tsx` | Testimonial carousel |
| Statistics | `Statistics.tsx` | Stats counter section |
| FAQ | `FAQ.tsx` | Accordion FAQ |
| Newsletter | `Newsletter.tsx` | Email signup form |
| Cta | `Cta.tsx` | Final CTA section |
| Sponsors | `Sponsors.tsx` | Company logo strip |
| About | `About.tsx` | About section |
| Navbar | `Navbar.tsx` | Responsive nav with mobile sheet |
| mode-toggle | `mode-toggle.tsx` | Dark/light theme toggle |

### Nike Landing Page
| Component | File | Description |
|-----------|------|-------------|
| Hero | `sections/Hero.jsx` | Split layout with shoe image, stats |
| SuperQuality | `sections/SuperQuality.jsx` | Quality showcase with image |
| Services | `sections/Services.jsx` | Service cards with icons |
| PopularProducts | `sections/PopularProducts.jsx` | Product card grid |
| SpecialOffer | `sections/SpecialOffer.jsx` | Promotional banner with CTA |
| CustomerReviews | `sections/CustomerReviews.jsx` | Review cards carousel |
| Subscribe | `sections/Subscribe.jsx` | Newsletter signup |
| ShoeCard | `components/ShoeCard.jsx` | Thumbnail shoe selector |
| ReviewCard | `components/ReviewCard.jsx` | Individual review card |
| ServiceCard | `components/ServiceCard.jsx` | Service icon card |
| PopularProductCard | `components/PopularProductCard.jsx` | Product display card |

### Next.js Landing Page Starter (ixartz)
| Component | File | Description |
|-----------|------|-------------|
| Hero | `templates/Hero.tsx` | HeroOneButton pattern |
| VerticalFeatures | `templates/VerticalFeatures.tsx` | Alternating feature rows |
| Sponsors | `templates/Sponsors.tsx` | Logo grid |
| CTABanner | `cta/CTABanner.tsx` | CTA banner |
| Navbar | `navigation/NavbarTwoColumns.tsx` | Two-column navbar |
| Footer | `templates/Footer.tsx` | Centered footer with links |
| Background | `background/Background.tsx` | Section background wrapper |

### Landwind (themesberg)
| Section | Description |
|---------|-------------|
| Hero | Split layout with stats (15K+ customers, 150+ brands) |
| Logo Strip | Company logos (Google, Amazon, etc.) |
| Features | Alternating image+text rows |
| Stats | 4-column metrics grid |
| Testimonials | Single featured quote |
| Pricing | 3-tier pricing cards with checkmarks |
| CTA | Download banner |
| Team | Team member cards |
| Contact | Contact form |

---

## Common Patterns

### 1. Hero Section Patterns

**Pattern A: Split Layout (Most Common)**
```
┌─────────────────────────────────────────────┐
│ [Badge: New/Announcement]                   │
│                                              │
│ Headline That                                │
│ Grabs Attention                              │
│                                              │
│ Subheadline explaining the value            │
│ proposition in 1-2 sentences.               │
│                                              │
│ [Primary CTA] [Secondary CTA →]             │
│                                              │
│ 10K+ Users    99.9% Uptime    4.9★          │
│                    [Hero Image/Illustration] │
└─────────────────────────────────────────────┘
```

**Pattern B: Centered**
```
┌─────────────────────────────────────────────┐
│           [Badge]                           │
│                                              │
│        Big Bold Headline                     │
│                                              │
│        Subheadline text                      │
│                                              │
│     [CTA]        [CTA Secondary]             │
│                                              │
│        [Hero Image - Full Width]             │
└─────────────────────────────────────────────┘
```

**Pattern C: With Cards Overlay (shadcn)**
```
┌─────────────────────────────────────────────┐
│ Headline                    [Card: Users]   │
│ Subheadline                 [Card: Revenue] │
│                             [Card: Growth]  │
│ [CTA] [CTA]                                 │
│                                              │
│        [Hero Image/Illustration]             │
└─────────────────────────────────────────────┘
```

### 2. Feature Section Patterns

**Pattern A: Grid Cards**
```
┌─────────────────────────────────────────────┐
│        Features                              │
│        Subtitle about capabilities           │
│                                              │
│ ┌────────┐ ┌────────┐ ┌────────┐            │
│ │ [Icon] │ │ [Icon] │ │ [Icon] │            │
│ │ Title  │ │ Title  │ │ Title  │            │
│ │ Desc   │ │ Desc   │ │ Desc   │            │
│ └────────┘ └────────┘ └────────┘            │
│ ┌────────┐ ┌────────┐ ┌────────┐            │
│ │ [Icon] │ │ [Icon] │ │ [Icon] │            │
│ │ Title  │ │ Title  │ │ Title  │            │
│ │ Desc   │ │ Desc   │ │ Desc   │            │
│ └────────┘ └────────┘ └────────┘            │
└─────────────────────────────────────────────┘
```

**Pattern B: Alternating Rows**
```
┌─────────────────────────────────────────────┐
│ [Image]              Feature Title          │
│                      Description text       │
│                      ✓ Benefit 1            │
│                      ✓ Benefit 2            │
├─────────────────────────────────────────────┤
│                      Feature Title    [Image]│
│                      Description text       │
│                      ✓ Benefit 1            │
│                      ✓ Benefit 2            │
└─────────────────────────────────────────────┘
```

### 3. Pricing Section Pattern
```
┌─────────────────────────────────────────────┐
│        Pricing                               │
│        Choose the right plan                │
│                                              │
│ ┌────────┐ ┌────────┐ ┌────────┐            │
│ │ Basic  │ ││ Pro   │││ Enterprise│         │
│ │ $9/mo  │ ││$29/mo │││  $99/mo  │          │
│ │        │ ││       │││          │          │
│ │ ✓ F1   │ ││ ✓ F1  │││ ✓ F1     │          │
│ │ ✓ F2   │ ││ ✓ F2  │││ ✓ F2     │          │
│ │        │ ││ ✓ F3  │││ ✓ F3     │          │
│ │        │ ││ ✓ F4  │││ ✓ F4     │          │
│ │ [CTA]  │ ││[CTA]★ │││ [CTA]    │          │
│ └────────┘ └┴───────┴┘└──────────┘          │
│           ↑ Popular/Recommended              │
└─────────────────────────────────────────────┘
```

### 4. Testimonial Pattern
```
┌─────────────────────────────────────────────┐
│        What Our Customers Say               │
│                                              │
│ ┌─────────────────────────────────────────┐ │
│ │ "Quote text about the product..."       │ │
│ │                                          │ │
│ │ [Avatar] Name, Title at Company         │ │
│ │ ★★★★★                                    │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

---

## Generation Prompts

### Full SaaS Landing Page
```
Build a modern SaaS landing page with:
- Sticky navbar with logo, nav links (Features, Pricing, About, Contact), dark mode toggle, CTA button
- Hero section with gradient background, badge, headline, subheadline, 2 CTA buttons, trust stats, hero illustration
- Company logo strip (trusted by section)
- Features grid (6 cards with icons, titles, descriptions)
- How it works section (3 numbered steps)
- Statistics section (4 metrics with large numbers)
- Pricing section (3 tiers: Basic $9, Pro $29, Enterprise $99, with Pro highlighted)
- Team section (4-6 member cards with photos, names, roles)
- Testimonials carousel (3-4 customer quotes with avatars)
- FAQ accordion (5-6 questions)
- Newsletter signup section
- Final CTA banner with gradient background
- Footer with columns of links, social icons, copyright
- Responsive design with mobile hamburger menu
- Dark mode support
- Smooth scroll navigation
- shadcn/ui components for buttons, cards, accordion, dropdowns
```

### Product Landing Page (Nike-style)
```
Build a product showcase landing page with:
- Navbar with logo, links, cart icon
- Hero section with product image, headline, stats bar, CTA
- Super quality section with large product image and feature list
- Services section (3 icon cards)
- Popular products grid (4 product cards with hover effects)
- Special offer promotional banner with countdown
- Customer reviews carousel with star ratings
- Newsletter subscribe section
- Footer with link columns
- Shoe/product thumbnail selector in hero
- Bold typography, high contrast design
- Smooth animations on scroll
```

### Minimal Landing Page
```
Build a minimal single-page landing site with:
- Simple navbar with logo and 2 links
- Centered hero with headline, subheadline, single CTA
- 3 feature cards in a row
- Single testimonial quote
- Pricing with 2 tiers
- Simple footer
- Clean, minimal design with lots of whitespace
- Single accent color
- Mobile-first responsive
```

---

## Tech Stack Recommendations

### React/Vite
- **UI**: Tailwind CSS + shadcn/ui
- **Routing**: React Router (if multi-page)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod

### Next.js
- **Framework**: Next.js 14 App Router
- **UI**: Tailwind CSS + shadcn/ui
- **Auth**: NextAuth.js
- **Animations**: Framer Motion

### Astro
- **Framework**: Astro
- **UI**: Tailwind CSS
- **Content**: Markdown/MDX
- **Best for**: Content-heavy landing pages, blogs

### Plain HTML
- **CSS**: Tailwind CSS CDN or compiled
- **Components**: Flowbite (for Landwind-style)
- **Best for**: Simple static landing pages

---

## File Structure Template

```
src/
├── components/
│   ├── ui/                    # shadcn/ui primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   └── ...
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── mode-toggle.tsx
├── sections/                  # Alternative: section-based
│   ├── Hero.tsx
│   ├── Features.tsx
│   └── ...
├── lib/
│   └── utils.ts
├── hooks/
│   └── use-scroll.ts
├── App.tsx
└── main.tsx
```
