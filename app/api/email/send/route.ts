import { Resend } from "resend";
import { EmailTemplate } from "./../../../_components/email-template";

const resend = new Resend("re_GaWANoSE_ENKri9snFop6vGL9RgTV5bnK");

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["niltonandfilho@gmail.com"],
      subject: "Hello world",
      text: "oi",
      react: EmailTemplate({ firstName: "John" }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
