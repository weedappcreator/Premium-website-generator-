import Link from "next/link";
import { Sparkles, Zap, Palette, Code, Image, Video, Layers, Rocket, Check, ArrowRight, Star, Globe, Cpu, Shield, Wand2, Boxes, CreditCard } from "lucide-react";

const features = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "AI-Powered Generation",
    description: "Describe your vision in natural language. Gemini, Claude, or any LLM builds production-ready React components in seconds."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "75+ Design Directions",
    description: "From Swiss Minimal to Cyberpunk Neon. Every direction ships with OKLch palettes, font stacks, and posture cues."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "On-Demand Templates",
    description: "18+ premium templates fetched from GitHub only when needed. Zero local bloat. Always latest version."
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: "AI Media Generation",
    description: "Generate hero images, product photos, and video backgrounds via Higgsfield. 100+ models, credit-optimized."
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Credit Optimizer",
    description: "Smart model selection picks the cheapest viable option. Soul 2.0 free images, DoP Lite free videos. Save 5-10x."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Multi-LLM Support",
    description: "Gemini 2.0 Flash, Claude Sonnet 4.5, local Ollama models, or 175+ via OpenCode. Switch anytime."
  }
];

const steps = [
  {
    number: "01",
    title: "Describe Your Vision",
    description: "Tell us what you need in plain English. A SaaS landing? An e-commerce store? A portfolio? We handle the rest."
  },
  {
    number: "02",
    title: "AI Builds in Real-Time",
    description: "Watch your site come alive component by component. Live preview, hot reload, instant feedback loop."
  },
  {
    number: "03",
    title: "Ship with Confidence",
    description: "Auto quality checks, accessibility audit, 5-dimensional critique. Your site ships polished, not prototype."
  }
];

const stats = [
  { value: "75+", label: "Design Directions" },
  { value: "18+", label: "Premium Templates" },
  { value: "100+", label: "AI Media Models" },
  { value: "4", label: "LLM Providers" },
  { value: "5x", label: "Credit Savings" },
  { value: "∞", label: "Possibilities" }
];

const testimonials = [
  {
    quote: "Generated our entire SaaS landing page in 3 minutes. The design direction system made it look like we hired an agency.",
    author: "Sarah Chen",
    role: "CTO, LaunchPad"
  },
  {
    quote: "The credit optimizer saved us hundreds. We got 200+ images and 20 videos for what would've cost 5x elsewhere.",
    author: "Marcus Rivera",
    role: "Founder, PixelForge"
  },
  {
    quote: "Switched from Claude to Gemini mid-project with zero friction. The multi-LLM support is a game changer.",
    author: "Aisha Patel",
    role: "Lead Dev, NeonStack"
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">UIGen</span>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#features" className="text-sm text-white/60 transition hover:text-white">Features</a>
              <a href="#how-it-works" className="text-sm text-white/60 transition hover:text-white">How It Works</a>
              <a href="#templates" className="text-sm text-white/60 transition hover:text-white">Templates</a>
              <a href="#pricing" className="text-sm text-white/60 transition hover:text-white">Pricing</a>
            </div>
            <Link
              href="/"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Start Building — Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 mb-8">
            <Zap className="h-4 w-4 text-amber-400" />
            <span>Powered by Gemini 2.0 Flash, Claude 4.5 & 175+ models</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            <span className="block">Build websites</span>
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              at the speed of thought
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 md:text-xl">
            Describe your vision. AI generates production-ready React components with live preview. 
            75+ design directions. AI media generation. Credit-optimized. Ship in minutes, not weeks.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 text-lg font-semibold transition hover:from-violet-500 hover:to-fuchsia-500"
            >
              Start Building Free
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold transition hover:bg-white/10"
            >
              See How It Works
            </a>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/40">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span className="text-sm">Free tier available</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span className="text-sm">Export anywhere</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Everything you need to ship</h2>
            <p className="mt-4 text-lg text-white/60">
              From concept to deployment. AI handles the heavy lifting while you focus on the vision.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-violet-400">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Three steps to launch</h2>
            <p className="mt-4 text-lg text-white/60">
              No design skills needed. No coding required. Just describe, watch, ship.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-7xl font-bold text-white/[0.03] absolute -top-6 -left-2">
                  {step.number}
                </div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-lg font-bold">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-white/60">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Showcase */}
      <section id="templates" className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Start from proven templates</h2>
            <p className="mt-4 text-lg text-white/60">
              18+ production-ready templates fetched on-demand from GitHub. Zero local storage. Always up to date.
            </p>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Next SaaS Starter", type: "SaaS", stack: "Next.js", stars: "1.6k" },
              { name: "Next Enterprise", type: "Enterprise", stack: "Next.js", stars: "2.1k" },
              { name: "Skateshop", type: "E-commerce", stack: "Next.js + shadcn", stars: "3.2k" },
              { name: "Shadcn Landing", type: "Landing Page", stack: "React + shadcn", stars: "1.8k" },
              { name: "Vercel Platforms", type: "Multi-tenant", stack: "Next.js", stars: "12k" },
              { name: "Landwind", type: "Landing Page", stack: "Tailwind", stars: "800" }
            ].map((template) => (
              <div
                key={template.name}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{template.name}</h3>
                    <p className="mt-1 text-sm text-white/50">{template.type}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">{template.stars}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-md bg-white/5 px-2 py-1 text-xs text-white/60">{template.stack}</span>
                  <span className="rounded-md bg-green-500/10 px-2 py-1 text-xs text-green-400">On-Demand</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Directions */}
      <section className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">75+ visual directions</h2>
            <p className="mt-4 text-lg text-white/60">
              Every direction ships with OKLch color palettes, font stacks, and design tokens. Pick one, ship it.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              { name: "Modern Minimal", color: "from-gray-700 to-gray-900" },
              { name: "Dark Mode Native", color: "from-gray-900 to-black" },
              { name: "Gradient Tech", color: "from-blue-500 to-purple-600" },
              { name: "Neobrutalism", color: "from-yellow-400 to-orange-500" },
              { name: "Glassmorphism", color: "from-cyan-400/30 to-blue-500/30" },
              { name: "Swiss International", color: "from-red-600 to-red-800" },
              { name: "Japanese Minimal", color: "from-stone-200 to-stone-400" },
              { name: "Cyberpunk Neon", color: "from-pink-500 to-cyan-500" },
              { name: "Art Deco Luxury", color: "from-amber-400 to-amber-700" },
              { name: "Organic Natural", color: "from-green-600 to-emerald-800" },
              { name: "Bento Grid", color: "from-violet-500 to-fuchsia-600" },
              { name: "Brutalist", color: "from-orange-500 to-red-600" }
            ].map((dir) => (
              <div
                key={dir.name}
                className={`rounded-xl bg-gradient-to-br ${dir.color} p-4 text-center transition hover:scale-105`}
              >
                <span className="text-sm font-medium">{dir.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-white/40">+ 63 more directions in the full catalog</p>
        </div>
      </section>

      {/* AI Media */}
      <section className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 mb-6">
                <Image className="h-4 w-4 text-violet-400" />
                <span>Higgsfield Integration</span>
              </div>
              <h2 className="text-3xl font-bold md:text-5xl">AI media generation</h2>
              <p className="mt-4 text-lg text-white/60">
                Generate hero images, product photos, and video backgrounds without leaving the builder. 
                100+ models across image and video, all credit-optimized.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: <Image className="h-5 w-5" />, title: "Images", desc: "Soul 2.0 (Free), Nano Banana (1¢), Z-Image (0.15¢)" },
                  { icon: <Video className="h-5 w-5" />, title: "Videos", desc: "DoP Lite (Free), Kling 2.6 (~10¢), Seedance Pro (Low)" },
                  { icon: <Wand2 className="h-5 w-5" />, title: "Smart Selection", desc: "Auto-picks cheapest model that delivers quality" }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 p-px">
                <div className="h-full rounded-2xl bg-[#0a0a0f] p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Boxes className="h-16 w-16 text-violet-400 mx-auto mb-4" />
                    <p className="text-white/60">AI-generated media appears here</p>
                    <p className="text-sm text-white/40 mt-2">Images, videos, and backgrounds generated on-demand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-5xl">
            Trusted by builders
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-8"
              >
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-white/80">"{t.quote}"</p>
                <div className="mt-6">
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-white/50">{t.role}</p>
                </div>
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
              <h2 className="text-3xl font-bold md:text-5xl">Start building today</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                No credit card. No setup. Just describe your vision and watch it come alive.
              </p>
              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-black transition hover:bg-white/90"
              >
                Launch UIGen
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
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#templates" className="transition hover:text-white">Templates</a>
              <a href="https://github.com/weedappcreator/website-generator" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">GitHub</a>
            </div>
            <p className="text-sm text-white/40">
              © 2026 UIGen. Built with AI, for builders.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
