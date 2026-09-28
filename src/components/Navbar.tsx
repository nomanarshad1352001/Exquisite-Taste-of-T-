"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { navLinks, contact } from "@/data/site";
import { Diamond } from "./Ornaments";

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <a href="/" onClick={onClick} className="group flex items-center gap-3">
      <span className="relative grid h-11 w-11 place-items-center">
        <span className="absolute inset-[3px] rotate-45 border border-gold/50 transition-colors duration-500 group-hover:border-gold" />
        <span className="font-display text-xl font-semibold italic text-gold">T.</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-wide text-ivory">
          Exquisite Taste <em className="italic text-gold">of T</em>
        </span>
        <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.42em] text-ivory/50">
          Chef-Owned · Philadelphia
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => !href.startsWith("/#") && pathname === href;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-gold/15 bg-night/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Wordmark />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`link-sweep flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 ${
                  isActive(link.href) ? "text-gold" : "text-ivory/70 hover:text-ivory"
                }`}
              >
                {isActive(link.href) && <Diamond className="h-1.5 w-1.5 text-gold" />}
                {link.label}
              </a>
            ))}
            <a
              href="/order"
              className="btn-lux border border-gold/60 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold"
            >
              Order Now
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center border border-ivory/20 text-ivory transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] flex flex-col bg-night/97 backdrop-blur-2xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex h-20 items-center justify-between px-5 sm:px-8">
              <Wordmark onClick={() => setOpen(false)} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center border border-ivory/20 text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-8 sm:px-12" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline gap-5 border-b border-ivory/8 py-4"
                >
                  <span className="font-display text-sm italic text-gold/70">0{i + 1}</span>
                  <span
                    className={`font-display text-4xl transition-colors duration-300 group-hover:text-gold sm:text-5xl ${
                      isActive(link.href) ? "text-gold" : "text-ivory"
                    }`}
                  >
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-between gap-4 px-8 pb-10 sm:px-12"
            >
              <a href={contact.phoneHref} className="flex items-center gap-3 text-sm text-ivory/70">
                <Phone size={15} className="text-gold" /> {contact.phone}
              </a>
              <div className="flex items-center gap-5 text-ivory/60">
                <a
                  href={contact.instagram}
                  className="flex items-center gap-1 text-[11px] uppercase tracking-[0.24em] transition-colors hover:text-gold"
                >
                  Instagram <ArrowUpRight size={13} />
                </a>
                <a
                  href={contact.facebook}
                  className="flex items-center gap-1 text-[11px] uppercase tracking-[0.24em] transition-colors hover:text-gold"
                >
                  Facebook <ArrowUpRight size={13} />
                </a>
                <Diamond className="h-1.5 w-1.5 text-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em]">{contact.area}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
