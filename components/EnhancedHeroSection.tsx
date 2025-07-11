'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface EnhancedHeroSectionProps {
  headingText: string
  subheadingText: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
  stats?: Array<{
    value: string
    label: string
  }>
}

export default function EnhancedHeroSection({
  headingText,
  subheadingText,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className = '',
  stats = []
}: EnhancedHeroSectionProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([])

  useEffect(() => {
    // Generate particles on mount
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 10
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${className}`}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-1">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s ${particle.delay}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      {/* Animated Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-[100px]"
          style={{ animation: 'pulse-slow 4s ease-in-out infinite' }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"
          style={{ animation: 'pulse-slow 4s ease-in-out infinite', animationDelay: '2s' }}
        />
        
        {/* Rotating Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10">
          <div className="absolute inset-0 border-2 border-transparent border-t-cyan-400 rounded-full" 
               style={{ animation: 'spin-slow 20s linear infinite' }} />
          <div className="absolute inset-[20px] border-2 border-transparent border-t-purple-600 rounded-full" 
               style={{ animation: 'spin-slow 15s linear infinite reverse' }} />
          <div className="absolute inset-[40px] border-2 border-transparent border-t-cyan-400 rounded-full" 
               style={{ animation: 'spin-slow 10s linear infinite' }} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-full mb-6"
            style={{ animation: 'badge-glow 2s ease-in-out infinite' }}
          >
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-400">AI-Powered Lead Generation</span>
          </motion.div>

          {/* Title with Gradient Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent" 
                  style={{ backgroundSize: '200% 200%', animation: 'gradient-shift 3s ease-in-out infinite' }}>
              {headingText}
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
          >
            {subheadingText}
          </motion.p>

          {/* Stats Grid */}
          {stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {/* CTA Buttons with Shine Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={primaryButtonHref}
              className="relative inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity overflow-hidden group"
            >
              <span className="relative z-10">{primaryButtonText}</span>
              <ArrowRight className="ml-2 w-5 h-5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </Link>
            
            {secondaryButtonText && secondaryButtonHref && (
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-slate-700 text-white font-medium hover:border-purple-500 hover:bg-slate-800/50 transition-all duration-300"
              >
                {secondaryButtonText}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(0); opacity: 0; }
          10% { transform: translate(100px, -100px) scale(1); opacity: 1; }
          90% { transform: translate(-100px, 100px) scale(1); opacity: 1; }
        }

        @keyframes badge-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
          50% { box-shadow: 0 0 20px 5px rgba(56, 189, 248, 0.3); }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </section>
  )
}
