'use client'

import { motion, useAnimationControls } from 'framer-motion'
import * as Icons from 'lucide-react'
import { useState, useEffect } from 'react'

interface Capability {
  title: string
  description: string
  icon: keyof typeof Icons
  color?: string
  stats?: { label: string; value: string }[]
}

interface EnhancedCapabilitiesSectionProps {
  heading: string
  subheading?: string
  capabilities: Capability[]
  className?: string
}

export default function EnhancedCapabilitiesSection({
  heading,
  subheading,
  capabilities,
  className = ''
}: EnhancedCapabilitiesSectionProps) {
  const [selectedCapability, setSelectedCapability] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className={`relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-950 overflow-hidden ${className}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = Icons[capability.icon] || Icons.Sparkles
            const isSelected = selectedCapability === index
            const gradientColors = capability.color || 'from-blue-500 to-purple-500'
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => !isMobile && setSelectedCapability(index)}
                onHoverEnd={() => !isMobile && setSelectedCapability(null)}
                onClick={() => isMobile && setSelectedCapability(isSelected ? null : index)}
                className="relative group cursor-pointer"
              >
                <motion.div
                  animate={{
                    scale: isSelected ? 1.02 : 1,
                    y: isSelected ? -4 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative h-full"
                >
                  {/* Card background with gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Card content */}
                  <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                    {/* Icon with animated background */}
                    <div className="mb-6">
                      <motion.div
                        animate={{
                          rotate: isSelected ? 360 : 0,
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${gradientColors} p-[1px] group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="w-full h-full bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center">
                          <Icon className={`w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br ${gradientColors} bg-clip-text text-transparent`} strokeWidth={2} />
                        </div>
                      </motion.div>
                    </div>

                    {/* Title and description */}
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
                      {capability.title}
                    </h3>
                    <p className="text-base text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                      {capability.description}
                    </p>

                    {/* Stats or additional info */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isSelected ? 'auto' : 0,
                        opacity: isSelected ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {capability.stats && (
                        <div className="grid grid-cols-2 gap-4 pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
                          {capability.stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <div className={`text-2xl font-bold bg-gradient-to-br ${gradientColors} bg-clip-text text-transparent`}>
                                {stat.value}
                              </div>
                              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>

                    {/* Interactive indicator */}
                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                      <motion.div
                        animate={{
                          scale: isSelected ? [1, 1.2, 1] : 1,
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: isSelected ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                        className={`w-2 h-2 rounded-full bg-gradient-to-br ${gradientColors}`}
                      />
                    </div>
                  </div>

                  {/* Hover/selected glow effect */}
                  <motion.div
                    animate={{
                      opacity: isSelected ? 1 : 0,
                      scale: isSelected ? 1.05 : 0.95
                    }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 bg-gradient-to-br ${gradientColors} rounded-2xl blur-2xl opacity-20 -z-10`}
                  />
                </motion.div>

                {/* Border gradient */}
                <div className="absolute inset-[0] rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 -z-10" />
                <motion.div
                  animate={{
                    opacity: isSelected ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-[0] rounded-2xl bg-gradient-to-br ${gradientColors} -z-10`}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Mobile instruction */}
        {isMobile && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8"
          >
            Tap on cards to explore more details
          </motion.p>
        )}
      </div>
    </section>
  )
}
