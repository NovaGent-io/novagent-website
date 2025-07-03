"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import NovaGentLoading from "@/components/novagent-loading"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  // Reset loading state when pathname changes
  useEffect(() => {
    setIsLoading(true)

    // Simulate loading time (you can remove this in production)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Reduced from 2s to 1s for better UX

    return () => clearTimeout(timer)
  }, [pathname])

  return <>{isLoading ? <NovaGentLoading /> : children}</>
}
