"use server";

import { Resend } from "resend";

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  console.log(name, email, message);

  const token = process.env.RESEND_TOKEN;

  if (!token) {
    return {
      error: "Cannot send email, please try again later",
    };
  }

  const resend = new Resend(token);

  const result = await resend.emails.send({
    from: `${name} <portfolio@resend.dev>`,
    to: "darrenchoojh88@gmail.com",
    subject: `New Message from ${name}`,
    reply_to: email,
    html: `
        <h1>${name}</h1>
        <p>${email}</p>
        <p>${message}</p>
    `,
  });

  if (result.error) {
    return {
      error: "Cannot send email, please try again later",
    };
  }

  return {
    success: true,
  };
};
