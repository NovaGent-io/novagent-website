'use client'

import { motion, useAnimationControls, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  Search, Database, MessageSquare, CheckCircle, 
  Zap, Target, TrendingUp, Users, Filter,
  Brain, Sparkles, ArrowRight, Play, Pause
} from 'lucide-react'

interface WorkflowStep {
  id: number
  title: string
  description: string
  icon: React.ElementType
  color: string
  details: string[]
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: "Define Your Ideal Customer",
    description: "Set your targeting criteria including industry, company size, job titles, technologies used, and other relevant parameters.",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
    details: [
      "Industry & vertical targeting",
      "Company size & revenue filters",
      "Technology stack requirements",
      "Geographic parameters"
    ]
  },
  {
    id: 2,
    title: "AI Discovers & Enriches",
    description: "Our AI searches multiple data sources to find matching prospects and enriches them with accurate contact information and insights.",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    details: [
      "500+ integrated data sources",
      "Real-time data verification",
      "75+ enrichment data points",
      "Intent signal detection"
    ]
  },
  {
    id: 3,
    title: "Personalized Engagement",
    description: "Each prospect receives tailored outreach based on their specific context, challenges, and potential needs.",
    icon: MessageSquare,
    color: "from-emerald-500 to-teal-500",
    details: [
      "Dynamic content generation",
      "Multi-channel orchestration",
      "Optimal timing prediction",
      "A/B testing automation"
    ]
  },
  {
    id: 4,
    title: "Qualify & Hand Off",
    description: "The AI qualifies responses and books meetings directly on your calendar, handing off only sales-ready leads to your team.",
    icon: CheckCircle,
    color: "from-orange-500 to-red-500",
    details: [
      "Behavioral lead scoring",
      "Calendar integration",
      "CRM synchronization",
      "Warm handoff protocols"
    ]
  }
]

export default function ProspectHunterWorkflow() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % workflowSteps.length)
      }, 4000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying])

  const currentStep = workflowSteps[activeStep]

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden"
    >
      {/* Dynamic background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)',
          ][activeStep]
        }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            How Prospect Hunter Works
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A seamless process that turns market intelligence into qualified opportunities
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Main workflow visualization */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Interactive visualization */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl dark:shadow-none border border-slate-200 dark:border-slate-800 p-8 overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Central workflow display */}
                <div className="relative z-10 h-96 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      {/* Step icon with gradient background */}
                      <motion.div
                        className="relative mx-auto mb-6"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${currentStep.color} p-0.5`}>
                          <div className="w-full h-full bg-white dark:bg-slate-900 rounded-3xl flex items-center justify-center">
                            <currentStep.icon className={`w-16 h-16 text-transparent bg-gradient-to-br ${currentStep.color} bg-clip-text`} strokeWidth={1.5} />
                          </div>
                        </div>
                        {/* Animated sparkles */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0"
                        >
                          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500" />
                        </motion.div>
                      </motion.div>

                      {/* Step number and title */}
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${currentStep.color} text-white mb-2`}>
                          Step {currentStep.id}
                        </span>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {currentStep.title}
                        </h3>
                      </div>

                      {/* Animated details */}
                      <div className="space-y-2">
                        {currentStep.details.map((detail, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span>{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Playback controls */}
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    ) : (
                      <Play className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right side - Step details */}
            <div className="space-y-4">
              {workflowSteps.map((step, index) => {
                const isActive = index === activeStep
                const Icon = step.icon

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    onClick={() => {
                      setActiveStep(index)
                      setIsPlaying(false)
                    }}
                    className={`relative cursor-pointer group ${
                      isActive ? 'scale-105' : 'scale-100'
                    } transition-all duration-300`}
                  >
                    <div className={`relative rounded-xl border-2 transition-all duration-300 ${
                      isActive 
                        ? 'border-transparent shadow-lg dark:shadow-none' 
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}>
                      {/* Active gradient border */}
                      {isActive && (
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${step.color} p-0.5`}>
                          <div className="w-full h-full bg-white dark:bg-slate-900 rounded-xl" />
                        </div>
                      )}

                      <div className="relative bg-white dark:bg-slate-900 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          {/* Step icon */}
                          <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${
                            isActive ? step.color : 'from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700'
                          } p-0.5`}>
                            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center">
                              <Icon className={`w-6 h-6 ${
                                isActive 
                                  ? `text-transparent bg-gradient-to-br ${step.color} bg-clip-text` 
                                  : 'text-slate-400 dark:text-slate-600'
                              }`} strokeWidth={1.5} />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                              {step.title}
                              {isActive && (
                                <motion.span
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  className="inline-block w-2 h-2 rounded-full bg-green-500"
                                />
                              )}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {step.description}
                            </p>
                          </div>

                          {/* Arrow indicator */}
                          <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                            isActive || hoveredStep === index
                              ? 'text-slate-600 dark:text-slate-400 translate-x-1' 
                              : 'text-slate-300 dark:text-slate-700'
                          }`} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Bottom metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { icon: Users, label: "Prospects Identified", value: "10K+", color: "from-blue-500 to-cyan-500" },
              { icon: Filter, label: "Qualification Rate", value: "94%", color: "from-purple-500 to-pink-500" },
              { icon: TrendingUp, label: "Response Rate", value: "32%", color: "from-emerald-500 to-teal-500" },
              { icon: Zap, label: "Time to Meeting", value: "48hrs", color: "from-orange-500 to-red-500" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 text-center group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <metric.icon className="w-8 h-8 mx-auto mb-2 text-slate-400 dark:text-slate-600" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{metric.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
