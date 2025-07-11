'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

interface Capability {
  title: string
  description: string
  icon: keyof typeof Icons
}

interface CapabilitiesSectionProps {
  heading: string
  subheading?: string
  capabilities: Capability[]
  className?: string
}

export default function CapabilitiesSection({
  heading,
  subheading,
  capabilities,
  className = ''
}: CapabilitiesSectionProps) {
  return (
    <section className={`relative py-20 bg-slate-900/50 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {heading}
          </h2>
          {subheading && (
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              {subheading}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = Icons[capability.icon] || Icons.Sparkles
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative z-10 p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                  <p className="text-sm text-slate-400">{capability.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
