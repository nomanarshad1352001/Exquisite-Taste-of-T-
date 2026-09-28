"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* Thin gold botanical divider that draws itself in as it enters the viewport. */
export default function SectionDivider({ className = "" }: { className?: string }) {
  const draw = (delay = 0, dur = 0.9) => ({
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, margin: "-30px" },
    transition: { duration: dur, delay, ease },
  });

  return (
    <div className={`flex items-center justify-center px-6 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 380 40"
        className="h-10 w-full max-w-2xl text-gold/60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      >
        <motion.path d="M8 20 H146" {...draw(0, 1.1)} />
        <motion.path d="M234 20 H372" {...draw(0, 1.1)} />
        {/* left branch */}
        <motion.path d="M176 20 C169 18.5 160 15 152 9" {...draw(0.45)} />
        <motion.path d="M168 18.6 C166.6 14.2 162.8 12.2 158.6 12.2" {...draw(0.6, 0.7)} />
        <motion.path d="M172.5 21.4 C171 25.4 167 27.2 163 26.6" {...draw(0.72, 0.7)} />
        {/* right branch (mirrored) */}
        <motion.path d="M204 20 C211 18.5 220 15 228 9" {...draw(0.45)} />
        <motion.path d="M212 18.6 C213.4 14.2 217.2 12.2 221.4 12.2" {...draw(0.6, 0.7)} />
        <motion.path d="M207.5 21.4 C209 25.4 213 27.2 217 26.6" {...draw(0.72, 0.7)} />
        {/* short stems into center stone */}
        <motion.path d="M188.4 20 H176.5" {...draw(0.85, 0.4)} />
        <motion.path d="M191.6 20 H203.5" {...draw(0.85, 0.4)} />
        <motion.circle
          cx="190"
          cy="20"
          r="1.9"
          fill="currentColor"
          stroke="none"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 1, ease }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      </svg>
    </div>
  );
}
