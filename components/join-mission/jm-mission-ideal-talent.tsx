"use client"
import { Zap, Users, BrainCog, TrendingUp, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

import { motion } from "framer-motion"

interface CandidateTrait {
  icon: LucideIcon
  title: string
  text: string
  color: string
}

const traits: CandidateTrait[] = [
  {
    icon: Zap,
    title: "AI Enthusiasts",
    text: "Passionate about AI and its potential to transform industries.",
    color: "pink",
  },
  {
    icon: Users,
    title: "Business Acumen",
    text: "Experienced business leaders and sales professionals who understand customer challenges.",
    color: "purple",
  },
  {
    icon: BrainCog,
    title: "Engineering Excellence",
    text: "Brilliant AI engineers and developers who love building robust, scalable systems.",
    color: "cyan",
  },
  {
    icon: TrendingUp,
    title: "Client Champions",
    text: "Strategic thinkers who are obsessed with client success and delivering ROI.",
    color: "emerald",
  },
]

export default function JMMissionIdealTalent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 120 } },
  }

  const iconColorClasses = {
    pink: "text-pink-400",
    purple: "text-purple-400",
    cyan: "text-cyan-400",
    emerald: "text-emerald-400",
  }

  const borderColorClasses = {
    pink: "border-pink-500/30 hover:border-pink-500",
    purple: "border-purple-500/30 hover:border-purple-500",
    cyan: "border-cyan-500/30 hover:border-cyan-500",
    emerald: "border-emerald-500/30 hover:border-emerald-500",
  }

  return (
    <section className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 text-slate-100"
        >
          Are You a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Fit for Our Mission?
          </span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {traits.map((trait) => (
            <motion.div
              key={trait.title}
              className={cn(
                "flex flex-col items-center text-center p-6 md:p-8 bg-slate-800/60 rounded-2xl shadow-xl border transition-all duration-300",
                borderColorClasses[trait.color as keyof typeof borderColorClasses],
              )}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            >
              <trait.icon
                className={cn(
                  "h-12 w-12 md:h-14 md:w-14 mb-6",
                  iconColorClasses[trait.color as keyof typeof iconColorClasses],
                )}
              />
              <h3 className="text-xl md:text-2xl font-semibold text-slate-100 mb-3">{trait.title}</h3>
              <p className="text-slate-300 text-base leading-relaxed">{trait.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
