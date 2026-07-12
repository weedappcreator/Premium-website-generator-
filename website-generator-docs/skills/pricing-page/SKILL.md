# Skill: Pricing Page

## Purpose
Generate conversion-optimized pricing pages with clear tier comparison.

## Structure

```
/
├── Hero (headline, subheadline, "start free" CTA)
├── Pricing Tiers (3 columns: Free, Pro, Enterprise)
├── Feature Comparison Table
├── FAQ (pricing-specific questions)
├── Social Proof (logos, testimonials about value)
└── Final CTA (reiterate best tier)
```

## Pricing Tier Design

### 3-Tier Standard
| Tier | Price | Purpose |
|---|---|---|
| Free/Starter | $0 | Hook users, show value |
| Pro/Team | $X/mo | Main conversion target |
| Enterprise | Contact | Anchor high, capture large deals |

### Psychological Pricing
- Pro tier should be visually highlighted ("Most Popular")
- Annual pricing shown with savings (e.g., "$12/mo billed annually")
- Enterprise as "Contact us" — creates exclusivity
- Free tier limited enough to push toward Pro

## Feature Comparison Table

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Core feature | ✓ | ✓ | ✓ |
| Advanced feature | — | ✓ | ✓ |
| Premium feature | — | — | ✓ |
| Support | Community | Email | Dedicated |
| Users | 1 | 10 | Unlimited |

## Key Elements

- **Toggle**: Monthly / Annual with savings badge
- **Highlight**: Pro tier with border, shadow, or color
- **Badge**: "Most Popular" or "Best Value" on recommended tier
- **CTA per tier**: Different text per tier ("Start Free", "Upgrade", "Contact Sales")
- **Money-back guarantee**: Reduces purchase anxiety
- **Feature tooltips**: Explain complex features on hover

## Anti-Patterns
- Don't hide pricing behind a contact form (unless Enterprise-only)
- Don't use more than 3 tiers (decision paralysis)
- Don't make the free tier too generous (no conversion)
- Don't make the Pro tier too expensive (main revenue driver)
- Don't list 50+ features (focus on differentiators)

## Technical Requirements
- Responsive (stack tiers on mobile)
- Toggle animation for monthly/annual
- Accessible comparison table (proper headers, scope)
- Schema markup (Product with offers)
