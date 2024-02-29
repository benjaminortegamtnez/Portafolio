// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend("re_GWuzQ4bM_J9AdVsqnpj66crWJqAX5fu5m");

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Benjamín <benjaminortega.mtnez@gmail.com>',
      to: ['benjamin.graphic@gmail.com'],
      subject: 'Hello world',
      react: 
        <>
          <p>Email body</p>
        </>,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
