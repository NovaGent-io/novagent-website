"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggleMobile() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative flex items-center gap-2 px-4 py-2 rounded-full",
        "transition-all duration-300",
        "border-2",
        isDark 
          ? "bg-slate-800 border-slate-700 hover:bg-slate-700" 
          : "bg-white border-slate-300 hover:bg-slate-50",
        "shadow-sm hover:shadow-md"
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Icon container with background */}
      <div className={cn(
        "flex items-center justify-center w-8 h-8 rounded-full",
        "transition-all duration-300",
        isDark 
          ? "bg-gradient-to-br from-indigo-500 to-purple-600" 
          : "bg-gradient-to-br from-amber-400 to-orange-500"
      )}>
        <Sun className={cn(
          "h-4 w-4 absolute transition-all duration-300 text-white",
          isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"
        )} />
        <Moon className={cn(
          "h-4 w-4 absolute transition-all duration-300 text-white",
          isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        )} />
      </div>
      
      {/* Text label */}
      <span className={cn(
        "text-sm font-medium transition-colors duration-300",
        isDark ? "text-slate-200" : "text-slate-700"
      )}>
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
      
      {/* Decorative dots */}
      <div className="flex items-center gap-1 ml-2">
        <div className={cn(
          "w-1.5 h-1.5 rounded-full transition-all duration-300",
          isDark 
            ? "bg-purple-400" 
            : "bg-amber-400"
        )} />
        <div className={cn(
          "w-1.5 h-1.5 rounded-full transition-all duration-300",
          isDark 
            ? "bg-indigo-400" 
            : "bg-orange-400"
        )} />
      </div>
    </button>
  )
}
