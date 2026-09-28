import Reveal from "./Reveal";
import { GoldRule, Sprig } from "./Ornaments";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={`relative ${centered ? "text-center" : "text-left"}`}>
      <Sprig
        className={`pointer-events-none absolute -top-10 h-14 w-36 text-gold/25 ${
          centered ? "left-1/2 -translate-x-1/2" : "-left-6"
        }`}
      />
      <div className={`flex items-center gap-4 ${centered ? "justify-center" : "justify-start"}`}>
        <span className="hidden h-px w-10 bg-gold/60 sm:block" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
        <span className="hidden h-px w-10 bg-gold/60 sm:block" />
      </div>
      <h2
        className={`mt-5 font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl ${
          dark ? "text-ink" : "text-ivory"
        }`}
      >
        {title} {accent && <em className="italic text-gold">{accent}</em>}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${
            centered ? "mx-auto" : ""
          } ${dark ? "text-ink/70" : "text-ivory/60"}`}
        >
          {description}
        </p>
      )}
      {centered && <GoldRule className="mt-7" />}
    </Reveal>
  );
}
