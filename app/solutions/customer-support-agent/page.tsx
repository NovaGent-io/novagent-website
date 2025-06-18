import React from "react"
import type { FunctionComponent } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  MessageCircle,
  BookOpen,
  Clock,
  Zap,
  ThumbsUp,
  MessageSquareDashed,
  UserIcon as UserVoice,
  FileQuestion,
  Brain,
  Share,
  Ticket,
  DatabaseZap,
  Mail,
  Settings2,
  BarChart,
  PiggyBank,
  UserPlus,
  Lightbulb,
  Eye,
  Wrench,
  Sparkles,
  Cpu,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Re-using or adapting the placeholder from Appointment Setter Agent page
const AbstractSupportVisualPlaceholder: FunctionComponent<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 z-0",
        className,
      )}
    >
      <MessageCircle className="absolute -left-10 -top-16 h-72 w-72 text-cyan-500/10 opacity-50 animate-pulse" />
      <BookOpen className="absolute -right-12 bottom-1/4 h-64 w-64 text-fuchsia-500/10 opacity-50 animate-pulse animation-delay-2000" />
      <ThumbsUp className="absolute left-1/4 top-1/2 h-48 w-48 text-purple-500/5 opacity-30 animate-pulse animation-delay-4000" />
      {children}
    </div>
  )
}

const supportPainPoints = [
  {
    icon: <Clock className="h-10 w-10 text-rose-500" />,
    text: "Customers frustrated by long wait times and inconsistent answers.",
    bgColor: "bg-rose-500/10",
  },
  {
    icon: <MessageSquareDashed className="h-10 w-10 text-amber-500" />,
    text: "Skilled human agents spending too much time on basic, repetitive Tier-1 questions.",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: <UserVoice className="h-10 w-10 text-sky-500" />,
    text: "Struggling to offer consistent, high-quality support 24/7 without ballooning costs.",
    bgColor: "bg-sky-500/10",
  },
  {
    icon: <FileQuestion className="h-10 w-10 text-fuchsia-500" />,
    text: "Missed opportunities to proactively improve your knowledge base from support interactions.",
    bgColor: "bg-fuchsia-500/10",
  },
]

const supportCoreCapabilities = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "24/7 Instant Response",
    description: "Immediate answers to customer inquiries, day or night",
    bullets: ["Zero wait times", "Round-the-clock availability", "Instant query resolution"],
    color: "text-cyan-400",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Knowledge Base Integration",
    description: "Advanced RAG technology leveraging your existing documentation",
    bullets: ["Vector search capabilities", "FAQ integration", "Document intelligence"],
    color: "text-fuchsia-400",
    bgGradient: "from-fuchsia-500/10 to-purple-500/10",
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: "Natural Language Understanding",
    description: "Understands context and conversational nuances",
    bullets: ["Intent recognition", "Context awareness", "Multi-language support"],
    color: "text-blue-400",
    bgGradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    icon: <Share className="h-8 w-8" />,
    title: "Smart Escalation",
    description: "Seamless handoff to human agents with full context",
    bullets: ["Intelligent routing", "Conversation history", "Priority classification"],
    color: "text-purple-400",
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: <Ticket className="h-8 w-8" />,
    title: "Automated Ticket Management",
    description: "Creates and manages support tickets across platforms",
    bullets: ["Auto-categorization", "CRM synchronization", "Status tracking"],
    color: "text-emerald-400",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: "Multi-Channel Support",
    description: "Consistent experience across all communication channels",
    bullets: ["Chat integration", "Email support", "Social media monitoring"],
    color: "text-sky-400",
    bgGradient: "from-sky-500/10 to-cyan-500/10",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Knowledge Base Insights",
    description: "Identifies gaps and improvement opportunities",
    bullets: ["Trend analysis", "Content optimization", "Performance metrics"],
    color: "text-amber-400",
    bgGradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    icon: <Settings2 className="h-8 w-8" />,
    title: "Continuous Learning",
    description: "Self-improving AI that gets smarter over time",
    bullets: ["Feedback integration", "Performance optimization", "Adaptive responses"],
    color: "text-rose-400",
    bgGradient: "from-rose-500/10 to-red-500/10",
  },
]

const supportBenefits = [
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Reduce Tier-1 Ticket Volume",
    description: "Automate up to 70% of common inquiries, significantly freeing up your human agents.",
    stat: "Up to 70%",
    color: "text-emerald-400",
    bgColor: "bg-emerald-900/30",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Improve First Response Time (FRT)",
    description: "Deliver instant answers, cutting FRT from minutes/hours to seconds.",
    stat: "Seconds, not hours",
    color: "text-blue-400",
    bgColor: "bg-blue-900/30",
  },
  {
    icon: <ThumbsUp className="h-10 w-10" />,
    title: "Enhance Customer Satisfaction (CSAT)",
    description:
      "Provide consistent, accurate, and immediate support, leading to demonstrably happier and more loyal customers.",
    stat: "Higher CSAT",
    color: "text-fuchsia-400",
    bgColor: "bg-fuchsia-900/30",
  },
  {
    icon: <PiggyBank className="h-10 w-10" />,
    title: "Optimize Support Costs",
    description:
      "Scale your support operations efficiently and reduce per-interaction costs without compromising quality.",
    stat: "Lower Costs",
    color: "text-amber-400",
    bgColor: "bg-amber-900/30",
  },
  {
    icon: <UserPlus className="h-10 w-10" />,
    title: "Empower Human Agents",
    description:
      "Enable your skilled support professionals to focus on complex, high-value interactions and proactive customer success.",
    stat: "Empowered Teams",
    color: "text-purple-400",
    bgColor: "bg-purple-900/30",
  },
]

const supportProcessSteps = [
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: "Customer Inquiry Received",
    description: "Via chat, email, or other integrated channels.",
    color: "text-cyan-400",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Understands & Accesses Knowledge",
    description: "Agent parses intent, queries integrated knowledge base.",
    color: "text-fuchsia-400",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "AI Responds & Resolves (Tier-1)",
    description: "Agent provides accurate answer or guides user to solution.",
    color: "text-blue-400",
  },
  {
    icon: <Share className="h-8 w-8" />,
    title: "Smart Escalation (If Needed)",
    description: "Unresolved or complex issues seamlessly routed to a human agent with full context.",
    color: "text-purple-400",
  },
  {
    icon: <Settings2 className="h-8 w-8" />,
    title: "Continuous Improvement Cycle",
    description: "Interactions logged, insights generated, knowledge base refined – all managed by NovaGent.",
    color: "text-emerald-400",
  },
]

const supportNovaGentAdvantage = [
  {
    icon: <BookOpen className="h-7 w-7 text-blue-400" />,
    title: "Knowledge Base Ingestion & Optimization",
    description: "We help structure and refine your existing knowledge for optimal AI performance.",
  },
  {
    icon: <Cpu className="h-7 w-7 text-fuchsia-400" />,
    title: "Custom AI Agent Configuration",
    description: "Tailoring the agent's persona, responses, and escalation paths to your brand.",
  },
  {
    icon: <DatabaseZap className="h-7 w-7 text-purple-400" />,
    title: "Seamless Helpdesk/CRM Integration",
    description: "Ensuring smooth data flow with your existing support stack.",
  },
  {
    icon: <Eye className="h-7 w-7 text-emerald-400" />,
    title: "Proactive Performance Monitoring & Tuning",
    description: "Constant oversight to ensure accuracy, efficiency, and CSAT.",
  },
  {
    icon: <Wrench className="h-7 w-7 text-cyan-400" />,
    title: "Regular Insights & Strategy Reviews",
    description: "Collaborative reviews to adapt and enhance your AI support strategy.",
  },
]

export default function CustomerSupportAgentPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* 1. Page Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden">
        <AbstractSupportVisualPlaceholder />
        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-transparent bg-clip-text">
                Elevate Your Customer Experience
              </span>
              with 24/7 AI-Powered Support.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl md:text-2xl">
              Our intelligent AI agent instantly resolves Tier-1 customer inquiries using your knowledge base,
              seamlessly escalates complex issues, and helps slash ticket volume – all while being fully managed by
              NovaGent experts.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 h-12 px-8 text-base font-medium"
              >
                <Link href="/contact">Get Started with AI Support</Link>
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
              Is Your Support Team Drowning in Repetitive Queries?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Common support challenges can hinder growth and frustrate both customers and your team.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {supportPainPoints.map((point, index) => (
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
                Your Always-Available, AI-Powered Support Specialist.
              </h2>
              <p className="mt-6 text-lg text-slate-300">
                Our AI Customer Support Agent provides an intelligent and tireless first line of defense, using your
                unique knowledge base to deliver instant, accurate answers across email and chat. But its real power
                lies in its ability to learn and predict; it analyzes past conversations to automatically improve your
                help docs over time and can even integrate with your product data to proactively flag at-risk customers
                before they have a problem.
              </p>
              <p className="mt-4 text-lg text-cyan-400 font-semibold">
                This transforms your support from a cost center into a proactive retention engine. By handling the high
                volume of inquiries and intelligently escalating only what's necessary, the agent reduces ticket volume,
                helps prevent churn, and frees your expert team to focus on the complex, relationship-building tasks
                that drive loyalty.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-600 via-purple-600 to-blue-500 opacity-20 blur-2xl"></div>
                <BookOpen className="absolute inset-0 m-auto h-2/5 w-2/5 text-white opacity-50" />
                <MessageCircle className="absolute top-1/4 left-1/4 h-16 w-16 text-cyan-300 opacity-70 animate-pulse" />
                <Sparkles className="absolute bottom-1/4 right-1/4 h-12 w-12 text-fuchsia-400 opacity-70 animate-pulse animation-delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities Section */}
      <section id="features-support" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Delivering Exceptional Support Experiences, Intelligently.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Our AI Customer Support Agent is equipped with powerful features to automate and elevate your support.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:mt-16">
            {supportCoreCapabilities.map((capability) => (
              <div
                key={capability.title}
                className={`group relative rounded-2xl bg-gradient-to-br ${capability.bgGradient} border border-slate-200/50 dark:border-slate-700/50 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-purple-500/30 dark:hover:border-purple-400/30 hover:-translate-y-2 flex flex-col h-full`}
              >
                {/* Icon and Title */}
                <div className={`mb-4 flex items-center gap-3 ${capability.color}`}>
                  <div className="flex-shrink-0 p-2 rounded-lg bg-white/80 dark:bg-slate-800/80">{capability.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 leading-tight">
                    {capability.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-grow">{capability.description}</p>

                {/* Modern Bullet Points */}
                <div className="space-y-2">
                  {capability.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${capability.color.replace("text-", "bg-")}`}></div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
              Boost CSAT, Slash Costs, and Empower Your Support Team.
            </h2>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 lg:mt-16">
            {supportBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-sm flex flex-col items-center text-center p-8 rounded-2xl shadow-xl ${benefit.bgColor} border border-transparent hover:border-slate-700 dark:hover:border-slate-600 transition-all duration-300`}
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
              A Seamless & Intelligent Support Journey.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Understand how our AI Customer Support Agent efficiently handles inquiries.
            </p>
          </div>
          <div className="mt-16">
            <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-5 md:gap-x-6">
              {supportProcessSteps.map((step, index) => (
                <div key={step.title} className="relative flex flex-col items-center text-center px-2">
                  {index < supportProcessSteps.length - 1 && (
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
              Expertly Managed AI Support, Continuously Optimized for You.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              NovaGent delivers more than just an AI tool; we provide a complete, evolving customer support solution.
              Our comprehensive service includes:
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 lg:mt-16">
            {supportNovaGentAdvantage.map((advantage) => (
              <div
                key={advantage.title}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-sm flex flex-col items-start gap-4 rounded-xl bg-slate-800/50 p-6 border border-slate-700/60 hover:border-purple-500/50 transition-colors duration-300"
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
      <section className="py-16 sm:py-24 bg-gradient-to-r from-fuchsia-700 via-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready for Smarter, Faster, More Cost-Effective Support?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Reduce agent workload, delight your customers, and scale your support effortlessly with NovaGent.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="h-14 px-10 text-lg font-semibold bg-white text-purple-700 shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Book a Demo of the AI Support Agent</Link>
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
