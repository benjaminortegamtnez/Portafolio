// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Benjamín <benjaminortega.mtnez@gmail.com>',
      to: ['benjaminortega.mtnez@gmail.com'],
      subject: 'Hello world',
      react: 
        <>
          <p>Cuerpo Email</p>
        </>,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
