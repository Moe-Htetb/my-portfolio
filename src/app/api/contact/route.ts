import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(20),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    // TODO: Integrate email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: "portfolio@yourdomain.com",
    //   to: "moehtet@example.com",
    //   subject: `Portfolio Contact: ${subject}`,
    //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    // });

    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
