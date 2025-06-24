'use client'

import * as React from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center bg-slate-200 dark:bg-slate-800/50 backdrop-blur-sm rounded-full p-1 border border-slate-300 dark:border-slate-700/50">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-all duration-200 ${
          theme === 'light'
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/25'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300'
        }`}
        aria-label="Light mode"
      >
        <Sun size={16} />
      </button>
      
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full transition-all duration-200 ${
          theme === 'system'
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300'
        }`}
        aria-label="System mode"
      >
        <Monitor size={16} />
      </button>
      
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-all duration-200 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-500/25'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300'
        }`}
        aria-label="Dark mode"
      >
        <Moon size={16} />
      </button>
    </div>
  )
}