'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Users, Calendar } from 'lucide-react'

const FinalCTASection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
            Ready to Experience the Future of AI?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0">
            Join the companies already transforming their operations with the NovaGent 
            Platform. Experience the power of managed AI with complete transparency and 
            control.
          </p>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-500 hover:from-fuchsia-600 hover:via-purple-700 hover:to-cyan-600 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 text-base sm:text-lg"
              asChild
            >
              <Link href="/contact">
                <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="whitespace-nowrap">Schedule Platform Demo</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg transition-all duration-300 text-base sm:text-lg"
              asChild
            >
              <Link href="/pricing">
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="whitespace-nowrap">Build Your Solution</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTASection
