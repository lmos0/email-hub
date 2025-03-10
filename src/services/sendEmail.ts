import sgMail from '../config/emailConfig';

interface EmailData {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendEmail({ to, from, subject, text, html }: EmailData) {
  const msg = {
    to,
    from,
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}
