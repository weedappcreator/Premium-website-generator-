"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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
  Send,
  Menu,
  X,
  Minus,
} from "lucide-react";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════════════
   DESIGN SYSTEM — Weed Kerwing Portfolio

   Philosophy: Editorial precision meets digital craft.
   Not a template. Not a theme. A deliberate artifact.

   Palette: Near-black layers + warm cream primary text +
            single electric accent used surgically
   Typography: Dramatic scale contrast — 12vw display vs 14px body
   Motion: Scroll-linked, physics-based, never decorative
   Grid: Asymmetric, full-bleed moments, generous whitespace
   Texture: Film grain overlay, organic gradients
   ═══════════════════════════════════════════════════════════════════ */

const PALETTE = {
  bg: "#060606",
  surface: "#0C0C0C",
  surfaceRaised: "#141414",
  border: "rgba(255,255,255,0.06)",
  borderHover: "rgba(255,255,255,0.12)",
  text: {
    primary: "#F5F0E8",     // warm cream — not pure white
    secondary: "#8A8578",   // warm gray
    tertiary: "#4A4640",    // subtle
    accent: "#C8FF00",      // electric lime — surgical use only
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
    name: "Launch",
    price: "29,000",
    subtitle: "One page. Full impact.",
    description: "For professionals and small businesses needing a strong first impression. Not a template — a designed, responsive, conversion-ready landing page.",
    includes: [
      "Custom landing page design",
      "Responsive across all devices",
      "Contact form + WhatsApp integration",
      "Basic SEO & performance",
      "Deployed & handed off",
    ],
  },
  {
    name: "Business",
    price: "59,000",
    featured: true,
    subtitle: "Your complete digital presence.",
    description: "For established businesses that need more than a page. A full website with custom visual direction, structured content, and lead capture — built to grow with you.",
    includes: [
      "Up to 6 custom-designed pages",
      "Unique visual direction",
      "Service & portfolio sections",
      "Lead capture & contact system",
      "Technical SEO & analytics",
    ],
  },
  {
    name: "Premium",
    price: "95,000",
    subtitle: "Refuse to look generic.",
    description: "For brands that understand the difference between a website and a digital experience. Custom interactions, advanced motion design, CMS integration, and post-launch support.",
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

/* ─── GRAIN OVERLAY ─── */

function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.035]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

/* ─── SMOOTH LINE REVEAL ─── */

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
        transition={{
          duration: 1.1,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
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
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── MAGNETIC ELEMENT ─── */

function useMagnetic(strength = 0.3) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * strength);
      y.set((e.clientY - cy) * strength);
    },
    [x, y, strength]
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, springX, springY, handleMouse, reset };
}

/* ─── CURSOR FOLLOWER ─── */

function CursorFollower() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 300, damping: 28 });
  const springY = useSpring(y, { stiffness: 300, damping: 28 });

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
      className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference hidden lg:block"
      style={{
        x: springX,
        y: springY,
        width: 12,
        height: 12,
        borderRadius: "50%",
        backgroundColor: PALETTE.text.primary,
        transform: "translate(-50%, -50%)",
      }}
    />
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
      >
        <div
          className={`transition-all duration-700 ${
            scrolled
              ? "bg-[#060606]/90 backdrop-blur-2xl border-b"
              : "bg-transparent border-b border-transparent"
          }`}
          style={scrolled ? { borderColor: PALETTE.border } : {}}
        >
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
            <div className="flex h-[76px] items-center justify-between">
              {/* Logo */}
              <a
                href="#"
                className="text-[15px] font-medium tracking-[-0.02em]"
                style={{ color: PALETTE.text.primary }}
              >
                Weed Kerwing
                <span className="inline-block ml-0.5" style={{ color: PALETTE.text.accent }}>
                  .
                </span>
              </a>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-12">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-[13px] tracking-[0.08em] uppercase transition-colors duration-300 hover:opacity-100"
                    style={{ color: PALETTE.text.tertiary }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = PALETTE.text.primary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = PALETTE.text.tertiary)}
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 text-[13px] tracking-[0.04em] uppercase transition-colors duration-300"
                style={{ color: PALETTE.text.accent }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: PALETTE.text.accent }} />
                Available for work
              </a>

              {/* Mobile toggle */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                style={{ color: PALETTE.text.primary }}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center px-8"
            style={{ backgroundColor: PALETTE.bg }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-4 text-[clamp(2rem,8vw,3.5rem)] font-medium tracking-[-0.03em]"
                style={{ color: PALETTE.text.primary }}
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 150]);
  const photoScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.15]);
  const photoRotate = useTransform(scrollYProgress, [0, 0.6], [0, -3]);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden pb-12 md:pb-16"
      style={reduce ? {} : { opacity: heroOpacity }}
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vh] rounded-full opacity-[0.04]"
          style={{
            background: `radial-gradient(circle, ${PALETTE.text.accent}, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-[-30%] left-[-15%] w-[60vw] h-[60vh] rounded-full opacity-[0.03]"
          style={{
            background: `radial-gradient(circle, #E8D5B7, transparent 70%)`,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative mx-auto max-w-[1440px] w-full px-6 md:px-10 lg:px-16"
        style={reduce ? {} : { y: heroY }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          {/* Left: Typography */}
          <div className="lg:col-span-8 xl:col-span-7">
            {/* Tag */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 md:mb-12"
            >
              <span
                className="text-[11px] md:text-[13px] tracking-[0.2em] uppercase"
                style={{ color: PALETTE.text.secondary }}
              >
                Digital Designer & Developer — Santo Domingo, DR
              </span>
            </motion.div>

            {/* Name — massive display */}
            <div className="mb-8 md:mb-10">
              <div className="overflow-hidden">
                <motion.h1
                  className="text-[clamp(3.5rem,12vw,10rem)] font-medium tracking-[-0.05em] leading-[0.85]"
                  style={{ color: PALETTE.text.primary }}
                  initial={reduce ? false : { y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Weed
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  className="text-[clamp(3.5rem,12vw,10rem)] font-medium tracking-[-0.05em] leading-[0.85]"
                  style={{ color: PALETTE.text.primary }}
                  initial={reduce ? false : { y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                >
                  Kerwing
                  <span style={{ color: PALETTE.text.accent }}>.</span>
                </motion.h1>
              </div>
            </div>

            {/* Descriptor */}
            <motion.p
              className="text-[clamp(1rem,2vw,1.25rem)] leading-[1.6] max-w-[38ch]"
              style={{ color: PALETTE.text.secondary }}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              I build digital experiences that make businesses look
              established, modern, and ready to grow.
            </motion.p>
          </div>

          {/* Right: Photo + meta */}
          <div className="lg:col-span-4 xl:col-span-5 flex flex-col items-start lg:items-end gap-8">
            {/* Photo — editorial crop, not a circle */}
            <motion.div
              className="relative w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px]"
              initial={reduce ? false : { opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              style={reduce ? {} : { scale: photoScale, rotate: photoRotate }}
            >
              {/* Subtle glow */}
              <div
                className="absolute -inset-8 rounded-[32px] opacity-30 blur-3xl"
                style={{ background: `linear-gradient(135deg, ${PALETTE.text.accent}15, transparent 60%)` }}
              />
              <div className="relative rounded-[20px] overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/weed-hero.png"
                  alt="Weed Kerwing"
                  fill
                  className="object-cover"
                  priority
                  fetchPriority="high"
                />
                {/* Film overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/60 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="flex items-center gap-3"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <motion.div
                className="w-px h-8"
                style={{ backgroundColor: PALETTE.text.tertiary }}
                animate={reduce ? {} : { scaleY: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span
                className="text-[11px] tracking-[0.15em] uppercase"
                style={{ color: PALETTE.text.tertiary }}
              >
                Scroll
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

/* ─── SELECTED WORK ─── */

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, amount: 0.15 });
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={reduce ? false : { opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="relative rounded-[24px] overflow-hidden transition-all duration-700"
          style={{
            backgroundColor: PALETTE.surface,
            border: `1px solid ${hovered ? PALETTE.borderHover : PALETTE.border}`,
          }}
        >
          {/* Spotlight effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10"
            style={{
              opacity: hovered ? 0.6 : 0,
              background: `radial-gradient(800px circle at ${mouseX.get()}px ${mouseY.get()}px, ${project.color}08, transparent 40%)`,
            }}
          />

          <div className="grid lg:grid-cols-12 gap-0">
            {/* Left: Project visual area */}
            <div className="lg:col-span-7 relative">
              <div
                className="relative h-[320px] md:h-[420px] lg:h-[520px] overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.color}10 0%, ${PALETTE.bg} 60%)`,
                }}
              >
                {/* Large project number */}
                <div
                  className="absolute top-8 left-8 md:top-12 md:left-12 text-[120px] md:text-[200px] font-medium leading-none tracking-[-0.06em] select-none"
                  style={{ color: `${project.color}08` }}
                >
                  {project.index}
                </div>

                {/* Centered project title — huge */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <motion.h3
                    className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium tracking-[-0.04em] text-center leading-[1.05]"
                    style={{ color: PALETTE.text.primary }}
                    animate={hovered && !reduce ? { scale: 1.03 } : { scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {project.title}
                  </motion.h3>
                </div>

                {/* Category badge */}
                <div className="absolute top-6 right-6 md:top-10 md:right-10">
                  <span
                    className="text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: `${project.color}12`,
                      color: project.color,
                      border: `1px solid ${project.color}20`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Arrow — bottom right */}
                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
                  <motion.div
                    className="h-14 w-14 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: `${PALETTE.text.primary}08`,
                      border: `1px solid ${PALETTE.border}`,
                    }}
                    animate={hovered && !reduce ? { scale: 1.15 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45"
                      style={{ color: PALETTE.text.primary }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right: Project details */}
            <div className="lg:col-span-5 p-8 md:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-[11px] tracking-[0.15em] uppercase"
                    style={{ color: PALETTE.text.tertiary }}
                  >
                    Project {project.index}
                  </span>
                  <span
                    className="text-[11px] tracking-[0.15em] uppercase"
                    style={{ color: PALETTE.text.tertiary }}
                  >
                    {project.year}
                  </span>
                </div>

                <p
                  className="text-[15px] leading-[1.7] mb-8"
                  style={{ color: PALETTE.text.secondary }}
                >
                  {project.description}
                </p>
              </div>

              {/* Scope tags */}
              <div>
                <div
                  className="h-px w-full mb-6"
                  style={{ backgroundColor: PALETTE.border }}
                />
                <div className="flex flex-wrap gap-2">
                  {project.scope.map((s) => (
                    <span
                      key={s}
                      className="text-[12px] px-3 py-1.5 rounded-full transition-all duration-300 group-hover:border-opacity-100"
                      style={{
                        color: PALETTE.text.tertiary,
                        border: `1px solid ${PALETTE.border}`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-end justify-between">
            <div>
              <LineReveal>
                <span
                  className="text-[11px] tracking-[0.2em] uppercase block mb-4"
                  style={{ color: PALETTE.text.tertiary }}
                >
                  Selected Projects
                </span>
              </LineReveal>
              <LineReveal delay={0.1}>
                <h2
                  className="text-[clamp(2.5rem,6vw,5rem)] font-medium tracking-[-0.04em] leading-[1]"
                  style={{ color: PALETTE.text.primary }}
                >
                  Work
                </h2>
              </LineReveal>
            </div>
            <LineReveal delay={0.2}>
              <span
                className="hidden md:block text-[13px] tracking-[0.1em] uppercase"
                style={{ color: PALETTE.text.tertiary }}
              >
                2026
              </span>
            </LineReveal>
          </div>
          <motion.div
            className="h-px w-full mt-8"
            style={{ backgroundColor: PALETTE.border }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Projects */}
        <div className="space-y-10 md:space-y-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CAPABILITIES / WHAT I DO ─── */

function Capabilities() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: label */}
          <div className="lg:col-span-4">
            <LineReveal>
              <span
                className="text-[11px] tracking-[0.2em] uppercase block mb-4"
                style={{ color: PALETTE.text.tertiary }}
              >
                Capabilities
              </span>
            </LineReveal>
            <LineReveal delay={0.1}>
              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.03em] leading-[1.1]"
                style={{ color: PALETTE.text.primary }}
              >
                What I do
              </h2>
            </LineReveal>
            <FadeReveal delay={0.3}>
              <p
                className="mt-6 text-[15px] leading-[1.7] max-w-[34ch]"
                style={{ color: PALETTE.text.secondary }}
              >
                End-to-end digital craft — from initial strategy through design,
                development, and launch. Every project is built, not assembled.
              </p>
            </FadeReveal>
          </div>

          {/* Right: capabilities list */}
          <div className="lg:col-span-8">
            <div>
              {capabilities.map((cap, i) => (
                <FadeReveal key={cap} delay={i * 0.06}>
                  <div
                    className="group flex items-center justify-between py-5 md:py-6 border-b transition-colors duration-500 cursor-default"
                    style={{ borderColor: PALETTE.border }}
                  >
                    <div className="flex items-center gap-6">
                      <span
                        className="text-[11px] tabular-nums tracking-wider"
                        style={{ color: PALETTE.text.tertiary }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="text-[clamp(1rem,2.5vw,1.5rem)] font-medium tracking-[-0.02em] transition-colors duration-500 group-hover:translate-x-2"
                        style={{
                          color: PALETTE.text.secondary,
                          transition: "color 0.5s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = PALETTE.text.primary)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = PALETTE.text.secondary)}
                      >
                        {cap}
                      </span>
                    </div>
                    <Minus
                      className="h-4 w-4 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:rotate-90"
                      style={{ color: PALETTE.text.accent }}
                    />
                  </div>
                </FadeReveal>
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
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Photo — editorial treatment */}
          <FadeReveal className="lg:col-span-5">
            <motion.div
              className="relative"
              style={reduce ? {} : { y: imageY }}
            >
              <div className="relative rounded-[20px] overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/weed-about.png"
                  alt="Weed Kerwing"
                  fill
                  className="object-cover"
                />
                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/40 via-transparent to-[#060606]/20" />
              </div>
              {/* Caption */}
              <div className="mt-4 flex items-center justify-between">
                <span
                  className="text-[11px] tracking-[0.15em] uppercase"
                  style={{ color: PALETTE.text.tertiary }}
                >
                  Santo Domingo, DR
                </span>
                <span
                  className="text-[11px] tracking-[0.15em] uppercase"
                  style={{ color: PALETTE.text.tertiary }}
                >
                  Est. 2026
                </span>
              </div>
            </motion.div>
          </FadeReveal>

          {/* Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <LineReveal>
              <span
                className="text-[11px] tracking-[0.2em] uppercase block mb-4"
                style={{ color: PALETTE.text.tertiary }}
              >
                About
              </span>
            </LineReveal>
            <LineReveal delay={0.1}>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-[-0.04em] leading-[1.1] mb-10"
                style={{ color: PALETTE.text.primary }}
              >
                I don&apos;t make websites.
                <br />
                <span style={{ color: PALETTE.text.secondary }}>
                  I make businesses look real.
                </span>
              </h2>
            </LineReveal>

            <div className="space-y-6">
              <FadeReveal delay={0.2}>
                <p
                  className="text-[16px] md:text-[17px] leading-[1.75] max-w-[52ch]"
                  style={{ color: PALETTE.text.secondary }}
                >
                  I design and build premium websites, digital products, and AI-powered
                  experiences that help businesses establish a stronger presence,
                  communicate their value, and convert visitors into customers.
                </p>
              </FadeReveal>
              <FadeReveal delay={0.3}>
                <p
                  className="text-[16px] md:text-[17px] leading-[1.75] max-w-[52ch]"
                  style={{ color: PALETTE.text.secondary }}
                >
                  I combine strategy, visual design, development, automation, and
                  artificial intelligence to take projects from concept to a live,
                  functional product — not a mockup, not a prototype, a real thing
                  that works.
                </p>
              </FadeReveal>
              <FadeReveal delay={0.4}>
                <p
                  className="text-[16px] md:text-[17px] leading-[1.75] max-w-[52ch]"
                  style={{ color: PALETTE.text.secondary }}
                >
                  Based in the Dominican Republic. Working with local businesses and
                  international clients who need more than a template.
                </p>
              </FadeReveal>
            </div>

            {/* Social */}
            <FadeReveal delay={0.5}>
              <div className="mt-12">
                <a
                  href="https://www.instagram.com/weeddoesitalll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 transition-all duration-300"
                >
                  <div
                    className="h-12 w-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: `${PALETTE.text.primary}06`,
                      border: `1px solid ${PALETTE.border}`,
                    }}
                  >
                    <Instagram className="h-[18px] w-[18px]" style={{ color: PALETTE.text.secondary }} />
                  </div>
                  <div>
                    <span
                      className="text-[14px] font-medium block transition-colors duration-300"
                      style={{ color: PALETTE.text.primary }}
                    >
                      @weeddoesitalll
                    </span>
                    <span
                      className="text-[12px] block"
                      style={{ color: PALETTE.text.tertiary }}
                    >
                      Follow the work
                    </span>
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

/* ─── SERVICES & PRICING ─── */

function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    <section id="services" className="py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <LineReveal>
            <span
              className="text-[11px] tracking-[0.2em] uppercase block mb-4"
              style={{ color: PALETTE.text.tertiary }}
            >
              Services & Pricing
            </span>
          </LineReveal>
          <LineReveal delay={0.1}>
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] font-medium tracking-[-0.04em] leading-[1]"
              style={{ color: PALETTE.text.primary }}
            >
              Three tiers.
              <br />
              <span style={{ color: PALETTE.text.secondary }}>
                Zero templates.
              </span>
            </h2>
          </LineReveal>
          <FadeReveal delay={0.3}>
            <p
              className="mt-6 text-[15px] leading-[1.7] max-w-[48ch]"
              style={{ color: PALETTE.text.secondary }}
            >
              Starting prices in Dominican pesos. Final quote depends on scope,
              complexity, integrations, and timeline. Every project is custom.
            </p>
          </FadeReveal>
        </div>

        {/* Pricing — accordion style */}
        <div>
          {services.map((pkg, i) => (
            <FadeReveal key={pkg.name} delay={i * 0.1}>
              <div
                className="border-t transition-all duration-500 cursor-pointer"
                style={{ borderColor: PALETTE.border }}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <div className="py-8 md:py-10">
                  {/* Collapsed row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 md:gap-10">
                      <span
                        className="text-[11px] tracking-[0.15em] uppercase tabular-nums"
                        style={{ color: PALETTE.text.tertiary }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3
                          className="text-[clamp(1.25rem,3vw,2rem)] font-medium tracking-[-0.02em]"
                          style={{ color: activeIndex === i ? PALETTE.text.primary : PALETTE.text.secondary }}
                        >
                          {pkg.name}
                          {pkg.featured && (
                            <span
                              className="ml-3 text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full align-middle"
                              style={{
                                backgroundColor: `${PALETTE.text.accent}15`,
                                color: PALETTE.text.accent,
                              }}
                            >
                              Popular
                            </span>
                          )}
                        </h3>
                        <span
                          className="text-[13px] mt-1 block"
                          style={{ color: PALETTE.text.tertiary }}
                        >
                          {pkg.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 md:gap-10">
                      <div className="text-right hidden sm:block">
                        <span
                          className="text-[11px] block"
                          style={{ color: PALETTE.text.tertiary }}
                        >
                          From
                        </span>
                        <span
                          className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium tracking-[-0.02em]"
                          style={{ color: PALETTE.text.primary }}
                        >
                          RD${pkg.price}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: activeIndex === i ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div
                          className="h-8 w-8 rounded-full flex items-center justify-center text-lg"
                          style={{
                            border: `1px solid ${PALETTE.border}`,
                            color: PALETTE.text.secondary,
                          }}
                        >
                          +
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 grid md:grid-cols-2 gap-8 md:gap-16 pl-0 md:pl-[calc(11px+2.5rem)]">
                          <p
                            className="text-[15px] leading-[1.7]"
                            style={{ color: PALETTE.text.secondary }}
                          >
                            {pkg.description}
                          </p>
                          <div>
                            <span
                              className="text-[11px] tracking-[0.15em] uppercase block mb-4"
                              style={{ color: PALETTE.text.tertiary }}
                            >
                              Includes
                            </span>
                            <ul className="space-y-3">
                              {pkg.includes.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                  <span
                                    className="mt-2 h-1 w-1 rounded-full shrink-0"
                                    style={{ backgroundColor: PALETTE.text.accent }}
                                  />
                                  <span
                                    className="text-[14px]"
                                    style={{ color: PALETTE.text.secondary }}
                                  >
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>

                            <div className="mt-8 sm:hidden">
                              <span
                                className="text-[11px] block"
                                style={{ color: PALETTE.text.tertiary }}
                              >
                                Starting from
                              </span>
                              <span
                                className="text-2xl font-medium tracking-[-0.02em]"
                                style={{ color: PALETTE.text.primary }}
                              >
                                RD${pkg.price}
                              </span>
                            </div>

                            <a
                              href="#contact"
                              className="inline-flex items-center gap-2 mt-8 text-[13px] tracking-[0.04em] uppercase transition-all duration-300 group"
                              style={{ color: PALETTE.text.accent }}
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
              </div>
            </FadeReveal>
          ))}
          {/* Bottom border */}
          <div className="border-t" style={{ borderColor: PALETTE.border }} />
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Background accent glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-[-40%] left-[20%] w-[60vw] h-[60vh] rounded-full opacity-[0.03]"
          style={{ background: `radial-gradient(circle, ${PALETTE.text.accent}, transparent 70%)` }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Big CTA heading */}
        <div className="mb-16 md:mb-24">
          <LineReveal>
            <span
              className="text-[11px] tracking-[0.2em] uppercase block mb-4"
              style={{ color: PALETTE.text.tertiary }}
            >
              Let&apos;s work together
            </span>
          </LineReveal>
          <LineReveal delay={0.1}>
            <h2
              className="text-[clamp(2.5rem,7vw,6rem)] font-medium tracking-[-0.04em] leading-[1]"
              style={{ color: PALETTE.text.primary }}
            >
              Have a project
            </h2>
          </LineReveal>
          <LineReveal delay={0.2}>
            <h2
              className="text-[clamp(2.5rem,7vw,6rem)] font-medium tracking-[-0.04em] leading-[1]"
              style={{ color: PALETTE.text.secondary }}
            >
              in mind?
            </h2>
          </LineReveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: Info */}
          <div className="lg:col-span-4">
            <FadeReveal>
              <p
                className="text-[16px] leading-[1.75] mb-10"
                style={{ color: PALETTE.text.secondary }}
              >
                I help businesses transform ideas into polished, functional, and
                commercially focused digital experiences. Tell me what you need.
              </p>
            </FadeReveal>

            <FadeReveal delay={0.15}>
              <div className="space-y-6">
                <a
                  href="https://www.instagram.com/weeddoesitalll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 transition-all duration-300"
                >
                  <div
                    className="h-11 w-11 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{
                      border: `1px solid ${PALETTE.border}`,
                    }}
                  >
                    <Instagram className="h-[16px] w-[16px]" style={{ color: PALETTE.text.secondary }} />
                  </div>
                  <div>
                    <span className="text-[13px] block" style={{ color: PALETTE.text.primary }}>
                      @weeddoesitalll
                    </span>
                    <span className="text-[11px] block" style={{ color: PALETTE.text.tertiary }}>
                      Instagram
                    </span>
                  </div>
                </a>
              </div>
            </FadeReveal>

            <FadeReveal delay={0.25}>
              <div className="mt-10 flex items-center gap-3">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ backgroundColor: PALETTE.text.accent }}
                />
                <span className="text-[13px]" style={{ color: PALETTE.text.accent }}>
                  Currently accepting new projects
                </span>
              </div>
            </FadeReveal>
          </div>

          {/* Right: Form */}
          <FadeReveal delay={0.2} className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="flex items-center justify-center min-h-[400px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-8"
                      style={{ backgroundColor: `${PALETTE.text.accent}12` }}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <Send className="h-7 w-7" style={{ color: PALETTE.text.accent }} />
                    </motion.div>
                    <h3
                      className="text-2xl font-medium mb-3 tracking-[-0.02em]"
                      style={{ color: PALETTE.text.primary }}
                    >
                      Message sent
                    </h3>
                    <p className="text-[15px]" style={{ color: PALETTE.text.secondary }}>
                      I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[12px] tracking-[0.1em] uppercase mb-3"
                        style={{ color: PALETTE.text.tertiary }}
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full bg-transparent border-b pb-3 text-[15px] outline-none transition-all duration-300 focus:border-opacity-100 placeholder:opacity-30"
                        style={{
                          color: PALETTE.text.primary,
                          borderColor: PALETTE.border,
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = PALETTE.text.accent)}
                        onBlur={(e) => (e.currentTarget.style.borderColor = PALETTE.border)}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[12px] tracking-[0.1em] uppercase mb-3"
                        style={{ color: PALETTE.text.tertiary }}
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full bg-transparent border-b pb-3 text-[15px] outline-none transition-all duration-300 placeholder:opacity-30"
                        style={{
                          color: PALETTE.text.primary,
                          borderColor: PALETTE.border,
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = PALETTE.text.accent)}
                        onBlur={(e) => (e.currentTarget.style.borderColor = PALETTE.border)}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-[12px] tracking-[0.1em] uppercase mb-3"
                      style={{ color: PALETTE.text.tertiary }}
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-transparent border-b pb-3 text-[15px] outline-none transition-all duration-300 appearance-none cursor-pointer"
                      style={{
                        color: PALETTE.text.secondary,
                        borderColor: PALETTE.border,
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = PALETTE.text.accent)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = PALETTE.border)}
                    >
                      <option value="">Select a service...</option>
                      <option value="launch">Launch — Landing Page (RD$29K+)</option>
                      <option value="business">Business — Full Website (RD$59K+)</option>
                      <option value="premium">Premium — Custom Experience (RD$95K+)</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[12px] tracking-[0.1em] uppercase mb-3"
                      style={{ color: PALETTE.text.tertiary }}
                    >
                      Tell me about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-transparent border-b pb-3 text-[15px] outline-none transition-all duration-300 resize-none placeholder:opacity-30"
                      style={{
                        color: PALETTE.text.primary,
                        borderColor: PALETTE.border,
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = PALETTE.text.accent)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = PALETTE.border)}
                      placeholder="Your goals, timeline, and anything else I should know..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-4 transition-all duration-500"
                    >
                      <span
                        className="h-14 w-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                        style={{
                          backgroundColor: PALETTE.text.accent,
                        }}
                      >
                        <ArrowRight className="h-5 w-5 text-[#060606] transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                      <span
                        className="text-[15px] font-medium tracking-[-0.01em]"
                        style={{ color: PALETTE.text.primary }}
                      >
                        Send message
                      </span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeReveal>
        </div>
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
          {/* Left: Logo */}
          <div>
            <span
              className="text-[15px] font-medium tracking-[-0.02em]"
              style={{ color: PALETTE.text.primary }}
            >
              Weed Kerwing
              <span style={{ color: PALETTE.text.accent }}>.</span>
            </span>
          </div>

          {/* Center: Links */}
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

          {/* Right: Copyright + Social */}
          <div className="flex items-center justify-start md:justify-end gap-6">
            <a
              href="https://www.instagram.com/weeddoesitalll"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
              style={{ color: PALETTE.text.tertiary }}
              onMouseEnter={(e) => (e.currentTarget.style.color = PALETTE.text.primary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = PALETTE.text.tertiary)}
              aria-label="Instagram"
            >
              <Instagram className="h-[16px] w-[16px]" />
            </a>
            <span
              className="text-[11px] tracking-[0.08em]"
              style={{ color: PALETTE.text.tertiary }}
            >
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          cursor: none;
        }

        @media (max-width: 1024px) {
          body { cursor: auto; }
        }

        a, button, select, input, textarea {
          cursor: none;
        }

        @media (max-width: 1024px) {
          a, button, select, input, textarea { cursor: auto; }
        }

        ::selection {
          background: rgba(200, 255, 0, 0.2);
          color: #F5F0E8;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #060606;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          body { cursor: auto !important; }
          a, button, select, input, textarea { cursor: auto !important; }
        }
      `}</style>

      <div
        className="min-h-[100dvh] antialiased"
        style={{
          backgroundColor: PALETTE.bg,
          color: PALETTE.text.primary,
        }}
      >
        <GrainOverlay />
        <CursorFollower />
        <Navbar />
        <Hero />
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
