"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface MobileThemeToggleProps {
  isScrolled?: boolean
  pathname?: string
}

export function MobileThemeToggle({ isScrolled = false, pathname = "/" }: MobileThemeToggleProps) {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-11 w-32 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative flex items-center gap-3 px-5 py-2.5 rounded-full",
        "transition-all duration-300 group",
        "bg-gradient-to-r shadow-lg hover:shadow-xl",
        pathname === '/' && !isScrolled
          ? "from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:from-white/30 hover:to-white/20"
          : "from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 border border-slate-300 dark:border-slate-600"
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Animated background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
      
      {/* Icon container */}
      <div className="relative flex items-center justify-center w-8 h-8">
        <Sun className={cn(
          "h-5 w-5 absolute transition-all duration-500",
          "text-amber-500 dark:text-amber-400",
          isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"
        )} />
        <Moon className={cn(
          "h-5 w-5 absolute transition-all duration-500",
          "text-indigo-600 dark:text-indigo-400",
          isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        )} />
      </div>
      
      {/* Text label */}
      <span className={cn(
        "text-sm font-medium transition-colors duration-300 relative z-10",
        pathname === '/' && !isScrolled
          ? "text-white"
          : "text-slate-700 dark:text-slate-200"
      )}>
        {isDark ? "Dark" : "Light"}
      </span>
      
      {/* Indicator dot */}
      <div className={cn(
        "w-2 h-2 rounded-full transition-all duration-300",
        "bg-gradient-to-br shadow-sm",
        isDark 
          ? "from-indigo-400 to-purple-500" 
          : "from-amber-400 to-orange-500"
      )} />
    </button>
  )
}
