import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Exquisite Taste of T — chef-owned preorder meals and catering in Drexel Hill, serving Philadelphia & Delaware County. Call, email, or send a message.",
};

const infoRows = [
  { icon: Phone, label: "Call or Text", value: contact.phone, href: contact.phoneHref },
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: "Service Area", value: contact.area, href: undefined as string | undefined, sub: `Pickup: ${contact.pickup}` },
  { icon: Clock, label: "Hours", value: contact.hours, href: undefined as string | undefined, sub: "Catering replies within one business day" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Say Hello."
        accent="We Answer."
        description="A question about preordering, an event taking shape, or just craving something specific — every message lands with a real person."
      />

      <section className="bg-charcoal pb-24 pt-6 sm:pb-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          {/* info */}
          <div>
            <div className="space-y-5">
              {infoRows.map((row, i) => (
                <Reveal key={row.label} delay={i * 0.08}>
                  <div className="flex items-start gap-5 border-b border-ivory/10 pb-5">
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
                      {row.sub && <p className="mt-0.5 text-xs text-ivory/45">{row.sub}</p>}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-9 flex items-center gap-6">
                <a
                  href={contact.instagram}
                  className="group flex items-center gap-1.5 border border-ivory/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-ivory/70 transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  Instagram <ArrowUpRight size={13} className="transition-transform duration-500 group-hover:rotate-45" />
                </a>
                <a
                  href={contact.facebook}
                  className="group flex items-center gap-1.5 border border-ivory/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-ivory/70 transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  Facebook <ArrowUpRight size={13} className="transition-transform duration-500 group-hover:rotate-45" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 border border-gold/20 bg-espresso/50 p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold">The Fastest Answer</p>
                <p className="mt-2 text-sm leading-relaxed text-ivory/60">
                  For this week&rsquo;s menu questions, text is quickest — the kitchen checks messages
                  between the morning prep and the Saturday handoff.
                </p>
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* service area map */}
      <section className="border-t border-gold/10 bg-night py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="mb-10 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold/60" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Find Us</p>
              </div>
              <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
                Home Base <em className="italic text-gold">Drexel Hill</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ivory/55">
              Pickup in Drexel Hill, PA — delivering across Delaware County and Philadelphia, every Saturday.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative border border-gold/25 p-2">
              <div className="pointer-events-none absolute inset-0 border border-gold/10" aria-hidden="true" />
              <iframe
                title="Exquisite Taste of T — service area map, Drexel Hill, PA"
                src="https://www.google.com/maps?q=Drexel%20Hill%2C%20PA%2019026&z=11&output=embed"
                className="h-[380px] w-full grayscale-[0.45] contrast-[1.05] opacity-90 sm:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
