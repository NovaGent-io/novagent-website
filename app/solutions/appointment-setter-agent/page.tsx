import React from "react"
import type { FunctionComponent } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ChevronRight,
  Mail,
  MessageSquareText,
  CalendarDays,
  Users,
  Clock,
  TrendingUp,
  UserCheck,
  Briefcase,
  FilterX,
  Sparkles,
  Settings2,
  Bell,
  RefreshCw,
  DatabaseZap,
  Workflow,
  CheckCircle2,
  Star,
  Cpu,
  Share2,
  Lightbulb,
  Eye,
  Wrench,
  Headset,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Placeholder for a more complex animated background component
const AbstractVisualPlaceholder: FunctionComponent<{ className?: string; children?: React.ReactNode }> = ({
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
      {/* Example of static elements to hint at the visual concept */}
      <Cpu className="absolute -left-12 -top-12 h-64 w-64 text-purple-500/10 opacity-50 animate-pulse" />
      <Share2 className="absolute -right-10 bottom-1/4 h-72 w-72 text-cyan-500/10 opacity-50 animate-pulse animation-delay-2000" />
      <CalendarDays className="absolute left-1/3 top-1/2 h-48 w-48 text-blue-500/5 opacity-30 animate-pulse animation-delay-4000" />
      {children}
    </div>
  )
}

const painPoints = [
  {
    icon: <CalendarDays className="h-10 w-10 text-rose-500" />,
    text: "Endless email back-and-forth just to find a mutual time.",
    bgColor: "bg-rose-500/10",
  },
  {
    icon: <Clock className="h-10 w-10 text-amber-500" />,
    text: "Qualified leads cooling off due to slow scheduling follow-up.",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-sky-500" />,
    text: "Valuable team hours consumed by administrative appointment tasks.",
    bgColor: "bg-sky-500/10",
  },
  {
    icon: <FilterX className="h-10 w-10 text-fuchsia-500" />,
    text: "Inconsistent outreach leading to missed opportunities and a leaky sales funnel.",
    bgColor: "bg-fuchsia-500/10",
  },
]

const coreCapabilities = [
  {
    icon: <Mail className="h-7 w-7" />,
    secondaryIcon: <MessageSquareText className="h-7 w-7" />,
    title: "Multi-Channel Outreach",
    description: "Engages prospects professionally via email, SMS, and other direct messaging channels.",
    color: "text-cyan-400",
  },
  {
    icon: <CalendarDays className="h-7 w-7" />,
    secondaryIcon: <Settings2 className="h-6 w-6" />,
    title: "Smart Calendar Negotiation",
    description:
      "Intelligently offers available slots from synced team calendars and understands natural language replies for date/time preferences.",
    color: "text-fuchsia-400",
  },
  {
    icon: <Bell className="h-7 w-7" />,
    secondaryIcon: <CheckCircle2 className="h-6 w-6" />,
    title: "Automated Confirmations & Reminders",
    description:
      "Maximizes attendance by sending timely, professional meeting confirmations and customizable reminders.",
    color: "text-blue-400",
  },
  {
    icon: <RefreshCw className="h-7 w-7" />,
    title: "Intelligent Rescheduling Management",
    description:
      "Handles rescheduling requests smoothly and efficiently, updating all relevant calendars and attendees automatically.",
    color: "text-purple-400",
  },
  {
    icon: <DatabaseZap className="h-7 w-7" />,
    title: "Seamless CRM Integration",
    description:
      "Logs all communications, syncs meeting details, and updates contact records in your existing CRM (e.g., HubSpot, Salesforce).",
    color: "text-emerald-400",
  },
  {
    icon: <Workflow className="h-7 w-7" />,
    secondaryIcon: <Sparkles className="h-6 w-6" />,
    title: "Customizable Engagement Sequences",
    description:
      "Tailor outreach messaging, tone, and follow-up cadence to perfectly match your brand voice and sales strategy.",
    color: "text-rose-400",
  },
]

const benefits = [
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Boost Sales Productivity",
    description:
      "Free up your sales team by an average of 8-10+ hours per rep per week, allowing them to focus on selling and closing.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: <CalendarDays className="h-10 w-10" />,
    title: "Increase Meeting Bookings",
    description:
      "Capture and convert more leads into confirmed appointments with persistent, intelligent, and timely follow-up – 24/7.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <UserCheck className="h-10 w-10" />,
    title: "Minimize No-Shows & Cancellations",
    description:
      "Drastically reduce missed meetings with automated, professional reminders and easy rescheduling options.",
    color: "text-fuchsia-400",
    bgColor: "bg-fuchsia-500/10",
  },
  {
    icon: <Star className="h-10 w-10" />,
    title: "Enhance Prospect Experience",
    description:
      "Deliver a prompt, responsive, and convenient scheduling experience that impresses potential clients from the first touch.",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
]

const processSteps = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Lead Ingested",
    description: "Agent receives lead data from your CRM, web form, or list.",
    color: "text-cyan-400",
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: "Intelligent Outreach",
    description: "Customized multi-channel communication sequence begins.",
    color: "text-fuchsia-400",
  },
  {
    icon: <CalendarDays className="h-8 w-8" />,
    title: "Smart Availability Matching",
    description: "Agent interacts, offers slots, understands preferences, syncs with live team calendars.",
    color: "text-blue-400",
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: "Meeting Confirmed & Synced",
    description: "Appointment auto-booked, invites sent, CRM updated.",
    color: "text-emerald-400",
  },
  {
    icon: <Settings2 className="h-8 w-8" />,
    title: "Fully Managed & Optimized",
    description: "NovaGent ensures ongoing performance, reminders, and handles any exceptions.",
    color: "text-purple-400",
  },
]

const novaGentAdvantage = [
  {
    icon: <Wrench className="h-7 w-7 text-blue-400" />,
    title: "Custom Strategy & Setup",
    description: "Tailored integration and sequence design to fit your unique sales process.",
  },
  {
    icon: <Eye className="h-7 w-7 text-fuchsia-400" />,
    title: "Proactive Performance Monitoring",
    description: "Ensuring optimal operation 24/7 with real-time alerts and adjustments.",
  },
  {
    icon: <Lightbulb className="h-7 w-7 text-purple-400" />,
    title: "Continuous AI Optimization",
    description: "Ongoing prompt engineering and logic refinement for ever-improving results.",
  },
  {
    icon: <Headset className="h-7 w-7 text-emerald-400" />,
    title: "Dedicated Expert Support",
    description: "Human oversight for edge cases, strategy adjustments, and dedicated assistance.",
  },
]

export default function AppointmentSetterAgentPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* 1. Page Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden">
        <AbstractVisualPlaceholder />
        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] leading-tight pb-2">
                Never Miss a Meeting:
              </span>
              Intelligent, Automated Appointment Setting by NovaGent
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl md:text-2xl">
              Our AI-powered agent manages the entire appointment lifecycle for you – from multi-channel initial
              outreach and smart calendar negotiation to confirmations and proactive rescheduling. Free your team to
              focus on what they do best.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 h-12 px-8 text-base font-medium"
              >
                <Link href="/contact">
                  Book a Demo
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base font-medium border-purple-400 text-purple-300 hover:bg-purple-400/20 hover:text-purple-200 transition-colors duration-300"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pain Points Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Stop Drowning in Scheduling Tasks. Start Closing Deals.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Manual appointment setting is a drain on resources and a bottleneck to growth. Does this sound familiar?
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${point.bgColor} dark:bg-slate-800 dark:border dark:border-slate-700`}
              >
                <div className="flex justify-center mb-4">{point.icon}</div>
                <p className="text-center text-slate-700 dark:text-slate-200 font-medium">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Solution Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Meet Your Always-On, Expert AI Appointment Setter.
              </h2>
              <p className="mt-6 text-lg text-slate-300">
                This isn't just another scheduling tool. The NovaGent AI Appointment Setter is an intelligent,
                autonomous agent that manages the entire appointment lifecycle. It learns, adapts, and engages
                professionally across multiple channels to fill your team's calendar with qualified meetings.
              </p>
              <p className="mt-4 text-lg text-fuchsia-400 font-semibold">
                It's more than a bot – it's a sophisticated system, continuously optimized and managed by NovaGent
                experts, ensuring professional and effective engagement with your prospects.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Placeholder for a sleek graphic */}
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-fuchsia-500 opacity-30 blur-2xl"></div>
                <CalendarDays className="absolute inset-0 m-auto h-3/5 w-3/5 text-white opacity-70" />
                <Sparkles className="absolute top-1/4 left-1/4 h-12 w-12 text-cyan-300 animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities Section */}
      <section id="features" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Unlock Your Calendar's Full Potential.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Our AI Appointment Setter is packed with intelligent features designed for efficiency and scale.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
            {coreCapabilities.map((capability) => (
              <div
                key={capability.title}
                className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-500/50 dark:hover:border-purple-400/50 hover:-translate-y-1"
              >
                <div className={`mb-4 flex items-center gap-2 ${capability.color}`}>
                  {capability.icon}
                  {capability.secondaryIcon && capability.secondaryIcon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">{capability.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits Section */}
      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              More Qualified Meetings. Less Manual Work. Measurable Growth.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-16">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`flex flex-col items-center text-center p-8 rounded-2xl shadow-xl ${benefit.bgColor} dark:bg-slate-800/60 border border-transparent hover:border-purple-500/30 transition-all duration-300`}
              >
                <div
                  className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full ${benefit.color} bg-white/10 dark:bg-slate-700/50`}
                >
                  {benefit.icon}
                </div>
                <h3 className={`text-2xl font-semibold mb-3 ${benefit.color}`}>{benefit.title}</h3>
                <p className="text-slate-300 dark:text-slate-200">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How It Works Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Your Automated Scheduling Journey with NovaGent.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              See how our AI Appointment Setter seamlessly manages the process from lead to confirmed meeting.
            </p>
          </div>
          <div className="mt-16">
            <div className="relative grid grid-cols-1 gap-y-10 md:grid-cols-5 md:gap-x-8">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative flex flex-col items-center text-center">
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 -translate-y-1/2">
                      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1">
                        <path
                          d="M0,0.5 L100,0.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          className="text-slate-300 dark:text-slate-700"
                        />
                      </svg>
                    </div>
                  )}
                  {index > 0 && (
                    <div className="md:hidden absolute bottom-full left-1/2 w-0.5 h-10 -translate-x-1/2">
                      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1 100">
                        <path
                          d="M0.5,0 L0.5,100"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          className="text-slate-300 dark:text-slate-700"
                        />
                      </svg>
                    </div>
                  )}
                  <div
                    className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 ${step.color.replace("text-", "border-")} bg-white dark:bg-slate-800 shadow-md`}
                  >
                    {React.cloneElement(step.icon, { className: `h-8 w-8 ${step.color}` })}
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
              Your Expert Partner in Automated Appointment Setting.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              With the NovaGent Appointment Setter Agent, you receive more than just software; you get a dedicated
              solution, expertly managed by our team. This includes:
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16">
            {novaGentAdvantage.map((advantage) => (
              <div
                key={advantage.title}
                className="flex items-start gap-4 rounded-lg bg-slate-800/50 p-6 border border-slate-700/50"
              >
                <div className="flex-shrink-0 mt-1">{advantage.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{advantage.title}</h3>
                  <p className="text-slate-400">{advantage.description}</p>
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
            Automate Your Appointment Setting. Amplify Your Results.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Let NovaGent transform your scheduling from a time-consuming chore into a powerful growth engine.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="h-14 px-10 text-lg font-semibold bg-white text-purple-700 shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Book a Demo of the AI Appointment Setter</Link>
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
