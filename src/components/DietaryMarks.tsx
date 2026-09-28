/* Dietary marks — thin gold single-color line style, never emojis. */

export type Dietary = "veg" | "vegan" | "gf";

function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <path d="M15.5 2.5C8.5 4.5 4.5 8.5 4.5 13.5c0 1.6.6 3 1.7 4" />
      <path d="M6.5 17C8.5 11.5 11.5 7.5 15.5 2.5" />
    </svg>
  );
}

function SproutMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <path d="M10 17.5v-6" />
      <path d="M10 11.5c-3.4-.3-5.3-2.2-5.3-5.2 3.2.1 5 1.7 5.3 5.2Z" />
      <path d="M10 9.7c.3-2.9 2.1-4.4 5.4-4.4 0 3.1-2 4.4-5.4 4.4Z" />
    </svg>
  );
}

function WheatFreeMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <circle cx="10" cy="10" r="8" />
      <path d="M10 14.5V6.5" />
      <path d="M10 8.5 7.8 6.6" />
      <path d="M10 8.5l2.2-1.9" />
      <path d="M10 11 7.8 9.1" />
      <path d="M10 11l2.2-1.9" />
      <path d="m5 5 10 10" />
    </svg>
  );
}

const marks: Record<Dietary, { Icon: typeof LeafMark; label: string; name: string }> = {
  veg: { Icon: LeafMark, label: "V", name: "Vegetarian" },
  vegan: { Icon: SproutMark, label: "VG", name: "Vegan" },
  gf: { Icon: WheatFreeMark, label: "GF", name: "Gluten-Free" },
};

export function DietaryTag({ type }: { type: Dietary }) {
  const { Icon, label, name } = marks[type];
  return (
    <span className="flex flex-col items-center gap-1.5" title={name}>
      <Icon className="h-[18px] w-[18px] text-gold/80" />
      <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-gold/60">{label}</span>
    </span>
  );
}

export function DietaryLegend({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-3 ${className}`}>
      {(Object.keys(marks) as Dietary[]).map((key) => {
        const { Icon, name } = marks[key];
        return (
          <span key={key} className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory/50">
            <Icon className="h-4 w-4 text-gold/80" />
            {name}
          </span>
        );
      })}
    </div>
  );
}
