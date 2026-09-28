import { UtensilsCrossed, ShieldCheck, ConciergeBell, ArrowRight } from "lucide-react";
import { experienceSteps } from "@/data/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Diamond } from "./Ornaments";

const icons: Record<string, typeof ConciergeBell> = { UtensilsCrossed, ShieldCheck, ConciergeBell };

export default function HowItWorks() {
  return (
    <section id="experience" className="relative bg-espresso py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="How Preordering Works"
            title="Choose. Pay."
            accent="Enjoy."
            description="No lines, no apps, no walking into a restaurant that ran out. Reserve by Thursday, eat like it&rsquo;s a private kitchen on Saturday."
          />
          <Reveal delay={0.2} className="shrink-0">
            <a
              href="/menu"
              className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-gold"
            >
              Reserve this week&rsquo;s plates
              <span className="grid h-10 w-10 place-items-center border border-gold/40 transition-all duration-500 group-hover:bg-gold group-hover:text-charcoal">
                <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="relative mt-20 grid gap-14 md:grid-cols-3 md:gap-8 lg:gap-14">
          {/* connecting dashed line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-16 hidden border-t border-dashed border-gold/25 md:block"
          />
          {experienceSteps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <Reveal key={step.number} delay={i * 0.15} className="relative">
                <div className="flex items-start justify-between">
                  <div className="relative z-10 grid h-16 w-16 place-items-center border border-gold/40 bg-espresso">
                    <Icon size={26} strokeWidth={1.2} className="text-gold" />
                  </div>
                  <span className="text-ghost font-display text-7xl font-bold leading-none">{step.number}</span>
                </div>
                <h3 className="mt-7 font-display text-2xl text-ivory">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/55">{step.text}</p>
                <div className="mt-6 flex items-center gap-3 text-gold/40">
                  <span className="h-px w-10 bg-gold/40" />
                  <Diamond className="h-1.5 w-1.5" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
