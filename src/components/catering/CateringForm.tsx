"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

const eventTypes = [
  "Wedding",
  "Private Dinner",
  "Birthday / Anniversary",
  "Baby or Bridal Shower",
  "Graduation",
  "Corporate Event",
  "Holiday Gathering",
  "Other",
];

const budgets = ["Under $1,000", "$1,000 – $2,500", "$2,500 – $5,000", "$5,000 – $10,000", "$10,000+", "Not Sure Yet"];

const inputCls =
  "w-full border border-ivory/15 bg-night/50 px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors duration-300 focus:border-gold/70";
const labelCls = "mb-2 block text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/50";

export default function CateringForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; error?: string; reference?: string };
      if (!res.ok || !json.ok) {
        setError(json.error ?? "Something went wrong — please try again.");
        setStatus("error");
        return;
      }
      setReference(json.reference ?? "");
      setStatus("success");
      form.reset();
    } catch {
      setError("Network issue — please try again in a moment.");
      setStatus("error");
    }
  }

  return (
    <div className="relative border border-ivory/10 bg-espresso/60 p-6 sm:p-10">
      <div className="pointer-events-none absolute inset-2 border border-gold/15" aria-hidden="true" />
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex min-h-[480px] flex-col items-center justify-center text-center"
          >
            <CheckCircle2 size={52} strokeWidth={1} className="text-gold" />
            <h3 className="mt-6 font-display text-3xl text-ivory">
              Request <em className="italic text-gold">Received.</em>
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
              Chef Bryant reads every request personally. Expect a reply — with first thoughts on a menu —
              within one business day.
            </p>
            {reference && (
              <p className="mt-5 border border-gold/30 bg-night/60 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                Ref · {reference}
              </p>
            )}
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="btn-lux mt-10 border border-gold/50 px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.26em] text-gold"
            >
              Send Another Request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="relative grid gap-5"
          >
            {/* honeypot — invisible to humans, irresistible to bots */}
            <div className="absolute -left-[9999px] top-0" aria-hidden="true">
              <label htmlFor="catering-company">Company</label>
              <input id="catering-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="c-name" className={labelCls}>Full Name *</label>
                <input id="c-name" name="name" required placeholder="Jordan Smith" className={inputCls} />
              </div>
              <div>
                <label htmlFor="c-email" className={labelCls}>Email *</label>
                <input id="c-email" name="email" type="email" required placeholder="you@email.com" className={inputCls} />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="c-phone" className={labelCls}>Phone</label>
                <input id="c-phone" name="phone" type="tel" placeholder="(610) 555-0000" className={inputCls} />
              </div>
              <div>
                <label htmlFor="c-type" className={labelCls}>Event Type *</label>
                <select id="c-type" name="eventType" required defaultValue="" className={`${inputCls} appearance-none`}>
                  <option value="" disabled className="bg-night">Select an event type</option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t} className="bg-night">{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <label htmlFor="c-date" className={labelCls}>Event Date</label>
                <input id="c-date" name="eventDate" type="date" className={`${inputCls} [color-scheme:dark]`} />
              </div>
              <div>
                <label htmlFor="c-guests" className={labelCls}>Guest Count</label>
                <input id="c-guests" name="guests" type="number" min={1} max={500} placeholder="e.g. 40" className={inputCls} />
              </div>
              <div>
                <label htmlFor="c-budget" className={labelCls}>Budget Range</label>
                <select id="c-budget" name="budget" defaultValue="Not Sure Yet" className={`${inputCls} appearance-none`}>
                  {budgets.map((b) => (
                    <option key={b} value={b} className="bg-night">{b}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="c-message" className={labelCls}>Tell Us About Your Event *</label>
              <textarea
                id="c-message"
                name="message"
                required
                rows={5}
                placeholder="The occasion, the setting, dishes you love, dietary notes, the feeling you want guests to leave with…"
                className={`${inputCls} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="border border-burgundy/60 bg-burgundy/20 px-4 py-3 text-sm text-ivory/85">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-lux-dark mt-2 inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-charcoal disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Sending
                </>
              ) : (
                "Request a Custom Quote"
              )}
            </button>
            <p className="text-center text-[10px] uppercase tracking-[0.24em] text-ivory/35">
              Free consultation · No obligation · Replies within one business day
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
