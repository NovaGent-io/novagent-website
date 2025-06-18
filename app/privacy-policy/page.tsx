import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Lock, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | NovaGent",
  description: "Learn how NovaGent collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-slate-300 text-center max-w-3xl mx-auto">
            At NovaGent, we value your privacy and are committed to protecting your personal information. This policy
            explains how we collect, use, and safeguard your data.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-10">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-sm text-slate-500 mb-6">Last Updated: June 10, 2025</p>
            <p className="text-slate-700 leading-relaxed">
              NovaGent ('we,' 'us,' or 'our') is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do
              not access the site or use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 text-blue-500 mr-2" />
              Information We Collect
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the Site and
              through our services includes:
            </p>
            <div className="space-y-4 pl-4">
              <div>
                <h3 className="font-medium text-slate-900">Information You Provide to Us:</h3>
                <p className="text-slate-700 leading-relaxed">
                  Personally identifiable information, such as your name, company name, email address, and telephone
                  number, and any other information you voluntarily provide to us when you fill out our contact form or
                  communicate with us during the client onboarding process.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Information Collected Automatically:</h3>
                <p className="text-slate-700 leading-relaxed">
                  When you visit our website, our servers may automatically log standard data provided by your web
                  browser, such as your computer's IP address, browser type, and the pages you visit. This is done
                  through the use of cookies, which are detailed in our Cookie Policy.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Information Our AI Agents Process:</h3>
                <p className="text-slate-700 leading-relaxed">
                  As a core part of our 'Managed-AI' service, our AI agents process data on behalf of our clients. This
                  may include contact information from your CRM, ad performance data, customer support transcripts, and
                  other business data necessary for the agent to perform its designated function. We process this data
                  as a 'data processor' under the instruction of our client (the 'data controller').
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <Lock className="h-6 w-6 text-blue-500 mr-2" />
              How We Use Your Information
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Having accurate information permits us to provide you with a smooth, efficient, and customized experience.
              Specifically, we may use information collected about you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
              <li>Create and manage your account.</li>
              <li>Provide and improve our AI agent services.</li>
              <li>Respond to your inquiries and support requests.</li>
              <li>
                Send you administrative information, such as service updates and changes to our terms, conditions, and
                policies.
              </li>
              <li>Process payments and manage billing.</li>
              <li>Monitor and analyze usage and trends to improve our website and services.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
              <li>Comply with legal and regulatory requirements.</li>
            </ul>
          </section>

          {/* How We Share Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Share Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We do not sell your personal or operational data. We may share information we have collected about you in
              certain situations. Your information may be disclosed as follows:
            </p>
            <div className="space-y-4 pl-4">
              <div>
                <h3 className="font-medium text-slate-900">By Law or to Protect Rights:</h3>
                <p className="text-slate-700 leading-relaxed">
                  If we believe the release of information about you is necessary to respond to legal process, to
                  investigate or remedy potential violations of our policies, or to protect the rights, property, and
                  safety of others, we may share your information as permitted or required by any applicable law.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Third-Party Service Providers:</h3>
                <p className="text-slate-700 leading-relaxed">
                  We may share your information with third parties that perform services for us or on our behalf,
                  including payment processing, data analysis, email delivery, hosting services, and customer service.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Business Transfers:</h3>
                <p className="text-slate-700 leading-relaxed">
                  We may share or transfer your information in connection with, or during negotiations of, any merger,
                  sale of company assets, financing, or acquisition of all or a portion of our business to another
                  company.
                </p>
              </div>
            </div>
          </section>

          {/* Data Security & Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Security & Retention</h2>
            <p className="text-slate-700 leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that no security measures are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of misuse. We will retain your information for as
              long as your account is active or as needed to provide you services and comply with our legal obligations.
            </p>
          </section>

          {/* Your Data Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Your Data Rights</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information under
              applicable laws such as GDPR or CCPA. These may include the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
              <li>Access, update, or delete the information we have on you.</li>
              <li>Object to the processing of your personal information.</li>
              <li>Request that we restrict the processing of your personal information.</li>
              <li>The right to data portability.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              To exercise these rights, please contact us using the contact information provided below.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              Our services are not intended for use by children under the age of 13, and we do not knowingly collect
              personal information from children under 13.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time in order to reflect, for example, changes to our
              practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the 'Last Updated' date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:privacy@novagent.io" className="text-blue-600 hover:text-blue-800 transition-colors">
                privacy@novagent.io
              </a>
            </p>
          </section>

          {/* Back to Home */}
          <div className="border-t border-slate-200 pt-6 mt-12">
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
