import { NextResponse } from "next/server";
import { notifyOwner } from "@/lib/notify";

/* General contact endpoint — honeypot protected, delivered to owner inbox. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const str = (key: string) => (typeof body[key] === "string" ? (body[key] as string).trim() : "");

  // Honeypot trap for bots.
  if (str("company")) {
    return NextResponse.json({ ok: true });
  }

  const name = str("name");
  const email = str("email");
  const message = str("message");

  if (!name || name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please include your name." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please include a valid email address." }, { status: 400 });
  }
  if (!message || message.length < 5) {
    return NextResponse.json({ ok: false, error: "A short message helps us help you." }, { status: 400 });
  }

  await notifyOwner(`Website Contact — ${name}`, { Name: name, Email: email, Message: message });

  return NextResponse.json({ ok: true, message: "Message received." });
}
