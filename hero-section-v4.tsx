"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useTheme } from "next-themes"

export default function HeroSection({ id }: { id?: string }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const x = (e.clientX - centerX) / (rect.width / 2)
      const y = (e.clientY - centerY) / (rect.height / 2)
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const rotateX = useTransform(springY, [-1, 1], [5, -5])
  const rotateY = useTransform(springX, [-1, 1], [-5, 5])

  if (!mounted) return null

  const skillPreviews = [
    { name: 'Lead Generation', icon: '?', color: 'from-blue-500 to-cyan-500' },
    { name: 'Data Analytics', icon: '?', color: 'from-purple-500 to-pink-500' },
    { name: 'Customer Support', icon: '?', color: 'from-green-500 to-emerald-500' },
    { name: 'Automation', icon: '?', color: 'from-orange-500 to-red-500' },
  ]

  return (
    <section 
      ref={containerRef}
      id={id} 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        theme === 'dark' ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-0 w-1/2 h-1/2 ${
            theme === 'dark'
              ? 'bg-gradient-radial from-purple-900/20 to-transparent'
              : 'bg-gradient-radial from-purple-200/30 to-transparent'
          }`} />
          <div className={`absolute bottom-0 right-0 w-1/2 h-1/2 ${
            theme === 'dark'
              ? 'bg-gradient-radial from-cyan-900/20 to-transparent'
              : 'bg-gradient-radial from-cyan-200/30 to-transparent'
          }`} />
        </div>

        {/* Animated Dots Pattern */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                theme === 'dark' ? 'bg-white/10' : 'bg-slate-900/5'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Central Hero Card */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000,
            }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className={`absolute inset-0 blur-3xl opacity-20 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500'
                : 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
            }`} />

            {/* Main Card */}
            <div className={`relative rounded-3xl p-12 backdrop-blur-sm ${
              theme === 'dark'
                ? 'bg-slate-900/50 border border-slate-800'
                : 'bg-white/80 border border-slate-200 shadow-2xl'
            }`}>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-8"
              >
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30'
                    : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900 border border-purple-200'
                }`}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Managed AI for Business Outcomes
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-6"
              >
                <span className={`block text-5xl md:text-6xl lg:text-7xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  One Agent.
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold mt-2">
                  <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Infinite Capabilities.
                  </span>
                </span>
                <span className={`block text-5xl md:text-6xl lg:text-7xl font-bold mt-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Expertly Managed.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                NovaGent provides a single, powerful AI agent tailored to your exact business needs. 
                Configure its skills, monitor its performance on our transparent platform, 
                and let our experts handle the rest.
              </motion.p>

              {/* Interactive Skill Preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
              >
                {skillPreviews.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`relative p-4 rounded-xl text-center cursor-pointer group ${
                      theme === 'dark'
                        ? 'bg-slate-800/50 hover:bg-slate-800'
                        : 'bg-slate-50 hover:bg-slate-100'
                    } transition-all duration-200`}
                  >
                    <div className={`text-3xl mb-2 group-hover:scale-110 transition-transform duration-200`}>
                      {skill.icon}
                    </div>
                    <p className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {skill.name}
                    </p>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-200`} />
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="relative group overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center gap-2">
                      Book a Discovery Call
                      <motion.span
                        className="inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ?
                      </motion.span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={`group ${
                    theme === 'dark'
                      ? 'border-slate-700 text-white hover:bg-white/5 hover:border-purple-500'
                      : 'border-slate-300 text-slate-900 hover:bg-purple-50 hover:border-purple-400'
                  } transition-all duration-300`}
                >
                  <Link href="/capabilities">
                    <span className="flex items-center gap-2">
                      Explore Agent Skills
                      <motion.span
                        className="inline-block"
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        ?
                      </motion.span>
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: '14+', label: 'Agent Skills' },
              { value: '24/7', label: 'AI Operations' },
              { value: '5x', label: 'ROI Average' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
