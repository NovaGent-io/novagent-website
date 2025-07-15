"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggleAlternative() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center justify-center">
      <div className="relative inline-flex items-center p-1 rounded-full bg-slate-200 dark:bg-slate-800">
        {/* Background pill that moves */}
        <div
          className={cn(
            "absolute h-8 w-8 rounded-full transition-all duration-300",
            "bg-gradient-to-r shadow-md",
            theme === "light" 
              ? "translate-x-0 from-amber-400 to-orange-500" 
              : theme === "dark"
              ? "translate-x-9 from-indigo-600 to-purple-700"
              : "translate-x-[4.5rem] from-slate-500 to-slate-600"
          )}
        />
        
        {/* Three options */}
        <button
          onClick={() => setTheme("light")}
          className={cn(
            "relative z-10 p-2 rounded-full transition-colors duration-300",
            theme === "light" ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
          )}
          aria-label="Light mode"
        >
          <Sun className="h-4 w-4" />
        </button>
        
        <button
          onClick={() => setTheme("dark")}
          className={cn(
            "relative z-10 p-2 rounded-full transition-colors duration-300",
            theme === "dark" ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
          )}
          aria-label="Dark mode"
        >
          <Moon className="h-4 w-4" />
        </button>
        
        <button
          onClick={() => setTheme("system")}
          className={cn(
            "relative z-10 p-2 rounded-full transition-colors duration-300",
            theme === "system" ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
          )}
          aria-label="System theme"
        >
          <Monitor className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
