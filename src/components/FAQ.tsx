"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export interface FaqItemData {
  q: string;
  a: string;
}

interface FAQProps {
  items: FaqItemData[];
  eyebrow?: string;
  title?: string;
  accent?: string;
  description?: string;
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-ivory/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span
          className={`font-display text-lg transition-colors duration-300 sm:text-xl ${
            open ? "text-gold" : "text-ivory group-hover:text-gold"
          }`}
        >
          {q}
        </span>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center border transition-all duration-500 ${
            open ? "rotate-45 border-gold text-gold" : "border-ivory/20 text-ivory/60 group-hover:border-gold/60"
          }`}
        >
          <Plus size={15} strokeWidth={1.5} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-7 text-sm leading-relaxed text-ivory/55 sm:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({
  items,
  eyebrow = "Good To Know",
  title = "Questions,",
  accent = "Answered",
  description = "Everything about preordering, delivery zones and booking Chef Bryant for your next gathering.",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-night py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <SectionHeading align="left" eyebrow={eyebrow} title={title} accent={accent} description={description} />
          <Reveal delay={0.2}>
            <p className="mt-8 text-sm leading-relaxed text-ivory/50">
              Something more specific?{" "}
              <a href="/contact" className="font-semibold text-gold underline-offset-4 hover:underline">
                Send a note
              </a>{" "}
              — replies land within one business day.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="border-t border-ivory/10">
            {items.map((faq, i) => (
              <FaqItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
