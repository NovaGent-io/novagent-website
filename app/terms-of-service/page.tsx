import Link from "next/link"
import { Scale, ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Scale className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Terms of Service</h1>
          </div>
          <p className="text-slate-600 text-lg">Last Updated: January 10, 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              Introduction & Agreement to Terms
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on
                behalf of an entity ("you" or "Client"), and NovaGent ("we," "us," or "our"), concerning your access to
                and use of our managed AI agent services (the "Service"). You agree that by accessing or using the
                Service, you have read, understood, and agree to be bound by all of these Terms of Service.
              </p>
              <p className="text-slate-700 leading-relaxed font-semibold">
                IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
                SERVICE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              Our Services
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed">
                NovaGent provides a "Managed-AI" platform and service that includes the design, deployment, monitoring,
                and continuous optimization of our Core AI Agents and Custom AI Agentic Systems. The specific scope of
                services, features, "events/month" allowances, and deliverables will be defined in a separate Service
                Agreement or Order Form executed between you and NovaGent.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </span>
              User Accounts & Client Responsibilities
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account information, including your
                password, and for all activities that occur under your account. You agree to notify us immediately of
                any unauthorized use of your account. You must provide accurate, current, and complete information
                during the onboarding process and maintain the accuracy of such information.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </span>
              Client Data & Intellectual Property
            </h2>
            <div className="prose prose-slate max-w-none">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Client Data:</h3>
                <p className="text-slate-700 leading-relaxed">
                  You retain all ownership rights to your pre-existing data, including customer lists, business data,
                  and any other information you provide to us to enable the Service ("Client Data"). You grant NovaGent
                  a worldwide, non-exclusive, royalty-free license to use, host, and process your Client Data solely for
                  the purpose of providing and improving the Service as agreed.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">NovaGent IP:</h3>
                <p className="text-slate-700 leading-relaxed">
                  We retain all rights, title, and interest in and to our Service, including our platform, the
                  underlying AI models, agent architecture, software, and any pre-existing intellectual property.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Generated Content:</h3>
                <p className="text-slate-700 leading-relaxed">
                  Unless otherwise specified in a Service Agreement, you own the specific output and content generated
                  by the AI agents for your use (e.g., ad copy, social media posts).
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                5
              </span>
              Fees and Payment
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed">
                You agree to pay all fees as specified in your applicable Service Agreement or Order Form. All fees are
                non-refundable except as required by law or as explicitly stated in your Service Agreement. Payment
                terms, billing cycles, and policies regarding setup fees and usage overages will be detailed in your
                Service Agreement.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                6
              </span>
              Acceptable Use
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed">
                You agree not to use the Service for any unlawful purpose or to violate any applicable laws. You will
                not use the Service to send spam, infringe upon the rights of others, or attempt to reverse-engineer,
                decompile, or otherwise discover the source code of our platform or AI agents.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                7
              </span>
              Limitation of Liability
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed font-semibold">
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
                DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES... [Standard legal
                liability limitation clause to be provided by your legal counsel].
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                8
              </span>
              Disclaimer of Warranties
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed font-semibold">
                THE SERVICE IS PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. YOU AGREE THAT YOUR USE OF THE SERVICE
                WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS
                OR IMPLIED, IN CONNECTION WITH THE SERVICE... [Standard legal warranty disclaimer to be provided by your
                legal counsel].
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                9
              </span>
              Term and Termination
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed">
                These Terms of Service shall remain in full force and effect while you use the Service. We reserve the
                right to suspend or terminate your account at any time for any breach of these Terms. The specific term
                of your service and conditions for termination will be outlined in your Service Agreement.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                10
              </span>
              General Provisions
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed">
                These Terms of Service and any policies or operating rules posted by us constitute the entire agreement
                between you and us. These Terms operate to the fullest extent permissible by law. These Terms of Service
                shall be governed by and construed in accordance with the laws of the State of Texas without regard to
                its conflict of law principles.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="pt-8 border-t border-slate-200">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
