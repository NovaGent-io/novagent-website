"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export default function JMMissionHero() {
  const scrollToEthos = () => {
    const ethosSection = document.getElementById("jm-ethos")
    if (ethosSection) {
      ethosSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-cyan-900/30 to-pink-900/50 opacity-50 blur-3xl"></div>
        {/* You could add more sophisticated animated background elements here if desired */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8"
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
            Forge the Future.
          </span>
          <span className="block text-slate-300 mt-2 sm:mt-3 text-4xl sm:text-5xl md:text-6xl">Join NovaGent.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          We&apos;re not just building AI; we&apos;re architecting a new paradigm of automation. If you&apos;re driven
          by impact and innovation, your journey starts here.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 px-10 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 text-base md:text-lg"
            onClick={scrollToEthos}
          >
            Discover Our Purpose <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
