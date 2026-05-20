# Client Discovery Protocol

Enhanced with [Open Design](https://github.com/nexu-io/open-design) discovery methodology.

## Phase 1: Lock the Brief

**Never start generating until the brief is locked.** 30 seconds of discovery beats 30 minutes of redirects.

### Core Questions (Ask First)

1. **Surface**: What are we building? (landing page, dashboard, mobile app, pricing page, blog, portfolio)
2. **Audience**: Who will use this? (demographics, technical level, expectations)
3. **Tone**: How should it feel? (professional, playful, luxurious, minimal, bold, friendly)
4. **Brand Context**: Existing brand? (colors, fonts, logo, style guide) — if yes, get it
5. **Scale**: How many pages? Single page, multi-page, full site?

### If No Brand Exists → Offer 5 Visual Directions

When the client has no brand guide, present these 5 directions (from `integrations/design-directions/DIRECTIONS.md`):

| Direction | Vibe | Example |
|---|---|---|
| **Editorial Monocle** | Print magazine, luxury, culture | Monocle, FT Weekend |
| **Modern Minimal** | Quiet, precise, software-native | Linear, Vercel |
| **Human Approachable** | Friendly, tactile, consumer | Airbnb, Duolingo |
| **Tech Utility** | Data-dense, engineering-focused | Datadog, GitHub |
| **Brutalist Experimental** | Loud, bold, deliberate | Are.na, mschf |

**One click on a direction** → deterministic palette + font stack. No model improvisation.

## Phase 2: Gather Details

### Business Context
- What does your business/product do?
- Who is your target audience?
- What is the primary goal? (leads, sales, awareness, portfolio, downloads)
- Who are your top 3 competitors?
- What makes you different?

### Design Preferences
- Do you have an existing brand guide?
- Show me 2-3 websites you like and explain why
- Any design elements to avoid?
- Reference a known product: "Make it look like [Linear/Stripe/Airbnb/Vercel]"

### Content
- Copywriting ready or need help?
- Pages needed? (home, about, services, pricing, contact, blog, etc.)
- Images/videos available or need stock/placeholder?
- Testimonials, case studies, social proof?

### Functionality
- Auth needed? (login, signup, OAuth)
- E-commerce? (products, cart, checkout)
- Forms? (contact, newsletter, lead capture)
- Blog or CMS?
- Third-party integrations? (analytics, email, CRM, payment)

### Technical
- Preferred tech stack?
- Hosting? (Vercel, Netlify, AWS, shared)
- Domain ready?
- Performance requirements?

### Timeline
- Launch date?
- Ongoing maintenance needed?
- Budget constraints affecting tool choices?

## Phase 3: Confirm & Document

Before generating, summarize back to the client:

```
## Brief Summary

**Surface**: [type of site]
**Audience**: [who uses it]
**Tone**: [how it feels]
**Direction**: [chosen visual direction or brand reference]
**Pages**: [list of pages]
**Integrations**: [list of services]
**Tech Stack**: [chosen framework]

Confirm this is correct before I start building.
```

## Anti-Pattern: What NOT to Do

- **Don't improvise** a brand when no brand exists — offer the 5 directions
- **Don't start coding** until the brief is confirmed
- **Don't assume** the client wants a specific aesthetic
- **Don't skip** the direction picker for unbranded projects
- **Don't generate** generic AI slop (Inter font, purple gradients, nested cards)

## Quick Reference: Direction Selection

| Client Says | Pick |
|---|---|
| "Make it look like a magazine" | Editorial Monocle |
| "Clean, like Linear/Vercel" | Modern Minimal |
| "Friendly, consumer-facing" | Human Approachable |
| "Dashboard, data-heavy" | Tech Utility |
| "Bold, artistic, different" | Brutalist Experimental |
| "Luxury, high-end" | Editorial Monocle |
| "Developer tool" | Tech Utility or Modern Minimal |
| "Startup landing page" | Modern Minimal |
| "Creative agency" | Brutalist Experimental |
| "Education, wellness" | Human Approachable |
| "Make it look like [Product]" | Check design-systems/CATALOG.md |
