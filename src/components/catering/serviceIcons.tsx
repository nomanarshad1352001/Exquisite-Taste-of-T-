/* Custom thin-line service icons for the catering page. */

export function StationsMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <circle cx="10" cy="2.4" r="0.9" />
      <path d="M10 4.2v12" />
      <path d="M6.6 7h6.8" />
      <path d="M4.9 11.4h10.2" />
      <path d="M3.2 15.8h13.6" />
      <path d="M5.8 18.8h8.4" />
    </svg>
  );
}

export function LeafLineMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <path d="M15.5 2.5C8.5 4.5 4.5 8.5 4.5 13.5c0 1.6.6 3 1.7 4" />
      <path d="M6.5 17C8.5 11.5 11.5 7.5 15.5 2.5" />
      <path d="M9 12.5c0-2 .8-3.6 2.2-4.7" />
    </svg>
  );
}
