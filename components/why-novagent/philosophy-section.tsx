"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Shield, 
  Brain, 
  Users,
  Sparkles,
  Lock,
  Cpu,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const PhilosophySection = () => {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const philosophyPillars = [
    {
      icon: Shield,
      title: "Single-Tenant Security",
      subtitle: "Your AI. Your Data. Your Control.",
      description: "Every client gets their own dedicated AI instance. No shared resources, no data mixing, just pure isolated intelligence working exclusively for you.",
      features: [
        "Dedicated infrastructure per client",
        "Complete data isolation",
        "Enterprise-grade security",
        "Full compliance support"
      ],
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-600/10",
      delay: 0
    },
    {
      icon: Brain,
      title: "One Agent, Infinite Skills",
      subtitle: "Simplicity Meets Sophistication",
      description: "Instead of juggling multiple bots, you get one sophisticated AI agent that can be equipped with any combination of our 14+ specialized skills.",
      features: [
        "Unified AI consciousness",
        "14+ modular capabilities",
        "Seamless skill integration",
        "Evolving intelligence"
      ],
      gradient: "from-purple-500 to-fuchsia-600",
      bgGradient: "from-purple-500/10 to-fuchsia-600/10",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Human + AI Partnership",
      subtitle: "Expertise Amplified by Technology",
      description: "Our expert team designs, deploys, and continuously optimizes your AI agent. You get the power of AI with the wisdom of human oversight.",
      features: [
        "Expert configuration",
        "Continuous optimization",
        "Strategic guidance",
        "24/7 human support"
      ],
      gradient: "from-fuchsia-500 to-pink-600",
      bgGradient: "from-fuchsia-500/10 to-pink-600/10",
      delay: 0.2
    }
  ]

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute -top-20 left-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30"
        />
        <motion.div
          style={{ y: useTransform(y, value => -value) }}
          className="absolute -bottom-20 right-1/4 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full filter blur-3xl opacity-30"
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
              Our Philosophy
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-gray-100">Built on </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600">
              Three Pillars
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our approach combines cutting-edge technology with human expertise to deliver 
            a managed AI experience that's secure, powerful, and perfectly aligned with your business.
          </p>
        </motion.div>

        {/* Philosophy Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {philosophyPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: pillar.delay }}
              onMouseEnter={() => setHoveredPillar(index)}
              onMouseLeave={() => setHoveredPillar(null)}
              className="relative group"
            >
              {/* Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-full"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Card Content */}
                <div className="relative h-full p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg`}>
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {pillar.title}
                  </h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent mb-4`}>
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {pillar.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect - Corner Accent */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredPillar === index ? 1 : 0 }}
                    className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${pillar.gradient} rounded-full opacity-20 blur-xl`}
                  />
                </div>
              </motion.div>

              {/* Number Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: pillar.delay + 0.3, type: "spring" }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 dark:border-gray-700"
              >
                <span className={`text-lg font-bold bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}>
                  {index + 1}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>


      </motion.div>
    </section>
  )
}

export default PhilosophySection
