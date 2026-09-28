"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Award, Flame, Leaf } from "lucide-react";
import { chefProfile } from "@/data/site";
import Reveal from "./Reveal";
import { Sprig } from "./Ornaments";

const valueIcons: Record<string, typeof Award> = { Award, Flame, Leaf };

export default function ChefSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -28, reduce ? 0 : 28]);

  return (
    <section ref={ref} id="chef" className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <Sprig className="pointer-events-none absolute -left-8 top-24 h-24 w-64 -scale-x-100 text-gold/10" />
      <span className="text-ghost pointer-events-none absolute -right-4 top-10 hidden select-none font-display text-[16rem] font-bold leading-none lg:block">
        T.
      </span>

      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        {/* portrait */}
        <div className="relative lg:col-span-5">
          <Reveal>
            <motion.div style={{ y: imgY }} className="relative">
              <div className="absolute -inset-3 border border-gold/30" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={chefProfile.portrait}
                  alt={chefProfile.portraitAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-7 -right-3 border border-gold/30 bg-espresso px-7 py-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] sm:-right-7"
              >
                <p className="font-display text-4xl italic text-gold">{chefProfile.years}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-ivory/60">
                  Years at the pass
                </p>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>

        {/* teaser copy */}
        <div className="lg:col-span-7 lg:pl-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold/60" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Meet the Chef</p>
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">
              The Hands Behind <em className="italic text-gold">Every Plate</em>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/65 sm:text-lg">
              {chefProfile.story[0]}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-px border border-ivory/10 bg-ivory/10 sm:grid-cols-3">
            {chefProfile.values.map((value, i) => {
              const Icon = valueIcons[value.icon];
              return (
                <Reveal key={value.title} delay={0.15 + i * 0.1} className="bg-night/70">
                  <div className="p-6">
                    <Icon size={22} strokeWidth={1.3} className="text-gold" />
                    <h3 className="mt-4 font-display text-lg text-ivory">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/50">{value.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.25}>
            <a
              href="/about"
              className="group mt-12 inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.26em] text-gold"
            >
              Read Chef Bryant&rsquo;s Full Story
              <span className="grid h-11 w-11 place-items-center border border-gold/40 transition-all duration-500 group-hover:bg-gold group-hover:text-charcoal">
                <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
