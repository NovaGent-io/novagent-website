"use client"
import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Target, Brain, ShieldCheck, Handshake, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const coreValuesData = [
  {
    icon: <Handshake size={28} className="text-purple-400" />,
    title: "Partnership Obsessed",
    description:
      "We succeed only when our clients succeed. We are deeply invested in building true partnerships founded on trust, collaboration, and a shared commitment to your goals.",
    color: "purple",
  },
  {
    icon: <Target size={28} className="text-cyan-400" />,
    title: "Outcomes, Not Just Output",
    description:
      "Our focus is relentlessly on delivering measurable results and tangible ROI. We build AI solutions that solve real business problems effectively.",
    color: "cyan",
  },
  {
    icon: <Brain size={28} className="text-pink-400" />,
    title: "Pragmatic Innovation",
    description:
      "We embrace cutting-edge AI but apply it practically. We build robust, reliable solutions that are both innovative and grounded in real-world application.",
    color: "pink",
  },
  {
    icon: <ShieldCheck size={28} className="text-emerald-400" />,
    title: "Transparency & Integrity",
    description:
      "We operate with complete openness and the highest ethical standards. From our pricing to our AI's performance, we believe in radical transparency.",
    color: "emerald",
  },
]

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  isExpanded: boolean
  onClick: () => void
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, color, isExpanded, onClick }) => {
  const colorClasses = {
    purple: "border-purple-500/60 hover:border-purple-400 ring-purple-500",
    cyan: "border-cyan-500/60 hover:border-cyan-400 ring-cyan-500",
    pink: "border-pink-500/60 hover:border-pink-400 ring-pink-500",
    emerald: "border-emerald-500/60 hover:border-emerald-400 ring-emerald-500",
  }

  return (
    <motion.div
      layout
      className={cn(
        "bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg cursor-pointer border transition-all duration-300 ease-in-out",
        colorClasses[color as keyof typeof colorClasses],
        isExpanded ? "ring-2 ring-offset-2 ring-offset-slate-900" : "hover:shadow-purple-500/20",
      )}
      onClick={onClick}
      whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div layout="position" className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          {icon}
          <h4 className="text-xl font-semibold text-slate-100 ml-4">{title}</h4>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-6 w-6 text-slate-400" />
        ) : (
          <ChevronDown className="h-6 w-6 text-slate-500" />
        )}
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.p
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "1rem" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-slate-300 text-base leading-relaxed overflow-hidden"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function JMMissionValues() {
  const [expandedValueIndex, setExpandedValueIndex] = useState<number | null>(null)

  const handleValueCardClick = (index: number) => {
    setExpandedValueIndex(expandedValueIndex === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 text-slate-100"
        >
          The Values That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Define Us</span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {coreValuesData.map((value, idx) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              color={value.color}
              isExpanded={expandedValueIndex === idx}
              onClick={() => handleValueCardClick(idx)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
