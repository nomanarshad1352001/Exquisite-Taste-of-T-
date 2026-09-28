import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import CateringForm from "@/components/catering/CateringForm";
import { StationsMark, LeafLineMark } from "@/components/catering/serviceIcons";
import { PlateMark, ClocheMark, CoupeMark, GlassMark, Sprig } from "@/components/Ornaments";
import { cateringPackages, cateringNotes, contact } from "@/data/site";
import { UtensilsCrossed, Wine, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Catering & Private Events",
  description:
    "Luxury catering and private chef events across Philadelphia & Delaware County — plated dinners, buffets, cocktail receptions, food stations and weddings, crafted with intention by Chef Bryant.",
};

const serviceTypes = [
  {
    id: "plated",
    Icon: PlateMark,
    name: "Plated Dinners",
    text: "Multi-course service, course by course, at your table — restaurant precision without the dining room.",
  },
  {
    id: "buffet",
    Icon: ClocheMark,
    name: "Buffet Service",
    text: "Abundant, beautifully kept spreads that invite guests back for seconds — styled like a still life.",
  },
  {
    id: "cocktail",
    Icon: CoupeMark,
    name: "Cocktail Receptions",
    text: "Passed hors d'oeuvres and elegant small bites that keep the room moving and the conversation flowing.",
  },
  {
    id: "stations",
    Icon: StationsMark,
    name: "Food Stations",
    text: "Chef-attended stations — carving, pasta, dessert — a little theater built into the evening.",
  },
  {
    id: "bar",
    Icon: GlassMark,
    name: "Bar Service",
    text: "BYOB-friendly with pairing guidance and signature-punch service, so the bar matches the food.",
  },
  {
    id: "dietary",
    Icon: LeafLineMark,
    name: "Dietary Accommodations",
    text: "Gluten-free, vegetarian, vegan and allergy-aware menus, planned into the menu — never an afterthought.",
  },
];

const eventGallery = [
  {
    src: "https://images.pexels.com/photos/17315461/pexels-photo-17315461.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Candlelit wedding table with flowers",
    caption: "Wedding · 120 guests · Media",
  },
  {
    src: "https://images.pexels.com/photos/17294730/pexels-photo-17294730.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Elegant dining setup with candles",
    caption: "Private dinner · Swarthmore",
  },
  {
    src: "https://images.pexels.com/photos/34777293/pexels-photo-34777293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Passed appetizers at an event",
    caption: "Cocktail hour · Philadelphia",
  },
  {
    src: "https://images.pexels.com/photos/17001833/pexels-photo-17001833.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Floral dessert table with candles",
    caption: "Baby shower · Drexel Hill",
  },
  {
    src: "https://images.pexels.com/photos/30562608/pexels-photo-30562608.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Rustic wedding table setting",
    caption: "Garden wedding · Chadds Ford",
  },
  {
    src: "https://images.pexels.com/photos/35985212/pexels-photo-35985212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Table with white flower centerpieces",
    caption: "Anniversary gala · Rose Valley",
  },
];

const processSteps = [
  { n: "01", title: "Conversation", text: "Tell us the occasion, the crowd, and the feeling — over a short call or email." },
  { n: "02", title: "Menu & Tasting", text: "A bespoke menu that reflects your tastes, with a private tasting for events of 50+." },
  { n: "03", title: "The Evening", text: "Chef Bryant and team arrive early, cook on site, serve quietly, and leave the kitchen spotless." },
];

const noteIcons: Record<string, typeof Wine> = { UtensilsCrossed, Wine, Handshake };

export default function CateringPage() {
  return (
    <>
      <PageHero
        eyebrow="Catering & Private Events"
        title="Great Food Brings"
        accent="People Together"
        description="From a seven-course dinner for eight to a plated wedding for two hundred — a bespoke menu that reflects your unique tastes, crafted with intention."
      />

      {/* service types */}
      <section className="bg-charcoal pb-24 pt-6 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceTypes.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 0.1}>
                <div className="group relative h-full border border-ivory/10 bg-cocoa/60 p-8 transition-colors duration-500 hover:border-gold/45">
                  <span className="pointer-events-none absolute inset-0 border border-gold opacity-0 transition-opacity duration-700 group-hover:opacity-50" aria-hidden="true" />
                  <service.Icon className="h-11 w-11 text-gold transition-transform duration-500 group-hover:-translate-y-1" />
                  <h2 className="mt-6 font-display text-2xl text-ivory">{service.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/55">{service.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-gold/15 pt-8">
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

      <div className="bg-espresso py-8">
        <SectionDivider />
      </div>

      {/* packages */}
      <section className="bg-espresso py-24 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="mb-16 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Three Ways To Host</p>
            <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl">
              Choose Your <em className="italic text-gold">Occasion</em>
            </h2>
          </Reveal>

          <div className="grid gap-6 pt-5 lg:grid-cols-3 lg:gap-8">
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
                      href="#quote"
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
        </div>
      </section>

      {/* past events gallery */}
      <section className="bg-charcoal py-24 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold/60" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Past Events</p>
              </div>
              <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
                Rooms We&rsquo;ve <em className="italic text-gold">Filled</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {eventGallery.map((shot, i) => (
              <Reveal key={shot.src} delay={(i % 3) * 0.08} y={22}>
                <figure className="group relative aspect-[16/10] overflow-hidden border border-ivory/8">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
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

      <div className="bg-night py-8">
        <SectionDivider />
      </div>

      {/* process + quote form */}
      <section id="quote" className="relative overflow-hidden bg-night py-24 sm:py-28">
        <Sprig className="pointer-events-none absolute -right-10 top-20 h-24 w-64 text-gold/10" />
        <div className="mx-auto grid max-w-[1440px] gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold/60" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Request a Custom Quote</p>
              </div>
              <h2 className="mt-5 font-display text-4xl leading-[1.08] text-ivory sm:text-5xl">
                Let&rsquo;s Plan It <em className="italic text-gold">Together.</em>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/60">
                Every event starts with a conversation, not a contract. Share the bones of your occasion
                and Chef Bryant will reply personally — with first menu thoughts and honest guidance on budget.
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              {processSteps.map((step, i) => (
                <Reveal key={step.n} delay={0.1 + i * 0.1}>
                  <div className="flex items-start gap-6 border-b border-ivory/10 pb-8">
                    <span className="text-ghost font-display text-5xl font-bold leading-none">{step.n}</span>
                    <div>
                      <h3 className="font-display text-xl text-ivory">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ivory/55">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-10 text-sm text-ivory/50">
                Prefer to talk it through?{" "}
                <a href={contact.phoneHref} className="font-semibold text-gold underline-offset-4 hover:underline">
                  {contact.phone}
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <CateringForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
