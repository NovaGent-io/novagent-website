"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
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
    <div className="relative inline-flex items-center">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={cn(
          "relative h-10 w-20 rounded-full transition-all duration-300 overflow-hidden",
          "bg-gradient-to-r border-2",
          isDark 
            ? "from-indigo-600 to-purple-700 border-purple-500 hover:from-indigo-700 hover:to-purple-800" 
            : "from-amber-400 to-orange-500 border-amber-500 hover:from-amber-500 hover:to-orange-600"
        )}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {/* Background gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Toggle track */}
        <div className="relative flex items-center justify-between w-full h-full px-1">
          {/* Icons */}
          <Sun className={cn(
            "h-4 w-4 transition-all duration-300",
            isDark ? "text-amber-300/30" : "text-white"
          )} />
          <Moon className={cn(
            "h-4 w-4 transition-all duration-300",
            isDark ? "text-white" : "text-slate-800/30"
          )} />
          
          {/* Toggle ball */}
          <div
            className={cn(
              "absolute top-1 h-8 w-8 rounded-full bg-white shadow-lg transition-all duration-300",
              "flex items-center justify-center",
              isDark ? "translate-x-10" : "translate-x-0"
            )}
          >
            <Sun className={cn(
              "h-4 w-4 absolute transition-all duration-300",
              isDark ? "rotate-90 scale-0 text-amber-500" : "rotate-0 scale-100 text-amber-500"
            )} />
            <Moon className={cn(
              "h-4 w-4 absolute transition-all duration-300",
              isDark ? "rotate-0 scale-100 text-indigo-600" : "-rotate-90 scale-0 text-indigo-600"
            )} />
          </div>
        </div>
      </Button>
      
      {/* Label for mobile */}
      <span className={cn(
        "ml-3 text-sm font-medium lg:hidden transition-colors duration-300",
        isDark ? "text-slate-300" : "text-slate-700"
      )}>
        {isDark ? "Dark" : "Light"}
      </span>
    </div>
  )
}
