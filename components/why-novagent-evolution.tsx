"use client"

import { motion } from "framer-motion"
import { Brain, Cpu, Layers, Shield, Zap, Users, ChartBar, Sparkles, CheckCircle, XCircle, ArrowRight } from "lucide-react"

const WhyNovaGentEvolution = () => {
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
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            The Evolution of AI Implementation
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We've transformed how businesses deploy AI, moving from fragmented chaos to unified intelligence
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Old Way */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <motion.div variants={itemVariants}>
                <div className="text-center mb-6">
                  <span className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">The Old Way</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">Multiple Agents, Multiple Problems</h3>
                </div>
                
                <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 rounded-2xl p-6 space-y-4">
                  {/* Agent Icons */}
                  <div className="flex justify-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                      <Cpu className="w-7 h-7 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                      <Cpu className="w-7 h-7 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                      <Cpu className="w-7 h-7 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">7 separate agents to manage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Complex integrations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Fragmented data & context</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">High operational overhead</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden md:flex justify-center"
            >
              <ArrowRight className="w-12 h-12 text-purple-500 dark:text-purple-400" />
            </motion.div>

            {/* New Way */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <motion.div variants={itemVariants}>
                <div className="text-center mb-6">
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">The NovaGent Way</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">One Agent, Infinite Capabilities</h3>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-950/20 dark:to-cyan-950/20 border-2 border-purple-200 dark:border-purple-700 rounded-2xl p-6 space-y-4">
                  {/* Central Agent */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <Brain className="w-10 h-10 text-white" />
                      </div>
                      {/* Orbiting Skills */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                        <Layers className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Single unified AI agent</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">14+ modular skills</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Seamless integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Expert management included</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">The result? Our clients see:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">87%</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Reduction in operational complexity</p>
              </div>
              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">3.5x</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Faster deployment time</p>
              </div>
              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">52%</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Lower total cost of ownership</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyNovaGentEvolution
