import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, ChefHat, ConciergeBell, Handshake, Leaf } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import { GoldRule, PlateMark, Sprig } from "@/components/Ornaments";
import { aboutStory, chefProfile, whoWeAre, contact } from "@/data/site";

export const metadata: Metadata = {
  title: "About Chef Bryant & Exquisite Taste",
  description:
    "Meet Chef Bryant — 15 years in renowned kitchens, from Atlanta to Philadelphia. The story, philosophy and people behind Exquisite Taste of T's chef-owned catering in Delaware County, PA.",
};

const whoIcons: Record<string, typeof ChefHat> = { ChefHat, Leaf, ConciergeBell, Handshake };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Meet Chef"
        accent="Bryant"
        description="The culinary mastermind behind the delectable creations at Exquisite Taste — a lifelong passion for food and an unwavering commitment to culinary excellence."
      />

      {/* editorial: portrait + offset story card */}
      <section className="relative overflow-hidden bg-charcoal py-20 sm:py-24">
        <Sprig className="pointer-events-none absolute -right-10 bottom-10 h-24 w-64 text-gold/10" />
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="relative lg:grid lg:grid-cols-12">
            <Reveal className="relative lg:col-span-6 lg:col-start-1">
              <div className="relative">
                <div className="absolute -inset-3 border border-gold/25" aria-hidden="true" />
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={chefProfile.portraitTwo}
                    alt={chefProfile.portraitTwoAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 left-4 border border-gold/30 bg-espresso px-6 py-4 sm:-left-6">
                  <p className="font-display text-3xl italic text-gold">{chefProfile.years} years</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-ivory/55">
                    in renowned kitchens
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="relative z-10 mt-16 lg:col-span-6 lg:col-start-6 lg:-ml-24 lg:mt-24">
              <Reveal delay={0.15}>
                <div className="border border-gold/25 bg-espresso p-8 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)] sm:p-12">
                  <div className="flex items-center gap-4">
                    <span className="h-px w-10 bg-gold/60" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Meet the Chef</p>
                  </div>
                  <p className="mt-6 font-display text-xl leading-relaxed text-ivory/90 sm:text-2xl">
                    {aboutStory.lead}
                  </p>
                  <p className="mt-8 font-display text-3xl italic text-gold">— {chefProfile.name}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-ivory/45">
                    {chefProfile.role}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* journey — craft / art / hospitality */}
          <div className="mt-20 grid gap-px border border-ivory/10 bg-ivory/10 md:grid-cols-3 lg:mt-28">
            {aboutStory.journey.map((chapter, i) => (
              <Reveal key={chapter.title} delay={i * 0.12} className="bg-night/70">
                <div className="h-full p-8 lg:p-10">
                  <span className="text-ghost font-display text-6xl font-bold leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-5 font-display text-2xl text-ivory">{chapter.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/55">{chapter.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* off duty + invitation */}
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <Reveal>
              <PlateMark className="mx-auto h-10 w-10 text-gold/50" />
              <p className="mt-7 text-base leading-relaxed text-ivory/65 sm:text-lg">{aboutStory.offDuty}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 font-display text-xl italic leading-relaxed text-gold/90 sm:text-2xl">
                {aboutStory.invitation}
              </p>
              <GoldRule className="mt-10" />
            </Reveal>
          </div>

          {/* specialties */}
          <Reveal delay={0.1} className="mt-12 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-ivory/40">Specialties</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {aboutStory.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="border border-gold/30 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-gold/90 transition-colors duration-300 hover:bg-gold hover:text-charcoal"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="bg-espresso py-8">
        <SectionDivider />
      </div>

      {/* who we are */}
      <section className="bg-espresso py-24 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Who We Are</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-ivory sm:text-5xl">
              Culinary Excellence Meets <em className="italic text-gold">Unparalleled Service</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ivory/65 sm:text-lg">{whoWeAre.lead}</p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {whoWeAre.points.map((point, i) => {
              const Icon = whoIcons[point.icon];
              return (
                <Reveal key={point.title} delay={(i % 2) * 0.1}>
                  <div className="group flex h-full items-start gap-6 border border-ivory/10 bg-night/40 p-8 transition-colors duration-500 hover:border-gold/40">
                    <span className="grid h-14 w-14 shrink-0 place-items-center border border-gold/40 transition-colors duration-500 group-hover:bg-gold/10">
                      <Icon size={24} strokeWidth={1.2} className="text-gold" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-ivory">{point.title}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-ivory/55">{point.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15} className="mx-auto mt-14 max-w-3xl text-center">
            <p className="text-base leading-relaxed text-ivory/65 sm:text-lg">{whoWeAre.closing}</p>
            <a
              href="/contact"
              className="btn-lux mt-9 inline-block border border-gold/60 px-9 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-gold"
            >
              Start Planning Today
            </a>
          </Reveal>
        </div>
      </section>

      {/* behind the scenes */}
      <section className="bg-charcoal py-24 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold/60" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Behind the Scenes</p>
              </div>
              <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
                Saturdays Start at <em className="italic text-gold">6 AM</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {aboutStory.behindScenes.map((shot, i) => (
              <Reveal key={shot.src} delay={i * 0.08} y={20}>
                <figure className="group relative aspect-[4/5] overflow-hidden border border-ivory/8 sm:aspect-square">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                  <div className="absolute inset-2 border border-gold/0 transition-all duration-700 group-hover:border-gold/40" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[10px] font-bold uppercase tracking-[0.2em] text-ivory/85">
                    <span className="mr-2 inline-block h-px w-5 bg-gold align-middle" />
                    {shot.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* closing cta */}
      <section className="relative overflow-hidden border-t border-gold/15 bg-night py-20 sm:py-24">
        <Sprig className="pointer-events-none absolute -left-8 top-1/2 h-20 w-48 -translate-y-1/2 text-gold/15" />
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl text-ivory sm:text-5xl">
              Taste the <em className="italic text-gold">Story</em>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ivory/60">
              Discover the art of exceptional catering — or let this week&rsquo;s menu introduce the
              kitchen first.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/menu"
                className="btn-lux-dark bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-charcoal"
              >
                See This Week&rsquo;s Menu
              </a>
              <a
                href="/catering"
                className="group flex items-center gap-2 border border-ivory/25 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-ivory transition-colors duration-500 hover:border-gold hover:text-gold"
              >
                Book {chefProfile.name} <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:rotate-45" />
              </a>
            </div>
            <p className="mt-8 text-xs text-ivory/40">
              Or call us directly —{" "}
              <a href={contact.phoneHref} className="font-semibold text-gold underline-offset-4 hover:underline">
                {contact.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
