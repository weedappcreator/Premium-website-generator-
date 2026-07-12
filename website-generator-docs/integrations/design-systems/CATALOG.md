# Design Systems Catalog

From [Open Design](https://github.com/nexu-io/open-design). 152 design systems available. Here are the most useful for website generation.

## How to Use

When a client says "make it look like X" or references a known product, load that design system's specs. Each system defines: colors, typography, spacing, components, and design principles.

## Tech / SaaS

| System | Best For | Key Characteristics |
|---|---|---|
| **Linear** | Project management, dev tools | Dark mode, subtle gradients, purple accent, precise spacing |
| **Vercel** | Developer platforms | Black/white, triangular logo, clean typography, minimal |
| **Stripe** | Payments, fintech | Gradient backgrounds, playful illustrations, rounded corners |
| **Notion** | Productivity, docs | Minimal, emoji-heavy, serif headings, clean whitespace |
| **Supabase** | Database, backend | Green accent, dark mode, developer-focused |
| **Arc** | Browser, creative tools | Playful, colorful, rounded, friendly |
| **Cohere** | AI, ML platforms | Clean, modern, purple/blue gradient |
| **ClickHouse** | Analytics, data | Bold, technical, orange accent |
| **Airtable** | Spreadsheets, databases | Colorful, playful, card-based |
| **Cal.com** | Scheduling | Clean, minimal, green accent |

## Consumer / Marketplace

| System | Best For | Key Characteristics |
|---|---|---|
| **Airbnb** | Travel, marketplace | Warm, rounded, coral/pink accent, friendly |
| **Coinbase** | Crypto, finance | Blue, clean, professional, trust-focused |
| **Binance** | Crypto exchange | Dark mode, yellow accent, data-dense |
| **Canva** | Design tools | Colorful, playful, gradient-heavy |

## Automotive / Luxury

| System | Best For | Key Characteristics |
|---|---|---|
| **BMW** | Luxury, automotive | Minimal, black/white/blue, precise |
| **BMW M** | Performance, sport | Red/blue/purple stripes, aggressive |
| **Bugatti** | Ultra-luxury | Black, gold, elegant, serif typography |

## Design Styles

| System | Best For | Key Characteristics |
|---|---|---|
| **Brutalism** | Art, agency, creative | Raw, visible grid, bold type, no polish |
| **Claymorphism** | Playful, Web3 | Soft 3D, rounded, pastel, friendly |
| **Bold** | Startups, campaigns | Large type, high contrast, confident |
| **Clean** | Corporate, professional | Minimal, lots of whitespace, subtle |
| **Colorful** | Creative, youth | Vibrant, multi-color, energetic |
| **Artistic** | Portfolio, gallery | Expressive, unconventional, visual |

## How to Apply a Design System

1. **Identify**: Match client reference to a system above
2. **Load**: Read the system's color, typography, and component specs
3. **Bind**: Set CSS variables to match the system's palette
4. **Follow**: Apply the system's design principles to layout and components
5. **Adapt**: Adjust for the client's brand while keeping the system's DNA

## Example: "Make it look like Linear"

```css
:root {
  /* Linear-inspired dark theme */
  --bg:      #0d0d12;
  --surface: #16161d;
  --fg:      #e8e8ed;
  --muted:   #8a8a9d;
  --border:  #2a2a35;
  --accent:  #5e6ad2;

  --font-display: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
  --font-body:    -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;

  --radius: 6px;
  --shadow: 0 1px 3px rgba(0,0,0,0.3);
}
```

## Full Catalog

The complete 152 design systems live in the [Open Design repo](https://github.com/nexu-io/open-design/tree/main/design-systems). If a client references a product not listed above, check the repo for its design specs.
