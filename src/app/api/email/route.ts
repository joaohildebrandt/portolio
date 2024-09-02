import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  if (req.method === "POST") {
    const data = await req.json();

    await resend.emails.send({
      from: "contact@joaohildebrandt.com",
      to: ["joaop.hildebrandt@gmail.com"],
      subject: data.subject,
      html: `
        <p>
          Email from: ${data.email}
        </p>
        <p>
          Message: ${data.message}
        </p>
      `,
    });

    return new Response("", {
      status: 200,
    });
  }
}
