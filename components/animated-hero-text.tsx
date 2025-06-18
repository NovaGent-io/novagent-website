"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

const AnimatedHeroText: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const dynamicTexts = ["Dedicated AI", "Smart Automation", "Intelligent Workforce", "AI Excellence"]

  useEffect(() => {
    setIsVisible(true)

    // Cycle through dynamic text
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % dynamicTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-xl lg:max-w-2xl relative z-20">
      {/* Badge */}
      <div
        className={`
        mb-6 inline-flex items-center rounded-full bg-black/5 px-4 py-1.5 
        text-sm font-medium text-purple-600 backdrop-blur-sm 
        dark:bg-white/10 dark:text-fuchsia-300
        transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
      >
        <Sparkles className="mr-2 h-4 w-4 text-purple-500 dark:text-fuchsia-400 animate-pulse" />
        NovaGent AI Agent Suite
      </div>

      {/* Main Heading */}
      <h1
        className={`
        text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl
        transition-all duration-1000 ease-out delay-200
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      >
        Your{" "}
        <span className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-fuchsia-600 transition-all duration-500">
            {dynamicTexts[textIndex]}
          </span>
          {/* Animated underline */}
          <div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-fuchsia-600 rounded-full animate-pulse"
            style={{ width: "100%", animation: "expand 3s ease-in-out infinite" }}
          />
        </span>{" "}
        Specialists
      </h1>

      {/* Description */}
      <p
        className={`
        mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl md:text-2xl 
        dark:text-slate-300
        transition-all duration-1000 ease-out delay-400
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      >
        Meet your dedicated AI team. Our advanced agents streamline tasks, solve complex challenges, and drive business
        growth—all{" "}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">
          expertly managed
        </span>{" "}
        for you.
      </p>

      {/* Floating metrics */}
      <div
        className={`
        mt-8 flex flex-wrap gap-4 text-sm
        transition-all duration-1000 ease-out delay-800
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      >
        {[
          { label: "AI Agents", value: "7+" },
          { label: "Success Rate", value: "99%" },
          { label: "Uptime", value: "24/7" },
        ].map((metric, index) => (
          <div
            key={metric.label}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" />
            <span className="font-semibold text-white">{metric.value}</span>
            <span className="text-white/70">{metric.label}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes expand {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.1); }
        }
      `}</style>
    </div>
  )
}

export default AnimatedHeroText
