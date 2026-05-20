# Design Directions — 75 Visual Schools

From [Open Design](https://github.com/nexu-io/open-design). When the client hasn't specified a brand, pick ONE direction. Each ships a CSS-ready OKLch palette + font stack.

## How to Use

1. Read the client brief
2. Pick the direction that matches the industry/context
3. Bind the palette verbatim into `:root` — do not improvise
4. Follow the posture cues for layout decisions

---

## 1. Editorial Monocle

**Label**: Editorial — Monocle / FT magazine
**Best for**: Publishing, editorial, luxury, culture, art, high-end brands

**Mood**: Print-magazine feel. Generous whitespace, large serif headlines, restrained palette of neutral paper + ink + a single brand-justified accent.

**References**: Monocle, The Financial Times Weekend, NYT Magazine, It's Nice That

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.004 95);
  --surface: oklch(100% 0.002 95);
  --fg:      oklch(20% 0.018 70);
  --muted:   oklch(48% 0.012 70);
  --border:  oklch(90% 0.006 95);
  --accent:  oklch(52% 0.10 28);

  --font-display: 'Iowan Old Style', 'Charter', Georgia, serif;
  --font-body:    -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}
```

**Posture**:
- Serif display, sans body, mono for metadata only
- No shadows, no rounded cards — borders + whitespace do the work
- One decisive image, cropped only at the bottom
- Kicker/eyebrow in mono uppercase, one accent color, used at most twice
- Never create peach/pink/orange-beige page washes

---

## 2. Modern Minimal

**Label**: Modern minimal — Linear / Vercel
**Best for**: SaaS, developer tools, startups, tech products, documentation

**Mood**: Quiet, precise, software-native. System fonts, crisp neutral foundations, small but visible product palette.

**References**: Linear, Vercel, Notion 2024, Stripe docs

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(99% 0.002 240);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.012 250);
  --muted:   oklch(54% 0.012 250);
  --border:  oklch(92% 0.005 250);
  --accent:  oklch(58% 0.18 255);

  --font-display: -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;
  --font-body:    -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
}
```

**Posture**:
- Tight letter-spacing on display sizes (-0.02em)
- Hairline borders only, no shadows except dropdowns/modals
- Mono numerics with `font-variant-numeric: tabular-nums`
- Sticky frosted nav, content-led layouts with one product illustration
- Controlled color system: primary action + one secondary signal + status colors

---

## 3. Human Approachable

**Label**: Human / approachable — Airbnb / Duolingo
**Best for**: Consumer apps, marketplaces, wellness, education, AI assistants, indie SaaS

**Mood**: Friendly and tactile without generic cozy canvas. Clean neutral background, product-led color, generous radii, clear hierarchy.

**References**: Airbnb, Duolingo, Miro, Mercury

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.004 240);
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.02 240);
  --muted:   oklch(50% 0.018 240);
  --border:  oklch(90% 0.006 240);
  --accent:  oklch(56% 0.12 170);

  --font-display: 'Söhne', 'Avenir Next', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-body:    -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
}
```

**Posture**:
- Sans display with strong weight contrast, system body for readability
- Comfortable radii (12–18px) paired with crisp grid alignment
- Primary action color plus secondary/domain accent and clear status colors
- Subtle elevation only on interactive cards
- Avoid generic pastel/beige gradients; use real product screenshots or data

---

## 4. Tech Utility

**Label**: Tech / utility — Datadog / GitHub
**Best for**: Dashboards, admin panels, developer tools, observability, data-heavy apps

**Mood**: Data-dense, monospace-friendly, dark or light + grid. Made for engineers who want information per square inch.

**References**: Datadog, GitHub, Cloudflare dashboard, Sentry

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.005 250);
  --surface: oklch(100% 0 0);
  --fg:      oklch(22% 0.02 240);
  --muted:   oklch(50% 0.018 240);
  --border:  oklch(90% 0.008 240);
  --accent:  oklch(58% 0.16 145);

  --font-display: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', system-ui, sans-serif;
  --font-body:    -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'IBM Plex Mono', ui-monospace, Menlo, monospace;
}
```

**Posture**:
- Sans display + sans body (one family) — utility trumps editorial
- Tabular numerics everywhere, mono for code / IDs / hashes
- Dense tables with hairline borders, no row striping
- Inline status pills (success / warn / danger) with restrained tinted backgrounds
- Avoid hero images, oversized headlines, marketing copy — show the product

---

## 5. Brutalist Experimental

**Label**: Brutalist / experimental — Are.na / Yale
**Best for**: Art, indie, agency, manifesto pages, creative portfolios, fashion

**Mood**: Loud type. Visible grid. System sans + a single oversized serif. Deliberate ugliness as confidence.

**References**: Are.na, Yale Center for British Art, mschf, Read.cv

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.004 240);
  --surface: oklch(100% 0 0);
  --fg:      oklch(15% 0.02 100);
  --muted:   oklch(40% 0.02 100);
  --border:  oklch(15% 0.02 100);
  --accent:  oklch(60% 0.22 25);

  --font-display: 'Times New Roman', 'Iowan Old Style', Georgia, serif;
  --font-body:    ui-monospace, 'IBM Plex Mono', 'JetBrains Mono', Menlo, monospace;
}
```

**Posture**:
- Display = serif at extreme sizes (clamp(80px, 12vw, 200px))
- Body = monospace — yes, monospace as body, deliberately
- Borders are full-strength fg (1.5–2px), not muted greys
- Asymmetric layouts: one column 70%, the other 30%
- Almost no border-radius (0–2px). No shadows. No gradients.
- Underline links, no hover decoration — let the typography carry it

---

## 6. Dark Mode Native

**Label**: Dark-first — Raycast / Arc
**Best for**: Developer tools, creative software, productivity apps, crypto/Web3, gaming

**Mood**: Born in the dark. Deep charcoal backgrounds, luminous accents, subtle glow effects. Feels like a premium IDE.

**References**: Raycast, Arc browser, Linear dark, Figma dark, VS Code

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(18% 0.02 260);
  --surface: oklch(24% 0.02 260);
  --fg:      oklch(95% 0.005 260);
  --muted:   oklch(60% 0.02 260);
  --border:  oklch(32% 0.03 260);
  --accent:  oklch(70% 0.20 280);

  --font-display: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-body:    'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'SF Mono', ui-monospace, Menlo, monospace;
}
```

**Posture**:
- Dark backgrounds with subtle gradient overlays (radial, from center)
- Accent colors should glow — use `box-shadow` with the accent at low opacity
- Cards use surface color with 1px border, not elevation shadows
- Code blocks and terminal-style elements feel native here
- Avoid pure black (#000) — use deep charcoal with slight blue/green tint

---

## 7. Swiss International

**Label**: Swiss / International Typographic Style
**Best for**: Architecture firms, museums, design studios, cultural institutions, luxury brands

**Mood**: Grid-obsessed. Mathematical precision. Helvetica as religion. Asymmetric balance. Photography as hero.

**References**: International Typographic Style, Josef Müller-Brockmann, Pentagram, Herzog & de Meuron

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(100% 0 0);
  --surface: oklch(98% 0.002 0);
  --fg:      oklch(12% 0.01 0);
  --muted:   oklch(45% 0.01 0);
  --border:  oklch(85% 0.005 0);
  --accent:  oklch(55% 0.18 30);

  --font-display: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  --font-body:    'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  --font-mono:    'SF Mono', 'Menlo', monospace;
}
```

**Posture**:
- Strict mathematical grid — 12-column, consistent gutters
- Helvetica Neue everywhere — weight and size create hierarchy, not different fonts
- Asymmetric layouts with deliberate white space as structural element
- Large-scale photography, full-bleed, no decorative overlays
- Text blocks aligned to grid modules, never centered
- Accent color used sparingly — one element per viewport maximum

---

## 8. Japanese Minimal

**Label**: Japanese / Wabi-Sabi
**Best for**: Wellness, tea/ceremony brands, mindfulness, artisan products, architecture, photography

**Mood**: Quiet beauty in imperfection. Earth tones, asymmetry, breathing room. Less is not empty — it's intentional.

**References**: Muji, Kenya Hara, Nendo, Naoto Fukasawa, Japanese tea houses

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(96% 0.008 85);
  --surface: oklch(94% 0.01 80);
  --fg:      oklch(25% 0.015 70);
  --muted:   oklch(55% 0.012 75);
  --border:  oklch(85% 0.008 80);
  --accent:  oklch(45% 0.06 120);

  --font-display: 'Hiragino Mincho ProN', 'Noto Serif JP', Georgia, serif;
  --font-body:    'Hiragino Sans', 'Noto Sans JP', -apple-system, sans-serif;
}
```

**Posture**:
- Vertical writing consideration — layouts should work with tall, narrow columns
- Earth-tone palette only — no bright saturated colors except the single accent
- Asymmetric balance — content offset from center, never perfectly symmetrical
- Generous whitespace — elements should feel like they're floating
- Subtle textures acceptable — paper grain, linen backgrounds at very low opacity
- Images should feel natural, unretouched, with soft lighting

---

## 9. Neobrutalism

**Label**: Neobrutalism / Playful Bold — Gumroad / Figma
**Best for**: Startups, creator tools, indie products, youth brands, SaaS with personality

**Mood**: Thick borders, bright colors, playful shadows. Intentionally "ugly-cute" but highly functional.

**References**: Gumroad, Figma marketing, Linear (early), Pitch, Notion (early)

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.005 90);
  --surface: oklch(100% 0 0);
  --fg:      oklch(15% 0.015 0);
  --muted:   oklch(50% 0.015 0);
  --border:  oklch(15% 0.015 0);
  --accent:  oklch(70% 0.18 80);

  --font-display: 'Space Grotesk', 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Thick black borders (2-3px solid) on everything — cards, buttons, inputs
- Hard offset shadows — `box-shadow: 4px 4px 0px black` — no blur
- Bright, saturated accent colors — yellow, pink, blue, green
- Rounded corners (8-12px) contrasted with thick borders
- Playful illustrations or emoji acceptable
- Hover states: shadow offset increases or shifts direction

---

## 10. Glassmorphism

**Label**: Glass / Frosted — Apple / iOS
**Best for**: Consumer apps, fintech, health tech, premium SaaS, iOS-style web apps

**Mood**: Layered transparency. Frosted glass panels over colorful backgrounds. Feels like native iOS.

**References**: Apple iOS, macOS Ventura, Windows 11 acrylic, Stripe terminal

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(95% 0.02 250);
  --surface: oklch(100% 0.02 250 / 0.7);
  --fg:      oklch(20% 0.02 250);
  --muted:   oklch(50% 0.02 250);
  --border:  oklch(100% 0.02 250 / 0.3);
  --accent:  oklch(60% 0.20 260);

  --font-display: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
  --font-body:    -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
}
```

**Posture**:
- Background must have colorful gradient or blob shapes for glass to blur over
- Cards use `backdrop-filter: blur(20px)` with semi-transparent white background
- Subtle 1px border with low-opacity white to simulate glass edge
- Soft, diffused shadows — `box-shadow: 0 8px 32px rgba(0,0,0,0.1)`
- Rounded corners (16-24px) — glass panels should feel like physical objects
- Avoid dark backgrounds — glassmorphism needs light to pass through

---

## 11. Corporate Enterprise

**Label**: Corporate / Enterprise — IBM / Salesforce
**Best for**: B2B SaaS, enterprise software, consulting firms, financial services, healthcare

**Mood**: Trustworthy, established, professional. Blue-forward palette, structured layouts, clear information hierarchy.

**References**: IBM Carbon, Salesforce Lightning, Microsoft Fluent, Deloitte

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.005 250);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.015 250);
  --muted:   oklch(48% 0.015 250);
  --border:  oklch(88% 0.01 250);
  --accent:  oklch(45% 0.14 250);

  --font-display: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  --font-body:    'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  --font-mono:    'IBM Plex Mono', 'SF Mono', monospace;
}
```

**Posture**:
- Blue-forward color system — blue for primary actions, links, active states
- Structured, grid-based layouts — nothing experimental or playful
- Clear information hierarchy with consistent heading scale (1.25 ratio)
- Data tables with alternating row colors and hover states
- Professional photography — diverse teams, modern offices, not stock cliches
- Accessibility is non-negotiable — WCAG AA minimum, AA+ preferred

---

## 12. Playful Memphis

**Label**: Playful / Memphis — Google / Slack
**Best for**: Consumer apps, education, kids products, creative tools, social platforms

**Mood**: Bold shapes, primary colors, geometric patterns. Fun without being childish. Energetic and optimistic.

**References**: Google Material You, Slack marketing, Mailchimp, Headspace

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.005 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.015 0);
  --muted:   oklch(50% 0.015 0);
  --border:  oklch(90% 0.005 0);
  --accent:  oklch(65% 0.20 140);
  --accent-2: oklch(65% 0.20 30);
  --accent-3: oklch(60% 0.22 280);

  --font-display: 'Google Sans', 'Poppins', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Multiple accent colors — use 2-3 secondary colors alongside primary
- Geometric shapes as decorative elements — circles, squiggles, dots
- Rounded corners everywhere (12-20px) — nothing sharp
- Illustrations over photography — custom, brand-specific illustration style
- Playful micro-interactions — bouncy hover states, confetti on success
- White space is still generous — playful doesn't mean cluttered

---

## 13. Nordic / Scandinavian

**Label**: Nordic / Scandinavian — Spotify / Kahrs
**Best for**: Lifestyle brands, furniture, fashion, food/beverage, sustainability, travel

**Mood**: Light, airy, nature-connected. Cool whites, warm woods, muted greens. Hygge without the cliches.

**References**: Spotify, &Tradition, Muuto, HAY, Finnish Design Shop

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(97% 0.008 240);
  --surface: oklch(95% 0.01 230);
  --fg:      oklch(22% 0.015 240);
  --muted:   oklch(55% 0.015 235);
  --border:  oklch(88% 0.01 235);
  --accent:  oklch(50% 0.08 160);

  --font-display: 'Inter', 'Nunito', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Cool white backgrounds with subtle blue-grey undertones
- Natural imagery — forests, water, wood textures, natural light
- Muted, earthy accent colors — forest green, clay, stone grey
- Clean, functional layouts — form follows function
- Photography should feel natural, not heavily edited or filtered
- Generous spacing — Nordic design breathes

---

## 14. Cyberpunk / Neon

**Label**: Cyberpunk / Neon — futuristic tech
**Best for**: Gaming, crypto/Web3, AI/ML products, cybersecurity, futuristic brands

**Mood**: Dark backgrounds pierced by neon. Glowing accents, scan lines, terminal aesthetics. Feels like 2077.

**References**: Cyberpunk 2077 UI, Bladerunner, Synthwave aesthetics, Hackathons

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(12% 0.02 270);
  --surface: oklch(18% 0.03 270);
  --fg:      oklch(90% 0.01 270);
  --muted:   oklch(55% 0.03 270);
  --border:  oklch(30% 0.05 270);
  --accent:  oklch(70% 0.25 180);
  --accent-2: oklch(65% 0.28 330);
  --accent-3: oklch(75% 0.20 120);

  --font-display: 'Orbitron', 'Rajdhani', system-ui, sans-serif;
  --font-body:    'Rajdhani', 'Inter', system-ui, sans-serif;
  --font-mono:    'Fira Code', 'JetBrains Mono', monospace;
}
```

**Posture**:
- Very dark backgrounds — near-black with slight purple/blue tint
- Neon accents with glow effects — `text-shadow` and `box-shadow` with accent colors
- Grid lines, scan lines, or subtle noise texture acceptable
- Monospace elements for code, data, terminal-style content
- Angular shapes — sharp corners, diagonal cuts, hexagonal patterns
- Avoid warm colors in backgrounds — keep them cool (blue, purple, black)

---

## 15. Art Deco / Luxury

**Label**: Art Deco / Luxury — high-end brands
**Best for**: Luxury goods, jewelry, hotels, restaurants, fashion, premium services

**Mood**: Geometric elegance. Gold on dark. Symmetry, repetition, ornamental borders. Feels expensive.

**References**: Great Gatsby aesthetics, Ritz-Carlton, Cartier, Bulgari, Four Seasons

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(15% 0.02 70);
  --surface: oklch(20% 0.025 70);
  --fg:      oklch(92% 0.01 70);
  --muted:   oklch(60% 0.02 70);
  --border:  oklch(55% 0.12 80);
  --accent:  oklch(65% 0.15 80);

  --font-display: 'Playfair Display', 'Bodoni Moda', Georgia, serif;
  --font-body:    'Montserrat', 'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Dark backgrounds with gold accents — the gold/border relationship is key
- Geometric decorative elements — repeating lines, diamond patterns, sunburst motifs
- Serif display fonts with high contrast (thick/thin strokes)
- Symmetric layouts — center-aligned headings, balanced columns
- Photography should be moody, dramatic lighting, high contrast
- Borders and dividers are ornamental — use gold lines, not grey

---

## 16. Organic / Natural

**Label**: Organic / Natural — earth brands
**Best for**: Sustainable brands, organic food, skincare, wellness, environmental orgs, agriculture

**Mood**: Earth-first. Warm tones, organic shapes, natural textures. Feels like soil and sunlight.

**References**: Patagonia, Allbirds, Aesop, Lush, Seventh Generation

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(95% 0.015 85);
  --surface: oklch(92% 0.018 80);
  --fg:      oklch(25% 0.02 70);
  --muted:   oklch(50% 0.02 75);
  --border:  oklch(80% 0.015 80);
  --accent:  oklch(45% 0.10 140);

  --font-display: 'DM Serif Display', 'Lora', Georgia, serif;
  --font-body:    'Source Sans 3', 'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Warm cream/sand backgrounds — never pure white
- Earth-tone palette — greens, browns, terracotta, warm greys
- Organic shapes — blob backgrounds, irregular borders, hand-drawn elements
- Natural textures — paper grain, linen, subtle noise at low opacity
- Photography: natural light, real people, outdoor settings, unretouched
- Rounded, soft corners — nothing sharp or aggressive

---

## 17. Gradient Tech

**Label**: Gradient / Modern Startup — Stripe / Linear
**Best for**: SaaS startups, AI products, fintech, modern tech companies, API products

**Mood**: Vibrant gradients as brand identity. Purple-to-blue, pink-to-orange. Feels innovative and energetic.

**References**: Stripe, Linear, Vercel, Supabase, Resend

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.005 270);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.015 270);
  --muted:   oklch(50% 0.02 270);
  --border:  oklch(90% 0.008 270);
  --accent:  oklch(60% 0.22 300);
  --accent-2: oklch(65% 0.20 250);
  --accent-3: oklch(70% 0.18 20);

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'SF Mono', 'JetBrains Mono', monospace;
}
```

**Posture**:
- Gradient backgrounds on hero sections — linear-gradient using accent colors
- Gradient text for headlines — `background-clip: text` with gradient
- Clean white/light surfaces for content areas — gradients are for heroes only
- Subtle animated gradients acceptable — slow, smooth color shifts
- Code snippets and terminal elements feel native here
- Dashboard previews and product screenshots should be prominent

---

## 18. Bento Grid

**Label**: Bento / Apple-style Grid
**Best for**: Product showcases, feature grids, portfolio sites, Apple-style marketing, SaaS features

**Mood**: Modular, card-based, grid-locked. Each cell tells its own story. Feels like an Apple product page.

**References**: Apple product pages, Linear features, Notion templates, Framer sites

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(96% 0.005 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(15% 0.01 0);
  --muted:   oklch(50% 0.01 0);
  --border:  oklch(90% 0.005 0);
  --accent:  oklch(55% 0.18 250);

  --font-display: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
  --font-body:    -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
}
```

**Posture**:
- CSS Grid is the primary layout mechanism — `grid-template-areas`
- Cards span different grid cells — some 1x1, some 2x1, some 2x2
- Each card is self-contained with its own background, padding, content
- Light grey background with white cards — high contrast between bg and surface
- Cards have subtle shadows and rounded corners (16-20px)
- Content inside cards varies — text, images, icons, numbers, illustrations

---

## 19. Bauhaus

**Label**: Bauhaus — Geometric Modernism
**Best for**: Design schools, art galleries, architecture, creative agencies, museums

**Mood**: Primary colors, geometric shapes, functional beauty. Form follows function. Bold simplicity.

**References**: Bauhaus movement, Wassily Kandinsky, Marcel Breuer, Anni Albers

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(97% 0.005 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(15% 0.01 0);
  --muted:   oklch(50% 0.01 0);
  --border:  oklch(15% 0.01 0);
  --accent:  oklch(55% 0.22 30);       /* Bauhaus red */
  --accent-2: oklch(70% 0.18 80);     /* Bauhaus yellow */
  --accent-3: oklch(50% 0.16 250);    /* Bauhaus blue */

  --font-display: 'Futura', 'Century Gothic', system-ui, sans-serif;
  --font-body:    'Futura', 'Century Gothic', system-ui, sans-serif;
}
```

**Posture**:
- Primary colors as structural elements — red, yellow, blue blocks
- Geometric shapes — circles, triangles, squares as layout devices
- Asymmetric grid with strong horizontal and vertical lines
- Sans-serif geometric fonts — Futura, Avant Garde
- Large-scale photography with strong compositional geometry
- White space is a structural element, not just padding

---

## 20. Retro 70s

**Label**: Retro 70s — Warm Nostalgia
**Best for**: Vintage brands, music, food/beverage, lifestyle, creative portfolios

**Mood**: Warm, earthy, nostalgic. Mustard, burnt orange, brown. Feels like a 1970s living room.

**References**: 1970s graphic design, Wes Anderson films, vintage record covers

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(94% 0.015 80);      /* warm cream */
  --surface: oklch(90% 0.018 75);
  --fg:      oklch(25% 0.02 70);       /* dark brown */
  --muted:   oklch(50% 0.02 70);
  --border:  oklch(80% 0.015 75);
  --accent:  oklch(60% 0.15 60);       /* burnt orange */

  --font-display: 'Cooper Black', 'Bookman', Georgia, serif;
  --font-body:    'Bookman', Georgia, serif;
}
```

**Posture**:
- Warm, earthy palette — mustard, burnt orange, brown, olive
- Rounded, chunky typography — Cooper Black, Bookman
- Organic, flowing layouts — nothing rigid or grid-locked
- Textured backgrounds — paper grain, subtle noise
- Vintage photography — warm tones, film grain
- Decorative elements — wavy lines, sunbursts, floral patterns

---

## 21. Y2K / Early 2000s

**Label**: Y2K — Millennium Optimism
**Best for**: Fashion, music, tech nostalgia, youth brands, creative agencies

**Mood**: Chrome, gradients, bubble letters. Feels like 2000 — optimistic, futuristic, slightly tacky but intentional.

**References**: Early 2000s web design, Britney Spears era, Y2K fashion revival

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(95% 0.02 280);      /* light lavender */
  --surface: oklch(100% 0.02 280);
  --fg:      oklch(20% 0.02 280);
  --muted:   oklch(55% 0.03 280);
  --border:  oklch(80% 0.03 280);
  --accent:  oklch(70% 0.20 320);      /* hot pink */
  --accent-2: oklch(75% 0.15 200);     /* cyan */
  --accent-3: oklch(80% 0.12 80);      /* lime */

  --font-display: 'Arial Black', 'Impact', system-ui, sans-serif;
  --font-body:    'Verdana', 'Tahoma', system-ui, sans-serif;
}
```

**Posture**:
- Chrome/metallic effects on buttons and borders
- Bright, saturated gradients — pink-to-blue, green-to-yellow
- Bubble-style rounded elements and chunky typography
- Star/sparkle decorative elements
- Glossy, reflective surfaces — gradients that simulate shine
- Verdana and Arial Black as primary fonts

---

## 22. Vaporwave

**Label**: Vaporwave — Aesthetic Internet
**Best for**: Music, art, gaming, creative portfolios, fashion, meme culture

**Mood**: Nostalgic, dreamy, surreal. Pink and teal gradients, Greek statues, Windows 95 aesthetics.

**References**: Vaporwave music, aesthetic Tumblr, Windows 95, mall culture

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(20% 0.05 300);      /* deep purple */
  --surface: oklch(28% 0.06 300);
  --fg:      oklch(90% 0.03 320);
  --muted:   oklch(65% 0.05 310);
  --border:  oklch(40% 0.08 300);
  --accent:  oklch(70% 0.20 330);      /* hot pink */
  --accent-2: oklch(65% 0.15 190);     /* teal */

  --font-display: 'MS Gothic', 'Courier New', monospace;
  --font-body:    'MS Gothic', 'Courier New', monospace;
}
```

**Posture**:
- Dark purple/pink backgrounds with teal accents
- Monospace fonts — MS Gothic, Courier New
- Glitch effects and scan lines acceptable
- Greek statue imagery, palm trees, sunsets
- Windows 95-style UI elements as decorative accents
- Japanese text as decorative element (even if meaningless)

---

## 23. Cottagecore

**Label**: Cottagecore — Rural Romance
**Best for**: Food blogs, handmade goods, wellness, farming, lifestyle, wedding

**Mood**: Soft, pastoral, romantic. Feels like a countryside cottage with fresh flowers and homemade bread.

**References**: Cottagecore aesthetic, English countryside, farmer's markets, botanical illustrations

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(96% 0.01 95);       /* warm linen */
  --surface: oklch(94% 0.012 90);
  --fg:      oklch(30% 0.02 85);       /* warm brown */
  --muted:   oklch(55% 0.02 85);
  --border:  oklch(85% 0.01 90);
  --accent:  oklch(60% 0.12 150);      /* sage green */

  --font-display: 'Cormorant Garamond', 'Georgia', serif;
  --font-body:    'Source Serif 4', 'Georgia', serif;
}
```

**Posture**:
- Warm linen/cream backgrounds — never pure white
- Soft, muted colors — sage green, dusty rose, warm brown
- Botanical illustrations and floral decorative elements
- Serif typography — elegant, readable, romantic
- Hand-drawn elements acceptable — sketches, watercolor textures
- Photography: natural light, soft focus, warm tones, countryside settings

---

## 24. Dark Academia

**Label**: Dark Academia — Scholarly Gothic
**Best for**: Education, publishing, libraries, universities, literary brands, museums

**Mood**: Moody, intellectual, timeless. Dark wood, leather-bound books, candlelight. Feels like an Oxford library.

**References**: Dark Academia aesthetic, Oxford libraries, Gothic architecture, classical literature

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(22% 0.02 70);       /* dark warm brown */
  --surface: oklch(28% 0.025 70);
  --fg:      oklch(88% 0.01 70);       /* warm cream */
  --muted:   oklch(60% 0.02 70);
  --border:  oklch(40% 0.03 70);
  --accent:  oklch(55% 0.10 50);       /* deep burgundy */

  --font-display: 'EB Garamond', 'Palatino', Georgia, serif;
  --font-body:    'EB Garamond', 'Palatino', Georgia, serif;
}
```

**Posture**:
- Dark, warm backgrounds — deep browns, not pure black
- Serif typography everywhere — Garamond, Palatino, Caslon
- Burgundy, gold, and cream as accent colors
- Classical imagery — statues, architecture, old books
- Ornamental borders and dividers — thin gold lines
- Photography: moody, warm tones, candlelight, libraries

---

## 25. Memphis Design

**Label**: Memphis — Postmodern Pop
**Best for**: Creative agencies, fashion, music, art galleries, youth brands

**Mood**: Bold, chaotic, joyful. Clashing patterns, bright colors, geometric shapes. Anti-minimalism.

**References**: Memphis Group, Ettore Sottsass, 1980s postmodern design

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.005 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(15% 0.01 0);
  --muted:   oklch(50% 0.01 0);
  --border:  oklch(15% 0.01 0);
  --accent:  oklch(65% 0.22 30);       /* hot red */
  --accent-2: oklch(75% 0.18 80);     /* electric yellow */
  --accent-3: oklch(60% 0.20 250);    /* cobalt blue */
  --accent-4: oklch(70% 0.18 160);    /* mint green */

  --font-display: 'Futura', 'Century Gothic', system-ui, sans-serif;
  --font-body:    'Helvetica Neue', system-ui, sans-serif;
}
```

**Posture**:
- Multiple clashing accent colors — 4+ colors used together
- Geometric patterns — squiggles, dots, triangles, stripes
- Asymmetric, chaotic layouts — intentional disorder
- Thick black borders and outlines on everything
- No gradients, no shadows — flat, bold, graphic
- Photography: high contrast, saturated, pop art style

---

## 26. Industrial

**Label**: Industrial — Raw & Exposed
**Best for**: Manufacturing, construction, breweries, workshops, hardware, tools

**Mood**: Raw, honest, functional. Exposed materials, concrete, steel. No decoration, just structure.

**References**: Industrial design, exposed brick, steel fabrication, warehouse conversions

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(85% 0.005 0);       /* concrete grey */
  --surface: oklch(90% 0.005 0);
  --fg:      oklch(20% 0.01 0);        /* steel dark */
  --muted:   oklch(50% 0.01 0);
  --border:  oklch(40% 0.01 0);        /* raw steel */
  --accent:  oklch(55% 0.12 50);       /* rust orange */

  --font-display: 'Oswald', 'Roboto Condensed', system-ui, sans-serif;
  --font-body:    'Roboto', system-ui, sans-serif;
  --font-mono:    'Roboto Mono', monospace;
}
```

**Posture**:
- Grey concrete backgrounds — no warmth, no decoration
- Exposed structural elements — visible grid lines, raw borders
- Rust orange as the single accent — like oxidized steel
- Condensed sans-serif fonts — Oswald, Roboto Condensed
- Photography: industrial settings, raw materials, workers
- No rounded corners — everything is sharp, angular, functional

---

## 27. Coastal / Nautical

**Label**: Coastal / Nautical — Ocean Breeze
**Best for**: Marine businesses, beach resorts, seafood restaurants, sailing, coastal real estate

**Mood**: Fresh, breezy, maritime. Navy and white, rope textures, weathered wood. Feels like a New England harbor.

**References**: New England coastal, Nantucket, yacht clubs, seaside cottages

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(97% 0.005 240);     /* sea foam white */
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.02 250);      /* navy */
  --muted:   oklch(50% 0.02 245);
  --border:  oklch(85% 0.01 245);
  --accent:  oklch(55% 0.14 250);      /* navy blue */

  --font-display: 'Montserrat', system-ui, sans-serif;
  --font-body:    'Open Sans', system-ui, sans-serif;
}
```

**Posture**:
- Navy and white as primary palette — classic nautical
- Subtle blue-grey undertones in backgrounds
- Rope, anchor, wave decorative elements (subtle, not cartoonish)
- Clean, crisp typography — Montserrat, Open Sans
- Photography: ocean, boats, coastal landscapes, natural light
- Weathered wood textures acceptable at very low opacity

---

## 28. Desert / Southwest

**Label**: Desert / Southwest — Warm Earth
**Best for**: Southwestern brands, tourism, restaurants, spas, architecture, landscape photography

**Mood**: Warm, expansive, sun-baked. Terracotta, sandstone, turquoise. Feels like the American Southwest.

**References**: Arizona desert, Santa Fe architecture, Native American art, Georgia O'Keeffe

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(94% 0.012 70);      /* warm sand */
  --surface: oklch(92% 0.015 65);
  --fg:      oklch(25% 0.02 60);       /* dark earth */
  --muted:   oklch(55% 0.02 65);
  --border:  oklch(80% 0.015 65);
  --accent:  oklch(55% 0.14 40);       /* terracotta */

  --font-display: 'Rockwell', 'Courier New', serif;
  --font-body:    'Source Sans 3', system-ui, sans-serif;
}
```

**Posture**:
- Warm sand/terracotta backgrounds — earth tones only
- Turquoise as secondary accent — Native American influence
- Slab serif fonts — Rockwell, Courier New
- Geometric patterns inspired by Native American art
- Photography: desert landscapes, adobe architecture, warm light
- Textured backgrounds — stucco, sandstone at low opacity

---

## 29. Tropical

**Label**: Tropical — Lush Paradise
**Best for**: Travel, resorts, food/beverage, spas, wellness, event planning

**Mood**: Vibrant, lush, exotic. Palm leaves, bright flowers, turquoise water. Feels like a tropical vacation.

**References**: Tropical resorts, Hawaiian culture, botanical gardens, Tiki bars

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(97% 0.01 160);      /* light mint */
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.02 160);      /* deep green */
  --muted:   oklch(50% 0.03 155);
  --border:  oklch(85% 0.015 155);
  --accent:  oklch(60% 0.18 150);      /* palm green */
  --accent-2: oklch(65% 0.20 30);      /* hibiscus pink */
  --accent-3: oklch(70% 0.18 80);      /* tropical yellow */

  --font-display: 'Pacifico', 'Playfair Display', serif;
  --font-body:    'Lato', system-ui, sans-serif;
}
```

**Posture**:
- Lush green backgrounds with bright flower accents
- Tropical leaf patterns as decorative elements
- Script fonts for headlines — Pacifico, brush scripts
- Photography: beaches, palm trees, tropical flowers, turquoise water
- Vibrant, saturated colors — no muted tones
- Organic, flowing layouts — nothing rigid

---

## 30. Space / Cosmic

**Label**: Space / Cosmic — Beyond Earth
**Best for**: Science, aerospace, tech startups, education, gaming, futurism

**Mood**: Vast, mysterious, awe-inspiring. Deep space black, starlight, nebula gradients.

**References**: NASA, SpaceX, Hubble telescope images, Cosmos series

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(10% 0.02 280);      /* deep space */
  --surface: oklch(16% 0.03 280);
  --fg:      oklch(92% 0.01 280);
  --muted:   oklch(60% 0.03 280);
  --border:  oklch(28% 0.04 280);
  --accent:  oklch(70% 0.20 290);      /* nebula purple */
  --accent-2: oklch(75% 0.15 220);     /* star blue */

  --font-display: 'Exo 2', 'Orbitron', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'Space Mono', monospace;
}
```

**Posture**:
- Very dark backgrounds — near-black with purple/blue tint
- Nebula gradients as hero backgrounds — purple, blue, pink
- Star-like dot patterns and constellation decorative elements
- Futuristic fonts — Exo 2, Orbitron
- Photography: space, galaxies, nebulae, planets
- Subtle glow effects on important elements

---

## 31. Medical / Healthcare

**Label**: Medical / Healthcare — Trust & Care
**Best for**: Hospitals, clinics, health tech, pharmaceuticals, wellness, telemedicine

**Mood**: Clean, trustworthy, caring. White and blue, clear information hierarchy, accessibility-first.

**References**: Mayo Clinic, Cleveland Clinic, Apple Health, modern hospital design

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(99% 0.002 220);     /* clinical white */
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.015 220);
  --muted:   oklch(50% 0.015 220);
  --border:  oklch(90% 0.005 220);
  --accent:  oklch(55% 0.12 210);      /* medical blue */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — clinical, sterile but warm
- Medical blue as primary accent — trust, calm, professional
- Clear, accessible typography — large sizes, high contrast
- Rounded corners for friendliness — 8-12px
- Photography: diverse patients, caring staff, modern facilities
- Accessibility is paramount — WCAG AAA where possible

---

## 32. Legal / Law Firm

**Label**: Legal / Law — Authority & Tradition
**Best for**: Law firms, legal tech, consulting, government, financial services

**Mood**: Authoritative, traditional, established. Dark navy, gold accents, serif typography.

**References**: Traditional law firms, Supreme Court, legal publishing, Black's Law Dictionary

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 250);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.015 250);
  --muted:   oklch(45% 0.015 250);
  --border:  oklch(85% 0.008 250);
  --accent:  oklch(35% 0.08 250);      /* deep navy */

  --font-display: 'Crimson Text', 'Georgia', serif;
  --font-body:    'Source Sans 3', system-ui, sans-serif;
}
```

**Posture**:
- Deep navy as primary brand color — authority, trust
- Serif display fonts — Crimson Text, Georgia, Garamond
- Conservative layouts — centered headings, structured columns
- Gold accents for premium feel — borders, dividers
- Photography: professional headshots, court buildings, libraries
- No playful elements — serious, professional throughout

---

## 33. Restaurant / Fine Dining

**Label**: Restaurant / Fine Dining — Culinary Art
**Best for**: Restaurants, cafes, bars, catering, food brands, culinary schools

**Mood**: Appetizing, warm, inviting. Dark backgrounds, food photography, elegant typography.

**References**: Michelin-starred restaurants, Eater, Bon Appetit, high-end dining

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(18% 0.02 70);       /* warm dark */
  --surface: oklch(24% 0.025 70);
  --fg:      oklch(92% 0.01 70);
  --muted:   oklch(65% 0.02 70);
  --border:  oklch(35% 0.03 70);
  --accent:  oklch(60% 0.12 50);       /* warm gold */

  --font-display: 'Playfair Display', 'Georgia', serif;
  --font-body:    'Lato', system-ui, sans-serif;
}
```

**Posture**:
- Dark, warm backgrounds — makes food photography pop
- Gold accents for elegance — borders, dividers, buttons
- Serif display fonts — Playfair Display, elegant and readable
- Large, dramatic food photography — full-bleed, high contrast
- Menu-style layouts — two columns, clear pricing
- Photography: plated dishes, chef action, warm restaurant ambiance

---

## 34. Fitness / Gym

**Label**: Fitness / Gym — Power & Energy
**Best for**: Gyms, fitness apps, sports brands, personal trainers, wellness

**Mood**: Energetic, powerful, motivating. Dark backgrounds, bold red accents, strong typography.

**References**: Nike, CrossFit, Peloton, Under Armour

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(15% 0.015 0);       /* near black */
  --surface: oklch(22% 0.015 0);
  --fg:      oklch(95% 0.005 0);
  --muted:   oklch(60% 0.015 0);
  --border:  oklch(35% 0.015 0);
  --accent:  oklch(55% 0.20 30);       /* power red */

  --font-display: 'Oswald', 'Bebas Neue', system-ui, sans-serif;
  --font-body:    'Roboto Condensed', system-ui, sans-serif;
}
```

**Posture**:
- Dark backgrounds with bold red accents — power, energy
- Condensed, bold typography — Oswald, Bebas Neue
- Action photography — athletes in motion, sweat, intensity
- Diagonal lines and angular shapes — movement, dynamism
- High contrast — everything is bold, nothing subtle
- Motivational copy — large, impactful headlines

---

## 35. Real Estate

**Label**: Real Estate — Property & Place
**Best for**: Real estate agencies, property management, architecture, interior design

**Mood**: Professional, aspirational, trustworthy. Clean whites, property photography, clear information.

**References**: Zillow, Compass, Sotheby's Realty, architectural digest

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.012 0);
  --muted:   oklch(50% 0.012 0);
  --border:  oklch(88% 0.005 0);
  --accent:  oklch(45% 0.10 250);      /* trust blue */

  --font-display: 'Montserrat', system-ui, sans-serif;
  --font-body:    'Open Sans', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — lets property photos shine
- Trust blue as accent — professional, established
- Large property photography — hero images, gallery grids
- Clear property information cards — price, beds, baths, sqft
- Map integration feels native here
- Photography: architectural, well-lit, aspirational interiors

---

## 36. Education / University

**Label**: Education / University — Knowledge & Tradition
**Best for**: Universities, online courses, edtech, schools, training programs

**Mood**: Scholarly, established, inspiring. Traditional colors with modern clarity.

**References**: Harvard, MIT, Coursera, Khan Academy

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 60);      /* warm white */
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.015 60);
  --muted:   oklch(50% 0.015 60);
  --border:  oklch(88% 0.008 60);
  --accent:  oklch(40% 0.10 30);       /* crimson */

  --font-display: 'Merriweather', 'Georgia', serif;
  --font-body:    'Source Sans 3', system-ui, sans-serif;
}
```

**Posture**:
- Crimson or deep blue as primary — traditional academic colors
- Serif display fonts — Merriweather, Georgia, scholarly feel
- Structured, grid-based layouts — organized, clear hierarchy
- Campus photography — buildings, students, libraries
- Course cards with clear information — duration, level, instructor
- Accessibility and readability are paramount

---

## 37. Music / Audio

**Label**: Music / Audio — Sound & Rhythm
**Best for**: Music streaming, audio production, bands, podcasts, record labels

**Mood**: Dynamic, immersive, emotional. Dark backgrounds, vibrant album art, waveform elements.

**References**: Spotify, Apple Music, SoundCloud, Bandcamp

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(12% 0.02 0);        /* deep black */
  --surface: oklch(20% 0.02 0);
  --fg:      oklch(95% 0.005 0);
  --muted:   oklch(60% 0.02 0);
  --border:  oklch(30% 0.02 0);
  --accent:  oklch(65% 0.22 150);      /* vibrant green */

  --font-display: 'Circular', 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Deep black backgrounds — album art pops
- Vibrant green accent — Spotify-inspired
- Album art as hero imagery — large, prominent
- Waveform visualizations as decorative elements
- Card-based layouts for playlists, albums, artists
- Photography: artists performing, studio sessions, album covers

---

## 38. Fashion / Couture

**Label**: Fashion / Couture — High Style
**Best for**: Fashion brands, designers, boutiques, magazines, lookbooks

**Mood**: Editorial, aspirational, bold. Full-bleed photography, minimal UI, dramatic typography.

**References**: Vogue, Balenciaga, Rick Owens, Saint Laurent

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(100% 0 0);          /* pure white */
  --surface: oklch(100% 0 0);
  --fg:      oklch(10% 0.005 0);       /* pure black */
  --muted:   oklch(50% 0.005 0);
  --border:  oklch(85% 0.005 0);
  --accent:  oklch(10% 0.005 0);       /* black is the accent */

  --font-display: 'Didot', 'Bodoni Moda', Georgia, serif;
  --font-body:    'Helvetica Neue', system-ui, sans-serif;
}
```

**Posture**:
- Pure black and white — no color except photography
- Didot/Bodoni display fonts — high fashion typography
- Full-bleed, editorial photography — models, garments, details
- Minimal UI — the photography is the interface
- Large, dramatic headlines — often single words
- Generous whitespace — luxury is space

---

## 39. Automotive

**Label**: Automotive — Speed & Precision
**Best for**: Car dealers, auto manufacturers, racing, automotive services, EV brands

**Mood**: Sleek, powerful, precise. Dark backgrounds, metallic accents, dynamic photography.

**References**: Tesla, Porsche, BMW, Mercedes-Benz

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(15% 0.015 250);     /* dark blue-grey */
  --surface: oklch(22% 0.02 250);
  --fg:      oklch(95% 0.005 250);
  --muted:   oklch(60% 0.02 250);
  --border:  oklch(35% 0.025 250);
  --accent:  oklch(65% 0.15 250);      /* electric blue */

  --font-display: 'Eurostile', 'Orbitron', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Dark, metallic backgrounds — makes car photography pop
- Electric blue or red accent — speed, technology
- Wide, cinematic layouts — cars are horizontal subjects
- Dynamic photography — cars in motion, dramatic angles
- Technical specifications presented clearly — tables, specs
- Photography: studio shots, action shots, detail close-ups

---

## 40. Crypto / Web3

**Label**: Crypto / Web3 — Decentralized Future
**Best for**: Crypto exchanges, DeFi, NFT platforms, blockchain, Web3 startups

**Mood**: Futuristic, technical, bold. Dark mode, neon accents, geometric patterns, data visualization.

**References**: Coinbase, OpenSea, Uniswap, Ethereum

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(12% 0.02 250);      /* dark blue */
  --surface: oklch(18% 0.03 250);
  --fg:      oklch(92% 0.01 250);
  --muted:   oklch(55% 0.03 250);
  --border:  oklch(30% 0.04 250);
  --accent:  oklch(70% 0.20 160);      /* crypto green */
  --accent-2: oklch(65% 0.22 270);     /* blockchain purple */

  --font-display: 'Space Grotesk', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
}
```

**Posture**:
- Dark blue backgrounds with neon green/purple accents
- Geometric patterns — hexagons, nodes, network visualizations
- Monospace for addresses, hashes, technical data
- Data-heavy sections — charts, prices, market caps
- Photography: abstract, geometric, technology-focused
- Gradient text for headlines — purple-to-green

---

## 41. SaaS Dashboard

**Label**: SaaS Dashboard — Data Command Center
**Best for**: Admin panels, analytics dashboards, SaaS products, internal tools

**Mood**: Information-dense, organized, actionable. Every pixel serves a purpose.

**References**: Stripe dashboard, Linear, Vercel analytics, Mixpanel

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(96% 0.005 250);     /* light grey */
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.012 250);
  --muted:   oklch(50% 0.012 250);
  --border:  oklch(88% 0.005 250);
  --accent:  oklch(55% 0.16 250);      /* action blue */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'SF Mono', 'JetBrains Mono', monospace;
}
```

**Posture**:
- Light grey background with white cards — clear separation
- Sidebar navigation — collapsible, icon + label
- Data tables with sortable columns, filters, pagination
- Chart visualizations — line, bar, pie, area charts
- Status indicators — colored dots, badges, progress bars
- Dense but organized — information hierarchy is critical

---

## 42. Portfolio / Creative

**Label**: Portfolio / Creative — Show Your Work
**Best for**: Designers, developers, photographers, artists, freelancers

**Mood**: Personal, curated, impactful. The work is the hero. Minimal interface, maximum impact.

**References**: Dribbble, Behance, personal portfolio sites, Read.cv

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(15% 0.01 0);
  --muted:   oklch(50% 0.01 0);
  --border:  oklch(90% 0.005 0);
  --accent:  oklch(55% 0.18 250);      /* personal blue */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — work samples pop
- Grid-based project gallery — masonry or uniform grid
- Project cards with large thumbnails — image-first
- Minimal navigation — Home, Work, About, Contact
- Typography is clean and modern — Inter, system fonts
- Photography: the user's own work — screenshots, photos, designs

---

## 43. Blog / Content

**Label**: Blog / Content — Read & Learn
**Best for**: Personal blogs, news sites, magazines, content creators, newsletters

**Mood**: Readable, comfortable, engaging. Typography-first, generous line length, clear hierarchy.

**References**: Medium, Substack, The Verge, Stratechery

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(99% 0.002 95);      /* warm white */
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.015 95);
  --muted:   oklch(50% 0.015 95);
  --border:  oklch(90% 0.005 95);
  --accent:  oklch(50% 0.12 250);      /* readable blue */

  --font-display: 'Georgia', 'Source Serif 4', serif;
  --font-body:    'Source Serif 4', 'Georgia', serif;
}
```

**Posture**:
- Warm white backgrounds — easy on the eyes for long reading
- Serif body text — Georgia, Source Serif 4, comfortable reading
- Narrow content column — 65-75 characters per line
- Clear heading hierarchy — H1, H2, H3 with distinct sizes
- Reading time estimates, author bylines, publication dates
- Photography: featured images, inline illustrations, author photos

---

## 44. Marketplace

**Label**: Marketplace — Buy & Sell
**Best for**: E-commerce marketplaces, classifieds, service platforms, gig economy

**Mood**: Trustworthy, diverse, transactional. Clear product/service cards, search-heavy, filter-rich.

**References**: Etsy, Airbnb, Fiverr, eBay

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(97% 0.005 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.012 0);
  --muted:   oklch(50% 0.012 0);
  --border:  oklch(88% 0.005 0);
  --accent:  oklch(55% 0.14 170);      /* marketplace green */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Search bar is prominent — hero section is search
- Filter sidebar — categories, price range, ratings, location
- Product/service cards with image, title, price, rating
- Grid layout — responsive, 2-4 columns depending on viewport
- Trust signals — reviews, ratings, verified badges
- Photography: product photos, service previews, user-generated content

---

## 45. Event / Conference

**Label**: Event / Conference — Gather & Learn
**Best for**: Conferences, meetups, festivals, workshops, webinars

**Mood**: Exciting, time-sensitive, community-focused. Bold dates, speaker highlights, urgency.

**References**: TED, WWDC, React Conf, SXSW

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(12% 0.03 280);      /* dark purple */
  --surface: oklch(20% 0.04 280);
  --fg:      oklch(92% 0.01 280);
  --muted:   oklch(60% 0.03 280);
  --border:  oklch(35% 0.05 280);
  --accent:  oklch(70% 0.22 30);       /* event orange */

  --font-display: 'Bebas Neue', 'Oswald', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Dark, dramatic backgrounds — makes event branding pop
- Bold, condensed typography — Bebas Neue, Oswald
- Large date display — countdown timers, "Save the Date"
- Speaker cards with photos, names, titles, talks
- Schedule/timeline section — clear, scannable agenda
- Photography: past events, speakers on stage, audience energy

---

## 46. Nonprofit / Charity

**Label**: Nonprofit / Charity — Make a Difference
**Best for**: Charities, NGOs, foundations, social causes, volunteer organizations

**Mood**: Compassionate, trustworthy, impactful. Emotional storytelling, clear calls to action.

**References**: Charity: Water, WWF, Red Cross, Doctors Without Borders

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.015 0);
  --muted:   oklch(50% 0.015 0);
  --border:  oklch(88% 0.005 0);
  --accent:  oklch(55% 0.14 170);      /* hope green */

  --font-display: 'Merriweather', 'Georgia', serif;
  --font-body:    'Source Sans 3', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — lets emotional photography shine
- Hope green or compassion blue as accent
- Emotional photography — real people, real impact, not stock
- Impact statistics — large numbers, clear metrics
- Clear donation CTA — prominent, repeated, frictionless
- Storytelling sections — before/after, beneficiary stories

---

## 47. Travel / Tourism

**Label**: Travel / Tourism — Explore the World
**Best for**: Travel agencies, tourism boards, hotels, airlines, tour operators

**Mood**: Inspiring, adventurous, aspirational. Stunning destination photography, clear booking flows.

**References**: Airbnb Experiences, Booking.com, Lonely Planet, National Geographic

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.012 0);
  --muted:   oklch(50% 0.012 0);
  --border:  oklch(88% 0.005 0);
  --accent:  oklch(55% 0.16 200);      /* travel blue */

  --font-display: 'Montserrat', system-ui, sans-serif;
  --font-body:    'Open Sans', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — destination photography is the hero
- Travel blue as accent — trust, exploration, sky/ocean
- Large destination photography — full-bleed, aspirational
- Search/booking form — dates, destinations, travelers
- Destination cards — image, name, price, rating
- Photography: landscapes, landmarks, local experiences, food

---

## 48. Photography

**Label**: Photography — Capture & Display
**Best for**: Photographers, galleries, portfolios, photo studios, stock photography

**Mood**: Immersive, visual, minimal. The photos are everything. Interface disappears.

**References**: Magnum Photos, National Geographic photographers, 500px, Unsplash

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(10% 0.01 0);        /* near black */
  --surface: oklch(16% 0.01 0);
  --fg:      oklch(92% 0.005 0);
  --muted:   oklch(60% 0.01 0);
  --border:  oklch(28% 0.01 0);
  --accent:  oklch(92% 0.005 0);       /* white is the accent */

  --font-display: 'Helvetica Neue', system-ui, sans-serif;
  --font-body:    'Helvetica Neue', system-ui, sans-serif;
}
```

**Posture**:
- Near-black backgrounds — photos pop dramatically
- Minimal UI — navigation is small, unobtrusive
- Masonry or grid photo gallery — responsive, infinite scroll
- Lightbox for full-screen viewing — smooth transitions
- Photo metadata — EXIF data, location, camera info
- Photography: the photographer's own work — nothing else

---

## 49. Architecture / Interior

**Label**: Architecture / Interior — Space & Form
**Best for**: Architecture firms, interior designers, real estate developers, construction

**Mood**: Sophisticated, spatial, material-focused. Large project imagery, clean typography, process documentation.

**References**: ArchDaily, Dezeen, architectural firm websites, interior design studios

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(15% 0.01 0);
  --muted:   oklch(50% 0.01 0);
  --border:  oklch(88% 0.005 0);
  --accent:  oklch(35% 0.01 0);        /* near-black accent */

  --font-display: 'Helvetica Neue', system-ui, sans-serif;
  --font-body:    'Helvetica Neue', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — architectural photography is the hero
- Near-black as accent — no color, just black and white
- Large project imagery — full-bleed, high-resolution
- Project details — location, year, size, materials, team
- Process documentation — sketches, plans, construction photos
- Photography: architectural, interior, detail shots, material close-ups

---

## 50. Podcast

**Label**: Podcast — Listen & Subscribe
**Best for**: Podcasts, audio shows, radio programs, interview series

**Mood**: Conversational, engaging, accessible. Episode listings, player integration, subscribe buttons.

**References**: The Joe Rogan Experience, Serial, This American Life, Huberman Lab

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(15% 0.02 280);      /* dark purple */
  --surface: oklch(22% 0.03 280);
  --fg:      oklch(92% 0.01 280);
  --muted:   oklch(60% 0.03 280);
  --border:  oklch(35% 0.04 280);
  --accent:  oklch(70% 0.20 300);      /* podcast purple */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Dark backgrounds with purple accent — podcast aesthetic
- Episode list with play buttons — title, duration, date
- Audio player integration — prominent, sticky player
- Subscribe buttons — Apple Podcasts, Spotify, Google Podcasts
- Guest cards with photos, bios, episode links
- Photography: host photos, guest photos, studio shots

---

## 51. Newsletter / Substack

**Label**: Newsletter / Substack — Subscribe & Read
**Best for**: Newsletters, email lists, content creators, writers, journalists

**Mood**: Personal, direct, valuable. Email capture is primary. Writing samples showcase quality.

**References**: Substack, Beehiiv, ConvertKit, Morning Brew

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(99% 0.002 95);
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.015 95);
  --muted:   oklch(50% 0.015 95);
  --border:  oklch(90% 0.005 95);
  --accent:  oklch(55% 0.16 30);       /* newsletter orange */

  --font-display: 'Georgia', 'Source Serif 4', serif;
  --font-body:    'Source Serif 4', 'Georgia', serif;
}
```

**Posture**:
- Warm white backgrounds — reading comfort
- Email capture form is hero — prominent, above the fold
- Sample posts/essays — showcase writing quality
- Subscriber count as social proof — "Join 10,000+ readers"
- Archive section — past issues, searchable, categorized
- Photography: author photo, minimal decorative elements

---

## 52. AI / Machine Learning

**Label**: AI / Machine Learning — Intelligent Systems
**Best for**: AI products, ML platforms, data science tools, automation, chatbots

**Mood**: Futuristic, intelligent, capable. Gradient accents, data visualizations, conversation UI.

**References**: OpenAI, Anthropic, Hugging Face, Midjourney

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.005 270);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.015 270);
  --muted:   oklch(50% 0.02 270);
  --border:  oklch(90% 0.008 270);
  --accent:  oklch(60% 0.22 300);      /* AI purple */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'SF Mono', 'JetBrains Mono', monospace;
}
```

**Posture**:
- Gradient accents — purple-to-blue, representing intelligence
- Conversation UI elements — chat bubbles, prompt/response
- Data visualizations — charts, graphs, model outputs
- Code snippets and API examples — monospace blocks
- Capability showcases — what the AI can do, demonstrated
- Photography: abstract, data-driven, technology-focused

---

## 53. Fintech / Banking

**Label**: Fintech / Banking — Money & Trust
**Best for**: Banks, payment processors, investment apps, crypto wallets, financial tools

**Mood**: Secure, modern, trustworthy. Clean interfaces, clear numbers, trust signals.

**References**: Stripe, Square, Revolut, Robinhood, Mercury

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(99% 0.002 220);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.012 220);
  --muted:   oklch(50% 0.012 220);
  --border:  oklch(90% 0.005 220);
  --accent:  oklch(50% 0.14 160);      /* fintech green */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'SF Mono', 'JetBrains Mono', monospace;
}
```

**Posture**:
- Clean white backgrounds — trust, clarity
- Fintech green or blue accent — money, growth, trust
- Clear numbers and metrics — large, tabular numerics
- Security badges and compliance signals — SOC 2, PCI
- Dashboard previews — show the product in action
- Photography: diverse users, modern offices, abstract financial

---

## 54. Gaming

**Label**: Gaming — Play & Compete
**Best for**: Game studios, esports, gaming platforms, game reviews, streaming

**Mood**: Energetic, immersive, competitive. Dark backgrounds, neon accents, dynamic imagery.

**References**: Steam, Epic Games, Twitch, Riot Games

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(12% 0.02 250);      /* dark blue */
  --surface: oklch(18% 0.03 250);
  --fg:      oklch(92% 0.01 250);
  --muted:   oklch(55% 0.03 250);
  --border:  oklch(30% 0.04 250);
  --accent:  oklch(65% 0.22 160);      /* gaming green */
  --accent-2: oklch(60% 0.25 30);      /* gaming red */

  --font-display: 'Rajdhani', 'Orbitron', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Dark blue backgrounds with neon green/red accents
- Game imagery as hero — screenshots, trailers, key art
- Dynamic, angled layouts — diagonal sections, skewed elements
- Player stats and leaderboards — competitive elements
- Game cards with ratings, genres, platforms
- Photography: gameplay screenshots, character art, esports action

---

## 55. Food & Beverage

**Label**: Food & Beverage — Taste & Craft
**Best for**: Restaurants, cafes, food brands, breweries, meal kits, recipes

**Mood**: Appetizing, warm, crafted. Food photography is everything. Warm tones, inviting layouts.

**References**: Bon Appetit, Serious Eats, Blue Bottle Coffee, craft breweries

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(96% 0.01 80);       /* warm cream */
  --surface: oklch(94% 0.012 75);
  --fg:      oklch(25% 0.02 70);       /* dark brown */
  --muted:   oklch(55% 0.02 70);
  --border:  oklch(82% 0.015 75);
  --accent:  oklch(50% 0.12 50);       /* warm terracotta */

  --font-display: 'Playfair Display', 'Georgia', serif;
  --font-body:    'Source Sans 3', system-ui, sans-serif;
}
```

**Posture**:
- Warm cream backgrounds — makes food photography appetizing
- Terracotta or warm brown accents — earthy, food-related
- Large food photography — full-bleed, overhead shots
- Menu-style layouts — items with descriptions and prices
- Ingredient highlights — fresh, local, quality sourcing
- Photography: plated dishes, ingredients, cooking process, ambiance

---

## 56. Wedding / Events

**Label**: Wedding / Events — Celebrate Love
**Best for**: Wedding planners, venues, photographers, florists, event coordinators

**Mood**: Romantic, elegant, joyful. Soft colors, floral elements, beautiful photography.

**References**: The Knot, WeddingWire, Martha Stewart Weddings, high-end planners

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.008 95);      /* soft white */
  --surface: oklch(100% 0.005 95);
  --fg:      oklch(30% 0.015 85);      /* warm charcoal */
  --muted:   oklch(60% 0.015 85);
  --border:  oklch(88% 0.008 90);
  --accent:  oklch(70% 0.08 340);      /* soft rose */

  --font-display: 'Cormorant Garamond', 'Georgia', serif;
  --font-body:    'Cormorant Garamond', 'Georgia', serif;
}
```

**Posture**:
- Soft white backgrounds — romantic, clean
- Rose, blush, gold accents — wedding palette
- Elegant serif typography — Cormorant Garamond
- Large wedding photography — ceremonies, details, celebrations
- Floral decorative elements — subtle, not overwhelming
- Photography: ceremonies, details, flowers, celebrations, portraits

---

## 57. Sports / Athletics

**Label**: Sports / Athletics — Performance & Competition
**Best for**: Sports teams, athletic brands, fitness apps, leagues, sports media

**Mood**: Dynamic, powerful, competitive. Bold colors, action photography, strong typography.

**References**: Nike, ESPN, Strava, team websites

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(15% 0.015 0);
  --surface: oklch(22% 0.015 0);
  --fg:      oklch(95% 0.005 0);
  --muted:   oklch(60% 0.015 0);
  --border:  oklch(35% 0.015 0);
  --accent:  oklch(60% 0.22 30);       /* sports red */

  --font-display: 'Bebas Neue', 'Oswald', system-ui, sans-serif;
  --font-body:    'Roboto Condensed', system-ui, sans-serif;
}
```

**Posture**:
- Dark backgrounds with bold red or team-color accents
- Condensed, bold typography — Bebas Neue, Oswald
- Action photography — athletes in motion, competition
- Scoreboards and stats — live scores, standings, records
- Team/player cards — photos, stats, positions
- Photography: action shots, celebrations, training, stadium atmosphere

---

## 58. Pet / Animal

**Label**: Pet / Animal — Companions & Care
**Best for**: Pet stores, veterinary clinics, pet services, animal shelters, pet food

**Mood**: Warm, friendly, caring. Animal photography, soft colors, approachable design.

**References**: Chewy, Rover, Petco, ASPCA

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.008 80);      /* warm white */
  --surface: oklch(100% 0 0);
  --fg:      oklch(25% 0.02 70);       /* warm brown */
  --muted:   oklch(55% 0.02 70);
  --border:  oklch(88% 0.01 75);
  --accent:  oklch(60% 0.14 70);       /* pet orange */

  --font-display: 'Nunito', system-ui, sans-serif;
  --font-body:    'Source Sans 3', system-ui, sans-serif;
}
```

**Posture**:
- Warm white backgrounds — friendly, clean
- Pet orange or green accent — warm, caring
- Rounded corners everywhere — soft, friendly
- Animal photography — pets, happy owners, vet care
- Service cards — grooming, vet, boarding, training
- Photography: happy pets, pet-owner interactions, care settings

---

## 59. Beauty / Cosmetics

**Label**: Beauty / Cosmetics — Glow & Care
**Best for**: Beauty brands, cosmetics, skincare, salons, spas

**Mood**: Elegant, aspirational, polished. Soft gradients, product photography, luxurious feel.

**References**: Glossier, Fenty Beauty, Sephora, Aesop

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(97% 0.008 340);     /* soft pink white */
  --surface: oklch(100% 0 0);
  --fg:      oklch(25% 0.015 340);     /* warm dark */
  --muted:   oklch(55% 0.015 340);
  --border:  oklch(88% 0.008 340);
  --accent:  oklch(70% 0.10 340);      /* soft pink */

  --font-display: 'Playfair Display', 'Georgia', serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Soft pink-white backgrounds — feminine, clean
- Soft pink or rose gold accents — beauty palette
- Elegant serif display fonts — Playfair Display
- Product photography — clean, minimal, well-lit
- Ingredient highlights — natural, clean, transparent
- Photography: product shots, models, application, ingredients

---

## 60. Technology / Hardware

**Label**: Technology / Hardware — Build & Ship
**Best for**: Hardware companies, electronics, gadgets, IoT, robotics

**Mood**: Precise, engineered, innovative. Dark backgrounds, product photography, technical specs.

**References**: Apple, Dyson, Framework, Teenage Engineering

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(15% 0.01 0);
  --muted:   oklch(50% 0.01 0);
  --border:  oklch(88% 0.005 0);
  --accent:  oklch(55% 0.16 250);      /* tech blue */

  --font-display: 'SF Pro Display', system-ui, sans-serif;
  --font-body:    'SF Pro Text', system-ui, sans-serif;
  --font-mono:    'SF Mono', monospace;
}
```

**Posture**:
- Clean white backgrounds — product photography is hero
- Tech blue accent — innovation, precision
- Large product photography — studio shots, detail close-ups
- Technical specifications — tables, diagrams, exploded views
- Feature highlights — what makes this product different
- Photography: product shots, lifestyle usage, technical details

---

## 61. Agriculture / Farming

**Label**: Agriculture / Farming — Grow & Harvest
**Best for**: Farms, agricultural tech, food producers, garden centers, organic brands

**Mood**: Earthy, honest, productive. Green and brown tones, natural textures, harvest imagery.

**References**: John Deere, Farmdrop, modern farming cooperatives, organic farms

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(96% 0.012 120);     /* light green-white */
  --surface: oklch(94% 0.015 115);
  --fg:      oklch(25% 0.02 120);      /* dark green */
  --muted:   oklch(55% 0.02 115);
  --border:  oklch(82% 0.015 115);
  --accent:  oklch(50% 0.14 140);      /* crop green */

  --font-display: 'Merriweather', 'Georgia', serif;
  --font-body:    'Source Sans 3', system-ui, sans-serif;
}
```

**Posture**:
- Light green-white backgrounds — natural, fresh
- Crop green and earth brown accents — agricultural palette
- Serif display fonts — Merriweather, traditional, trustworthy
- Field and harvest photography — crops, equipment, seasons
- Product/process cards — what's grown, how, when available
- Photography: fields, harvest, equipment, farmers, produce

---

## 62. Construction / Trades

**Label**: Construction / Trades — Build & Craft
**Best for**: Construction companies, contractors, tradespeople, building services

**Mood**: Solid, reliable, skilled. Bold colors, project photography, clear service offerings.

**References**: Construction company sites, trade associations, equipment manufacturers

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.015 0);
  --muted:   oklch(50% 0.015 0);
  --border:  oklch(88% 0.005 0);
  --accent:  oklch(65% 0.18 80);       /* safety yellow */

  --font-display: 'Oswald', system-ui, sans-serif;
  --font-body:    'Roboto', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — professional, clear
- Safety yellow or orange accent — construction colors
- Bold, condensed typography — Oswald, strong and readable
- Project photography — before/after, in-progress, completed
- Service cards — what you build, how, where
- Photography: construction sites, completed projects, teams, equipment

---

## 63. Insurance

**Label**: Insurance — Protect & Secure
**Best for**: Insurance companies, brokers, comparison sites, risk management

**Mood**: Trustworthy, clear, protective. Blue and white, clear information, quote forms.

**References**: Lemonade, Geico, State Farm, modern insurtech

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(99% 0.002 220);
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.015 220);
  --muted:   oklch(50% 0.015 220);
  --border:  oklch(90% 0.005 220);
  --accent:  oklch(50% 0.12 220);      /* insurance blue */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — trust, clarity
- Insurance blue — trust, security, reliability
- Quote form is prominent — get a quote, compare plans
- Clear plan comparisons — tables, coverage details, pricing
- Trust signals — ratings, reviews, years in business
- Photography: families, homes, cars, peace of mind

---

## 64. Logistics / Shipping

**Label**: Logistics / Shipping — Move & Deliver
**Best for**: Shipping companies, freight, supply chain, delivery services, warehousing

**Mood**: Efficient, reliable, global. Blue and orange, tracking interfaces, route maps.

**References**: FedEx, Maersk, Flexport, DHL

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 250);
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.015 250);
  --muted:   oklch(50% 0.015 250);
  --border:  oklch(88% 0.005 250);
  --accent:  oklch(55% 0.16 250);      /* logistics blue */
  --accent-2: oklch(60% 0.18 40);      /* shipping orange */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
}
```

**Posture**:
- Clean white backgrounds — professional, clear
- Blue and orange accents — logistics palette
- Tracking interface — shipment status, ETA, location
- Route maps and network visualizations
- Service cards — freight, warehousing, last-mile, customs
- Photography: shipping containers, trucks, warehouses, global ports

---

## 65. Energy / Utilities

**Label**: Energy / Utilities — Power & Sustain
**Best for**: Energy companies, utilities, solar, wind, smart grid, sustainability

**Mood**: Clean, sustainable, powerful. Green and blue, data visualizations, impact metrics.

**References**: Tesla Energy, Vestas, NextEra Energy, modern utilities

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 160);     /* clean white-green */
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.015 160);
  --muted:   oklch(50% 0.015 160);
  --border:  oklch(88% 0.005 160);
  --accent:  oklch(55% 0.14 160);      /* energy green */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Clean white-green backgrounds — sustainable, fresh
- Energy green accent — renewable, clean power
- Data visualizations — energy production, consumption, savings
- Impact metrics — CO2 saved, homes powered, trees planted
- Technology showcases — solar panels, wind turbines, batteries
- Photography: renewable energy installations, nature, technology

---

## 66. Telecommunications

**Label**: Telecommunications — Connect & Communicate
**Best for**: Telecom companies, ISPs, mobile carriers, network providers

**Mood**: Connected, fast, reliable. Blue and purple, coverage maps, plan comparisons.

**References**: Verizon, T-Mobile, Starlink, modern ISPs

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(99% 0.002 270);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.012 270);
  --muted:   oklch(50% 0.012 270);
  --border:  oklch(90% 0.005 270);
  --accent:  oklch(55% 0.18 280);      /* telecom purple */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — clear, professional
- Telecom purple or blue accent — connectivity, speed
- Plan comparison tables — clear pricing, features, limits
- Coverage maps — where service is available
- Speed/performance metrics — latency, bandwidth, uptime
- Photography: connected people, technology, infrastructure

---

## 67. Government / Civic

**Label**: Government / Civic — Serve & Inform
**Best for**: Government agencies, civic organizations, public services, municipalities

**Mood**: Authoritative, accessible, transparent. Clear information, official colors, accessibility-first.

**References**: GOV.UK, USDS, 18F, modern government sites

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(99% 0.002 250);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.012 250);
  --muted:   oklch(50% 0.012 250);
  --border:  oklch(88% 0.005 250);
  --accent:  oklch(40% 0.10 250);      /* government blue */

  --font-display: 'Merriweather', 'Georgia', serif;
  --font-body:    'Source Sans 3', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — official, clear
- Government blue — authority, trust, service
- Clear information hierarchy — services, forms, contacts
- Accessibility is paramount — WCAG AAA, screen reader friendly
- Service cards — what you can do, how, where
- Photography: public spaces, civic engagement, diverse communities

---

## 68. Nonprofit / NGO

**Label**: Nonprofit / NGO — Mission & Impact
**Best for**: NGOs, foundations, advocacy groups, humanitarian organizations

**Mood**: Compassionate, urgent, impactful. Emotional photography, clear mission, donation flows.

**References**: UNICEF, Oxfam, Amnesty International, Doctors Without Borders

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.015 0);
  --muted:   oklch(50% 0.015 0);
  --border:  oklch(88% 0.005 0);
  --accent:  oklch(55% 0.14 30);       /* mission red */

  --font-display: 'Merriweather', 'Georgia', serif;
  --font-body:    'Source Sans 3', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — lets impact photography shine
- Mission red or blue accent — urgency, importance
- Emotional photography — real impact, real people
- Impact statistics — large numbers, clear metrics
- Donation CTA — prominent, repeated, frictionless
- Photography: field work, beneficiaries, volunteers, impact

---

## 69. Dating / Social

**Label**: Dating / Social — Connect & Match
**Best for**: Dating apps, social platforms, community sites, networking

**Mood**: Warm, inviting, exciting. Gradient accents, profile cards, matching interfaces.

**References**: Tinder, Bumble, Hinge, Meetup

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.01 340);      /* warm white */
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.02 340);
  --muted:   oklch(55% 0.02 340);
  --border:  oklch(88% 0.01 340);
  --accent:  oklch(60% 0.20 30);       /* dating red-pink */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Warm white backgrounds — inviting, friendly
- Red-pink gradient accents — romance, connection
- Profile cards with photos — swipeable, engaging
- Matching interface — likes, matches, messages
- Clear CTAs — sign up, create profile, start matching
- Photography: diverse people, social settings, connections

---

## 70. HR / Recruitment

**Label**: HR / Recruitment — Hire & Grow
**Best for**: Recruiting agencies, HR platforms, job boards, talent management

**Mood**: Professional, people-focused, efficient. Clean layouts, job listings, candidate flows.

**References**: LinkedIn, Indeed, Greenhouse, Lever

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(99% 0.002 220);
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.015 220);
  --muted:   oklch(50% 0.015 220);
  --border:  oklch(90% 0.005 220);
  --accent:  oklch(55% 0.14 220);      /* professional blue */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — professional, clear
- Professional blue — trust, competence
- Job listings — title, company, location, salary, tags
- Company profiles — culture, benefits, open positions
- Application flow — clear, step-by-step, mobile-friendly
- Photography: diverse teams, modern offices, collaboration

---

## 71. Real Estate / Property

**Label**: Real Estate / Property — Find Your Place
**Best for**: Property listings, real estate agencies, rental platforms, property management

**Mood**: Aspirational, trustworthy, detailed. Property photography, search filters, map views.

**References**: Zillow, Rightmove, Compass, Airbnb

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.012 0);
  --muted:   oklch(50% 0.012 0);
  --border:  oklch(88% 0.005 0);
  --accent:  oklch(50% 0.12 200);      /* property blue */

  --font-display: 'Montserrat', system-ui, sans-serif;
  --font-body:    'Open Sans', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — property photos pop
- Property blue accent — trust, stability
- Search bar with filters — location, price, type, beds
- Property cards — photo, price, address, key features
- Map view integration — location-based browsing
- Photography: interiors, exteriors, neighborhoods, amenities

---

## 72. E-learning / Courses

**Label**: E-learning / Courses — Learn & Grow
**Best for**: Online courses, learning platforms, tutoring, certification programs

**Mood**: Educational, structured, motivating. Course cards, progress tracking, clear learning paths.

**References**: Coursera, Udemy, MasterClass, Khan Academy

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 220);
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.015 220);
  --muted:   oklch(50% 0.015 220);
  --border:  oklch(88% 0.005 220);
  --accent:  oklch(55% 0.16 200);      /* learning blue */

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — focus on content
- Learning blue accent — knowledge, growth
- Course cards — thumbnail, title, instructor, rating, price
- Learning paths — structured progression, milestones
- Progress tracking — completion percentages, certificates
- Photography: instructors, students, learning environments

---

## 73. SaaS Landing Page

**Label**: SaaS Landing Page — Convert & Grow
**Best for**: SaaS product marketing, app landing pages, feature showcases, trial signups

**Mood**: Conversion-focused, benefit-driven, product-led. Clear value prop, social proof, CTA.

**References**: Linear, Notion, Figma, Vercel landing pages

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(99% 0.002 250);
  --surface: oklch(100% 0 0);
  --fg:      oklch(18% 0.012 250);
  --muted:   oklch(54% 0.012 250);
  --border:  oklch(92% 0.005 250);
  --accent:  oklch(58% 0.18 255);      /* SaaS blue */

  --font-display: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-body:    -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — product screenshots pop
- SaaS blue or purple accent — modern, tech-forward
- Hero with clear value prop — headline, subhead, CTA, product image
- Feature sections — alternating image + text, benefit-focused
- Social proof — logos, testimonials, user counts
- Pricing section — clear tiers, feature comparison, CTA

---

## 74. Agency / Consulting

**Label**: Agency / Consulting — Expertise & Results
**Best for**: Consulting firms, creative agencies, marketing agencies, professional services

**Mood**: Confident, results-driven, professional. Case studies, team profiles, clear service offerings.

**References**: McKinsey, IDEO, Pentagram, modern consulting firms

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(98% 0.003 0);
  --surface: oklch(100% 0 0);
  --fg:      oklch(15% 0.01 0);
  --muted:   oklch(50% 0.01 0);
  --border:  oklch(88% 0.005 0);
  --accent:  oklch(40% 0.08 250);      /* consulting navy */

  --font-display: 'Helvetica Neue', system-ui, sans-serif;
  --font-body:    'Helvetica Neue', system-ui, sans-serif;
}
```

**Posture**:
- Clean white backgrounds — professional, clear
- Navy or dark blue accent — expertise, trust
- Case study cards — client, challenge, result, metrics
- Team profiles — photos, roles, expertise, contact
- Service offerings — clear, benefit-focused, not feature-focused
- Photography: team collaboration, client meetings, results

---

## 75. Minimalist / Zen

**Label**: Minimalist / Zen — Less Is Everything
**Best for**: Personal brands, meditation apps, minimalist products, philosophical brands

**Mood**: Ultra-minimal, meditative, intentional. Extreme whitespace, single accent, one font.

**References**: Muji, Apple (early), minimalist blogs, zen aesthetics

**Palette (OKLch)**:
```css
:root {
  --bg:      oklch(100% 0 0);          /* pure white */
  --surface: oklch(100% 0 0);
  --fg:      oklch(20% 0.005 0);       /* near black */
  --muted:   oklch(60% 0.005 0);
  --border:  oklch(90% 0.002 0);
  --accent:  oklch(20% 0.005 0);       /* black is the only accent */

  --font-display: 'Helvetica Neue', system-ui, sans-serif;
  --font-body:    'Helvetica Neue', system-ui, sans-serif;
}
```

**Posture**:
- Pure white backgrounds — nothing else
- Black is the only color — no accents, no gradients
- Single font family — weight and size create hierarchy
- Extreme whitespace — elements are far apart, deliberate
- One element per viewport — scroll to discover
- Photography: minimal, monochrome, intentional, sparse

---

## Direction Selection Guide

| Client Says | Pick |
|---|---|
| "Make it look like a magazine" | 1. Editorial Monocle |
| "Clean, like Linear/Vercel" | 2. Modern Minimal |
| "Friendly, consumer-facing" | 3. Human Approachable |
| "Dashboard, data-heavy" | 4. Tech Utility |
| "Bold, artistic, different" | 5. Brutalist Experimental |
| "Dark mode, developer tool" | 6. Dark Mode Native |
| "Architecture, museum, gallery" | 7. Swiss International |
| "Wellness, mindfulness, zen" | 8. Japanese Minimal or 75. Minimalist/Zen |
| "Startup with personality" | 9. Neobrutalism |
| "Premium, iOS-like" | 10. Glassmorphism |
| "Enterprise, B2B, trustworthy" | 11. Corporate Enterprise |
| "Fun, colorful, playful" | 12. Playful Memphis |
| "Lifestyle, furniture, Nordic" | 13. Nordic / Scandinavian |
| "Gaming, crypto, futuristic" | 14. Cyberpunk / Neon |
| "Luxury, jewelry, high-end" | 15. Art Deco / Luxury |
| "Organic, sustainable, natural" | 16. Organic / Natural |
| "SaaS, API, modern startup" | 17. Gradient Tech |
| "Apple-style, feature grid" | 18. Bento Grid |
| "Design school, art gallery" | 19. Bauhaus |
| "Vintage, retro, nostalgic" | 20. Retro 70s |
| "Y2K, millennium, early 2000s" | 21. Y2K / Early 2000s |
| "Vaporwave, aesthetic, internet" | 22. Vaporwave |
| "Cottage, rural, handmade" | 23. Cottagecore |
| "Academic, scholarly, library" | 24. Dark Academia |
| "Postmodern, chaotic, bold" | 25. Memphis Design |
| "Raw, industrial, workshop" | 26. Industrial |
| "Beach, coastal, nautical" | 27. Coastal / Nautical |
| "Desert, southwest, earthy" | 28. Desert / Southwest |
| "Tropical, vacation, lush" | 29. Tropical |
| "Space, cosmic, science" | 30. Space / Cosmic |
| "Hospital, clinic, health" | 31. Medical / Healthcare |
| "Law firm, legal, authority" | 32. Legal / Law Firm |
| "Restaurant, dining, food" | 33. Restaurant / Fine Dining |
| "Gym, fitness, athletic" | 34. Fitness / Gym |
| "Real estate, property" | 35. Real Estate |
| "University, education, course" | 36. Education / University |
| "Music, audio, streaming" | 37. Music / Audio |
| "Fashion, couture, style" | 38. Fashion / Couture |
| "Automotive, car, vehicle" | 39. Automotive |
| "Crypto, Web3, blockchain" | 40. Crypto / Web3 |
| "Admin panel, analytics" | 41. SaaS Dashboard |
| "Designer portfolio, creative" | 42. Portfolio / Creative |
| "Blog, content, reading" | 43. Blog / Content |
| "Marketplace, buy/sell" | 44. Marketplace |
| "Conference, event, meetup" | 45. Event / Conference |
| "Charity, nonprofit, cause" | 46. Nonprofit / Charity |
| "Travel, tourism, hotel" | 47. Travel / Tourism |
| "Photography, gallery" | 48. Photography |
| "Architecture, interior design" | 49. Architecture / Interior |
| "Podcast, audio show" | 50. Podcast |
| "Newsletter, Substack" | 51. Newsletter / Substack |
| "AI, machine learning" | 52. AI / Machine Learning |
| "Fintech, banking, payments" | 53. Fintech / Banking |
| "Gaming, esports, streaming" | 54. Gaming |
| "Food, beverage, cafe" | 55. Food & Beverage |
| "Wedding, events, celebration" | 56. Wedding / Events |
| "Sports, athletics, competition" | 57. Sports / Athletics |
| "Pet, animal, veterinary" | 58. Pet / Animal |
| "Beauty, cosmetics, skincare" | 59. Beauty / Cosmetics |
| "Technology, hardware, gadgets" | 60. Technology / Hardware |
| "Agriculture, farming, garden" | 61. Agriculture / Farming |
| "Construction, trades, building" | 62. Construction / Trades |
| "Insurance, protection" | 63. Insurance |
| "Logistics, shipping, delivery" | 64. Logistics / Shipping |
| "Energy, utilities, solar" | 65. Energy / Utilities |
| "Telecom, internet, mobile" | 66. Telecommunications |
| "Government, civic, public" | 67. Government / Civic |
| "NGO, humanitarian, advocacy" | 68. Nonprofit / NGO |
| "Dating, social, community" | 69. Dating / Social |
| "HR, recruitment, hiring" | 70. HR / Recruitment |
| "Property, rental, listings" | 71. Real Estate / Property |
| "E-learning, courses, training" | 72. E-learning / Courses |
| "SaaS product landing page" | 73. SaaS Landing Page |
| "Agency, consulting, expertise" | 74. Agency / Consulting |
| "Ultra-minimal, zen, sparse" | 75. Minimalist / Zen |
