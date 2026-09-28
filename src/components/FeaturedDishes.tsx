"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { dishes, type Dish } from "@/data/menu";
import DishCard from "./menu/DishCard";
import DishModal from "./menu/DishModal";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function FeaturedDishes() {
  const [selected, setSelected] = useState<Dish | null>(null);
  const featured = dishes.filter((d) => d.featured).slice(0, 4);

  return (
    <section className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Chef's Picks"
          title="Featured This"
          accent="Week"
          description="Four plates Chef Bryant is most excited about right now — pulled fresh from the full weekly menu."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} onOrder={setSelected} />
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 text-center">
          <a
            href="/menu"
            className="btn-lux inline-block border border-gold/60 px-10 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-gold"
          >
            View the Full Menu
          </a>
          <p className="mt-4 text-xs text-ivory/40">Order by Thursday 8 PM — pickup or delivery Saturday.</p>
        </Reveal>
      </div>

      <AnimatePresence>
        {selected && <DishModal dish={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
