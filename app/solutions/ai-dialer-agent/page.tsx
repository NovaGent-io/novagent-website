import React from "react"
import type { FunctionComponent } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  PhoneCall,
  Mic,
  Brain,
  CalendarCheck2,
  Users,
  Clock,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  FileText,
  Settings2,
  BarChartBig,
  MessageSquare,
  Headset,
  Ear,
  GitBranch,
  Sparkles,
  Cpu,
  DatabaseZap,
  Eye,
  ChevronRight,
  PauseCircle,
  UserX,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// Placeholder for a more complex animated background component
const AbstractDialerVisualPlaceholder: FunctionComponent<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-charcoal-blue-900 z-0",
        className,
      )}
    >
      <Mic className="absolute -left-16 -top-10 h-80 w-80 text-cyan-500/5 opacity-50 animate-pulse" />
      <GitBranch className="absolute -right-14 bottom-1/3 h-72 w-72 text-purple-500/5 opacity-50 animate-pulse animation-delay-2000" />
      <CalendarCheck2 className="absolute left-1/3 top-1/2 h-60 w-60 text-fuchsia-500/5 opacity-30 animate-pulse animation-delay-4000" />
      {children}
    </div>
  )
}

const dialerPainPoints = [
  {
    icon: <DollarSign className="h-10 w-10 text-rose-400" />,
    text: "Prohibitive costs and inconsistencies of scaling human call teams for initial outreach.",
    bgColor: "bg-rose-500/10 dark:bg-rose-900/20",
  },
  {
    icon: <PauseCircle className="h-10 w-10 text-amber-400" />,
    text: "Sales reps spending excessive time on repetitive dialing and basic qualification, not strategic selling.",
    bgColor: "bg-amber-500/10 dark:bg-amber-900/20",
  },
  {
    icon: <UserX className="h-10 w-10 text-sky-400" />,
    text: "Text-based outreach misses the immediate impact and qualification depth of a direct voice conversation.",
    bgColor: "bg-sky-500/10 dark:bg-sky-900/20",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-fuchsia-400" />,
    text: "Difficulty ensuring consistent brand messaging and professional objection handling on all initial calls.",
    bgColor: "bg-fuchsia-500/10 dark:bg-fuchsia-900/20",
  },
]

const dialerCoreCapabilities = [
  {
    icon: <Mic className="h-8 w-8" />,
    title: "Live AI-Driven Voice Conversations",
    description: "Engages prospects in real-time, dynamic, and natural-sounding voice conversations.",
    color: "text-cyan-400",
  },
  {
    icon: <Ear className="h-8 w-8" />,
    title: "Advanced NLU for Voice",
    description: "Accurately understands spoken language, nuances, prospect intent, and complex responses.",
    color: "text-fuchsia-400",
  },
  {
    icon: <GitBranch className="h-8 w-8" />,
    title: "Dynamic & Contextual Script Navigation",
    description: "Intelligently navigates conversations using adaptable, pre-approved scripts.",
    color: "text-blue-400",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Customizable Objection Handling",
    description: "Trained to professionally handle common initial objections and steer conversations effectively.",
    color: "text-purple-400",
  },
  {
    icon: <CalendarCheck2 className="h-8 w-8" />,
    title: "Direct Calendar Booking & Confirmation",
    description: "Books qualified appointments directly during live calls, followed by automated confirmations.",
    color: "text-emerald-400",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Automated Call Transcription & Summarization",
    description: "Provides full transcriptions and concise AI-generated summaries for all calls.",
    color: "text-sky-400",
  },
  {
    icon: <BarChartBig className="h-8 w-8" />,
    title: "Sentiment Analysis & Outcome Scoring",
    description: "Analyzes call sentiment and scores outcomes to provide deep insights.",
    color: "text-amber-400",
  },
  {
    icon: <DatabaseZap className="h-8 w-8" />,
    title: "Seamless CRM Integration & Data Logging",
    description: "Logs all call activities, transcriptions, and outcomes directly into your CRM.",
    color: "text-rose-400",
  },
]

const dialerBenefits = [
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Dramatically Scale Prospect Engagement",
    description: "Reach thousands of leads via personalized voice calls at an unprecedented scale.",
    stat: "Massive Scale",
    color: "text-emerald-400",
    bgColor: "bg-emerald-900/30",
  },
  {
    icon: <CalendarCheck2 className="h-10 w-10" />,
    title: "Boost Qualified Meeting Rates",
    description: "Secure more high-quality appointments through live AI qualification and instant booking.",
    stat: "+X% Meetings",
    color: "text-blue-400",
    bgColor: "bg-blue-900/30",
  },
  {
    icon: <DollarSign className="h-10 w-10" />,
    title: "Optimize Cost Per Qualified Meeting",
    description: "Substantially lower cost per connected call and booked meeting for initial outreach.",
    stat: "Lower Costs",
    color: "text-fuchsia-400",
    bgColor: "bg-fuchsia-900/30",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Rapidly Accelerate Qualification Cycles",
    description: "Quickly sift through large lead lists to identify and engage the most promising prospects.",
    stat: "Faster Cycles",
    color: "text-purple-400",
    bgColor: "bg-purple-900/30",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Ensure Consistent & Compliant Messaging",
    description: "Guarantee every initial call adheres to approved brand messaging and regulatory guidelines.",
    stat: "Brand Safe",
    color: "text-amber-400",
    bgColor: "bg-amber-900/30",
  },
]

const dialerProcessSteps = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Strategy & Scripting Workshop",
    description: "Collaborative definition of audience, objectives, dynamic scripts, and compliance.",
    color: "text-cyan-400",
  },
  {
    icon: <Settings2 className="h-8 w-8" />,
    title: "AI Configuration & Voice Design",
    description: "We configure the AI, train on scripts, integrate systems, and design a professional voice persona.",
    color: "text-fuchsia-400",
  },
  {
    icon: <PhoneCall className="h-8 w-8" />,
    title: "Ethical & Compliant Calling",
    description: "Agent initiates calls per agreed rules, engaging leads in live AI conversations.",
    color: "text-blue-400",
  },
  {
    icon: <DatabaseZap className="h-8 w-8" />,
    title: "Real-Time Data Capture & Sync",
    description: "All call data, transcriptions, summaries, and outcomes logged instantly and securely.",
    color: "text-purple-400",
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Continuous Monitoring & Optimization",
    description: "NovaGent actively reviews performance, refines AI, provides reports, and ensures ethical operation.",
    color: "text-emerald-400",
  },
]

const dialerNovaGentAdvantage = [
  {
    icon: <ShieldCheck className="h-7 w-7 text-blue-400" />,
    title: "Ethical Calling Strategy & Compliance",
    description: "Full consultation on TCPA, DNC, and other relevant calling regulations.",
  },
  {
    icon: <Mic className="h-7 w-7 text-fuchsia-400" />,
    title: "Custom AI Voice Persona & Scriptwriting",
    description: "Professional voice design and script refinement for optimal engagement.",
  },
  {
    icon: <Sparkles className="h-7 w-7 text-purple-400" />,
    title: "Thorough Pre-Launch Testing & QA",
    description: "Rigorous calibration and quality assurance protocols before going live.",
  },
  {
    icon: <Cpu className="h-7 w-7 text-emerald-400" />,
    title: "Ongoing Call Quality & AI Performance Tuning",
    description: "Constant monitoring and refinement by AI and human experts.",
  },
  {
    icon: <BarChartBig className="h-7 w-7 text-cyan-400" />,
    title: "Transparent Reporting & Strategic Reviews",
    description: "Regular updates and collaborative sessions to adapt and improve.",
  },
  {
    icon: <Headset className="h-7 w-7 text-sky-400" />,
    title: "Dedicated Expert Oversight",
    description: "Human specialists manage strategy, escalations, and ensure ethical deployment.",
  },
]

const faqItems = [
  {
    question: "How natural and human-like does the AI voice sound?",
    answer:
      "Our AI utilizes state-of-the-art voice synthesis technology, designed to be remarkably natural and conversational. We work with you to select and customize voice personas that align with your brand. While it's AI, the goal is clear, professional, and engaging communication, not deception.",
  },
  {
    question: "What happens if the AI encounters a question or objection it's not trained for?",
    answer:
      "The AI is trained on a comprehensive set of scripts and objection handling pathways developed with you. For truly novel or complex situations outside its training, it's designed to gracefully acknowledge the query and, based on pre-set rules, either attempt to redirect, offer to have a human follow up, or conclude the call professionally. All such instances are logged for review and potential AI retraining by NovaGent experts.",
  },
  {
    question: "How does NovaGent ensure compliance with calling regulations (e.g., TCPA, consent)?",
    answer:
      "Compliance is paramount. We provide consultation on relevant regulations like TCPA and DNC list management. The AI Dialer Agent is configured to adhere strictly to agreed-upon calling hours, frequency caps, and opt-out mechanisms. We work with you to ensure your lead lists and calling strategies align with legal requirements. However, ultimate responsibility for legal compliance of calling lists and campaigns rests with your business.",
  },
  {
    question: "Can the AI make calls to any type of lead list? Are there restrictions?",
    answer:
      "The agent can technically call numbers from provided lists. However, we strongly advise and guide clients on using ethically sourced lists where there's a reasonable expectation of interest or prior interaction to ensure compliance and maintain a positive brand reputation. We typically do not support cold calling to purchased lists with no prior engagement.",
  },
  {
    question: "How is the AI 'trained' or customized for my specific business and scripts?",
    answer:
      "During our collaborative workshop, we define your call objectives, target audience, and key messaging. You provide your existing scripts or we help develop new ones. These scripts, including dynamic pathways and objection handling, are then programmed into the AI. The voice persona is selected and can be fine-tuned. NovaGent experts then rigorously test and refine the AI's performance before launch and continuously thereafter.",
  },
  {
    question: "What kind of accents or languages can the AI handle?",
    answer:
      "Currently, our primary AI voice capabilities are optimized for clear, standard accents in English (e.g., General American, British English). We are continuously expanding our voice options. Please discuss specific accent or language requirements with us, as capabilities may evolve.",
  },
  {
    question: "What reporting and analytics do I get on call performance and outcomes?",
    answer:
      "You receive comprehensive reporting, including number of calls made, connection rates, call durations, sentiment analysis, specific outcomes (e.g., meeting booked, information requested, DNC), transcription access, and summaries. We provide regular insights and hold strategic reviews to discuss performance.",
  },
  {
    question: "How do you ensure the AI represents my brand professionally and ethically?",
    answer:
      "This is a core part of the NovaGent managed service. Through collaborative scripting, voice persona selection, rigorous testing, continuous monitoring by our human experts, and adherence to ethical guidelines, we ensure the AI Dialer Agent represents your brand in a professional, respectful, and compliant manner at all times.",
  },
]

export default function AIDialerAgentPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* 1. Page Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-indigo-950">
        <AbstractDialerVisualPlaceholder />
        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                Engage Leads with Intelligent AI Voice:
              </span>
              The NovaGent AI Dialer Agent.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl md:text-2xl">
              Elevate your outreach beyond text. Our AI Dialer Agent conducts live, natural-sounding voice conversations
              to qualify leads, handle initial objections, and book confirmed appointments directly onto your team's
              calendar – all fully managed with strategic oversight by NovaGent.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 h-12 px-8 text-base font-medium"
              >
                <Link href="/contact">
                  Connect With Us
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
              Is Manual Dialing Holding Your Sales Team Back?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Traditional voice outreach is costly, inconsistent, and struggles to scale effectively.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {dialerPainPoints.map((point, index) => (
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
                Your AI-Powered Calling Team: Smart Conversations, Tangible Results, Ethically Deployed.
              </h2>
              <p className="mt-6 text-lg text-slate-300">
                Far more than a robocaller, our AI Dialer uses advanced conversational AI to handle live calls with
                nuance—navigating conversations, overcoming initial objections, and booking qualified appointments. Each
                interaction is ethically managed by our experts based on a strategy we build with you.
              </p>
              <p className="mt-4 text-lg text-cyan-400 font-semibold">
                Its true power lies in its campaign-level automation. Our agent can be deployed for persistent follow-up
                on unresponsive leads or tasked to work through an entire campaign list autonomously, transforming it
                from a simple dialer into a scalable calling team that delivers results.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-600 via-purple-600 to-blue-500 opacity-10 blur-2xl"></div>
                <Brain className="absolute inset-0 m-auto h-2/5 w-2/5 text-white opacity-40" />
                <Mic className="absolute top-1/4 left-1/4 h-16 w-16 text-cyan-300 opacity-60 animate-pulse" />
                <Sparkles className="absolute bottom-1/4 right-1/4 h-12 w-12 text-fuchsia-400 opacity-60 animate-pulse animation-delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities Section */}
      <section id="dialer-features" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Unlocking the Power of Voice: Features That Drive Real Conversations.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Our AI Dialer Agent is engineered with advanced capabilities for high-impact, intelligent voice
              engagement.
            </p>
          </div>
          <div className="mt-12 lg:mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {dialerCoreCapabilities.slice(0, 6).map((capability) => (
                <div
                  key={capability.title}
                  className="group rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/60 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-purple-500/70 dark:hover:border-purple-400/70 hover:-translate-y-1.5 flex flex-col"
                >
                  <div className={`mb-5 flex items-center gap-3 ${capability.color}`}>
                    {capability.icon}
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{capability.title}</h3>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 flex-grow">
                    <ul className="space-y-2">
                      {capability.description
                        .split(".")
                        .filter((item) => item.trim())
                        .map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-current rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{point.trim()}.</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom row - centered */}
            <div className="mt-8 flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                {dialerCoreCapabilities.slice(6).map((capability) => (
                  <div
                    key={capability.title}
                    className="group rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/60 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-purple-500/70 dark:hover:border-purple-400/70 hover:-translate-y-1.5 flex flex-col"
                  >
                    <div className={`mb-5 flex items-center gap-3 ${capability.color}`}>
                      {capability.icon}
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{capability.title}</h3>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 flex-grow">
                      <ul className="space-y-2">
                        {capability.description
                          .split(".")
                          .filter((item) => item.trim())
                          .map((point, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-block w-1.5 h-1.5 bg-current rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>{point.trim()}.</span>
                            </li>
                          ))}
                      </ul>
                    </div>
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
              More Meaningful Conversations. More Qualified Meetings. Unprecedented Scale.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
            {dialerBenefits.map((benefit) => (
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
              Your Automated Voice Outreach Journey – Strategically Guided by Experts.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Discover our transparent and managed process for deploying your AI Dialer Agent.
            </p>
          </div>
          <div className="mt-16">
            <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-5 md:gap-x-6">
              {dialerProcessSteps.map((step, index) => (
                <div key={step.title} className="relative flex flex-col items-center text-center px-2">
                  {index < dialerProcessSteps.length - 1 && (
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
              Beyond a Dialer: Your Trusted Partner for Ethical & Effective AI Voice Engagement.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              The NovaGent AI Dialer Agent is a powerful, sophisticated solution deployed with utmost responsibility and
              strategic insight. Our comprehensive service includes:
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
            {dialerNovaGentAdvantage.map((advantage) => (
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

      {/* 9. FAQ Section */}
      <section className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Your AI Dialer Agent Questions, Answered.
            </h2>
          </div>
          <div className="mt-12 mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-slate-200 dark:border-slate-700">
                  <AccordionTrigger className="text-left text-lg font-medium text-slate-800 dark:text-slate-100 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-slate-600 dark:text-slate-300 pt-2 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-700">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Give Your Sales & Marketing Outreach a Powerful, Intelligent Voice That Scales.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Discover how NovaGent's AI Dialer Agent can transform your ability to connect with prospects, book more
            meetings, and accelerate your growth, all while maintaining the highest professional standards.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="h-14 px-10 text-lg font-semibold bg-white text-blue-700 shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Book a Demo of the AI Dialer Agent</Link>
            </Button>
            <Button variant="link" size="lg" asChild className="text-base font-medium text-slate-200 hover:text-white">
              <Link href="/solutions/ai-agent-suite">Explore Other AI Agents</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
