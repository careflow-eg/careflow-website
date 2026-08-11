import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL_TO || "info@careflowai.health";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, clinic, message } = data;

    if (!name || !email || !clinic || !message) {
      return NextResponse.json(
        { success: false, message: "All fields (name, email, clinic, message) are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Africa/Cairo" });

    const subject = `[CareFlow Contact Form] New Inquiry from ${name} (${clinic})`;

    const textContent = `
New Contact Form Submission - CareFlow AI

Timestamp: ${timestamp}
Name: ${name}
Email: ${email}
Clinic / Organization: ${clinic}

Message:
${message}
    `.trim();

    const htmlContent = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #021418; padding: 24px; text-align: center; border-bottom: 3px solid #0d9488;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">CareFlow AI <span style="color: #2dd4bf; font-weight: 400;">Inquiry</span></h2>
          <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 13px;">New website contact form submission</p>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px; font-weight: 600;">Full Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 700;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: 600;">Email Address:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;"><a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: 600;">Clinic / Org:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${clinic}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; font-weight: 600;">Timestamp:</td>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">${timestamp} (Cairo Time)</td>
            </tr>
          </table>
          <div style="background-color: #f8fafc; border-left: 4px solid #0d9488; padding: 16px; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 14px;">Message:</h4>
            <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 16px; text-align: center; color: #94a3b8; font-size: 12px;">
          Sent via CareFlow Website Contact Form to <a href="mailto:${RECIPIENT_EMAIL}" style="color: #0d9488;">${RECIPIENT_EMAIL}</a>
        </div>
      </div>
    `;

    let sent = false;

    // 1. Try Resend if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const fromEmail = process.env.SMTP_FROM || "CareFlow Contact <onboarding@resend.dev>";
        await resend.emails.send({
          from: fromEmail,
          to: RECIPIENT_EMAIL,
          replyTo: email,
          subject,
          text: textContent,
          html: htmlContent,
        });
        sent = true;
        console.log(`[Contact API] Email sent to ${RECIPIENT_EMAIL} via Resend.`);
      } catch (resendErr) {
        console.error("[Contact API] Resend email failed:", resendErr);
      }
    }

    // 2. Try Nodemailer / SMTP if configured and not already sent
    if (!sent && process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587", 10),
          secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const fromEmail = process.env.SMTP_FROM || `"CareFlow Website" <${process.env.SMTP_USER}>`;

        await transporter.sendMail({
          from: fromEmail,
          to: RECIPIENT_EMAIL,
          replyTo: email,
          subject,
          text: textContent,
          html: htmlContent,
        });
        sent = true;
        console.log(`[Contact API] Email sent to ${RECIPIENT_EMAIL} via Nodemailer SMTP.`);
      } catch (smtpErr) {
        console.error("[Contact API] SMTP email failed:", smtpErr);
      }
    }

    // 3. Fallback logging for local/preview environments without email credentials
    if (!sent) {
      console.log(`[Contact API Submission] To: ${RECIPIENT_EMAIL}`);
      console.log(`Name: ${name} | Email: ${email} | Clinic: ${clinic}`);
      console.log(`Message: ${message}`);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully to info@careflowai.health.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Failed to process contact inquiry." },
      { status: 500 }
    );
  }
}
