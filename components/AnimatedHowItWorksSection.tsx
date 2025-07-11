'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import * as Icons from 'lucide-react'

interface Step {
  title: string
  description: string
  icon?: keyof typeof Icons
  animation?: React.ReactNode
}

interface AnimatedHowItWorksSectionProps {
  heading: string
  subheading?: string
  steps: Step[]
  className?: string
}

export default function AnimatedHowItWorksSection({
  heading,
  subheading,
  steps,
  className = ''
}: AnimatedHowItWorksSectionProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const stepIcons = {
    0: Icons.Users,
    1: Icons.Search,
    2: Icons.MessageSquare,
    3: Icons.CheckCircle
  }

  return (
    <section 
      ref={sectionRef}
      className={`relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900/50 dark:via-slate-950 dark:to-slate-900/50 overflow-hidden ${className}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            {heading}
          </h2>
          {subheading && (
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {subheading}
            </p>
          )}
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Progress line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 rounded-full" />
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                initial={{ height: '0%' }}
                animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Steps */}
          <div className="relative space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = stepIcons[index] || Icons.Circle
              const isActive = index === activeStep
              const isCompleted = index < activeStep

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, transition: { delay: index * 0.2 } }
                  }}
                  onViewportEnter={() => setActiveStep(Math.max(activeStep, index))}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  {/* Content */}
                  <motion.div
                    className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}
                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        animate={{
                          scale: isActive ? [1, 1.1, 1] : 1,
                          rotate: isCompleted ? 360 : 0
                        }}
                        transition={{
                          scale: { duration: 2, repeat: isActive ? Infinity : 0 },
                          rotate: { duration: 0.5 }
                        }}
                        className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
                          isCompleted 
                            ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
                            : isActive 
                              ? 'bg-gradient-to-br from-blue-500 to-purple-500' 
                              : 'bg-slate-200 dark:bg-slate-700'
                        }`}
                      >
                        {isCompleted ? (
                          <Icons.Check className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        ) : (
                          <span className="text-xl sm:text-2xl font-bold text-white">
                            {index + 1}
                          </span>
                        )}
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Visual representation */}
                  <motion.div
                    className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-1'}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-xl dark:shadow-none border border-slate-200 dark:border-slate-700">
                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : 0.5,
                          scale: isActive ? 1 : 0.95
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center h-40"
                      >
                        {/* Step-specific animations */}
                        {index === 0 && <CustomerDefineAnimation isActive={isActive} />}
                        {index === 1 && <DiscoverEnrichAnimation isActive={isActive} />}
                        {index === 2 && <PersonalizedEngagementAnimation isActive={isActive} />}
                        {index === 3 && <QualifyHandOffAnimation isActive={isActive} />}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Step-specific animations
function CustomerDefineAnimation({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central user icon */}
      <motion.div
        animate={{
          scale: isActive ? [1, 1.1, 1] : 1
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative z-10"
      >
        <Icons.User className="w-16 h-16 text-blue-500" />
      </motion.div>
      
      {/* Orbiting criteria */}
      {['Industry', 'Size', 'Tech', 'Role'].map((label, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: isActive ? 360 : 0,
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 py-1 rounded-full border border-slate-200 dark:border-slate-600"
            style={{
              transform: `rotate(${i * 90}deg) translateY(-60px) rotate(-${i * 90}deg)`
            }}
          >
            {label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function DiscoverEnrichAnimation({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        animate={{
          rotate: isActive ? 360 : 0
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative"
      >
        <Icons.Search className="w-16 h-16 text-purple-500" />
      </motion.div>
      
      {/* Data points flowing in */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: isActive ? [100, 0] : 100,
            opacity: isActive ? [0, 1, 1, 0] : 0
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute"
          style={{
            top: `${20 + i * 15}%`,
            right: '20%'
          }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>
      ))}
    </div>
  )
}

function PersonalizedEngagementAnimation({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: isActive ? [0.8, 1, 0.8] : 0.8,
              opacity: isActive ? [0.3, 1, 0.3] : 0.3
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity
            }}
            className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/30 dark:to-teal-500/30 rounded-lg flex items-center justify-center"
          >
            <Icons.Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function QualifyHandOffAnimation({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        animate={{
          scale: isActive ? [1, 1.2, 1] : 1
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
        className="relative"
      >
        <Icons.CheckCircle className="w-16 h-16 text-green-500" />
      </motion.div>
      
      {/* Success particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: isActive ? [0, -50] : 0,
            x: isActive ? [0, (i - 3) * 20] : 0,
            opacity: isActive ? [1, 0] : 0,
            scale: isActive ? [1, 0] : 0
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="absolute"
        >
          <Icons.Sparkle className="w-4 h-4 text-yellow-500" />
        </motion.div>
      ))}
    </div>
  )
}