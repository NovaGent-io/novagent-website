"use client"

import { motion } from "framer-motion"
import { AlertTriangle, ShieldCheck, XCircle, CheckCircle } from "lucide-react"

const HypeCycleSection = () => {
  const pitfalls = {
    icon: AlertTriangle,
    title: "The Common Pitfalls of AI Implementation",
    points: [
      "Fragmented tools & endless integration.",
      "The 'DIY AI' mirage: hidden costs, steep learning curves, security burdens.",
      "Black box technology: lack of transparency, unproven ROI.",
      "Basic bots: limited capabilities, failing at complex, critical tasks.",
    ],
  }

  const advantage = {
    icon: ShieldCheck,
    title: "The NovaGent Advantage: Clarity, Capability, Control",
    points: [
      "Unified Managed Platform: AI agents designed, deployed, and continuously optimized for you.",
      "Expert Human Intelligence: Our AI specialists navigate complexity, ensuring your agents deliver.",
      "Transparent Value & Performance: Crystal-clear dashboards, measurable KPIs, and an unwavering focus on your outcomes.",
      "Sophisticated Core Agent Suite: Powerful, customizable AI solutions tackling your critical challenges.",
    ],
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  const cardVariantsRight = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 0.8,
        delay: 0.2,
      },
    },
  }

  return (
    <section id="next-section" className="py-20 md:py-32 bg-slate-900/70 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100">Tired of the AI Hype Cycle?</h2>
          <p className="mt-4 text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
            Demand Tangible ROI.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-0 items-center max-w-6xl mx-auto">
          {/* Pitfalls Card (Left, slightly behind) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 p-8 bg-slate-800/40 border border-slate-700 rounded-xl shadow-lg lg:mr-[-40px]"
          >
            <div className="flex items-center mb-6">
              <pitfalls.icon className="w-8 h-8 text-amber-500 mr-4 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-gray-300">{pitfalls.title}</h3>
            </div>
            <ul className="space-y-4 text-slate-400">
              {pitfalls.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <XCircle className="w-5 h-5 text-amber-600/70 mr-3 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Advantage Card (Right, overlapping, dominant) */}
          <motion.div
            variants={cardVariantsRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-20 p-8 mt-8 lg:mt-0 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/50 rounded-xl shadow-2xl shadow-purple-500/10"
          >
            <div className="flex items-center mb-6">
              <advantage.icon className="w-8 h-8 text-cyan-400 mr-4 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-gray-100">{advantage.title}</h3>
            </div>
            <ul className="space-y-4 text-slate-200">
              {advantage.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HypeCycleSection
