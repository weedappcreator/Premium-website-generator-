"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowRight, Check, Sparkles, Zap, Globe, BarChart3, Palette,
  Code, Layers, Image, Video, Shield, Cpu, Loader2, ChevronLeft,
  Terminal, Play, Box, Mail, Share2, Search,
} from "lucide-react";

const DESIGN_DIRECTIONS = [
  { id: "modern-minimal", name: "Modern Minimal", bestFor: "SaaS, dev tools, startups", colors: ["#1a1a2e", "#16213e", "#0f3460", "#e94560"] },
  { id: "dark-mode-native", name: "Dark Mode Native", bestFor: "Dev tools, crypto, creative", colors: ["#0a0a0f", "#1a1a2e", "#2d2d44", "#6366f1"] },
  { id: "gradient-tech", name: "Gradient Tech", bestFor: "SaaS, AI, fintech", colors: ["#667eea", "#764ba2", "#f093fb", "#f5576c"] },
  { id: "editorial-monocle", name: "Editorial Monocle", bestFor: "Publishing, luxury, culture", colors: ["#faf9f6", "#f5f5f0", "#2c2c2c", "#8b4513"] },
  { id: "glassmorphism", name: "Glassmorphism", bestFor: "Consumer apps, premium SaaS", colors: ["#667eea", "#764ba2", "#ffffff33", "#ffffff11"] },
  { id: "neobrutalism", name: "Neobrutalism", bestFor: "Startups, creator tools", colors: ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec"] },
  { id: "swiss-international", name: "Swiss International", bestFor: "Architecture, museums, design", colors: ["#ffffff", "#e63946", "#1d3557", "#457b9d"] },
  { id: "japanese-minimal", name: "Japanese Minimal", bestFor: "Wellness, mindfulness, artisan", colors: ["#f5f5f0", "#e8e4d9", "#8b7355", "#4a4a4a"] },
  { id: "cyberpunk-neon", name: "Cyberpunk Neon", bestFor: "Gaming, crypto, AI", colors: ["#0a0a0f", "#ff006e", "#00f5ff", "#ffbe0b"] },
  { id: "art-deco-luxury", name: "Art Deco Luxury", bestFor: "Jewelry, hotels, fashion", colors: ["#1a1a2e", "#c9a227", "#f5f5dc", "#8b6914"] },
  { id: "organic-natural", name: "Organic Natural", bestFor: "Sustainable, wellness, food", colors: ["#f5f5dc", "#8fbc8f", "#556b2f", "#2f4f4f"] },
  { id: "bento-grid", name: "Bento Grid", bestFor: "Product showcases, Apple-style", colors: ["#fafafa", "#f0f0f0", "#1a1a1a", "#6366f1"] },
];

const WEBSITE_TYPES = [
  { id: "landing-page", name: "Landing Page", icon: Globe, desc: "High-converting single page" },
  { id: "saas", name: "SaaS Product", icon: Cpu, desc: "Software marketing site" },
  { id: "ecommerce", name: "E-commerce", icon: BarChart3, desc: "Online store" },
  { id: "portfolio", name: "Portfolio", icon: Palette, desc: "Personal/work showcase" },
  { id: "blog", name: "Blog/Content", icon: Code, desc: "Content-focused site" },
  { id: "dashboard", name: "Dashboard", icon: Layers, desc: "Admin/analytics panel" },
  { id: "agency", name: "Agency", icon: Sparkles, desc: "Agency/consulting site" },
];

const TEMPLATES = [
  { id: "next-saas-starter", name: "Next SaaS Starter", type: "saas", stack: "Next.js", stars: "1.6k" },
  { id: "next-enterprise", name: "Next Enterprise", type: "saas", stack: "Next.js", stars: "2.1k" },
  { id: "skateshop", name: "Skateshop", type: "ecommerce", stack: "Next.js + shadcn", stars: "3.2k" },
  { id: "shadcn-landing-page", name: "Shadcn Landing", type: "landing-page", stack: "React + shadcn", stars: "1.8k" },
  { id: "vercel-platforms", name: "Vercel Platforms", type: "saas", stack: "Next.js", stars: "12k" },
  { id: "landwind", name: "Landwind", type: "landing-page", stack: "Tailwind", stars: "800" },
  { id: "open-react-template", name: "Open React", type: "landing-page", stack: "React", stars: "500" },
  { id: "next-js-boilerplate", name: "Next.js Boilerplate", type: "saas", stack: "Next.js", stars: "2.5k" },
];

const TECH_STACKS = [
  { id: "nextjs", name: "Next.js 15", desc: "Full-stack React framework" },
  { id: "react", name: "React + Vite", desc: "Fast SPA development" },
  { id: "astro", name: "Astro", desc: "Content-focused, fast" },
  { id: "remix", name: "Remix", desc: "Full-stack web framework" },
];

const INTEGRATIONS = [
  { id: "auth", name: "Authentication", icon: Shield, desc: "Clerk, Supabase, NextAuth" },
  { id: "payment", name: "Payments", icon: BarChart3, desc: "Stripe, LemonSqueezy" },
  { id: "analytics", name: "Analytics", icon: Search, desc: "GA4, Plausible, PostHog" },
  { id: "cms", name: "CMS", icon: Code, desc: "Sanity, Contentful, MDX" },
  { id: "email", name: "Email", icon: Mail, desc: "Resend, SendGrid" },
  { id: "seo", name: "SEO", icon: Sparkles, desc: "Meta tags, schema, sitemap" },
  { id: "motion", name: "Animations", icon: Zap, desc: "Motion.dev, Framer" },
  { id: "social", name: "Social", icon: Share2, desc: "Sharing, feeds, OG tags" },
];

const STEPS = [
  { num: 1, label: "Direction", short: "Style" },
  { num: 2, label: "Type", short: "Build" },
  { num: 3, label: "Foundation", short: "Stack" },
  { num: 4, label: "Integrations", short: "Features" },
  { num: 5, label: "Generate", short: "Ship" },
];

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-0">
      {STEPS.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={`relative flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-all duration-500 ${
                i + 1 < current
                  ? "bg-amber-500 text-black"
                  : i + 1 === current
                  ? "bg-amber-500 text-black animate-pulse-glow"
                  : "bg-white/5 text-white/30"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {i + 1 < current ? <Check className="h-4 w-4" /> : s.num}
            </div>
            <span
              className={`text-[10px] uppercase tracking-widest transition-colors duration-300 hidden lg:block ${
                i + 1 <= current ? "text-white/70" : "text-white/20"
              }`}
            >
              {s.short}
            </span>
          </div>
          {i < total - 1 && (
            <div className="mx-2 mb-5 lg:mb-4 h-px w-8 lg:w-12 bg-white/10">
              <div
                className="h-full bg-amber-500 transition-all duration-700 ease-out"
                style={{ width: i + 1 < current ? "100%" : "0%" }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function DesignCard({ dir, selected, index, onSelect }: { dir: typeof DESIGN_DIRECTIONS[0]; selected: boolean; index: number; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className={`group relative overflow-hidden rounded-lg border p-4 text-left transition-all duration-300 ${
        selected
          ? "border-amber-500/60 bg-amber-500/5"
          : "border-white/[0.06] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]"
      }`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex gap-1.5 mb-3">
        {dir.colors.map((c, i) => (
          <div
            key={i}
            className="h-7 flex-1 rounded-sm transition-transform duration-300 group-hover:scale-y-110"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <h3 className="font-['DM_Sans'] text-sm font-semibold text-white/90">{dir.name}</h3>
      <p className="text-[11px] text-white/35 mt-0.5 leading-relaxed">{dir.bestFor}</p>
      {selected && (
        <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center">
          <Check className="h-3 w-3 text-black" />
        </div>
      )}
      <div className={`absolute inset-0 border-2 rounded-lg transition-opacity duration-300 pointer-events-none ${selected ? "border-amber-500/30 opacity-100" : "opacity-0"}`} />
    </button>
  );
}

function TypeCard({ type, selected, index, onSelect }: { type: typeof WEBSITE_TYPES[0]; selected: boolean; index: number; onSelect: () => void }) {
  const Icon = type.icon;
  return (
    <button
      onClick={onSelect}
      className={`group relative overflow-hidden rounded-lg border p-5 text-left transition-all duration-300 ${
        selected
          ? "border-amber-500/60 bg-amber-500/5"
          : "border-white/[0.06] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]"
      }`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className={`flex h-10 w-10 items-center justify-center rounded-lg mb-3 transition-colors duration-300 ${
        selected ? "bg-amber-500/15 text-amber-400" : "bg-white/5 text-white/40 group-hover:text-white/60"
      }`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-['DM_Sans'] text-sm font-semibold text-white/90">{type.name}</h3>
      <p className="text-[11px] text-white/35 mt-0.5">{type.desc}</p>
      {selected && (
        <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center">
          <Check className="h-3 w-3 text-black" />
        </div>
      )}
    </button>
  );
}

function StackCard({ stack, selected, onSelect }: { stack: typeof TECH_STACKS[0]; selected: boolean; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className={`rounded-lg border p-4 text-left transition-all duration-200 ${
        selected
          ? "border-amber-500/60 bg-amber-500/5"
          : "border-white/[0.06] bg-white/[0.01] hover:border-white/10"
      }`}
    >
      <h3 className="font-['DM_Sans'] text-sm font-semibold text-white/90">{stack.name}</h3>
      <p className="text-[11px] text-white/35 mt-0.5">{stack.desc}</p>
    </button>
  );
}

function TemplateCard({ template, selected, index, onSelect }: { template: typeof TEMPLATES[0]; selected: boolean; index: number; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className={`group relative overflow-hidden rounded-lg border p-5 text-left transition-all duration-300 ${
        selected
          ? "border-amber-500/60 bg-amber-500/5"
          : "border-white/[0.06] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]"
      }`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-['DM_Sans'] text-sm font-semibold text-white/90">{template.name}</h3>
        <span className="text-[10px] text-amber-400/70 font-mono">{template.stars}</span>
      </div>
      <div className="flex gap-2">
        <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-white/50 font-mono">{template.stack}</span>
        <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400/70">Ready</span>
      </div>
      {selected && (
        <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center">
          <Check className="h-3 w-3 text-black" />
        </div>
      )}
    </button>
  );
}

function IntegrationCard({ int, checked, index, onToggle }: { int: typeof INTEGRATIONS[0]; checked: boolean; index: number; onToggle: () => void }) {
  const Icon = int.icon;
  return (
    <button
      onClick={onToggle}
      className={`group relative rounded-lg border p-4 text-left transition-all duration-200 ${
        checked
          ? "border-amber-500/60 bg-amber-500/5"
          : "border-white/[0.06] bg-white/[0.01] hover:border-white/10"
      }`}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="flex items-start justify-between mb-2">
        <div className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
          checked ? "bg-amber-500/15 text-amber-400" : "bg-white/5 text-white/35"
        }`}>
          <Icon className="h-4 w-4" />
        </div>
        <div className={`h-5 w-5 rounded border transition-all duration-200 flex items-center justify-center ${
          checked ? "border-amber-500 bg-amber-500" : "border-white/10"
        }`}>
          {checked && <Check className="h-3 w-3 text-black" />}
        </div>
      </div>
      <h3 className="font-['DM_Sans'] text-xs font-semibold text-white/85">{int.name}</h3>
      <p className="text-[10px] text-white/30 mt-0.5">{int.desc}</p>
    </button>
  );
}

export default function GeneratePage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState("modern-minimal");
  const [websiteType, setWebsiteType] = useState("landing-page");
  const [techStack, setTechStack] = useState("nextjs");
  const [template, setTemplate] = useState("next-saas-starter");
  const [integrations, setIntegrations] = useState<string[]>([]);
  const [userPrompt, setUserPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [output, setOutput] = useState("");
  const [generationComplete, setGenerationComplete] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const goToStep = useCallback((nextStep: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(nextStep);
      setTransitioning(false);
    }, 200);
  }, []);

  const toggleIntegration = useCallback((id: string) => {
    setIntegrations(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }, []);

  const handleGenerate = async () => {
    setGenerating(true);
    setOutput("");
    setGenerationComplete(false);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: userPrompt }],
          files: {},
          context: {
            designDirection: direction,
            websiteType,
            techStack,
            template,
            integrations,
            userPrompt,
          },
        }),
      });

      if (!res.ok || !res.body) {
        setOutput("Error: Failed to connect to generation engine.");
        setGenerating(false);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("0:")) {
            try {
              const raw = line.slice(2);
              const text = JSON.parse(raw);
              fullText += text;
              setOutput(fullText);
            } catch {
              // Skip malformed lines
            }
          }
        }
      }
      setGenerationComplete(true);
    } catch (err: any) {
      setOutput(`Error: ${err.message}`);
    }

    setGenerating(false);
  };

  const filteredTemplates = TEMPLATES.filter(
    t => t.type === websiteType || t.type === "landing-page"
  );

  return (
    <div className="min-h-screen bg-[#0c0c0d] text-white selection:bg-amber-500/30">
      {/* Grain overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.025] mix-blend-overlay animate-grain"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />

      {/* Grid background */}
      <div className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 z-0 h-[600px] w-[800px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse, #f59e0b 0%, transparent 70%)" }}
      />

      {/* Header */}
      <header className="relative z-40 border-b border-white/[0.06] bg-[#0c0c0d]/80 backdrop-blur-xl sticky top-0">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-500">
              <Box className="h-4 w-4 text-black" />
            </div>
            <div>
              <span className="text-sm font-semibold tracking-tight font-['DM_Sans']">UIGen</span>
              <span className="text-xs text-white/30 ml-2 font-['DM_Sans']">Website Generator</span>
            </div>
          </div>
          <StepIndicator current={step} total={5} />
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:py-14">
        {/* Step 1: Design Direction */}
        {step === 1 && (
          <div className={`transition-all duration-200 ${transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
            <div className="mb-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-amber-500/70 font-['DM_Sans'] mb-3">Step 1 of 5</p>
              <h1 className="font-['Instrument_Serif'] text-4xl lg:text-5xl text-white/95 leading-tight">
                Choose your visual direction
              </h1>
              <p className="text-white/40 mt-3 text-sm max-w-lg font-['DM_Sans'] leading-relaxed">
                Each direction ships with a curated palette, typography system, and layout conventions. Pick the one that feels closest to your brand.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {DESIGN_DIRECTIONS.map((dir, i) => (
                <DesignCard
                  key={dir.id}
                  dir={dir}
                  selected={direction === dir.id}
                  index={i}
                  onSelect={() => setDirection(dir.id)}
                />
              ))}
            </div>
            <div className="mt-10 flex justify-end">
              <button
                onClick={() => goToStep(2)}
                className="group flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
              >
                Continue
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Website Type */}
        {step === 2 && (
          <div className={`transition-all duration-200 ${transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
            <button
              onClick={() => goToStep(1)}
              className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors mb-8 font-['DM_Sans']"
            >
              <ChevronLeft className="h-3.5 w-3.5" /> Back to directions
            </button>
            <div className="mb-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-amber-500/70 font-['DM_Sans'] mb-3">Step 2 of 5</p>
              <h1 className="font-['Instrument_Serif'] text-4xl lg:text-5xl text-white/95 leading-tight">
                What are you building?
              </h1>
              <p className="text-white/40 mt-3 text-sm max-w-lg font-['DM_Sans'] leading-relaxed">
                This determines the component structure, navigation patterns, and content hierarchy the AI will generate.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {WEBSITE_TYPES.map((type, i) => (
                <TypeCard
                  key={type.id}
                  type={type}
                  selected={websiteType === type.id}
                  index={i}
                  onSelect={() => setWebsiteType(type.id)}
                />
              ))}
            </div>
            <div className="mt-10 flex justify-between items-center">
              <div className="text-xs text-white/25 font-['DM_Sans']">
                Selected: <span className="text-white/60">{WEBSITE_TYPES.find(t => t.id === websiteType)?.name}</span>
              </div>
              <button
                onClick={() => goToStep(3)}
                className="group flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
              >
                Continue
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Tech Stack + Template */}
        {step === 3 && (
          <div className={`transition-all duration-200 ${transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
            <button
              onClick={() => goToStep(2)}
              className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors mb-8 font-['DM_Sans']"
            >
              <ChevronLeft className="h-3.5 w-3.5" /> Back to types
            </button>
            <div className="mb-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-amber-500/70 font-['DM_Sans'] mb-3">Step 3 of 5</p>
              <h1 className="font-['Instrument_Serif'] text-4xl lg:text-5xl text-white/95 leading-tight">
                Pick your foundation
              </h1>
              <p className="text-white/40 mt-3 text-sm max-w-lg font-['DM_Sans'] leading-relaxed">
                Start from a proven template. The AI will customize it with your brand, content, and design direction.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-['DM_Sans'] mb-4">Tech Stack</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TECH_STACKS.map(stack => (
                  <StackCard key={stack.id} stack={stack} selected={techStack === stack.id} onSelect={() => setTechStack(stack.id)} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-['DM_Sans'] mb-4">Templates</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredTemplates.map((t, i) => (
                  <TemplateCard key={t.id} template={t} selected={template === t.id} index={i} onSelect={() => setTemplate(t.id)} />
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-between items-center">
              <div className="text-xs text-white/25 font-['DM_Sans']">
                {TECH_STACKS.find(s => s.id === techStack)?.name} &middot; <span className="text-white/60">{TEMPLATES.find(t => t.id === template)?.name}</span>
              </div>
              <button
                onClick={() => goToStep(4)}
                className="group flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
              >
                Continue
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Integrations */}
        {step === 4 && (
          <div className={`transition-all duration-200 ${transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
            <button
              onClick={() => goToStep(3)}
              className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors mb-8 font-['DM_Sans']"
            >
              <ChevronLeft className="h-3.5 w-3.5" /> Back to templates
            </button>
            <div className="mb-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-amber-500/70 font-['DM_Sans'] mb-3">Step 4 of 5</p>
              <h1 className="font-['Instrument_Serif'] text-4xl lg:text-5xl text-white/95 leading-tight">
                Add integrations
              </h1>
              <p className="text-white/40 mt-3 text-sm max-w-lg font-['DM_Sans'] leading-relaxed">
                Select the features you need. These will be pre-configured and wired up in your generated site.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {INTEGRATIONS.map((int, i) => (
                <IntegrationCard
                  key={int.id}
                  int={int}
                  checked={integrations.includes(int.id)}
                  index={i}
                  onToggle={() => toggleIntegration(int.id)}
                />
              ))}
            </div>
            <div className="mt-10 flex justify-between items-center">
              <div className="text-xs text-white/25 font-['DM_Sans']">
                {integrations.length > 0 ? (
                  <span>{integrations.length} selected: <span className="text-white/60">{integrations.join(", ")}</span></span>
                ) : (
                  <span>No integrations selected</span>
                )}
              </div>
              <button
                onClick={() => goToStep(5)}
                className="group flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
              >
                Continue
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Generate */}
        {step === 5 && (
          <div className={`transition-all duration-200 ${transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
            <button
              onClick={() => goToStep(4)}
              className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors mb-8 font-['DM_Sans']"
            >
              <ChevronLeft className="h-3.5 w-3.5" /> Back to integrations
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left: Prompt + Config */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-amber-500/70 font-['DM_Sans'] mb-3">Step 5 of 5</p>
                  <h1 className="font-['Instrument_Serif'] text-4xl lg:text-5xl text-white/95 leading-tight">
                    Describe your vision
                  </h1>
                  <p className="text-white/40 mt-3 text-sm font-['DM_Sans'] leading-relaxed">
                    Tell the AI what you want. It already has all the context from your choices above.
                  </p>
                </div>

                {/* Configuration Summary */}
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-5 mb-6">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-['DM_Sans'] mb-4">Configuration</h3>
                  <div className="space-y-2.5">
                    {[
                      { label: "Direction", value: DESIGN_DIRECTIONS.find(d => d.id === direction)?.name },
                      { label: "Type", value: WEBSITE_TYPES.find(t => t.id === websiteType)?.name },
                      { label: "Stack", value: TECH_STACKS.find(s => s.id === techStack)?.name },
                      { label: "Template", value: TEMPLATES.find(t => t.id === template)?.name },
                    ].map(item => (
                      <div key={item.label} className="flex items-baseline justify-between">
                        <span className="text-[11px] text-white/30 font-['DM_Sans']">{item.label}</span>
                        <span className="text-[11px] text-white/70 font-['DM_Sans'] text-right">{item.value}</span>
                      </div>
                    ))}
                    <div className="flex items-baseline justify-between pt-1 border-t border-white/[0.04]">
                      <span className="text-[11px] text-white/30 font-['DM_Sans']">Integrations</span>
                      <span className="text-[11px] text-white/70 font-['DM_Sans'] text-right">
                        {integrations.length ? integrations.join(", ") : "None"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Prompt Input */}
                <textarea
                  value={userPrompt}
                  onChange={e => setUserPrompt(e.target.value)}
                  placeholder="Describe your website... e.g., 'A modern SaaS landing page for an AI analytics tool. Dark theme with blue accents. Hero section with dashboard preview. Pricing table with 3 tiers.'"
                  rows={6}
                  className="w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-white/20 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/20 resize-none font-['DM_Sans'] leading-relaxed transition-all duration-200"
                />

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={generating || !userPrompt.trim()}
                  className="mt-4 w-full flex items-center justify-center gap-2.5 rounded-lg bg-amber-500 px-8 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none font-['DM_Sans']"
                >
                  {generating ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Generate Website
                    </>
                  )}
                </button>
              </div>

              {/* Right: Terminal Output */}
              <div className="lg:col-span-3">
                <div className="rounded-lg border border-white/[0.06] bg-[#080809] overflow-hidden h-full min-h-[500px] flex flex-col">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-3.5 w-3.5 text-white/30" />
                      <span className="text-[11px] text-white/30 font-mono uppercase tracking-wider">Output</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-white/10" />
                      <div className="h-2 w-2 rounded-full bg-white/10" />
                      <div className={`h-2 w-2 rounded-full transition-colors ${generationComplete ? "bg-emerald-500" : generating ? "bg-amber-500 animate-pulse" : "bg-white/10"}`} />
                    </div>
                  </div>

                  {/* Terminal Body */}
                  <div
                    ref={outputRef}
                    className="flex-1 p-4 font-mono text-[13px] leading-relaxed overflow-y-auto"
                  >
                    {!output && !generating && (
                      <div className="flex flex-col items-center justify-center h-full text-center py-20">
                        <Terminal className="h-8 w-8 text-white/10 mb-4" />
                        <p className="text-white/20 text-sm font-['DM_Sans']">Generation output will appear here</p>
                        <p className="text-white/10 text-xs mt-1 font-['DM_Sans']">Describe your vision and hit generate</p>
                      </div>
                    )}

                    {output && (
                      <div className="text-white/75 whitespace-pre-wrap">
                        {output}
                        {generating && <span className="animate-cursor-blink text-amber-500">▊</span>}
                      </div>
                    )}

                    {generating && !output && (
                      <div className="text-white/40">
                        <span className="text-amber-500">$</span> Initializing generation engine...
                        <span className="animate-cursor-blink text-amber-500 ml-0.5">▊</span>
                      </div>
                    )}

                    {generationComplete && (
                      <div className="mt-4 pt-4 border-t border-white/[0.06]">
                        <div className="flex items-center gap-2 text-emerald-400">
                          <Check className="h-4 w-4" />
                          <span className="text-sm font-['DM_Sans']">Generation complete</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
