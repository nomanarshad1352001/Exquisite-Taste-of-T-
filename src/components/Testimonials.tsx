import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { GoldRule } from "./Ornaments";
import Reveal from "./Reveal";

function TestimonialCard({ quote, name, detail }: { quote: string; name: string; detail: string }) {
  return (
    <article className="flex w-[19rem] shrink-0 flex-col border border-ivory/12 bg-night/25 p-7 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40 sm:w-[26rem] sm:p-8">
      <div className="flex items-center gap-1.5 text-gold" aria-label="Five star review">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <blockquote className="mt-5 flex-1">
        <p className="font-display text-base leading-relaxed text-ivory/85 sm:text-lg">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      <footer className="mt-6 border-t border-ivory/10 pt-4">
        <p className="font-display text-lg italic text-gold">{name}</p>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-ivory/50">{detail}</p>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-burgundy py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <span className="pointer-events-none absolute -bottom-24 left-0 select-none font-display text-[26rem] font-bold italic leading-none text-night/15">
        &ldquo;
      </span>

      <Reveal className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Quote size={34} strokeWidth={1} className="mx-auto rotate-180 text-gold/70" />
        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.4em] text-gold/90">
          Word Around the Table
        </p>
        <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl">
          Loved Across <em className="italic text-gold">Delco</em>
        </h2>
        <GoldRule className="mt-8" />
      </Reveal>

      {/* sliding rail — continuous drift, pauses on hover */}
      <Reveal delay={0.15} className="relative mt-14">
        <div className="marquee-track relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-burgundy to-transparent sm:w-32" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-burgundy to-transparent sm:w-32" aria-hidden="true" />

          <div className="flex w-max animate-testrail gap-5 pr-5 sm:gap-6">
            {doubled.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} quote={t.quote} name={t.name} detail={t.detail} />
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-[9px] font-bold uppercase tracking-[0.32em] text-ivory/45">
          Hover the rail to pause and read
        </p>
      </Reveal>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
