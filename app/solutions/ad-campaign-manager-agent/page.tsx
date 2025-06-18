import React from "react"
import type { FunctionComponent } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Target,
  BarChartBig,
  DollarSign,
  Users,
  Settings,
  TrendingUp,
  Filter,
  Layers,
  FileText,
  Eye,
  Sparkles,
  Cpu,
  Briefcase,
  Presentation,
  SearchCheck,
  Palette,
  MessageCircle,
  RefreshCcw,
  ZoomIn,
  ShieldCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Placeholder for a more complex animated background component
const AbstractAdVisualPlaceholder: FunctionComponent<{ className?: string; children?: React.ReactNode }> = ({
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
      <BarChartBig className="absolute -left-16 -top-10 h-72 w-72 text-blue-500/10 opacity-50 animate-pulse" />
      <Target className="absolute -right-14 bottom-1/3 h-64 w-64 text-cyan-500/10 opacity-50 animate-pulse animation-delay-2000" />
      <DollarSign className="absolute left-1/3 top-1/2 h-52 w-52 text-fuchsia-500/5 opacity-30 animate-pulse animation-delay-4000" />
      {children}
    </div>
  )
}

const adPainPoints = [
  {
    icon: <DollarSign className="h-10 w-10 text-rose-500" />,
    text: "Wasting budget on ad platforms with unclear ROI and complex dashboards.",
    bgColor: "bg-rose-500/10",
  },
  {
    icon: <Filter className="h-10 w-10 text-amber-500" />,
    text: "Struggling to keep up with constant platform changes and new ad formats.",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: <Users className="h-10 w-10 text-sky-500" />,
    text: "Difficulty in precisely targeting the right audience segments effectively.",
    bgColor: "bg-sky-500/10",
  },
  {
    icon: <BarChartBig className="h-10 w-10 text-fuchsia-500" />,
    text: "Overwhelmed by data analysis and unsure how to translate insights into action.",
    bgColor: "bg-fuchsia-500/10",
  },
]

const adCoreCapabilities = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "AI-Powered Audience Targeting",
    description:
      "Leverages machine learning to identify and reach high-intent audience segments across platforms like Google, Meta, and LinkedIn.",
    color: "text-cyan-400",
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Automated Bid & Budget Optimization",
    description:
      "Intelligently allocates your budget and adjusts bids in real-time to maximize conversions and ROAS within your target CPA/ROAS goals.",
    color: "text-emerald-400",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Dynamic Creative Optimization (DCO)",
    description:
      "Automatically tests and serves the most effective ad creative variations (images, headlines, copy) to different audience segments.",
    color: "text-fuchsia-400",
  },
  {
    icon: <RefreshCcw className="h-8 w-8" />,
    title: "Cross-Platform Campaign Management",
    description: "Manages and synchronizes your ad campaigns across multiple platforms from a unified perspective.",
    color: "text-blue-400",
  },
  {
    icon: <ZoomIn className="h-8 w-8" />,
    title: "Predictive Performance Analytics",
    description:
      "Utilizes AI to forecast campaign performance, identify growth opportunities, and flag potential issues proactively.",
    color: "text-purple-400",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Automated Reporting & Insights",
    description:
      "Generates comprehensive, easy-to-understand performance reports with actionable insights for continuous improvement.",
    color: "text-sky-400",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Ad Spend Pacing & Anomaly Detection",
    description:
      "Ensures your budget is spent efficiently throughout the campaign duration and alerts to unusual activity.",
    color: "text-amber-400",
  },
]

const adBenefits = [
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Maximize Return on Ad Spend (ROAS)",
    description: "AI-driven optimizations ensure every dollar is spent effectively, significantly boosting your ROAS.",
    stat: "Higher ROAS",
    color: "text-emerald-400",
    bgColor: "bg-emerald-900/30",
  },
  {
    icon: <DollarSign className="h-10 w-10" />,
    title: "Reduce Cost Per Acquisition (CPA)",
    description:
      "Precision targeting and efficient bidding strategies work to lower your average cost to acquire a customer.",
    stat: "Lower CPA",
    color: "text-blue-400",
    bgColor: "bg-blue-900/30",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Increase Qualified Lead Volume",
    description: "Reach more of the right people, leading to a higher volume of quality leads and conversions.",
    stat: "More Leads",
    color: "text-fuchsia-400",
    bgColor: "bg-fuchsia-900/30",
  },
  {
    icon: <Briefcase className="h-10 w-10" />,
    title: "Save Time & Resources",
    description:
      "Automate time-consuming campaign management tasks, freeing up your team to focus on strategy and creative.",
    stat: "Time Saved",
    color: "text-purple-400",
    bgColor: "bg-purple-900/30",
  },
]

const adProcessSteps = [
  {
    icon: <SearchCheck className="h-8 w-8" />,
    title: "Strategy & Setup",
    description: "We define goals, integrate accounts, and configure the AI agent with your campaign parameters.",
    color: "text-cyan-400",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI-Powered Optimization",
    description: "Agent continuously analyzes data, adjusts bids, reallocates budgets, and tests creatives.",
    color: "text-fuchsia-400",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Audience Refinement",
    description: "AI identifies and targets new high-potential audience segments while optimizing existing ones.",
    color: "text-blue-400",
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Expert Oversight & Reporting",
    description: "NovaGent specialists monitor performance, provide insights, and conduct strategy reviews.",
    color: "text-emerald-400",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Continuous Growth",
    description: "Iterative improvements and data-driven decisions lead to sustained campaign growth.",
    color: "text-purple-400",
  },
]

const adNovaGentAdvantage = [
  {
    icon: <Presentation className="h-7 w-7 text-blue-400" />,
    title: "Initial Campaign Audit & Strategic Blueprint",
    description: "Deep dive into your current setup and co-create a data-driven ad strategy.",
  },
  {
    icon: <Settings className="h-7 w-7 text-fuchsia-400" />,
    title: "Custom Agent Configuration & Platform Integration",
    description: "Tailoring the AI to your specific accounts, audiences, and conversion tracking.",
  },
  {
    icon: <Layers className="h-7 w-7 text-purple-400" />,
    title: "Creative Testing & Iteration Framework",
    description: "Assisting in designing and implementing a robust A/B testing plan for creatives and copy.",
  },
  {
    icon: <ZoomIn className="h-7 w-7 text-emerald-400" />,
    title: "Ongoing Performance Analysis & Proactive Adjustments",
    description: "Constant monitoring and fine-tuning by our ad specialists.",
  },
  {
    icon: <MessageCircle className="h-7 w-7 text-cyan-400" />,
    title: "Transparent Reporting & Collaborative Strategy Reviews",
    description: "Regular updates and discussions to ensure alignment and continuous improvement.",
  },
]

export default function AdCampaignManagerAgentPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* 1. Page Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden">
        <AbstractAdVisualPlaceholder />
        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                Supercharge Your Ad Spend:
              </span>
              Intelligent Campaign Management by NovaGent.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl md:text-2xl">
              Our AI Ad Campaign Manager agent autonomously optimizes your bids, budgets, and targeting across platforms
              to maximize ROI, all under the expert guidance of the NovaGent team.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 h-12 px-8 text-base font-medium"
              >
                <Link href="/contact">Get Started Today</Link>
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
              Tired of Wasted Ad Spend and Underperforming Campaigns?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Navigating the complexities of digital advertising can be a major drain on resources and results.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {adPainPoints.map((point, index) => (
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
                Your AI-Powered Co-Pilot for Peak Ad Performance.
              </h2>
              <p className="mt-6 text-lg text-slate-300">
                Our AI Ad Campaign Manager acts as your intelligent co-pilot, analyzing performance data to provide
                clear summaries and alerts. It goes beyond simple monitoring by autonomously A/B testing your ad
                creatives and pausing underperformers to eliminate wasted spend.
              </p>
              <p className="mt-4 text-lg text-cyan-400 font-semibold">
                For maximum impact, the agent operates as an Autonomous Bid & Budget Optimizer, making real-time
                financial decisions—like shifting budgets and adjusting bids—to relentlessly maximize your ROAS. This
                powerful system is fully managed by our experts to ensure your campaigns constantly evolve.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 opacity-20 blur-2xl"></div>
                <BarChartBig className="absolute inset-0 m-auto h-2/5 w-2/5 text-white opacity-50" />
                <Target className="absolute top-1/4 left-1/4 h-16 w-16 text-blue-300 opacity-70 animate-pulse" />
                <Sparkles className="absolute bottom-1/4 right-1/4 h-12 w-12 text-purple-400 opacity-70 animate-pulse animation-delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities Section */}
      <section id="ad-features" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Drive Real Results with AI-Powered Ad Optimization.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Our Ad Campaign Manager agent is equipped with a suite of intelligent features to maximize your
              advertising impact.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
            {adCoreCapabilities.map((capability, index) => (
              <div
                key={capability.title}
                className={cn(
                  "group rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60",
                  `hover:border-${capability.color.split("-")[1]}-500/50 dark:hover:border-${capability.color.split("-")[1]}-400/50`,
                )}
              >
                <div className={`mb-4 flex items-center gap-3 ${capability.color}`}>
                  {capability.icon}
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{capability.title}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{capability.description}</p>
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
              Higher Conversions, Lower CPA, Smarter Ad Spend.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:mt-16 xl:grid-cols-4">
            {adBenefits.map((benefit) => (
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
              Your Journey to Optimized Ad Campaigns.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Discover the streamlined process our AI Ad Campaign Manager follows to deliver superior results.
            </p>
          </div>
          <div className="mt-16">
            <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-5 md:gap-x-6">
              {adProcessSteps.map((step, index) => (
                <div key={step.title} className="relative flex flex-col items-center text-center px-2">
                  {index < adProcessSteps.length - 1 && (
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
              More Than a Tool: Your Dedicated Ad Optimization Partner.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              The NovaGent Ad Campaign Manager Agent is a comprehensive service, blending advanced AI with expert human
              oversight. We provide:
            </p>
          </div>
          <div className="mt-12 lg:mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {adNovaGentAdvantage.slice(0, 3).map((advantage) => (
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
            <div className="flex justify-center mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                {adNovaGentAdvantage.slice(3).map((advantage) => (
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
      <section className="py-16 sm:py-24 bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-700">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Stop Leaving Ad Performance to Chance. Let NovaGent AI Take Control.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Discover how our managed AI Ad Campaign Manager can transform your advertising results and drive sustainable
            growth.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="h-14 px-10 text-lg font-semibold bg-white text-blue-700 shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Book a Demo of the Ad Campaign Manager</Link>
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
