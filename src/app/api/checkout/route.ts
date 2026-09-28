import { NextResponse } from "next/server";
import { dishes, type Dish, type AddOn } from "@/data/menu";

/*
 * Hybrid checkout builder.
 *
 * Option A (active when STRIPE_SECRET_KEY is set): assembles a single Stripe
 * Checkout Session server-side — prices are always recomputed here from
 * src/data/menu.ts, never trusted from the client — and returns its URL.
 *
 * Option B (zero-config fallback): returns the ordered list of Stripe Payment
 * Links (main dish, add-ons, pairings) for the guided multi-link flow.
 */

const METHODS = new Set(["card", "applepay", "googlepay", "cashapp"]);

function findDish(id: string): Dish | undefined {
  return dishes.find((d) => d.id === id);
}

function findAddOn(id: string): AddOn | undefined {
  for (const d of dishes) {
    const hit = d.addOns.find((a) => a.id === id);
    if (hit) return hit;
  }
  return undefined;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const dishId = typeof body.dishId === "string" ? body.dishId : "";
  const addOnIds = Array.isArray(body.addOnIds) ? body.addOnIds.filter((x): x is string => typeof x === "string") : [];
  const pairingIds = Array.isArray(body.pairingIds) ? body.pairingIds.filter((x): x is string => typeof x === "string") : [];
  const preferredMethod = typeof body.preferredMethod === "string" && METHODS.has(body.preferredMethod) ? body.preferredMethod : "card";

  const dish = findDish(dishId);
  if (!dish || dish.availability === "soldout") {
    return NextResponse.json({ error: "That dish is no longer available this week." }, { status: 400 });
  }

  const addOns = addOnIds.map(findAddOn).filter((a): a is AddOn => Boolean(a));
  const pairings = pairingIds
    .map(findDish)
    .filter((d): d is Dish => Boolean(d) && d!.availability !== "soldout" && d!.id !== dish.id);

  // Only allow add-ons actually linked to this dish in the menu data.
  const allowedAddons = addOns.filter((a) => dish.addOns.some((da) => da.id === a.id));

  const items = [
    { id: dish.id, name: dish.name, price: dish.price, stripeLink: dish.stripeLink, kind: "main" as const },
    ...allowedAddons.map((a) => ({ id: a.id, name: a.name, price: a.price, stripeLink: a.stripeLink, kind: "addon" as const })),
    ...pairings.map((d) => ({ id: d.id, name: d.name, price: d.price, stripeLink: d.stripeLink, kind: "pairing" as const })),
  ];

  const stripeKey = process.env.STRIPE_SECRET_KEY;

  /* ── Option A: dynamic Stripe Checkout Session ── */
  if (stripeKey) {
    try {
      const origin = new URL(request.url).origin;
      const params = new URLSearchParams();
      params.set("mode", "payment");
      params.set("success_url", `${origin}/order?status=success`);
      params.set("cancel_url", `${origin}/menu`);
      params.set("billing_address_collection", "auto");
      params.set("phone_number_collection[enabled]", "true");
      items.forEach((item, i) => {
        params.set(`line_items[${i}][quantity]`, "1");
        params.set(`line_items[${i}][price_data][currency]`, "usd");
        params.set(`line_items[${i}][price_data][unit_amount]`, String(Math.round(item.price * 100)));
        params.set(`line_items[${i}][price_data][product_data][name]`, item.name);
        params.set(
          `line_items[${i}][price_data][product_data][metadata][kind]`,
          item.kind
        );
      });
      params.set("metadata[preferred_method]", preferredMethod);
      params.set("metadata[source]", "exquisite-taste-order-builder");

      const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${stripeKey}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      });
      const session = (await stripeRes.json()) as { url?: string; error?: { message?: string } };
      if (!stripeRes.ok || !session.url) {
        console.error("[checkout] Stripe session failed", session.error?.message);
        return NextResponse.json({ error: "Payment provider issue — try again shortly." }, { status: 502 });
      }
      return NextResponse.json({ mode: "session", url: session.url });
    } catch (err) {
      console.error("[checkout] Stripe session error", err);
      return NextResponse.json({ error: "Payment provider issue — try again shortly." }, { status: 502 });
    }
  }

  /* ── Option B: guided payment links ── */
  return NextResponse.json({ mode: "links", items, preferredMethod });
}
