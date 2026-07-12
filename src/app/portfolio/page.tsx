import Link from "next/link";
import { Sparkles, ArrowRight, ExternalLink, Globe, Zap, Palette, Code, Layers } from "lucide-react";

const portfolioSites = [
  {
    id: "uigen-landing",
    name: "UIGen Landing Page",
    description: "Marketing site for the AI-powered website generator. Showcases 75+ design directions, multi-LLM support, template system, and credit-optimized media generation.",
    url: "https://uigen-five.vercel.app/landing",
    tags: ["SaaS", "Dark Theme", "Gradient", "Multi-LLM"],
    features: ["Hero with gradient text", "Stats bar", "6 feature cards", "Template showcase", "Design direction grid", "Testimonials", "CTA sections"],
    tech: ["Next.js 15", "React 19", "Tailwind CSS", "Lucide Icons"],
    color: "from-violet-600 to-fuchsia-600",
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: "edouard-automation",
    name: "Edouard Automation",
    description: "Full-service digital agency landing page. Business automation, web design, marketing systems, AI content, and AI-powered ads. Integrated with Google Sheets for lead capture.",
    url: "https://uigen-five.vercel.app/edouard-automation",
    tags: ["Agency", "Dark Theme", "Blue/Cyan", "Lead Capture"],
    features: ["Hero with dual CTAs", "5 service cards", "5-step system flow", "Process timeline", "FAQ accordion", "Contact form → Google Sheets", "Instagram integration"],
    tech: ["Next.js 15", "React 19", "Tailwind CSS", "Google Sheets API"],
    color: "from-blue-600 to-cyan-600",
    icon: <Globe className="w-6 h-6" />
  }
];

const capabilities = [
  { icon: <Palette className="w-5 h-5" />, title: "75+ Design Directions", desc: "From Swiss Minimal to Cyberpunk Neon. Each with OKLch palettes, fonts, and layout rules." },
  { icon: <Code className="w-5 h-5" />, title: "58 Specialized Skills", desc: "Landing pages, SaaS, e-commerce, portfolios, dashboards, agencies, and more." },
  { icon: <Layers className="w-5 h-5" />, title: "On-Demand Templates", desc: "18+ premium templates fetched from GitHub. Zero local storage. Always latest." },
  { icon: <Zap className="w-5 h-5" />, title: "Multi-LLM Engine", desc: "Gemini 2.0, Claude 4.5, Ollama, or 175+ via OpenCode. Switch anytime." },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">UIGen</span>
            </Link>
            <div className="flex items-center gap-6">
              <a href="#work" className="text-sm text-white/60 transition hover:text-white">Work</a>
              <a href="#capabilities" className="text-sm text-white/60 transition hover:text-white">Capabilities</a>
              <Link href="/generate" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90">
                Build Your Site
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 mb-8">
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span>AI-Powered Website Generation</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            <span className="block">Websites built by</span>
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              intelligent systems
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 md:text-xl">
            Not just another AI wrapper. A complete generation pipeline with 75+ design directions, 
            58 skills, on-demand templates, and multi-LLM support.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl mb-16">Recent Work</h2>
          <div className="space-y-16">
            {portfolioSites.map((site, index) => (
              <div key={site.id} className={`grid gap-8 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                {/* Preview */}
                <div className={`rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`h-64 md:h-80 bg-gradient-to-br ${site.color} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 mx-auto mb-4">
                          {site.icon}
                        </div>
                        <p className="text-white/80 font-semibold">{site.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {site.tags.map(tag => (
                        <span key={tag} className="rounded bg-white/5 px-2 py-1 text-xs text-white/60">{tag}</span>
                      ))}
                    </div>
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300">
                      Live <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl font-bold mb-3">{site.name}</h3>
                  <p className="text-white/60 mb-6">{site.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/40 mb-3 uppercase tracking-wider">Features</h4>
                    <ul className="space-y-2">
                      {site.features.map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                          <span className="text-violet-400 mt-1">•</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/40 mb-3 uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex gap-2 flex-wrap">
                      {site.tech.map(t => (
                        <span key={t} className="rounded bg-white/5 px-3 py-1.5 text-xs text-white/60">{t}</span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
                  >
                    Visit Site <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold md:text-5xl">The System Behind It</h2>
            <p className="mt-4 text-lg text-white/60">
              The LLM is just the power source. The intelligence comes from the loaded context.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(cap => (
              <div key={cap.title} className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 mb-4">
                  {cap.icon}
                </div>
                <h3 className="font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-white/60">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-12 md:p-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
            <div className="relative text-center">
              <h2 className="text-3xl font-bold md:text-5xl">Build Your Next Site</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                Pick your design direction, choose a template, add integrations, and generate.
              </p>
              <Link
                href="/generate"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-black transition hover:bg-white/90"
              >
                Start Building
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">UIGen</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-white/50">
              <a href="#work" className="transition hover:text-white">Work</a>
              <a href="#capabilities" className="transition hover:text-white">Capabilities</a>
              <Link href="/generate" className="transition hover:text-white">Generate</Link>
              <a href="https://github.com/weedappcreator/website-generator" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">GitHub</a>
            </div>
            <p className="text-sm text-white/40">© 2026 UIGen. Built with AI, for builders.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
