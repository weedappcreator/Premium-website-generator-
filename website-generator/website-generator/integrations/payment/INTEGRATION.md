# Integration: Payment

## Options

### Stripe
- **Best for**: Custom checkout, subscriptions, global
- **Setup**: Stripe.js + Elements or Checkout
- **Fees**: 2.9% + 30¢ per transaction

```bash
npm install @stripe/stripe-js
```

### Stripe Checkout (Hosted)
- **Best for**: Quick setup, no PCI concerns
- **Setup**: Create payment link or session

```javascript
const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
stripe.redirectToCheckout({ sessionId });
```

### PayPal
- **Best for**: International, buyer trust
- **Setup**: PayPal JS SDK
- **Fees**: Varies by region

### LemonSqueezy
- **Best for**: Digital products, handles tax
- **Setup**: Checkout overlay
- **Fees**: 5% + 50¢

### Gumroad
- **Best for**: Simple digital sales
- **Setup**: Embed button or link
- **Fees**: 10% flat

## Decision Guide

| Need | Choose |
|---|---|
| Full control + subscriptions | Stripe |
| Quick setup + hosted | Stripe Checkout |
| Digital products + tax | LemonSqueezy |
| Simplest setup | Gumroad |
| International buyers | PayPal |
