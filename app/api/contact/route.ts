import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(request: Request) {
  try {
    // Validate Content-Type
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid Content-Type. Expected application/json",
        },
        { status: 400 },
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 },
      );
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 },
      );
    }

    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          error: `Name cannot exceed ${MAX_NAME_LENGTH} characters`,
        },
        { status: 400 },
      );
    }

    if (email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address format" },
        { status: 400 },
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          error: `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`,
        },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error(
        "[Contact API Error] Missing RESEND_API_KEY environment variable.",
      );
      return NextResponse.json(
        { success: false, error: "Failed to send message" },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);
    const toEmail = process.env.CONTACT_EMAIL || "yvuarajpg@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New portfolio contact from ${name}`,
      text: `Name:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #0f172a; font-size: 20px; font-weight: 700; margin: 0 0 16px;">New Portfolio Contact Message</h2>
          <div style="margin-bottom: 12px;">
            <strong style="color: #475569; font-size: 12px; text-transform: uppercase;">Name:</strong>
            <p style="color: #0f172a; font-size: 15px; margin: 4px 0 16px 0;">${safeName}</p>
          </div>
          <div style="margin-bottom: 12px;">
            <strong style="color: #475569; font-size: 12px; text-transform: uppercase;">Email:</strong>
            <p style="color: #0f172a; font-size: 15px; margin: 4px 0 16px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></p>
          </div>
          <div>
            <strong style="color: #475569; font-size: 12px; text-transform: uppercase;">Message:</strong>
            <p style="color: #0f172a; font-size: 15px; white-space: pre-wrap; margin: 4px 0 0 0; background: #f8fafc; padding: 16px; border-radius: 8px;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error("[Resend Error]:", emailResponse.error);

      return NextResponse.json(
        {
          success: false,
          error: emailResponse.error.message,
        },
        { status: emailResponse.error.statusCode || 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[Contact API Exception]:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 },
    );
  }
}
