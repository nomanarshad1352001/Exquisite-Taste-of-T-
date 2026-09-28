import Reveal from "./Reveal";
import { GoldRule, Sprig, ArcLines } from "./Ornaments";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
}

export default function PageHero({ eyebrow, title, accent, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal pb-14 pt-36 sm:pt-44">
      <ArcLines className="pointer-events-none absolute -bottom-72 -right-56 h-[560px] w-[560px] text-gold/[0.08]" />
      <Sprig className="pointer-events-none absolute -left-10 top-40 h-20 w-52 text-gold/15" />

      <div className="relative mx-auto max-w-[1440px] px-5 text-center sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/70" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold">{eyebrow}</p>
            <span className="h-px w-12 bg-gold/70" />
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            {title} {accent && <em className="italic text-gold">{accent}</em>}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/60 sm:text-lg">
              {description}
            </p>
          )}
          <GoldRule className="mt-9" />
        </Reveal>
      </div>
    </section>
  );
}
