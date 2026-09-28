import Image from "next/image";
import { dishes } from "@/data/menu";

/* Infinite sliding rail of this week's dishes — pure CSS motion, pauses on hover. */
export default function PhotoRail() {
  const rail = [...dishes, ...dishes];

  return (
    <section aria-label="This week's dishes, in photos" className="relative overflow-hidden border-t border-gold/10 bg-night">
      <div className="marquee-track relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-night to-transparent sm:w-28" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-night to-transparent sm:w-28" aria-hidden="true" />

        <div className="flex w-max animate-photorail">
          {rail.map((dish, i) => (
            <figure
              key={`${dish.id}-${i}`}
              aria-hidden={i >= dishes.length}
              className="group relative h-44 w-64 shrink-0 overflow-hidden border-r border-gold/10 sm:h-52 sm:w-80"
            >
              <Image
                src={dish.image}
                alt={i < dishes.length ? dish.alt : ""}
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/5 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                <span className="truncate text-[10px] font-bold uppercase tracking-[0.18em] text-ivory/85">
                  {dish.name}
                </span>
                <span className="shrink-0 font-display text-sm italic text-gold">${dish.price}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
