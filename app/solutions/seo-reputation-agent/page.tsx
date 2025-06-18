import React from "react"
import type { FunctionComponent } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Search,
  Star,
  TrendingUp,
  ShieldCheck,
  FileText,
  Settings2,
  BarChartBig,
  MessageSquare,
  Users,
  ThumbsUp,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  Eye,
  ChevronRight,
  Globe,
  ThumbsDown,
  BarChartHorizontal,
  Megaphone,
  Share2,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Placeholder for a more complex animated background component
const AbstractSEOReputationVisual: FunctionComponent<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 z-0",
        className,
      )}
    >
      <TrendingUp className="absolute -left-16 -top-10 h-80 w-80 text-cyan-500/5 opacity-50 animate-pulse" />
      <Star className="absolute -right-14 bottom-1/3 h-72 w-72 text-fuchsia-500/5 opacity-50 animate-pulse animation-delay-2000" />
      <ShieldCheck className="absolute left-1/3 top-1/2 h-60 w-60 text-purple-500/5 opacity-30 animate-pulse animation-delay-4000" />
      {children}
    </div>
  )
}

const seoRepPainPoints = [
  {
    icon: <Search className="h-10 w-10 text-rose-400" />,
    text: "Constantly battling complex, ever-changing SEO algorithms and technical site issues.",
    bgColor: "bg-rose-500/10 dark:bg-rose-900/20",
  },
  {
    icon: <FileText className="h-10 w-10 text-amber-400" />,
    text: "Struggling to produce a consistent stream of high-quality, SEO-optimized content that ranks.",
    bgColor: "bg-amber-500/10 dark:bg-amber-900/20",
  },
  {
    icon: <ThumbsDown className="h-10 w-10 text-sky-400" />,
    text: "Online reputation unfairly skewed by a few negative reviews, overshadowing genuine customer satisfaction.",
    bgColor: "bg-sky-500/10 dark:bg-sky-900/20",
  },
  {
    icon: <Layers className="h-10 w-10 text-fuchsia-400" />,
    text: "Disconnected SEO and reputation efforts failing to create a unified, powerful brand presence online.",
    bgColor: "bg-fuchsia-500/10 dark:bg-fuchsia-900/20",
  },
]

const seoCapabilities = [
  {
    icon: <Settings2 className="h-7 w-7" />,
    title: "Automated Technical SEO Audits",
    description:
      "Continuously scans for critical technical issues (speed, mobile, crawlability, schema, broken links).",
    color: "text-cyan-400",
  },
  {
    icon: <Lightbulb className="h-7 w-7" />,
    title: "AI-Powered Content Strategy & Support",
    description:
      "Assists in identifying topics, generating outlines, and drafting optimized content under expert guidance.",
    color: "text-fuchsia-400",
  },
  {
    icon: <Globe className="h-7 w-7" />, // Representing Google Search Console
    title: "Search Console Integration & Submissions",
    description: "Monitors site performance, submits sitemaps, requests indexing, and tracks resolved issues.",
    color: "text-blue-400",
  },
  {
    icon: <BarChartHorizontal className="h-7 w-7" />,
    title: "AI-Assisted Keyword & Competitive Analysis",
    description: "Identifies high-potential keywords, tracks rankings against competitors, and uncovers content gaps.",
    color: "text-purple-400",
  },
]

const reputationCapabilities = [
  {
    icon: <Megaphone className="h-7 w-7" />,
    title: "Proactive Review Generation Engine",
    description: "Intelligently automates personalized requests for genuine customer reviews on key platforms.",
    color: "text-emerald-400",
  },
  {
    icon: <Share2 className="h-7 w-7" />, // Representing multiple platforms
    title: "Multi-Platform Review Monitoring",
    description: "Continuously tracks new reviews, ratings, and mentions across important online sites.",
    color: "text-sky-400",
  },
  {
    icon: <ThumbsUp className="h-7 w-7" />,
    title: "Positive Review Amplification Guidance",
    description: "Strategically encourages sharing of positive internal feedback on high-impact public platforms.",
    color: "text-amber-400",
  },
  {
    icon: <AlertTriangle className="h-7 w-7" />,
    title: "Negative Feedback Internal Alert & Routing",
    description: "Immediately flags negative reviews internally for swift, prioritized response and resolution.",
    color: "text-rose-400",
  },
]

const seoRepBenefits = [
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Improved Search Rankings & Organic Traffic",
    description: "Achieve higher visibility on search engines, driving more qualified organic traffic and leads.",
    stat: "+X Positions",
    color: "text-emerald-400",
    bgColor: "bg-emerald-900/30",
  },
  {
    icon: <Star className="h-10 w-10" />,
    title: "Enhanced Online Reputation & Trust",
    description: "Build a robust, positive online reputation with more authentic reviews and higher star ratings.",
    stat: "+Y% Positive Reviews",
    color: "text-blue-400",
    bgColor: "bg-blue-900/30",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Increased Brand Credibility & Authority",
    description: "Establish your business as a trusted leader through a compelling online presence.",
    stat: "Stronger Brand",
    color: "text-fuchsia-400",
    bgColor: "bg-fuchsia-900/30",
  },
  {
    icon: <Zap className="h-10 w-10" />, // Representing synergy
    title: "Synergistic Growth from Combined Efforts",
    description: "Benefit from top-tier SEO and proactive reputation management working in concert.",
    stat: "Unified Power",
    color: "text-purple-400",
    bgColor: "bg-purple-900/30",
  },
]

const seoRepProcessSteps = [
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Platform Integration & Initial Audit",
    description: "Secure connection to your website, GSC, review platforms; AI performs baseline audit.",
    color: "text-cyan-400",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaborative Strategy Development",
    description: "Experts define SEO goals, content themes, keywords, and reputation objectives with you.",
    color: "text-fuchsia-400",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI-Driven SEO Execution & Content",
    description: "Agent implements fixes, assists content generation, monitors health, manages GSC.",
    color: "text-blue-400",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Proactive Reputation Management",
    description: "Agent tracks reviews, facilitates positive review generation, alerts on critical feedback.",
    color: "text-purple-400",
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Continuous Optimization & Reporting",
    description: "NovaGent monitors all metrics, refines strategies, provides reports and collaborative reviews.",
    color: "text-emerald-400",
  },
]

const seoRepNovaGentAdvantage = [
  {
    icon: <Search className="h-7 w-7 text-blue-400" />,
    title: "In-depth SEO Audit & Content Strategy",
    description: "Custom strategy development tailored to your business and market.",
  },
  {
    icon: <Star className="h-7 w-7 text-fuchsia-400" />,
    title: "Reputation Goal Setting & Campaign Design",
    description: "Strategic design of review generation and management campaigns.",
  },
  {
    icon: <Settings2 className="h-7 w-7 text-purple-400" />,
    title: "AI Tool Configuration & Ethical Practices",
    description: "Expert AI setup, content quality oversight, and adherence to ethical SEO.",
  },
  {
    icon: <BarChartBig className="h-7 w-7 text-emerald-400" />,
    title: "Ongoing Performance Analysis (SEO & Rep)",
    description: "Comprehensive tracking and analysis across all relevant metrics.",
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-cyan-400" />,
    title: "Proactive Adaptation to Algorithm Updates",
    description: "Staying ahead of search engine changes and industry best practices.",
  },
  {
    icon: <Users className="h-7 w-7 text-sky-400" />,
    title: "Transparent Reporting & Strategy Sessions",
    description: "Regular, clear updates and collaborative reviews for continuous improvement.",
  },
]

export default function SEOReputationAgentPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* 1. Page Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-900">
        <AbstractSEOReputationVisual />
        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-600 text-transparent bg-clip-text">
                Dominate Search & Own Your Online Story:
              </span>
              The NovaGent AI SEO + Reputation Agent.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl md:text-2xl">
              Our intelligent AI agent provides a unified solution, performing technical SEO audits, assisting in
              optimized content creation, submitting site improvements to search engines, and proactively managing your
              customer reviews to elevate your online presence and build unwavering brand credibility – all fully
              managed by NovaGent experts.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 h-12 px-8 text-base font-medium"
              >
                <Link href="/contact">
                  Get Started with SEO & Reputation
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pain Points Section */}
      <section className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Is Your Business Invisible Online or Misrepresented by a Few Loud Voices?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Navigating the complexities of online visibility and reputation can be overwhelming.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {seoRepPainPoints.map((point, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${point.bgColor} dark:border dark:border-slate-700/50 flex flex-col items-center text-center`}
              >
                <div className="flex justify-center mb-4">{point.icon}</div>
                <p className="text-slate-700 dark:text-slate-200 font-medium">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Solution Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Your Unified AI Strategist for Top Search Rankings & a Stellar Reputation.
              </h2>
              <p className="mt-6 text-lg text-slate-300">
                Our AI SEO + Reputation Agent intelligently combines technical optimization with proactive brand
                management. We deliver AI-driven insights and on-demand, SEO-optimized content, all fully managed by our
                team of digital marketing and AI specialists.
              </p>
              <p className="mt-4 text-lg text-cyan-400 font-semibold">
                But its true power is its autonomy. The agent works 24/7 to keep your site technically sound,
                proactively requests reviews from your best customers, and analyzes market trends to uncover new keyword
                opportunities—creating a virtuous cycle of sustainable online growth and credibility.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 opacity-10 blur-2xl"></div>
                <Search className="absolute top-1/4 left-1/4 h-20 w-20 text-cyan-300 opacity-60 animate-pulse" />
                <Star className="absolute bottom-1/4 right-1/4 h-20 w-20 text-fuchsia-400 opacity-60 animate-pulse animation-delay-1000" />
                <TrendingUp className="absolute inset-0 m-auto h-2/5 w-2/5 text-white opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities Section */}
      <section id="seorep-features" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Comprehensive Features for Full-Spectrum Online Presence Enhancement.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              A dual approach to ensure your business not only gets found but is also trusted.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* SEO Capabilities Column */}
            <div>
              <h3 className="mb-8 text-2xl font-semibold text-center text-blue-500 dark:text-blue-400 tracking-tight">
                <Search className="inline-block h-7 w-7 mr-2 align-bottom" />
                AI-Powered SEO Optimization
              </h3>
              <div className="space-y-8">
                {seoCapabilities.map((capability) => (
                  <div
                    key={capability.title}
                    className="group rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/60 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-500/70 dark:hover:border-blue-400/70 hover:-translate-y-1"
                  >
                    <div className={`mb-4 flex items-center gap-3 ${capability.color}`}>
                      {capability.icon}
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{capability.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reputation Management Capabilities Column */}
            <div>
              <h3 className="mb-8 text-2xl font-semibold text-center text-fuchsia-500 dark:text-fuchsia-400 tracking-tight">
                <Star className="inline-block h-7 w-7 mr-2 align-bottom" />
                Proactive Reputation Management
              </h3>
              <div className="space-y-8">
                {reputationCapabilities.map((capability) => (
                  <div
                    key={capability.title}
                    className="group rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/60 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-fuchsia-500/70 dark:hover:border-fuchsia-400/70 hover:-translate-y-1"
                  >
                    <div className={`mb-4 flex items-center gap-3 ${capability.color}`}>
                      {capability.icon}
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{capability.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Impact: Tangible Benefits Section */}
      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Higher Visibility, Stronger Brand Reputation, More Qualified Customers.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:mt-16">
            {seoRepBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className={`flex flex-col items-center text-center p-8 rounded-2xl shadow-xl ${benefit.bgColor} border border-transparent hover:border-slate-700 dark:hover:border-slate-600 transition-all duration-300`}
              >
                <div
                  className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full ${benefit.color} bg-slate-800/50 dark:bg-slate-700/50`}
                >
                  {benefit.icon}
                </div>
                <h3 className={`text-2xl font-semibold mb-2 ${benefit.color}`}>{benefit.stat}</h3>
                <h4 className="text-lg font-medium text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-300 dark:text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How It Works Section */}
      <section className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Your Automated Journey to a Dominant & Trusted Online Presence.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              An integrated and transparent process for comprehensive online presence management.
            </p>
          </div>
          <div className="mt-16">
            <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-5 md:gap-x-6">
              {seoRepProcessSteps.map((step, index) => (
                <div key={step.title} className="relative flex flex-col items-center text-center px-2">
                  {index < seoRepProcessSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 -translate-y-1/2">
                      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1">
                        <path
                          d="M0,0.5 L100,0.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="5 5"
                          className="text-slate-300 dark:text-slate-700"
                        />
                      </svg>
                    </div>
                  )}
                  {index > 0 && (
                    <div className="md:hidden absolute bottom-full left-1/2 w-0.5 h-10 -translate-x-1/2 mb-2">
                      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1 100">
                        <path
                          d="M0.5,0 L0.5,100"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="5 5"
                          className="text-slate-300 dark:text-slate-700"
                        />
                      </svg>
                    </div>
                  )}
                  <div
                    className={`relative z-10 mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full border-4 ${step.color.replace("text-", "border-")} bg-white dark:bg-slate-800 shadow-lg`}
                  >
                    {React.cloneElement(step.icon, { className: `h-9 w-9 ${step.color}` })}
                  </div>
                  <h3 className={`text-lg font-semibold mb-1 ${step.color}`}>{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. The NovaGent Advantage Section */}
      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Holistic Online Presence Management: AI Precision, Human Expertise, Unified Strategy.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              The NovaGent SEO + Reputation Agent is a comprehensive service, not just tools. We provide end-to-end
              management and strategic guidance. Our experts deliver:
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
            {seoRepNovaGentAdvantage.map((advantage) => (
              <div
                key={advantage.title}
                className="flex flex-col items-start gap-4 rounded-xl bg-slate-800/50 p-6 border border-slate-700/60 hover:border-purple-500/50 transition-colors duration-300"
              >
                <div className="flex-shrink-0">{advantage.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{advantage.title}</h3>
                  <p className="text-slate-400 text-sm">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-700 via-purple-700 to-fuchsia-700">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Elevate Your Rankings, Amplify Your Reputation, and Grow Your Business with NovaGent AI.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Discover how our integrated AI SEO + Reputation Agent can transform your online presence into a powerful
            asset.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="h-14 px-10 text-lg font-semibold bg-white text-purple-700 shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Get Started with SEO & Reputation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
