'use client'

import { motion, AnimatePresence } from 'framer-motion'
import * as Icons from 'lucide-react'
import { useState, useEffect } from 'react'

interface Capability {
  title: string
  description: string
  icon: keyof typeof Icons
  color?: string
  features?: string[]
  metric?: { value: string; label: string }
}

interface InteractiveCapabilitiesSectionProps {
  heading: string
  subheading?: string
  capabilities: Capability[]
  className?: string
}

export default function InteractiveCapabilitiesSection({
  heading,
  subheading,
  capabilities,
  className = ''
}: InteractiveCapabilitiesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % capabilities.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, capabilities.length])

  const activeCapability = capabilities[activeIndex]
  const Icon = Icons[activeCapability.icon] || Icons.Sparkles
  const gradientColors = activeCapability.color || 'from-blue-500 to-purple-500'

  return (
    <section className={`relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 overflow-hidden ${className}`}>
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl"
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
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
              {subheading}
            </p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          {/* Left side - Capability selector */}
          <div className="space-y-3">
            {capabilities.map((capability, index) => {
              const isActive = index === activeIndex
              const CapIcon = Icons[capability.icon] || Icons.Sparkles
              
              return (
                <motion.button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-full text-left p-4 sm:p-6 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 shadow-lg' 
                      : 'bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${capability.color || 'from-blue-500 to-purple-500'} p-[1px] flex-shrink-0`}>
                      <div className="w-full h-full bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center">
                        <CapIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-1 ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                        {capability.title}
                      </h3>
                      <p className={`text-sm ${isActive ? 'text-slate-700 dark:text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                        {capability.description}
                      </p>
                      {isActive && capability.metric && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mt-3 flex items-center gap-2"
                        >
                          <span className={`text-2xl font-bold bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}>
                            {capability.metric.value}
                          </span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {capability.metric.label}
                          </span>
                        </motion.div>
                      )}
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator"
                        className={`w-1 h-full bg-gradient-to-b ${gradientColors} rounded-full`}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Right side - Active capability showcase */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 sm:p-10 shadow-xl"
              >
                {/* Icon showcase */}
                <div className="mb-8 flex justify-center">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className={`relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br ${gradientColors} p-[2px]`}
                  >
                    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center">
                      <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-slate-900 dark:text-white" strokeWidth={1.5} />
                    </div>
                  </motion.div>
                </div>

                {/* Title and description */}
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-slate-900 dark:text-white">
                  {activeCapability.title}
                </h3>
                <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
                  {activeCapability.description}
                </p>

                {/* Features list */}
                {activeCapability.features && (
                  <div className="space-y-3">
                    {activeCapability.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradientColors}`} />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Progress indicator */}
                <div className="mt-8 flex justify-center gap-2">
                  {capabilities.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveIndex(idx)
                        setIsAutoPlaying(false)
                      }}
                      className="group"
                    >
                      <div
                        className={`h-1 transition-all duration-300 ${
                          idx === activeIndex 
                            ? 'w-8 bg-gradient-to-r ' + gradientColors 
                            : 'w-2 bg-slate-300 dark:bg-slate-600 group-hover:bg-slate-400 dark:group-hover:bg-slate-500'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Auto-play toggle */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
          >
            {isAutoPlaying ? (
              <Icons.PauseCircle className="w-5 h-5" />
            ) : (
              <Icons.PlayCircle className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
