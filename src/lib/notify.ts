/*
 * Owner notification helper.
 *
 * When RESEND_API_KEY + OWNER_EMAIL are configured, form submissions are
 * delivered straight to the owner's inbox via Resend. Without keys the
 * submission is logged server-side — nothing is ever lost or blocked.
 */

interface NotifyResult {
  delivered: "email" | "log";
}

export async function notifyOwner(
  subject: string,
  fields: Record<string, string | number | null>
): Promise<NotifyResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const owner = process.env.OWNER_EMAIL;

  const lines = Object.entries(fields)
    .map(([key, value]) => `${key}: ${value ?? "—"}`)
    .join("\n");

  if (!apiKey || !owner) {
    console.info(`[notify] ${subject}\n${lines}`);
    return { delivered: "log" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Exquisite Taste of T <website@exquisitetasteoft.com>",
        to: [owner],
        subject,
        text: lines,
      }),
    });
    if (!res.ok) {
      console.error("[notify] Resend delivery failed", await res.text());
      console.info(`[notify] ${subject}\n${lines}`);
      return { delivered: "log" };
    }
    return { delivered: "email" };
  } catch (err) {
    console.error("[notify] error", err);
    console.info(`[notify] ${subject}\n${lines}`);
    return { delivered: "log" };
  }
}
