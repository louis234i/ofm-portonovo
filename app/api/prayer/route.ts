import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, prayer } = await req.json();

    const data = await resend.emails.send({
      from: "Prayer Request <onboarding@resend.dev>",
      to: "jldeh964@gmail.com",
      subject: `New Prayer Request from ${name || "Website Visitor"}`,
      html: `
        <h2>New Prayer Request</h2>

        <p><strong>Name:</strong> ${name || "Not provided"}</p>

        <p><strong>Email:</strong> ${email || "Not provided"}</p>

        <p><strong>Prayer Request:</strong></p>

        <p>${prayer}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to send prayer request." },
      { status: 500 }
    );
  }
}