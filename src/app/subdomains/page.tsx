"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ArrowRight, Check, X, Loader2, Globe, Zap, Clock } from "lucide-react";

const D = {
  bg: "#080808", surface: "#0E0E0E", surfaceHigh: "#141414",
  border: "rgba(255,255,255,0.07)", borderHover: "rgba(255,255,255,0.14)",
  text: { hi: "#F4F4F4", mid: "#888888", lo: "#4A4A4A", accent: "#E5FF4D", accentDim: "rgba(229,255,77,0.12)" },
  font: { display: "var(--font-display), system-ui, sans-serif", mono: "var(--font-mono), monospace" },
};

const ROOT = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "weedkerwing.dev";

type AvailState = "idle" | "checking" | "available" | "taken" | "invalid";

function slugify(v: string) {
  return v.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/^-+|-+$/g, "").slice(0, 63);
}

function isValidSubdomain(v: string) {
  return /^[a-z0-9]([a-z0-9-]{1,61}[a-z0-9])?$/.test(v);
}

export default function SubdomainsPage() {
  const [subdomain, setSubdomain] = useState("");
  const [target, setTarget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [avail, setAvail] = useState<AvailState>("idle");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [confirmedDomain, setConfirmedDomain] = useState("");
  const [blink, setBlink] = useState(true);
  const checkTimer = useRef<NodeJS.Timeout>();
  const heroRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLElement>(null);
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.2 });

  // Blinking cursor
  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 520);
    return () => clearInterval(t);
  }, []);

  // Debounced availability check
  const checkAvailability = useCallback((val: string) => {
    if (checkTimer.current) clearTimeout(checkTimer.current);
    if (!val || val.length < 3) { setAvail("idle"); return; }
    if (!isValidSubdomain(val)) { setAvail("invalid"); return; }
    setAvail("checking");
    checkTimer.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/subdomains/check?subdomain=${val}`);
        const data = await res.json();
        setAvail(data.available ? "available" : "taken");
      } catch { setAvail("idle"); }
    }, 500);
  }, []);

  const handleSubdomainChange = (v: string) => {
    const slug = slugify(v);
    setSubdomain(slug);
    checkAvailability(slug);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (avail !== "available") return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/subdomains", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subdomain, target, clientName: name, clientEmail: email, clientPhone: phone, notes }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setConfirmedDomain(data.fullDomain);
      setStatus("success");
    } catch (err: any) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  };

  const displayDomain = subdomain || "yourbusiness";
  const full = `${displayDomain}.${ROOT}`;

  const steps = [
    { icon: Globe, n: "01", title: "Fill the form", desc: "Choose your subdomain, add your website URL and contact details." },
    { icon: Zap, n: "02", title: "We configure DNS", desc: "We create your CNAME record on Cloudflare and point it to your site." },
    { icon: Clock, n: "03", title: "Live in minutes", desc: "DNS propagates globally. Your custom domain is ready to use." },
  ];

  if (status === "success") {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center px-6" style={{ backgroundColor: D.bg, fontFamily: D.font.display }}>
        <motion.div className="text-center max-w-xl"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ backgroundColor: D.text.accentDim, border: `1px solid ${D.text.accent}` }}
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}>
            <Check className="h-8 w-8" style={{ color: D.text.accent }} />
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] mb-4" style={{ color: D.text.hi }}>
            Order received!
          </h1>
          <p className="text-[16px] mb-8" style={{ color: D.text.mid }}>
            Your subdomain is being configured. You'll be live at:
          </p>
          <div className="rounded-xl px-6 py-4 mb-8 font-mono text-xl md:text-2xl font-bold tracking-[-0.02em]"
            style={{ backgroundColor: D.surface, border: `1px solid ${D.text.accent}40`, color: D.text.accent }}>
            {confirmedDomain}
          </div>
          <p className="text-[14px] mb-8" style={{ color: D.text.lo }}>
            DNS typically propagates within 5–30 minutes. We'll reach out if anything needs attention.
          </p>
          <a href={`https://wa.me/18298590927`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.08em] uppercase transition-opacity hover:opacity-70"
            style={{ color: D.text.accent }}>
            Questions? WhatsApp us <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: D.bg, fontFamily: D.font.display, color: D.text.hi }}>
      <style jsx global>{`
        body { background-color: #080808; }
        ::selection { background: rgba(229,255,77,0.2); }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ backgroundColor: `${D.bg}E8`, backdropFilter: "blur(20px)", borderColor: D.border }}>
        <div className="mx-auto max-w-[1200px] px-6 h-[64px] flex items-center justify-between">
          <a href="/weed-kerwing" className="text-[15px] font-bold tracking-[-0.02em] transition-opacity hover:opacity-60" style={{ color: D.text.hi }}>
            WK<span style={{ color: D.text.accent }}>.</span>
          </a>
          <a href="https://wa.me/18298590927" target="_blank" rel="noopener noreferrer"
            className="text-[12px] font-bold tracking-[0.08em] uppercase transition-opacity hover:opacity-70"
            style={{ color: D.text.accent }}>
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section ref={heroRef} className="min-h-[100dvh] flex flex-col justify-center pt-[64px]">
        <div className="mx-auto max-w-[1200px] w-full px-6 py-24">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: D.text.accent }} />
              <span className="text-[11px] tracking-[0.24em] uppercase" style={{ fontFamily: D.font.mono, color: D.text.lo }}>
                Subdomain Service
              </span>
            </div>

            <h1 className="mb-6 leading-[0.88] tracking-[-0.04em]" style={{ fontWeight: 800, fontSize: "clamp(3rem,9vw,8rem)", color: D.text.hi }}>
              Your own<br />
              <span style={{ color: D.text.accent }}>professional</span><br />
              domain.
            </h1>

            <p className="text-[clamp(1rem,1.8vw,1.2rem)] leading-[1.7] max-w-[40ch] mb-12" style={{ fontWeight: 300, color: D.text.mid }}>
              Get a clean, memorable subdomain for your business or project. Starting at{" "}
              <strong style={{ color: D.text.hi }}>RD$500/year</strong> — we handle the DNS.
            </p>

            {/* Live domain preview */}
            <div className="rounded-2xl p-6 md:p-8 mb-6 max-w-[600px]"
              style={{ backgroundColor: D.surface, border: `1px solid ${D.border}` }}>
              <p className="text-[11px] tracking-[0.16em] uppercase mb-4" style={{ fontFamily: D.font.mono, color: D.text.lo }}>
                Your domain preview
              </p>
              <div className="text-[clamp(1.4rem,4vw,2.5rem)] font-bold tracking-[-0.03em] mb-6 break-all"
                style={{ fontFamily: D.font.mono, color: D.text.hi }}>
                <span style={{ color: avail === "available" ? D.text.accent : avail === "taken" ? "#EF4444" : D.text.hi }}>
                  {displayDomain}
                </span>
                <span style={{ color: D.text.mid }}>.{ROOT}</span>
                <span style={{ color: D.text.accent, opacity: blink ? 1 : 0 }}>|</span>
              </div>

              {/* Input */}
              <div className="relative">
                <input
                  type="text"
                  value={subdomain}
                  onChange={e => handleSubdomainChange(e.target.value)}
                  placeholder="yourname"
                  maxLength={63}
                  className="w-full bg-transparent border-b pb-3 text-[16px] outline-none pr-8 transition-all duration-300"
                  style={{
                    fontFamily: D.font.display,
                    color: D.text.hi,
                    borderColor: avail === "available" ? D.text.accent : avail === "taken" || avail === "invalid" ? "#EF4444" : D.border,
                    placeholder: D.text.lo,
                  }}
                />
                <div className="absolute right-0 top-0">
                  {avail === "checking" && <Loader2 className="h-4 w-4 animate-spin" style={{ color: D.text.mid }} />}
                  {avail === "available" && <Check className="h-4 w-4" style={{ color: D.text.accent }} />}
                  {(avail === "taken" || avail === "invalid") && <X className="h-4 w-4" style={{ color: "#EF4444" }} />}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {avail === "available" && (
                  <motion.p key="avail" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="mt-3 text-[12px]" style={{ color: D.text.accent }}>
                    ✓ Available — <strong>{full}</strong> is yours
                  </motion.p>
                )}
                {avail === "taken" && (
                  <motion.p key="taken" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="mt-3 text-[12px]" style={{ color: "#EF4444" }}>
                    ✗ Already taken — try a different name
                  </motion.p>
                )}
                {avail === "invalid" && (
                  <motion.p key="invalid" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="mt-3 text-[12px]" style={{ color: "#EF4444" }}>
                    Only letters, numbers, and hyphens. Min 3 characters.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <a href="#order"
              className="group inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.08em] uppercase transition-opacity hover:opacity-70"
              style={{ color: D.text.accent }}>
              Order now
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section ref={stepsRef} className="py-24 md:py-32 border-t" style={{ borderColor: D.border, backgroundColor: D.surface }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.04em] mb-16" style={{ color: D.text.hi }}>
            How it works.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 40 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 rounded-xl" style={{ backgroundColor: D.surfaceHigh, border: `1px solid ${D.border}` }}>
                <span className="block text-[11px] tracking-[0.2em] uppercase mb-6" style={{ fontFamily: D.font.mono, color: D.text.lo }}>{s.n}</span>
                <s.icon className="h-6 w-6 mb-4" style={{ color: D.text.accent }} />
                <h3 className="text-xl font-bold tracking-[-0.02em] mb-3" style={{ color: D.text.hi }}>{s.title}</h3>
                <p className="text-[14px] leading-[1.7]" style={{ fontWeight: 300, color: D.text.mid }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="py-24 md:py-40">
        <div className="mx-auto max-w-[720px] px-6">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.04em] mb-4" style={{ color: D.text.hi }}>
            Place your order.
          </h2>
          <p className="text-[15px] mb-14" style={{ fontWeight: 300, color: D.text.mid }}>
            Fill in the details below. We'll configure your DNS within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {[
              { label: "Subdomain *", value: subdomain, onChange: (v: string) => handleSubdomainChange(v), placeholder: "yourname", hint: `→ ${full}`, type: "text" },
              { label: "Your website / target URL *", value: target, onChange: (v: string) => setTarget(v), placeholder: "mysite.vercel.app or 192.168.1.1", type: "text" },
              { label: "Full name *", value: name, onChange: (v: string) => setName(v), placeholder: "Your name", type: "text" },
              { label: "Email *", value: email, onChange: (v: string) => setEmail(v), placeholder: "you@email.com", type: "email" },
              { label: "WhatsApp number", value: phone, onChange: (v: string) => setPhone(v), placeholder: "+1 829 000 0000", type: "tel" },
            ].map(f => (
              <div key={f.label}>
                <label className="block text-[12px] tracking-[0.12em] uppercase mb-3" style={{ fontFamily: D.font.mono, color: D.text.lo }}>
                  {f.label}
                </label>
                <input type={f.type} value={f.value} onChange={e => f.onChange(e.target.value)}
                  placeholder={f.placeholder} required={f.label.includes("*")}
                  className="w-full bg-transparent border-b pb-3 text-[16px] outline-none transition-all duration-300"
                  style={{ fontFamily: D.font.display, color: D.text.hi, borderColor: D.border }}
                  onFocus={e => (e.currentTarget.style.borderColor = D.text.accent)}
                  onBlur={e => (e.currentTarget.style.borderColor = D.border)} />
                {f.hint && <p className="mt-2 text-[12px]" style={{ fontFamily: D.font.mono, color: D.text.lo }}>{f.hint}</p>}
              </div>
            ))}

            <div>
              <label className="block text-[12px] tracking-[0.12em] uppercase mb-3" style={{ fontFamily: D.font.mono, color: D.text.lo }}>Notes</label>
              <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3}
                placeholder="Anything we should know..."
                className="w-full bg-transparent border-b pb-3 text-[16px] outline-none resize-none transition-all duration-300"
                style={{ fontFamily: D.font.display, color: D.text.hi, borderColor: D.border }}
                onFocus={e => (e.currentTarget.style.borderColor = D.text.accent)}
                onBlur={e => (e.currentTarget.style.borderColor = D.border)} />
            </div>

            <AnimatePresence>
              {status === "error" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-[14px]" style={{ color: "#EF4444" }}>
                  {errorMsg}
                </motion.p>
              )}
            </AnimatePresence>

            <button type="submit"
              disabled={avail !== "available" || status === "loading" || !name || !email || !target}
              className="group flex items-center gap-4 transition-opacity duration-300"
              style={{ opacity: avail === "available" && name && email && target ? 1 : 0.35 }}>
              <div className="h-14 w-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: D.text.accent }}>
                {status === "loading"
                  ? <Loader2 className="h-5 w-5 animate-spin" style={{ color: D.bg }} />
                  : <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" style={{ color: D.bg }} />}
              </div>
              <span className="text-[16px] font-bold tracking-[-0.01em]" style={{ color: D.text.hi }}>
                {status === "loading" ? "Placing order…" : "Place order — RD$500"}
              </span>
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10" style={{ borderColor: D.border }}>
        <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between">
          <span className="text-[13px]" style={{ color: D.text.lo, fontFamily: D.font.mono }}>
            © 2026 Weed Kerwing
          </span>
          <a href="/weed-kerwing" className="text-[13px] transition-opacity hover:opacity-60" style={{ color: D.text.lo }}>
            Back to portfolio
          </a>
        </div>
      </footer>
    </div>
  );
}
