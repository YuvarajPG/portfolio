import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Configure the SMTP transporter
    // For Gmail, host: smtp.gmail.com, port: 465 (secure) or 587 (tls)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email address
        pass: process.env.SMTP_PASS, // Your app password
      },
    });

    // Check if the transporter is configured correctly
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials are not configured in environment variables.');
      return NextResponse.json(
        { message: 'Server email configuration is missing. Please check .env.local' },
        { status: 500 }
      );
    }

    // Email options
    const mailOptions = {
      from: `"${name} (Portfolio Contact)" <${process.env.SMTP_USER}>`, // Send via authenticated user to avoid Gmail rewrite
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // list of receivers (you)
      replyTo: email, // This ensures hitting "Reply" will reply to the form submitter
      subject: `New Contact Form Message from ${name} | Portfolio`, 
      text: message,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Message from your Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />
          <h3 style="color: #666;">Message:</h3>
          <p style="white-space: pre-wrap; color: #444;">${message}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
