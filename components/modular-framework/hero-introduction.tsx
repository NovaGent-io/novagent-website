'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Cpu } from 'lucide-react'

const HeroIntroduction = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={sectionRef} className="relative py-24 lg:py-32">
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 
                     rounded-full text-sm text-purple-400 mb-6"
          >
            <Cpu className="w-4 h-4" />
            <span>Modular Intelligence Framework</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Beyond the</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Monolithic Tool
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            A Modular Intelligence Framework
          </motion.p>

          {/* Key differentiator paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Standard software offers a single, rigid function. The NovaGent Agent is engineered on a 
              fundamentally different paradigm: <span className="text-white font-medium">a modular intelligence framework</span>.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Think of our agent as a <span className="text-purple-400 font-medium">central operational core</span>. 
              This core can be dynamically equipped with a library of specialized "Agent Skills"?from 
              Lead Generation to Financial Operations. Instead of a static, all-in-one application, you get 
              an <span className="text-blue-400 font-medium">adaptable platform</span> that is precision-engineered 
              for your specific business objectives.
            </p>
          </motion.div>
        </div>

        {/* Visual separator with animated line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-xs mx-auto mt-16"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroIntroduction
