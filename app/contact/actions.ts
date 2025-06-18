"use server"

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const fullName = formData.get("full-name") as string
    const companyName = formData.get("company-name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const inquiryType = formData.get("inquiry-type") as string
    const message = formData.get("message") as string

    // Here you would typically use a service like Resend, SendGrid, or similar
    // For now, we'll simulate the email sending
    console.log("Contact form submission:", {
      fullName,
      companyName,
      email,
      phone,
      inquiryType,
      message,
      timestamp: new Date().toISOString(),
    })

    // In a real implementation, you would send an email to contact@novagent.io
    // Example with fetch to an API endpoint:
    /*
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: 'contact@novagent.io',
        subject: `New Contact Form Submission - ${inquiryType}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      })
    })
    */

    return {
      success: true,
      message: "Thank you for your inquiry! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message:
        "Sorry, there was an error submitting your form. Please try again or email us directly at contact@novagent.io",
    }
  }
}
