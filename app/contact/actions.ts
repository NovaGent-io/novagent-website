"use server"

import { Resend } from 'resend';

export async function submitContactForm(prevState: any, formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const fullName = formData.get("full-name") as string;
    const companyName = formData.get("company-name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const inquiryType = formData.get("inquiry-type") as string;
    const message = formData.get("message") as string;

    const { data, error } = await resend.emails.send({
      from: 'contact@novagent.io', // This is the sender address Resend uses
      to: 'contact@novagent.io',      // This is your inbox where the email will be sent
      subject: `New NovaGent Inquiry - ${inquiryType}`,
      reply_to: email,                 // This ensures when you reply, it goes to the user
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <hr>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      return { success: false, message: `Error: ${error.message}` };
    }

    return {
      success: true,
      message: "Thank you for your inquiry! We'll get back to you within 24 hours.",
    };

  } catch (exception) {
    return {
      success: false,
      message: "An unexpected server error occurred.",
    };
  }
}