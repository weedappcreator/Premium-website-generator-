"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Globe, BarChart3, Sparkles, Target, ArrowRight, CheckCircle2, Clock, Users, TrendingUp, MessageSquare, Mail, Phone, Building2, DollarSign, ChevronDown, Instagram } from "lucide-react";

const services = [
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Business Automation",
    shortDesc: "We automate repetitive tasks so your team can focus on sales, service, and growth.",
    benefit: "Reduce manual work, eliminate missed follow-ups, and create a business that runs smoother every day.",
    features: ["Workflow automation", "CRM automation", "Lead capture systems", "Email & SMS follow-ups", "Appointment booking", "Client onboarding", "Sales pipeline automation", "Zapier, Make, GoHighLevel, HubSpot integrations"]
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Website Design & Development",
    shortDesc: "We build clean, professional, conversion-focused websites designed to turn visitors into customers.",
    benefit: "Your website should not just look good. It should explain your value, build trust, and generate leads.",
    features: ["Landing pages", "Business websites", "Service & portfolio sites", "Sales & funnel pages", "Mobile-responsive design", "SEO-ready structure", "Conversion-focused CTAs", "Website tracking setup"]
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Digital Marketing Systems",
    shortDesc: "We create marketing systems that help your business attract, nurture, and convert potential customers.",
    benefit: "We help you move from random marketing activity to structured campaigns that support real business growth.",
    features: ["Marketing strategy", "Lead generation funnels", "Email marketing", "SMS campaigns", "Social media planning", "CRM setup", "Retargeting strategy", "Customer journey mapping"]
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "AI Content Creation",
    shortDesc: "We help businesses create faster, better, and more consistent content using AI-powered workflows.",
    benefit: "Produce more content in less time while keeping your brand message clear, professional, and consistent.",
    features: ["Blog content", "Social media posts", "Website copy", "Email campaigns", "Video scripts", "Ad copy", "Content calendars", "AI content workflows"]
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "AI-Powered Ads",
    shortDesc: "We create and optimize ad campaigns using AI-assisted research, copywriting, targeting, and testing.",
    benefit: "Launch smarter campaigns with stronger messaging, faster testing, and better data-driven decisions.",
    features: ["Facebook & Instagram Ads", "Google Ads", "TikTok Ads", "AI-generated ad copy", "Audience research", "Creative testing", "Landing page alignment", "Campaign analytics"]
  }
];

const systemSteps = [
  { number: "01", title: "Attract", desc: "Ads, content, and marketing campaigns bring qualified visitors to your business." },
  { number: "02", title: "Convert", desc: "Landing pages and websites turn visitors into leads with clear value propositions." },
  { number: "03", title: "Follow Up", desc: "Automation nurtures prospects through email, SMS, and CRM workflows." },
  { number: "04", title: "Close", desc: "Sales systems help track opportunities and improve conversion rates." },
  { number: "05", title: "Scale", desc: "AI content and automation reduce manual work as the business grows." }
];

const processSteps = [
  { number: "01", title: "Discover", desc: "We review your business, goals, current systems, website, marketing, and bottlenecks." },
  { number: "02", title: "Plan", desc: "We design a practical digital growth strategy based on your services, audience, tools, and budget." },
  { number: "03", title: "Build", desc: "We create the website, automations, content systems, campaigns, or workflows your business needs." },
  { number: "04", title: "Launch", desc: "We test, connect, and deploy the system so it is ready to generate leads and support operations." },
  { number: "05", title: "Optimize", desc: "We review performance, improve weak points, and refine the system over time." }
];

const faqs = [
  { q: "What does Edouard Automation do?", a: "Edouard Automation helps businesses build automation systems, websites, marketing workflows, AI content systems, and AI-powered advertising campaigns." },
  { q: "Do I need automation if my business is small?", a: "Yes. Automation is especially useful for small businesses because it saves time, improves follow-up, and helps owners manage growth without adding unnecessary complexity." },
  { q: "Can you build my website and automation together?", a: "Yes. The best results usually come when the website, CRM, lead forms, follow-up messages, and marketing workflows are designed as one connected system." },
  { q: "Do you create content with AI?", a: "Yes. We use AI to support content creation for websites, social media, blogs, emails, ads, and campaign messaging while keeping the content aligned with your brand." },
  { q: "Do you manage ads?", a: "We can help create, structure, launch, and optimize AI-assisted advertising campaigns across platforms such as Facebook, Instagram, Google, and TikTok." },
  { q: "What kind of businesses do you work with?", a: "We work with service businesses, consultants, local companies, agencies, startups, personal brands, and businesses that want better systems and stronger digital growth." }
];

export default function EdouardAutomationPage() {
  const [formState, setFormState] = useState({
    fullName: "", businessName: "", email: "", phone: "", website: "",
    service: "", budget: "", details: "", contactMethod: "email"
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/strategy-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
    setSubmitting(false);
  };

  const updateField = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Edouard Automation" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-bold">Edouard Automation</span>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#services" className="text-sm text-white/60 transition hover:text-white">Services</a>
              <a href="#system" className="text-sm text-white/60 transition hover:text-white">System</a>
              <a href="#process" className="text-sm text-white/60 transition hover:text-white">Process</a>
              <a href="#faq" className="text-sm text-white/60 transition hover:text-white">FAQ</a>
            </div>
            <a
              href="#contact"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 mb-8">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span>Automation • Websites • Marketing • AI Content • AI Ads</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            <span className="block">Automate Your Business.</span>
            <span className="block">Build Your Online Presence.</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Scale With AI.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/60 md:text-xl">
            Edouard Automation helps businesses streamline operations, launch high-converting websites, 
            create AI-powered content, and run smarter marketing campaigns that produce measurable results.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-semibold transition hover:from-blue-500 hover:to-cyan-500"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold transition hover:bg-white/10"
            >
              Explore Our Services
            </a>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/40">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span className="text-sm">Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span className="text-sm">Custom solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span className="text-sm">Measurable results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg md:text-xl text-white/70">
              If your business depends on <span className="text-white font-semibold">manual follow-ups</span>, 
              <span className="text-white font-semibold"> disconnected tools</span>, 
              <span className="text-white font-semibold"> inconsistent content</span>, or a 
              <span className="text-white font-semibold"> website that does not convert</span>, 
              you are leaving revenue on the table.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Our Services</h2>
            <p className="mt-4 text-lg text-white/60">
              Complete digital growth solutions for businesses that want better systems, stronger marketing, and less manual work.
            </p>
          </div>
          <div className="mt-16 space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-12 ${index % 2 === 1 ? 'md:ml-auto md:max-w-5xl' : 'md:max-w-5xl'}`}
              >
                <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-400">
                      {service.icon}
                    </div>
                    <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>
                    <p className="mt-3 text-white/60">{service.shortDesc}</p>
                    <p className="mt-4 text-white/80 italic">{service.benefit}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">What's Included</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated System */}
      <section id="system" className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">One Partner for Your Digital Growth System</h2>
            <p className="mt-4 text-lg text-white/60">
              Most businesses use separate tools, freelancers, and platforms that do not work together. 
              Edouard Automation connects the pieces into one clear system.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-5">
            {systemSteps.map((step) => (
              <div key={step.number} className="relative rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center">
                <div className="text-4xl font-bold text-blue-400/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-5xl">Built for Business Owners Who Want Execution, Not Complexity</h2>
              <p className="mt-6 text-lg text-white/60">
                We do not just build websites or run ads. We design connected digital systems that help your business 
                operate more efficiently and grow more predictably.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Automation-first approach",
                "Practical AI implementation",
                "Conversion-focused websites",
                "Marketing systems designed around business goals",
                "Clear strategy before execution",
                "Integrated services under one provider",
                "Faster content and campaign production",
                "Better lead follow-up and customer tracking"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">How We Work</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-lg font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-16 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-6 md:p-8"
              >
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-3 text-white/60">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 p-12 md:p-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
            <div className="relative text-center">
              <h2 className="text-3xl font-bold md:text-5xl">Ready to Build a Smarter Business System?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Whether you need automation, a better website, stronger marketing, AI content, or smarter ads, 
                Edouard Automation can help you create the systems your business needs to grow.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-black transition hover:bg-white/90"
              >
                Book a Free Strategy Call
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Start Your Project</h2>
            <p className="mt-4 text-lg text-white/60">
              Tell us about your business and we will get back to you within 24 hours.
            </p>
          </div>
          {submitted ? (
            <div className="mt-12 text-center rounded-2xl border border-green-500/20 bg-green-500/5 p-12">
              <CheckCircle2 className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Thank You!</h3>
              <p className="mt-3 text-white/60">We received your request and will get back to you within 24 hours.</p>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Full Name</label>
                <input type="text" required value={formState.fullName} onChange={e => updateField("fullName", e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Business Name</label>
                <input type="text" required value={formState.businessName} onChange={e => updateField("businessName", e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Your Company" />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Email</label>
                <input type="email" required value={formState.email} onChange={e => updateField("email", e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="john@company.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Phone Number</label>
                <input type="tel" value={formState.phone} onChange={e => updateField("phone", e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">Website URL</label>
              <input type="url" value={formState.website} onChange={e => updateField("website", e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="https://yourwebsite.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">Service Needed</label>
              <select required value={formState.service} onChange={e => updateField("service", e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none">
                <option value="" className="bg-[#0a0a0f]">Select a service</option>
                <option value="automation" className="bg-[#0a0a0f]">Automation</option>
                <option value="website" className="bg-[#0a0a0f]">Website</option>
                <option value="marketing" className="bg-[#0a0a0f]">Marketing</option>
                <option value="ai-content" className="bg-[#0a0a0f]">AI Content</option>
                <option value="ai-ads" className="bg-[#0a0a0f]">AI Ads</option>
                <option value="complete" className="bg-[#0a0a0f]">Complete Digital System</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">Monthly Budget</label>
              <select value={formState.budget} onChange={e => updateField("budget", e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none">
                <option value="" className="bg-[#0a0a0f]">Select budget range</option>
                <option value="1k-3k" className="bg-[#0a0a0f]">$1,000 - $3,000</option>
                <option value="3k-5k" className="bg-[#0a0a0f]">$3,000 - $5,000</option>
                <option value="5k-10k" className="bg-[#0a0a0f]">$5,000 - $10,000</option>
                <option value="10k+" className="bg-[#0a0a0f]">$10,000+</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">Project Details</label>
              <textarea rows={4} value={formState.details} onChange={e => updateField("details", e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none" placeholder="Tell us about your project, goals, and current challenges..." />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">Preferred Contact Method</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="contact" value="email" checked={formState.contactMethod === "email"} onChange={() => updateField("contactMethod", "email")} className="accent-blue-500" />
                  <span className="text-sm text-white/70">Email</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="contact" value="phone" checked={formState.contactMethod === "phone"} onChange={() => updateField("contactMethod", "phone")} className="accent-blue-500" />
                  <span className="text-sm text-white/70">Phone</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white transition hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Start Your Automation Project"}
            </button>
          </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Edouard Automation" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-bold">Edouard Automation</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-white/50">
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#system" className="transition hover:text-white">System</a>
              <a href="#process" className="transition hover:text-white">Process</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
              <a href="https://www.instagram.com/edouard.automations?igsh=bWZ5Y21kN21rbjBt&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 transition hover:text-white">
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
            </div>
            <p className="text-sm text-white/40">
              © 2026 Edouard Automation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
