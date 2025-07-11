'use client'

import { motion } from 'framer-motion'
import HeroIntroduction from './hero-introduction'
import CoreArchitecture from './core-architecture'

const ModularFrameworkSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Introduction - Sets the stage */}
        <HeroIntroduction />
        
        {/* Core Architecture Visualization - Shows the central core concept */}
        <CoreArchitecture />
      </div>
    </section>
  )
}

export default ModularFrameworkSection
