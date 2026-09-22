// aaa-contact — ActingAgency.nl's own contact-form -> Mailgun (edd@endandit.nl) service.
// Replaces the old Supabase Edge Function (project pevnumygohwrbqlemasa,
// make-server-7ad3da34/contact) which (a) had no working Resend key after the
// Sep 2026 key rotation and (b) silently returned success even when the Resend
// send failed, and (c) never actually included the visitor's message in the
// outbound email. Modeled on /etc/edd/pi-contact.ts and edd-dcvloeren's own
// /contact-form route - same honeypot + rate-limit + escapeHtml pattern.
//
// 22 Sep 2026: switched sender from Resend (form.machsyn.com, DKIM-only, no SPF
// record - suspected spam-folder cause) to Mailgun's endandit.nl domain (fully
// verified SPF+DKIM+MX, already proven for Edd's own mail). AAA is a future Edd
// client anyway, so mail arriving from edd@endandit.nl instead of a no-reply
// address makes more sense than machsyn's. Resend stays in place for pi-contact
// (machsyn.com/contact) and other non-Edd-client sites.

const MAILGUN_API_KEY = Deno.env.get("MAILGUN_API_KEY");
const MAILGUN_DOMAIN = "endandit.nl";
const TO_EMAIL = Deno.env.get("AAA_TO_EMAIL") ?? "annemieke@actingagency.nl";

const CORS = {
  "Access-Control-Allow-Origin": "https://actingagency.nl",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Basic per-IP rate limit, in-memory (single Deno process, resets on restart) -
// same pattern as pi-contact.ts / edd-dcvloeren's checkRateLimit.
const rateLimit = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 20) return false;
  entry.count += 1;
  return true;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

Deno.serve({ port: 3158 }, async (req, info) => {
  const url = new URL(req.url);
  if (url.pathname !== "/contact") return new Response("Not found", { status: 404 });
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: CORS });

  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || info.remoteAddr.hostname;
  if (!checkRateLimit(clientIp)) {
    return new Response(JSON.stringify({ success: false, error: "Too many requests" }), {
      status: 429,
      headers: { ...CORS, "Content-Type": "application/json" },
    });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: "Invalid JSON" }), {
      status: 400,
      headers: { ...CORS, "Content-Type": "application/json" },
    });
  }

  // Honeypot: real visitors never fill this; bots that fill every field blindly do.
  // Pretend success so they don't retry/adapt.
  if (String(body._gotcha ?? "").trim()) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...CORS, "Content-Type": "application/json" },
    });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const interest = String(body.interest ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !phone || !interest) {
    return new Response(
      JSON.stringify({ success: false, error: "Missing required fields: name, email, phone, and interest are all required" }),
      { status: 400, headers: { ...CORS, "Content-Type": "application/json" } },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return new Response(JSON.stringify({ success: false, error: "Invalid email format" }), {
      status: 400,
      headers: { ...CORS, "Content-Type": "application/json" },
    });
  }
  if (!MAILGUN_API_KEY) {
    console.error("[aaa-contact] MAILGUN_API_KEY not configured");
    return new Response(JSON.stringify({ success: false, error: "not_configured" }), {
      status: 500,
      headers: { ...CORS, "Content-Type": "application/json" },
    });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeInterest = escapeHtml(interest);
  const safeMessage = message ? escapeHtml(message).replace(/\n/g, "<br>") : "";

  let sendOk = false;
  try {
    const html = `
          <h2>Nieuwe contactaanvraag ontvangen</h2>
          <p><strong>Interesse in:</strong> ${safeInterest}</p>
          <p><strong>Naam:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Telefoon:</strong> ${safePhone}</p>
          ${safeMessage ? `<p><strong>Bericht:</strong></p><p>${safeMessage}</p>` : ""}
          <p><strong>Ontvangen op:</strong> ${new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })}</p>
        `;
    const params = new URLSearchParams();
    params.set("from", "ActingAgency.nl Contact Form <edd@endandit.nl>");
    params.set("to", TO_EMAIL);
    params.set("h:Reply-To", email);
    params.set("subject", `Nieuwe contactaanvraag: ${interest}`);
    params.set("html", html);

    const r = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });
    sendOk = r.ok;
    if (!r.ok) console.error(`[aaa-contact] Mailgun send failed: HTTP ${r.status} ${await r.text()}`);
  } catch (e) {
    console.error("[aaa-contact] Mailgun send error:", e);
  }

  // Real failure propagation - unlike the old Supabase function, a send failure
  // is reported back to the browser instead of a blanket success:true.
  return new Response(JSON.stringify({ success: sendOk }), {
    status: sendOk ? 200 : 502,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
});
