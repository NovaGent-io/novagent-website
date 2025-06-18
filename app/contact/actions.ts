"use server"

import { Resend } from 'resend';

export async function submitContactForm(prevState: any, formData: FormData) {
  console.log("--- SERVER ACTION STARTED ---"); // Log 1

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const fullName = formData.get("full-name") as string;
    const companyName = formData.get("company-name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const inquiryType = formData.get("inquiry-type") as string;
    const message = formData.get("message") as string;

    console.log("Data extracted, preparing to call Resend API..."); // Log 2

    // This is a more robust way to call the API
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'contact@novagent.io', 
      subject: `New NovaGent Inquiry - ${inquiryType}`,
      reply_to: email, // Set the user's email as the reply-to address
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

    // Check if Resend itself returned an error
    if (error) {
      console.error("--- RESEND API ERROR ---", error); // Log 3
      return { success: false, message: `Error from email service: ${error.message}` };
    }

    console.log("--- EMAIL SENT SUCCESSFULLY --- Resend ID:", data?.id); // Log 4
    return {
      success: true,
      message: "Thank you for your inquiry! We'll get back to you within 24 hours.",
    };

  } catch (exception) {
    console.error("--- CAUGHT AN EXCEPTION ---", exception); // Log 5
    return {
      success: false,
      message: "An unexpected server error occurred.",
    };
  }
}