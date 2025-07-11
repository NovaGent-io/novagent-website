'use client'

import React from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  ChevronRight, Sparkles, ArrowRight, LucideIcon
} from 'lucide-react'

export interface WorkflowStage {
  id: number
  title: string
  description: string
  icon: LucideIcon
  stats: { label: string; value: string }
  features: string[]
  colorClass: string
  gradientClass: string
}

interface SkillWorkflowProps {
  title: string
  subtitle: string
  stages: WorkflowStage[]
  metrics?: {
    icon: LucideIcon
    metric: string
    label: string
  }[]
  visualizations?: {
    [key: number]: React.ReactNode
  }
}

export default function SkillWorkflow({ 
  title, 
  subtitle, 
  stages,
  metrics,
  visualizations = {}
}: SkillWorkflowProps) {
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
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {subtitle}
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
              {stages.map((stage, index) => (
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
                  {index < stages.length - 1 && (
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
                    <div className={`w-12 h-12 rounded-lg ${getGradientBrClasses(stages[selectedStage].gradientClass)} p-0.5`}>
                      <div className="w-full h-full bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center">
                        {React.createElement(stages[selectedStage].icon, {
                          className: "w-6 h-6 text-slate-700 dark:text-slate-300"
                        })}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {stages[selectedStage].title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {stages[selectedStage].description}
                  </p>
                  
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {stages[selectedStage].features.map((feature, index) => (
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
                    {visualizations[selectedStage] || (
                      <div className="text-center text-slate-500 dark:text-slate-400">
                        <Sparkles className="w-16 h-16 mx-auto mb-4" />
                        <p>Custom visualization for stage {selectedStage + 1}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Results Section */}
        {metrics && metrics.length > 0 && (
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
              {metrics.map((result, index) => (
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
        )}
      </div>
    </section>
  )
}
