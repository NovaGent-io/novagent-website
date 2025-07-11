"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useTheme } from "next-themes"

export default function HeroSection({ id }: { id?: string }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    setMounted(true)
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  if (!mounted) return null

  return (
    <section 
      id={id} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950' 
            : 'bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50'
        }`} />
        
        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className={`w-full h-full rounded-full blur-3xl ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
              : 'bg-gradient-to-r from-cyan-400/10 to-blue-400/10'
          }`} />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className={`w-full h-full rounded-full blur-3xl ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20'
              : 'bg-gradient-to-r from-purple-400/10 to-pink-400/10'
          }`} />
        </motion.div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(${
            theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'
          } 1px, transparent 1px), linear-gradient(90deg, ${
            theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'
          } 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm border ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-white'
                : 'bg-purple-50 border-purple-200 text-purple-900'
            }`}>
              <span className={`mr-2 inline-block h-2 w-2 rounded-full animate-pulse ${
                theme === 'dark' ? 'bg-green-400' : 'bg-green-600'
              }`}></span>
              Managed AI for Business Outcomes
            </div>
          </motion.div>

          {/* Main Heading with gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-8"
          >
            <span className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              One Agent.
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mt-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Infinite Capabilities.
            </span>
            <span className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mt-2 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Expertly Managed.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`mx-auto mb-12 max-w-3xl text-center text-lg sm:text-xl ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            NovaGent provides a single, powerful AI agent tailored to your exact business needs. 
            Configure its skills, monitor its performance on our transparent platform, 
            and let our experts handle the rest.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
            >
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className={`h-14 px-8 text-base font-semibold transition-all duration-200 w-full sm:w-auto ${
                theme === 'dark'
                  ? 'border-slate-700 text-white hover:bg-white/10 hover:border-slate-600'
                  : 'border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400'
              }`}
            >
              <Link href="/capabilities">Explore Agent Skills</Link>
            </Button>
          </motion.div>

          {/* Floating skill cards preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-24 relative hidden lg:block"
          >
            {/* Skill card 1 */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute left-0 top-0 p-4 rounded-lg backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-white/5 border border-white/10'
                  : 'bg-white/70 border border-slate-200 shadow-lg'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Lead Generation</p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Active</p>
                </div>
              </div>
            </motion.div>

            {/* Skill card 2 */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className={`absolute right-0 top-0 p-4 rounded-lg backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-white/5 border border-white/10'
                  : 'bg-white/70 border border-slate-200 shadow-lg'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Appointment Setting</p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Active</p>
                </div>
              </div>
            </motion.div>

            {/* Skill card 3 */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className={`absolute left-1/2 -translate-x-1/2 bottom-0 p-4 rounded-lg backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-white/5 border border-white/10'
                  : 'bg-white/70 border border-slate-200 shadow-lg'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Data Analytics</p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Available</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${
        theme === 'dark'
          ? 'from-background to-transparent'
          : 'from-background to-transparent'
      }`} />
    </section>
  )
}
