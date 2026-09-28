import type { Metadata } from "next";
import { ArrowUpRight, CalendarCheck, Clock, MapPin, MessagesSquare, Package, Truck } from "lucide-react";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import PaymentMarks from "@/components/PaymentMarks";
import SectionDivider from "@/components/SectionDivider";
import { Diamond } from "@/components/Ornaments";
import { orderFaqs } from "@/data/site";
import { deliveryZones, orderBundles } from "@/data/menu";

export const metadata: Metadata = {
  title: "Preorder — Order Now",
  description:
    "How preordering works at Exquisite Taste of T: ordering windows, Thursday cutoff, Saturday pickup in Drexel Hill and $5 flat delivery across Delaware County & Philadelphia.",
};

const weeklyClock = [
  { day: "SUN", time: "Evening", text: "New menu drops. VIP list members get first access before anyone else." },
  { day: "TUE", time: "9:00 AM", text: "Ordering opens for the week on the menu page." },
  { day: "THU", time: "8:00 PM", text: "Hard cutoff — the kitchen locks the ticket count and starts sourcing." },
  { day: "SAT", time: "11 AM – 4 PM", text: "Pickup 11 AM – 2 PM in Drexel Hill · Delivery 12 – 4 PM across the zone." },
];

const pickupFacts = [
  { icon: MapPin, title: "Where", text: "Drexel Hill, PA — exact address arrives with your Stripe receipt" },
  { icon: Clock, title: "When", text: "Saturdays, 11 AM – 2 PM sharp" },
  { icon: Package, title: "How", text: "Everything boxed hot, labeled, with reheating notes where needed" },
];

const deliveryFacts = [
  { icon: Truck, title: "Fee", text: "$5 flat, anywhere in the zone — no distance games" },
  { icon: Clock, title: "When", text: "Saturdays, 12 – 4 PM in insulated carriers" },
  { icon: MessagesSquare, title: "Updates", text: "Text when we're en route + photo on drop, contact-free" },
];

export default function OrderPage() {
  return (
    <>
      <PageHero
        eyebrow="Order Now"
        title="Preorder,"
        accent="Made Simple"
        description="One menu a week, cooked to order, in your hands Saturday. Here's exactly how it works — no surprises, ever."
      />

      {/* the weekly clock */}
      <section className="bg-espresso py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold/60" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">The Weekly Clock</p>
              </div>
              <h2 className="mt-5 font-display text-4xl leading-[1.08] text-ivory sm:text-5xl">
                Four Days. <em className="italic text-gold">One Rhythm.</em>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/60">
                Everything at Exquisite Taste of T runs on the same weekly heartbeat — once you know it, dinner plans
                get very easy.
              </p>
              <a
                href="/menu"
                className="btn-lux mt-9 inline-block border border-gold/60 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-gold"
              >
                Browse This Week&rsquo;s Menu
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="relative border-l border-gold/25 pl-8 sm:pl-12">
              {weeklyClock.map((stop, i) => (
                <Reveal key={stop.day} delay={i * 0.1} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[37px] top-1.5 sm:-left-[53px]">
                    <Diamond className="h-3 w-3 text-gold" />
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                    <span className="font-display text-2xl italic text-gold sm:text-3xl">{stop.day}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ivory/45">{stop.time}</span>
                  </div>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-ivory/60">{stop.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* pickup vs delivery */}
      <section className="bg-charcoal py-24 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="mb-14 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Pickup · Delivery</p>
            <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl">
              Your Saturday, <em className="italic text-gold">Your Way</em>
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* pickup */}
            <Reveal>
              <div className="relative h-full border border-ivory/10 bg-espresso/70 p-8 sm:p-10">
                <span className="absolute left-8 top-0 -translate-y-1/2 bg-charcoal px-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
                  Always Free
                </span>
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center border border-gold/40">
                    <MapPin size={24} strokeWidth={1.2} className="text-gold" />
                  </span>
                  <h3 className="font-display text-3xl text-ivory">Pickup</h3>
                </div>
                <div className="mt-8 space-y-6">
                  {pickupFacts.map((fact) => (
                    <div key={fact.title} className="flex items-start gap-4 border-b border-ivory/8 pb-6 last:border-0 last:pb-0">
                      <fact.icon size={17} strokeWidth={1.4} className="mt-0.5 shrink-0 text-gold/80" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold/80">{fact.title}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-ivory/60">{fact.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* delivery */}
            <Reveal delay={0.12}>
              <div className="relative h-full border border-gold/35 bg-espresso/70 p-8 sm:p-10">
                <span className="absolute left-8 top-0 -translate-y-1/2 bg-burgundy px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-ivory">
                  $5 Flat
                </span>
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center border border-gold/40">
                    <Truck size={24} strokeWidth={1.2} className="text-gold" />
                  </span>
                  <h3 className="font-display text-3xl text-ivory">Delivery</h3>
                </div>
                <div className="mt-8 space-y-6">
                  {deliveryFacts.map((fact) => (
                    <div key={fact.title} className="flex items-start gap-4 border-b border-ivory/8 pb-6">
                      <fact.icon size={17} strokeWidth={1.4} className="mt-0.5 shrink-0 text-gold/80" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold/80">{fact.title}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-ivory/60">{fact.text}</p>
                      </div>
                    </div>
                  ))}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold/80">The Zone</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {deliveryZones.map((zone) => (
                        <span
                          key={zone}
                          className="border border-ivory/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/55"
                        >
                          {zone}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="bg-espresso py-8">
        <SectionDivider />
      </div>

      {/* quick bundles */}
      <section className="bg-espresso py-24 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="mb-14 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">In a Hurry?</p>
            <h2 className="mt-4 font-display text-4xl text-ivory sm:text-5xl">
              Quick <em className="italic text-gold">Bundles</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ivory/60">
              Chef-built combinations — one Stripe link each, no decisions required.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {orderBundles.map((bundle, i) => (
              <Reveal key={bundle.id} delay={i * 0.1}>
                <div className="group relative flex h-full flex-col border border-ivory/10 bg-night/50 p-8 transition-colors duration-500 hover:border-gold/50">
                  <span className="text-ghost absolute right-4 top-3 font-display text-6xl font-bold leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CalendarCheck size={22} strokeWidth={1.2} className="text-gold" />
                  <h3 className="mt-5 font-display text-2xl text-ivory">{bundle.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory/55">{bundle.description}</p>
                  <p className="mt-6 font-display text-4xl italic text-gold">${bundle.price}</p>
                  <a
                    href={bundle.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn mt-6 inline-flex items-center justify-between border border-gold/40 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold hover:text-charcoal"
                  >
                    Order via Stripe
                    <ArrowUpRight size={14} className="transition-transform duration-500 group-hover/btn:rotate-45" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 flex flex-col items-center gap-6">
            <PaymentMarks />
            <p className="text-xs text-ivory/40">
              Prefer to build your own spread?{" "}
              <a href="/menu" className="font-semibold text-gold underline-offset-4 hover:underline">
                Open the full menu
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <FAQ
        items={orderFaqs}
        eyebrow="Ordering Questions"
        title="Before You"
        accent="Order"
        description="Payment, changes and cancellations, allergies, and the pickup rundown — answered plainly."
      />
    </>
  );
}
