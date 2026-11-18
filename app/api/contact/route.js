// app/api/contact/route.js
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const GMAIL_USER = process.env.GMAIL_USER || "omshinde0484@gmail.com"
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || "gugvwuzfrpxaohzb"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
})

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    const safeName = String(name).trim()
    const safeEmail = String(email).trim()
    const safeSubject = String(subject || "General Inquiry").trim()
    const safeMessage = String(message).trim()

    const emailSubject = `📩 [Zapiya Contact] ${safeSubject} – from ${safeName}`

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F3EEE3; margin: 0; padding: 24px; color: #111111; }
    .card { max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E5DFD3; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: #111111; padding: 24px 28px; border-bottom: 3px solid #D9541E; }
    .header h1 { margin: 0; font-size: 20px; color: #F3EEE3; font-weight: 700; }
    .header p { margin: 4px 0 0; font-size: 13px; color: #D9541E; font-weight: 600; text-transform: uppercase; }
    .content { padding: 28px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .info-table td { padding: 10px 12px; font-size: 13px; border-bottom: 1px solid #FAF7F2; }
    .info-table td.label { width: 30%; font-weight: 600; color: #66615B; background: #FAF7F2; }
    .info-table td.value { font-weight: 500; color: #111111; }
    .msg-box { background: #FAF7F2; border-left: 3px solid #D9541E; padding: 16px 18px; border-radius: 0 8px 8px 0; margin-top: 12px; font-size: 14px; line-height: 1.6; color: #111111; white-space: pre-wrap; }
    .footer { background: #FAF7F2; border-top: 1px solid #E5DFD3; padding: 16px 28px; font-size: 12px; color: #66615B; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <p>Zapiya Support</p>
      <h1>New Direct Contact Message</h1>
    </div>
    <div class="content">
      <table class="info-table">
        <tr>
          <td class="label">Sender Name</td>
          <td class="value"><strong>${safeName}</strong></td>
        </tr>
        <tr>
          <td class="label">Sender Email</td>
          <td class="value"><a href="mailto:${safeEmail}" style="color: #D9541E; text-decoration: none; font-weight: 600;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td class="label">Subject</td>
          <td class="value">${safeSubject}</td>
        </tr>
      </table>

      <div style="margin-top: 20px;">
        <span style="font-size: 13px; font-weight: 700; color: #111111; text-transform: uppercase;">Message Body:</span>
        <div class="msg-box">${safeMessage}</div>
      </div>
    </div>
    <div class="footer">
      Hit <strong>Reply</strong> in your email client to respond directly to ${safeEmail}.
    </div>
  </div>
</body>
</html>
    `.trim()

    await transporter.sendMail({
      from: `"Zapiya Support" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: safeEmail,
      subject: emailSubject,
      text: `From: ${safeName} (${safeEmail})\nSubject: ${safeSubject}\n\n${safeMessage}`,
      html: htmlContent,
    })

    return NextResponse.json({ success: true, message: "Message delivered successfully." })
  } catch (error) {
    console.error("[CONTACT_ERROR]", error)
    return NextResponse.json(
      { error: "Failed to deliver message. Please email directly." },
      { status: 500 }
    )
  }
}
