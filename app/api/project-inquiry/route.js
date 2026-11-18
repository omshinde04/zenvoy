// app/api/project-inquiry/route.js
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
    const { name, email, college, branch, teamSize, topicStatus, idea, deadline } = body

    if (!name || !email || !idea) {
      return NextResponse.json(
        { error: "Name, email, and project idea are required." },
        { status: 400 }
      )
    }

    const safeName = String(name).trim()
    const safeEmail = String(email).trim()
    const safeCollege = String(college || "Not specified").trim()
    const safeBranch = String(branch || "Not specified").trim()
    const safeTeamSize = String(teamSize || "Group").trim()
    const safeTopicStatus = String(topicStatus || "Not specified").trim()
    const safeDeadline = String(deadline || "Within 2-3 weeks").trim()
    const safeIdea = String(idea).trim()

    const subject = `🎓 [College Project] ${safeTeamSize} • ${safeName} (${safeCollege})`

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F3EEE3; margin: 0; padding: 24px; color: #111111; }
    .card { max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E5DFD3; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: #111111; padding: 24px 28px; border-bottom: 3px solid #D9541E; }
    .header h1 { margin: 0; font-size: 20px; color: #F3EEE3; font-weight: 700; letter-spacing: -0.01em; }
    .header p { margin: 4px 0 0; font-size: 13px; color: #D9541E; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
    .content { padding: 28px; }
    .badge { display: inline-block; background: #FAF7F2; border: 1px solid #E5DFD3; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; color: #D9541E; margin-bottom: 20px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .info-table td { padding: 10px 12px; font-size: 13px; border-bottom: 1px solid #FAF7F2; }
    .info-table td.label { width: 35%; font-weight: 600; color: #66615B; background: #FAF7F2; border-radius: 6px 0 0 6px; }
    .info-table td.value { font-weight: 500; color: #111111; }
    .idea-box { background: #FAF7F2; border-left: 3px solid #D9541E; padding: 16px 18px; border-radius: 0 8px 8px 0; margin-top: 12px; font-size: 14px; line-height: 1.6; color: #111111; white-space: pre-wrap; }
    .footer { background: #FAF7F2; border-top: 1px solid #E5DFD3; padding: 16px 28px; font-size: 12px; color: #66615B; text-align: center; }
    .reply-btn { display: inline-block; margin-top: 8px; background: #D9541E; color: #FFFFFF !important; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 13px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <p>Zapiya • College Project Inquiry</p>
      <h1>New Student Brief Received</h1>
    </div>
    <div class="content">
      <div class="badge">Team Format: ${safeTeamSize}</div>

      <table class="info-table">
        <tr>
          <td class="label">Student Name</td>
          <td class="value"><strong>${safeName}</strong></td>
        </tr>
        <tr>
          <td class="label">Student Email</td>
          <td class="value"><a href="mailto:${safeEmail}" style="color: #D9541E; text-decoration: none; font-weight: 600;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td class="label">College / Univ</td>
          <td class="value">${safeCollege}</td>
        </tr>
        <tr>
          <td class="label">Branch & Degree</td>
          <td class="value">${safeBranch}</td>
        </tr>
        <tr>
          <td class="label">Topic Status</td>
          <td class="value">${safeTopicStatus}</td>
        </tr>
        <tr>
          <td class="label">Deadline</td>
          <td class="value"><strong style="color: #D9541E;">${safeDeadline}</strong></td>
        </tr>
      </table>

      <div style="margin-top: 20px;">
        <span style="font-size: 13px; font-weight: 700; color: #111111; text-transform: uppercase; letter-spacing: 0.05em;">Project Requirements / Topic Idea:</span>
        <div class="idea-box">${safeIdea}</div>
      </div>

      <div style="text-align: center; margin-top: 28px;">
        <a href="mailto:${safeEmail}?subject=Re:%20College%20Project%20Inquiry%20-%20Zapiya&body=Hi%20${encodeURIComponent(safeName)},%0A%0AThank%20you%20for%20reaching%20out%20about%20your%20college%20project.%0A%0A" class="reply-btn">Reply to Student Directly</a>
      </div>
    </div>
    <div class="footer">
      Hit <strong>Reply</strong> in your email client to respond directly to ${safeEmail}.
    </div>
  </div>
</body>
</html>
    `.trim()

    const textContent = `
NEW COLLEGE PROJECT INQUIRY - ZAPIYA
------------------------------------
Student Name: ${safeName}
Student Email: ${safeEmail}
College/Univ: ${safeCollege}
Branch/Degree: ${safeBranch}
Team Size: ${safeTeamSize}
Topic Status: ${safeTopicStatus}
Deadline: ${safeDeadline}

Project Idea & Requirements:
${safeIdea}

------------------------------------
Hit Reply in your email client to respond directly to ${safeEmail}.
    `.trim()

    await transporter.sendMail({
      from: `"Zapiya Projects" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: safeEmail,
      subject,
      text: textContent,
      html: htmlContent,
    })

    return NextResponse.json({ success: true, message: "Inquiry delivered successfully." })
  } catch (error) {
    console.error("[PROJECT_INQUIRY_ERROR]", error)
    return NextResponse.json(
      { error: "Failed to send email inquiry. Please try again or email directly." },
      { status: 500 }
    )
  }
}

