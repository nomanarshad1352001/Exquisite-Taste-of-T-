"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Dish } from "@/data/menu";
import { DietaryTag } from "@/components/DietaryMarks";

interface DishCardProps {
  dish: Dish;
  index: number;
  onOrder: (dish: Dish) => void;
}

export default function DishCard({ dish, index, onOrder }: DishCardProps) {
  const soldOut = dish.availability === "soldout";
  const low = dish.availability === "low";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-full"
    >
      <div
        className={`group relative flex h-full flex-col border bg-cocoa transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          soldOut
            ? "border-ivory/6"
            : "border-ivory/8 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_32px_70px_-26px_rgba(0,0,0,0.7)]"
        }`}
      >
        {!soldOut && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 border border-gold opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-60"
          />
        )}

        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={dish.image}
            alt={dish.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className={`object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              soldOut ? "grayscale-[60%]" : "group-hover:scale-[1.07]"
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-cocoa via-transparent to-transparent ${soldOut ? "opacity-100" : "opacity-80"}`} />

          {dish.tag && !soldOut && (
            <span className="absolute left-4 top-4 border border-gold/30 bg-night/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-gold backdrop-blur-sm">
              {dish.tag}
            </span>
          )}
          {low && !soldOut && (
            <span className="absolute right-4 top-4 border border-gold/50 bg-night/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-gold-soft backdrop-blur-sm">
              Few Left
            </span>
          )}

          {soldOut && (
            <span className="absolute inset-0 z-10 grid place-items-center bg-night/55 backdrop-blur-[2px]">
              <span className="border border-ivory/60 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.42em] text-ivory">
                Sold Out
              </span>
            </span>
          )}

          <span className="text-ghost absolute -bottom-1 right-3 font-display text-6xl font-bold leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className={`font-display text-xl leading-snug ${soldOut ? "text-ivory/50" : "text-ivory"}`}>
              {dish.name}
            </h3>
            <span className={`mt-0.5 shrink-0 font-display text-xl italic ${soldOut ? "text-gold/40" : "text-gold"}`}>
              ${dish.price}
            </span>
          </div>
          <p className={`mt-3 flex-1 text-sm leading-relaxed ${soldOut ? "text-ivory/35" : "text-ivory/55"}`}>
            {dish.description}
          </p>

          <div className="mt-5 flex items-end justify-between gap-3">
            <div className="flex items-end gap-4">
              {dish.dietary.length > 0 && (
                <span className={`flex gap-3 ${soldOut ? "opacity-40" : ""}`}>
                  {dish.dietary.map((d) => (
                    <DietaryTag key={d} type={d} />
                  ))}
                </span>
              )}
              <span className="pb-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-ivory/40">
                {dish.serves}
              </span>
            </div>
          </div>

          {soldOut ? (
            <span className="mt-6 flex items-center justify-center border border-ivory/12 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-ivory/35">
              Returns Next Sunday
            </span>
          ) : (
            <button
              type="button"
              onClick={() => onOrder(dish)}
              className="group/btn relative mt-6 inline-flex items-center justify-center gap-2 overflow-hidden border border-gold/40 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-gold transition-[color,transform] duration-500 hover:scale-[1.02] hover:text-charcoal"
            >
              <span className="absolute inset-0 -z-0 translate-y-full bg-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-y-0" />
              <span className="relative">Order This Item</span>
              <ArrowUpRight size={13} className="relative transition-transform duration-500 group-hover/btn:rotate-45" />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
