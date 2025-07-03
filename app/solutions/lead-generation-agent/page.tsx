import React from "react"
import type { FunctionComponent } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Target,
  Users,
  Search,
  Filter,
  DatabaseZap,
  Sparkles,
  TrendingUp,
  DollarSign,
  Zap,
  Cpu,
  Layers,
  ShieldCheck,
  Mail,
  Linkedin,
  BarChartBig,
  Rocket,
  Eye,
  Wrench,
  MessageCircle,
  FileText,
  Compass,
  Leaf,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Placeholder for a more complex animated background component
const AbstractLeadGenVisualPlaceholder: FunctionComponent<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 z-0",
        className,
      )}
    >
      <Search className="absolute -left-12 -top-16 h-80 w-80 text-cyan-500/5 opacity-50 animate-pulse" />
      <Users className="absolute -right-10 bottom-1/4 h-72 w-72 text-fuchsia-500/5 opacity-50 animate-pulse animation-delay-2000" />
      <Filter className="absolute left-1/3 top-1/2 h-60 w-60 text-purple-500/5 opacity-30 animate-pulse animation-delay-4000" />
      {children}
    </div>
  )
}

const leadGenPainPoints = [
  {
    icon: <Compass className="h-10 w-10 text-rose-500" />,
    text: "Countless hours consumed by manual prospecting, list building, and data verification.",
    bgColor: "bg-rose-500/10",
  },
  {
    icon: <Leaf className="h-10 w-10 text-amber-500" />,
    text: "Sales teams demoralized and unproductive due to low-quality, poorly targeted leads.",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: <Search className="h-10 w-10 text-sky-500" />,
    text: "Struggling to accurately identify prospects exhibiting genuine purchase intent early in their journey.",
    bgColor: "bg-sky-500/10",
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-fuchsia-500" />,
    text: "Generic or inconsistent outreach efforts failing to capture attention and initiate meaningful conversations.",
    bgColor: "bg-fuchsia-500/10",
  },
]

const leadGenCoreCapabilities = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "ICP Definition & Dynamic Targeting",
    description:
      "We collaborate to define your precise Ideal Customer Profile (ICP), and the agent dynamically adjusts targeting based on performance data.",
    color: "text-cyan-400",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Automated Multi-Source Prospect Sourcing",
    description:
      "Utilizes ethical and effective techniques to source potential leads from diverse online data sources that match your ICP.",
    color: "text-fuchsia-400",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Advanced Data Verification & Cleaning",
    description:
      "Automatically verifies contact information and cleanses data for maximum accuracy, significantly reducing bounce rates.",
    color: "text-blue-400",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Comprehensive Lead Enrichment",
    description:
      "Enriches prospect profiles with crucial firmographic, demographic, and technographic data, plus social profiles, providing deep context.",
    color: "text-purple-400",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "AI-Powered Purchase Intent Scoring",
    description:
      "Applies sophisticated scoring based on real-time intent signals (e.g., online engagement, company news, hiring trends) to prioritize hot leads.",
    color: "text-emerald-400",
  },
  {
    icon: <Mail className="h-7 w-7" />, // Combined with LinkedIn for brevity
    secondaryIcon: <Linkedin className="h-7 w-7" />,
    title: "Personalized Multi-Channel Outreach",
    description:
      "Launches and manages tailored outreach sequences via email and LinkedIn, personalized with enriched data to maximize engagement.",
    color: "text-sky-400",
  },
  {
    icon: <DatabaseZap className="h-8 w-8" />,
    title: "Direct CRM Integration & Lead Routing",
    description:
      "Seamlessly delivers verified, enriched, and intent-scored leads, with full outreach history, directly into your CRM.",
    color: "text-amber-400",
  },
]

const leadGenBenefits = [
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Consistent Sales-Ready Leads",
    description:
      "Fill your pipeline with a predictable stream of prospects matching your ICP and showing purchase intent.",
    stat: "+XX% Qualified Leads",
    color: "text-emerald-400",
    bgColor: "bg-emerald-900/30",
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Boost Sales Team Efficiency",
    description: "Enable reps to spend >80% of their time on active selling, not laborious prospecting.",
    stat: ">80% Selling Time",
    color: "text-blue-400",
    bgColor: "bg-blue-900/30",
  },
  {
    icon: <DollarSign className="h-10 w-10" />,
    title: "Reduce Cost Per Qualified Lead",
    description: "Achieve a more favorable CPQL through hyper-targeted automation and operational efficiency.",
    stat: "Lower CPQL",
    color: "text-fuchsia-400",
    bgColor: "bg-fuchsia-900/30",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Accelerate Lead-to-Opportunity Velocity",
    description: "Engage high-intent leads faster with personalized outreach, moving them through the funnel quicker.",
    stat: "Faster Velocity",
    color: "text-purple-400",
    bgColor: "bg-purple-900/30",
  },
  {
    icon: <BarChartBig className="h-10 w-10" />,
    title: "Improve Overall Conversion Rates",
    description:
      "Increase lead-to-opportunity and opportunity-to-close rates by engaging better qualified, pre-warmed prospects.",
    stat: "Higher Conversions",
    color: "text-amber-400",
    bgColor: "bg-amber-900/30",
  },
]

const leadGenProcessSteps = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "ICP & Strategy Definition",
    description: "Collaborative definition of precise targeting, messaging, and goals.",
    color: "text-cyan-400",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI Sources, Verifies & Enriches",
    description: "Agent gathers leads, validates data, and appends crucial business intelligence.",
    color: "text-fuchsia-400",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Intent Scoring & Prioritization",
    description: "AI analyzes signals and scores leads, focusing outreach on highest potential prospects.",
    color: "text-blue-400",
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: "Automated Personalized Outreach",
    description: "Tailored multi-channel campaigns engage scored leads effectively.",
    color: "text-purple-400",
  },
  {
    icon: <DatabaseZap className="h-8 w-8" />,
    title: "Sales-Ready Leads to CRM",
    description: "Qualified leads with history and data piped into your sales workflow, fully managed.",
    color: "text-emerald-400",
  },
]

const leadGenNovaGentAdvantage = [
  {
    icon: <Target className="h-7 w-7 text-blue-400" />,
    title: "Collaborative ICP Development & Targeting Strategy",
    description: "Ongoing refinement of your ideal customer profile and targeting parameters.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-fuchsia-400" />,
    title: "Ethical & Compliant Data Sourcing",
    description: "Adherence to data privacy regulations and best practices in prospect sourcing.",
  },
  {
    icon: <FileText className="h-7 w-7 text-purple-400" />,
    title: "Custom Outreach Copywriting & A/B Testing",
    description: "Crafting compelling messaging and continuously testing for optimal engagement.",
  },
  {
    icon: <Eye className="h-7 w-7 text-emerald-400" />,
    title: "Continuous Lead Quality Monitoring",
    description: "Ensuring the leads delivered consistently meet your quality and intent criteria.",
  },
  {
    icon: <Wrench className="h-7 w-7 text-cyan-400" />,
    title: "Transparent Reporting & Strategic Optimization",
    description: "Regular performance updates and collaborative sessions to refine strategy.",
  },
]

export default function LeadGenerationAgentPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* 1. Page Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden">
        <AbstractLeadGenVisualPlaceholder />
        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-600 text-transparent bg-clip-text">
                Fuel Your Sales Engine
              </span>
              with AI-Powered Lead Generation.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl md:text-2xl">
              NovaGent's Lead Generation Agent automates the entire top-of-your-funnel – from precisely identifying and
              sourcing ideal prospects to verifying data, enriching profiles, scoring purchase intent, and initiating
              personalized outreach. We deliver a consistent flow of qualified leads directly into your CRM, ready for
              your sales team to close.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 h-12 px-8 text-base font-medium"
              >
                <Link href="/contact">Get Started with Lead Generation</Link>
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
              Stop Wasting Time on Cold Outreach & Low-Quality Lists.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Manual prospecting is inefficient and often leads to frustrating results. Sound familiar?
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {leadGenPainPoints.map((point, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${point.bgColor} dark:bg-slate-800 dark:border dark:border-slate-700 flex flex-col items-center text-center`}
              >
                <div className="flex justify-center mb-4">{point.icon}</div>
                <p className="text-slate-700 dark:text-slate-200 font-medium">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Solution Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Your Always-On AI Prospecting & Engagement Specialist.
              </h2>
              <p className="mt-6 text-lg text-slate-300">
                The NovaGent AI Lead Generation Agent is your autonomous prospecting engine, built to fill your pipeline
                with sales-ready leads. You can task it on-demand with your Ideal Customer Profile, or set it on an
                automated schedule for a consistent, predictable flow of new prospects.
              </p>
              <p className="mt-4 text-lg text-cyan-400 font-semibold">
                But its most powerful capability is acting as a Proactive Opportunity Hunter, autonomously scanning the
                market for critical buying triggers like funding announcements. This fully-managed process delivers
                "hot" leads to your team the moment they are most likely to buy, freeing your team to focus on selling.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-fuchsia-500 opacity-20 blur-2xl"></div>
                <Target className="absolute inset-0 m-auto h-2/5 w-2/5 text-white opacity-50" />
                <Search className="absolute top-1/4 left-1/4 h-16 w-16 text-cyan-300 opacity-70 animate-pulse" />
                <Sparkles className="absolute bottom-1/4 right-1/4 h-12 w-12 text-fuchsia-400 opacity-70 animate-pulse animation-delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities Section */}
      <section id="leadgen-features" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Powering Your Pipeline: Features That Convert Prospects into Opportunities.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Our AI Lead Generation Agent leverages a suite of advanced capabilities to build your sales pipeline.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
            {leadGenCoreCapabilities.map((capability) => (
              <div
                key={capability.title}
                className="group rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/60 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-purple-500/70 dark:hover:border-purple-400/70 hover:-translate-y-1.5 flex flex-col"
              >
                <div className={`mb-5 flex items-center gap-3 ${capability.color}`}>
                  {capability.icon}
                  {capability.secondaryIcon && capability.secondaryIcon}
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{capability.title}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 flex-grow">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Impact: Tangible Benefits Section */}
      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              More High-Quality Leads. Shorter Sales Cycles. Scalable Revenue Growth.
            </h2>
          </div>
          <div className="mt-12 lg:mt-16">
            {/* First 3 cards in normal grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {leadGenBenefits.slice(0, 3).map((benefit) => (
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

            {/* Last 2 cards centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                {leadGenBenefits.slice(3).map((benefit) => (
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
          </div>
        </div>
      </section>

      {/* 6. How It Works Section */}
      <section className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Your Automated Journey from Prospecting to Pipeline Power.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              See how our AI Lead Generation Agent systematically builds your sales pipeline.
            </p>
          </div>
          <div className="mt-16">
            <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-5 md:gap-x-6">
              {leadGenProcessSteps.map((step, index) => (
                <div key={step.title} className="relative flex flex-col items-center text-center px-2">
                  {index < leadGenProcessSteps.length - 1 && (
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
              Beyond Lists & Automation: Expertly Managed Lead Generation by AI & Humans.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              The NovaGent Lead Generation Agent is a comprehensive service, not just a tool. We partner with you for
              sustainable pipeline growth. Our experts provide:
            </p>
          </div>
          <div className="mt-12 lg:mt-16">
            {/* First 3 cards in normal grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {leadGenNovaGentAdvantage.slice(0, 3).map((advantage) => (
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

            {/* Last 2 cards centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                {leadGenNovaGentAdvantage.slice(3).map((advantage) => (
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
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-700 via-purple-700 to-fuchsia-700">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Stop Searching for Leads. Let Them Be Delivered to You – Qualified & Ready to Engage.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Discover how NovaGent's AI Lead Generation Agent can revolutionize your top-of-funnel and provide a
            consistent, high-quality lead flow.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="h-14 px-10 text-lg font-semibold bg-white text-purple-700 shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Book a Demo of the Lead Generation Agent</Link>
            </Button>
            <Button variant="link" size="lg" asChild className="text-base font-medium text-slate-200 hover:text-white">
              <Link href="/pricing">View Our Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
