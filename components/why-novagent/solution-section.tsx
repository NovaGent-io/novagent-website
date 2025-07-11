"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { 
  CheckCircle,
  Brain,
  Shield,
  Eye,
  Sparkles,
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  Layers,
  Target,
  Clock
} from "lucide-react"

const SolutionSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const solutions = [
    {
      icon: Brain,
      title: "One Unified Agent",
      subtitle: "Not 7 Bots. One Intelligence.",
      description: "A single, sophisticated AI agent that understands your entire business context and can be equipped with any combination of our 14+ specialized skills.",
      benefits: [
        "Complete context awareness across all operations",
        "Seamless skill integration and coordination",
        "Single point of management and control",
        "Unified learning and improvement"
      ],
      visual: {
        primary: "from-purple-500 to-cyan-500",
        secondary: "from-purple-500/20 to-cyan-500/20"
      }
    },
    {
      icon: Users,
      title: "Fully Managed Service",
      subtitle: "We Handle Everything",
      description: "Our expert team designs, deploys, and continuously optimizes your AI agent. You focus on your business while we handle the complexity.",
      benefits: [
        "Expert configuration from day one",
        "Continuous performance optimization",
        "24/7 monitoring and support",
        "No need for internal AI teams"
      ],
      visual: {
        primary: "from-cyan-500 to-blue-500",
        secondary: "from-cyan-500/20 to-blue-500/20"
      }
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      subtitle: "See Everything. Control Everything.",
      description: "Real-time dashboards show exactly what your agent is doing, why it's doing it, and the value it's creating for your business.",
      benefits: [
        "Live activity monitoring",
        "Clear ROI tracking",
        "Detailed performance analytics",
        "Full audit trails"
      ],
      visual: {
        primary: "from-emerald-500 to-teal-500",
        secondary: "from-emerald-500/20 to-teal-500/20"
      }
    }
  ]

  const comparisonPoints = [
    {
      problem: "7+ disconnected tools",
      solution: "One unified platform",
      icon: Layers
    },
    {
      problem: "$300K+ for AI team",
      solution: "Affordable monthly pricing",
      icon: Target
    },
    {
      problem: "Months to implement",
      solution: "Live in days",
      icon: Clock
    },
    {
      problem: "No visibility",
      solution: "Complete transparency",
      icon: Eye
    }
  ]

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/30 to-cyan-200/30 dark:from-purple-800/20 dark:to-cyan-800/20 rounded-full filter blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(y, value => -value) }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200/30 to-emerald-200/30 dark:from-cyan-800/20 dark:to-emerald-800/20 rounded-full filter blur-3xl"
        />
      </div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/30 dark:to-cyan-900/30 rounded-full mb-6"
          >
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="font-semibold text-purple-800 dark:text-purple-200">
              The Solution
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-gray-100">Introducing the </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600">
              NovaGent Platform
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A revolutionary approach that transforms how businesses deploy and manage AI. 
            One platform. One agent. Unlimited possibilities.
          </p>
        </motion.div>

        {/* Quick Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {comparisonPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4">
                  <div className="text-red-500 line-through text-sm md:text-base opacity-60">
                    {point.problem}
                  </div>
                  <ArrowRight className="w-4 h-4 mx-auto my-2 text-gray-400" />
                  <div className="text-green-600 dark:text-green-400 font-semibold text-sm md:text-base">
                    {point.solution}
                  </div>
                </div>
                <point.icon className="w-8 h-8 mx-auto text-purple-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Solution Features */}
        <div className="max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <motion.div
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="relative"
                >
                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        animate={{ 
                          rotate: hoveredFeature === index ? 360 : 0,
                          scale: hoveredFeature === index ? 1.1 : 1
                        }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.visual.primary} flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <solution.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                          {solution.title}
                        </h3>
                        <p className={`text-lg font-medium bg-gradient-to-r ${solution.visual.primary} bg-clip-text text-transparent`}>
                          {solution.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3">
                      {solution.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredFeature === index ? 1 : 0 }}
                    className={`absolute -inset-4 bg-gradient-to-br ${solution.visual.secondary} rounded-3xl blur-2xl -z-10`}
                  />
                </motion.div>

                {/* Visual Side */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className={`relative h-96 bg-gradient-to-br ${solution.visual.secondary} rounded-3xl overflow-hidden`}>
                    {/* Custom Visual for Each Solution */}
                    {index === 0 && (
                      // One Unified Agent Visual
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="relative w-64 h-64"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full" />
                          <div className="absolute inset-8 bg-gradient-to-br from-purple-500/40 to-cyan-500/40 rounded-full" />
                          <div className="absolute inset-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                            <Brain className="w-16 h-16 text-purple-600" />
                          </div>
                          {/* Orbiting Skills */}
                          {[0, 1, 2, 3].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ rotate: -360 }}
                              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0"
                            >
                              <div 
                                className="absolute w-8 h-8 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full"
                                style={{
                                  top: '50%',
                                  left: '50%',
                                  transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(-100px)`
                                }}
                              />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      // Managed Service Visual
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <Users className="w-32 h-32 text-cyan-500 opacity-20" />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <Shield className="w-20 h-20 text-cyan-600" />
                          </motion.div>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      // Transparency Visual
                      <div className="absolute inset-0 p-8">
                        <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-6 h-full">
                          <div className="space-y-4">
                            <motion.div
                              animate={{ width: ["0%", "75%"] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                            />
                            <motion.div
                              animate={{ width: ["0%", "90%"] }}
                              transition={{ duration: 2.5, repeat: Infinity }}
                              className="h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-80"
                            />
                            <motion.div
                              animate={{ width: ["0%", "60%"] }}
                              transition={{ duration: 1.8, repeat: Infinity }}
                              className="h-8 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-60"
                            />
                            <div className="pt-8">
                              <BarChart3 className="w-20 h-20 text-emerald-500 mx-auto" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Ready to transform your AI implementation?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                See It In Action
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                View Pricing
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default SolutionSection
