"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { contact } from "@/data/site";
import Reveal from "./Reveal";
import { PlateMark, Sprig } from "./Ornaments";

type Status = "idle" | "sending" | "success" | "error";

const services = [
  "Weekly Preorder — Question",
  "Catering — Celebration or Social",
  "The Intimate Table — Private Dinner",
  "Wedding or Gala",
  "Corporate Event",
  "Something Else",
];

const inputCls =
  "w-full border border-ivory/15 bg-night/50 px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/30 outline-none transition-colors duration-300 focus:border-gold/70";
const labelCls = "mb-2 block text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/50";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [reference, setReference] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

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

  const reset = () => {
    setStatus("idle");
    setError("");
    setReference("");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <Sprig className="pointer-events-none absolute -right-10 bottom-16 h-24 w-64 text-gold/10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        {/* left — invitation */}
        <div>
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold/60" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Begin Here</p>
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">
              Let&rsquo;s Set <em className="italic text-gold">the Table.</em>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/60 sm:text-lg">
              Tell us about your date, your crowd and what you love to eat. Chef Bryant personally reads
              every inquiry and replies with a menu direction and a proposal.
            </p>
            <PlateMark className="mt-10 h-14 w-14 text-gold/50" />
          </Reveal>

          <div className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "Call or Text", value: contact.phone, href: contact.phoneHref },
              { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
              { icon: MapPin, label: "Serving", value: contact.area, href: undefined as string | undefined },
              { icon: Clock, label: "Hours", value: contact.hours, href: undefined as string | undefined },
            ].map((row) => (
              <Reveal key={row.label}>
                <div className="flex items-center gap-5 border-b border-ivory/10 pb-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center border border-gold/30">
                    <row.icon size={16} strokeWidth={1.4} className="text-gold" />
                  </span>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-ivory/40">{row.label}</p>
                    {row.href ? (
                      <a href={row.href} className="mt-1 block text-sm text-ivory/80 transition-colors hover:text-gold">
                        {row.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-ivory/80">{row.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-8 flex items-center gap-6">
              <a
                href={contact.instagram}
                className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-ivory/55 transition-colors hover:text-gold"
              >
                Instagram <ArrowUpRight size={13} />
              </a>
              <a
                href={contact.facebook}
                className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-ivory/55 transition-colors hover:text-gold"
              >
                Facebook <ArrowUpRight size={13} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* right — form */}
        <Reveal delay={0.15}>
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
                    Inquiry <em className="italic text-gold">Received.</em>
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
                    Thank you — Chef Bryant will reply within one business day with next steps and a
                    menu direction.
                  </p>
                  {reference && (
                    <p className="mt-5 border border-gold/30 bg-night/60 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                      Ref · {reference}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={reset}
                    className="btn-lux mt-10 border border-gold/50 px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.26em] text-gold"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={false}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="relative grid gap-5"
                  noValidate={false}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelCls}>
                        Full Name *
                      </label>
                      <input id="name" name="name" required placeholder="Jordan Smith" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelCls}>
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={labelCls}>
                        Phone
                      </label>
                      <input id="phone" name="phone" type="tel" placeholder="(610) 555-0000" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="service" className={labelCls}>
                        I&rsquo;m Interested In *
                      </label>
                      <select id="service" name="service" required defaultValue="" className={`${inputCls} appearance-none`}>
                        <option value="" disabled className="bg-night">
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-night">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="eventDate" className={labelCls}>
                        Event / Desired Date
                      </label>
                      <input id="eventDate" name="eventDate" type="date" className={`${inputCls} [color-scheme:dark]`} />
                    </div>
                    <div>
                      <label htmlFor="guests" className={labelCls}>
                        Guest Count
                      </label>
                      <input id="guests" name="guests" type="number" min={1} max={500} placeholder="e.g. 24" className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls}>
                      Tell Us About It *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="The occasion, the vibe, dishes you love, dietary notes…"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="border border-burgundy/60 bg-burgundy/20 px-4 py-3 text-sm text-ivory/85">
                      {error}
                    </p>
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
                      <>Send Inquiry</>
                    )}
                  </button>
                  <p className="text-center text-[10px] uppercase tracking-[0.24em] text-ivory/35">
                    No spam. No lists. Just a reply from the chef.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
