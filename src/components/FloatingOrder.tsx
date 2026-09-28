"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function FloatingOrder() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="/order"
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full border border-gold/40 bg-burgundy px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-ivory shadow-[0_12px_40px_-8px_rgba(110,31,42,0.8)] transition-transform duration-300 hover:scale-[1.04]"
        >
          <Flame size={15} className="text-gold" />
          Order Now
        </motion.a>
      )}
    </AnimatePresence>
  );
}
