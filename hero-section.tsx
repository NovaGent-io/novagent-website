"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import HexagonGrid from "@/components/backgrounds/hexagon-grid"
import FloatingHexagons from "@/components/backgrounds/floating-hexagons"
import "@/styles/hexagon-pattern.css"

export default function HeroSection({ id }: { id?: string }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section 
      ref={containerRef}
      id={id} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Background with Hexagon Grid */}
      <div className="absolute inset-0 z-0 -top-4">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-slate-950' 
            : 'bg-gradient-to-b from-slate-50 to-white'
        }`} />
        
        {/* Top edge overlay to ensure no gap */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black to-transparent" />
        
        {/* Hexagon Grid Background */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 hexagon-grid-container"
        >
          <HexagonGrid theme={theme as 'dark' | 'light'} />
        </motion.div>
        
        {/* Hexagon Pattern Overlay */}
        <div className={`hexagon-pattern ${theme === 'dark' ? 'dark' : ''}`} />
        
        {/* Additional gradient overlay for depth */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-b ${
            theme === 'dark'
              ? 'from-transparent via-slate-950/50 to-slate-950'
              : 'from-transparent via-white/30 to-white'
          }`} />
          <div className={`absolute inset-0 bg-gradient-to-r ${
            theme === 'dark'
              ? 'from-purple-900/10 via-transparent to-cyan-900/10'
              : 'from-purple-200/10 via-transparent to-cyan-200/10'
          }`} />
        </div>

        {/* Floating Hexagon Elements */}
        <FloatingHexagons theme={theme as 'dark' | 'light'} />
        
        {/* Subtle Glow Effects */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: `${30 + i * 20}%`,
                y: `${20 + i * 25}%`,
              }}
              animate={{
                x: [`${30 + i * 20}%`, `${40 + i * 20}%`, `${30 + i * 20}%`],
                y: [`${20 + i * 25}%`, `${30 + i * 25}%`, `${20 + i * 25}%`],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className={`w-64 h-64 rounded-full blur-3xl ${
                i === 0
                  ? theme === 'dark' 
                    ? 'bg-purple-600/15' 
                    : 'bg-purple-400/10'
                  : i === 1
                  ? theme === 'dark'
                    ? 'bg-cyan-600/15'
                    : 'bg-cyan-400/10'
                  : theme === 'dark'
                    ? 'bg-pink-600/15'
                    : 'bg-pink-400/10'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <div className={`absolute inset-0 blur-xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30'
                  : 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20'
              }`} />
              <div className={`relative inline-flex items-center rounded-full px-6 py-2 text-sm font-medium backdrop-blur-md ${
                theme === 'dark'
                  ? 'bg-slate-900/80 text-white border border-slate-800'
                  : 'bg-white/80 text-slate-900 border border-slate-200 shadow-lg'
              }`}>
                <div className="relative flex items-center">
                  <span className="absolute inline-flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="ml-5">Managed AI for Business Outcomes</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Split Text Design */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-normal leading-tight">
                <span className={`block ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  One
                </span>
                <span className="block bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-2">
                  Agent.
                </span>
                <span className={`block ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Infinite
                </span>
                <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Capabilities.
                </span>
                <span className={`block ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Expertly
                </span>
                <span className="block bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent pb-2">
                  Managed.
                </span>
              </h1>
            </motion.div>

            {/* Right Side - Description & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <p className={`text-xl ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                NovaGent provides a single, powerful AI agent tailored to your exact business needs. 
                Configure its skills, monitor its performance on our transparent platform, 
                and let our experts handle the rest.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                {['14+ Agent Skills', 'Real-time Analytics', 'Expert Support'].map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-slate-800/50 text-slate-300 border border-slate-700'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/contact">
                    <span className="relative z-10">Book a Discovery Call</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={`group relative overflow-hidden ${
                    theme === 'dark'
                      ? 'border-slate-700 text-white hover:border-purple-500'
                      : 'border-slate-300 text-slate-900 hover:border-purple-400'
                  }`}
                >
                  <Link href="/capabilities">
                    <span className="relative z-10">Explore Agent Skills</span>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10'
                        : 'bg-gradient-to-r from-purple-50 to-pink-50'
                    }`} />
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className={`flex items-center gap-6 text-sm ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  SOC 2 Compliant
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Enterprise Ready
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 rounded-full border-2 ${
            theme === 'dark' ? 'border-slate-600' : 'border-slate-300'
          } flex justify-center pt-2`}
        >
          <div className={`w-1 h-2 rounded-full ${
            theme === 'dark' ? 'bg-slate-400' : 'bg-slate-500'
          }`} />
        </motion.div>
      </motion.div>
    </section>
  )
}
