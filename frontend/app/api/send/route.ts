import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "@/components/EmailTemplate";
import { Invitation } from "@/lib/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    let invitacion = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["rafaeltreggia24@gmail.com"],
      subject: "Confirmacion de Invitacion",
      react: EmailTemplate(invitacion as Invitation),
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
