"use client"

import { useEffect, useRef } from "react"

export default function ProblemSolutionSection() {
  const liquidBgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create floating liquid orbs animation
    const createFloatingOrb = (className: string, delay: number) => {
      if (liquidBgRef.current) {
        const orb = document.createElement('div')
        orb.className = `absolute rounded-full opacity-30 animate-float ${className}`
        orb.style.animationDelay = `${delay}s`
        orb.style.filter = 'blur(80px)'
        liquidBgRef.current.appendChild(orb)
      }
    }

    createFloatingOrb('w-[300px] h-[300px] bg-gradient-radial from-cyan-400/40 to-transparent top-[20%] left-[10%]', 0)
    createFloatingOrb('w-[400px] h-[400px] bg-gradient-radial from-purple-400/30 to-transparent top-[60%] right-[20%]', 8)
    createFloatingOrb('w-[250px] h-[250px] bg-gradient-radial from-pink-400/40 to-transparent bottom-[30%] left-[60%]', 16)

    return () => {
      if (liquidBgRef.current) {
        liquidBgRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Liquid Background Effects */}
      <div 
        ref={liquidBgRef}
        className="absolute -top-[200px] -left-[200px] -right-[200px] -bottom-[200px] pointer-events-none z-0"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-4 md:mb-6">
            Not Just a Service. Not Just a Tool.
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              NovaGent is a Platform.
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            Most companies either sell you a tool or offer you a service. We built something better ? a scalable, 
            intelligent platform that deploys and manages AI agents for any business need.
          </p>
        </div>

        {/* Comparison Chart */}
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 mb-8 md:mb-12 px-1 sm:px-4 md:px-8 gap-0 md:gap-4">
            <div className="text-xs md:text-lg font-semibold text-slate-600 uppercase tracking-wide opacity-0">
              Platform Features
            </div>
            <div className="text-xs md:text-lg font-semibold text-rose-400 uppercase tracking-tight md:tracking-wide text-center border-b-2 md:border-b-3 border-rose-300 pb-3 md:pb-6">
              <span className="block sm:hidden">TRAD.</span>
              <span className="hidden sm:block">Traditional</span>
            </div>
            <div className="text-xs md:text-lg font-semibold text-emerald-400 uppercase tracking-tight md:tracking-wide text-center border-b-2 md:border-b-3 border-emerald-300 pb-3 md:pb-6">
              <span className="block sm:hidden">NOVA</span>
              <span className="hidden sm:block">NovaGent</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-0">
            <div className="grid grid-cols-3 py-3 md:py-5 px-1 sm:px-4 md:px-8 border-b border-black/5 hover:bg-gradient-to-r hover:from-cyan-500/3 hover:via-transparent hover:to-cyan-500/3 transition-all duration-300 relative group gap-0 md:gap-4">
              <div className="absolute right-1/3 top-0 bottom-0 w-px bg-black/8"></div>
              <div className="font-medium text-gray-700 flex items-center text-xs md:text-base pr-1">System Integration</div>
              <div className="text-center flex items-center justify-center">
                <span className="text-red-500 font-bold text-lg">?</span>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-green-500 font-bold text-lg">?</span>
              </div>
            </div>

            <div className="grid grid-cols-3 py-3 md:py-5 px-1 sm:px-4 md:px-8 border-b border-black/5 hover:bg-gradient-to-r hover:from-cyan-500/3 hover:via-transparent hover:to-cyan-500/3 transition-all duration-300 relative group gap-0 md:gap-4">
              <div className="absolute right-1/3 top-0 bottom-0 w-px bg-black/8"></div>
              <div className="font-medium text-gray-700 flex items-center text-xs md:text-base pr-1">Expert Management</div>
              <div className="text-center flex items-center justify-center">
                <span className="text-red-500 font-bold text-lg">?</span>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-green-500 font-bold text-lg">?</span>
              </div>
            </div>

            <div className="grid grid-cols-3 py-3 md:py-5 px-1 sm:px-4 md:px-8 border-b border-black/5 hover:bg-gradient-to-r hover:from-cyan-500/3 hover:via-transparent hover:to-cyan-500/3 transition-all duration-300 relative group gap-0 md:gap-4">
              <div className="absolute right-1/3 top-0 bottom-0 w-px bg-black/8"></div>
              <div className="font-medium text-gray-700 flex items-center text-xs md:text-base pr-1">Setup Complexity</div>
              <div className="text-center flex items-center justify-center">
                <span className="text-slate-500 text-xs md:text-sm font-medium">High</span>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-slate-500 text-xs md:text-sm font-medium">None</span>
              </div>
            </div>

            <div className="grid grid-cols-3 py-3 md:py-5 px-1 sm:px-4 md:px-8 border-b border-black/5 hover:bg-gradient-to-r hover:from-cyan-500/3 hover:via-transparent hover:to-cyan-500/3 transition-all duration-300 relative group gap-0 md:gap-4">
              <div className="absolute right-1/3 top-0 bottom-0 w-px bg-black/8"></div>
              <div className="font-medium text-gray-700 flex items-center text-xs md:text-base pr-1">ROI Visibility</div>
              <div className="text-center flex items-center justify-center">
                <span className="text-red-500 font-bold text-lg">?</span>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-green-500 font-bold text-lg">?</span>
              </div>
            </div>

            <div className="grid grid-cols-3 py-3 md:py-5 px-1 sm:px-4 md:px-8 border-b border-black/5 hover:bg-gradient-to-r hover:from-cyan-500/3 hover:via-transparent hover:to-cyan-500/3 transition-all duration-300 relative group gap-0 md:gap-4">
              <div className="absolute right-1/3 top-0 bottom-0 w-px bg-black/8"></div>
              <div className="font-medium text-gray-700 flex items-center text-xs md:text-base pr-1">Maintenance Required</div>
              <div className="text-center flex items-center justify-center">
                <span className="text-green-500 font-bold text-lg">?</span>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-red-500 font-bold text-lg">?</span>
              </div>
            </div>

            <div className="grid grid-cols-3 py-3 md:py-5 px-1 sm:px-4 md:px-8 hover:bg-gradient-to-r hover:from-cyan-500/3 hover:via-transparent hover:to-cyan-500/3 transition-all duration-300 relative group gap-0 md:gap-4">
              <div className="absolute right-1/3 top-0 bottom-0 w-px bg-black/8"></div>
              <div className="font-medium text-gray-700 flex items-center text-xs md:text-base pr-1">Outcome Focused</div>
              <div className="text-center flex items-center justify-center">
                <span className="text-amber-500 font-bold text-lg">?</span>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-green-500 font-bold text-lg">?</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, -80px) scale(1.1); }
          50% { transform: translate(-120px, 100px) scale(0.9); }
          75% { transform: translate(-80px, -120px) scale(1.05); }
        }
        .animate-float {
          animation: float 25s ease-in-out infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        .border-b-3 {
          border-bottom-width: 3px;
        }
      `}</style>
    </section>
  )
}
