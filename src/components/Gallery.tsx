import Image from "next/image";
import { galleryTiles } from "@/data/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/* Editorial mosaic — varied spans over a 6-column rhythm. */
const spans: Record<string, string> = {
  c1: "col-span-6 row-span-3 md:col-span-3",
  c2: "col-span-3 row-span-2 md:col-span-3",
  c3: "col-span-3 row-span-1 md:col-span-3",
  c4: "col-span-3 row-span-1 md:col-span-2",
  c5: "col-span-3 row-span-2 md:col-span-2",
  c6: "col-span-3 row-span-1 md:col-span-2",
  c7: "col-span-3 row-span-2 md:col-span-3",
  c8: "col-span-3 row-span-2 md:col-span-3",
};

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="From the Kitchen"
          title="Moments,"
          accent="Plated"
          description="A look at the weekly drops, private dinners and celebrations that leave the kitchen each Saturday."
        />

        <div className="mt-16 grid auto-rows-[96px] grid-cols-6 gap-3 sm:auto-rows-[120px] sm:gap-4 lg:auto-rows-[132px]">
          {galleryTiles.map((tile, i) => (
            <Reveal key={tile.src} delay={(i % 4) * 0.08} className={spans[tile.span]} y={24}>
              <figure className="group relative h-full w-full overflow-hidden border border-ivory/8">
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-95" />
                <div className="absolute inset-2 border border-gold/0 transition-all duration-700 group-hover:border-gold/40" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory/85 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 sm:text-[11px]">
                  <span className="mr-2 inline-block h-px w-6 bg-gold align-middle" />
                  {tile.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
