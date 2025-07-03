"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import AdvancedSuiteHeroBackground from "@/components/advanced-suite-hero-background"
import FloatingAgentCards from "@/components/floating-agent-cards"
import AnimatedHeroText from "@/components/animated-hero-text"
import {
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  Target,
  PhoneCall,
  MessageSquare,
  Search,
  BarChart2,
  Share2,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Settings,
  type LucideIcon,
  Sparkles,
  CheckCircle2,
  Layers,
} from "lucide-react"

interface AgentCardProps {
  name: string
  icon: React.ReactElement<LucideIcon>
  tagline: string
  href: string
  isCustom?: boolean // Flag for the custom solutions card
}

const coreAgents: AgentCardProps[] = [
  {
    name: "Lead Generation Agent",
    icon: <Target className="h-8 w-8 text-blue-500" />,
    tagline:
      "Automatically finds, verifies, and engages high-intent prospects, piping hot leads directly into your CRM.",
    href: "/solutions/lead-generation-agent",
  },
  {
    name: "Appointment Setter Agent",
    icon: <Users className="h-8 w-8 text-fuchsia-500" />,
    tagline:
      "Manages multi-channel outreach (email/SMS/DM) to negotiate calendar slots and book confirmed meetings for your team.",
    href: "/solutions/appointment-setter-agent",
  },
  {
    name: "AI Dialer Agent",
    icon: <PhoneCall className="h-8 w-8 text-sky-500" />,
    tagline:
      "Engages leads with live AI-driven voice calls to pitch, handle basic objections, and book meetings instantly.",
    href: "/solutions/ai-dialer-agent",
  },
  {
    name: "Customer Support Agent",
    icon: <MessageSquare className="h-8 w-8 text-emerald-500" />,
    tagline:
      "Resolves Tier-1 inquiries via chat/email using your knowledge base, escalating complex issues efficiently.",
    href: "/solutions/customer-support-agent",
  },
  {
    name: "SEO + Reputation Agent",
    icon: <Search className="h-8 w-8 text-amber-500" />,
    tagline:
      "Boosts your online presence with AI-driven technical audits, content generation, and proactive review management.",
    href: "/solutions/seo-reputation-agent",
  },
  {
    name: "Ad Campaign Manager Agent",
    icon: <BarChart2 className="h-8 w-8 text-rose-500" />,
    tagline:
      "Optimizes ad spend and maximizes ROAS with data-driven A/B testing, bid adjustments, and dynamic retargeting.",
    href: "/solutions/ad-campaign-manager-agent",
  },
  {
    name: "Social Media Manager Agent",
    icon: <Share2 className="h-8 w-8 text-indigo-500" />,
    tagline:
      "Creates engaging, platform-specific content from your content engine, schedules posts, and monitors social sentiment to elevate your brand.",
    href: "/solutions/social-media-manager-agent",
  },
  {
    // New Custom Solutions Card
    name: "Need a Custom Solution?",
    icon: <Layers className="h-8 w-8 text-pink-500 dark:text-pink-400" />,
    tagline:
      "For unique challenges that go beyond our Core Agents, we partner with you to architect a bespoke agentic system tailored to your specific needs.",
    href: "/contact",
    isCustom: true,
  },
]

const suiteBenefits = [
  {
    icon: <Cpu className="h-7 w-7 text-fuchsia-500" />,
    text: "Comprehensive Solutions: Target key challenges across sales, marketing, and operations.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-blue-500" />,
    text: "Expertly Managed: We handle the complexity so you get the results.",
  },
  {
    icon: <Settings className="h-7 w-7 text-purple-500" />,
    text: "Continuously Optimized: Your agents evolve and improve over time.",
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-emerald-500" />,
    text: "Scalable & Integrated: Solutions that grow with your business and fit your existing workflows.",
  },
]

const featureCards = [
  {
    title: "Integrated Solutions",
    icon: <Zap className="h-8 w-8 text-white" />,
    gradient: "from-cyan-400 to-cyan-600",
    hoverColor: "text-cyan-600 dark:text-cyan-400",
    shadowColor: "shadow-cyan-500/10 dark:shadow-cyan-400/20",
    borderGradient: "from-cyan-500/20",
    points: [
      "Seamless integration with your existing tools",
      "End-to-end workflow automation",
      "Cross-platform data synchronization",
      "Custom API connections",
    ],
  },
  {
    title: "Expert Management",
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    gradient: "from-fuchsia-400 to-fuchsia-600",
    hoverColor: "text-fuchsia-600 dark:text-fuchsia-400",
    shadowColor: "shadow-fuchsia-500/10 dark:shadow-fuchsia-400/20",
    borderGradient: "from-fuchsia-500/20",
    points: [
      "Dedicated AI specialists oversee your agents",
      "Continuous monitoring and optimization",
      "Regular performance reviews and updates",
      "Human oversight for quality assurance",
    ],
  },
  {
    title: "Driving Outcomes",
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    gradient: "from-purple-400 to-purple-600",
    hoverColor: "text-purple-600 dark:text-purple-400",
    shadowColor: "shadow-purple-500/10 dark:shadow-purple-400/20",
    borderGradient: "from-purple-500/20",
    points: [
      "Measurable ROI and business impact",
      "Increased efficiency and productivity",
      "Enhanced customer satisfaction metrics",
      "Data-driven performance reporting",
    ],
  },
]

export default function AIAgentSuitePage() {
  const router = useRouter()

  const handleAgentNavigation = (href: string) => {
    window.location.href = href
  }

  return (
    <div className="flex flex-col">
      {/* 1. Enhanced Hero Section */}
      <section className="relative flex min-h-screen items-center justify-start overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <AdvancedSuiteHeroBackground />
        <div className="hidden md:block">
          <FloatingAgentCards />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-purple-900/30 z-5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-5" />
        <div className="container relative z-20 mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <AnimatedHeroText />
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* 2. 'The Power of a Managed AI Suite' Section */}
      <section className="bg-gradient-to-b from-white to-slate-50/50 py-16 dark:from-slate-950 dark:to-slate-900/50 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              More Than Automation: A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Cohesive AI Workforce
              </span>
              ,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500">
                Expertly Managed
              </span>
              .
            </h2>
            <p className="mt-6 text-lg lg:text-xl bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 dark:from-slate-300 dark:via-slate-200 dark:to-slate-300 text-transparent bg-clip-text font-medium">
              Discover how our integrated approach transforms your business operations through intelligent automation.
            </p>
            <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent rounded-full"></div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-3 lg:gap-12">
            {featureCards.map((card) => (
              <div key={card.title} className="group relative">
                <div className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/50 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 dark:bg-slate-800/70 dark:border-slate-700/50 h-full flex flex-col">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.borderGradient} via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  ></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div
                      className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${card.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110`}
                    >
                      {card.icon}
                    </div>
                    <h3
                      className={`text-xl font-semibold text-slate-900 dark:text-white mb-4 transition-colors duration-300 group-hover:${card.hoverColor}`}
                    >
                      {card.title}
                    </h3>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-300 flex-grow">
                      {card.points.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2
                            className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${card.hoverColor.split(" ")[0]}`}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 text-sm font-medium text-slate-700 dark:from-blue-950/50 dark:to-purple-950/50 dark:text-slate-300">
              <Sparkles className="h-4 w-4 text-purple-500" />
              Powered by cutting-edge AI technology
            </div>
          </div>
        </div>
      </section>

      {/* 3. 'Discover Our Core Agent Solutions' Section */}
      <section id="core-agents-section" className="py-12 sm:py-16 dark:bg-slate-950 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">
              Our Suite of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500">
                Core Agents
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Find your dedicated AI specialist below, each designed to integrate seamlessly and deliver results.
            </p>
          </div>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-x-6 sm:gap-y-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:gap-x-8">
            {coreAgents.slice(0, 6).map((agent) => (
              <Card
                key={agent.name}
                className={`flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 dark:bg-slate-900 
        ${
          agent.isCustom
            ? "border-pink-500/60 dark:border-pink-400/60 ring-1 ring-pink-500/50 dark:ring-pink-400/50"
            : "border-slate-200 dark:border-slate-800"
        }`}
              >
                <CardHeader className="items-center p-6">
                  <div
                    className={`mb-3 inline-block rounded-lg p-3 ${
                      agent.isCustom ? "bg-pink-100 dark:bg-pink-500/10" : "bg-slate-100 dark:bg-slate-800"
                    }`}
                  >
                    {agent.icon}
                  </div>
                  <CardTitle
                    className={`text-center text-xl font-semibold ${
                      agent.isCustom ? "text-pink-600 dark:text-pink-400" : "text-slate-800 dark:text-slate-100"
                    }`}
                  >
                    {agent.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow px-6 pb-6">
                  <p className="text-center text-sm text-slate-600 dark:text-slate-300">{agent.tagline}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  {agent.isCustom ? (
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-fuchsia-500 text-white shadow-md hover:shadow-lg hover:from-pink-600 hover:via-purple-700 hover:to-fuchsia-600 transition-all"
                    >
                      <Link href={agent.href}>
                        Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full border-purple-500 text-purple-600 hover:bg-purple-50 hover:text-purple-700 dark:border-purple-400 dark:text-purple-300 dark:hover:bg-purple-400/20 dark:hover:text-purple-200"
                      onClick={() => handleAgentNavigation(agent.href)}
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}

            {/* Special centered container for the last 2 cards */}
            <div className="col-span-full flex flex-col sm:flex-row justify-center gap-4 sm:gap-x-6 lg:col-span-3">
              {coreAgents.slice(6).map((agent) => (
                <Card
                  key={agent.name}
                  className={`flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 dark:bg-slate-900 w-full max-w-sm sm:max-w-md
          ${
            agent.isCustom
              ? "border-pink-500/60 dark:border-pink-400/60 ring-1 ring-pink-500/50 dark:ring-pink-400/50"
              : "border-slate-200 dark:border-slate-800"
          }`}
                >
                  <CardHeader className="items-center p-6">
                    <div
                      className={`mb-3 inline-block rounded-lg p-3 ${
                        agent.isCustom ? "bg-pink-100 dark:bg-pink-500/10" : "bg-slate-100 dark:bg-slate-800"
                      }`}
                    >
                      {agent.icon}
                    </div>
                    <CardTitle
                      className={`text-center text-xl font-semibold ${
                        agent.isCustom ? "text-pink-600 dark:text-pink-400" : "text-slate-800 dark:text-slate-100"
                      }`}
                    >
                      {agent.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow px-6 pb-6">
                    <p className="text-center text-sm text-slate-600 dark:text-slate-300">{agent.tagline}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    {agent.isCustom ? (
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-fuchsia-500 text-white shadow-md hover:shadow-lg hover:from-pink-600 hover:via-purple-700 hover:to-fuchsia-600 transition-all"
                      >
                        <Link href={agent.href}>
                          Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full border-purple-500 text-purple-600 hover:bg-purple-50 hover:text-purple-700 dark:border-purple-400 dark:text-purple-300 dark:hover:bg-purple-400/20 dark:hover:text-purple-200"
                        onClick={() => handleAgentNavigation(agent.href)}
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 'Why Choose the NovaGent Suite?' Section */}
      <section className="bg-slate-100 py-16 dark:bg-slate-900/70 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Key Benefits of Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600">
                Managed AI Suite
              </span>
            </h2>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:mt-16 lg:max-w-none lg:grid-cols-4">
            {suiteBenefits.map((benefit) => (
              <div key={benefit.text} className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-full bg-white p-2 shadow-md dark:bg-slate-800">
                  {benefit.icon}
                </div>
                <p className="text-md text-slate-700 dark:text-slate-200">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 py-16 text-white sm:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Deploy Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500">
              AI Workforce
            </span>
            ?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Our team is ready to help you identify the right Core Agents to meet your specific business goals. Schedule
            a free consultation to discuss your needs and get a personalized recommendation.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              asChild
              className="h-12 bg-white px-8 text-base font-semibold text-purple-700 shadow-lg hover:bg-slate-100"
            >
              <Link href="/contact">Schedule Your Suite Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
