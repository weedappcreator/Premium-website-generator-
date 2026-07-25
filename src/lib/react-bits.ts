/**
 * React Bits — Animated Component Library Integration
 *
 * Integrates React Bits (DavidHDev/react-bits) animated components
 * into the website generator for creative text effects, backgrounds,
 * and interactive UI elements.
 *
 * Source: https://github.com/DavidHDev/react-bits
 * Docs: https://react-bits.dev
 */

export const REACT_BITS_COMPONENTS = {
  textAnimations: [
    'SplitText',
    'BlurText',
    'ShinyText',
    'GradientText',
    'DecryptedText',
    'RotatingText',
    'TiltedScroll',
    'TextPressure',
    'CountUp',
    'Typewriter',
    'ScrollFloat',
    'ScrollReveal',
    'ScrollVelocity',
    'VariableProximity',
    'TextMorph',
    'FadeContent',
    'ASCIIText',
    'TrueFocus',
    'CircularText',
    'FlipText',
    'FallingText',
  ],
  backgrounds: [
    'Hyperspeed',
    'Aurora',
    'Iridescence',
    'Particles',
    'Squares',
    'LetterGlitch',
    'Threads',
    'Ripple',
    'GridDistortion',
    'SplashCursor',
    'ClickSpark',
    'StarBorder',
    'GridPattern',
    'ShapeBlur',
    'Noise',
    'Ballpit',
    'Orb',
  ],
  components: [
    'Dock',
    'InfiniteMenu',
    'Magnet',
    'PixelCard',
    'SpotlightCard',
    'TiltedCard',
    'StackedCards',
    'ElasticSlider',
    'Masonry',
    'PixelTransition',
    'ImageTrail',
    'LiquidChrome',
    'Ribbons',
    'SmoothReveal',
    'InfiniteScroll',
    'RolodexCards',
    'Lanyard',
  ],
};

/**
 * Build the React Bits prompt context for the system prompt.
 */
export function buildReactBitsContext(): string {
  return `
## React Bits — Animated Component Library (Available)
React Bits provides 50+ animated components for creative frontends. Use these instead of building custom animations from scratch.

### Import Pattern
\`\`\`jsx
// Components are imported directly from react-bits
import { SplitText } from 'react-bits/text-animations';
import { Aurora } from 'react-bits/backgrounds';
import { Dock } from 'react-bits/components';
\`\`\`

### Text Animations (use for hero headlines, section titles, creative typography)
| Component | Best For |
|-----------|----------|
| \`SplitText\` | Hero headlines with per-character/word animation |
| \`BlurText\` | Fade-in with blur effect for elegant reveals |
| \`ShinyText\` | Shimmer/shine effect on text |
| \`GradientText\` | Animated gradient fills on text |
| \`DecryptedText\` | Matrix/decode reveal effect |
| \`RotatingText\` | Cycling through multiple words |
| \`CountUp\` | Animated number counting |
| \`ScrollFloat\` | Text floats/parallax on scroll |
| \`ScrollReveal\` | Text reveals on scroll position |
| \`FlipText\` | 3D flip text animation |
| \`FallingText\` | Gravity-based falling letters |
| \`TrueFocus\` | Focus/spotlight on individual words |
| \`CircularText\` | Text arranged in a circle |

### Backgrounds (use for hero sections, page backgrounds, visual accents)
| Component | Best For |
|-----------|----------|
| \`Aurora\` | Gradient aurora borealis effect |
| \`Particles\` | Floating particle system |
| \`Hyperspeed\` | Starfield/warp speed effect |
| \`Iridescence\` | Holographic/iridescent surface |
| \`Squares\` | Animated square grid pattern |
| \`Threads\` | Flowing thread/fiber animation |
| \`Ripple\` | Water ripple effect on interaction |
| \`GridDistortion\` | Distorted grid on mouse move |
| \`Noise\` | Animated noise/grain texture |
| \`Ballpit\` | Physics-based bouncing balls |
| \`SplashCursor\` | Splash effect following cursor |
| \`ClickSpark\` | Spark particles on click |

### Interactive Components (use for creative UI elements)
| Component | Best For |
|-----------|----------|
| \`Dock\` | macOS-style dock with magnification |
| \`Magnet\` | Magnetic hover effect on elements |
| \`PixelCard\` | Card with pixel dissolution effect |
| \`SpotlightCard\` | Card with spotlight following cursor |
| \`TiltedCard\` | 3D tilt card on hover |
| \`StackedCards\` | Stacked/fanned card layout |
| \`ElasticSlider\` | Slider with elastic/spring physics |
| \`Masonry\` | Masonry grid layout with animation |
| \`ImageTrail\` | Images trailing the cursor |
| \`LiquidChrome\` | Liquid chrome material effect |
| \`InfiniteScroll\` | Smooth infinite scrolling content |

### When to Use React Bits
- Hero sections needing visual impact (SplitText, BlurText, Aurora)
- Agency/portfolio sites wanting "wow" factor
- Creative landing pages with DESIGN_VARIANCE > 6
- Interactive showcases and experimental layouts
- When MOTION_INTENSITY > 5 calls for animated components

### When NOT to Use
- Dashboard/product UI — too decorative
- Public sector / accessibility-first sites
- When MOTION_INTENSITY < 4
- Simple informational pages
`;
}
