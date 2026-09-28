import { NextResponse } from "next/server";
import { notifyOwner } from "@/lib/notify";

/*
 * Catering / inquiry endpoint.
 * Spam protection: honeypot ("company") + shape validation.
 * Delivery: owner's inbox via Resend when RESEND_API_KEY + OWNER_EMAIL
 * are configured — otherwise logged server-side (never lost).
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const ALLOWED_SERVICES = new Set([
  "Weekly Preorder — Question",
  "Catering — Celebration or Social",
  "The Intimate Table — Private Dinner",
  "Wedding or Gala",
  "Corporate Event",
  "Something Else",
]);

const ALLOWED_EVENT_TYPES = new Set([
  "Wedding",
  "Private Dinner",
  "Birthday / Anniversary",
  "Baby or Bridal Shower",
  "Graduation",
  "Corporate Event",
  "Holiday Gathering",
  "Other",
]);

const ALLOWED_BUDGETS = new Set([
  "Under $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not Sure Yet",
]);

const normalize = (value: string) => value.replace(/[\u2013\u2014]/g, "-").replace(/\s+/g, " ").trim();
const inSet = (set: Set<string>, value: string) => [...set].some((v) => normalize(v) === normalize(value));

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const str = (key: string) => (typeof body[key] === "string" ? (body[key] as string).trim() : "");

  // Honeypot — bots fill this, humans never see it. Pretend success and move on.
  if (str("company")) {
    return NextResponse.json({ ok: true, reference: "ETT-HNYPT" }, { status: 200 });
  }

  const name = str("name");
  const email = str("email");
  const phone = str("phone");
  const service = str("service");
  const eventType = str("eventType");
  const eventDate = str("eventDate");
  const budget = str("budget");
  const guestsRaw = str("guests");
  const message = str("message");

  if (!name || name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please include your full name." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please include a valid email address." }, { status: 400 });
  }
  if (service && !inSet(ALLOWED_SERVICES, service)) {
    return NextResponse.json({ ok: false, error: "Please choose a valid service." }, { status: 400 });
  }
  if (eventType && !inSet(ALLOWED_EVENT_TYPES, eventType)) {
    return NextResponse.json({ ok: false, error: "Please choose a valid event type." }, { status: 400 });
  }
  if (budget && !inSet(ALLOWED_BUDGETS, budget)) {
    return NextResponse.json({ ok: false, error: "Please choose a valid budget range." }, { status: 400 });
  }
  if (!service && !eventType) {
    return NextResponse.json({ ok: false, error: "Please tell us what this is for." }, { status: 400 });
  }
  if (!message || message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Tell us a little more about your plans (10+ characters)." },
      { status: 400 }
    );
  }
  if (message.split(/\s+/).length > 2000) {
    return NextResponse.json({ ok: false, error: "Message is too long." }, { status: 400 });
  }

  let guests: number | null = null;
  if (guestsRaw) {
    const parsed = Number.parseInt(guestsRaw, 10);
    if (Number.isNaN(parsed) || parsed < 1 || parsed > 500) {
      return NextResponse.json(
        { ok: false, error: "Guest count should be between 1 and 500." },
        { status: 400 }
      );
    }
    guests = parsed;
  }

  const reference = `ETT-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

  const { delivered } = await notifyOwner(`New Inquiry ${reference} — ${eventType || service}`, {
    Reference: reference,
    Name: name,
    Email: email,
    Phone: phone || null,
    Type: eventType || service,
    "Event Date": eventDate || null,
    Guests: guests,
    Budget: budget || null,
    Message: message,
  });

  console.info("[inquiry]", { reference, delivered, service: eventType || service });

  return NextResponse.json(
    {
      ok: true,
      reference,
      message: "Inquiry received. Chef Bryant will reply within one business day.",
    },
    { status: 200 }
  );
}
