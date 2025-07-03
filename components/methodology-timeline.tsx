"use client"

import { motion } from "framer-motion"
import { Search, DraftingCompass, Code, TestTube2, UserCheck, type LucideIcon } from "lucide-react"
import type { FC } from "react"

interface TimelineStep {
  icon: LucideIcon
  title: string
  description: string
}

const steps: TimelineStep[] = [
  {
    icon: Search,
    title: "Discovery & Strategic Alignment",
    description:
      "We begin with intensive workshops with your stakeholders to define success criteria, map processes, and establish clear ROI targets.",
  },
  {
    icon: DraftingCompass,
    title: "Bespoke Architectural Design",
    description:
      "Our Solutions Architects design a custom agent blueprint, detailing the data flows, integrations, AI models, and security architecture required.",
  },
  {
    icon: Code,
    title: "Agile Development & Prototyping",
    description:
      "We build your custom agent in iterative sprints, providing regular demos and feedback sessions to ensure perfect alignment with your needs.",
  },
  {
    icon: TestTube2,
    title: "Rigorous Testing & Secure Deployment",
    description:
      "Your agent undergoes comprehensive testing in a sandboxed environment before being securely deployed into your production workflow.",
  },
  {
    icon: UserCheck,
    title: "Dedicated 'White-Glove' Management",
    description:
      "Post-deployment, your agent is proactively monitored, managed, and optimized by your Solutions Architect to ensure peak performance.",
  },
]

const TimelineItem: FC<{ item: TimelineStep; index: number }> = ({ item, index }) => {
  const Icon = item.icon
  const isOdd = index % 2 !== 0

  const itemVariants = {
    hidden: { opacity: 0, x: isOdd ? 60 : -60, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  }

  const iconContainerClass = isOdd ? "md:left-[calc(50%+2.5rem)]" : "md:right-[calc(50%+2.5rem)]"
  const contentAlignmentClass = isOdd
    ? "md:ml-[calc(50%+6rem)] text-left"
    : "md:mr-[calc(50%+6rem)] text-left md:text-right"

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="relative py-6 md:py-0"
    >
      {/* Desktop Icon & Connecting Line */}
      <div className={`absolute top-1/2 -translate-y-1/2 hidden md:flex items-center ${iconContainerClass}`}>
        <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-slate-800/70 border-2 border-purple-500/50 shadow-xl shadow-purple-500/20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <Icon className="h-8 w-8 text-white relative z-10" />
        </div>
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden flex items-center mb-4">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 mr-5 shadow-md">
          <Icon className="h-7 w-7 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className={`md:w-[calc(50%-6rem)] ${contentAlignmentClass} pl-20 md:pl-0`}>
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/60 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

const MethodologyTimeline = () => {
  return (
    <section className="py-28 sm:py-36 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            A Partnership in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Innovation
            </span>
            : From Concept to Deployment
          </h2>
        </motion.div>
        <div className="relative">
          {/* Central Line for Desktop */}
          <motion.div
            className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-600/50 via-blue-500/50 to-cyan-500/50 rounded-full hidden md:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: steps.length * 0.4, ease: "linear" }}
          ></motion.div>
          {/* Line for Mobile */}
          <motion.div
            className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-purple-600/50 via-blue-500/50 to-cyan-500/50 rounded-full md:hidden"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: steps.length * 0.4, ease: "linear" }}
          ></motion.div>
          <div className="space-y-12 md:space-y-0">
            {" "}
            {/* Adjusted spacing for desktop items to connect to line */}
            {steps.map((step, index) => (
              <TimelineItem key={step.title} item={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MethodologyTimeline
