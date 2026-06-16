import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json({ error: "Missing API key" }, { status: 500 });
    }

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    if (message.length < 10) {
      return Response.json({ error: "Message too short" }, { status: 400 });
    }

    const safeEmail = email.toLowerCase().trim();
    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "tarasofficial82@gmail.com",
      replyTo: safeEmail,
      subject: `New message from ${name}`,
      html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
    });

    if (result.error) {
      return Response.json(
        { error: "Failed to send message" },
        { status: 500 },
      );
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
