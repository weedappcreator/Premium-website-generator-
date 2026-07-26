"use client";

/* ═══════════════════════════════════════════════════════════════════
   WEED KERWING PORTFOLIO — v5
   All English. Number: 8298590927.

   NEW in v5:
   1. Scroll progress bar (accent, top of viewport)
   2. 3D perspective tilt on project rows (mouse tracking)
   3. Clip-path wipe reveal on About photo
   4. Active section highlight in navbar
   5. Work section background color shift on hover
   6. Number scramble before count animation
   7. Horizontal marquee on contact section
   8. Character-by-character reveal on contact headline
   9. Scale + blur entrance on hero photo
   10. Stagger wave on capabilities list
   11. Enhanced line draw on all dividers
   12. Magnetic on all CTA links
   ═══════════════════════════════════════════════════════════════════ */

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
import { ArrowRight, ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import Image from "next/image";

/* ─── TOKENS ─── */
const D = {
  bg: "#080808",
  surface: "#0E0E0E",
  surfaceHigh: "#141414",
  border: "rgba(255,255,255,0.07)",
  borderHover: "rgba(255,255,255,0.14)",
  text: { hi: "#F4F4F4", mid: "#888888", lo: "#4A4A4A", accent: "#E5FF4D", accentDim: "rgba(229,255,77,0.12)" },
  font: { display: "var(--font-display), system-ui, sans-serif", mono: "var(--font-mono), monospace" },
  ease: [0.22, 1, 0.36, 1] as const,
};

/* ─── DATA ─── */
const WA = "8298590927";
const WA_URL = `https://wa.me/${WA}?text=Hi%20Weed%2C%20I%27m%20interested%20in%20working%20together`;

const projects = [
  {
    id: "landhar", title: "Landhar Homes", category: "Construction & Property", year: "2026", idx: "01",
    tagline: "Built to establish trust before the first handshake.",
    description: "A construction company needed to feel established before they had ten years of history. Cinematic galleries, conversion-focused layouts, and a visual language that says: we build things that last.",
    scope: ["Strategy", "UI/UX", "Development", "Lead Generation"],
    url: "https://landhar-homes.vercel.app", accent: "#4ADE80",
  },
  {
    id: "taconazo", title: "Taconazo24", category: "Food Brand & E-Commerce", year: "2026", idx: "02",
    tagline: "Every design decision calibrated to trigger appetite.",
    description: "A 24-hour taqueria that needed a website as bold as their food. Color, motion, spacing — all tuned to drive orders. Mobile-first, because their customers decide in the street, right now.",
    scope: ["Brand Direction", "Visual Design", "Development", "Menu UX"],
    url: "https://taconazo24.vercel.app", accent: "#FB923C",
  },
];

const services = [
  {
    name: "Launch", sub: "One page. No excuses.", price: "29,000",
    desc: "For businesses that need to look credible before they feel ready. A single, conversion-focused page built from scratch — not assembled from a template.",
    includes: ["Custom landing page design", "Responsive across all devices", "Contact form + WhatsApp CTA", "SEO & performance baseline", "Deployment & handoff"],
  },
  {
    name: "Presence", sub: "Built for the long run.", price: "59,000", featured: true,
    desc: "For established businesses that have outgrown a single page. A full digital presence with real visual direction, structured content, and a lead system that works.",
    includes: ["Up to 6 custom-designed pages", "Distinct visual direction", "Service & portfolio sections", "Lead capture & contact system", "Technical SEO & analytics"],
  },
  {
    name: "Premium", sub: "When the bar is higher than everyone else's.", price: "95,000",
    desc: "For brands that understand the difference between a website and an experience. Custom motion, CMS integration, conversion strategy, 30 days of post-launch support.",
    includes: ["Custom UI/UX from scratch", "Advanced motion design", "CMS integration", "Conversion strategy", "30-day post-launch support"],
  },
];

const capabilities = [
  "Website Strategy", "UI/UX Design", "Responsive Development",
  "Landing Pages", "Corporate Websites", "E-Commerce",
  "AI-Powered Creation", "Brand Direction", "Interactive Experiences", "Performance Optimization",
];

/* ═══════════════════════════════════════════════════════════════════
   ANIMATION PRIMITIVES
   ═══════════════════════════════════════════════════════════════════ */

/* Magnetic hook */
function useMagnet(strength = 0.4) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const ref = useRef<HTMLDivElement>(null);
  const move = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }, [x, y, strength]);
  const reset = useCallback(() => { x.set(0); y.set(0); }, [x, y]);
  return { ref, sx, sy, move, reset };
}

/* Word-by-word reveal */
function WordReveal({ text, className = "", delay = 0, style = {} }: {
  text: string; className?: string; delay?: number; style?: React.CSSProperties;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <span ref={ref} className={className} style={style}>
      {text.split(" ").map((w, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.27em" }}>
          <motion.span style={{ display: "inline-block" }}
            initial={reduce ? false : { y: "110%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 0.85, delay: delay + i * 0.08, ease: D.ease }}>
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Character-by-character reveal (for contact headline) */
function CharReveal({ text, className = "", delay = 0, style = {} }: {
  text: string; className?: string; delay?: number; style?: React.CSSProperties;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <span ref={ref} className={className} style={style}>
      {text.split("").map((ch, i) => (
        <motion.span key={i} style={{ display: "inline-block", whiteSpace: ch === " " ? "pre" : undefined }}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + i * 0.025, ease: D.ease }}>
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

/* Fade-up on scroll */
function Up({ children, className = "", delay = 0, style = {} }: {
  children: React.ReactNode; className?: string; delay?: number; style?: React.CSSProperties;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} className={className} style={style}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: D.ease }}>
      {children}
    </motion.div>
  );
}

/* Line draw */
function Line({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.div ref={ref} className={`h-px ${className}`}
      style={{ backgroundColor: D.border, transformOrigin: "left" }}
      initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 1.3, delay, ease: D.ease }} />
  );
}

/* Scramble counter */
function ScrambleCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  const chars = "0123456789";

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const dur = 1600;
    let frame: number;
    const tick = () => {
      const t = Math.min((Date.now() - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const val = Math.round(ease * to);
      if (t < 0.7) {
        // scramble phase
        setDisplay(String(val).split("").map((d, i) => i < String(val).length - 1 ? d : chars[Math.floor(Math.random() * chars.length)]).join(""));
      } else {
        setDisplay(String(val));
      }
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return <span ref={ref}>{display}{suffix}</span>;
}

/* ─── GLOBAL ELEMENTS ─── */

/* Scroll progress bar */
function ProgressBar() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  if (reduce) return null;
  return (
    <motion.div className="fixed top-0 left-0 right-0 h-[2px] z-[99999] origin-left"
      style={{ backgroundColor: D.text.accent, scaleX: scrollYProgress }} />
  );
}

/* Grain */
function Grain() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat", backgroundSize: "160px",
      }} />
  );
}

/* Cursor ring */
function Cursor() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(-100), my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 320, damping: 28 });
  const sy = useSpring(my, { stiffness: 320, damping: 28 });
  useEffect(() => {
    if (reduce) return;
    const h = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mx, my, reduce]);
  if (reduce) return null;
  return (
    <motion.div aria-hidden
      className="fixed top-0 left-0 pointer-events-none z-[9998] hidden lg:block mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%", width: 28, height: 28, borderRadius: "50%", border: `1px solid rgba(244,244,244,0.65)` }} />
  );
}

/* WhatsApp float */
function WAFloat() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => { const t = setTimeout(() => setShow(true), 2800); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
          className="fixed bottom-6 right-6 z-[9990] h-[52px] w-[52px] rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: D.text.accent }}
          initial={reduce ? false : { scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={reduce ? {} : { scale: 1.1 }}>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#080808" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.832L.057 23.885a.75.75 0 0 0 .921.914l6.233-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.715 9.715 0 0 1-4.96-1.358l-.355-.211-3.696.97.985-3.596-.231-.371A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   NAVBAR with active section detection
   ═══════════════════════════════════════════════════════════════════ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = ["work", "services", "about", "contact"];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(id); }, { threshold: 0.3 });
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const links = [
    { l: "Work", h: "#work", id: "work" }, { l: "Services", h: "#services", id: "services" },
    { l: "About", h: "#about", id: "about" }, { l: "Contact", h: "#contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav className="fixed top-0 left-0 right-0 z-50"
        initial={reduce ? false : { y: -80 }} animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 1.8, ease: D.ease }}
        aria-label="Main navigation">
        <div style={{
          backgroundColor: scrolled ? `${D.bg}EC` : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? `1px solid ${D.border}` : "1px solid transparent",
          transition: "all 0.4s",
        }}>
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 flex h-[68px] items-center justify-between">
            <a href="#" className="text-[15px] font-bold tracking-[-0.02em] transition-opacity hover:opacity-60"
              style={{ fontFamily: D.font.display, color: D.text.hi }}>
              WK<span style={{ color: D.text.accent }}>.</span>
            </a>
            <div className="hidden md:flex items-center gap-9">
              {links.map(l => (
                <a key={l.h} href={l.h}
                  className="relative text-[13px] tracking-[0.06em] uppercase transition-colors duration-200"
                  style={{ fontFamily: D.font.display, fontWeight: 500, color: active === l.id ? D.text.hi : D.text.lo }}>
                  {active === l.id && (
                    <motion.span layoutId="nav-dot"
                      className="absolute -left-3 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: D.text.accent }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                  )}
                  {l.l}
                </a>
              ))}
            </div>
            <NavCTA />
            <button className="md:hidden p-1.5" onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
              style={{ color: D.text.hi }}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-40 flex flex-col justify-center px-8"
            style={{ backgroundColor: D.bg }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            role="dialog" aria-modal aria-label="Mobile navigation">
            {links.map((l, i) => (
              <motion.a key={l.h} href={l.h} onClick={() => setOpen(false)}
                className="block py-5 text-[clamp(2rem,8vw,3.5rem)] font-bold tracking-[-0.04em]"
                style={{ fontFamily: D.font.display, color: D.text.hi }}
                initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: D.ease }}>
                {l.l}
              </motion.a>
            ))}
            <div className="absolute bottom-8 left-8 text-[11px] tracking-[0.16em] uppercase"
              style={{ color: D.text.lo, fontFamily: D.font.mono }}>
              Santo Domingo, DR
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavCTA() {
  const reduce = useReducedMotion();
  const { ref, sx, sy, move, reset } = useMagnet(0.35);
  if (reduce) return (
    <a href="#contact"
      className="hidden md:inline-flex items-center gap-2 text-[13px] font-bold px-5 py-2 rounded-full"
      style={{ fontFamily: D.font.display, backgroundColor: D.text.accent, color: D.bg }}>
      Start a project
    </a>
  );
  return (
    <motion.div ref={ref} onMouseMove={move} onMouseLeave={reset} style={{ x: sx, y: sy }} className="hidden md:block">
      <a href="#contact"
        className="inline-flex items-center gap-2 text-[13px] font-bold px-5 py-2 rounded-full transition-opacity hover:opacity-90"
        style={{ fontFamily: D.font.display, backgroundColor: D.text.accent, color: D.bg }}>
        Start a project
      </a>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════════ */
function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="main-content" ref={ref}
      className="relative min-h-[100dvh] flex flex-col overflow-hidden"
      style={{ backgroundColor: D.bg }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 55% 40% at 50% 100%, ${D.text.accent}0B 0%, transparent 60%)`,
      }} />

      {/* Photo — scale + blur entrance, parallax exit */}
      <motion.div className="absolute top-0 right-0 h-full pointer-events-none"
        style={{ width: "clamp(200px, 34vw, 520px)", y: reduce ? 0 : photoY, scale: reduce ? 1 : photoScale }}
        initial={reduce ? false : { opacity: 0, scale: 1.12, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, delay: 0.2, ease: D.ease }}>
        <div aria-hidden className="absolute inset-0 z-10" style={{
          background: `linear-gradient(to right, ${D.bg} 0%, ${D.bg}CC 5%, transparent 22%)`,
        }} />
        <div aria-hidden className="absolute inset-0 z-10" style={{
          background: `linear-gradient(to top, ${D.bg} 0%, transparent 22%)`,
        }} />
        <div aria-hidden className="absolute inset-0 z-10" style={{
          background: `linear-gradient(to bottom, ${D.bg} 0%, transparent 14%)`,
        }} />
        <Image src="/images/weed-hero.png"
          alt="Weed Kerwing — Digital Designer and Developer based in Santo Domingo, Dominican Republic"
          fill className="object-cover object-top" priority fetchPriority="high"
          sizes="(max-width: 768px) 55vw, 34vw" />
      </motion.div>

      {/* Content */}
      <motion.div className="relative z-10 flex flex-col justify-end flex-1 pb-12 md:pb-16"
        style={reduce ? {} : { y: textY, opacity }}>
        <div className="mx-auto max-w-[1440px] w-full px-6 md:px-10 lg:px-16">
          <Up delay={0.1}>
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <motion.div className="h-px w-8" style={{ backgroundColor: D.text.accent }}
                initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }} />
              <span className="text-[11px] tracking-[0.24em] uppercase"
                style={{ fontFamily: D.font.mono, color: D.text.lo }}>
                Digital Designer & Developer — Santo Domingo, DR
              </span>
            </div>
          </Up>

          <h1 className="mb-10 md:mb-14" style={{ fontFamily: D.font.display, fontWeight: 800, lineHeight: 0.86, letterSpacing: "-0.04em" }}>
            <WordReveal text="Weed" delay={0.3} style={{ fontSize: "clamp(4.5rem, 14vw, 13.5rem)", color: D.text.hi, display: "block" }} />
            <div style={{ display: "block" }}>
              <WordReveal text="Kerwing" delay={0.55} style={{ fontSize: "clamp(4.5rem, 14vw, 13.5rem)", color: D.text.hi }} />
              <motion.span style={{ color: D.text.accent, fontSize: "clamp(4.5rem, 14vw, 13.5rem)", display: "inline-block" }}
                initial={reduce ? false : { opacity: 0, scale: 0.4, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: D.ease }}>.</motion.span>
            </div>
          </h1>

          <Up delay={1.1}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <p className="max-w-[36ch] leading-[1.68]"
                style={{ fontFamily: D.font.display, fontWeight: 300, fontSize: "clamp(1rem,1.7vw,1.15rem)", color: D.text.mid }}>
                Most websites explain what a business does.
                Mine make people want to buy from it.
              </p>
              <a href="#work"
                className="group inline-flex items-center gap-2 shrink-0 text-[12px] tracking-[0.1em] uppercase font-bold transition-opacity hover:opacity-70"
                style={{ fontFamily: D.font.display, color: D.text.accent }}>
                See the work
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.span>
              </a>
            </div>
          </Up>
        </div>
      </motion.div>
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: D.border }} />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   STATS — scramble counter
   ═══════════════════════════════════════════════════════════════════ */
function Stats() {
  const items = [
    { label: "Projects shipped", n: 12, suffix: "+" },
    { label: "Years building", n: 2, suffix: "+" },
    { label: "Custom built", n: 100, suffix: "%" },
    { label: "Based in SDQ", n: 1, suffix: " studio" },
  ];
  return (
    <section aria-label="Key statistics"
      style={{ backgroundColor: D.surface, borderBottom: `1px solid ${D.border}` }}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 grid grid-cols-2 md:grid-cols-4">
        {items.map((s, i) => (
          <Up key={s.label} delay={i * 0.07}
            className={`py-8 flex flex-col gap-2 ${i < items.length - 1 ? "border-r" : ""}`}
            style={{ borderColor: D.border }}>
            <span style={{ fontFamily: D.font.display, fontWeight: 700, fontSize: "clamp(1.8rem,3.5vw,3rem)", lineHeight: 1, letterSpacing: "-0.04em", color: D.text.hi }}>
              <ScrambleCounter to={s.n} suffix={s.suffix} />
            </span>
            <span className="text-[11px] tracking-[0.14em] uppercase"
              style={{ fontFamily: D.font.display, fontWeight: 400, color: D.text.lo }}>
              {s.label}
            </span>
          </Up>
        ))}
      </div>
    </section>
  );
}

/* MARQUEE */
function Marquee() {
  const reduce = useReducedMotion();
  const caps = ["Strategy", "UI/UX Design", "Development", "Landing Pages", "E-Commerce", "Brand Direction", "Motion Design", "AI-Powered", "Performance"];
  const all = [...caps, ...caps, ...caps];
  return (
    <div aria-hidden className="overflow-hidden py-4 border-b" style={{ backgroundColor: D.bg, borderColor: D.border }}>
      <div className="flex gap-10 whitespace-nowrap"
        style={{ animation: reduce ? "none" : "wk-ticker 40s linear infinite", width: "max-content" }}>
        {all.map((c, i) => (
          <span key={i} className="flex items-center gap-10 text-[11px] tracking-[0.2em] uppercase"
            style={{ fontFamily: D.font.display, fontWeight: 500, color: D.text.lo }}>
            {c}
            <span style={{ color: D.text.accent, fontSize: 4 }}>◆</span>
          </span>
        ))}
      </div>
      <style jsx>{`@keyframes wk-ticker { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   WORK — 3D tilt + background color shift
   ═══════════════════════════════════════════════════════════════════ */
function WorkRow({ p, i }: { p: typeof projects[0]; i: number }) {
  const [hov, setHov] = useState(false);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const rotX = useMotionValue(0), rotY = useMotionValue(0);
  const springRotX = useSpring(rotX, { stiffness: 120, damping: 18 });
  const springRotY = useSpring(rotY, { stiffness: 120, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width - 0.5) * 6;
    const ny = ((e.clientY - r.top) / r.height - 0.5) * -4;
    rotX.set(ny); rotY.set(nx);
  };
  const handleLeave = () => { rotX.set(0); rotY.set(0); setHov(false); };

  return (
    <motion.div ref={ref}
      initial={reduce ? false : { opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: i * 0.14, ease: D.ease }}>
      <motion.a href={p.url} target="_blank" rel="noopener noreferrer"
        aria-label={`View ${p.title} — opens in new tab`}
        className="group block border-b"
        style={{ borderColor: D.border, perspective: "1000px" }}
        onMouseMove={handleMove}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={handleLeave}>
        <motion.div className="grid md:grid-cols-12 gap-6 py-10 md:py-14 items-start"
          style={reduce ? {} : { rotateX: springRotX, rotateY: springRotY }}>

          <div className="md:col-span-2">
            <span className="block text-[11px] tracking-[0.16em] uppercase mb-1" style={{ fontFamily: D.font.mono, color: D.text.lo }}>{p.idx}</span>
            <span className="block text-[11px] leading-[1.5]" style={{ fontFamily: D.font.display, fontWeight: 400, color: D.text.lo }}>{p.category}</span>
          </div>

          <div className="md:col-span-4">
            <motion.h3 style={{ fontFamily: D.font.display, fontWeight: 700, fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em", color: hov ? p.accent : D.text.hi, transition: "color 0.35s" }}>
              {p.title}
            </motion.h3>
            <p className="mt-3 text-[13px] leading-[1.6]"
              style={{ fontFamily: D.font.display, fontWeight: 300, color: D.text.mid, fontStyle: "italic" }}>
              {p.tagline}
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[14px] leading-[1.75] mb-5"
              style={{ fontFamily: D.font.display, fontWeight: 300, color: D.text.mid }}>
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.scope.map(s => (
                <motion.span key={s} className="text-[11px] px-2.5 py-1 rounded-[3px]"
                  animate={{ color: hov ? p.accent : D.text.lo, borderColor: hov ? `${p.accent}40` : D.border }}
                  transition={{ duration: 0.3 }}
                  style={{ border: `1px solid`, fontFamily: D.font.display, fontWeight: 500 }}>
                  {s}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 flex md:justify-end pt-1">
            <motion.div className="h-11 w-11 rounded-full flex items-center justify-center"
              animate={{ borderColor: hov ? p.accent : D.border, backgroundColor: hov ? p.accent : "transparent" }}
              transition={{ duration: 0.35 }}
              style={{ border: `1px solid` }}
              whileHover={reduce ? {} : { scale: 1.1 }}>
              <ArrowUpRight className="h-4 w-4"
                style={{ color: hov ? D.bg : D.text.mid, transition: "color 0.3s" }} />
            </motion.div>
          </div>
        </motion.div>
      </motion.a>
    </motion.div>
  );
}

function Work() {
  const [hovAccent, setHovAccent] = useState<string | null>(null);
  return (
    <section id="work" className="py-24 md:py-40 transition-colors duration-700"
      style={{ backgroundColor: hovAccent ? `${hovAccent}06` : D.bg }}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between mb-6 md:mb-8">
          <h2 style={{ fontFamily: D.font.display, fontWeight: 800, fontSize: "clamp(2.8rem,7vw,7rem)", lineHeight: 0.88, letterSpacing: "-0.04em", color: D.text.hi }}>
            <WordReveal text="Selected Work." />
          </h2>
          <Up delay={0.2}>
            <span className="hidden md:block text-[11px] tracking-[0.16em] uppercase mb-3" style={{ fontFamily: D.font.mono, color: D.text.lo }}>2026</span>
          </Up>
        </div>
        <Line delay={0.1} />
        <div onMouseEnter={e => {
          const row = (e.target as HTMLElement).closest("[data-accent]");
          if (row) setHovAccent(row.getAttribute("data-accent"));
        }} onMouseLeave={() => setHovAccent(null)}>
          {projects.map((p, i) => (
            <div key={p.id} data-accent={p.accent}>
              <WorkRow p={p} i={i} />
            </div>
          ))}
        </div>
        <Up delay={0.2}>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1" style={{ backgroundColor: D.border }} />
            <span className="text-[11px] tracking-[0.14em] uppercase" style={{ fontFamily: D.font.display, fontWeight: 400, color: D.text.lo }}>More coming soon</span>
            <div className="h-px flex-1" style={{ backgroundColor: D.border }} />
          </div>
        </Up>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CAPABILITIES — stagger wave
   ═══════════════════════════════════════════════════════════════════ */
function Capabilities() {
  const sRef = useRef<HTMLElement>(null);
  const inView = useInView(sRef, { once: true, amount: 0.1 });
  const reduce = useReducedMotion();

  return (
    <section ref={sRef} className="py-24 md:py-36 border-t border-b" style={{ borderColor: D.border, backgroundColor: D.surface }}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Up>
              <span className="block text-[11px] tracking-[0.2em] uppercase mb-6" style={{ fontFamily: D.font.mono, color: D.text.lo }}>The full picture</span>
              <h2 style={{ fontFamily: D.font.display, fontWeight: 800, fontSize: "clamp(2.2rem,5vw,4rem)", lineHeight: 0.94, letterSpacing: "-0.04em", color: D.text.hi }}>
                From first sketch<br />
                <span style={{ fontWeight: 300, color: D.text.mid }}>to live product.</span>
              </h2>
            </Up>
            <Up delay={0.15}>
              <p className="mt-7 text-[15px] leading-[1.75]" style={{ fontFamily: D.font.display, fontWeight: 300, color: D.text.mid }}>
                Strategy, design, and code under one roof. No handoffs, no miscommunications. Brief to browser, without leaving my hands.
              </p>
            </Up>
          </div>
          <div className="lg:col-span-8">
            {capabilities.map((cap, i) => (
              <motion.div key={cap}
                className="group flex items-center justify-between py-5 border-b cursor-default"
                style={{ borderColor: D.border }}
                initial={reduce ? false : { opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.06 + (i % 3) * 0.02, ease: D.ease }}>
                <div className="flex items-center gap-6">
                  <span className="text-[11px] tabular-nums" style={{ fontFamily: D.font.mono, color: D.text.lo }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="transition-colors duration-300"
                    style={{ fontFamily: D.font.display, fontWeight: 500, fontSize: "clamp(1rem,2.2vw,1.4rem)", color: D.text.mid }}
                    onMouseEnter={e => (e.currentTarget.style.color = D.text.hi)}
                    onMouseLeave={e => (e.currentTarget.style.color = D.text.mid)}>
                    {cap}
                  </span>
                </div>
                <motion.div className="h-px bg-transparent"
                  style={{ backgroundColor: D.text.accent }}
                  initial={{ width: 0 }}
                  whileHover={reduce ? {} : { width: 32 }}
                  transition={{ duration: 0.3 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   ABOUT — clip-path wipe on photo
   ═══════════════════════════════════════════════════════════════════ */
function About() {
  const reduce = useReducedMotion();
  const sRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [32, -32]);
  const imgInView = useInView(imgRef, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={sRef} className="py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div ref={imgRef} style={reduce ? {} : { y: imgY }}>
              <motion.div className="relative rounded-[3px] overflow-hidden aspect-[4/5]"
                style={{ border: `1px solid ${D.border}` }}
                initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
                animate={imgInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
                transition={{ duration: 1.1, ease: D.ease }}>
                <Image src="/images/weed-about.png"
                  alt="Weed Kerwing at work in Santo Domingo, Dominican Republic"
                  fill className="object-cover" sizes="(max-width: 1024px) 90vw, 40vw" />
                <div aria-hidden className="absolute inset-0" style={{ background: `linear-gradient(to top, ${D.bg}55 0%, transparent 28%)` }} />
              </motion.div>
              <div className="mt-3 flex justify-between text-[11px] tracking-[0.14em] uppercase" style={{ fontFamily: D.font.mono, color: D.text.lo }}>
                <span>Santo Domingo, DR</span>
                <span>Est. 2024</span>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Up>
              <h2 className="mb-10 leading-[1.04] tracking-[-0.03em]"
                style={{ fontFamily: D.font.display, fontWeight: 800, fontSize: "clamp(2rem,4vw,3.5rem)", color: D.text.hi }}>
                I don&apos;t make websites.<br />
                <span style={{ fontWeight: 300, color: D.text.mid }}>I make businesses look real.</span>
              </h2>
            </Up>
            <div className="space-y-5">
              {[
                "Most of my clients come to me after one of two things happened: either they built something themselves and realized it was holding them back, or they paid someone to build something and got a template with their logo on it. I fix both problems.",
                "I design and develop from scratch — strategy first, then design, then code — and I don't stop until the thing actually works in the real world.",
                "Based in Santo Domingo. Some of my clients are down the street. Some are overseas. What they have in common is that they needed something that didn't look like everything else, and they were done settling for it.",
              ].map((t, i) => (
                <Up key={i} delay={i * 0.1 + 0.15}>
                  <p className="text-[15px] md:text-[16px] leading-[1.78] max-w-[54ch]"
                    style={{ fontFamily: D.font.display, fontWeight: 300, color: D.text.mid }}>{t}</p>
                </Up>
              ))}
              <Up delay={0.5}>
                <p className="text-[15px] mt-2"
                  style={{ fontFamily: D.font.display, fontWeight: 300, fontStyle: "italic", color: D.text.lo }}>
                  The work either speaks for itself or it doesn&apos;t. Scroll up.
                </p>
              </Up>
            </div>
            <Up delay={0.6}>
              <a href="https://www.instagram.com/weeddoesitalll" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 mt-10 transition-opacity hover:opacity-70"
                aria-label="Follow Weed Kerwing on Instagram">
                <div className="h-11 w-11 rounded-full flex items-center justify-center" style={{ border: `1px solid ${D.border}` }}>
                  <Instagram className="h-4 w-4" style={{ color: D.text.mid }} />
                </div>
                <div>
                  <span className="block text-[14px] font-medium" style={{ fontFamily: D.font.display, color: D.text.hi }}>@weeddoesitalll</span>
                  <span className="block text-[11px] tracking-[0.1em] uppercase mt-0.5" style={{ fontFamily: D.font.display, fontWeight: 400, color: D.text.lo }}>Follow the work</span>
                </div>
              </a>
            </Up>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════════════════════════ */
function Services() {
  const [active, setActive] = useState<number | null>(1);
  return (
    <section id="services" className="py-24 md:py-40 border-t" style={{ borderColor: D.border, backgroundColor: D.surface }}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <h2 style={{ fontFamily: D.font.display, fontWeight: 800, fontSize: "clamp(2.5rem,6vw,5.5rem)", lineHeight: 0.88, letterSpacing: "-0.04em", color: D.text.hi }}>
            <WordReveal text="Three tiers. Zero templates." />
          </h2>
          <Up delay={0.2}>
            <p className="text-[14px] leading-[1.7] max-w-[32ch]"
              style={{ fontFamily: D.font.display, fontWeight: 300, color: D.text.mid }}>
              Starting prices in RD$. Final quote depends on scope and complexity. No surprises.
            </p>
          </Up>
        </div>
        <Line />
        {services.map((s, i) => (
          <Up key={s.name} delay={i * 0.07}>
            <button
              className="w-full border-b text-left transition-all duration-300"
              style={{ borderColor: D.border }}
              onClick={() => setActive(active === i ? null : i)}
              aria-expanded={active === i}
              aria-controls={`svc-${i}`}>
              <div className="py-8 md:py-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="text-[11px] tabular-nums" style={{ fontFamily: D.font.mono, color: D.text.lo }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="tracking-[-0.02em]"
                          style={{ fontFamily: D.font.display, fontWeight: 700, fontSize: "clamp(1.2rem,3vw,2rem)", color: active === i ? D.text.hi : D.text.mid, transition: "color 0.3s" }}>
                          {s.name}
                        </span>
                        <span className="text-[13px]" style={{ fontFamily: D.font.display, fontWeight: 300, fontStyle: "italic", color: D.text.lo }}>{s.sub}</span>
                        {s.featured && (
                          <span className="text-[10px] tracking-[0.1em] uppercase px-2 py-0.5 rounded-[2px]"
                            style={{ backgroundColor: D.text.accentDim, color: D.text.accent }}>Popular</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-8">
                    <div className="text-right hidden sm:block">
                      <span className="block text-[10px] mb-0.5" style={{ fontFamily: D.font.display, color: D.text.lo }}>From</span>
                      <span className="text-[1.4rem] md:text-[1.7rem] tracking-[-0.03em]"
                        style={{ fontFamily: D.font.mono, color: s.featured ? D.text.accent : D.text.hi }}>
                        RD${s.price}
                      </span>
                    </div>
                    <motion.span className="h-7 w-7 rounded-full flex items-center justify-center text-lg leading-none"
                      style={{ border: `1px solid ${D.border}`, color: D.text.lo }}
                      animate={{ rotate: active === i ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: D.ease }}>+</motion.span>
                  </div>
                </div>
                <AnimatePresence>
                  {active === i && (
                    <motion.div id={`svc-${i}`} role="region"
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: D.ease }} className="overflow-hidden">
                      <div className="pt-8 grid md:grid-cols-2 gap-8 md:gap-16">
                        <p className="text-[15px] leading-[1.75]" style={{ fontFamily: D.font.display, fontWeight: 300, color: D.text.mid }}>{s.desc}</p>
                        <div>
                          <p className="text-[11px] tracking-[0.14em] uppercase mb-4" style={{ fontFamily: D.font.mono, color: D.text.lo }}>Includes</p>
                          <ul className="space-y-2.5">
                            {s.includes.map(item => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="mt-2 h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: D.text.accent }} />
                                <span className="text-[14px]" style={{ fontFamily: D.font.display, fontWeight: 300, color: D.text.mid }}>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <a href="#contact"
                            className="inline-flex items-center gap-2 mt-7 text-[12px] tracking-[0.08em] uppercase font-bold group transition-opacity hover:opacity-70"
                            style={{ fontFamily: D.font.display, color: D.text.accent }}
                            onClick={e => e.stopPropagation()}>
                            Start a project <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </Up>
        ))}
        <Up delay={0.3}>
          <p className="mt-5 text-[11px]" style={{ fontFamily: D.font.mono, color: D.text.lo }}>
            RD$ — Dominican Pesos. Final quote depends on scope, complexity, integrations, and timeline.
          </p>
        </Up>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CONTACT — char reveal + contact marquee
   ═══════════════════════════════════════════════════════════════════ */
function ContactMarquee() {
  const reduce = useReducedMotion();
  const items = Array(6).fill("Let's build something real");
  return (
    <div className="overflow-hidden py-5 border-y my-16 md:my-20" style={{ borderColor: D.border }}>
      <div className="flex gap-12 whitespace-nowrap"
        style={{ animation: reduce ? "none" : "wk-ticker-rev 28s linear infinite", width: "max-content" }}>
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-[-0.03em]"
            style={{ fontFamily: D.font.display, color: i % 2 === 0 ? D.text.hi : "transparent", WebkitTextStroke: i % 2 !== 0 ? `1px ${D.text.hi}` : "none" }}>
            {t}
            <span style={{ color: D.text.accent }}>→</span>
          </span>
        ))}
      </div>
      <style jsx>{`@keyframes wk-ticker-rev { from { transform: translateX(-33.333%); } to { transform: translateX(0); } }`}</style>
    </div>
  );
}

function Contact() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-40 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 65% 45% at 50% 100%, ${D.text.accent}0A 0%, transparent 60%)`,
      }} />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Up>
          <div className="flex items-center gap-3 mb-12 md:mb-16">
            <div className="h-px w-8" style={{ backgroundColor: D.text.accent }} />
            <span className="text-[11px] tracking-[0.22em] uppercase" style={{ fontFamily: D.font.mono, color: D.text.accent }}>
              Available for work — 2026
            </span>
          </div>
        </Up>

        <motion.div style={reduce ? {} : { y: headY }}>
          <h2 style={{ fontFamily: D.font.display, fontWeight: 800, fontSize: "clamp(2.8rem,8vw,8rem)", lineHeight: 0.88, letterSpacing: "-0.04em", color: D.text.hi }}>
            <CharReveal text="Something's" delay={0} />
            {" "}
            <CharReveal text="been sitting" delay={0.3} style={{ color: D.text.mid }} />
            <br />
            <CharReveal text="in your head." delay={0.6} />
          </h2>
        </motion.div>

        <ContactMarquee />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <Up delay={0.2}>
            <p className="text-[16px] md:text-[17px] leading-[1.75] mb-10"
              style={{ fontFamily: D.font.display, fontWeight: 300, color: D.text.mid }}>
              Tell me about the project — what it is, what you need, and when you want it live. I&apos;ll respond within 24 hours.
            </p>
            <p className="text-[14px] leading-[1.7]" style={{ fontFamily: D.font.display, fontWeight: 300, color: D.text.lo }}>
              Santo Domingo, Dominican Republic<br />
              Open to local &amp; international projects.
            </p>
          </Up>

          <Up delay={0.35}>
            <div className="flex flex-col gap-6">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-5" aria-label="Message Weed Kerwing on WhatsApp">
                <motion.div className="h-16 w-16 shrink-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: D.text.accent }}
                  whileHover={reduce ? {} : { scale: 1.08, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill={D.bg} aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.832L.057 23.885a.75.75 0 0 0 .921.914l6.233-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.715 9.715 0 0 1-4.96-1.358l-.355-.211-3.696.97.985-3.596-.231-.371A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                  </svg>
                </motion.div>
                <div>
                  <span className="block text-[18px] md:text-[20px] font-medium tracking-[-0.01em] transition-opacity group-hover:opacity-60"
                    style={{ fontFamily: D.font.display, color: D.text.hi }}>
                    Message on WhatsApp
                  </span>
                  <span className="block text-[11px] tracking-[0.1em] uppercase mt-0.5"
                    style={{ fontFamily: D.font.mono, color: D.text.lo }}>
                    +1 (829) 859-0927 · Fastest response
                  </span>
                </div>
              </a>

              <div className="h-px" style={{ backgroundColor: D.border }} />

              <a href="https://www.instagram.com/weeddoesitalll" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-5" aria-label="Follow Weed Kerwing on Instagram">
                <motion.div className="h-16 w-16 shrink-0 rounded-full flex items-center justify-center"
                  style={{ border: `1px solid ${D.borderHover}`, backgroundColor: D.surfaceHigh }}
                  whileHover={reduce ? {} : { scale: 1.08, borderColor: D.text.hi }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}>
                  <Instagram className="h-5 w-5" style={{ color: D.text.mid }} />
                </motion.div>
                <div>
                  <span className="block text-[18px] md:text-[20px] font-medium tracking-[-0.01em] transition-opacity group-hover:opacity-60"
                    style={{ fontFamily: D.font.display, color: D.text.hi }}>
                    @weeddoesitalll
                  </span>
                  <span className="block text-[11px] tracking-[0.1em] uppercase mt-0.5"
                    style={{ fontFamily: D.font.mono, color: D.text.lo }}>See the work</span>
                </div>
              </a>
            </div>
          </Up>
        </div>
        <div className="mt-20 md:mt-28 h-px" style={{ backgroundColor: D.border }} />
      </div>
    </section>
  );
}

/* FOOTER */
function Footer() {
  return (
    <footer className="py-10 border-t" style={{ borderColor: D.border, backgroundColor: D.bg }}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <span className="text-[15px] font-bold tracking-[-0.02em]" style={{ fontFamily: D.font.display, color: D.text.hi }}>
            WK<span style={{ color: D.text.accent }}>.</span>
          </span>
          <div className="flex items-center justify-start md:justify-center gap-8">
            {["Work", "Services", "About", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-[12px] tracking-[0.08em] uppercase transition-colors duration-200"
                style={{ fontFamily: D.font.display, fontWeight: 500, color: D.text.lo }}
                onMouseEnter={e => (e.currentTarget.style.color = D.text.hi)}
                onMouseLeave={e => (e.currentTarget.style.color = D.text.lo)}>
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5 justify-start md:justify-end">
            <a href="https://www.instagram.com/weeddoesitalll" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram" className="transition-opacity hover:opacity-50" style={{ color: D.text.lo }}>
              <Instagram className="h-4 w-4" />
            </a>
            <span className="text-[11px]" style={{ fontFamily: D.font.mono, color: D.text.lo }}>&copy; 2026</span>
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
          font-family: var(--font-display), system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #080808;
        }
        @media (pointer: fine) and (hover: hover) { body, a, button { cursor: none; } }
        ::selection { background: rgba(229,255,77,0.2); color: #F4F4F4; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.15); }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
          body, a, button { cursor: auto !important; }
        }
        .skip-link {
          position: absolute; top: -100%; left: 1rem; z-index: 99999;
          padding: 0.5rem 1rem; border-radius: 2px; font-size: 14px; font-weight: 600;
          background: #E5FF4D; color: #080808; transition: top 0.2s;
        }
        .skip-link:focus { top: 1rem; }
      `}</style>
      <div className="min-h-[100dvh] antialiased" style={{ backgroundColor: D.bg, color: D.text.hi }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ProgressBar />
        <Grain />
        <Cursor />
        <WAFloat />
        <Nav />
        <Hero />
        <Stats />
        <Marquee />
        <Work />
        <Capabilities />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
