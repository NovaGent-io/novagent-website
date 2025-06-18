"use client"

import { Button } from "@/components/ui/button"
import {
  Puzzle,
  TrendingUp,
  UserCogIcon as UsersCog,
  MessagesSquare,
  ClipboardList,
  FileText,
  BrainCircuit,
  PlugZap,
  DatabaseZap,
  Settings2,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background"
import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

// Helper for animations
const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

// For dynamic headline
const dynamicWords = ["Transparent Value", "Proven ROI", "Custom Solutions", "Strategic Partnerships"]

export default function PricingPage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length)
    }, 3000) // Change word every 3 seconds
    return () => clearInterval(intervalId)
  }, [])

  const philosophyPoints = [
    {
      icon: <Puzzle className="h-12 w-12 mb-6 text-cyan-400" />,
      title: "Complexity & Customization",
      intro: "NovaGent's AI solutions are not off-the-shelf products. They are:",
      points: [
        "Sophisticated, tailored systems addressing specific challenges.",
        "Integrated deeply to align with your unique operational goals.",
        "Valued based on significant, unique benefits, not a generic list.",
      ],
      color: "cyan",
    },
    {
      icon: <TrendingUp className="h-12 w-12 mb-6 text-purple-400" />,
      title: "Focus on ROI",
      intro: "Our primary objective is delivering substantial Return on Investment through:",
      points: [
        "Massively increased operational efficiency.",
        "Accelerated revenue growth and market penetration.",
        "Significant, measurable cost savings.",
        "Engagements where value received far surpasses investment.",
      ],
      color: "purple",
    },
    {
      icon: <UsersCog className="h-12 w-12 mb-6 text-fuchsia-400" />,
      title: "The 'Fully Managed' Difference",
      intro: "Your investment includes more than just AI; it's a partnership encompassing:",
      points: [
        "Dedicated expert team for design and deployment.",
        "Continuous monitoring and proactive optimization.",
        "Ensuring peak performance and evolution with your business.",
      ],
      color: "fuchsia",
    },
  ]

  const processSteps = [
    {
      step: 1,
      icon: <MessagesSquare className="h-10 w-10 text-cyan-300" />,
      title: "Complimentary Discovery Call",
      description:
        "We begin with a no-obligation consultation to deeply understand your specific business challenges, strategic objectives, existing workflows, and vision for AI automation.",
      color: "cyan",
    },
    {
      step: 2,
      icon: <ClipboardList className="h-10 w-10 text-purple-300" />,
      title: "Tailored Needs Assessment & Solution Design",
      description:
        "Based on our discovery, our experts will analyze your requirements and design the optimal AI agent solution – whether it's configuring one or more of our Core Agents, or scoping a fully Custom AI Agentic System specifically for you.",
      color: "purple",
    },
    {
      step: 3,
      icon: <FileText className="h-10 w-10 text-fuchsia-300" />,
      title: "Transparent Proposal & Value Breakdown",
      description:
        "You'll receive a comprehensive proposal detailing the recommended AI solution, the full scope of our 'fully managed' service, key performance indicators, and a clear, value-based investment structure designed for significant ROI.",
      color: "fuchsia",
    },
  ]

  const investmentFactors = [
    {
      icon: <BrainCircuit className="h-10 w-10" />,
      title: "Agent Complexity & Number",
      description:
        "The sophistication and quantity of the Core AI Agent(s) deployed, or the intricacy of a Custom AI Agentic System.",
      color: "text-cyan-400",
      borderColor: "hover:border-cyan-500/50",
    },
    {
      icon: <PlugZap className="h-10 w-10" />,
      title: "Integration Depth",
      description:
        "The level of seamless integration required with your existing technology stack (CRMs, ad platforms, support desks, APIs, etc.).",
      color: "text-purple-400",
      borderColor: "hover:border-purple-500/50",
    },
    {
      icon: <DatabaseZap className="h-10 w-10" />,
      title: "Data & Event Volume",
      description:
        "The anticipated volume of data processing, events, or transactions your AI agents will handle to achieve your objectives.",
      color: "text-fuchsia-400",
      borderColor: "hover:border-fuchsia-500/50",
    },
    {
      icon: <Settings2 className="h-10 w-10" />,
      title: "Scope of Customization & Managed Services",
      description:
        "The extent of tailoring needed for Core Agents, and the breadth of ongoing 'fully managed' services, including monitoring, optimization, and expert support.",
      color: "text-indigo-400",
      borderColor: "hover:border-indigo-500/50",
    },
  ]

  const headlineText = "NovaGent: "

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  }

  const descriptionParagraphAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5, // Delay after headline
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen">
      {/* Hero Section (Redesigned Text Presentation) */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-fuchsia-900 overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05 }}
          >
            {headlineText.split(" ").map((word, index) => (
              <motion.span key={index} variants={wordAnimation} custom={index} className="inline-block mr-2 md:mr-3">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 hover:brightness-125 transition-all duration-200"
                    whileHover={{ y: -3, scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
                    style={{ cursor: "default" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400"
              >
                {dynamicWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 relative"
            variants={descriptionParagraphAnimation}
            initial="hidden"
            animate="visible"
          >
            <Sparkles className="absolute -top-2 -left-6 h-6 w-6 text-purple-400 opacity-70 animate-pulse" />
            At NovaGent, we create powerful, fully managed AI agent solutions designed to deliver exceptional ROI.
            Discover our collaborative approach to crafting an engagement and investment plan perfectly aligned with
            your unique business needs and objectives.
            <Sparkles className="absolute -bottom-2 -right-6 h-6 w-6 text-cyan-400 opacity-70 animate-pulse delay-500" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }} // Delay after description
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-purple-500/50 group"
              >
                Schedule a Consultation
                <Sparkles className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInAnimation}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            Pricing That Reflects the True Value We Deliver
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                className="group bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-2"
                custom={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.2, duration: 0.5 },
                  }),
                }}
              >
                <div className="flex justify-center mb-6">
                  {React.cloneElement(point.icon, {
                    className: `${point.icon.props.className} transition-transform duration-300 group-hover:scale-110`,
                  })}
                </div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">{point.title}</h3>
                <p className="text-gray-400 text-sm italic mb-4">{point.intro}</p>
                <ul className="space-y-2 text-left">
                  {point.points.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start text-gray-400 text-sm">
                      <svg
                        className={`flex-shrink-0 h-4 w-4 mr-2 mt-1 text-${point.color}-400`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Path to a Custom AI Solution & Investment Section */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInAnimation}
            className="text-3xl md:text-4xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500"
          >
            A Collaborative Journey to Your Optimal AI Strategy
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start mb-12 last:mb-0"
                custom={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  initial: { opacity: 0, x: -50 },
                  animate: (i) => ({
                    opacity: 1,
                    x: 0,
                    transition: { delay: i * 0.3, duration: 0.6 },
                  }),
                }}
              >
                <div className="flex flex-col items-center mr-6 md:mr-8">
                  <div
                    className={`flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-${step.color}-600 to-${step.color}-800 text-white shadow-lg mb-2 ring-4 ring-${step.color}-500/30`}
                  >
                    {step.icon}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div
                      className={`w-1 h-24 md:h-32 bg-gradient-to-b from-${step.color}-700 via-slate-700 to-slate-800`}
                    ></div>
                  )}
                </div>
                <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg flex-1 hover:border-slate-600 transition-colors">
                  <h3 className={`text-xl font-semibold mb-2 text-${step.color}-400`}>
                    Step {step.step}: {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Your NovaGent Investment Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInAnimation}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500"
          >
            What Shapes Your Custom NovaGent Solution & Pricing?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {investmentFactors.map((factor, index) => (
              <motion.div
                key={index}
                className={`group relative p-8 bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${factor.borderColor} hover:shadow-xl`}
                custom={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  initial: { opacity: 0, scale: 0.9 },
                  animate: (i) => ({
                    opacity: 1,
                    scale: 1,
                    transition: { delay: i * 0.2, duration: 0.5 },
                  }),
                }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`mr-4 p-3 rounded-lg bg-slate-700/50 group-hover:bg-${factor.color.split("-")[1]}-500/20 transition-colors duration-300`}
                  >
                    {React.cloneElement(factor.icon, {
                      className: `${factor.icon.props.className} ${factor.color} transition-colors duration-300 group-hover:text-${factor.color.split("-")[1]}-300`,
                    })}
                  </div>
                  <h3
                    className={`text-xl font-semibold ${factor.color} group-hover:text-${factor.color.split("-")[1]}-300 transition-colors duration-300`}
                  >
                    {factor.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{factor.description}</p>
                <div
                  className={`absolute -bottom-4 -right-4 h-20 w-20 ${factor.color.replace("text-", "bg-")}/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 opacity-50 group-hover:opacity-70`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Than a Service Section */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            {...fadeInAnimation}
            className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400"
          >
            Partner with NovaGent: A Strategic Investment in Your Future Growth & Efficiency
          </motion.h2>
          <motion.p
            {...fadeInAnimation}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We view our engagements as true partnerships. NovaGent is committed to delivering AI solutions that are not
            just operational, but transformational – providing measurable returns and evolving with your business to
            ensure sustained success and a distinct competitive advantage.
          </motion.p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-950 to-fuchsia-950">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 {...fadeInAnimation} className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
            Ready to Explore a Tailored AI Strategy & Investment for Your Business?
          </motion.h2>
          <motion.p
            {...fadeInAnimation}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Schedule your complimentary, no-obligation discovery call with our AI solution experts today. We'll discuss
            your unique needs and outline how NovaGent can deliver a powerful, managed AI solution with a clear path to
            significant ROI.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-500 hover:from-fuchsia-600 hover:via-purple-700 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 text-lg focus:ring-4 focus:ring-purple-500/60"
              >
                Book Your Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
