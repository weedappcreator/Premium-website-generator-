# Device Frames Reference

From [Open Design](https://github.com/nexu-io/open-design). Use these device frame specs when presenting mockups or testing responsive designs.

## Frame Types

### iPhone 15 Pro
- **Dimensions**: 393 × 852px (logical)
- **Features**: Dynamic Island, status bar, home indicator
- **Use**: Mobile prototypes, app screens, mobile-first designs
- **Viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1">`

### Pixel (Android)
- **Dimensions**: 412 × 915px (logical)
- **Features**: Status bar, navigation bar
- **Use**: Android app prototypes, cross-platform testing

### iPad Pro
- **Dimensions**: 1024 × 1366px (logical)
- **Features**: Status bar, home indicator
- **Use**: Tablet prototypes, responsive testing

### MacBook
- **Dimensions**: 1440 × 900px (logical)
- **Features**: Menu bar, window chrome
- **Use**: Desktop prototypes, web app previews

### Browser (Chrome)
- **Dimensions**: 1440 × 900px (viewport)
- **Features**: URL bar, window controls
- **Use**: Standard web testing

## Responsive Breakpoints

When designing, test at these breakpoints:

| Breakpoint | Width | Device |
|---|---|---|
| Mobile | 375px | iPhone SE |
| Mobile Large | 414px | iPhone 15 Pro Max |
| Tablet | 768px | iPad Mini |
| Tablet Large | 1024px | iPad Pro |
| Desktop | 1440px | MacBook |
| Desktop Large | 1920px | External monitor |

## Presentation Tips

- When showing mockups to clients, use device frames for context
- Mobile-first: design at 375px first, then scale up
- Test all interactive elements at each breakpoint
- Ensure touch targets ≥ 44×44px on mobile
- Check text readability at all sizes
