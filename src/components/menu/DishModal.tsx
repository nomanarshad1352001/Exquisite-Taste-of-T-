"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Loader2, Lock, Sparkles, X } from "lucide-react";
import { dishes, type AddOn, type Dish } from "@/data/menu";
import { DietaryTag } from "@/components/DietaryMarks";
import { PaymentChip, type ChipId } from "@/components/PaymentMarks";
import { addonIconMap } from "./marks";
import { Diamond } from "@/components/Ornaments";

type Step = "extras" | "pairings" | "summary" | "payment" | "checkout";

const stepLabels = ["Extras", "Pairings", "Summary", "Payment"] as const;
const stepOrder: Step[] = ["extras", "pairings", "summary", "payment"];

interface OrderItem {
  id: string;
  name: string;
  price: number;
  stripeLink: string;
  kind: "main" | "addon" | "pairing";
}

interface PaymentMethod {
  id: string;
  label: string;
  note: string;
  chips: ChipId[];
}

const paymentMethods: PaymentMethod[] = [
  { id: "card", label: "Credit / Debit Card", note: "Visa · Mastercard · American Express", chips: ["visa", "mc", "amex"] },
  { id: "applepay", label: "Apple Pay", note: "Confirm with Touch ID or Face ID", chips: ["applepay"] },
  { id: "googlepay", label: "Google Pay", note: "One tap from your Google account", chips: ["googlepay"] },
  { id: "cashapp", label: "Cash App Pay", note: "Scan and approve inside Cash App", chips: ["cashapp"] },
];

const openLink = (url: string) => window.open(url, "_blank", "noopener,noreferrer");
const ease = [0.22, 1, 0.36, 1] as const;

interface DishModalProps {
  dish: Dish;
  onClose: () => void;
}

export default function DishModal({ dish, onClose }: DishModalProps) {
  const [step, setStep] = useState<Step>("extras");
  const [chosenAddons, setChosenAddons] = useState<Set<string>>(new Set());
  const [chosenPairings, setChosenPairings] = useState<Set<string>>(new Set());
  const [payMethod, setPayMethod] = useState<string>("card");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [linkItems, setLinkItems] = useState<OrderItem[] | null>(null);

  // reset when switching dishes
  useEffect(() => {
    setStep("extras");
    setChosenAddons(new Set());
    setChosenPairings(new Set());
    setPayMethod("card");
    setProcessing(false);
    setError(null);
    setLinkItems(null);
  }, [dish.id]);

  // scroll lock + escape
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const pairDishes = useMemo(
    () =>
      dish.pairings
        .map((id) => dishes.find((d) => d.id === id))
        .filter((d): d is Dish => Boolean(d) && d!.availability !== "soldout"),
    [dish]
  );

  const selectedAddons = dish.addOns.filter((a) => chosenAddons.has(a.id));
  const selectedPairings = pairDishes.filter((d) => chosenPairings.has(d.id));
  const total =
    dish.price +
    selectedAddons.reduce((s, a) => s + a.price, 0) +
    selectedPairings.reduce((s, d) => s + d.price, 0);

  const toggle = (set: Set<string>, id: string, apply: (s: Set<string>) => void) => {
    const next = new Set(set);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    apply(next);
  };

  const stepIndex = stepOrder.indexOf(step);
  const showProgress = step !== "checkout";

  const goNextFromExtras = () => setStep(pairDishes.length > 0 ? "pairings" : "summary");

  async function proceedToCheckout() {
    setProcessing(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dishId: dish.id,
          addOnIds: selectedAddons.map((a) => a.id),
          pairingIds: selectedPairings.map((d) => d.id),
          preferredMethod: payMethod,
        }),
      });
      const json = (await res.json()) as
        | { mode: "session"; url: string }
        | { mode: "links"; items: OrderItem[] }
        | { mode?: undefined; error?: string };

      if (!res.ok) {
        setError("error" in json && json.error ? json.error : "Checkout hiccup — try again.");
        setProcessing(false);
        return;
      }
      if (json.mode === "session") {
        window.location.assign(json.url);
        return;
      }
      if (json.mode === "links") {
        setLinkItems(json.items);
        setStep("checkout");
        setProcessing(false);
        return;
      }
      setError("Unexpected response — try again.");
      setProcessing(false);
    } catch {
      setError("Network issue — check your connection and try again.");
      setProcessing(false);
    }
  }

  const slide = (dir: number) => ({
    initial: { opacity: 0, x: 26 * dir },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -18 * dir },
    transition: { duration: 0.4, ease },
  });

  const AddonRow = ({ addOn }: { addOn: AddOn }) => {
    const on = chosenAddons.has(addOn.id);
    const Mark = addonIconMap[addOn.icon] ?? addonIconMap.side;
    return (
      <button
        type="button"
        onClick={() => toggle(chosenAddons, addOn.id, setChosenAddons)}
        aria-pressed={on}
        className={`flex w-full items-center justify-between gap-4 border px-4 py-3.5 text-left transition-colors duration-300 ${
          on ? "border-gold/70 bg-gold/10" : "border-ivory/12 hover:border-gold/40"
        }`}
      >
        <span className="flex items-center gap-4">
          <span
            className={`grid h-11 w-11 shrink-0 place-items-center border transition-colors duration-300 ${
              on ? "border-gold/70 text-gold" : "border-ivory/15 text-gold/50"
            }`}
          >
            <Mark className="h-5 w-5" />
          </span>
          <span>
            <span className={`block text-sm font-medium ${on ? "text-ivory" : "text-ivory/75"}`}>{addOn.name}</span>
            <span className="mt-0.5 block text-xs leading-relaxed text-ivory/45">{addOn.description}</span>
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-3">
          <span className={`font-display italic ${on ? "text-gold" : "text-ivory/45"}`}>+${addOn.price}</span>
          <span
            className={`grid h-5 w-5 place-items-center border transition-colors duration-300 ${
              on ? "border-gold bg-gold text-charcoal" : "border-ivory/30 text-transparent"
            }`}
          >
            <Check size={12} strokeWidth={3} />
          </span>
        </span>
      </button>
    );
  };

  return (
    <motion.div
      className="fixed inset-0 z-[95] flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Order ${dish.name}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 bg-night/85 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, y: 64 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 48 }}
        transition={{ duration: 0.55, ease }}
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto border border-gold/25 bg-cocoa shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]"
      >
        <div className="pointer-events-none absolute inset-2 z-10 border border-gold/10" aria-hidden="true" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center border border-ivory/20 bg-night/70 text-ivory transition-colors hover:border-gold hover:text-gold"
        >
          <X size={17} strokeWidth={1.5} />
        </button>

        <div className="grid sm:grid-cols-5">
          {/* image column */}
          <div className="relative h-44 sm:col-span-2 sm:h-auto sm:min-h-full">
            <Image src={dish.image} alt={dish.alt} fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa via-cocoa/20 to-transparent sm:bg-gradient-to-r" />
            {dish.tag && (
              <span className="absolute left-4 top-4 border border-gold/30 bg-night/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-gold backdrop-blur-sm">
                {dish.tag}
              </span>
            )}
          </div>

          {/* content column */}
          <div className="sm:col-span-3">
            {/* progress indicator */}
            {showProgress && (
              <div className="flex items-center gap-2 px-6 pt-6 sm:px-8 sm:pt-7" aria-hidden="true">
                {stepLabels.map((label, i) => (
                  <span key={label} className="flex items-center gap-2">
                    <span
                      className={`flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                        i === stepIndex ? "text-gold" : i < stepIndex ? "text-gold/60" : "text-ivory/30"
                      }`}
                    >
                      <Diamond className={`h-1 w-1 ${i <= stepIndex ? "text-gold" : "text-ivory/25"}`} />
                      <span className={i === 0 ? "" : "hidden sm:inline"}>{label}</span>
                    </span>
                    {i < stepLabels.length - 1 && <span className="h-px w-4 bg-ivory/15 sm:w-6" />}
                  </span>
                ))}
              </div>
            )}

            <AnimatePresence mode="wait" initial={false}>
              {/* ─── STEP 1 · EXTRAS ─────────────────────────── */}
              {step === "extras" && (
                <motion.div key={`extras-${dish.id}`} {...slide(1)} className="p-6 sm:p-8">
                  <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-gold">Customize Your Order</p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl leading-snug text-ivory">{dish.name}</h3>
                    <span className="mt-1 shrink-0 font-display text-2xl italic text-gold">${dish.price}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-4">
                    {dish.dietary.map((d) => (
                      <DietaryTag key={d} type={d} />
                    ))}
                    <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-ivory/40">{dish.serves}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ivory/60">{dish.description}</p>

                  {dish.addOns.length > 0 && (
                    <div className="mt-6 space-y-2">
                      {dish.addOns.map((addOn) => (
                        <AddonRow key={addOn.id} addOn={addOn} />
                      ))}
                    </div>
                  )}

                  <ModalFooter total={total}>
                    <button
                      type="button"
                      onClick={goNextFromExtras}
                      className="btn-lux-dark w-full bg-gold px-6 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-charcoal"
                    >
                      Continue
                    </button>
                  </ModalFooter>
                </motion.div>
              )}

              {/* ─── STEP 2 · YOU MIGHT ALSO LIKE ────────────── */}
              {step === "pairings" && (
                <motion.div key={`pairings-${dish.id}`} {...slide(1)} className="p-6 sm:p-8">
                  <BackButton onClick={() => setStep("extras")} label="Back to Extras" />
                  <div className="mt-4 flex items-center gap-2 text-gold">
                    <Sparkles size={14} strokeWidth={1.5} />
                    <p className="text-[9px] font-bold uppercase tracking-[0.34em]">Chef&rsquo;s Recommendations</p>
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-ivory">
                    You Might <em className="italic text-gold">Also Like</em>
                  </h3>
                  <p className="mt-2 text-sm text-ivory/55">Paired to this dish — added by hand, never pushed.</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {pairDishes.map((pair) => {
                      const on = chosenPairings.has(pair.id);
                      return (
                        <div
                          key={pair.id}
                          className={`border transition-colors duration-300 ${
                            on ? "border-gold/70 bg-gold/10" : "border-ivory/12"
                          }`}
                        >
                          <div className="relative h-24 overflow-hidden">
                            <Image src={pair.image} alt={pair.alt} fill sizes="(max-width: 640px) 50vw, 240px" className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-cocoa to-transparent" />
                          </div>
                          <div className="p-4">
                            <div className="flex items-start justify-between gap-3">
                              <p className="text-sm font-medium leading-snug text-ivory/85">{pair.name}</p>
                              <span className="shrink-0 font-display italic text-gold">${pair.price}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => toggle(chosenPairings, pair.id, setChosenPairings)}
                              aria-pressed={on}
                              className={`mt-3 inline-flex items-center gap-2 border px-4 py-2 text-[9px] font-bold uppercase tracking-[0.22em] transition-colors duration-300 ${
                                on
                                  ? "border-gold bg-gold text-charcoal"
                                  : "border-gold/40 text-gold hover:bg-gold hover:text-charcoal"
                              }`}
                            >
                              {on ? (
                                <>
                                  <Check size={11} strokeWidth={3} /> Added
                                </>
                              ) : (
                                "Add to Order"
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <ModalFooter total={total}>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setStep("summary")}
                        className="text-[10px] font-bold uppercase tracking-[0.24em] text-ivory/45 underline-offset-4 transition-colors hover:text-gold hover:underline"
                      >
                        Skip
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep("summary")}
                        className="btn-lux-dark flex-1 bg-gold px-6 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-charcoal"
                      >
                        {chosenPairings.size > 0 ? "Add & Continue" : "Continue"}
                      </button>
                    </div>
                  </ModalFooter>
                </motion.div>
              )}

              {/* ─── STEP 3 · SUMMARY ────────────────────────── */}
              {step === "summary" && (
                <motion.div key={`summary-${dish.id}`} {...slide(1)} className="p-6 sm:p-8">
                  <BackButton onClick={() => setStep(pairDishes.length > 0 ? "pairings" : "extras")} label="Back" />
                  <h3 className="mt-4 font-display text-2xl text-ivory">
                    Your <em className="italic text-gold">Order</em>
                  </h3>

                  <ul className="mt-5 space-y-3 border-y border-ivory/10 py-5">
                    <SummaryRow label={dish.name} price={dish.price} main />
                    {selectedAddons.map((a) => (
                      <SummaryRow key={a.id} label={`+ ${a.name}`} price={a.price} />
                    ))}
                    {selectedPairings.map((d) => (
                      <SummaryRow key={d.id} label={`+ ${d.name}`} price={d.price} />
                    ))}
                    {selectedAddons.length === 0 && selectedPairings.length === 0 && (
                      <li className="text-xs text-ivory/40">No extras or pairings — the dish sings on its own.</li>
                    )}
                  </ul>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/45">Total Due</span>
                    <span className="font-display text-3xl italic text-gold">${total}</span>
                  </div>

                  <ModalFooter total={null}>
                    <button
                      type="button"
                      onClick={() => setStep("payment")}
                      className="btn-lux-dark w-full bg-gold px-6 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-charcoal"
                    >
                      Continue to Payment
                    </button>
                  </ModalFooter>
                </motion.div>
              )}

              {/* ─── STEP 4 · PAYMENT METHOD ─────────────────── */}
              {step === "payment" && (
                <motion.div key={`payment-${dish.id}`} {...slide(1)} className="p-6 sm:p-8">
                  <BackButton onClick={() => setStep("summary")} label="Back to Summary" />
                  <h3 className="mt-4 font-display text-2xl text-ivory">
                    Payment <em className="italic text-gold">Method</em>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/55">
                    Choose your preference — Stripe&rsquo;s secure checkout completes it, including any saved cards
                    from previous visits.
                  </p>

                  <div className="mt-6 space-y-2">
                    {paymentMethods.map((method) => {
                      const on = payMethod === method.id;
                      return (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPayMethod(method.id)}
                          aria-pressed={on}
                          className={`flex w-full items-center justify-between gap-4 border px-4 py-3.5 text-left transition-colors duration-300 ${
                            on ? "border-gold/70 bg-gold/10" : "border-ivory/12 hover:border-gold/40"
                          }`}
                        >
                          <span>
                            <span className={`block text-sm font-medium ${on ? "text-ivory" : "text-ivory/75"}`}>
                              {method.label}
                            </span>
                            <span className="mt-1 flex flex-wrap items-center gap-1.5">
                              {method.chips.map((chip) => (
                                <PaymentChip key={chip} id={chip} />
                              ))}
                            </span>
                          </span>
                          <span
                            className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                              on ? "border-gold bg-gold text-charcoal" : "border-ivory/30 text-transparent"
                            }`}
                          >
                            <Check size={11} strokeWidth={3} />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {error && (
                    <p className="mt-4 border border-burgundy/60 bg-burgundy/20 px-4 py-3 text-sm text-ivory/85">{error}</p>
                  )}

                  <ModalFooter total={total}>
                    <button
                      type="button"
                      onClick={proceedToCheckout}
                      disabled={processing}
                      className="btn-lux-dark flex w-full items-center justify-center gap-3 bg-gold px-6 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-charcoal disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {processing ? (
                        <>
                          <Loader2 size={15} className="animate-spin" /> Preparing Secure Checkout
                        </>
                      ) : (
                        <>
                          <Lock size={14} /> Proceed to Checkout
                        </>
                      )}
                    </button>
                  </ModalFooter>

                  <p className="mt-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ivory/35">
                    <Lock size={11} className="text-gold/60" /> Encrypted by Stripe — we never see card numbers
                  </p>
                </motion.div>
              )}

              {/* ─── STEP 5 · GUIDED LINKS (Option B) ────────── */}
              {step === "checkout" && linkItems && (
                <motion.div key={`links-${dish.id}`} {...slide(1)} className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl text-ivory">
                    Complete Your Order <em className="italic text-gold">— {linkItems.length} Quick Step{linkItems.length > 1 ? "s" : ""}</em>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/55">
                    Each button opens a secure Stripe page for one item. Complete them in order — your email ties
                    every item to the same kitchen ticket automatically.
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {linkItems.map((item, i) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => openLink(item.stripeLink)}
                        className="group/link flex w-full items-center justify-between gap-4 border border-gold/35 px-4 py-3.5 text-left transition-colors duration-300 hover:bg-gold"
                      >
                        <span className="flex items-center gap-4">
                          <span className="font-display text-xl italic text-gold transition-colors duration-300 group-hover/link:text-charcoal">
                            0{i + 1}
                          </span>
                          <span>
                            <span className="block text-sm font-medium text-ivory transition-colors duration-300 group-hover/link:text-charcoal">
                              {item.name}
                            </span>
                            <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.22em] text-gold/70 transition-colors duration-300 group-hover/link:text-charcoal/70">
                              {item.kind === "main" ? "Main Dish" : item.kind === "addon" ? "Add-On" : "Pairing"}
                            </span>
                          </span>
                        </span>
                        <span className="flex items-center gap-2 font-display italic text-gold transition-colors duration-300 group-hover/link:text-charcoal">
                          ${item.price} <ArrowUpRight size={14} />
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-ivory/10 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/45">Total Across Steps</span>
                    <span className="font-display text-2xl italic text-gold">
                      ${linkItems.reduce((s, i) => s + i.price, 0)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 w-full border border-ivory/20 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/60 transition-colors hover:border-gold hover:text-gold"
                  >
                    Done — Close Window
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function BackButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/50 transition-colors hover:text-gold"
    >
      <ArrowLeft size={13} /> {label}
    </button>
  );
}

function ModalFooter({ total, children }: { total: number | null; children: React.ReactNode }) {
  return (
    <div className="mt-7 border-t border-gold/15 pt-5">
      {total !== null && (
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-ivory/45">Running Total</span>
          <span className="font-display text-2xl italic text-gold">${total}</span>
        </div>
      )}
      {children}
    </div>
  );
}

function SummaryRow({ label, price, main = false }: { label: string; price: number; main?: boolean }) {
  return (
    <li className="flex items-center justify-between gap-4 text-sm">
      <span className={main ? "text-ivory/90" : "text-ivory/60"}>{label}</span>
      <span className={`font-display italic ${main ? "text-gold" : "text-gold/80"}`}>${price}</span>
    </li>
  );
}
