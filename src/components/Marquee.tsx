import { Diamond } from "./Ornaments";

const items = [
  "Preorder Only",
  "Chef-Owned & Operated",
  "Cooked To Order, Never Batched",
  "Philadelphia · Delaware County",
  "Private Dinners & Events",
  "Menus Rotate Every Sunday",
];

export default function Marquee() {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((item) => (
        <span key={`${item}-${hidden}`} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-lg italic tracking-wide text-gold/90 sm:text-xl">
            {item}
          </span>
          <Diamond className="h-1.5 w-1.5 shrink-0 text-gold/50" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee-track relative overflow-hidden border-y border-gold/15 bg-espresso/60 py-5">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
