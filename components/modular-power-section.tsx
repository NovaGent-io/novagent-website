'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronRight, Plus, Sparkles } from 'lucide-react'
import { useRef, useState } from 'react'

const ModularPowerSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const skills = [
    { name: 'Lead Generation', color: 'from-blue-400 to-cyan-400', icon: '?' },
    { name: 'Data Analytics', color: 'from-purple-400 to-pink-400', icon: '?' },
    { name: 'Customer Support', color: 'from-green-400 to-emerald-400', icon: '?' },
    { name: 'Financial Operations', color: 'from-orange-400 to-red-400', icon: '?' },
    { name: 'SEO & Reputation', color: 'from-indigo-400 to-purple-400', icon: '?' },
    { name: 'Appointment Setting', color: 'from-pink-400 to-rose-400', icon: '?' }
  ]

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </motion.div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Enhanced text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 
                         rounded-full text-sm text-purple-400 mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span>Modular Intelligence Framework</span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Beyond Monolithic</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Tools
                </span>
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-2xl leading-relaxed font-light">
                  One intelligent core. Unlimited potential.
                </p>
                
                <p className="text-lg opacity-80 leading-relaxed">
                  Build your perfect AI agent by combining specialized modules. 
                  Scale up or down instantly. Pay only for what you use.
                </p>
                
                {/* Feature highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-sm text-gray-400">Real-time scaling</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-sm text-gray-400">Zero downtime</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span className="text-sm text-gray-400">Pay-per-use</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-pink-400 rounded-full" />
                    <span className="text-sm text-gray-400">Always updated</span>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-10"
              >
                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 
                           text-white border-0 px-8 py-6 text-base font-medium shadow-lg 
                           shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                >
                  <Link href="/solutions/ai-agent-suite" className="flex items-center gap-2">
                    Explore Agent Skills
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <p className="text-sm text-gray-500 mt-4 flex items-center gap-1">
                  <Plus className="w-3 h-3" />
                  8 additional specialized skills available
                </p>
              </motion.div>
            </motion.div>

            {/* Right side - Enhanced visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-80 h-80">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
                
                {/* Rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <svg className="w-full h-full" viewBox="0 0 320 320">
                    <circle
                      cx="160"
                      cy="160"
                      r="140"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      strokeDasharray="4 6"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* Orbiting skill modules */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {skills.map((skill, index) => {
                    const angle = (index * 60) - 90 // -90 to start from top
                    const radius = 140 // Match the circle radius
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="absolute"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `
                            translate(-50%, -50%) 
                            rotate(${angle}deg) 
                            translateY(-${radius}px) 
                            rotate(-${angle}deg)
                          `
                        }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} 
                                     shadow-lg cursor-pointer flex items-center justify-center
                                     ${hoveredSkill === skill.name ? 'z-20' : 'z-10'}`}
                        >
                          <span className="text-lg">{skill.icon}</span>
                          
                          {/* Skill label on hover */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ 
                              opacity: hoveredSkill === skill.name ? 1 : 0,
                              y: hoveredSkill === skill.name ? 0 : 10
                            }}
                            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                                     bg-slate-800 text-white text-xs px-3 py-1 rounded-lg shadow-xl"
                          >
                            {skill.name}
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </motion.div>

                {/* Central AI Core - Fixed positioning */}
                <div className="absolute inset-0 flex items-center justify-center z-30">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative w-32 h-32 bg-gradient-to-br from-slate-800 to-slate-900 
                                  rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden">
                      {/* Animated gradient background */}
                      <motion.div
                        animate={{ 
                          background: [
                            'radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)'
                          ]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute inset-0"
                      />
                      
                      <div className="relative h-full flex flex-col items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-12 h-12 mb-2"
                        >
                          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg 
                                        shadow-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-white/20 rounded" />
                          </div>
                        </motion.div>
                        <p className="text-xs text-gray-400 font-medium">AI Core</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Connection lines */}
                {hoveredSkill && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-25">
                    {skills.map((skill, index) => {
                      if (skill.name !== hoveredSkill) return null
                      const angle = (index * 360) / skills.length
                      const x = 160 + Math.cos(angle * Math.PI / 180) * 120
                      const y = 160 + Math.sin(angle * Math.PI / 180) * 120
                      
                      return (
                        <motion.line
                          key={`line-${skill.name}`}
                          x1="160"
                          y1="160"
                          x2={x}
                          y2={y}
                          stroke="url(#lineGradient)"
                          strokeWidth="2"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          exit={{ pathLength: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )
                    })}
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ModularPowerSection
