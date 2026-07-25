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
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════════════
   DESIGN SYSTEM — Weed Kerwing Portfolio
   Philosophy: Restraint and precision over decoration and motion.
   Fonts: Syne (display) + Inter (UI) + JetBrains Mono (numbers)
   ═══════════════════════════════════════════════════════════════════ */

const PALETTE = {
  bg: "#060606",
  surface: "#0C0C0C",
  surfaceRaised: "#131210",
  border: "rgba(255,255,255,0.06)",
  borderHover: "rgba(255,255,255,0.12)",
  borderWarm: "rgba(245,240,232,0.08)",
  text: {
    primary: "#F5F0E8",
    secondary: "#8A8578",
    tertiary: "#6B6660",   // bumped from #4A4640 — passes 3:1 for large text
    accent: "#C8FF00",
  },
} as const;

/* ─── DATA ─── */

const projects = [
  {
    title: "Landhar Homes",
    category: "Construction & Property",
    year: "2026",
    description:
      "A construction company needed to feel established before they had ten years of history. We built a digital presence that communicates trust through craft — cinematic project galleries, conversion-focused layouts, and a visual language that says 'we build things that last.'",
    scope: ["Strategy", "UI/UX", "Development", "Lead Gen"],
    url: "https://landhar-homes.vercel.app",
    color: "#4ade80",
    index: "01",
  },
  {
    title: "Taconazo24",
    category: "Food Brand & E-Commerce",
    year: "2026",
    description:
      "A 24-hour taqueria that needed a website as bold as their food. Every design decision — color, motion, spacing — was calibrated to trigger appetite and drive orders. Mobile-first, because their customers are deciding where to eat right now, on the street.",
    scope: ["Brand Direction", "Visual Design", "Dev", "Menu UX"],
    url: "https://taconazo24.vercel.app",
    color: "#f97316",
    index: "02",
  },
];

const services = [
  {
    name: "Entrada",
    price: "29,000",
    subtitle: "One page. No excuses.",
    description:
      "For businesses that need to look credible before they feel ready — a single, conversion-focused page that punches well above its weight.",
    includes: [
      "Custom landing page design",
      "Responsive across all devices",
      "Contact form + WhatsApp integration",
      "Basic SEO & performance",
      "Deployed & handed off",
    ],
  },
  {
    name: "Presencia",
    price: "59,000",
    featured: true,
    subtitle: "Built for the long run.",
    description:
      "For established businesses that have outgrown a single page and need a full digital presence that works as hard as they do.",
    includes: [
      "Up to 6 custom-designed pages",
      "Unique visual direction",
      "Service & portfolio sections",
      "Lead capture & contact system",
      "Technical SEO & analytics",
    ],
  },
  {
    name: "Obra",
    price: "95,000",
    subtitle: "For when the bar is higher than everyone else's.",
    description:
      "For brands that understand the difference between a website and an experience — custom motion, CMS, strategy, and a month of support after launch.",
    includes: [
      "Custom UI/UX from scratch",
      "Advanced interactions & motion",
      "CMS integration",
      "Conversion strategy & optimization",
      "30-day post-launch support",
    ],
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

const CAP_SIZES: Array<"sm" | "md" | "lg"> = [
  "lg", "md", "sm", "md", "lg", "sm", "md", "lg", "sm", "md",
];

/* ─── GRAIN OVERLAY ─── */

function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.05]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

/* ─── VIGNETTE ─── */

/* ─── LINE REVEAL ─── */

function LineReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={reduce ? false : { y: "110%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─── FADE REVEAL ─── */

function FadeReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── CURSOR FOLLOWER (ring, not dot) ─── */

function CursorFollower() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 250, damping: 26 });
  const springY = useSpring(y, { stiffness: 250, damping: 26 });

  useEffect(() => {
    if (reduce) return;
    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y, reduce]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[9997] pointer-events-none hidden lg:block"
      style={{
        x: springX,
        y: springY,
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: `1px solid rgba(245,240,232,0.5)`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}

/* ─── WHATSAPP FLOAT ─── */

function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/18092934827?text=Hola%20Weed%2C%20me%20interesa%20hablar%20sobre%20un%20proyecto"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-[9990] flex items-center justify-center rounded-full h-14 w-14 shadow-2xl"
          style={{ backgroundColor: PALETTE.text.accent }}
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={reduce ? {} : { scale: 1.12 }}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#060606" aria-hidden="true">
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

/* ─── NAVBAR ─── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
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
        transition={{ duration: 0.9, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Main navigation"
      >
        <div
          className={`transition-all duration-700 ${scrolled ? "bg-[#060606]/90 backdrop-blur-2xl border-b" : "bg-transparent border-b border-transparent"}`}
          style={scrolled ? { borderColor: PALETTE.border } : {}}
        >
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
            <div className="flex h-[76px] items-center justify-between">
              <a href="#" className="text-[15px] font-medium tracking-[-0.02em]" style={{ color: PALETTE.text.primary }}>
                Weed Kerwing<span style={{ color: PALETTE.text.accent }}>.</span>
              </a>
              <div className="hidden md:flex items-center gap-12">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-[13px] tracking-[0.08em] uppercase transition-colors duration-300"
                    style={{ color: PALETTE.text.tertiary }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = PALETTE.text.primary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = PALETTE.text.tertiary)}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 text-[13px] tracking-[0.04em] uppercase transition-colors duration-300"
                style={{ color: PALETTE.text.accent }}
              >
                <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: PALETTE.text.accent }} />
                Available for work
              </a>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                style={{ color: PALETTE.text.primary }}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center px-8"
            style={{ backgroundColor: PALETTE.bg }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-4 font-medium tracking-[-0.03em]"
                style={{ fontSize: "clamp(2rem,8vw,3.5rem)", color: PALETTE.text.primary }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.div
              className="mt-12 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: PALETTE.text.accent }} />
              <span className="text-sm" style={{ color: PALETTE.text.accent }}>Available for work</span>
            </motion.div>
            <motion.div
              className="absolute bottom-8 left-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-[11px] tracking-[0.15em] uppercase" style={{ color: PALETTE.text.tertiary }}>
                Santo Domingo, DR
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── HERO ─── */

function Hero() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 0.7], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="main-content"
      ref={containerRef}
      style={{ position: "relative", minHeight: "100dvh", display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: PALETTE.bg }}
    >
      {/* Single precise light source — not a blob soup */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: "-10%", right: "20%",
          width: "40vw", height: "40vw", borderRadius: "50%",
          background: `radial-gradient(circle, ${PALETTE.text.accent}0C 0%, transparent 70%)`,
          filter: "blur(40px)", pointerEvents: "none", zIndex: 0,
        }}
      />

      {/* Photo — right-edge bleed, parallax */}
      <motion.div
        style={{
          position: "absolute", top: 0, right: 0,
          width: "clamp(240px, 38vw, 580px)", height: "100%", zIndex: 2,
          y: reduce ? 0 : photoY,
        }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 3, background: `linear-gradient(to right, ${PALETTE.bg} 0%, ${PALETTE.bg}CC 8%, transparent 28%)` }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 3, background: `linear-gradient(to top, ${PALETTE.bg} 0%, transparent 25%)` }} />
        <Image
          src="/images/weed-hero.png"
          alt="Weed Kerwing — Digital Designer and Developer based in Santo Domingo, Dominican Republic"
          fill
          className="object-cover object-top"
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 60vw, 40vw"
        />
      </motion.div>

      {/* Content — scroll-linked exit */}
      <motion.div
        style={{
          position: "relative", zIndex: 10,
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          flex: 1, paddingBottom: "clamp(2.5rem,5vh,4rem)",
          ...(reduce ? {} : { y: contentY, opacity: contentOpacity }),
        }}
      >
        <div className="mx-auto max-w-[1440px] w-full px-6 md:px-10 lg:px-16">

          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-4 mb-10 md:mb-14"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="h-px w-7" style={{ backgroundColor: PALETTE.text.accent }} />
            <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: PALETTE.text.tertiary }}>
              Digital Designer & Developer — Santo Domingo, DR
            </span>
          </motion.div>

          {/* Name — static, massive, confident. No animation needed. */}
          <motion.h1
            className="leading-[0.86] tracking-[-0.04em] mb-10 md:mb-14"
            style={{
              fontSize: "clamp(4.5rem, 14vw, 13rem)",
              fontFamily: "var(--font-display), system-ui, sans-serif",
              fontWeight: 700,
              color: PALETTE.text.primary,
            }}
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Weed<br />
            Kerwing<span style={{ color: PALETTE.text.accent }}>.</span>
          </motion.h1>

          {/* Bottom row — subhead + CTA side by side */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-[clamp(0.95rem,1.6vw,1.15rem)] leading-[1.7] max-w-[34ch]"
              style={{ color: PALETTE.text.secondary }}
            >
              Most websites explain what a business does.
              Mine make people want to buy from it.
            </p>
            <a
              href="#work"
              className="group inline-flex items-center gap-3 shrink-0 text-[12px] tracking-[0.1em] uppercase transition-all duration-300 pb-1"
              style={{ color: PALETTE.text.accent, borderBottom: `1px solid ${PALETTE.text.accent}40` }}
            >
              See the work
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom rule */}
      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, backgroundColor: PALETTE.border, zIndex: 15 }} />
    </section>
  );
}

/* ─── STATS STRIP ─── */

function StatsStrip() {
  const stats = [
    { value: "12+", label: "Projects shipped" },
    { value: "2+", label: "Years of craft" },
    { value: "100%", label: "Custom built" },
    { value: "DR", label: "Based, global scope" },
  ];

  return (
    <section aria-label="Key statistics" className="border-b" style={{ borderColor: PALETTE.border, backgroundColor: PALETTE.surface }}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeReveal
              key={s.label}
              delay={i * 0.1}
              className={`py-8 md:py-10 flex flex-col gap-2 ${i < stats.length - 1 ? "border-r" : ""}`}
              style={{ borderColor: PALETTE.border }}
            >
              <span
                className="block leading-none tracking-[-0.04em]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontFamily: "var(--font-display), system-ui, sans-serif", fontWeight: 700, color: PALETTE.text.primary }}
              >
                {s.value}
              </span>
              <span className="text-[11px] tracking-[0.15em] uppercase" style={{ color: PALETTE.text.tertiary }}>
                {s.label}
              </span>
            </FadeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── MARQUEE ─── */

function Marquee() {
  const reduce = useReducedMotion();
  const items = [
    "Strategy", "UI/UX Design", "Responsive Dev", "Landing Pages",
    "E-Commerce", "Brand Direction", "Motion Design", "AI-Powered",
    "Performance", "Interactive Experiences",
  ];
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden border-t border-b py-4"
      style={{ borderColor: PALETTE.border, backgroundColor: PALETTE.surface }}
      aria-hidden="true"
    >
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{ animation: reduce ? "none" : "marquee-left 35s linear infinite", width: "max-content" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="text-[11px] tracking-[0.2em] uppercase flex items-center gap-8" style={{ color: PALETTE.text.tertiary }}>
            {item}
            <span style={{ color: PALETTE.text.accent, fontSize: 6 }}>◆</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}

/* ─── SELECTED WORK ─── */

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, amount: 0.12 });
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const numX = useSpring(useTransform(mouseX, [0, 1], [-18, 18]), { stiffness: 80, damping: 18 });
  const numY = useSpring(useTransform(mouseY, [0, 1], [-10, 10]), { stiffness: 80, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={reduce ? false : { opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        aria-label={`View ${project.title} — opens in new tab`}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); mouseX.set(0.5); mouseY.set(0.5); }}
      >
        <motion.div
          className="relative overflow-hidden"
          style={{
            backgroundColor: PALETTE.surface,
            border: `1px solid`,
            borderColor: hovered ? `${project.color}30` : PALETTE.border,
            borderRadius: 28,
            transition: "border-color 0.6s cubic-bezier(0.22,1,0.36,1)",
          }}
          animate={hovered && !reduce ? { scale: 1.008 } : { scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient glow */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-0"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            style={{ background: `radial-gradient(ellipse 70% 60% at 20% 50%, ${project.color}0D, transparent 70%)` }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row min-h-[480px] md:min-h-[560px] lg:min-h-[520px]">
            {/* Left panel */}
            <div
              className="relative flex-1 lg:flex-[0_0_58%] overflow-hidden flex flex-col justify-between p-8 md:p-10 lg:p-14"
              style={{ borderRight: `1px solid ${hovered ? `${project.color}20` : PALETTE.border}`, transition: "border-color 0.6s" }}
            >
              {/* Ghost number — parallax */}
              <motion.div
                aria-hidden="true"
                className="absolute select-none pointer-events-none font-semibold tracking-[-0.07em]"
                style={{ fontSize: "clamp(140px,22vw,280px)", color: project.color, opacity: 0.055, bottom: "-0.1em", left: "-0.04em", x: reduce ? 0 : numX, y: reduce ? 0 : numY, lineHeight: 1, fontFamily: "'JetBrains Mono', monospace" }}
              >
                {project.index}
              </motion.div>

              {/* Top row */}
              <div className="flex items-center justify-between relative z-10">
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] tracking-[0.14em] uppercase font-medium"
                  style={{ backgroundColor: `${project.color}12`, color: project.color, border: `1px solid ${project.color}25` }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: project.color }} />
                  {project.index}
                </div>
                <span className="text-[11px] tracking-[0.16em] uppercase tabular-nums" style={{ color: PALETTE.text.tertiary, fontFamily: "'JetBrains Mono', monospace" }}>
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <div className="relative z-10 mt-auto pb-4">
                <span className="block text-[11px] tracking-[0.18em] uppercase mb-2" style={{ color: PALETTE.text.tertiary }}>
                  {project.category}
                </span>
                <motion.h3
                  style={{ fontSize: "clamp(2.6rem,5.5vw,5rem)", fontFamily: "var(--font-display), system-ui, sans-serif", fontWeight: 700, color: PALETTE.text.primary, letterSpacing: "-0.03em", lineHeight: 1.0 }}
                  animate={hovered && !reduce ? { x: 6 } : { x: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  {project.title}
                </motion.h3>
              </div>

              {/* Bottom CTA row */}
              <div className="relative z-10 flex items-center justify-between">
                <motion.div
                  className="flex items-center gap-3"
                  animate={hovered && !reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-[12px] tracking-[0.1em] uppercase font-medium" style={{ color: project.color }}>View live site</span>
                  <div className="h-px w-8" style={{ backgroundColor: project.color, opacity: 0.5 }} />
                </motion.div>
                <motion.div
                  className="h-14 w-14 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: hovered ? project.color : `${PALETTE.text.primary}08`, border: `1px solid ${hovered ? project.color : PALETTE.border}`, transition: "background-color 0.5s, border-color 0.5s" }}
                  animate={hovered && !reduce ? { scale: 1.12 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <ArrowUpRight className="h-5 w-5" style={{ color: hovered ? "#060606" : PALETTE.text.primary, transition: "color 0.4s" }} />
                </motion.div>
              </div>
            </div>

            {/* Right panel — hover reveal */}
            <div className="relative lg:flex-[0_0_42%] overflow-hidden">
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.7 }}
                style={{ background: `linear-gradient(160deg, ${project.color}08 0%, transparent 55%)` }}
              />

              {/* Drawer content */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 lg:p-14"
                animate={hovered && !reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: hovered ? 0.05 : 0 }}
              >
                <div className="h-px w-12 mb-8" style={{ backgroundColor: project.color, opacity: 0.6 }} />
                <span className="text-[10px] tracking-[0.22em] uppercase block mb-5" style={{ color: PALETTE.text.tertiary }}>About this project</span>
                <p className="text-[14px] md:text-[15px] leading-[1.75] mb-10" style={{ color: PALETTE.text.secondary }}>
                  {project.description}
                </p>
                <div>
                  <span className="text-[10px] tracking-[0.22em] uppercase block mb-4" style={{ color: PALETTE.text.tertiary }}>Scope</span>
                  <div className="flex flex-wrap gap-2">
                    {project.scope.map((s, si) => (
                      <motion.span
                        key={s}
                        className="text-[11px] tracking-[0.06em] px-3 py-1.5 rounded-full"
                        style={{ color: project.color, border: `1px solid ${project.color}30`, backgroundColor: `${project.color}08` }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                        transition={{ duration: 0.4, delay: hovered ? 0.18 + si * 0.06 : 0, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Idle placeholder */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={hovered && !reduce ? { opacity: 0, scale: 0.96 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="h-12 w-px" style={{ background: `linear-gradient(to bottom, transparent, ${project.color}40, transparent)` }} />
                  <span className="text-[10px] tracking-[0.28em] uppercase" style={{ color: PALETTE.text.tertiary, writingMode: "vertical-rl" }}>
                    Hover to explore
                  </span>
                  <div className="h-12 w-px" style={{ background: `linear-gradient(to bottom, ${project.color}40, transparent)` }} />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom color sweep */}
          <motion.div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[2px] rounded-full pointer-events-none"
            style={{ backgroundColor: project.color }}
            animate={hovered && !reduce ? { width: "100%", opacity: 0.7 } : { width: "0%", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </a>
    </motion.div>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="mb-20 md:mb-32">
          <div className="flex items-start justify-between mb-6">
            <LineReveal>
              <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: PALETTE.text.tertiary }}>
                Selected Projects
              </span>
            </LineReveal>
            <FadeReveal delay={0.3}>
              <span className="hidden md:block text-[11px] tracking-[0.15em] uppercase" style={{ color: PALETTE.text.tertiary, fontFamily: "'JetBrains Mono', monospace" }}>
                {String(projects.length).padStart(2, "0")} Projects
              </span>
            </FadeReveal>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-0">
            <LineReveal delay={0.06}>
              <h2 className="font-medium tracking-[-0.05em] leading-[0.9]" style={{ fontSize: "clamp(3.5rem,9vw,8.5rem)", fontFamily: "var(--font-display), system-ui, sans-serif", fontWeight: 700, color: PALETTE.text.primary }}>
                Work
              </h2>
            </LineReveal>
            <FadeReveal delay={0.25} className="md:max-w-[28ch]">
              <p className="text-[14px] md:text-[15px] leading-[1.7]" style={{ color: PALETTE.text.secondary }}>
                Every project starts with a problem. This is what came out the other side.
              </p>
            </FadeReveal>
          </div>

          <motion.div
            aria-hidden="true"
            className="h-px w-full mt-10 origin-left"
            style={{ backgroundColor: PALETTE.border }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="space-y-6 md:space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <FadeReveal delay={0.2}>
          <div className="mt-16 md:mt-24 flex items-center gap-6">
            <div className="h-px flex-1" style={{ backgroundColor: PALETTE.border }} />
            <span className="text-[11px] tracking-[0.18em] uppercase" style={{ color: PALETTE.text.tertiary }}>More coming soon</span>
            <div className="h-px flex-1" style={{ backgroundColor: PALETTE.border }} />
          </div>
        </FadeReveal>
      </div>
    </section>
  );
}

/* ─── CAPABILITIES ─── */

function Capabilities() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  const sizeMap = {
    sm: { fontSize: "clamp(0.8rem,1.8vw,1.1rem)", padding: "10px 20px" },
    md: { fontSize: "clamp(1rem,2.2vw,1.4rem)", padding: "12px 24px" },
    lg: { fontSize: "clamp(1.25rem,2.8vw,1.85rem)", padding: "16px 32px" },
  };

  return (
    <section ref={sectionRef} className="py-28 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8 mb-20 md:mb-28 items-end">
          <div className="lg:col-span-5">
            <LineReveal>
              <span className="text-[11px] tracking-[0.2em] uppercase block mb-5" style={{ color: PALETTE.text.tertiary }}>
                The full picture
              </span>
            </LineReveal>
            <LineReveal delay={0.08}>
              <h2 className="tracking-[-0.05em] leading-[0.92]" style={{ fontSize: "clamp(3rem,7vw,6rem)", fontFamily: "var(--font-display), system-ui, sans-serif", fontWeight: 700, color: PALETTE.text.primary }}>
                From first sketch<br />
                <span style={{ color: PALETTE.text.secondary }}>to live product.</span>
              </h2>
            </LineReveal>
          </div>
          <FadeReveal delay={0.25} className="lg:col-span-5 lg:col-start-8">
            <p className="text-[15px] md:text-[16px] leading-[1.75]" style={{ color: PALETTE.text.secondary }}>
              Strategy, design, and code under one roof — no handoffs, no miscommunications, no one to blame but me. Every project runs from the brief to the browser without leaving my hands.
            </p>
          </FadeReveal>
        </div>

        {/* Scattered pill cloud */}
        <div className="space-y-5 md:space-y-6">
          <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-5">
            {capabilities.slice(0, 5).map((cap, i) => {
              const sz = sizeMap[CAP_SIZES[i]];
              return (
                <motion.div
                  key={cap}
                  className="rounded-full border cursor-default select-none"
                  style={{ borderColor: PALETTE.border, backgroundColor: PALETTE.surface, padding: sz.padding }}
                  initial={reduce ? false : { opacity: 0, y: 30, scale: 0.92 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.75, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={reduce ? {} : { scale: 1.05, borderColor: PALETTE.text.accent, transition: { duration: 0.25 } }}
                >
                  <span
                    className="font-medium tracking-[-0.02em] transition-colors duration-300"
                    style={{ fontSize: sz.fontSize, color: PALETTE.text.secondary }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = PALETTE.text.accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = PALETTE.text.secondary)}
                  >
                    {cap}
                  </span>
                </motion.div>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-5 lg:pl-[8%]">
            {capabilities.slice(5).map((cap, i) => {
              const gi = i + 5;
              const sz = sizeMap[CAP_SIZES[gi]];
              return (
                <motion.div
                  key={cap}
                  className="rounded-full border cursor-default select-none"
                  style={{ borderColor: PALETTE.border, backgroundColor: PALETTE.surface, padding: sz.padding }}
                  initial={reduce ? false : { opacity: 0, y: 30, scale: 0.92 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.75, delay: gi * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={reduce ? {} : { scale: 1.05, borderColor: PALETTE.text.accent, transition: { duration: 0.25 } }}
                >
                  <span
                    className="font-medium tracking-[-0.02em] transition-colors duration-300"
                    style={{ fontSize: sz.fontSize, color: PALETTE.text.secondary }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = PALETTE.text.accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = PALETTE.text.secondary)}
                  >
                    {cap}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <FadeReveal delay={0.7}>
          <div className="mt-20 md:mt-28 flex items-center gap-4">
            <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: PALETTE.text.accent }} />
            <div className="h-px flex-1" style={{ backgroundColor: PALETTE.border }} />
          </div>
        </FadeReveal>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */

function About() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <FadeReveal className="lg:col-span-5">
            <motion.div className="relative" style={reduce ? {} : { y: imageY }}>
              <div className="relative rounded-[20px] overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/weed-about.png"
                  alt="Weed Kerwing at work in Santo Domingo, Dominican Republic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#060606]/40 via-transparent to-[#060606]/20" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] tracking-[0.15em] uppercase" style={{ color: PALETTE.text.tertiary }}>Santo Domingo, DR</span>
                <span className="text-[11px] tracking-[0.15em] uppercase" style={{ color: PALETTE.text.tertiary, fontFamily: "'JetBrains Mono', monospace" }}>Est. 2024</span>
              </div>
            </motion.div>
          </FadeReveal>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <LineReveal>
              <span className="text-[11px] tracking-[0.2em] uppercase block mb-4" style={{ color: PALETTE.text.tertiary }}>The person behind it</span>
            </LineReveal>
            <LineReveal delay={0.1}>
              <h2 className="tracking-[-0.04em] leading-[1.05] mb-10" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontFamily: "var(--font-display), system-ui, sans-serif", fontWeight: 700, color: PALETTE.text.primary }}>
                I don&apos;t make websites.
                <br />
                <span style={{ color: PALETTE.text.secondary }}>I make businesses look real.</span>
              </h2>
            </LineReveal>

            <div className="space-y-6">
              {[
                "Most of my clients come to me after one of two things happened: either they built something themselves and realized it was holding them back, or they paid someone to build something and got a template with their logo on it. I fix both problems. I design and develop from scratch — strategy first, then design, then code — and I don't stop until the thing actually works in the real world.",
                "What I do isn't complicated to describe: I take what a business is, figure out what it needs to say, and build the digital thing that says it. That involves UI/UX design, frontend development, automation, and wherever it makes sense — AI. Not AI for the sake of AI. AI because sometimes the right tool for a specific problem is a language model, and I know how to connect those things to something that ships.",
                "I'm based in Santo Domingo. Some of my clients are down the street. Some are overseas. What they have in common is that they needed something that didn't look like everything else, and they were done settling for it.",
              ].map((text, i) => (
                <FadeReveal key={i} delay={i * 0.1 + 0.2}>
                  <p className="text-[16px] md:text-[17px] leading-[1.75] max-w-[52ch]" style={{ color: PALETTE.text.secondary }}>
                    {text}
                  </p>
                </FadeReveal>
              ))}
              <FadeReveal delay={0.6}>
                <p className="text-[15px] italic mt-2" style={{ color: PALETTE.text.tertiary, fontFamily: "var(--font-display), system-ui, sans-serif", fontStyle: "italic" }}>
                  The work either speaks for itself or it doesn&apos;t. Scroll up.
                </p>
              </FadeReveal>
            </div>

            <FadeReveal delay={0.7}>
              <div className="mt-12">
                <a
                  href="https://www.instagram.com/weeddoesitalll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{ border: `1px solid ${PALETTE.border}` }}>
                    <Instagram className="h-[18px] w-[18px]" style={{ color: PALETTE.text.secondary }} />
                  </div>
                  <div>
                    <span className="text-[14px] font-medium block" style={{ color: PALETTE.text.primary }}>@weeddoesitalll</span>
                    <span className="text-[12px] block" style={{ color: PALETTE.text.tertiary }}>Follow the work</span>
                  </div>
                </a>
              </div>
            </FadeReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */

function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    <section id="services" className="py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="mb-16 md:mb-24">
          <LineReveal>
            <span className="text-[11px] tracking-[0.2em] uppercase block mb-4" style={{ color: PALETTE.text.tertiary }}>
              What it costs to work together
            </span>
          </LineReveal>
          <LineReveal delay={0.1}>
            <h2 className="tracking-[-0.04em] leading-[1]" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", fontFamily: "var(--font-display), system-ui, sans-serif", fontWeight: 700, color: PALETTE.text.primary }}>
              Three tiers.
              <br />
              <span style={{ color: PALETTE.text.secondary }}>Zero templates.</span>
            </h2>
          </LineReveal>
          <FadeReveal delay={0.3}>
            <p className="mt-6 text-[15px] leading-[1.7] max-w-[52ch]" style={{ color: PALETTE.text.secondary }}>
              These are starting points, not ceilings. Every number reflects real work — custom-designed, custom-built, for one client. Your final quote depends on scope and complexity. I'll tell you the number before we start. No surprises.
            </p>
          </FadeReveal>
        </div>

        <div>
          {services.map((pkg, i) => (
            <FadeReveal key={pkg.name} delay={i * 0.1}>
              <button
                className="w-full border-t text-left transition-all duration-500"
                style={{ borderColor: PALETTE.border }}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                aria-expanded={activeIndex === i}
                aria-controls={`service-panel-${i}`}
                id={`service-trigger-${i}`}
              >
                <div className="py-8 md:py-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 md:gap-10">
                      <span className="text-[11px] tracking-[0.15em] uppercase tabular-nums" style={{ color: PALETTE.text.tertiary, fontFamily: "'JetBrains Mono', monospace" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="tracking-[-0.02em]" style={{ fontSize: "clamp(1.25rem,3vw,2rem)", color: activeIndex === i ? PALETTE.text.primary : PALETTE.text.secondary }} id={`service-heading-${i}`}>
                          {pkg.name}
                          {pkg.featured && (
                            <span className="ml-3 text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full align-middle" style={{ backgroundColor: `${PALETTE.text.accent}15`, color: PALETTE.text.accent }}>
                              Popular
                            </span>
                          )}
                        </h3>
                        <span className="text-[13px] mt-1 block" style={{ color: PALETTE.text.tertiary }}>{pkg.subtitle}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 md:gap-10">
                      <div className="text-right hidden sm:block">
                        <span className="text-[11px] block" style={{ color: PALETTE.text.tertiary }}>From</span>
                        <span className="tracking-[-0.02em]" style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", color: pkg.featured ? PALETTE.text.accent : PALETTE.text.primary, fontFamily: "'JetBrains Mono', monospace" }}>
                          RD${pkg.price}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: activeIndex === i ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="h-8 w-8 rounded-full flex items-center justify-center text-lg" style={{ border: `1px solid ${PALETTE.border}`, color: PALETTE.text.secondary }}>+</div>
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        id={`service-panel-${i}`}
                        role="region"
                        aria-labelledby={`service-heading-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 grid md:grid-cols-2 gap-8 md:gap-16">
                          <p className="text-[15px] leading-[1.7]" style={{ color: PALETTE.text.secondary }}>{pkg.description}</p>
                          <div>
                            <span className="text-[11px] tracking-[0.15em] uppercase block mb-4" style={{ color: PALETTE.text.tertiary }}>Includes</span>
                            <ul className="space-y-3">
                              {pkg.includes.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                  <span className="mt-2 h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: PALETTE.text.accent }} />
                                  <span className="text-[14px]" style={{ color: PALETTE.text.secondary }}>{item}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-8 sm:hidden">
                              <span className="text-[11px] block" style={{ color: PALETTE.text.tertiary }}>Starting from</span>
                              <span className="text-2xl tracking-[-0.02em]" style={{ color: PALETTE.text.primary, fontFamily: "'JetBrains Mono', monospace" }}>RD${pkg.price}</span>
                            </div>
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-2 mt-8 text-[13px] tracking-[0.04em] uppercase transition-all duration-300 group"
                              style={{ color: PALETTE.text.accent }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              Start a project
                              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </FadeReveal>
          ))}
          <div className="border-t" style={{ borderColor: PALETTE.border }} />
          <FadeReveal delay={0.4}>
            <p className="mt-6 text-[11px] tracking-[0.05em]" style={{ color: PALETTE.text.tertiary }}>
              RD$ — Dominican Pesos. Final quote depends on scope, complexity, integrations, and timeline.
            </p>
          </FadeReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */

function Contact() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-[80dvh] flex flex-col justify-center overflow-hidden py-32 md:py-48">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] rounded-full opacity-[0.055]" style={{ background: `radial-gradient(circle, ${PALETTE.text.accent}, transparent 65%)` }} />
      </div>

      <div className="relative mx-auto max-w-[1440px] w-full px-6 md:px-10 lg:px-16">
        <FadeReveal className="flex items-center gap-3 mb-12 md:mb-16">
          <span className={`h-2 w-2 rounded-full ${reduce ? "" : "animate-pulse"}`} style={{ backgroundColor: PALETTE.text.accent }} />
          <span className="text-[12px] tracking-[0.18em] uppercase" style={{ color: PALETTE.text.accent }}>
            Available for work — 2026
          </span>
        </FadeReveal>

        <motion.div style={reduce ? {} : { y: headlineY }} className="mb-16 md:mb-24">
          <h2 className="tracking-[-0.05em] leading-[0.88]" style={{ fontSize: "clamp(3.5rem,10vw,9.5rem)", fontFamily: "var(--font-display), system-ui, sans-serif", fontWeight: 700 }}>
            <LineReveal>
              <span className="block" style={{ color: PALETTE.text.primary }}>Something&apos;s been</span>
            </LineReveal>
            <LineReveal delay={0.1}>
              <span className="block" style={{ color: PALETTE.text.secondary }}>sitting in your</span>
            </LineReveal>
            <LineReveal delay={0.18}>
              <span className="block" style={{ color: PALETTE.text.primary }}>
                head long enough<span style={{ color: PALETTE.text.accent }}>.</span>
              </span>
            </LineReveal>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeReveal delay={0.3}>
            <p className="text-[16px] md:text-[17px] leading-[1.75] mb-10" style={{ color: PALETTE.text.secondary }}>
              Tell me about the project — what it is, what you need, and when you want it live. I&apos;ll respond within 24 hours.
            </p>
            <p className="text-[14px] leading-[1.7]" style={{ color: PALETTE.text.tertiary }}>
              Santo Domingo, Dominican Republic<br />
              Open to local &amp; international projects.
            </p>
          </FadeReveal>

          <FadeReveal delay={0.42}>
            <div className="flex flex-col gap-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/18092934827?text=Hola%20Weed%2C%20me%20interesa%20hablar%20sobre%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5"
                aria-label="Contact Weed Kerwing on WhatsApp"
              >
                <motion.div
                  className="relative h-16 w-16 shrink-0 rounded-full flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: PALETTE.text.accent }}
                  whileHover={reduce ? {} : { scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#060606" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.832L.057 23.885a.75.75 0 0 0 .921.914l6.233-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.715 9.715 0 0 1-4.96-1.358l-.355-.211-3.696.97.985-3.596-.231-.371A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                </motion.div>
                <div>
                  <span className="text-[18px] md:text-[20px] font-medium tracking-[-0.02em] block transition-colors duration-300 group-hover:opacity-80" style={{ color: PALETTE.text.primary }}>
                    Message on WhatsApp
                  </span>
                  <span className="text-[12px] tracking-[0.08em] uppercase block mt-0.5" style={{ color: PALETTE.text.tertiary }}>
                    Fastest response
                  </span>
                </div>
              </a>

              <div className="h-px" style={{ backgroundColor: PALETTE.border }} />

              {/* Instagram */}
              <a
                href="https://www.instagram.com/weeddoesitalll"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5"
                aria-label="Follow Weed Kerwing on Instagram"
              >
                <motion.div
                  className="h-16 w-16 shrink-0 rounded-full flex items-center justify-center"
                  style={{ border: `1px solid ${PALETTE.borderHover}`, backgroundColor: PALETTE.surface }}
                  whileHover={reduce ? {} : { scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <Instagram className="h-6 w-6" style={{ color: PALETTE.text.secondary }} />
                </motion.div>
                <div>
                  <span className="text-[18px] md:text-[20px] font-medium tracking-[-0.02em] block transition-colors duration-300 group-hover:opacity-80" style={{ color: PALETTE.text.primary }}>
                    @weeddoesitalll
                  </span>
                  <span className="text-[12px] tracking-[0.08em] uppercase block mt-0.5" style={{ color: PALETTE.text.tertiary }}>See the work</span>
                </div>
              </a>
            </div>
          </FadeReveal>

        </div>

        <FadeReveal delay={0.65}>
          <div className="mt-20 md:mt-28 h-px w-full" style={{ backgroundColor: PALETTE.border }} />
        </FadeReveal>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */

function Footer() {
  return (
    <footer className="border-t py-12 md:py-16" style={{ borderColor: PALETTE.border }}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <span className="text-[15px] font-medium tracking-[-0.02em]" style={{ color: PALETTE.text.primary, fontFamily: "var(--font-display), system-ui, sans-serif" }}>
              Weed Kerwing<span style={{ color: PALETTE.text.accent }}>.</span>
            </span>
          </div>
          <div className="flex items-center justify-start md:justify-center gap-8">
            {["Work", "Services", "About", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-[12px] tracking-[0.1em] uppercase transition-colors duration-300"
                style={{ color: PALETTE.text.tertiary }}
                onMouseEnter={(e) => (e.currentTarget.style.color = PALETTE.text.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = PALETTE.text.tertiary)}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-start md:justify-end gap-6">
            <a
              href="https://www.instagram.com/weeddoesitalll"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
              style={{ color: PALETTE.text.tertiary }}
              aria-label="Instagram"
              onMouseEnter={(e) => (e.currentTarget.style.color = PALETTE.text.primary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = PALETTE.text.tertiary)}
            >
              <Instagram className="h-[16px] w-[16px]" />
            </a>
            <span className="text-[11px] tracking-[0.08em]" style={{ color: PALETTE.text.tertiary }}>
              &copy; 2026
            </span>
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
        html { scroll-behavior: smooth; }

        body {
          font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (pointer: fine) {
          body, a, button, select, input, textarea { cursor: none; }
        }

        ::selection { background: rgba(200,255,0,0.2); color: #F5F0E8; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #060606; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.15); }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
        }

        /* Skip link */
        .skip-link {
          position: absolute;
          top: -100%;
          left: 1rem;
          z-index: 99999;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
          background: #C8FF00;
          color: #060606;
          transition: top 0.2s;
        }
        .skip-link:focus { top: 1rem; }
      `}</style>

      <div className="min-h-[100dvh] antialiased" style={{ backgroundColor: PALETTE.bg, color: PALETTE.text.primary }}>
        {/* Skip navigation */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        <GrainOverlay />
        <CursorFollower />
        <WhatsAppFloat />
        <Navbar />
        <Hero />
        <StatsStrip />
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
