"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { CalendarClock, ChevronDown, ConciergeBell, UtensilsCrossed } from "lucide-react";
import { ArcLines, Sprig, WheatSprig } from "./Ornaments";

const ease = [0.22, 1, 0.36, 1] as const;

const HERO_VIDEO = "https://videos.pexels.com/video-files/33738989/14324545_3840_2160_24fps.mp4";
const HERO_POSTER =
  "https://images.pexels.com/videos/33738989/4kvideo-behindthescenescooking-cheflife-chefskills-33738989.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200";

function LineReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [useVideo, setUseVideo] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  /* Defer to the poster on reduced-motion or data-saver connections. */
  useEffect(() => {
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const saveData =
      connection?.saveData === true ||
      (connection?.effectiveType ? ["slow-2g", "2g"].includes(connection.effectiveType) : false);
    if (!reduce && !saveData) setUseVideo(true);
  }, [reduce]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/* backdrop */}
      <motion.div style={{ y: bgY }} className="absolute -inset-y-16 inset-x-0">
        <motion.div
          className="relative h-full w-full"
          initial={reduce ? false : { scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease }}
        >
          {useVideo ? (
            <motion.video
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={HERO_POSTER}
              aria-label="Flames rising as a chef works in a dark professional kitchen"
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </motion.video>
          ) : (
            <Image
              src={HERO_POSTER}
              alt="Flames rising as a chef works in a dark professional kitchen"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(16,13,11,0.9)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />
      </motion.div>

      {/* fine gold linework — foil-style arcs + wheat motif */}
      <ArcLines className="pointer-events-none absolute -bottom-64 -left-48 z-[1] h-[640px] w-[640px] text-gold/[0.13]" />
      <WheatSprig className="pointer-events-none absolute bottom-24 right-20 z-[1] hidden h-80 text-gold/[0.12] lg:block" />

      {/* vertical edge note */}
      <span className="absolute right-7 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] font-medium uppercase tracking-[0.5em] text-ivory/35 lg:block">
        Est. Philadelphia — MMXX
      </span>

      {/* content */}
      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-40 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-gold" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold">
            Chef-Owned · Preorder Only · Philadelphia & Delco
          </p>
        </motion.div>

        <h1 className="font-display text-[15.5vw] leading-[0.94] text-ivory sm:text-8xl lg:text-[7.5rem]">
          <LineReveal delay={0.45}>Exquisite</LineReveal>
          <LineReveal delay={0.6}>
            <span>
              Taste <em className="italic font-medium text-gold">of T.</em>
            </span>
          </LineReveal>
        </h1>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease }}
            className="max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
          >
            Chef-crafted meals made to order each week — plus full-service catering and private
            dinners that turn your table into the best seat in the city.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05, ease }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="/order"
              className="btn-lux-dark bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-charcoal"
            >
              Preorder Now
            </a>
            <a
              href="/catering"
              className="btn-lux border border-ivory/30 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-ivory"
            >
              Inquire About Catering
            </a>
          </motion.div>
        </div>

        {/* promise strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease }}
          className="mt-14 grid grid-cols-1 gap-y-4 border-t border-gold/20 pt-6 sm:grid-cols-3 sm:divide-x sm:divide-gold/15"
        >
          {[
            { icon: CalendarClock, text: "Preorder Tue 9 AM — Thu 8 PM" },
            { icon: UtensilsCrossed, text: "Saturday pickup & delivery" },
            { icon: ConciergeBell, text: "Full-service catering & private events" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 sm:justify-center">
              <item.icon size={17} strokeWidth={1.5} className="shrink-0 text-gold" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-ivory/60">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#intro"
        aria-label="Scroll to menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-gold/70 transition-colors hover:text-gold md:flex"
      >
        <Sprig className="h-6 w-14 rotate-90 opacity-60" />
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={16} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
