# Skill: E-Commerce

## Purpose
Generate online stores with product listings, cart, and checkout.

## Core Pages

```
/
├── Home (featured products, categories)
├── /shop (product listing with filters)
├── /product/[slug] (product detail)
├── /cart
├── /checkout
├── /account (orders, wishlist)
├── /categories/[slug]
└── /legal (returns, shipping, privacy)
```

## Essential Features

- Product catalog with search & filters
- Shopping cart (persist across sessions)
- Checkout flow (guest + account)
- Payment processing
- Order confirmation & email
- Inventory management
- Shipping calculator
- Tax calculation
- Reviews & ratings
- Wishlist / save for later

## Payment Integration Options

| Provider | Best For |
|---|---|
| Stripe | Custom checkout, subscriptions |
| Stripe Checkout | Quick setup, hosted page |
| PayPal | International, buyer trust |
| Shopify Buy Button | Embedded on any site |
| LemonSqueezy | Digital products |
| Gumroad | Simple digital sales |

## UX Best Practices

- High-quality product images (zoom, multiple angles)
- Clear pricing with any discounts visible
- Stock availability indicator
- Related/upsell products
- Guest checkout option
- Multiple payment methods
- Trust badges & security signals
- Easy returns policy visible

## Technical Requirements

- PCI compliance (use hosted payment fields)
- HTTPS everywhere
- Cart persistence (localStorage + server)
- Inventory sync
- Email notifications
- SEO for product pages (structured data)
- Performance (image optimization critical)
