"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export default function AgentSolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  // All skills in a flat structure for the DNA helix visualization
  const allSkills = [
    // Sales & Growth
    { id: 1, name: "Prospect Hunter", category: "sales", color: "#06b6d4", desc: "Intelligent lead generation that fills your pipeline" },
    { id: 2, name: "Schedule Coordinator", category: "sales", color: "#3b82f6", desc: "Books qualified meetings directly into calendars" },
    { id: 3, name: "Smart Outreach Dialer", category: "sales", color: "#0ea5e9", desc: "AI-powered calls with real-time transcription" },
    { id: 4, name: "Visibility & Trust Manager", category: "sales", color: "#0891b2", desc: "SEO optimization and reputation management" },
    // Operations & Management
    { id: 5, name: "Workflow Navigator", category: "ops", color: "#a855f7", desc: "Intelligent project management and task coordination" },
    { id: 6, name: "Finance Flow Manager", category: "ops", color: "#d946ef", desc: "Transaction processing and financial operations" },
    { id: 7, name: "Talent Welcome Suite", category: "ops", color: "#c026d3", desc: "Automated employee onboarding workflows" },
    { id: 8, name: "Regulatory Risk Guard", category: "ops", color: "#9333ea", desc: "Compliance monitoring and management" },
    // Support & Intelligence
    { id: 9, name: "Support Concierge", category: "support", color: "#ec4899", desc: "24/7 intelligent customer support automation" },
    { id: 10, name: "Insight Intelligence", category: "support", color: "#f43f5e", desc: "Advanced analytics and reporting capabilities" },
    { id: 11, name: "Talent Scout Engine", category: "support", color: "#e11d48", desc: "Recruitment and hiring automation" },
    { id: 12, name: "Legal Logic Hub", category: "support", color: "#be123c", desc: "Document generation and contract management" },
  ]

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-white dark:bg-slate-950"
      onMouseMove={handleMouseMove}
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30 dark:opacity-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-purple-100 to-pink-100 dark:from-cyan-950 dark:via-purple-950 dark:to-pink-950" />
      </motion.div>

      <div ref={containerRef} className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-slate-900 dark:text-white">Equip Your Agent with Skills from the </span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, ease: "linear", repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              NovaCore Suite
            </motion.span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            NovaGent delivers a single, sophisticated AI agent equipped with any combination of Agent Skills you need. 
            These aren't simple task automators; this is a comprehensive AI system.
          </p>
        </motion.div>

        {/* 3D DNA-like Skills Visualization */}
        <div className="relative h-[600px] md:h-[700px] mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Central Core */}
            <motion.div 
              className="absolute w-2 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-fuchsia-500 rounded-full"
              style={{
                rotateX: mouseYSpring,
                rotateY: mouseXSpring,
              }}
            />

            {/* Orbiting Skills */}
            {allSkills.map((skill, index) => {
              const angle = (index / allSkills.length) * Math.PI * 2
              const helixOffset = index * 50
              const radius = 150 + Math.sin(scrollYProgress.get() * Math.PI * 2 + index) * 50

              return (
                <motion.div
                  key={skill.id}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1,
                    x: Math.cos(angle) * radius,
                    y: helixOffset - 300,
                  } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  onMouseEnter={() => setSelectedSkill(skill.name)}
                  onMouseLeave={() => setSelectedSkill(null)}
                >
                  {/* Connecting Line */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 h-[1px] origin-left"
                    style={{
                      width: radius,
                      background: `linear-gradient(to right, ${skill.color}40, transparent)`,
                      rotate: angle * (180 / Math.PI) + 180,
                    }}
                  />

                  {/* Skill Node */}
                  <motion.div
                    className="relative group cursor-pointer"
                    animate={{
                      rotate: scrollYProgress.get() * 360,
                    }}
                  >
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 rounded-full blur-xl"
                      style={{ backgroundColor: skill.color, opacity: 0.3 }}
                    />
                    
                    {/* Node */}
                    <div 
                      className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2"
                      style={{ 
                        backgroundColor: `${skill.color}20`,
                        borderColor: skill.color,
                      }}
                    >
                      <span className="text-2xl md:text-3xl font-bold text-white mix-blend-overlay">
                        {skill.name.charAt(0)}
                      </span>
                    </div>

                    {/* Tooltip */}
                    {selectedSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800 z-50"
                      >
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{skill.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{skill.desc}</p>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Category Labels */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="absolute top-10 left-10 text-cyan-600 dark:text-cyan-400 font-semibold"
            >
              Sales & Growth
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="absolute top-1/2 right-10 text-purple-600 dark:text-purple-400 font-semibold"
            >
              Operations & Management
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="absolute bottom-10 left-10 text-pink-600 dark:text-pink-400 font-semibold"
            >
              Support & Intelligence
            </motion.div>
          </div>
        </div>

        {/* Interactive Instructions */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : {}}
          transition={{ delay: 1.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Hover over skills to explore ? Move your cursor to rotate the view
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="mb-6">
            <motion.span 
              className="text-slate-500 dark:text-slate-400 text-sm font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              + 2 additional specialized skills for industry-specific needs
            </motion.span>
          </div>
          
          <motion.div 
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              className="relative h-12 px-8 text-base font-semibold bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-gray-100 text-white dark:text-slate-900 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              <Link href="/capabilities">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Configure Your Agent
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
