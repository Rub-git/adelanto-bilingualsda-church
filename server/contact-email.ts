import nodemailer from "nodemailer";
import type { ContactRequest } from "@shared/schema";

// Configure the sender's SMTP credentials only in the hosting environment.
export async function notifyContactRequest(request: ContactRequest): Promise<void> {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn(`[contact-email] Request ${request.id} saved; SMTP is not configured.`);
    return;
  }

  const port = Number(process.env.SMTP_PORT || "465");
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    console.warn(`[contact-email] Request ${request.id} saved; SMTP_PORT is invalid.`);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || SMTP_USER,
      to: process.env.CONTACT_NOTIFICATION_EMAIL || "rubiesfamily@gmail.com",
      // The visitor is a reply-to address, never the authenticated sender.
      replyTo: { address: request.email, name: request.name },
      subject: request.isPrayerRequest
        ? "Nueva petición de oración — Adelanto Bilingual SDA Church"
        : "Nuevo mensaje — Adelanto Bilingual SDA Church",
      text: [
        `Referencia: ${request.id}`,
        `Nombre: ${request.name}`,
        `Correo: ${request.email}`,
        `Fecha (UTC): ${request.createdAt?.toISOString() || ""}`,
        "",
        request.message,
      ].join("\n"),
    });
    if (!info.accepted?.length) throw new Error("Recipient not accepted");
    console.info(`[contact-email] Request ${request.id}: SMTP accepted notification.`);
  } catch {
    // Keep the saved request and avoid leaking credentials or prayer text in logs.
    console.error(`[contact-email] Request ${request.id} saved; email delivery failed.`);
  } finally {
    transporter.close();
  }
}
