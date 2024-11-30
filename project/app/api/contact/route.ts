import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_Ss1DvsmU_8TbxmNWQUw5eTixbx8paFAq9');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'deep@deepcloud.in',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});