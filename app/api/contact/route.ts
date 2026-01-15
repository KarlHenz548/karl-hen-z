
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, message } = data;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  try {
    // Configure Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,       // your Gmail address
        pass: process.env.GMAIL_APP_PASS,   // Gmail App Password (not your normal password)
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER, // must be your Gmail
      replyTo: email,               // allows replies to the user's email
      to: process.env.GMAIL_USER,   // where you receive contact form messages
      subject: `New Contact Form Message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });


    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
