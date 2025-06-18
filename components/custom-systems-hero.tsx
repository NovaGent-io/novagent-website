"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const CustomSystemsHero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center p-4">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <motion.div
          animate={{
            backgroundImage: [
              "radial-gradient(ellipse at 70% 30%, #581c87 0%, transparent 40%)", // Dark Purple
              "radial-gradient(ellipse at 30% 70%, #0e7490 0%, transparent 40%)", // Cyan
              "radial-gradient(ellipse at 50% 50%, #7e22ce 0%, transparent 35%)", // Magenta/Purple
              "radial-gradient(ellipse at 70% 30%, #581c87 0%, transparent 40%)",
            ],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
          }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-grid-slate-800/30 [mask-image:linear-gradient(to_bottom,white_10%,transparent_80%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 leading-tight pb-2 mb-1"
        >
          Beyond Blueprints: Engineering Your Custom AI Agentic System.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-300"
        >
          When pre-defined agents are not enough, NovaGent partners with you to architect, build, and manage fully
          custom, enterprise-grade AI systems tailored to your unique operational landscape and mission-critical
          objectives.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8, type: "spring", stiffness: 100 }}
          className="mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-slate-950 hover:bg-slate-200 rounded-lg font-semibold px-10 py-7 text-lg shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105"
          >
            <Link href="/contact">Begin a Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default CustomSystemsHero
