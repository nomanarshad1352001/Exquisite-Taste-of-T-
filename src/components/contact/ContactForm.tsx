"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full border border-ivory/15 bg-night/50 px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors duration-300 focus:border-gold/70";
const labelCls = "mb-2 block text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/50";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error ?? "Something went wrong — please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setError("Network issue — please try again in a moment.");
      setStatus("error");
    }
  }

  return (
    <div className="relative border border-ivory/10 bg-espresso/60 p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-2 border border-gold/15" aria-hidden="true" />
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex min-h-[340px] flex-col items-center justify-center text-center"
          >
            <CheckCircle2 size={46} strokeWidth={1} className="text-gold" />
            <h3 className="mt-5 font-display text-2xl text-ivory">
              Message <em className="italic text-gold">Received.</em>
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/60">
              We read everything personally — expect a reply within one business day.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="btn-lux mt-8 border border-gold/50 px-7 py-3 text-[10px] font-bold uppercase tracking-[0.26em] text-gold"
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0, y: -14 }} className="relative grid gap-5">
            {/* honeypot */}
            <div className="absolute -left-[9999px] top-0" aria-hidden="true">
              <label htmlFor="contact-company">Company</label>
              <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="ct-name" className={labelCls}>Name *</label>
                <input id="ct-name" name="name" required placeholder="Your name" className={inputCls} />
              </div>
              <div>
                <label htmlFor="ct-email" className={labelCls}>Email *</label>
                <input id="ct-email" name="email" type="email" required placeholder="you@email.com" className={inputCls} />
              </div>
            </div>
            <div>
              <label htmlFor="ct-message" className={labelCls}>Message *</label>
              <textarea
                id="ct-message"
                name="message"
                required
                rows={6}
                placeholder="How can we help — a question about preordering, an event, press, or just to say hello?"
                className={`${inputCls} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="border border-burgundy/60 bg-burgundy/20 px-4 py-3 text-sm text-ivory/85">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-lux-dark inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-charcoal disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Sending
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
