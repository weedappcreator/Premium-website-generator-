# E-Commerce Template Catalog

Extracted from top GitHub repos tagged `ecommerce-website-template`. Provides structural patterns, component layouts, and generation prompts for professional e-commerce website generation.

## Sources Analyzed

| Repo | Stars | Stack | Pages |
|------|-------|-------|-------|
| [noorjsdivs/orebishopping](https://github.com/noorjsdivs/orebishopping) | 159 | React + Redux + Tailwind | Home, Shop, Product Detail, Cart, Account, Contact, About, Journal, Offer, Payment |
| [mukesh7700/Precart](https://github.com/mukesh7700/Precart) | 3 | Next.js 14 + TypeScript + Tailwind + shadcn/ui | Home, Men, Women, Kids, Cart, Account, Orders, Payment, Returns, Help |
| [StrangerSeemanta/purplify-ecommerce-bloom](https://github.com/StrangerSeemanta/purplify-ecommerce-bloom) | — | React + Vite + TypeScript + Tailwind + shadcn/ui + React Query | Home, Shop, Product Detail, Category, Cart (sidebar), Wishlist (sidebar), Account, About, Contact |

---

## Page Architecture

### Core Pages (Both Repos)

```
ecommerce/
├── Home (hero + categories + featured + newArrivals + bestSellers + specialOffers + newsletter + footer)
├── Shop / Catalog (sidebar filters + product grid + pagination + sort)
├── Product Detail (image gallery + info + variants + reviews + related products)
├── Cart (item list + quantity controls + summary + checkout CTA)
├── Checkout / Payment (form steps + payment methods + order summary)
├── Account (login/register + profile + addresses + orders)
├── About
├── Contact
└── Blog / Journal
```

### Additional Pages (Precart)

```
├── My Orders
├── Order Details
├── Addresses Management
├── Personal Info
├── Email Newsletter
├── Return & Refund Policy
├── Exchange or Return
├── Forgot Password
├── Help / FAQ
└── Category pages (Men, Women, Kids, Shoes)
```

### Additional Pages (Purplify)

```
├── Category Page (category/:categoryName)
├── Wishlist (sidebar drawer)
├── Cart (sidebar drawer via shadcn Sheet)
├── Account (with nested routes)
├── About (Hero, Story, Team, Values sections)
└── 404 Not Found
```

---

## Component Breakdown

### Layout Components
| Component | Orebi | Precart | Purplify | Description |
|-----------|-------|---------|----------|-------------|
| Header | `Header.js` + `HeaderBottom.js` | `Header.tsx` + `Header2.tsx` | `Navbar.tsx` | Logo, nav, search, cart icon, account |
| Footer | `Footer.js` + `FooterBottom.js` | `Footer.tsx` + `Footer2.tsx` | `Footer.tsx` | Links, newsletter, social, copyright |
| Banner | `Banner.js` + `BannerBottom.js` | `Carousel2.tsx` + `Carousel3.tsx` | `Hero.tsx` | Hero slider, promotional banners |
| Sidebar | — | `SideBar.tsx` | — | Navigation sidebar for dashboard |
| Layout | — | `LayoutContent.tsx` | — | Main layout wrapper |
| Mobile Nav | — | `Menu1.tsx` | `MobileNavigation` (in Navbar) | Sheet-based mobile menu |

### Product Components
| Component | Orebi | Precart | Description |
|-----------|-------|---------|-------------|
| Product Card | `Product.js` | `GridCard.tsx` | Image, name, price, badge, quick actions |
| Product List | — | `ItemList.tsx` | List view variant |
| Product Info | `ProductInfo.js` | — | Description, variants, add to cart |
| Product Review | — | `ProductReview.tsx` | Star ratings, review list |
| Badge | `Badge.js` | — | Sale, New, Hot badges |
| Heading | `Heading.js` | — | Section titles with underline |
| Hover Card | — | `HoverCard.tsx` | Hover state product card |
| Button Card | — | `ButtonCard.tsx` | Category card with CTA |
| Full Image Card | — | `FullImageCard.tsx` | Large image category card |
| Border Card | — | `BorderCard4.tsx` | Bordered category card |

### Shopping Components
| Component | Orebi | Precart | Description |
|-----------|-------|---------|-------------|
| Cart Card | `ItemCard.js` | `CartCard.tsx` | Cart item with qty controls |
| Shopping Cart | `Cart.js` | `Cart.tsx` | Full cart page |
| Shop Card | — | `ShopingCard.tsx` | Cart summary sidebar |

### Filter Components
| Component | Orebi | Precart | Description |
|-----------|-------|---------|-------------|
| Filter Sidebar | `ShopSideNav.js` | `FilterDrawer.tsx` | Filter panel |
| Category Filter | `shopBy/Category.js` | `filter/Category.tsx` | Category tree |
| Price Filter | `shopBy/Price.js` | `filter/Price.tsx` | Price range slider |
| Color Filter | `shopBy/Color.js` | `filter/Color.tsx` | Color swatches |
| Brand Filter | `shopBy/Brand.js` | — | Brand checkboxes |
| Size Filter | — | `filter/Size.tsx` | Size options |
| Sleeve Filter | — | `filter/Sleeve.tsx` | Sleeve type |
| Fit Filter | — | `filter/Fit.tsx` | Fit type |
| Applied Filters | — | `filter/AppliesFilter.tsx` | Active filter chips |
| Pagination | `Pagination.js` | `Pagination.tsx` | Page navigation |
| Product Banner | `ProductBanner.js` | — | Category banner |
| Breadcrumbs | `Breadcrumbs.js` | `Breadcrumb.tsx` | Navigation trail |

### Home Page Sections
| Component | Orebi | Precart | Description |
|-----------|-------|---------|-------------|
| New Arrivals | `NewArrivals.js` | — | Carousel of new products |
| Best Sellers | `BestSellers.js` | — | Top selling products |
| Special Offers | `SpecialOffers.js` | `Sales.tsx` | Promotional section |
| Year Product | `YearProduct.js` | — | Featured product of year |
| Sale | `Sale.js` | — | Sale banner section |
| Tab Content | — | `TabContent.tsx` | Tabbed product sections |
| Tab Swiper | — | `TabImageSwiper.tsx` | Tabbed image carousel |
| Rating Slider | — | `RatingSlider.tsx` | Customer reviews carousel |

### Account Components
| Component | Orebi | Precart | Description |
|-----------|-------|---------|-------------|
| Sign In | `SignIn.js` | `login/page.tsx` | Login form |
| Sign Up | `SignUp.js` | `registration/page.tsx` | Registration form |
| Auth Card | — | `AuthenticationCard.tsx` | Auth form wrapper |
| Avatar | — | `AvatarUsage.tsx` | User avatar |
| Address Card | — | `AddressCard.tsx` | Address display |
| Address Details | — | `AddressDetailsCard.tsx` | Address form |
| Address Update | — | `AddressUpdate.tsx` | Edit address |
| Order | — | `Order.tsx` | Order list |
| Order Item | — | `OrderItemCard.tsx` | Order detail item |
| Cancel Order | — | `CancelOrderDialog.tsx` | Cancel dialog |
| Return Card | — | `ReturnCard.tsx` | Return request |

### UI Components
| Component | Orebi | Precart | Description |
|-----------|-------|---------|-------------|
| Flex | `designLayouts/Flex.js` | — | Flexbox wrapper |
| List | `designLayouts/List.js` | — | List wrapper |
| ListItem | `designLayouts/ListItem.js` | — | List item |
| Image | `designLayouts/Image.js` | — | Image wrapper |
| Shop Now Button | `designLayouts/buttons/ShopNow.js` | — | CTA button |
| Search | — | `Search.tsx` | Search modal |
| Drawer | — | `Drawer.tsx` | Slide-out drawer |
| Alert Action | — | `AlertAction.tsx` | Toast/alert |
| Menu | — | `Menu1.tsx` | Navigation menu |
| Country Select | — | `CountrySelectWithFlags.tsx` | Country picker |
| Swiper Slide | — | `SwiperSlide.tsx` | Carousel slide |

### State Management
| Layer | Orebi | Precart |
|-------|-------|---------|
| Store | Redux Toolkit (`redux/orebiSlice.js`) | React Context (`context/ThemeContext.tsx`) |
| Cart | Redux state | Context/local state |
| Theme | — | ThemeContext with dark mode |

---

## Common E-Commerce Patterns

### 1. Product Card Pattern
```
┌─────────────────────┐
│  [Badge: New/Sale]  │
│                     │
│    Product Image    │
│   [Quick Actions]   │
│                     │
│  Product Name       │
│  $Price  ~~Old~~    │
│  ★★★★☆ (120)       │
│  [Add to Cart]      │
└─────────────────────┘
```

### 2. Shop Page Layout
```
┌─────────────────────────────────────────────┐
│ Breadcrumbs                                 │
├──────────────┬──────────────────────────────┤
│              │  Sort: [Newest ▼]  View: ▦ ▤ │
│ FILTERS      │                              │
│ ├─ Category  │  ┌───┐ ┌───┐ ┌───┐ ┌───┐    │
│ ├─ Price     │  │ P │ │ P │ │ P │ │ P │    │
│ ├─ Color     │  └───┘ └───┘ └───┘ └───┘    │
│ ├─ Brand     │  ┌───┐ ┌───┐ ┌───┐ ┌───┐    │
│ └─ Size      │  │ P │ │ P │ │ P │ │ P │    │
│              │  └───┘ └───┘ └───┘ └───┘    │
│              │                              │
│              │  [1] 2 3 4 ... 10 [Next]     │
└──────────────┴──────────────────────────────┘
```

### 3. Product Detail Layout
```
┌─────────────────────────────────────────────┐
│ Breadcrumbs                                 │
├──────────────────────┬──────────────────────┤
│ [Thumb]              │ Product Name         │
│ [Thumb] [Main]       │ ★★★★☆ (120 reviews)  │
│ [Thumb]              │ $Price               │
│                      │                      │
│ [← →]                │ Color: ○ ○ ● ○       │
│                      │ Size: S M L XL       │
│                      │ Qty: [-] 1 [+]       │
│                      │ [Add to Cart]        │
│                      │ [Buy Now]            │
│                      │                      │
│                      │ ├─ Description       │
│                      │ ├─ Reviews           │
│                      │ └─ Related Products  │
└──────────────────────┴──────────────────────┘
```

### 4. Cart Layout
```
┌─────────────────────────────────────────────┐
│ Shopping Cart (3 items)                     │
├──────────────────────────┬──────────────────┤
│                          │  Order Summary   │
│ ┌──────────────────────┐ │                  │
│ │ [img] Product Name   │ │  Subtotal: $120  │
│ │ Color: Red  Size: M  │ │  Shipping: $5    │
│ │ [-] 2 [+]     $60 [x]│ │  Tax: $10        │
│ └──────────────────────┘ │  Total: $135     │
│ ┌──────────────────────┐ │                  │
│ │ [img] Product Name   │ │  [Checkout]      │
│ │ Color: Blue   $40 [x]│ │                  │
│ └──────────────────────┘ │  Promo Code:     │
│                          │  [____] [Apply]  │
└──────────────────────────┴──────────────────┘
```

### 5. Home Page Section Order
1. Hero Banner / Carousel
2. Category Cards (grid)
3. New Arrivals (carousel)
4. Featured Product / Sale Banner
5. Best Sellers (grid)
6. Special Offers / Promotions
7. Customer Reviews / Testimonials
8. Newsletter Signup
9. Footer

---

## Generation Prompts

### Full E-Commerce Site Prompt
```
Build a complete e-commerce website with:
- Responsive layout with mobile-first design
- Header with logo, navigation, search bar, cart icon, account
- Hero banner with promotional carousel
- Category grid section (4-6 categories)
- New arrivals product carousel with quick-add
- Featured product section with large image
- Best sellers product grid (4 columns desktop, 2 mobile)
- Special offers / promotional banner section
- Customer reviews carousel
- Newsletter signup section
- Footer with links, social icons, copyright
- Product catalog page with sidebar filters (category, price, color, brand, size)
- Product detail page with image gallery, variants, add to cart, reviews
- Shopping cart with item management and order summary
- Checkout flow with shipping and payment forms
- User account pages (login, register, profile, orders, addresses)
- State management for cart, wishlist, user session
- Dark mode support
```

### Product Card Component Prompt
```
Create a product card component with:
- Product image with hover zoom effect
- Badge overlay (New, Sale, Hot)
- Quick action buttons on hover (wishlist, quick view, add to cart)
- Product name (truncate at 2 lines)
- Current price in bold, original price strikethrough if on sale
- Star rating with review count
- Add to cart button
- Responsive: full width on mobile, grid item on desktop
- Smooth hover animations
- Accessible with proper ARIA labels
```

### Filter Sidebar Prompt
```
Create a filter sidebar component with:
- Collapsible filter sections
- Category tree with product counts
- Price range slider (dual handle)
- Color swatches with checkmarks
- Brand checkboxes with counts
- Size selector buttons
- Applied filters shown as removable chips
- Clear all filters button
- Mobile: slides in as drawer
- Desktop: fixed sidebar
```

### Cart Page Prompt
```
Create a shopping cart page with:
- Cart item list with thumbnail, name, variant info
- Quantity controls (+/-) with min/max validation
- Remove item button with confirmation
- Item price and line total
- Order summary sidebar: subtotal, shipping, tax, total
- Promo code input with apply button
- Proceed to checkout CTA
- Empty cart state with continue shopping link
- Responsive: stacked on mobile, side-by-side on desktop
```

---

## Tech Stack Recommendations

### For React Projects
- **UI**: Tailwind CSS + shadcn/ui components
- **State**: Zustand or Redux Toolkit for cart
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod validation
- **Images**: Next/Image or react-lazy-load-image-component
- **Carousel**: Swiper or Embla Carousel
- **Icons**: Lucide React

### For Next.js Projects
- **Framework**: Next.js 14 App Router
- **UI**: Tailwind CSS + shadcn/ui
- **State**: React Context + useReducer
- **Auth**: NextAuth.js or Supabase Auth
- **Database**: Supabase or Prisma + PostgreSQL
- **Payments**: Stripe
- **Images**: Next/Image (built-in)

---

## File Structure Template

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── product/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductInfo.tsx
│   │   └── ProductGallery.tsx
│   ├── cart/
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   └── CartDrawer.tsx
│   ├── filter/
│   │   ├── FilterSidebar.tsx
│   │   ├── PriceFilter.tsx
│   │   ├── ColorFilter.tsx
│   │   ├── CategoryFilter.tsx
│   │   └── SizeFilter.tsx
│   ├── home/
│   │   ├── HeroBanner.tsx
│   │   ├── CategoryGrid.tsx
│   │   ├── NewArrivals.tsx
│   │   ├── BestSellers.tsx
│   │   ├── SpecialOffers.tsx
│   │   └── Newsletter.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Breadcrumb.tsx
│       ├── Pagination.tsx
│       └── Rating.tsx
├── pages/ or app/
│   ├── home/
│   ├── shop/
│   ├── product/[id]/
│   ├── cart/
│   ├── checkout/
│   ├── account/
│   │   ├── login/
│   │   ├── register/
│   │   ├── orders/
│   │   └── addresses/
│   ├── about/
│   ├── contact/
│   └── blog/
├── store/ or lib/
│   ├── cartStore.ts
│   ├── productStore.ts
│   └── userStore.ts
├── hooks/
│   ├── useCart.ts
│   ├── useProducts.ts
│   └── useFilters.ts
├── types/
│   ├── product.ts
│   ├── cart.ts
│   └── order.ts
└── constants/
    ├── categories.ts
    └── config.ts
```

---

## Purplify-Specific Patterns

### Tech Stack
- **Framework**: React 18 + Vite + TypeScript
- **UI**: Tailwind CSS + shadcn/ui (full component library)
- **Routing**: React Router v6
- **Data Fetching**: TanStack React Query
- **State**: React Context (CartContext, WishlistContext)
- **Icons**: Lucide React
- **Toast**: Sonner + shadcn toast
- **Persistence**: localStorage for cart/wishlist

### Unique Components
| Component | File | Description |
|-----------|------|-------------|
| CartSidebar | `CartSidebar.tsx` | Slide-out cart drawer using shadcn Sheet |
| WishlistSidebar | `WishlistSidebar.tsx` | Slide-out wishlist drawer |
| NewsletterSection | `NewsletterSection.tsx` | Email signup section |
| Hero | `Hero.tsx` | Split layout with stats (15K+ customers, 150+ brands, 90% reviews) |
| Categories | `Categories.tsx` | Category card grid |
| ProductsGrid | `ProductsGrid.tsx` | Featured products section |
| About Sections | `about/HeroSection`, `StorySection`, `TeamSection`, `ValuesSection` | Modular about page |

### Hero Pattern (Purplify)
```
┌─────────────────────────────────────────────────┐
│ [Badge: New Collection 2025]                    │
│                                                  │
│ Discover Amazing Gadgets                        │
│ for Your Lifestyle                               │
│                                                  │
│ Elevate your everyday experiences...            │
│                                                  │
│ [Shop Now] [View Collections →]                 │
│                                                  │
│ 15K+        150+        90%                     │
│ Customers   Brands      Reviews                 │
│                    [Hero Product Image]          │
└─────────────────────────────────────────────────┘
```

### Cart/Wishlist Sidebar Pattern
- Uses shadcn `Sheet` component for slide-out drawers
- Empty state with icon + CTA
- Item list with thumbnail, name, price, quantity controls
- Subtotal + checkout button in footer
- "Continue Shopping" link

### Product Detail Tabs
- Description (features + what's in box)
- Specifications (table format)
- Reviews (rating breakdown + individual reviews)

### Shop Page Features
- Search bar with icon
- Category checkboxes with counts
- Price range checkboxes
- Rating checkboxes (star-based)
- Active filter chips (removable)
- Grid/List view toggle
- Sort dropdown (Featured, Price, Newest, Rating)
- Mobile filter drawer
- Pagination with shadcn component
- No results empty state

### Context Providers Pattern
```tsx
<QueryClientProvider client={queryClient}>
  <TooltipProvider>
    <CartProvider>
      <WishlistProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>...</Routes>
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  </TooltipProvider>
</QueryClientProvider>
```

### Routes Structure
```
/                      → Home (Index)
/about                 → About
/shop                  → Shop (product listing)
/contact               → Contact
/product/:id           → ProductDetail
/categories            → CategoryPage
/category/:categoryName → CategoryPage
/account/*             → Account (nested routes)
*                      → NotFound
```

### Data Model (products.ts)
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  badge?: 'New' | 'Sale';
}
```

---

## Updated Generation Prompts

### Modern E-Commerce with Sidebars (Purplify Pattern)
```
Build a modern e-commerce website with:
- React + Vite + TypeScript + Tailwind + shadcn/ui
- Sticky header with backdrop blur, logo, nav links, account/cart/wishlist icons
- Cart and wishlist as slide-out drawers (shadcn Sheet)
- localStorage persistence for cart and wishlist
- Hero section with gradient background, stats, and CTA buttons
- Category card grid section
- Featured products grid
- Shop page with:
  - Desktop: sticky filter sidebar (search, categories, price, rating)
  - Mobile: slide-out filter drawer
  - Active filter chips with remove buttons
  - Grid/list view toggle
  - Sort dropdown
  - Pagination
- Product detail with:
  - Image gallery with thumbnail selection
  - Quantity selector
  - Add to cart + wishlist buttons
  - Tabs: Description, Specifications, Reviews
  - Similar products section
- Newsletter signup section
- Toast notifications for cart/wishlist actions
- React Query for data fetching
- Responsive design with mobile-first approach
```
