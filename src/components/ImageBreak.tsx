"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { GoldRule, Sprig } from "./Ornaments";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ImageBreak() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? "0%" : "-10%", reduce ? "0%" : "10%"]);

  return (
    <section
      ref={ref}
      aria-label="Brand belief quote"
      className="relative flex h-[74vh] min-h-[480px] items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute -inset-y-16 inset-x-0">
        <Image
          src="https://images.pexels.com/photos/6192003/pexels-photo-6192003.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt="A family gathered around a table sharing a feast together"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,19,17,0.12),rgba(22,19,17,0.92))]" />
      </motion.div>

      <Sprig className="pointer-events-none absolute left-8 top-10 h-16 w-40 text-gold/20" />
      <Sprig className="pointer-events-none absolute bottom-10 right-8 h-16 w-40 -scale-x-100 text-gold/20" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="text-[10px] font-bold uppercase tracking-[0.42em] text-gold"
        >
          Why We Cook
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, delay: 0.12, ease }}
          className="mt-6 font-display text-3xl leading-[1.18] text-ivory sm:text-5xl lg:text-6xl"
        >
          Great food has the power to{" "}
          <em className="text-shimmer italic">bring people together.</em>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <GoldRule className="mt-10" />
          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.4em] text-ivory/60">— Chef Bryant</p>
        </motion.div>
      </div>
    </section>
  );
}
