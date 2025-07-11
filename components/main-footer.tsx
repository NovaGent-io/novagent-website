import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Mail, Phone, ChevronRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MainFooter() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Explore NovaGent",
      links: [
        { href: "/how-it-works", text: "How It Works" },
        { href: "/solutions/novasuite", text: "NovaSuite" },
        { href: "/industries", text: "Industries Served" },
        { href: "/why-novagent", text: "Why NovaGent?" },
        { href: "/pricing", text: "Pricing & Engagement" },
      ],
    },
    {
      title: "Our Company",
      links: [
        { href: "/about-us/our-story-mission", text: "Our Story & Mission" },
        { href: "/about-us/meet-the-founders", text: "Meet The Founders" },
        { href: "/about-us/our-roadmap", text: "Our Roadmap" },
        { href: "/about-us/trust-security", text: "Trust & Security" },
        { href: "/about-us/join-our-mission", text: "Join Our Mission" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/blog", text: "Blog & Insights" },
        { href: "/platform/integrations", text: "Integrations" },
        { href: "/contact", text: "Contact Support" },
        // Add FAQ or Help Center link here if available
      ],
    },
  ]

  const legalLinks = [
    { href: "/privacy-policy", text: "Privacy Policy" },
    { href: "/terms-of-service", text: "Terms of Service" },
    { href: "/cookie-policy", text: "Cookie Policy" },
  ]

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-12">
          {/* Column 1: NovaGent Core Identity & Contact */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/novagent-logo-transparent.png" // Assuming this is a white/transparent logo
                alt="NovaGent Logo"
                width={180}
                height={45}
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm">Intelligent Automation, Expertly Managed for Your Success.</p>
            <div className="space-y-3 pt-2">
              <h6 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Get In Touch</h6>
              <a
                href="mailto:contact@novagent.io"
                className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <Mail className="h-4 w-4 mr-3 text-cyan-500 group-hover:text-cyan-300 transition-colors" />
                contact@novagent.io
              </a>
              <a
                href="tel:+19514566051"
                className="flex items-center text-slate-300 hover:text-fuchsia-400 transition-colors group"
              >
                <Phone className="h-4 w-4 mr-3 text-fuchsia-500 group-hover:text-fuchsia-300 transition-colors" />
                (951) 456-6051
              </a>
              {/* Removed Houston reference, can add a generic "Global Operations" or similar if needed */}
            </div>
          </div>

          {/* Enterprise Solutions - Special Column */}
          <div className="space-y-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-lg -m-2"></div>
            <div className="relative z-10 p-2">
              <div className="flex items-center space-x-2 mb-3">
                <Zap className="h-5 w-5 text-pink-500" />
                <h6 className="text-lg font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text uppercase tracking-wider">
                  Enterprise
                </h6>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Custom agentic systems designed for large-scale operations and complex business needs.
              </p>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold transition-all duration-300 w-full"
              >
                <Link href="/solutions/custom-agentic-systems">
                  <span className="flex items-center justify-center">
                    Explore Solutions
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Columns 2-4: Navigation Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h6 className="text-md font-semibold text-white uppercase tracking-wider">{section.title}</h6>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} className="text-slate-300 hover:text-pink-400 transition-colors text-sm">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Legal, Socials, Copyright */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 md:mb-0">
            {legalLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors py-2 px-1 text-center sm:text-left min-h-[44px] flex items-center justify-center sm:justify-start"
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="flex space-x-5 mb-6 md:mb-0">
            <a
              href="https://linkedin.com/company/novagent/" // Replace with actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/Novagent1" // Replace with actual Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-fuchsia-400 transition-colors p-2"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          <div className="text-slate-500">© {currentYear} NovaGent. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}
