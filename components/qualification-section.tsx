"use client"

import { motion } from "framer-motion"
import { Workflow, Database, Target, ShieldCheck, type LucideIcon } from "lucide-react"
import type { FC } from "react"

interface Qualification {
  icon: LucideIcon
  title: string
  description: string
}

const qualifications: Qualification[] = [
  {
    icon: Workflow,
    title: "For Deeply Integrated Workflows",
    description:
      "Automate complex processes that span multiple proprietary, legacy, or highly customized internal systems.",
  },
  {
    icon: Database,
    title: "For Unique Data Requirements",
    description:
      "Leverage AI that interacts with your unique, unstructured, or highly specialized data sources to uncover novel insights.",
  },
  {
    icon: Target,
    title: "For Mission-Critical Objectives",
    description:
      "Create a defensible competitive advantage by deploying an AI solution engineered specifically for your core business strategy.",
  },
  {
    icon: ShieldCheck,
    title: "For Advanced Compliance & Security",
    description:
      "Address rigorous industry needs with bespoke security protocols, data residency, and compliance frameworks built into the agent's core.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1], // Custom cubic bezier for smooth acceleration/deceleration
    },
  }),
}

const QualificationCard: FC<{ item: Qualification; index: number }> = ({ item, index }) => {
  const Icon = item.icon
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      className="relative group rounded-2xl p-8 overflow-hidden
                 bg-slate-900/70 backdrop-blur-md border border-slate-800/70
                 transition-all duration-400 ease-in-out
                 hover:border-purple-500/70 hover:shadow-2xl hover:shadow-purple-600/30 hover:-translate-y-2"
    >
      <div className="absolute -top-10 -right-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
        <Icon className="w-32 h-32 text-purple-500" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 mb-8 shadow-lg">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
        <p className="text-slate-400 leading-relaxed text-base">{item.description}</p>
      </div>
    </motion.div>
  )
}

const QualificationSection = () => {
  return (
    <section className="py-28 sm:py-36 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white sm:whitespace-nowrap">
            Is a Custom Agentic System{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Right for You?
            </span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {qualifications.map((item, index) => (
            <QualificationCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default QualificationSection
