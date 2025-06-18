import React from "react"
import type { FunctionComponent } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ChevronRight,
  Search,
  Settings2,
  Rocket,
  BrainCircuit,
  BarChart3,
  CloudCog,
  PlugZap,
  Users,
  LayoutDashboard,
  Handshake,
  Lightbulb,
  Zap,
  UserCheck,
  Sparkles,
  Award,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Enhanced animated background component
const AbstractProcessVisual: FunctionComponent<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 z-0",
        className,
      )}
    >
      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        {/* Large background elements */}
        <Settings2 className="absolute -left-12 -top-12 h-64 w-64 text-purple-500/5 opacity-50 animate-spin-slow" />
        <Rocket className="absolute -right-10 bottom-1/4 h-72 w-72 text-cyan-500/5 opacity-50 animate-pulse animation-delay-2000" />
        <BrainCircuit className="absolute left-1/3 top-1/2 h-48 w-48 text-blue-500/5 opacity-30 animate-pulse animation-delay-4000" />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400/30 rounded-full animate-float animation-delay-3000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-fuchsia-400/40 rounded-full animate-float animation-delay-5000"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float animation-delay-2000"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>
      {children}
    </div>
  )
}

const processSteps = [
  {
    icon: <Search className="h-10 w-10" />,
    title: "Discovery & Strategic Design",
    description:
      "We begin with a deep dive into your objectives and workflows. Our experts collaborate with you to pinpoint high-impact automation opportunities and design the optimal AI agent strategy, whether customizing our Core Agents or scoping a full Custom AI System.",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
  },
  {
    icon: <Settings2 className="h-10 w-10" />,
    title: "Tailored Agent Configuration & Integration",
    description:
      "Our team meticulously configures your chosen AI agents, tailoring their logic, knowledge connections, and operational parameters. We handle seamless integration with your existing CRMs, ad platforms, support desks, and other essential business tools.",
    color: "text-fuchsia-400",
    borderColor: "border-fuchsia-500/30",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Seamless Deployment & Activation",
    description:
      "Your AI agents are deployed onto our robust, managed infrastructure. We oversee the entire go-live process, ensuring a smooth transition and that your agents are operational and delivering value from day one.",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
  },
  {
    icon: <BrainCircuit className="h-10 w-10" />,
    title: "Continuous Performance Management & Optimization",
    description:
      "This is the NovaGent 'Managed-AI' core. We actively monitor your agents 24/7, refine their performance through ongoing prompt engineering and model updates, and our human experts proactively handle any edge cases. Your agents continuously learn and improve.",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Transparent Reporting & Value Realization",
    description:
      "Gain full visibility into the tangible impact of your AI agents via your custom NovaGent dashboard. We provide regular, insightful performance reports and engage in collaborative reviews to ensure alignment, maximize your ROI, and adapt to your evolving business.",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/30",
  },
]

const platformPillars = [
  {
    icon: <Lightbulb className="h-8 w-8 text-cyan-400" />,
    title: "Sophisticated AI Agent Core",
    bullets: [
      "Advanced NLP & machine learning principles.",
      "Intelligent workflow automation capabilities.",
      "Precision execution for complex tasks.",
    ],
  },
  {
    icon: <CloudCog className="h-8 w-8 text-fuchsia-400" />,
    title: "Robust & Scalable Managed Infrastructure",
    bullets: [
      "Reliable, secure, and highly scalable platform.",
      "We manage all backend complexities for you.",
      "Ensures consistent performance and data integrity.",
    ],
  },
  {
    icon: <PlugZap className="h-8 w-8 text-blue-400" />,
    title: "Deep & Seamless Integrations",
    bullets: [
      "Connects with CRMs, ad platforms, support desks.",
      "Smooth data flow for cohesive operations.",
      "Extends your existing business ecosystem.",
    ],
  },
  {
    icon: <Users className="h-8 w-8 text-purple-400" />,
    title: "Proactive 'Human-in-the-Loop' Management",
    bullets: [
      "Continuous monitoring and proactive optimization.",
      "Strategic guidance from dedicated AI experts.",
      "Expert handling of exceptions and edge cases.",
    ],
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-emerald-400" />,
    title: "Real-Time Performance Dashboards & Insights",
    bullets: [
      "Intuitive, real-time KPI dashboards via NovaGent portal.",
      "Complete visibility into agent performance.",
      "Track tasks automated and value delivered.",
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* 1. Page Hero Section - ENHANCED */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
        <AbstractProcessVisual />
        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                How{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse">
                  NovaGent
                </span>{" "}
                Delivers Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-500">
                  Dedicated AI Workforce
                </span>
                , Step by Step.
              </h1>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <p className="mt-8 text-lg leading-relaxed text-slate-300 sm:text-xl lg:text-2xl max-w-3xl mx-auto">
                Discover our collaborative, transparent, and results-driven approach to designing, deploying, and
                continuously optimizing AI agents that transform your business operations and drive growth.
              </p>
            </div>

            {/* Key Benefits Pills */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-500">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium text-cyan-300">✨ Fully Managed</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium text-purple-300">🚀 Rapid Deployment</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium text-fuchsia-300">📈 Proven Results</span>
              </div>
            </div>

            <div className="mt-12 animate-fade-in-up animation-delay-700">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-14 px-10 text-lg font-semibold border-0 relative overflow-hidden"
              >
                <Link href="/contact">
                  <span className="relative z-10">Get Started Today</span>
                  <ChevronRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 'Your Collaborative Journey to AI-Powered Success' (Step-by-Step Process Section) */}
      <section id="process-steps" className="py-16 sm:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Your Path to Powerful Automation, Simplified & Managed.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We partner with you every step of the way, ensuring a seamless journey to AI-driven results.
            </p>
          </div>
          <div className="relative mt-16 max-w-5xl mx-auto">
            {/* Vertical line for desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-700/50 transform -translate-x-1/2 hidden md:block"></div>

            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className={cn(
                  "relative mb-12 md:mb-16 flex flex-col md:flex-row items-center group",
                  index % 2 === 0 ? "md:flex-row-reverse" : "",
                )}
              >
                {/* Icon and Connector */}
                <div
                  className={cn(
                    "relative z-10 flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg mb-4 md:mb-0",
                    `bg-gradient-to-br ${step.color.replace("text-", "from-").replace("400", "500")} ${step.color.replace("text-", "to-").replace("400", "700")}`,
                  )}
                >
                  {React.cloneElement(step.icon, { className: "h-8 w-8 md:h-10 md:h-10 text-white" })}
                  {/* Horizontal connector for desktop */}
                  <div
                    className={cn(
                      "absolute top-1/2 w-8 md:w-16 h-1 bg-slate-200 dark:bg-slate-700/50 hidden md:block",
                      index % 2 === 0 ? "right-full" : "left-full",
                    )}
                  ></div>
                </div>

                {/* Content */}
                <div
                  className={cn(
                    "relative bg-slate-50 dark:bg-slate-800/70 p-6 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 w-full md:w-2/5 transition-all duration-300 group-hover:shadow-2xl",
                    `hover:border-${step.color.split("-")[1]}-500/50 dark:hover:border-${step.color.split("-")[1]}-400/50`,
                    index % 2 === 0 ? "md:mr-12 lg:mr-20" : "md:ml-12 lg:ml-20",
                  )}
                >
                  <h3 className={`text-xl font-semibold mb-2 ${step.color}`}>{`${index + 1}. ${step.title}`}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 'The Pillars of Our Platform' Section - UPDATED */}
      <section className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Unlock{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                True Potential
              </span>{" "}
              with Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">
                Integrated AI
              </span>{" "}
              Platform.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Our platform combines cutting-edge technology with comprehensive service to ensure your success.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6 lg:max-w-5xl xl:max-w-6xl mx-auto">
            {platformPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={cn(
                  "group rounded-xl bg-white dark:bg-slate-800/80 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-slate-200 dark:border-slate-700 hover:border-purple-500/30 dark:hover:border-purple-400/30 flex flex-col",
                  "lg:col-span-2", // All items span 2 columns on large screens
                  index === 3 && platformPillars.length === 5 ? "lg:col-start-2" : "", // The 4th item (index 3) starts at the 2nd column of the 6-col grid
                  // Item 0,1,2 will naturally fill the first row (2+2+2=6 columns)
                  // Item 3 (index 3) starts at col 2, spans 2. Item 4 (index 4) follows, spans 2. (cols 2-3 and 4-5 are filled)
                  // This leaves col 1 and col 6 empty in the second row for lg screens.
                )}
              >
                <div className="mb-5 flex justify-center">{pillar.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4 text-center">
                  {pillar.title}
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 text-left flex-grow">
                  {pillar.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <Zap className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-purple-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 'Your Ongoing Partnership with NovaGent' Section - UPDATED */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                More Than a Service Provider – We're Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Dedicated AI
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">
                  Automation Partner
                </span>
                .
              </h2>
              <p className="mt-6 text-lg text-slate-300">
                Our commitment to your success extends far beyond initial deployment. We believe in fostering a
                long-term partnership focused on achieving your continuous business improvement.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <UserCheck className="h-8 w-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Named Solutions Architect</h3>
                    <p className="text-lg text-slate-300">
                      Direct access to your dedicated AI expert for strategic advice, performance reviews, and ongoing
                      support.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Sparkles className="h-8 w-8 text-fuchsia-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Proactive Excellence</h3>
                    <p className="text-lg text-slate-300">
                      Continuous optimization, clear communication, and expert handling of edge cases for seamless
                      operations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Service Level Guarantee</h3>
                    <p className="text-lg text-slate-300">
                      Comprehensive SLA designed for your peace of mind, ensuring your AI solutions evolve with your
                      business.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              {/* Placeholder for partnership visual */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 opacity-20 blur-xl"></div>
                <Handshake className="absolute inset-0 m-auto h-2/5 w-2/5 opacity-60" />
                <Zap className="absolute top-1/4 left-1/4 h-10 w-10 text-cyan-300 opacity-70 animate-ping" />
                <Users className="absolute bottom-1/4 right-1/4 h-10 w-10 text-fuchsia-300 opacity-70 animate-ping animation-delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 text-white">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Experience the Future of Managed AI Automation, Tailored to You.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Let us demonstrate how our unique process and powerful platform can address your specific challenges and
            unlock new levels of efficiency and growth.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              asChild
              className="h-14 px-10 text-lg font-semibold bg-white text-purple-700 shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Book a Meeting</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
