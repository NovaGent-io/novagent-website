"use client"

import { motion } from "framer-motion"
import { AlertTriangle, ShieldCheck, Zap, CheckCircle } from "lucide-react"

const ContrastPanelsSection = () => {
  const problems = [
    {
      title: "Fragmented Tools",
      description: "Endless integration challenges and disconnected systems.",
      icon: Zap,
    },
    {
      title: "The 'DIY AI' Mirage",
      description: "Hidden costs, steep learning curves, and security burdens.",
      icon: Zap,
    },
    {
      title: "Black Box Technology",
      description: "Lack of transparency and unproven ROI.",
      icon: Zap,
    },
    {
      title: "Basic Bots",
      description: "Limited capabilities, failing at complex, critical tasks.",
      icon: Zap,
    },
  ]

  const solutions = [
    {
      title: "Unified Managed Platform",
      description: "AI agents designed, deployed, and continuously optimized for you.",
      icon: CheckCircle,
    },
    {
      title: "Expert Human Intelligence",
      description: "Our AI specialists navigate complexity, ensuring your agents deliver.",
      icon: CheckCircle,
    },
    {
      title: "Transparent Value & Performance",
      description: "Crystal-clear dashboards, measurable KPIs, and an unwavering focus on outcomes.",
      icon: CheckCircle,
    },
    {
      title: "Sophisticated Core Agent Suite",
      description: "Powerful, customizable AI solutions tackling your critical challenges.",
      icon: CheckCircle,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  }

  return (
    <section id="next-section" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 z-0"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,100,50,0.1),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.15),transparent_70%)]"></div>
      </div>

      {/* Diagonal Divider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full transform -skew-y-6 origin-top-right bg-gradient-to-r from-transparent via-slate-700/20 to-transparent translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100">Tired of the AI Hype Cycle?</h2>
          <div className="mt-4 inline-block">
            <span className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Demand Tangible ROI
            </span>
            <div className="h-1 w-full bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-full mt-1"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative">
          {/* Problem Panel */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl -z-10"></div>
            <div className="absolute inset-0 border border-amber-600/20 rounded-2xl shadow-lg shadow-amber-900/5 -z-10"></div>

            <div className="p-8 md:p-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-2xl font-semibold text-amber-50">The Common Pitfalls of AI Implementation</h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-6"
              >
                {problems.map((problem, index) => (
                  <motion.div key={index} variants={itemVariants} className="group">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-amber-900/20 flex items-center justify-center mr-4 mt-1 group-hover:bg-amber-800/30 transition-colors duration-300">
                        <problem.icon className="w-4 h-4 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-amber-100">{problem.title}</h4>
                        <p className="text-amber-200/70 mt-1">{problem.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Solution Panel */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl -z-10"></div>
            <div className="absolute inset-0 border border-cyan-500/30 rounded-2xl shadow-lg shadow-cyan-500/10 -z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.1),transparent_50%)] rounded-2xl -z-10"></div>

            <div className="p-8 md:p-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center mr-4">
                  <ShieldCheck className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold text-cyan-50">
                  The NovaGent Advantage: Clarity, Capability, Control
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-6"
              >
                {solutions.map((solution, index) => (
                  <motion.div key={index} variants={itemVariants} className="group">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-cyan-900/20 flex items-center justify-center mr-4 mt-1 group-hover:bg-cyan-800/30 transition-colors duration-300">
                        <solution.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-cyan-100">{solution.title}</h4>
                        <p className="text-cyan-200/70 mt-1">{solution.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContrastPanelsSection
