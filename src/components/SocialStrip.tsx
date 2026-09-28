import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { contact, socialTiles } from "@/data/site";
import Reveal from "./Reveal";

export default function SocialStrip() {
  return (
    <section className="relative border-t border-gold/10 bg-charcoal pb-24 pt-20 sm:pb-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold/60" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">Follow the Kitchen</p>
            </div>
            <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
              Behind the Line, <em className="italic text-gold">Daily</em>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={contact.instagram}
              className="group flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-ivory/55 transition-colors hover:text-gold"
            >
              Instagram <ArrowUpRight size={13} className="transition-transform duration-500 group-hover:rotate-45" />
            </a>
            <a
              href={contact.facebook}
              className="group flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-ivory/55 transition-colors hover:text-gold"
            >
              Facebook <ArrowUpRight size={13} className="transition-transform duration-500 group-hover:rotate-45" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {socialTiles.map((tile, i) => (
            <Reveal key={tile.src} delay={(i % 6) * 0.06} y={20}>
              <a href={contact.instagram} className="group relative block aspect-square overflow-hidden border border-ivory/8">
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-night/0 transition-colors duration-500 group-hover:bg-night/45" />
                <span className="absolute inset-0 flex translate-y-2 flex-col items-center justify-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} className="text-gold" />
                  <span className="px-3 text-center text-[9px] font-bold uppercase tracking-[0.22em] text-ivory/90">
                    {tile.caption}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
