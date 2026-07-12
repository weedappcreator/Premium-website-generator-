'use client';

import Link from "next/link";
import { Sparkles, ArrowRight, ExternalLink, Globe, Zap, Palette, Code, Layers, Rocket, TrendingUp, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

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

const stats = [
  { label: "Design Systems", value: "75+" },
  { label: "AI Skills", value: "58" },
  { label: "Templates", value: "18+" },
  { label: "LLM Options", value: "200+" },
];

const testimonials = [
  { quote: "Generated a production-ready site in minutes. Incredible.", author: "Designer", role: "SaaS Founder" },
  { quote: "The design quality is unmatched. This is the future of web design.", author: "Alex Chen", role: "Design Lead" },
  { quote: "Finally, an AI tool that actually understands design systems.", author: "Jordan Park", role: "Frontend Engineer" },
];

export default function PortfolioPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#1a0f2e] to-[#0a0a0f] text-white overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

        .font-display { font-family: 'Syne', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.3); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.6); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-glow {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 6rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glass-card-hover:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(168, 85, 247, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(168, 85, 247, 0.15);
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(135deg, #0a0a0f, #1a0f2e) border-box;
          border: 1px solid transparent;
          background-clip: padding-box;
        }

        .cta-button {
          position: relative;
          overflow: hidden;
          background: white;
          color: black;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .stat-card {
          counter-increment: stat;
        }

        .grid-glow {
          position: relative;
        }

        .grid-glow::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.1), transparent);
          pointer-events: none;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .scroll-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-float opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: '1s' }} />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 group-hover:animate-glow transition-all">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold font-display">UIGen</span>
            </Link>
            <div className="flex items-center gap-8">
              <a href="#work" className="text-sm text-white/70 transition hover:text-white">Work</a>
              <a href="#capabilities" className="text-sm text-white/70 transition hover:text-white">Capabilities</a>
              <Link href="/generate" className="px-5 py-2 text-sm font-semibold bg-white text-black rounded-lg transition hover:bg-white/90 hover:shadow-lg hover:shadow-white/20">
                Build Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 mb-8 text-sm text-white/80 border-violet-500/30 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Rocket className="h-4 w-4 text-violet-400" />
              <span>AI-Powered Generation at Scale</span>
            </div>

            <h1 className="hero-title font-display font-black bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Generate Production-Ready Sites
            </h1>

            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 animate-fade-in-up font-body" style={{ animationDelay: '0.3s' }}>
              Not another AI wrapper. A complete system with 75+ design directions, 58 specialized skills, on-demand templates, and multi-LLM support. Watch as your vision becomes code in seconds.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-4 rounded-xl border-violet-500/20 group hover:border-violet-500/50 transition">
                  <div className="text-2xl md:text-3xl font-bold font-display bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Link href="/generate" className="cta-button px-8 py-4 rounded-xl font-semibold transition hover:shadow-2xl hover:shadow-white/10">
                Start Generating <ArrowRight className="h-5 w-5 ml-2 inline" />
              </Link>
              <button className="px-8 py-4 rounded-xl glass-card border-white/20 font-semibold transition hover:border-violet-500/50 hover:bg-white/10">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="relative py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="mb-20">
            <span className="text-sm text-violet-400 font-semibold uppercase tracking-widest">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-bold font-display mt-3 mb-6">Works That Convert</h2>
            <p className="text-lg text-white/60 max-w-2xl">Real websites, real results. Each generated with our system to showcase different design directions and industry verticals.</p>
          </div>

          <div className="space-y-24">
            {portfolioSites.map((site, index) => (
              <div key={site.id} className={`grid gap-12 lg:grid-cols-2 lg:items-center scroll-reveal ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                {/* Preview Card */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
                    <div className={`relative glass-card-hover rounded-2xl overflow-hidden border border-white/10`}>
                      <div className={`h-80 bg-gradient-to-br ${site.color} relative flex items-center justify-center overflow-hidden`}>
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAzMCAwIEwgMCAwIEwgMCAzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                        <div className="text-center relative z-10">
                          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur mx-auto mb-4 animate-float">
                            {site.icon}
                          </div>
                          <p className="text-white font-bold text-xl">{site.name}</p>
                        </div>
                      </div>
                      <div className="p-6 border-t border-white/5">
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 flex-wrap">
                            {site.tags.map(tag => (
                              <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60 border border-white/10">{tag}</span>
                            ))}
                          </div>
                          <a href={site.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition group/link">
                            Live <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">{site.name}</h3>
                  <p className="text-lg text-white/70 mb-8 leading-relaxed">{site.description}</p>

                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {site.features.map(f => (
                        <li key={f} className="flex items-start gap-3 text-white/70">
                          <span className="text-violet-400 mt-1.5 block w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Built With</h4>
                    <div className="flex gap-2 flex-wrap">
                      {site.tech.map(t => (
                        <span key={t} className="rounded-lg glass-card px-3 py-1.5 text-xs text-white/70 border-white/10">{t}</span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold transition hover:shadow-2xl hover:shadow-white/20 hover:bg-white/90"
                  >
                    View Live Site <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-16 text-center">Loved by Builders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border-white/10 hover:border-violet-500/30 transition">
                <p className="text-white/80 mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-white/60">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="relative py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20">
            <span className="text-sm text-violet-400 font-semibold uppercase tracking-widest">Technology</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-3 mb-6">Built on Intelligence</h2>
            <p className="text-lg text-white/60 max-w-2xl">Every component, every decision backed by sophisticated systems. The LLM is the power source. We provide the intelligence.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <div key={cap.title} className="glass-card p-8 rounded-2xl border-white/10 hover:border-violet-500/30 transition group" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-violet-400 mb-4 group-hover:from-violet-500/30 group-hover:to-fuchsia-500/30 transition">
                  {cap.icon}
                </div>
                <h3 className="font-bold mb-3 text-white">{cap.title}</h3>
                <p className="text-sm text-white/60">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/80 via-fuchsia-600/80 to-pink-600/80 blur-2xl" />
            <div className="relative glass-card border-white/20 p-12 md:p-20 text-center">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 text-sm text-white/90">
                <Lightbulb className="h-4 w-4 text-yellow-400" />
                Ready to build?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Create Your Next Masterpiece</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Choose from 75+ design directions, select a template, configure integrations, and let AI generate your production-ready site in minutes.
              </p>
              <Link
                href="/generate"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white text-black font-bold text-lg transition hover:shadow-2xl hover:shadow-white/30 hover:bg-white/90 transform hover:-translate-y-1"
              >
                Start Building Now <Rocket className="h-5 w-5" />
              </Link>
              <p className="text-sm text-white/60 mt-6">No credit card required. Free tier available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold font-display">UIGen</span>
              </div>
              <p className="text-sm text-white/60">AI-powered website generation for the modern builder.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-sm text-white/60">
                <a href="/generate" className="hover:text-white transition">Generate</a>
                <a href="#work" className="block hover:text-white transition">Portfolio</a>
                <a href="#capabilities" className="block hover:text-white transition">Features</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">More</h4>
              <div className="space-y-2 text-sm text-white/60">
                <a href="https://github.com/weedappcreator/website-generator" target="_blank" rel="noopener noreferrer" className="hover:text-white transition block">GitHub</a>
                <a href="/" className="hover:text-white transition block">Home</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-white/40">© 2026 UIGen. Built with AI, for builders.</p>
            <div className="flex gap-6 text-sm text-white/50 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
