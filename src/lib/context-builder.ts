import fs from 'fs';
import path from 'path';

const KB_ROOT = path.join(process.cwd(), 'website-generator');

export interface GenerationContext {
  designDirection: string;
  websiteType: string;
  techStack: string;
  template: string;
  integrations: string[];
  userPrompt: string;
}

function readMarkdown(filePath: string): string | null {
  try {
    const fullPath = path.join(KB_ROOT, filePath);
    if (!fs.existsSync(fullPath)) return null;
    return fs.readFileSync(fullPath, 'utf-8');
  } catch {
    return null;
  }
}

function getDesignDirection(direction: string): string {
  const content = readMarkdown('integrations/design-directions/DIRECTIONS.md');
  if (!content) return '';
  
  const lines = content.split('\n');
  const sectionStart = lines.findIndex(l => 
    l.toLowerCase().includes(direction.toLowerCase().replace('-', ' ')) ||
    l.toLowerCase().includes(direction.toLowerCase())
  );
  
  if (sectionStart < 0) {
    // Return first 3 directions as fallback
    return content.split('\n').slice(0, 150).join('\n');
  }
  
  const sectionEnd = lines.slice(sectionStart + 1).findIndex(l => l.startsWith('## '));
  const end = sectionEnd >= 0 ? sectionStart + 1 + sectionEnd : lines.length;
  return lines.slice(sectionStart, Math.min(end, sectionStart + 80)).join('\n');
}

function getSkill(skill: string): string {
  const skillPath = `skills/${skill}/SKILL.md`;
  return readMarkdown(skillPath) || '';
}

function getTechStack(stack: string): string {
  const stackPath = `techstacks/${stack}/STACK.md`;
  return readMarkdown(stackPath) || '';
}

function getIntegrations(names: string[]): string {
  const contents: string[] = [];
  for (const name of names) {
    const content = readMarkdown(`integrations/${name}/README.md`) || 
                    readMarkdown(`integrations/${name}/INTEGRATION.md`);
    if (content) {
      contents.push(`## ${name}\n${content.slice(0, 1500)}`);
    }
  }
  return contents.join('\n\n');
}

function getComponentPatterns(websiteType: string): string {
  const patterns: Record<string, string> = {
    'landing-page': `
## Required Components for Landing Page
1. **Hero Section** - Headline, subheadline, CTA buttons, hero image/animation
2. **Trust Bar** - Logos, stats, testimonials preview
3. **Features Grid** - 3-6 feature cards with icons
4. **How It Works** - Step-by-step process (3-5 steps)
5. **Social Proof** - Testimonials, case studies, reviews
6. **Pricing** - 2-3 tier pricing table (if applicable)
7. **FAQ** - Accordion with 5-8 questions
8. **Final CTA** - Strong call-to-action section
9. **Footer** - Links, social, copyright
`,
    'saas': `
## Required Components for SaaS
1. **Navbar** - Logo, nav links, login/signup buttons, sticky
2. **Hero** - Value prop, subheadline, email/CTA input, dashboard preview
3. **Social Proof** - "Trusted by X companies" with logos
4. **Features** - Tabbed or grid feature showcase
5. **Integration Logos** - Third-party tool integrations
6. **Pricing** - Monthly/annual toggle, 3 tiers, feature comparison
7. **Testimonials** - Customer quotes with photos
8. **Blog/Resources** - Latest content preview
9. **Footer** - Product, company, resources, legal links
`,
    'ecommerce': `
## Required Components for E-commerce
1. **Navbar** - Logo, search, cart icon, categories dropdown
2. **Hero Banner** - Seasonal/promotional with CTA
3. **Featured Categories** - Grid of product categories
4. **Product Grid** - Cards with image, price, rating, add-to-cart
5. **Product Detail** - Images, variants, description, reviews, add-to-cart
6. **Cart Sidebar** - Slide-out cart with quantity controls
7. **Checkout Flow** - Multi-step or single-page checkout
8. **Trust Signals** - Shipping, returns, security badges
9. **Footer** - Customer service, policies, social, newsletter
`,
    'portfolio': `
## Required Components for Portfolio
1. **Hero** - Name, title, brief intro, photo/avatar
2. **About** - Bio, skills, experience timeline
3. **Projects** - Grid/list of work with images, descriptions, links
4. **Project Detail** - Case study format: problem, solution, results
5. **Skills** - Visual skill bars or tag cloud
6. **Testimonials** - Client quotes
7. **Contact** - Form, email, social links
8. **Footer** - Copyright, social links, back-to-top
`,
    'blog': `
## Required Components for Blog
1. **Navbar** - Logo, categories, search, subscribe
2. **Hero** - Featured/latest post with large image
3. **Post Grid** - Cards with image, title, excerpt, date, author
4. **Post Detail** - Title, meta, content, TOC, related posts, comments
5. **Sidebar** - About, categories, popular posts, newsletter
6. **Newsletter** - Email subscription form
7. **Footer** - Categories, social, copyright
`,
    'dashboard': `
## Required Components for Dashboard
1. **Sidebar** - Navigation, user profile, settings
2. **Top Bar** - Search, notifications, user menu
3. **Stats Cards** - KPI metrics with trends
4. **Charts** - Line, bar, pie charts for data visualization
5. **Data Table** - Sortable, filterable, paginated table
6. **Activity Feed** - Recent actions, notifications
7. **Quick Actions** - Common tasks, shortcuts
8. **Settings Panel** - User preferences, theme toggle
`,
    'agency': `
## Required Components for Agency
1. **Hero** - Bold statement, showreel/video background
2. **Services** - What we do, with icons and descriptions
3. **Work/Portfolio** - Case studies with before/after
4. **Process** - How we work, timeline
5. **Team** - Key people, photos, roles
6. **Clients** - Logo grid, testimonials
7. **Blog/Insights** - Latest thinking, case studies
8. **Contact** - Form, office locations, social
9. **Footer** - Full sitemap, social, legal
`
  };
  
  return patterns[websiteType] || patterns['landing-page'];
}

function getAnimationSuggestions(websiteType: string): string {
  return `
## Recommended Animations
- **Hero**: Scroll zoom reveal, parallax background, staggered text entrance
- **Features**: Card tilt on hover, staggered grid entrance, icon pulse
- **CTAs**: Button hover scale + glow, confetti on submit
- **Navigation**: Smooth scroll, hide-on-scroll-down header
- **Loading**: Skeleton shimmer, loading dots
- **Scroll**: Image reveal, text scramble, number counter
`;
}

export function buildFullContext(ctx: GenerationContext): string {
  const sections: string[] = [];

  // 1. Design Direction
  const direction = getDesignDirection(ctx.designDirection);
  if (direction) {
    sections.push(`# Visual Design Direction\n${direction}`);
  }

  // 2. Website Type Skill
  const skill = getSkill(ctx.websiteType);
  if (skill) {
    sections.push(`# Website Type Skill\n${skill}`);
  }

  // 3. Tech Stack
  const stack = getTechStack(ctx.techStack);
  if (stack) {
    sections.push(`# Tech Stack\n${stack}`);
  }

  // 4. Component Patterns
  const components = getComponentPatterns(ctx.websiteType);
  sections.push(components);

  // 5. Integrations
  const integrations = getIntegrations(ctx.integrations);
  if (integrations) {
    sections.push(`# Integrations\n${integrations}`);
  }

  // 6. Animation Guide
  const animations = getAnimationSuggestions(ctx.websiteType);
  sections.push(animations);

  return sections.join('\n\n');
}

export function buildSystemPrompt(ctx: GenerationContext): string {
  const context = buildFullContext(ctx);

  return `You are an expert full-stack engineer and senior designer building a production-ready website.

## Your Task
Build a ${ctx.websiteType} using ${ctx.techStack} with the ${ctx.designDirection} visual direction.

${context ? `## Loaded Context (Use This)\n${context}` : ''}

## Rules
1. **Use the loaded design direction** - Apply the exact OKLch palette and font stack provided
2. **Follow the skill guidelines** - Use the component patterns and best practices loaded above
3. **Start from the template** - Use ${ctx.template} as your base, customize with loaded context
4. **Add integrations** - Implement ${ctx.integrations.join(', ') || 'no additional integrations'} as specified
5. **Production quality** - No placeholder lorem ipsum, no generic gradients, no AI slop
6. **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation, color contrast
7. **Responsive** - Mobile-first, test at 320px, 768px, 1024px, 1440px
8. **Performance** - Lazy loading, optimized images, code splitting

## Output Format
- Create files using str_replace_editor tool
- Start with /App.jsx as entry point
- Use TailwindCSS for all styling
- Use @/ import aliases for local files
- Create components in /components/ directory

## User Request
${ctx.userPrompt}
`;
}
