/* Custom thin-line icons for the services page. */

export function CorporateMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6.8" width="14" height="10" />
      <path d="M7.5 6.8V5.2A1.2 1.2 0 0 1 8.7 4h2.6a1.2 1.2 0 0 1 1.2 1.2v1.6" />
      <path d="M3 11.5h14" />
      <path d="M9 11.5v1.6h2v-1.6" />
    </svg>
  );
}

export function StaffMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <path d="M10 6.6a2 2 0 1 0 0-.01" />
      <path d="M6 16.5c.4-3 1.9-4.4 4-4.4s3.6 1.4 4 4.4" />
      <path d="M4.4 7.6a1.5 1.5 0 1 0 0-.01" />
      <path d="M2.5 12.8c.3-2.2 1-3.1 2.6-3.1" />
      <path d="M15.6 7.6a1.5 1.5 0 1 0 0-.01" />
      <path d="M17.5 12.8c-.3-2.2-1-3.1-2.6-3.1" />
    </svg>
  );
}

export function MenuScrollMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <path d="M5.5 2.8h11v13.4a1 1 0 0 1-1 1H5.5" />
      <path d="M5.5 2.8a1.6 1.6 0 0 0-1.6 1.6v11.2a1.6 1.6 0 0 0 1.6 1.6" />
      <path d="M8 6.7h6" />
      <path d="M8 10h6" />
      <path d="M8 13.3h3.5" />
    </svg>
  );
}
