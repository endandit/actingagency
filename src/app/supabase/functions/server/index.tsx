import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-7ad3da34/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-7ad3da34/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, interest } = body;

    // Validate required fields
    if (!name || !email || !phone || !interest) {
      return c.json({ 
        success: false, 
        error: "Missing required fields: name, email, phone, and interest are all required" 
      }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ 
        success: false, 
        error: "Invalid email format" 
      }, 400);
    }

    // Create a unique ID for this submission
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substring(2, 15);
    const submissionId = `${timestamp}_${randomId}`;
    const key = `contact_submission_${submissionId}`;

    // Store the submission in KV store
    const submissionData = {
      id: submissionId,
      name,
      email,
      phone,
      interest,
      submittedAt: new Date().toISOString(),
    };

    await kv.set(key, submissionData);

    console.log(`Contact form submission received and stored: ${key}`, submissionData);

    // Send email notification via Resend
    try {
      const resendApiKey = Deno.env.get("RESEND_API_KEY");
      if (!resendApiKey) {
        console.error("RESEND_API_KEY environment variable is not set");
      } else {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "ActingAgency.nl Contact Form <noreply@form.machsyn.com>",
            to: ["annemieke@actingagency.nl"],
            subject: `Nieuwe contactaanvraag: ${interest}`,
            html: `
              <h2>Nieuwe contactaanvraag ontvangen</h2>
              <p><strong>Interesse in:</strong> ${interest}</p>
              <p><strong>Naam:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Telefoon:</strong> ${phone}</p>
              <p><strong>Ontvangen op:</strong> ${new Date().toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam' })}</p>
            `,
          }),
        });

        if (!emailResponse.ok) {
          const errorText = await emailResponse.text();
          console.error(`Failed to send email via Resend: ${emailResponse.status} ${errorText}`);
        } else {
          const emailData = await emailResponse.json();
          console.log("Email sent successfully via Resend:", emailData);
        }
      }
    } catch (emailError) {
      console.error("Error sending email via Resend:", emailError);
      // Continue anyway - the submission is still saved
    }

    return c.json({ 
      success: true, 
      message: "Contact form submitted successfully",
      submissionId 
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return c.json({ 
      success: false, 
      error: `Failed to process contact form submission: ${error.message}` 
    }, 500);
  }
});

Deno.serve(app.fetch);