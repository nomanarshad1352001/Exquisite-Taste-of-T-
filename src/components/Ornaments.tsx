/* Thin, single-color gold line-art ornaments — the quiet luxury details. */

export function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" className={className} aria-hidden="true" fill="currentColor">
      <rect x="2.2" y="2.2" width="5.6" height="5.6" transform="rotate(45 5 5)" />
    </svg>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-gold ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/70 sm:w-24" />
      <Diamond className="h-2 w-2 shrink-0" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/70 sm:w-24" />
    </div>
  );
}

/* Botanical sprig — fine gold linework used behind headings and as flourish. */
export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 56"
      fill="none"
      className={className}
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    >
      <path d="M4 52C28 45 50 34 70 24 90 14 114 6 136 5" />
      <path d="M26 45c2-8 9-13 17-14-1 8-8 13-17 14Z" />
      <path d="M26 45c-6-3-9-9-9-16 6 2 10 8 9 16Z" />
      <path d="M52 32c1-8 8-14 16-16 0 8-7 14-16 16Z" />
      <path d="M52 32c-7-2-11-8-12-15 7 1 12 7 12 15Z" />
      <path d="M80 20c1-8 7-14 15-16 0 8-6 14-15 16Z" />
      <path d="M80 20c-7-1-12-7-13-14 7 1 12 6 13 14Z" />
      <path d="M106 12c1-7 6-11 13-12-1 7-6 11-13 12Z" />
      <circle cx="136" cy="5" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Fine wheat motif — faint background linework and category accent. */
export function WheatSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 72"
      fill="none"
      className={className}
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    >
      <path d="M12 70V9" />
      <path d="M12 16 4 8.5" />
      <path d="M12 16 20 8.5" />
      <path d="M12 23 3 15.5" />
      <path d="M12 23 21 15.5" />
      <path d="M12 30 4 23" />
      <path d="M12 30 20 23" />
      <path d="M12 37 6.5 32" />
      <path d="M12 37 17.5 32" />
      <path d="M12 70C7.5 66 5 60.5 5 55" />
      <path d="M12 62C16 59.2 18.5 54.8 19 50" />
    </svg>
  );
}

/* Category marks — thin single-color line icons beside menu categories. */
export function ClocheMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M2.5 18.5h19" />
      <path d="M4.5 18.5a7.5 7.5 0 0 1 15 0" />
      <path d="M12 11V8.6" />
      <path d="M10.4 8.6h3.2" />
    </svg>
  );
}

export function WheatMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M12 21V5" />
      <path d="M12 8.5 6.5 4.2" />
      <path d="M12 8.5 17.5 4.2" />
      <path d="M12 12.5 6 8.6" />
      <path d="M12 12.5 18 8.6" />
      <path d="M12 16.5 6.8 13" />
      <path d="M12 16.5 17.2 13" />
    </svg>
  );
}

export function GlassMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3h8l-1.4 16.6a1.8 1.8 0 0 1-3.2 0L10 3" />
      <path d="M9.4 9.5h5.2" />
      <path d="M15.5 3 18 1.2" />
    </svg>
  );
}

export function CoupeMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M6 4.5h12" />
      <path d="M6 4.5c0 4.6 2.6 7 6 7s6-2.4 6-7" />
      <path d="M12 11.5v6.2" />
      <path d="M7.2 19.5h9.6" />
    </svg>
  );
}

/* Concentric fine arcs — gold-foil-style linework for hero backgrounds. */
export function ArcLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1">
      {[140, 200, 260, 320, 380, 440, 500].map((r) => (
        <circle key={r} cx="0" cy="600" r={r} />
      ))}
    </svg>
  );
}

/* Minimal plate + utensils mark. */
export function PlateMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="1.1"
    >
      <circle cx="24" cy="24" r="14" />
      <circle cx="24" cy="24" r="8" />
      <path d="M3 10v10c0 2 1.5 3 3 3s3-1 3-3V10M6 10v13M6 23v15" strokeLinecap="round" />
      <path d="M42 10c-3 0-5 4-5 9 0 4 1.5 5 2.5 5V38M42 10v13" strokeLinecap="round" />
    </svg>
  );
}
