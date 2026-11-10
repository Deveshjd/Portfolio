import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dns from "dns/promises";

// Strict email RFC-compliant regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Known throwaway/burner domains list
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "trashmail.com",
  "sharklasers.com",
  "throwawaymail.com",
  "yopmail.com"
]);

async function isValidEmailDomain(email: string): Promise<boolean> {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;

  // Block burner/disposable domains
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return false;
  }

  try {
    // Resolve DNS Mail Exchange (MX) records
    const mxRecords = await dns.resolveMx(domain);
    return mxRecords && mxRecords.length > 0;
  } catch (err) {
    // Domain doesn't exist or has no mail servers configured
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1. Basic empty check
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // 2. Syntax validation
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a syntactically valid email address." },
        { status: 422 }
      );
    }

    // 3. DNS MX check (verifies domain exists and receives mail)
    const isDeliverableDomain = await isValidEmailDomain(email);
    if (!isDeliverableDomain) {
      return NextResponse.json(
        { error: "The email domain appears invalid or unreachable." },
        { status: 422 }
      );
    }

    // 4. Send via Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name} (Portfolio)" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Inquiry from ${name}`,
      text: `Sender: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 580px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; color: #0f172a;">
          <h2 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 700;">New Portfolio Inquiry</h2>
          <p style="margin: 4px 0; font-size: 14px;"><strong>From:</strong> ${name}</p>
          <p style="margin: 4px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <h4 style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Message</h4>
          <p style="white-space: pre-wrap; line-height: 1.6; margin: 0; font-size: 14px; color: #334155;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}