"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { 
  Eye,
  Rocket,
  TrendingUp,
  Shield,
  ArrowRight,
  CheckCircle,
  Cpu,
  Users,
  Layers,
  Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const JourneySection = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Journey steps - The NovaGent Loop
  const journeySteps = [
    {
      phase: "Design",
      icon: Eye,
      title: "Strategic Discovery",
      subtitle: "We Learn Your Business Inside Out",
      description: "Our AI architects dive deep into your unique challenges and opportunities",
      details: [
        "In-depth consultation to understand your workflows",
        "Process mapping and bottleneck identification",
        "Custom agent personality and voice design",
        "Clear ROI projections and success metrics"
      ],
      color: "from-purple-500 to-cyan-500",
      bgColor: "from-purple-500/10 to-cyan-500/10"
    },
    {
      phase: "Deploy",
      icon: Rocket,
      title: "Expert Implementation",
      subtitle: "Your AI Agent Comes to Life",
      description: "We handle all the technical complexity while you stay focused on your business",
      details: [
        "Single-tenant infrastructure provisioning",
        "Skill selection and configuration",
        "Seamless integration with your tools",
        "Rigorous testing and optimization"
      ],
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10"
    },
    {
      phase: "Manage",
      icon: Shield,
      title: "Transparent Operations",
      subtitle: "Real-Time Visibility & Control",
      description: "Monitor every action and outcome through our intuitive platform",
      details: [
        "Live activity dashboards",
        "Performance analytics and reporting",
        "Proactive issue resolution",
        "24/7 expert support"
      ],
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10"
    },
    {
      phase: "Optimize",
      icon: TrendingUp,
      title: "Continuous Evolution",
      subtitle: "Your Agent Gets Smarter Every Day",
      description: "We continuously refine and expand capabilities based on real results",
      details: [
        "AI performance optimization",
        "New skill recommendations",
        "Workflow improvements",
        "Strategic growth planning"
      ],
      color: "from-fuchsia-500 to-purple-500",
      bgColor: "from-fuchsia-500/10 to-purple-500/10"
    }
  ]

  // Auto-advance timer
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [isAutoPlaying, journeySteps.length])

  // Differentiators
  const differentiators = [
    {
      traditional: "Multiple disconnected bots",
      novagent: "One unified AI agent",
      icon: Cpu
    },
    {
      traditional: "DIY setup and management",
      novagent: "Fully managed service",
      icon: Users
    },
    {
      traditional: "Black box operations",
      novagent: "Transparent dashboards",
      icon: Eye
    },
    {
      traditional: "Fixed capabilities",
      novagent: "Modular skill system",
      icon: Layers
    },
    {
      traditional: "Pay for potential",
      novagent: "Pay for outcomes",
      icon: Target
    },
    {
      traditional: "Static performance",
      novagent: "Continuous optimization",
      icon: TrendingUp
    }
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-slate-900">
      {/* Section Header */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-gray-100">A Partnership That </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600">
              Never Stops Evolving
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From strategic discovery to continuous optimization, we're with you every step of the way. 
            This isn't just implementation?it's transformation.
          </p>
        </motion.div>

        {/* The NovaGent Loop */}
        <div className="max-w-7xl mx-auto mb-24">
          {/* Step Details */}
          <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: Content */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {journeySteps[activeStep].title}
                </h3>
                <p className={`text-lg font-medium bg-gradient-to-r ${journeySteps[activeStep].color} bg-clip-text text-transparent mb-4`}>
                  {journeySteps[activeStep].subtitle}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                  {journeySteps[activeStep].description}
                </p>
                
                <div className="space-y-3">
                  {journeySteps[activeStep].details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative">
                <div className="relative h-64 md:h-80">
                  <div className={`absolute inset-0 bg-gradient-to-br ${journeySteps[activeStep].color} rounded-2xl opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {(() => {
                      const Icon = journeySteps[activeStep].icon
                      return <Icon className="w-32 h-32 text-gray-400 dark:text-gray-600" />
                    })()}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {isAutoPlaying ? "Pause" : "Play"} Auto-Advance
              </button>
              <div className="flex gap-2">
                {journeySteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveStep(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeStep === index 
                        ? 'w-8 bg-gradient-to-r from-purple-600 to-cyan-600' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Differentiators Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-900 dark:text-gray-100">The </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600">
              NovaGent Difference
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-cyan-100 dark:from-purple-900/30 dark:to-cyan-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-red-500 dark:text-red-400 line-through opacity-60 mb-1">
                      {item.traditional}
                    </div>
                    <div className="font-semibold text-green-600 dark:text-green-400">
                      {item.novagent}
                    </div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the companies that have already transformed their operations with NovaGent. 
            Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              asChild
            >
              <Link href="/how-it-works">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default JourneySection
