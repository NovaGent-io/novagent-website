'use client'

import { motion } from 'framer-motion'

interface HowItWorksStep {
  title: string
  description: string
}

interface HowItWorksSectionProps {
  heading: string
  subheading?: string
  steps: HowItWorksStep[]
  className?: string
}

export default function HowItWorksSection({
  heading,
  subheading,
  steps,
  className = ''
}: HowItWorksSectionProps) {
  return (
    <section className={`relative py-20 ${className}`}>
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
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {subheading}
            </p>
          )}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
