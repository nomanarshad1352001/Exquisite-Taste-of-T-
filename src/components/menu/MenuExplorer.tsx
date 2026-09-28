"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Clock, MapPin, Truck } from "lucide-react";
import { categories, dishes, preorderNotes, type Dish, type DishCategory } from "@/data/menu";
import DishCard from "./DishCard";
import DishModal from "./DishModal";
import Reveal from "@/components/Reveal";
import { DietaryLegend } from "@/components/DietaryMarks";
import { ClocheMark, WheatMark, CoupeMark, GlassMark } from "@/components/Ornaments";

const categoryIcons: Record<DishCategory, typeof ClocheMark> = {
  mains: ClocheMark,
  sides: WheatMark,
  sweets: CoupeMark,
  drinks: GlassMark,
};

const noteIcons: Record<string, typeof Clock> = { Clock, MapPin, Truck };

export default function MenuExplorer() {
  const [selected, setSelected] = useState<Dish | null>(null);

  return (
    <>
      {/* quick-jump pills */}
      <div className="mx-auto mt-12 flex max-w-[1440px] flex-wrap items-center justify-center gap-3 px-5 sm:px-8 lg:px-12">
        {categories.map((cat) => {
          const Mark = categoryIcons[cat.id];
          return (
            <a
              key={cat.id}
              href={`#cat-${cat.id}`}
              className="flex items-center gap-2.5 border border-ivory/12 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-ivory/60 transition-colors duration-300 hover:border-gold/60 hover:text-gold"
            >
              <Mark className="h-4 w-4" />
              {cat.label}
            </a>
          );
        })}
      </div>

      <DietaryLegend className="mt-10 px-5" />

      {categories.map((cat) => {
        const list = dishes.filter((d) => d.category === cat.id);
        const Mark = categoryIcons[cat.id];
        return (
          <section key={cat.id} id={`cat-${cat.id}`} className="mx-auto max-w-[1440px] scroll-mt-28 px-5 pt-20 sm:px-8 lg:px-12">
            <Reveal className="mb-10 flex items-center gap-5">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="flex items-center gap-4">
                <Mark className="h-6 w-6 text-gold" />
                <span className="font-display text-3xl text-ivory sm:text-4xl">{cat.label}</span>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-ivory/35">
                  {list.length} items
                </span>
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {list.map((dish, i) => (
                <DishCard key={dish.id} dish={dish} index={i} onOrder={setSelected} />
              ))}
            </div>
          </section>
        );
      })}

      {/* logistics strip */}
      <div className="mx-auto mt-20 max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-px overflow-hidden border border-gold/15 bg-gold/15 sm:grid-cols-3">
          {preorderNotes.map((note) => {
            const Icon = noteIcons[note.icon];
            return (
              <div key={note.title} className="flex items-start gap-4 bg-night/60 p-6">
                <Icon size={20} strokeWidth={1.4} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">{note.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/60">{note.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && <DishModal dish={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}
