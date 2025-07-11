'use client'

import React from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  Search, Database, MessageSquare, CheckCircle, 
  Zap, Target, TrendingUp, Users, Filter,
  Brain, Sparkles, ArrowRight, ChevronRight,
  BarChart3, Globe, Mail, Calendar
} from 'lucide-react'

interface PipelineStage {
  id: number
  title: string
  description: string
  icon: React.ElementType
  stats: { label: string; value: string }
  features: string[]
  colorClass: string
  gradientClass: string
}

const pipelineStages: PipelineStage[] = [
  {
    id: 1,
    title: "Define Your Ideal Customer",
    description: "Set your targeting criteria including industry, company size, job titles, technologies used, and other relevant parameters.",
    icon: Target,
    stats: { label: "Targeting Accuracy", value: "99%" },
    features: [
      "Industry verticals",
      "Company demographics",
      "Technology filters",
      "Intent signals"
    ],
    colorClass: "blue",
    gradientClass: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "AI Discovers & Enriches",
    description: "Our AI searches multiple data sources to find matching prospects and enriches them with accurate contact information and insights.",
    icon: Brain,
    stats: { label: "Data Sources", value: "500+" },
    features: [
      "Real-time search",
      "Data verification",
      "Contact enrichment",
      "Company insights"
    ],
    colorClass: "purple",
    gradientClass: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Personalized Engagement",
    description: "Each prospect receives tailored outreach based on their specific context, challenges, and potential needs.",
    icon: MessageSquare,
    stats: { label: "Response Rate", value: "32%" },
    features: [
      "Dynamic personalization",
      "Multi-channel outreach",
      "Optimal timing",
      "A/B testing"
    ],
    colorClass: "emerald",
    gradientClass: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    title: "Qualify & Hand Off",
    description: "The AI qualifies responses and books meetings directly on your calendar, handing off only sales-ready leads to your team.",
    icon: CheckCircle,
    stats: { label: "Qualification Rate", value: "89%" },
    features: [
      "Lead scoring",
      "Meeting booking",
      "CRM integration",
      "Warm handoff"
    ],
    colorClass: "orange",
    gradientClass: "from-orange-500 to-red-500"
  }
]

export default function ProspectHunterPipeline() {
  const [selectedStage, setSelectedStage] = useState(0)
  const [animatedNumbers, setAnimatedNumbers] = useState<number[]>([1000, 0, 0, 0])
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50])

  // Animate numbers flowing through pipeline
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedNumbers(prev => {
        const newNumbers = [...prev]
        // Flow numbers through stages
        if (newNumbers[0] > 100) {
          newNumbers[0] -= 50
          newNumbers[1] += 35
        }
        if (newNumbers[1] > 50) {
          newNumbers[1] -= 10
          newNumbers[2] += 8
        }
        if (newNumbers[2] > 20) {
          newNumbers[2] -= 5
          newNumbers[3] += 4
        }
        return newNumbers
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const getGradientClasses = (gradientClass: string) => {
    return `bg-gradient-to-r ${gradientClass}`
  }

  const getGradientBrClasses = (gradientClass: string) => {
    return `bg-gradient-to-br ${gradientClass}`
  }

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y: parallaxY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            How Prospect Hunter Works
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A seamless process that turns market intelligence into qualified opportunities
          </p>
        </motion.div>

        {/* Pipeline Visualization */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Pipeline Flow Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full opacity-20" />
            </div>

            {/* Pipeline Stages */}
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              {pipelineStages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedStage(index)}
                  className="relative cursor-pointer group"
                >
                  {/* Connection line */}
                  {index < pipelineStages.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-300 dark:from-slate-700 dark:to-slate-700 -z-10">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                      />
                    </div>
                  )}

                  {/* Stage Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg dark:shadow-none border-2 transition-all duration-300 ${
                      selectedStage === index 
                        ? 'border-transparent' 
                        : 'border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {selectedStage === index && (
                      <div className={`absolute inset-0 rounded-2xl ${getGradientBrClasses(stage.gradientClass)} p-0.5`}>
                        <div className="w-full h-full bg-white dark:bg-slate-900 rounded-2xl" />
                      </div>
                    )}

                    <div className="relative z-10">
                      {/* Icon with animated background */}
                      <div className="relative mb-4">
                        <motion.div
                          animate={selectedStage === index ? {
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`w-16 h-16 mx-auto rounded-xl ${getGradientBrClasses(stage.gradientClass)} p-0.5`}
                        >
                          <div className="w-full h-full bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center">
                            <stage.icon className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                          </div>
                        </motion.div>

                        {/* Animated number */}
                        <motion.div
                          key={animatedNumbers[index]}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-2 -right-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold px-2 py-1 rounded-full"
                        >
                          {animatedNumbers[index]}
                        </motion.div>
                      </div>

                      {/* Stage Info */}
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 text-center">
                        {stage.title}
                      </h3>
                      <div className="text-center mb-3">
                        <span className={`text-2xl font-bold ${getGradientClasses(stage.gradientClass)} text-transparent bg-clip-text`}>
                          {stage.stats.value}
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{stage.stats.label}</p>
                      </div>

                      {/* Progress indicator */}
                      <div className="flex justify-center gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 w-4 rounded-full transition-all duration-300 ${
                              i <= index 
                                ? getGradientClasses(stage.gradientClass)
                                : 'bg-slate-200 dark:bg-slate-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Stage Information */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-none border border-slate-200 dark:border-slate-800 p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left side - Description and features */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${getGradientBrClasses(pipelineStages[selectedStage].gradientClass)} p-0.5`}>
                      <div className="w-full h-full bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center">
                        {React.createElement(pipelineStages[selectedStage].icon, {
                          className: "w-6 h-6 text-slate-700 dark:text-slate-300"
                        })}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {pipelineStages[selectedStage].title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {pipelineStages[selectedStage].description}
                  </p>
                  
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {pipelineStages[selectedStage].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
                      >
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Right side - Visual representation */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 h-full flex items-center justify-center">
                    {selectedStage === 0 && <StageOneVisual />}
                    {selectedStage === 1 && <StageTwoVisual />}
                    {selectedStage === 2 && <StageThreeVisual />}
                    {selectedStage === 3 && <StageFourVisual />}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            The Results Speak for Themselves
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, metric: "10K+", label: "Qualified Leads" },
              { icon: TrendingUp, metric: "3.5x", label: "Higher Conversion" },
              { icon: Zap, metric: "87%", label: "Time Saved" },
              { icon: Calendar, metric: "24/7", label: "Always Working" }
            ].map((result, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg dark:shadow-none border border-slate-200 dark:border-slate-800"
              >
                {React.createElement(result.icon, {
                  className: "w-8 h-8 mx-auto mb-3 text-slate-700 dark:text-slate-300"
                })}
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{result.metric}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Stage Visualizations
function StageOneVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-48 h-48"
      >
        {/* Central target */}
        <Target className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-blue-500" />
        
        {/* Orbiting criteria */}
        {[
          { icon: Globe, label: "Industry" },
          { icon: Users, label: "Size" },
          { icon: Database, label: "Tech" },
          { icon: BarChart3, label: "Revenue" }
        ].map((item, i) => {
          const angle = i * 90
          const radius = 80
          
          return (
            <div
              key={i}
              className="absolute w-12 h-12 bg-white dark:bg-slate-800 rounded-lg shadow-md flex items-center justify-center"
              style={{
                top: '50%',
                left: '50%',
                transform: `
                  translateX(-50%) 
                  translateY(-50%) 
                  rotate(${angle}deg) 
                  translateX(${radius}px) 
                  rotate(-${angle}deg)
                `
              }}
            >
              {React.createElement(item.icon, {
                className: "w-6 h-6 text-slate-600 dark:text-slate-400"
              })}
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

function StageTwoVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Brain className="w-24 h-24 text-purple-500" />
      
      {/* Data streams */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [150, 0],
            y: [(i - 4) * 30, (i - 4) * 15]
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <div className="w-16 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </motion.div>
      ))}
    </div>
  )
}

function StageThreeVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
        {[Mail, MessageSquare, Globe].map((Icon, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity
            }}
            className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg p-0.5"
          >
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center">
              {React.createElement(Icon, {
                className: "w-8 h-8 text-emerald-600 dark:text-emerald-400"
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function StageFourVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >
        <CheckCircle className="w-24 h-24 text-green-500" />
      </motion.div>
      
      {/* Success sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            scale: [0, 1, 0],
            y: [0, -60],
            x: [(i - 3) * 30, (i - 3) * 40],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        >
          <Sparkles className="w-6 h-6 text-yellow-500" />
        </motion.div>
      ))}
    </div>
  )
}
