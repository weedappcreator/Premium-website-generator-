"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, ExternalLink, Trash2, Check, RefreshCw } from "lucide-react";

const D = {
  bg: "#080808", surface: "#0E0E0E", surfaceHigh: "#141414",
  border: "rgba(255,255,255,0.07)", borderHover: "rgba(255,255,255,0.14)",
  text: { hi: "#F4F4F4", mid: "#888888", lo: "#4A4A4A", accent: "#E5FF4D", accentDim: "rgba(229,255,77,0.12)" },
  font: { display: "var(--font-display), system-ui, sans-serif", mono: "var(--font-mono), monospace" },
};

type Order = {
  id: string; subdomain: string; fullDomain: string; target: string;
  clientName: string; clientEmail: string; clientPhone?: string;
  status: "pending" | "active" | "failed" | "cancelled";
  price: number; currency: string; notes?: string; createdAt: string;
};

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  active: { bg: "rgba(74,222,128,0.12)", text: "#4ADE80" },
  pending: { bg: "rgba(251,191,36,0.12)", text: "#FBB924" },
  failed: { bg: "rgba(239,68,68,0.12)", text: "#EF4444" },
  cancelled: { bg: "rgba(100,100,100,0.12)", text: "#666666" },
};

function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded animate-pulse ${className}`}
      style={{ backgroundColor: D.surfaceHigh }} />
  );
}

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "active" | "pending" | "failed" | "cancelled">("all");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const ADMIN = process.env.NEXT_PUBLIC_ADMIN_SECRET || "";

  const fetchOrders = async (quiet = false) => {
    if (!quiet) setLoading(true);
    else setRefreshing(true);
    try {
      const res = await fetch("/api/subdomains", {
        headers: { Authorization: `Bearer ${ADMIN}` },
      });
      if (!res.ok) throw new Error("Unauthorized");
      const data = await res.json();
      setOrders(data);
    } catch { setOrders([]); }
    finally { setLoading(false); setRefreshing(false); }
  };

  useEffect(() => { fetchOrders(); }, []);

  const handleDelete = async (id: string) => {
    setDeleting(true);
    try {
      await fetch(`/api/subdomains/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${ADMIN}` },
      });
      setOrders(o => o.filter(x => x.id !== id));
    } finally { setDeleting(false); setDeleteId(null); }
  };

  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const filtered = filter === "all" ? orders : orders.filter(o => o.status === filter);
  const stats = {
    total: orders.length,
    active: orders.filter(o => o.status === "active").length,
    pending: orders.filter(o => o.status === "pending").length,
    revenue: orders.filter(o => o.status === "active").reduce((s, o) => s + o.price, 0),
  };

  const statItems = [
    { label: "Total subdomains", value: stats.total, suffix: "" },
    { label: "Active", value: stats.active, suffix: "" },
    { label: "Pending", value: stats.pending, suffix: "" },
    { label: "Revenue (active)", value: stats.revenue, suffix: " RD$" },
  ];

  const tabs = ["all", "active", "pending", "failed", "cancelled"] as const;

  return (
    <div className="min-h-[100dvh]" style={{ backgroundColor: D.bg, fontFamily: D.font.display, color: D.text.hi }}>
      <style jsx global>{`body { background: #080808; } ::selection { background: rgba(229,255,77,0.2); }`}</style>

      {/* Header */}
      <div className="border-b" style={{ borderColor: D.border, backgroundColor: D.surface }}>
        <div className="mx-auto max-w-[1400px] px-6 h-[68px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[15px] font-bold tracking-[-0.02em]" style={{ color: D.text.hi }}>
              WK<span style={{ color: D.text.accent }}>.</span>
            </span>
            <span className="text-[11px] tracking-[0.16em] uppercase" style={{ fontFamily: D.font.mono, color: D.text.lo }}>
              Domain Admin
            </span>
          </div>
          <button onClick={() => fetchOrders(true)}
            className="flex items-center gap-2 text-[12px] tracking-[0.08em] uppercase transition-opacity hover:opacity-60"
            style={{ color: D.text.lo }}>
            <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {statItems.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-xl p-6" style={{ backgroundColor: D.surface, border: `1px solid ${D.border}` }}>
              {loading ? (
                <Skeleton className="h-9 w-16 mb-2" />
              ) : (
                <div className="text-[2.5rem] font-bold tracking-[-0.04em] leading-none mb-2"
                  style={{ color: D.text.hi }}>
                  {s.suffix === " RD$" ? `${s.value.toLocaleString()}` : s.value}{s.suffix}
                </div>
              )}
              <p className="text-[11px] tracking-[0.12em] uppercase" style={{ fontFamily: D.font.mono, color: D.text.lo }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map(t => (
            <button key={t} onClick={() => setFilter(t)}
              className="text-[12px] tracking-[0.08em] uppercase px-4 py-2 rounded-full transition-all duration-200"
              style={{
                fontFamily: D.font.mono,
                backgroundColor: filter === t ? D.text.accent : D.surface,
                color: filter === t ? D.bg : D.text.mid,
                border: `1px solid ${filter === t ? D.text.accent : D.border}`,
              }}>
              {t} {t === "all" ? `(${orders.length})` : `(${orders.filter(o => o.status === t).length})`}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${D.border}` }}>
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 text-[11px] tracking-[0.12em] uppercase"
            style={{ backgroundColor: D.surfaceHigh, fontFamily: D.font.mono, color: D.text.lo }}>
            <div className="col-span-3">Domain</div>
            <div className="col-span-3">Client</div>
            <div className="col-span-2">Target</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1">Price</div>
            <div className="col-span-1">Date</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>

          {loading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 px-6 py-5 border-t" style={{ borderColor: D.border }}>
                {[3, 3, 2, 1, 1, 1, 1].map((cols, j) => (
                  <div key={j} className={`col-span-${cols}`}>
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            ))
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[15px] mb-2" style={{ color: D.text.mid }}>No orders yet</p>
              <p className="text-[13px]" style={{ color: D.text.lo }}>
                Share your{" "}
                <a href="/subdomains" className="underline" style={{ color: D.text.accent }}>order page</a>
                {" "}to start receiving orders.
              </p>
            </div>
          ) : (
            filtered.map((order, i) => {
              const sc = STATUS_COLORS[order.status] || STATUS_COLORS.cancelled;
              return (
                <motion.div key={order.id}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="grid grid-cols-12 gap-4 px-6 py-5 border-t items-center hover:bg-white/[0.02] transition-colors duration-200"
                  style={{ borderColor: D.border }}>

                  {/* Domain */}
                  <div className="col-span-3">
                    <p className="text-[13px] font-bold tracking-[-0.01em] truncate" style={{ color: D.text.hi }}>
                      {order.subdomain}
                    </p>
                    <p className="text-[11px] truncate mt-0.5" style={{ fontFamily: D.font.mono, color: D.text.lo }}>
                      {order.fullDomain}
                    </p>
                  </div>

                  {/* Client */}
                  <div className="col-span-3">
                    <p className="text-[13px] truncate" style={{ color: D.text.hi }}>{order.clientName}</p>
                    <p className="text-[11px] truncate mt-0.5" style={{ color: D.text.lo }}>{order.clientEmail}</p>
                  </div>

                  {/* Target */}
                  <div className="col-span-2">
                    <p className="text-[11px] truncate" style={{ fontFamily: D.font.mono, color: D.text.mid }}>{order.target}</p>
                  </div>

                  {/* Status */}
                  <div className="col-span-1">
                    <span className="text-[10px] tracking-[0.08em] uppercase px-2 py-1 rounded-full"
                      style={{ backgroundColor: sc.bg, color: sc.text }}>
                      {order.status}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="col-span-1">
                    <p className="text-[12px]" style={{ fontFamily: D.font.mono, color: D.text.mid }}>
                      {order.price > 0 ? `${order.currency}${order.price}` : "—"}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="col-span-1">
                    <p className="text-[11px]" style={{ fontFamily: D.font.mono, color: D.text.lo }}>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="col-span-1 flex items-center justify-end gap-2">
                    <button onClick={() => copy(order.fullDomain, `${order.id}-domain`)}
                      className="h-7 w-7 rounded flex items-center justify-center transition-colors duration-200"
                      style={{ backgroundColor: D.surfaceHigh }}
                      title="Copy domain">
                      {copied === `${order.id}-domain`
                        ? <Check className="h-3 w-3" style={{ color: D.text.accent }} />
                        : <Copy className="h-3 w-3" style={{ color: D.text.lo }} />}
                    </button>
                    <a href={`https://${order.target}`} target="_blank" rel="noopener noreferrer"
                      className="h-7 w-7 rounded flex items-center justify-center transition-colors duration-200"
                      style={{ backgroundColor: D.surfaceHigh }}
                      title="Open target">
                      <ExternalLink className="h-3 w-3" style={{ color: D.text.lo }} />
                    </a>
                    <button onClick={() => setDeleteId(order.id)}
                      className="h-7 w-7 rounded flex items-center justify-center transition-colors duration-200"
                      style={{ backgroundColor: D.surfaceHigh }}
                      title="Delete">
                      <Trash2 className="h-3 w-3" style={{ color: "#EF4444" }} />
                    </button>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>

      {/* Delete modal */}
      <AnimatePresence>
        {deleteId && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center px-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setDeleteId(null)} />
            <motion.div className="relative rounded-2xl p-8 max-w-md w-full"
              style={{ backgroundColor: D.surfaceHigh, border: `1px solid ${D.border}` }}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: D.text.hi }}>Delete subdomain?</h3>
              <p className="text-[14px] mb-8" style={{ color: D.text.mid }}>
                This will remove the DNS record from Cloudflare and delete the order. This cannot be undone.
              </p>
              <div className="flex gap-4">
                <button onClick={() => handleDelete(deleteId)} disabled={deleting}
                  className="flex-1 py-3 rounded-xl text-[13px] font-bold transition-opacity hover:opacity-80"
                  style={{ backgroundColor: "#EF4444", color: "#fff" }}>
                  {deleting ? "Deleting…" : "Delete"}
                </button>
                <button onClick={() => setDeleteId(null)}
                  className="flex-1 py-3 rounded-xl text-[13px] font-bold"
                  style={{ backgroundColor: D.surface, color: D.text.mid, border: `1px solid ${D.border}` }}>
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
