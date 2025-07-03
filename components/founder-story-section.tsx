"use client"

import { motion } from "framer-motion"

const FounderStorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-100">
              Born from{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                Real-World Experience
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              <span className="text-cyan-400 font-semibold">Seasoned sales leaders</span> who witnessed the gap between
              AI's promise and its practical application.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="flex justify-center">
              <div className="relative max-w-3xl">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-fuchsia-500 rounded-full"></div>
                <blockquote className="text-lg md:text-xl text-slate-300 leading-relaxed italic pl-8">
                  "We saw brilliant teams bogged down by repetitive tasks, and powerful AI tools that remained out of
                  reach."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FounderStorySection
