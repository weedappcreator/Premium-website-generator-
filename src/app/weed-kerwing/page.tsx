"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
  AnimatePresence,
} from "motion/react";
import { ArrowRight, ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════════════
   DESIGN SYSTEM — Weed Kerwing v3
   Theme: Warm Dark Terracotta
   Palette: Deep warm brown-black + cream + terracotta copper
   Typography: Playfair Display 900 (display) + Inter (body) + JetBrains Mono (numbers)
   Personality: Editorial luxury — Loewe meets digital craft
   ═══════════════════════════════════════════════════════════════════ */

const T = {
  bg: "#0C0907",
  surface: "#141009",
  surfaceHigh: "#1C1610",
  border: "rgba(240,232,218,0.07)",
  borderHover: "rgba(240,232,218,0.14)",
  text: {
    primary: "#F0E8DC",
    secondary: "#8C7E6E",
    tertiary: "#6A5E50",
    accent: "#C4622D",
    accentLight: "#D4744A",
  },
} as const;

/* ─── DATA ─── */

const projects = [
  {
    title: "Landhar Homes",
    category: "Construction & Property",
    year: "2026",
    index: "01",
    description:
      "A construction company needed to feel established before they had ten years of history. We built a digital presence that communicates trust through craft — cinematic project galleries, conversion-focused layouts, and a visual language that says 'we build things that last.'",
    scope: ["Strategy", "UI/UX", "Development", "Lead Gen"],
    url: "https://landhar-homes.vercel.app",
  },
  {
    title: "Taconazo24",
    category: "Food Brand & E-Commerce",
    year: "2026",
    index: "02",
    description:
      "A 24-hour taqueria that needed a website as bold as their food. Every design decision — color, motion, spacing — was calibrated to trigger appetite and drive orders.",
    scope: ["Brand Direction", "Visual Design", "Dev", "Menu UX"],
    url: "https://taconazo24.vercel.app",
  },
];

const services = [
  {
    name: "Entrada",
    nameEs: "Entry",
    price: "29,000",
    description: "For businesses that need to look credible before they feel ready — a single, conversion-focused page that punches well above its weight.",
    includes: ["Custom landing page", "Responsive design", "Contact + WhatsApp", "SEO & analytics", "Deployment & handoff"],
  },
  {
    name: "Presencia",
    nameEs: "Presence",
    price: "59,000",
    featured: true,
    description: "For established businesses that have outgrown a single page and need a full digital presence that works as hard as they do.",
    includes: ["Up to 6 custom pages", "Unique visual direction", "Service & portfolio sections", "Lead capture system", "Technical SEO"],
  },
  {
    name: "Obra",
    nameEs: "Masterwork",
    price: "95,000",
    description: "For brands that understand the difference between a website and an experience. Custom motion, CMS, and 30 days of post-launch support.",
    includes: ["Custom UI/UX", "Advanced motion", "CMS integration", "Conversion strategy", "30-day support"],
  },
];

const capabilities = [
  "Website Strategy",
  "UI/UX Design",
  "Responsive Development",
  "Landing Pages",
  "Corporate Websites",
  "E-Commerce",
  "AI-Powered Creation",
  "Brand Direction",
  "Interactive Experiences",
  "Performance Optimization",
];

/* ─── HELPERS ─── */

function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function LineIn({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.div
      ref={ref}
      className={`h-px ${className}`}
      style={{ backgroundColor: T.border, transformOrigin: "left" }}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/* ─── GRAIN ─── */

function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.045]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

/* ─── WHATSAPP FLOAT ─── */

function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 3000); return () => clearTimeout(t); }, []);
  const reduce = useReducedMotion();
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="https://wa.me/18092934827?text=Hola%20Weed%2C%20me%20interesa%20hablar%20sobre%20un%20proyecto"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-[9990] h-14 w-14 rounded-full flex items-center justify-center shadow-2xl"
          style={{ backgroundColor: T.text.accent }}
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={reduce ? {} : { scale: 1.1 }}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill={T.bg} aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.832L.057 23.885a.75.75 0 0 0 .921.914l6.233-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.715 9.715 0 0 1-4.96-1.358l-.355-.211-3.696.97.985-3.596-.231-.371A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTIONS
   ═══════════════════════════════════════════════════════════════════ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={reduce ? false : { y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Main navigation"
      >
        <div
          className="transition-all duration-500"
          style={{
            backgroundColor: scrolled ? `${T.bg}E6` : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent",
          }}
        >
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 flex h-[72px] items-center justify-between">
            <a href="#" style={{ color: T.text.primary }} className="text-[15px] tracking-[-0.01em]"
              onMouseEnter={e => (e.currentTarget.style.color = T.text.accent)}
              onMouseLeave={e => (e.currentTarget.style.color = T.text.primary)}
            >
              Weed Kerwing
            </a>

            <div className="hidden md:flex items-center gap-10">
              {links.map(l => (
                <a key={l.href} href={l.href}
                  className="text-[12px] tracking-[0.12em] uppercase transition-colors duration-300"
                  style={{ color: T.text.tertiary }}
                  onMouseEnter={e => (e.currentTarget.style.color = T.text.primary)}
                  onMouseLeave={e => (e.currentTarget.style.color = T.text.tertiary)}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <a href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.08em] uppercase transition-all duration-300 px-5 py-2.5 rounded-full"
              style={{ color: T.text.primary, border: `1px solid ${T.border}` }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = T.text.accent; e.currentTarget.style.borderColor = T.text.accent; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = T.border; }}
            >
              Start a project
            </a>

            <button className="md:hidden p-2" onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
              style={{ color: T.text.primary }}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center px-8"
            style={{ backgroundColor: T.bg }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            role="dialog" aria-modal="true" aria-label="Mobile navigation"
          >
            {links.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block py-5 text-[clamp(2.2rem,8vw,3.5rem)] tracking-[-0.03em]"
                style={{ color: T.text.primary, fontFamily: "var(--font-display), serif", fontWeight: 900 }}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {l.label}
              </motion.a>
            ))}
            <div className="absolute bottom-10 left-8" style={{ color: T.text.tertiary }}>
              <p className="text-[11px] tracking-[0.18em] uppercase">Santo Domingo, DR</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── HERO ─── */

function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="main-content"
      ref={ref}
      className="relative min-h-[100dvh] flex flex-col overflow-hidden"
      style={{ backgroundColor: T.bg }}
    >
      {/* Warm texture gradient — subtle, low */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 80% 50% at 50% 100%, ${T.text.accent}0A 0%, transparent 60%)`,
      }} />

      {/* Photo — right side, editorial crop */}
      <motion.div
        className="absolute top-0 right-0 h-full"
        style={{ width: "clamp(220px, 35vw, 520px)", y: reduce ? 0 : y }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
      >
        {/* Warm mask — left */}
        <div aria-hidden="true" className="absolute inset-0 z-10" style={{
          background: `linear-gradient(to right, ${T.bg} 0%, ${T.bg}99 6%, transparent 25%)`,
        }} />
        {/* Warm mask — bottom */}
        <div aria-hidden="true" className="absolute inset-0 z-10" style={{
          background: `linear-gradient(to top, ${T.bg} 0%, transparent 28%)`,
        }} />
        {/* Top mask */}
        <div aria-hidden="true" className="absolute inset-0 z-10" style={{
          background: `linear-gradient(to bottom, ${T.bg} 0%, transparent 18%)`,
        }} />
        <Image
          src="/images/weed-hero.png"
          alt="Weed Kerwing — Digital Designer and Developer, Santo Domingo Dominican Republic"
          fill
          className="object-cover object-top"
          priority fetchPriority="high"
          sizes="(max-width: 768px) 55vw, 35vw"
          style={{ filter: "sepia(0.15) warm(1)" }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col justify-end flex-1 pb-12 md:pb-16"
        style={reduce ? {} : { y, opacity }}
      >
        <div className="mx-auto max-w-[1400px] w-full px-6 md:px-10 lg:px-16">

          {/* Eyebrow */}
          <FadeUp delay={0.2}>
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="h-px w-6" style={{ backgroundColor: T.text.accent }} />
              <p className="text-[11px] tracking-[0.22em] uppercase" style={{ color: T.text.tertiary }}>
                Digital Designer & Developer — Santo Domingo, DR
              </p>
            </div>
          </FadeUp>

          {/* Name — Playfair 900, enormous, editorial */}
          <FadeUp delay={0.4}>
            <h1
              className="mb-10 md:mb-14"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 900,
                fontSize: "clamp(4.5rem, 15vw, 14rem)",
                lineHeight: 0.85,
                letterSpacing: "-0.03em",
                color: T.text.primary,
              }}
            >
              Weed<br />
              <span style={{ fontStyle: "italic", color: T.text.accent }}>Kerwing.</span>
            </h1>
          </FadeUp>

          {/* Bottom row */}
          <FadeUp delay={0.65}>
            <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-20">
              <p className="text-[1rem] md:text-[1.1rem] leading-[1.72] max-w-[36ch]" style={{ color: T.text.secondary }}>
                Most websites explain what a business does.
                Mine make people want to buy from it.
              </p>
              <a
                href="#work"
                className="group inline-flex items-center gap-3 shrink-0 text-[12px] tracking-[0.12em] uppercase transition-colors duration-300"
                style={{ color: T.text.accent }}
                onMouseEnter={e => (e.currentTarget.style.color = T.text.accentLight)}
                onMouseLeave={e => (e.currentTarget.style.color = T.text.accent)}
              >
                See the work
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </FadeUp>
        </div>
      </motion.div>

      {/* Bottom rule */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: T.border }} />
    </section>
  );
}

/* ─── STATS ROW ─── */

function StatsRow() {
  const stats = [
    { n: "12+", label: "Projects shipped" },
    { n: "2+", label: "Years of craft" },
    { n: "100%", label: "Custom built" },
    { n: "SDQ", label: "Based globally" },
  ];
  return (
    <div style={{ backgroundColor: T.surface, borderBottom: `1px solid ${T.border}` }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.08}
            className={`py-7 flex flex-col gap-1.5 ${i < 3 ? "border-r" : ""}`}
            style={{ borderColor: T.border }}
          >
            <span className="text-[clamp(1.6rem,3vw,2.6rem)] leading-none tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-display), serif", fontWeight: 900, color: T.text.primary }}>
              {s.n}
            </span>
            <span className="text-[11px] tracking-[0.14em] uppercase" style={{ color: T.text.tertiary }}>
              {s.label}
            </span>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}

/* ─── MARQUEE ─── */

function Marquee() {
  const items = ["Strategy", "UI/UX Design", "Responsive Dev", "Landing Pages", "E-Commerce", "Brand Direction", "Motion Design", "AI-Powered"];
  const all = [...items, ...items, ...items];
  const reduce = useReducedMotion();
  return (
    <div aria-hidden="true" className="overflow-hidden py-4" style={{ backgroundColor: T.bg, borderBottom: `1px solid ${T.border}` }}>
      <div className="flex gap-8 whitespace-nowrap"
        style={{ animation: reduce ? "none" : "wk-marquee 38s linear infinite", width: "max-content" }}>
        {all.map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-[11px] tracking-[0.22em] uppercase" style={{ color: T.text.tertiary }}>
            {item}
            <span style={{ color: T.text.accent, fontSize: 5 }}>◆</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes wk-marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
      `}</style>
    </div>
  );
}

/* ─── SELECTED WORK ─── */

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} — opens in new tab`}
        className="group block border-b"
        style={{ borderColor: T.border }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="py-10 md:py-14 grid md:grid-cols-12 gap-6 md:gap-8 items-start">

          {/* Index + category */}
          <div className="md:col-span-2">
            <span className="block text-[11px] tracking-[0.16em] uppercase mb-1"
              style={{ color: T.text.tertiary, fontFamily: "var(--font-mono), monospace" }}>
              {project.index}
            </span>
            <span className="block text-[11px] tracking-[0.1em] uppercase" style={{ color: T.text.tertiary }}>
              {project.category}
            </span>
          </div>

          {/* Title */}
          <div className="md:col-span-4">
            <motion.h3
              className="leading-[0.95] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-display), serif",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                color: hovered ? T.text.accent : T.text.primary,
                transition: "color 0.4s",
              }}
            >
              {project.title}
            </motion.h3>
          </div>

          {/* Description */}
          <div className="md:col-span-4">
            <p className="text-[14px] leading-[1.75]" style={{ color: T.text.secondary }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {project.scope.map(s => (
                <span key={s} className="text-[11px] px-2.5 py-1 rounded-sm tracking-[0.06em]"
                  style={{ color: T.text.tertiary, border: `1px solid ${T.border}` }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="md:col-span-2 flex md:justify-end items-start pt-1">
            <motion.div
              className="h-11 w-11 rounded-full flex items-center justify-center"
              style={{ border: `1px solid ${hovered ? T.text.accent : T.border}`, transition: "border-color 0.4s, background 0.4s", backgroundColor: hovered ? T.text.accent : "transparent" }}
              animate={hovered && !reduce ? { scale: 1.08 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <ArrowUpRight className="h-4 w-4" style={{ color: hovered ? T.bg : T.text.secondary, transition: "color 0.3s" }} />
            </motion.div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">

        <div className="flex items-end justify-between mb-6">
          <FadeUp>
            <h2 style={{
              fontFamily: "var(--font-display), serif", fontWeight: 900,
              fontSize: "clamp(3rem, 8vw, 7.5rem)", lineHeight: 0.88, letterSpacing: "-0.04em",
              color: T.text.primary,
            }}>
              Selected<br />
              <span style={{ fontStyle: "italic", color: T.text.secondary }}>Work.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <span className="hidden md:block text-[11px] tracking-[0.16em] uppercase mb-3"
              style={{ color: T.text.tertiary, fontFamily: "var(--font-mono), monospace" }}>
              2026
            </span>
          </FadeUp>
        </div>

        <LineIn delay={0.1} />

        <div className="mt-0">
          {projects.map((p, i) => <ProjectRow key={p.title} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── CAPABILITIES ─── */

function Capabilities() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduce = useReducedMotion();

  return (
    <section ref={ref} className="py-24 md:py-36" style={{ backgroundColor: T.surface }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          <div className="lg:col-span-4">
            <FadeUp>
              <span className="text-[11px] tracking-[0.2em] uppercase block mb-5" style={{ color: T.text.tertiary }}>
                The full picture
              </span>
              <h2 style={{
                fontFamily: "var(--font-display), serif", fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 0.92, letterSpacing: "-0.03em",
                color: T.text.primary,
              }}>
                From first sketch<br />
                <span style={{ fontStyle: "italic", color: T.text.secondary }}>to live product.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="mt-7 text-[15px] leading-[1.75]" style={{ color: T.text.secondary }}>
                Strategy, design, and code under one roof. No handoffs, no miscommunications. Every project runs from brief to browser without leaving my hands.
              </p>
            </FadeUp>
          </div>

          <div className="lg:col-span-8">
            <div>
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  className="group flex items-center justify-between py-5 border-b"
                  style={{ borderColor: T.border }}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[11px] tabular-nums" style={{ color: T.text.tertiary, fontFamily: "var(--font-mono), monospace" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-[clamp(1rem,2.2vw,1.4rem)] transition-colors duration-400"
                      style={{ color: T.text.secondary }}
                      onMouseEnter={e => (e.currentTarget.style.color = T.text.primary)}
                      onMouseLeave={e => (e.currentTarget.style.color = T.text.secondary)}
                    >
                      {cap}
                    </span>
                  </div>
                  <div className="h-px w-0 group-hover:w-6 transition-all duration-500" style={{ backgroundColor: T.text.accent }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */

function About() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          <FadeUp className="lg:col-span-5">
            <motion.div style={reduce ? {} : { y: imgY }}>
              <div className="relative rounded-[4px] overflow-hidden aspect-[4/5]" style={{ border: `1px solid ${T.border}` }}>
                <Image
                  src="/images/weed-about.png"
                  alt="Weed Kerwing at work in Santo Domingo, Dominican Republic"
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
                <div aria-hidden="true" className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${T.bg}66 0%, transparent 30%)` }} />
              </div>
              <div className="mt-3 flex justify-between">
                <span className="text-[11px] tracking-[0.14em] uppercase" style={{ color: T.text.tertiary }}>
                  Santo Domingo, DR
                </span>
                <span className="text-[11px] tracking-[0.14em] uppercase" style={{ color: T.text.tertiary, fontFamily: "var(--font-mono), monospace" }}>
                  Est. 2024
                </span>
              </div>
            </motion.div>
          </FadeUp>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp>
              <h2 className="mb-10 leading-[1.05] tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-display), serif", fontWeight: 900,
                  fontSize: "clamp(2rem,4vw,3.5rem)", color: T.text.primary }}>
                I don&apos;t make websites.
                <br />
                <span style={{ fontStyle: "italic", color: T.text.secondary }}>
                  I make businesses look real.
                </span>
              </h2>
            </FadeUp>

            <div className="space-y-5">
              {[
                "Most of my clients come to me after one of two things happened: either they built something themselves and realized it was holding them back, or they paid someone to build something and got a template with their logo on it. I fix both problems.",
                "I design and develop from scratch — strategy first, then design, then code — and I don't stop until the thing actually works in the real world.",
                "Based in Santo Domingo. Some of my clients are down the street. Some are overseas. What they have in common is that they needed something that didn't look like everything else.",
              ].map((t, i) => (
                <FadeUp key={i} delay={i * 0.1 + 0.15}>
                  <p className="text-[15px] md:text-[16px] leading-[1.78]" style={{ color: T.text.secondary }}>{t}</p>
                </FadeUp>
              ))}
              <FadeUp delay={0.5}>
                <p className="text-[15px] mt-2"
                  style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", color: T.text.tertiary }}>
                  The work either speaks for itself or it doesn&apos;t. Scroll up.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.6}>
              <a href="https://www.instagram.com/weeddoesitalll" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 mt-10 transition-opacity duration-300 hover:opacity-70"
                aria-label="Follow Weed Kerwing on Instagram">
                <div className="h-11 w-11 rounded-full flex items-center justify-center" style={{ border: `1px solid ${T.border}` }}>
                  <Instagram className="h-4 w-4" style={{ color: T.text.secondary }} />
                </div>
                <div>
                  <span className="block text-[14px]" style={{ color: T.text.primary }}>@weeddoesitalll</span>
                  <span className="block text-[11px] tracking-[0.1em] uppercase mt-0.5" style={{ color: T.text.tertiary }}>Follow the work</span>
                </div>
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */

function Services() {
  const [active, setActive] = useState<number | null>(1);

  return (
    <section id="services" className="py-24 md:py-40" style={{ backgroundColor: T.surface }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">

        <FadeUp>
          <div className="flex items-end justify-between mb-16 md:mb-24">
            <h2 style={{ fontFamily: "var(--font-display), serif", fontWeight: 900,
              fontSize: "clamp(3rem,7vw,6.5rem)", lineHeight: 0.88, letterSpacing: "-0.04em", color: T.text.primary }}>
              Three tiers.
              <br />
              <span style={{ fontStyle: "italic", color: T.text.secondary }}>Zero templates.</span>
            </h2>
            <p className="hidden md:block text-[13px] max-w-[30ch] leading-[1.7] text-right" style={{ color: T.text.secondary }}>
              Starting prices in RD$. Final quote depends on scope and complexity.
            </p>
          </div>
        </FadeUp>

        <LineIn />
        <div>
          {services.map((pkg, i) => (
            <FadeUp key={pkg.name} delay={i * 0.08}>
              <button
                className="w-full border-b text-left transition-all duration-300"
                style={{ borderColor: T.border }}
                onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
                aria-controls={`svc-panel-${i}`}
                id={`svc-trig-${i}`}
              >
                <div className="py-8 md:py-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 md:gap-10">
                      <span className="text-[11px] tabular-nums"
                        style={{ color: T.text.tertiary, fontFamily: "var(--font-mono), monospace" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="text-left">
                        <div className="flex items-baseline gap-3">
                          <span className="tracking-[-0.02em]"
                            style={{ fontSize: "clamp(1.3rem,3vw,2.2rem)",
                              fontFamily: "var(--font-display), serif", fontWeight: 900,
                              color: active === i ? T.text.primary : T.text.secondary }}>
                            {pkg.name}
                          </span>
                          <span className="text-[13px]" style={{ color: T.text.tertiary, fontStyle: "italic",
                            fontFamily: "var(--font-display), serif" }}>
                            {pkg.nameEs}
                          </span>
                          {pkg.featured && (
                            <span className="text-[10px] tracking-[0.1em] uppercase px-2 py-0.5 rounded-sm ml-1"
                              style={{ backgroundColor: `${T.text.accent}18`, color: T.text.accent }}>
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right hidden sm:block">
                        <span className="text-[10px] block mb-0.5" style={{ color: T.text.tertiary }}>From</span>
                        <span className="text-[1.4rem] md:text-[1.75rem] tracking-[-0.03em]"
                          style={{ fontFamily: "var(--font-mono), monospace",
                            color: pkg.featured ? T.text.accent : T.text.primary }}>
                          RD${pkg.price}
                        </span>
                      </div>
                      <motion.span
                        className="h-7 w-7 flex items-center justify-center rounded-full text-lg leading-none"
                        style={{ border: `1px solid ${T.border}`, color: T.text.secondary }}
                        animate={{ rotate: active === i ? 45 : 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >+</motion.span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        id={`svc-panel-${i}`} role="region" aria-labelledby={`svc-trig-${i}`}
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 grid md:grid-cols-2 gap-8 md:gap-16">
                          <p className="text-[15px] leading-[1.75]" style={{ color: T.text.secondary }}>{pkg.description}</p>
                          <div>
                            <p className="text-[11px] tracking-[0.14em] uppercase mb-4" style={{ color: T.text.tertiary }}>Includes</p>
                            <ul className="space-y-2.5">
                              {pkg.includes.map(item => (
                                <li key={item} className="flex items-start gap-3">
                                  <span className="mt-2 h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: T.text.accent }} />
                                  <span className="text-[14px]" style={{ color: T.text.secondary }}>{item}</span>
                                </li>
                              ))}
                            </ul>
                            <a href="#contact"
                              className="inline-flex items-center gap-2 mt-7 text-[12px] tracking-[0.08em] uppercase group transition-colors duration-300"
                              style={{ color: T.text.accent }}
                              onClick={e => e.stopPropagation()}
                              onMouseEnter={e => (e.currentTarget.style.color = T.text.accentLight)}
                              onMouseLeave={e => (e.currentTarget.style.color = T.text.accent)}
                            >
                              Start a project
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p className="mt-6 text-[11px]" style={{ color: T.text.tertiary }}>
            RD$ — Dominican Pesos. Final quote depends on scope, complexity, integrations, and timeline.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */

function Contact() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Terracotta glow — bottom center */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 70% 50% at 50% 100%, ${T.text.accent}0C 0%, transparent 60%)`,
      }} />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">

        <FadeUp>
          <span className="text-[11px] tracking-[0.22em] uppercase flex items-center gap-3 mb-12 md:mb-16" style={{ color: T.text.accent }}>
            <span className="h-px w-6" style={{ backgroundColor: T.text.accent }} />
            Available for work — 2026
          </span>
        </FadeUp>

        <motion.div style={reduce ? {} : { y: headY }} className="mb-16 md:mb-24">
          <h2 style={{
            fontFamily: "var(--font-display), serif", fontWeight: 900,
            fontSize: "clamp(3.5rem,10vw,10rem)", lineHeight: 0.88, letterSpacing: "-0.04em",
          }}>
            <div className="overflow-hidden">
              <motion.span className="block" style={{ color: T.text.primary }}
                initial={reduce ? false : { y: "100%" }} whileInView={{ y: "0%" }}
                viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                Something&apos;s
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span className="block" style={{ color: T.text.secondary, fontStyle: "italic" }}
                initial={reduce ? false : { y: "100%" }} whileInView={{ y: "0%" }}
                viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
                been sitting
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span className="block" style={{ color: T.text.primary }}
                initial={reduce ? false : { y: "100%" }} whileInView={{ y: "0%" }}
                viewport={{ once: true }} transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}>
                in your head.
              </motion.span>
            </div>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <FadeUp delay={0.2}>
            <p className="text-[16px] md:text-[17px] leading-[1.78] mb-10" style={{ color: T.text.secondary }}>
              Tell me about the project — what it is, what you need, and when you want it live. I&apos;ll respond within 24 hours.
            </p>
            <p className="text-[14px] leading-[1.7]" style={{ color: T.text.tertiary }}>
              Santo Domingo, Dominican Republic<br />
              Open to local &amp; international projects.
            </p>
          </FadeUp>

          <FadeUp delay={0.35}>
            <div className="flex flex-col gap-6">
              {/* WhatsApp */}
              <a href="https://wa.me/18092934827?text=Hola%20Weed%2C%20me%20interesa%20hablar%20sobre%20un%20proyecto"
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-5"
                aria-label="Contact Weed Kerwing on WhatsApp">
                <div className="h-16 w-16 shrink-0 rounded-full flex items-center justify-center transition-all duration-400"
                  style={{ backgroundColor: T.text.accent }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = T.text.accentLight)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = T.text.accent)}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill={T.bg} aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.832L.057 23.885a.75.75 0 0 0 .921.914l6.233-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.715 9.715 0 0 1-4.96-1.358l-.355-.211-3.696.97.985-3.596-.231-.371A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[18px] md:text-[20px] tracking-[-0.01em] block transition-opacity duration-300 group-hover:opacity-70"
                    style={{ color: T.text.primary }}>
                    Message on WhatsApp
                  </span>
                  <span className="text-[11px] tracking-[0.1em] uppercase block mt-0.5" style={{ color: T.text.tertiary }}>
                    Fastest response
                  </span>
                </div>
              </a>

              <div className="h-px" style={{ backgroundColor: T.border }} />

              {/* Instagram */}
              <a href="https://www.instagram.com/weeddoesitalll"
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-5"
                aria-label="Follow Weed Kerwing on Instagram">
                <div className="h-16 w-16 shrink-0 rounded-full flex items-center justify-center"
                  style={{ border: `1px solid ${T.borderHover}`, backgroundColor: T.surfaceHigh }}>
                  <Instagram className="h-5 w-5" style={{ color: T.text.secondary }} />
                </div>
                <div>
                  <span className="text-[18px] md:text-[20px] tracking-[-0.01em] block transition-opacity duration-300 group-hover:opacity-70"
                    style={{ color: T.text.primary }}>
                    @weeddoesitalll
                  </span>
                  <span className="text-[11px] tracking-[0.1em] uppercase block mt-0.5" style={{ color: T.text.tertiary }}>
                    See the work
                  </span>
                </div>
              </a>
            </div>
          </FadeUp>
        </div>

        <div className="mt-20 md:mt-28 h-px" style={{ backgroundColor: T.border }} />
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */

function Footer() {
  return (
    <footer className="py-10 md:py-12" style={{ borderTop: `1px solid ${T.border}`, backgroundColor: T.bg }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <span className="text-[15px] tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", color: T.text.primary }}>
            Weed Kerwing
          </span>
          <div className="flex items-center justify-start md:justify-center gap-8">
            {["Work", "Services", "About", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-[11px] tracking-[0.1em] uppercase transition-colors duration-300"
                style={{ color: T.text.tertiary }}
                onMouseEnter={e => (e.currentTarget.style.color = T.text.primary)}
                onMouseLeave={e => (e.currentTarget.style.color = T.text.tertiary)}
              >{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-5 justify-start md:justify-end">
            <a href="https://www.instagram.com/weeddoesitalll" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors duration-300"
              style={{ color: T.text.tertiary }}
              onMouseEnter={e => (e.currentTarget.style.color = T.text.primary)}
              onMouseLeave={e => (e.currentTarget.style.color = T.text.tertiary)}>
              <Instagram className="h-4 w-4" />
            </a>
            <span className="text-[11px]" style={{ color: T.text.tertiary }}>&copy; 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════ */

export default function WeedKerwingPortfolio() {
  return (
    <>
      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }

        body {
          font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #0C0907;
        }

        @media (pointer: fine) {
          body, a, button { cursor: none; }
        }

        ::selection { background: rgba(196,98,45,0.25); color: #F0E8DC; }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0C0907; }
        ::-webkit-scrollbar-thumb { background: rgba(240,232,218,0.08); border-radius: 4px; }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }

        .skip-link {
          position: absolute; top: -100%; left: 1rem; z-index: 99999;
          padding: 0.5rem 1rem; border-radius: 2px; font-size: 14px;
          background: #C4622D; color: #0C0907; transition: top 0.2s;
        }
        .skip-link:focus { top: 1rem; }
      `}</style>

      <div className="min-h-[100dvh] antialiased" style={{ backgroundColor: T.bg, color: T.text.primary }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Grain />
        <WhatsAppFloat />
        <Navbar />
        <Hero />
        <StatsRow />
        <Marquee />
        <SelectedWork />
        <Capabilities />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
