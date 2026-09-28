/* Custom thin-line add-on symbols — gold-line luxury, never clip-art or emoji. */

function ProteinMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M10 2.5c2 2.8 5 4.4 5 8.3a5 5 0 0 1-10 0c0-3.9 3-5.5 5-8.3Z" />
      <path d="M10 8.5c1 1.4 2.4 2.2 2.4 4a2.4 2.4 0 0 1-4.8 0c0-1.8 1.4-2.6 2.4-4Z" />
    </svg>
  );
}

function FamilyMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8.2h12v6.3a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 14.5V8.2Z" />
      <path d="M5.5 8.2V5.5A1.5 1.5 0 0 1 7 4h6a1.5 1.5 0 0 1 1.5 1.5v1.5" />
    </svg>
  );
}

function SweetMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M4.5 16.5h11" />
      <path d="M5.5 16.5v-4h9v4" />
      <path d="M7.5 12.5v-3h5v3" />
      <path d="M10 9.5V7.2" />
      <path d="M10 5.6a1 1 0 1 0 0 .01" />
    </svg>
  );
}

function SliceMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 15.5h13c0-4.8-2-8.2-6.6-10l-6.4 10Z" />
      <path d="m7 15.5 3-4.7" />
      <path d="M12.4 8.4a1 1 0 1 0 .01 0" />
    </svg>
  );
}

function SideMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M10 17.5V4.5" />
      <path d="M10 7.5 6 4" />
      <path d="m10 7.5 4-3.5" />
      <path d="M10 11 6 8" />
      <path d="m10 11 4-3" />
      <path d="M10 14.5 6.5 12" />
      <path d="m10 14.5 3.5-2.5" />
    </svg>
  );
}

function GiftMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="12" height="8.5" />
      <path d="M10 8v8.5" />
      <path d="M4 11.8h12" />
      <path d="M10 8C8.5 5.4 6 5.2 6 6.8 6 8 8 8 10 8Zm0 0c1.5-2.6 4-2.8 4-1.2 0 1.2-2 1.2-4 1.2Z" />
    </svg>
  );
}

function GlassMiniMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 3h7l-1.2 13a1.5 1.5 0 0 1-2.6 0L8.5 3" />
      <path d="M7.6 8.5h4.8" />
      <path d="m12.8 3 2-1.5" />
    </svg>
  );
}

export const addonIconMap: Record<string, (props: { className?: string }) => React.ReactNode> = {
  protein: ProteinMark,
  family: FamilyMark,
  sweet: SweetMark,
  slice: SliceMark,
  side: SideMark,
  gift: GiftMark,
  glass: GlassMiniMark,
};
