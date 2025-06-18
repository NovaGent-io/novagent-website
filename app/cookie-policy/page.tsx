import Link from "next/link"
import { Cookie, ArrowLeft, Mail } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Cookie className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Cookie Policy</h1>
          </div>
          <p className="text-slate-600 text-lg">Understanding how we use cookies to enhance your experience</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 md:p-12">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                <strong>Last Updated:</strong> January 10, 2025
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                This Cookie Policy explains what cookies are, how NovaGent ("we," "us," or "our") uses them on our
                website, and your choices regarding their use. This policy should be read in conjunction with our{" "}
                <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            {/* What Are Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                What Are Cookies?
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website.
                They are widely used to make websites work more efficiently, as well as to provide information to the
                owners of the site. Cookies help us remember your preferences and understand how you use our site,
                allowing us to improve your user experience.
              </p>
            </section>

            {/* How We Use Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                How We Use Cookies
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no
                industry-standard options for disabling cookies without completely disabling the functionality and
                features they add to this site.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">We categorize our cookies as follows:</p>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Strictly Necessary Cookies</h3>
                  <p className="text-slate-700 leading-relaxed">
                    These cookies are essential for you to browse the website and use its features, such as accessing
                    secure areas of the site. The website cannot function properly without these cookies, and they
                    cannot be disabled in our systems.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Performance & Analytics Cookies</h3>
                  <p className="text-slate-700 leading-relaxed">
                    These cookies allow us to recognize and count the number of visitors and to see how visitors move
                    around our website when they are using it. This helps us improve the way our website works, for
                    example, by ensuring that users are finding what they are looking for easily. All information these
                    cookies collect is aggregated and therefore anonymous.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Functionality Cookies</h3>
                  <p className="text-slate-700 leading-relaxed">
                    These are used to recognize you when you return to our website. This enables us to personalize our
                    content for you and remember your preferences (for example, your choice of language or region).
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Marketing & Advertising Cookies</h3>
                  <p className="text-slate-700 leading-relaxed">
                    These cookies may be set through our site by our advertising partners. They may be used by those
                    companies to build a profile of your interests and show you relevant advertisements on other sites.
                    They do not store directly personal information but are based on uniquely identifying your browser
                    and internet device.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Choices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                Your Choices Regarding Cookies
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                You have several options to control or limit how we and our partners use cookies:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Cookie Consent Banner</h3>
                  <p className="text-slate-700 leading-relaxed">
                    When you first visit our site, you can accept or reject different categories of non-essential
                    cookies through our consent banner.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Browser Settings</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Most web browsers allow some control of most cookies through the browser settings. You can set your
                    browser to block cookies or to alert you when cookies are being sent. Please note, if you disable or
                    refuse cookies, some parts of this site may become inaccessible or not function properly.
                  </p>
                </div>
              </div>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                Changes to This Cookie Policy
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other
                operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed
                about our use of cookies and related technologies.
              </p>
            </section>

            {/* Contact Us */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  5
                </span>
                Contact Us
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-4">
                If you have questions or comments about this Cookie Policy, please contact us by visiting our{" "}
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                  Contact Us
                </Link>{" "}
                page or by emailing us at:
              </p>
              <div className="flex items-center space-x-2 text-blue-600">
                <Mail className="h-5 w-5" />
                <a href="mailto:contact@novagent.io" className="hover:text-blue-800 underline">
                  contact@novagent.io
                </a>
              </div>
            </section>

            {/* Back to Home */}
            <div className="pt-8 border-t border-slate-200">
              <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
