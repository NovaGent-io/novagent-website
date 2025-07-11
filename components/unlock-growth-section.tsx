"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { 
  Lightbulb, 
  Cog, 
  Rocket, 
  RefreshCw,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Brain,
  Layers,
  Zap,
  TrendingUp
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Strategic Consultation & Discovery",
    description: "We begin with a deep understanding of your business goals, challenges, and existing infrastructure.",
    icon: Brain,
    color: "from-cyan-500 to-blue-500",
    darkColor: "from-cyan-400 to-blue-400",
    bgPattern: "radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)"
  },
  {
    number: "02",
    title: "Custom Architecture & Design",
    description: "Our expert team architects a bespoke AI agentic system tailored to your exact requirements.",
    icon: Layers,
    color: "from-blue-500 to-purple-500",
    darkColor: "from-blue-400 to-purple-400",
    bgPattern: "radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)"
  },
  {
    number: "03",
    title: "Agile Development & Integration",
    description: "We build and integrate your custom solution with a focus on efficiency and seamless deployment.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    darkColor: "from-purple-400 to-pink-400",
    bgPattern: "radial-gradient(circle at 50% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)"
  },
  {
    number: "04",
    title: "Ongoing Management & Optimization",
    description: "We provide continuous monitoring, maintenance, and optimization to ensure peak performance and evolving value.",
    icon: TrendingUp,
    color: "from-pink-500 to-rose-500",
    darkColor: "from-pink-400 to-rose-400",
    bgPattern: "radial-gradient(circle at 50% 70%, rgba(244, 63, 94, 0.15) 0%, transparent 50%)"
  }
]

export default function UnlockGrowthSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className={`py-16 sm:py-20 md:py-32 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950' : 'bg-gradient-to-b from-slate-50 to-white'
    }`}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className={`absolute inset-0 ${
          theme === 'dark' ? 'opacity-5' : 'opacity-[0.02]'
        }`}>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${theme === 'dark' ? 'rgba(139, 92, 246, 0.5)' : 'rgba(139, 92, 246, 0.3)'} 1px, transparent 1px),
                               linear-gradient(90deg, ${theme === 'dark' ? 'rgba(139, 92, 246, 0.5)' : 'rgba(139, 92, 246, 0.3)'} 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-10 right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'opacity-20' : 'opacity-10'
          }`}
          style={{
            background: theme === 'dark' 
              ? 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)'
          }}
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute bottom-10 left-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'opacity-20' : 'opacity-10'
          }`}
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`inline-flex items-center rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium backdrop-blur-sm transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20' 
                  : 'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100'
              }`}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Custom AI Solutions
            </motion.div>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            <span className="block">Unlock Exponential Growth</span>
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-300% animate-gradient">
              with Custom AI Architectures.
            </span>
          </h2>
          
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            For organizations with unique operational complexities and ambitious growth targets, 
            our expert team partners with you to architect intelligent automation that solves 
            your most pressing challenges and unlocks new levels of efficiency and innovation.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-16 sm:mb-20 px-4 sm:px-0"
        >
          <Button
            asChild
            size="lg"
            className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 text-sm sm:text-base"
          >
            <Link href="/solutions/custom-agentic-systems">
              Explore Custom Solutions
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className={`group transition-all duration-300 text-sm sm:text-base ${
              theme === 'dark'
                ? 'border-slate-700 text-white hover:bg-slate-800 hover:border-purple-500/50'
                : 'border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-purple-400'
            }`}
          >
            <Link href="/contact">
              Schedule Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Collaborative Process */}
        <div className="mt-12 sm:mt-16 md:mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Our Collaborative Process
          </motion.h3>

          {/* Process Steps - Mobile */}
          <div className="block lg:hidden space-y-4 sm:space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Gradient Border Container */}
                  <div className={`relative rounded-2xl bg-gradient-to-br ${
                    theme === 'dark' ? step.darkColor : step.color
                  } p-[2px]`}>
                    <div className={`rounded-2xl ${
                      theme === 'dark' ? 'bg-slate-900' : 'bg-white'
                    }`}>
                      <div className="p-4 sm:p-6">
                        <div className="flex items-start gap-4">
                          {/* Step Number - Large and Minimal */}
                          <div className="flex-shrink-0">
                            <span className={`text-4xl font-bold bg-gradient-to-br ${
                              theme === 'dark' ? step.darkColor : step.color
                            } bg-clip-text text-transparent opacity-20`}>
                              {step.number}
                            </span>
                          </div>
                          <div className="flex-1">
                            {/* Icon - Top Right Corner */}
                            <div className="absolute top-4 right-4">
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                                theme === 'dark' ? step.darkColor : step.color
                              } p-[1px]`}>
                                <div className={`w-full h-full rounded-xl ${
                                  theme === 'dark' ? 'bg-slate-900' : 'bg-white'
                                } flex items-center justify-center`}>
                                  <div className="relative w-full h-full flex items-center justify-center">
                                    {/* Background pattern */}
                                    <div 
                                      className="absolute inset-0 rounded-lg"
                                      style={{ background: step.bgPattern }}
                                    />
                                    {/* Icon with gradient stroke */}
                                    <svg className="w-6 h-6 relative z-10">
                                      <defs>
                                        <linearGradient id={`icon-gradient-mobile-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                          <stop offset="0%" stopColor={theme === 'dark' ? '#06b6d4' : '#0891b2'} />
                                          <stop offset="50%" stopColor={theme === 'dark' ? '#a855f7' : '#9333ea'} />
                                          <stop offset="100%" stopColor={theme === 'dark' ? '#ec4899' : '#db2777'} />
                                        </linearGradient>
                                      </defs>
                                      <g transform="translate(3, 3)">
                                        <Icon 
                                          className="w-6 h-6" 
                                          strokeWidth={2.5}
                                          stroke={`url(#icon-gradient-mobile-${index})`}
                                          fill="none"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Content */}
                            <h4 className={`text-lg sm:text-xl font-semibold mb-2 pr-14 ${
                              theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}>
                              {step.title}
                            </h4>
                            <p className={`text-sm sm:text-base leading-relaxed pr-14 ${
                              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                            }`}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Process Steps - Desktop */}
          <div className="hidden lg:grid grid-cols-4 gap-6 xl:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isHovered = hoveredStep === index
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      y: isHovered ? -8 : 0,
                      scale: isHovered ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    className="relative h-full"
                  >
                    {/* Gradient Border Container */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                      theme === 'dark' ? step.darkColor : step.color
                    } p-[2px]`}>
                      <div className={`h-full w-full rounded-2xl ${
                        theme === 'dark' ? 'bg-slate-900' : 'bg-white'
                      }`} />
                    </div>

                    {/* Card Content */}
                    <div className={`relative h-full p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 overflow-hidden`}>
                      {/* Icon with Modern Design - Top Right */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                          theme === 'dark' ? step.darkColor : step.color
                        } p-[1px]`}>
                          <div className={`w-full h-full rounded-2xl ${
                            theme === 'dark' ? 'bg-slate-900' : 'bg-white'
                          } flex items-center justify-center`}>
                            <div className="relative w-full h-full flex items-center justify-center">
                              {/* Background pattern */}
                              <div 
                                className="absolute inset-0 rounded-xl"
                                style={{ background: step.bgPattern }}
                              />
                              {/* Icon with gradient stroke */}
                              <svg className="w-7 h-7 relative z-10">
                                <defs>
                                  <linearGradient id={`icon-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor={theme === 'dark' ? '#06b6d4' : '#0891b2'} />
                                    <stop offset="50%" stopColor={theme === 'dark' ? '#a855f7' : '#9333ea'} />
                                    <stop offset="100%" stopColor={theme === 'dark' ? '#ec4899' : '#db2777'} />
                                  </linearGradient>
                                </defs>
                                <g transform="translate(3.5, 3.5)">
                                  <Icon 
                                    className="w-7 h-7" 
                                    strokeWidth={2.5}
                                    stroke={`url(#icon-gradient-${index})`}
                                    fill="none"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Background Gradient Effect */}
                      <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : ''
                      }`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${
                          theme === 'dark' ? step.darkColor : step.color
                        } opacity-5`} />
                      </div>

                      {/* Step Number - Minimal Design */}
                      <div className={`relative mb-3`}>
                        <span className={`text-5xl font-bold bg-gradient-to-br ${
                          theme === 'dark' ? step.darkColor : step.color
                        } bg-clip-text text-transparent opacity-20`}>
                          {step.number}
                        </span>
                      </div>

                      {/* Content with Better Typography */}
                      <div className="space-y-3 pr-16">
                        <h4 className={`text-xl font-semibold leading-tight ${
                          theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}>
                          {step.title}
                        </h4>
                        <p className={`text-sm leading-relaxed ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {step.description}
                        </p>
                      </div>


                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
          background-size: 300% 300%;
        }
        .bg-300\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  )
}
