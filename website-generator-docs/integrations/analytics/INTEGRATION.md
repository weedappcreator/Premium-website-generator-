# Integration: Analytics

## Options

### Google Analytics 4
- **Best for**: Most sites, free, comprehensive
- **Setup**: Add gtag.js snippet or use @next/third-parties
- **Tracks**: Page views, events, conversions, demographics

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible
- **Best for**: Privacy-focused, simple, lightweight
- **Setup**: Single script tag
- **Tracks**: Page views, events, goals (no cookies)

```html
<script defer data-domain="yoursite.com" src="https://plausible.io/js/script.js"></script>
```

### PostHog
- **Best for**: Product analytics, session recording, feature flags
- **Setup**: SDK install
- **Tracks**: Everything + heatmaps, recordings, A/B tests

### Vercel Analytics
- **Best for**: Vercel-hosted sites, privacy-friendly
- **Setup**: `npm i @vercel/analytics`
- **Tracks**: Page views, speed insights

## Decision Guide

| Need | Choose |
|---|---|
| Free + comprehensive | Google Analytics 4 |
| Privacy + simple | Plausible |
| Product analytics | PostHog |
| Vercel + minimal | Vercel Analytics |
