import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY="re_MHJUoBwH_PmgZzJnXqPVNsX7h2pX4jyNS");

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Ben <onboarding@resend.dev>',
      to: ['benjaminortega.mtnez@gmail.com'],
      subject: 'Correo Portafolio',
      react: 
        <>
          <p>Email body</p>
        </>,
    });

    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}