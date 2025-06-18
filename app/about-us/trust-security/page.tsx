import {
  ShieldCheck,
  DatabaseZap,
  CloudCog,
  LockKeyhole,
  BookCheck,
  Handshake,
  ShieldAlert,
  Mail,
  MessageSquareQuote,
  Zap,
  GitCommit,
  Layers,
  Users,
  TrendingUp,
  Target,
  CheckCircle,
} from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const pillars = [
  {
    icon: DatabaseZap,
    title: "Data Security & Privacy by Design",
    points: [
      "End-to-end encryption for data at rest and in transit.",
      "Platform designed for client data confidentiality and isolation.",
      "Commitment to data privacy principles (GDPR & CCPA compliant).",
    ],
    accentColor: "text-cyan-400",
    bgColor: "bg-cyan-900/30",
    borderColor: "border-cyan-500/50",
    hoverBorderColor: "hover:border-cyan-500",
  },
  {
    icon: CloudCog,
    title: "Secure & Resilient Platform Infrastructure",
    points: [
      "Built on robust, secure cloud infrastructure (e.g., AWS) for high availability and resilience.",
      "Focus on fault tolerance and continuous monitoring for 24/7 agent operation.",
      "Backed by comprehensive Service Level Agreements (SLAs).",
    ],
    accentColor: "text-sky-400",
    bgColor: "bg-sky-900/30",
    borderColor: "border-sky-500/50",
    hoverBorderColor: "hover:border-sky-500",
  },
  {
    icon: LockKeyhole,
    title: "Application & Agent Security",
    points: [
      "Secure access control: Single Sign-On (SSO)/Multi-Factor Authentication (MFA).",
      "Role-Based Access Control (RBAC) for client dashboard management.",
      "Comprehensive logging of all agent actions for audit trails and transparency.",
    ],
    accentColor: "text-purple-400",
    bgColor: "bg-purple-900/30",
    borderColor: "border-purple-500/50",
    hoverBorderColor: "hover:border-purple-500",
  },
  {
    icon: BookCheck,
    title: "Compliance & Governance",
    points: [
      "Commitment to meeting rigorous industry standards.",
      "Security controls aligned with SOC 2 criteria; formal SOC 2 Type II audit underway.",
      "Clear roadmap for supporting HIPAA-regulated environments.",
    ],
    accentColor: "text-emerald-400",
    bgColor: "bg-emerald-900/30",
    borderColor: "border-emerald-500/50",
    hoverBorderColor: "hover:border-emerald-500",
  },
  {
    icon: Handshake,
    title: "Ethical AI & Responsible Innovation",
    points: [
      "Dedicated to responsible development and deployment of AI.",
      "Principles: Transparency in agent operations, accountability in managed services.",
      "Commitment to mitigating bias in AI design and application.",
    ],
    accentColor: "text-fuchsia-400",
    bgColor: "bg-fuchsia-900/30",
    borderColor: "border-fuchsia-500/50",
    hoverBorderColor: "hover:border-fuchsia-500",
  },
]

// Helper function to render a single pillar card
const renderPillarCard = (pillar: (typeof pillars)[0], extraClasses = "") => (
  <div
    key={pillar.title}
    className={`p-8 rounded-xl shadow-2xl border ${pillar.borderColor} ${pillar.hoverBorderColor} transition-all duration-300 flex flex-col group transform hover:scale-[1.02] ${pillar.bgColor} backdrop-blur-sm h-full ${extraClasses}`}
  >
    <div
      className={`mb-6 p-4 rounded-full self-start transition-all duration-300 group-hover:scale-110 border ${pillar.borderColor} ${pillar.accentColor} bg-slate-800/50`}
    >
      <pillar.icon className="h-8 w-8" />
    </div>
    <h3 className={`text-2xl font-semibold mb-4 ${pillar.accentColor}`}>{pillar.title}</h3>
    <ul className="space-y-3 flex-grow mt-2">
      {pillar.points.map((point, i) => (
        <li key={i} className="flex items-start">
          <CheckCircle className={`h-5 w-5 ${pillar.accentColor} mr-3 mt-1 flex-shrink-0`} />
          <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default function TrustSecurityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <main className="flex-grow">
        {/* Hero Section (omitted for brevity, assumed unchanged) */}
        <section className="relative py-28 md:py-40 overflow-hidden border-b border-slate-800/60">
          <AnimatedBackground />
          <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
            <div className="mb-8 inline-block p-4 bg-slate-800/70 border border-cyan-500/40 rounded-2xl shadow-xl backdrop-blur-sm">
              <ShieldCheck className="h-16 w-16 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500 leading-tight">
                A Foundation of Trust
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Enterprise-Grade Security & Compliance, meticulously engineered for your AI Workforce. At NovaGent, the
              sanctity of your data and the unwavering reliability of your AI agents are paramount.
            </p>
          </div>
        </section>

        {/* Our Security-First Philosophy Section (omitted for brevity, assumed unchanged) */}
        <section className="py-20 md:py-28 bg-slate-900">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2 text-center md:text-left">
                <Zap className="h-20 w-20 text-sky-400 mx-auto md:mx-0 mb-6 opacity-80" />
              </div>
              <div className="md:col-span-3">
                <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight leading-tight">
                  Security Isn&apos;t an Add-On;
                  <span className="block text-sky-400">It&apos;s Our Core Architecture.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  NovaGent understands that deploying AI agents to handle your business processes requires absolute
                  confidence. Our commitment to trust and security is not an afterthought; it&apos;s woven into the
                  fabric of our platform architecture, operational processes, and company culture from day one.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  We are dedicated to implementing and maintaining robust security measures to safeguard your
                  information and ensure our AI solutions operate with the integrity and reliability you expect,
                  particularly for our enterprise partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Pillars of Trust & Security Section */}
        <section className="py-20 md:py-28 bg-slate-950 border-y border-slate-800/60">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16 md:mb-20">
              <Layers className="h-16 w-16 text-purple-400 mx-auto mb-4 opacity-80" />
              <h2 className="text-4xl md:text-5xl font-semibold text-purple-400 tracking-tight">
                How We Protect Your Data
              </h2>
              <p className="text-xl text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed">
                Our multi-layered approach ensures platform integrity and data confidentiality at every stage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {pillars.map((pillar, index) => {
                let extraClasses = ""
                if (pillars.length === 5) {
                  if (index === 3) {
                    // 4th item
                    extraClasses = "lg:col-start-2" // Start in 2nd column on LG screens
                  }
                  if (index === 4) {
                    // 5th item
                    // On MD screens, make it span 2 cols and center it.
                    // On LG, it will naturally fall into the 3rd col after the 4th item started at col 2.
                    extraClasses = "md:col-span-2 md:mx-auto lg:col-start-auto lg:mx-0"
                  }
                }
                // For MD screens, if it's the last item and it's odd, center it.
                if (pillars.length % 2 !== 0 && index === pillars.length - 1) {
                  extraClasses += " md:col-span-2 md:max-w-lg md:mx-auto lg:col-span-1 lg:max-w-none"
                } else if (index === 3 && pillars.length === 5) {
                  // 4th item in a 5 item list
                  extraClasses += " lg:col-start-2"
                }

                return renderPillarCard(pillar, extraClasses)
              })}
            </div>
          </div>
        </section>

        {/* The Shared Responsibility Model Section (omitted for brevity, assumed unchanged) */}
        <section className="py-20 md:py-28 bg-slate-900">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <Users className="h-16 w-16 text-emerald-400 mx-auto mb-4 opacity-80" />
              <h2 className="text-4xl md:text-5xl font-semibold text-emerald-400 tracking-tight">
                Security: A Collaborative Commitment
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/70 shadow-lg h-full">
                <h3 className="text-2xl font-semibold text-slate-100 mb-4">NovaGent&apos;s Role</h3>
                <p className="text-slate-400 leading-relaxed">
                  We implement comprehensive security measures for our platform and the AI agents we manage. This
                  includes infrastructure security, application hardening, data encryption, regular audits, and
                  proactive threat monitoring. Our team is dedicated to maintaining a secure foundation for your AI
                  operations.
                </p>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/70 shadow-lg h-full">
                <h3 className="text-2xl font-semibold text-slate-100 mb-4">Your Role</h3>
                <p className="text-slate-400 leading-relaxed">
                  A truly secure environment is a partnership. We empower you with tools and guidance, and encourage
                  best practices for managing user access credentials, the security of your integrated systems, and the
                  data you provide for agent interaction. Vigilance on your end complements our efforts.
                </p>
              </div>
            </div>
            <p className="text-center text-slate-500 mt-12 text-lg leading-relaxed max-w-3xl mx-auto">
              Together, we create a robust defense against evolving threats, ensuring the integrity and confidentiality
              of your AI-driven processes.
            </p>
          </div>
        </section>

        {/* Continuously Evolving Our Defenses Section (omitted for brevity, assumed unchanged) */}
        <section className="py-20 md:py-28 bg-slate-950 border-y border-slate-800/60">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3">
                <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight leading-tight">
                  Adapting to a<span className="block text-fuchsia-400">Dynamic Security Landscape.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  The world of cybersecurity is ever-evolving, and so is our commitment to it. NovaGent continuously
                  reviews and enhances its security protocols, infrastructure, and agent designs to address emerging
                  threats and incorporate industry best practices.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: TrendingUp, text: "Proactive Threat Intelligence & Monitoring" },
                    { icon: GitCommit, text: "Regular Security Audits & Penetration Testing" },
                    { icon: Target, text: "Rapid Response to Vulnerabilities & Incidents" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center bg-slate-800/40 p-4 rounded-lg border border-slate-700/50"
                    >
                      <item.icon className="h-6 w-6 text-fuchsia-400 mr-4 flex-shrink-0" />
                      <span className="text-slate-300">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-lg mt-6 leading-relaxed">
                  This ensures we remain a trusted partner for your AI automation needs, today and tomorrow.
                </p>
              </div>
              <div className="md:col-span-2 text-center md:text-right">
                <ShieldAlert className="h-32 w-32 md:h-48 md:w-48 text-fuchsia-400 mx-auto md:ml-auto opacity-70" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us About Trust & Security Section (omitted for brevity, assumed unchanged) */}
        <section className="py-20 md:py-28 bg-slate-900">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-slate-800 via-slate-800/90 to-sky-900/30 p-8 md:p-12 rounded-xl shadow-2xl border border-sky-700/40">
              <div className="mb-6 inline-block p-4 bg-sky-800/30 border border-sky-600/50 rounded-full shadow-lg">
                <Mail className="h-10 w-10 text-sky-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-sky-300 tracking-tight">
                Have Specific Security or Compliance Questions?
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Your trust is our priority. We welcome in-depth security reviews and are prepared to provide the
                documentation your team needs for its due diligence process.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">Contact Our Security Team</Link>
              </Button>
              <p className="text-slate-400 text-md italic flex items-center justify-center mt-10">
                <MessageSquareQuote className="h-5 w-5 mr-2 text-slate-500 flex-shrink-0" />
                We encourage discussing your specific security requirements during your consultation.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
