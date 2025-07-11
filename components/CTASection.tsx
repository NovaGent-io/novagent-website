'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  heading: string
  subheading?: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
}

export default function CTASection({
  heading,
  subheading,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className = ''
}: CTASectionProps) {
  return (
    <section className={`relative py-20 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {heading}
          </h2>
          
          {subheading && (
            <p className="text-lg text-slate-400 mb-8">
              {subheading}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButtonHref}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            {secondaryButtonText && secondaryButtonHref && (
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-slate-700 text-white font-medium hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
