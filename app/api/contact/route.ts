import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // ✅ Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // ✅ Ensure env variables exist
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT);
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json(
        { message: "Server configuration error." },
        { status: 500 }
      );
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // auto handle secure
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: `"${name} (Portfolio)" <${SMTP_USER}>`,
      to: CONTACT_EMAIL || SMTP_USER,
      replyTo: email,
      subject: `New Message from ${name}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #333;">📩 New Portfolio Message</h2>
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <hr style="margin: 20px 0;" />

          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; color: #444;">${message}</p>
        </div>
      `,
    };

    // ✅ Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Email error:", error);

    return NextResponse.json(
      { message: "Failed to send message." },
      { status: 500 }
    );
  }
}