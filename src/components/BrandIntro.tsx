import Reveal from "./Reveal";
import { GoldRule, PlateMark } from "./Ornaments";

export default function BrandIntro() {
  return (
    <section id="intro" className="relative bg-charcoal py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <PlateMark className="mx-auto h-11 w-11 text-gold/60" />
          <p className="mt-8 font-display text-2xl leading-snug text-ivory/90 sm:text-[1.9rem]">
            Exquisite Taste of T began at a crowded Sunday table in Drexel Hill — the belief that a
            meal cooked for <em className="italic text-gold">someone specific</em> simply tastes
            better. Every plate is sourced, seasoned and finished by Chef Bryant himself, then handed to
            you with the same care your grandmother called love.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <GoldRule className="mt-10" />
        </Reveal>
      </div>
    </section>
  );
}
