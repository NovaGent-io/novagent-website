"use client"
import { motion } from "framer-motion"
import { Target, Brain } from "lucide-react"

const missionContent = {
  title: "Our Mission",
  icon: <Target className="h-10 w-10 md:h-12 md:w-12 text-purple-400" />,
  text: "To empower businesses with sophisticated, fully managed AI agents that drive unprecedented efficiency, growth, and innovation.",
}

const philosophyContent = {
  title: "How We Work Together",
  icon: <Brain className="h-10 w-10 md:h-12 md:w-12 text-cyan-400" />,
  text: "We are a team that values ownership, initiative, and a relentless focus on results. As a lean and growing company, every member has a massive impact and a direct line to shaping the future of our product and our partnerships.",
}

export default function JMMissionEthos() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="jm-ethos" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="p-8 bg-slate-800/70 rounded-xl shadow-2xl border border-slate-700"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              {missionContent.icon}
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 ml-4">{missionContent.title}</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">{missionContent.text}</p>
          </motion.div>

          <motion.div
            className="p-8 bg-slate-800/70 rounded-xl shadow-2xl border border-slate-700"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              {philosophyContent.icon}
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 ml-4">{philosophyContent.title}</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">{philosophyContent.text}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
