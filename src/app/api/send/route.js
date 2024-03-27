import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/email-template";

const resend = new Resend("re_653uQxi3_82FoUqEi91R5QCKs5z9g7vhe");

export async function POST(request) {
  const { firstName, email, telefono, mensaje } = await request.json();

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["pdlweb2024@gmail.com"],
      subject: mensaje,
      react: EmailTemplate({
        firstName,
        email,
        telefono,
        mensaje,
      }),
    });
    return NextResponse.json(
      {
        status: "Ok",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}
