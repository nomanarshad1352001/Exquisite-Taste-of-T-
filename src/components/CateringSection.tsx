import Image from "next/image";
import { ArrowUpRight, Check, Handshake, UtensilsCrossed, Wine } from "lucide-react";
import { cateringNotes, cateringPackages } from "@/data/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const noteIcons: Record<string, typeof Wine> = { UtensilsCrossed, Wine, Handshake };

export default function CateringSection() {
  return (
    <section id="catering" className="relative bg-gradient-to-b from-espresso via-charcoal to-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Catering & Private Events"
          title="Your Event,"
          accent="Chef-Run"
          description="From a seven-course dinner for eight to a plated wedding for two hundred — the same standard: food made to order, service that disappears, and a room that remembers it."
        />

        <div className="mt-16 grid gap-6 pt-5 lg:grid-cols-3 lg:gap-8">
          {cateringPackages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.12} className={pkg.featured ? "lg:-translate-y-5" : ""}>
              <article
                className={`group relative flex h-full flex-col border transition-colors duration-500 ${
                  pkg.featured
                    ? "border-gold/60 bg-cocoa shadow-[0_30px_80px_-30px_rgba(201,162,75,0.25)]"
                    : "border-ivory/10 bg-cocoa/70 hover:border-gold/40"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap bg-burgundy px-5 py-2 text-[9px] font-bold uppercase tracking-[0.3em] text-ivory shadow-lg">
                    Most Requested
                  </span>
                )}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa via-transparent to-transparent opacity-90" />
                </div>

                <div className="flex flex-1 flex-col p-7 lg:p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{pkg.range}</p>
                  <h3 className="mt-2.5 font-display text-2xl text-ivory lg:text-[1.7rem]">{pkg.name}</h3>
                  <p className="mt-2 font-display text-lg italic text-gold/85">{pkg.price}</p>
                  <span className="mt-5 h-px w-full bg-gradient-to-r from-gold/40 to-transparent" />

                  <ul className="mt-5 flex-1 space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-ivory/60">
                        <Check size={14} className="mt-1 shrink-0 text-gold" strokeWidth={2.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/catering#quote"
                    className="group/cta mt-8 inline-flex items-center justify-between border border-gold/40 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold hover:text-charcoal"
                  >
                    Request a Custom Quote
                    <ArrowUpRight size={14} className="transition-transform duration-500 group-hover/cta:rotate-45" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-gold/15 pt-8">
            {cateringNotes.map((note) => {
              const Icon = noteIcons[note.icon];
              return (
                <span key={note.text} className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-ivory/50">
                  <Icon size={16} strokeWidth={1.4} className="text-gold/80" />
                  {note.text}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
