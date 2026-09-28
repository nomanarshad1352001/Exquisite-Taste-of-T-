"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import Reveal from "./Reveal";
import { Sprig } from "./Ornaments";

type Status = "idle" | "sending" | "success" | "error";

export default function VipBand() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error ?? "Try again in a moment.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Network issue — try again.");
      setStatus("error");
    }
  }

  return (
    <section className="relative overflow-hidden bg-gold py-20 sm:py-24">
      <Sprig className="pointer-events-none absolute -left-8 top-1/2 h-20 w-48 -translate-y-1/2 text-charcoal/15" />
      <Sprig className="pointer-events-none absolute -right-8 top-0 h-20 w-48 -scale-x-100 text-charcoal/15" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5 sm:px-8 lg:flex-row lg:justify-between lg:px-12">
        <Reveal className="text-center lg:text-left">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-charcoal/60">The Inner Circle</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            First Taste, <em className="italic">Every Week.</em>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/70 sm:text-base">
            Get first access to weekly menus and exclusive tastings — Sunday menu drops land in your
            inbox before they open to everyone else.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="w-full max-w-md">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 border-2 border-charcoal/70 px-6 py-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center border-2 border-charcoal text-charcoal">
                <Check size={18} strokeWidth={2.5} />
              </span>
              <p className="text-sm font-semibold leading-snug text-charcoal">
                You&rsquo;re on the list. Watch your inbox Sunday evening — first access is yours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} noValidate={false}>
              <div className="flex border-2 border-charcoal/70">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent px-5 py-4 text-sm font-medium text-charcoal placeholder:text-charcoal/45 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex shrink-0 items-center gap-2.5 bg-charcoal px-6 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-gold transition-colors duration-300 hover:bg-night disabled:opacity-70 sm:px-8"
                >
                  {status === "sending" ? <Loader2 size={15} className="animate-spin" /> : <Send size={14} />}
                  Join VIP
                </button>
              </div>
              {status === "error" && <p className="mt-3 text-xs font-semibold text-burgundy-deep">{error}</p>}
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-charcoal/50">
                One email a week. Unsubscribe anytime.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
