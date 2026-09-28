import { NextResponse } from "next/server";
import { notifyOwner } from "@/lib/notify";

/* VIP list signup — database-free; wires to the owner's email via Resend. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  await notifyOwner("New VIP List Signup", { Email: email });
  return NextResponse.json({ ok: true, message: "You're on the list." });
}
