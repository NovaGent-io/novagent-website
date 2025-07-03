"use client"

import React from "react"
import { motion } from "framer-motion"
import { Target, PhoneCall, Calendar, Search } from "lucide-react"

interface WorkflowStep {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

interface WorkflowTimelineProps {
  customSteps?: WorkflowStep[]
}

export function WorkflowTimeline({ customSteps }: WorkflowTimelineProps = {}) {
  const defaultSteps: WorkflowStep[] = [
    {
      id: 1,
      icon: <Target className="h-6 w-6" />,
      title: "Identify",
      description: "AI discovers high-intent prospects visiting your site",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: <PhoneCall className="h-6 w-6" />,
      title: "Engage",
      description: "Instant personalized outreach via voice or text",
      color: "from-cyan-500 to-purple-500"
    },
    {
      id: 3,
      icon: <Calendar className="h-6 w-6" />,
      title: "Convert",
      description: "Automated booking into your team's calendar",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      icon: <Search className="h-6 w-6" />,
      title: "Amplify",
      description: "Build trust with enhanced online presence",
      color: "from-pink-500 to-green-500"
    }
  ]

  const steps = customSteps || defaultSteps

  return (
    <div className="relative py-12">
      {/* Progress track - hidden on mobile */}
      <div className="absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full hidden md:block" />
      
      {/* Steps */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Step marker */}
            <motion.div
              className="relative z-10 mx-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`
                w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full
                bg-gradient-to-br ${step.color}
                flex items-center justify-center
                shadow-lg cursor-pointer
                transform transition-all duration-300
                hover:shadow-xl hover:shadow-purple-500/20
              `}>
                <div className="text-white">
                  {step.icon}
                </div>
              </div>
            </motion.div>
            
            {/* Content */}
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                {step.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
