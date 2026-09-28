import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { contact, navLinks } from "@/data/site";
import { GoldRule, PlateMark } from "./Ornaments";
import PaymentMarks from "./PaymentMarks";

const services = [
  { label: "Weekly Preorder Meals", href: "/menu" },
  { label: "All Services", href: "/services" },
  { label: "The Intimate Table", href: "/catering" },
  { label: "Celebrations & Socials", href: "/catering" },
  { label: "Weddings & Galas", href: "/catering" },
  { label: "Corporate Catering", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <span className="text-ghost pointer-events-none absolute -bottom-16 right-0 select-none font-display text-[18rem] font-bold leading-none">
        T.
      </span>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-10 pt-20 sm:px-8 lg:px-12">
        {/* wordmark */}
        <div className="flex flex-col items-center text-center">
          <PlateMark className="h-12 w-12 text-gold/60" />
          <p className="mt-6 font-display text-4xl text-ivory sm:text-5xl">
            Exquisite Taste <em className="italic text-gold">of T</em>
          </p>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-ivory/45">
            Chef-Owned · Preorder Meals · Catering · {contact.area}
          </p>
          <GoldRule className="mt-8" />
        </div>

        {/* columns */}
        <div className="mt-16 grid gap-12 border-t border-ivory/8 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.34em] text-gold">Explore</h3>
            <ul className="mt-6 space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-sweep text-sm text-ivory/55 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.34em] text-gold">Services</h3>
            <ul className="mt-6 space-y-3.5">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="link-sweep text-sm text-ivory/55 transition-colors hover:text-ivory">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.34em] text-gold">Contact</h3>
            <ul className="mt-6 space-y-4 text-sm text-ivory/55">
              <li>
                <a href={contact.phoneHref} className="flex items-center gap-3 transition-colors hover:text-ivory">
                  <Phone size={14} className="shrink-0 text-gold/80" /> {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 transition-colors hover:text-ivory">
                  <Mail size={14} className="shrink-0 text-gold/80" />
                  <span className="break-all">{contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 shrink-0 text-gold/80" />
                <span>
                  {contact.area}
                  <span className="mt-1 block text-xs text-ivory/40">Pickup: {contact.pickup}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="mt-1 shrink-0 text-gold/80" />
                <span>{contact.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.34em] text-gold">Follow Along</h3>
            <p className="mt-6 text-sm leading-relaxed text-ivory/55">
              Menu drops go live Sunday evenings — first look is always on social.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {[
                { label: "Instagram", href: contact.instagram },
                { label: "Facebook", href: contact.facebook },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group inline-flex w-fit items-center gap-2 border border-ivory/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/70 transition-all duration-400 hover:border-gold hover:text-gold"
                >
                  {s.label}
                  <ArrowUpRight size={13} className="transition-transform duration-500 group-hover:rotate-45" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-16 border-t border-ivory/8 pt-8">
          <PaymentMarks className="mb-7" />
          <div className="flex flex-col items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.24em] text-ivory/35 sm:flex-row">
            <p>© {new Date().getFullYear()} Exquisite Taste of T. All rights reserved.</p>
            <p>Secure preorders by Stripe · Crafted with care in Delaware County, PA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
