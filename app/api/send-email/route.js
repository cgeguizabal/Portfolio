import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, phone, subject, message } = await request.json();

  // Create a transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Prepare the email data
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER, // send to yourself (from .env)
    subject: subject || "New message", // use form subject or default
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        <h2 style="margin-top: 0; color: #333;">New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject || "No subject"}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      </div>
    </div>
  `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
