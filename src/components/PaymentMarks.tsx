/* Official-style payment marks — text/vector badges only, never emojis. */

export type ChipId = "visa" | "mc" | "amex" | "applepay" | "googlepay" | "cashapp";

const chipCls =
  "inline-flex h-6 items-center justify-center gap-1 rounded-[3px] border border-ivory/15 px-2 text-[8px] font-bold tracking-[0.12em] text-ivory/65";

function AppleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 14" className={className} aria-hidden="true" fill="currentColor">
      <path d="M8.7.7c.13 1.32-1.1 2.36-2.3 2.25C6.27 1.65 7.4.79 8.7.7Zm2 8.9c-.55 1.24-1.2 2.5-2.15 2.5-.94 0-1.25-.6-2.33-.6S4.8 12.1 3.92 12.1c-.92.02-1.62-1.33-2.18-2.55C.55 7.05.98 4.35 2.45 4.13c.65-.1 1.3.35 1.82.35.52 0 1.35-.44 2.27-.37.36.01 1.37.14 2.02 1.09C6.77 6.22 7.06 8.5 8.7 9.62Z" />
    </svg>
  );
}

export function PaymentChip({ id, className = "" }: { id: ChipId; className?: string }) {
  switch (id) {
    case "visa":
      return <span className={`${chipCls} ${className}`}>VISA</span>;
    case "mc":
      return (
        <span className={`${chipCls} ${className}`} aria-label="Mastercard">
          <svg width="18" height="11" viewBox="0 0 22 13" aria-hidden="true">
            <circle cx="8.2" cy="6.5" r="5" fill="none" stroke="currentColor" strokeWidth="1.1" />
            <circle cx="13.8" cy="6.5" r="5" fill="none" stroke="currentColor" strokeWidth="1.1" />
          </svg>
        </span>
      );
    case "amex":
      return <span className={`${chipCls} ${className}`}>AMEX</span>;
    case "applepay":
      return (
        <span className={`${chipCls} ${className}`}>
          <AppleGlyph className="h-2.5 w-auto" />
          <span className="tracking-[0.04em]">Pay</span>
        </span>
      );
    case "googlepay":
      return <span className={`${chipCls} ${className}`}>G&nbsp;Pay</span>;
    case "cashapp":
      return <span className={`${chipCls} ${className}`}>Cash&nbsp;App&nbsp;Pay</span>;
  }
}

export default function PaymentMarks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`} aria-label="Accepted payment methods">
      {(["visa", "mc", "amex", "applepay", "googlepay", "cashapp"] as ChipId[]).map((id) => (
        <PaymentChip key={id} id={id} />
      ))}
    </div>
  );
}
