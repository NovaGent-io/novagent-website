"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function NovaGentLoading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + 5
      })
    }, 50)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative mb-8 h-16 w-16">
        <Image src="/novagent-logo-black-bg-64.png" alt="NovaGent Logo" width={64} height={64} className="rounded-md" />
        <motion.div
          className="absolute -inset-2 rounded-lg"
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
          }}
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
          }}
        />
      </div>

      <h2 className="mb-6 text-2xl font-bold text-white">
        <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          NovaGent
        </span>
      </h2>

      <div className="relative h-1 w-48 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-400 via-violet-500 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className="mt-4 flex space-x-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-2 w-2 rounded-full bg-purple-400"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="mt-6 text-sm text-slate-300 opacity-80">Loading AI Agents...</div>
    </div>
  )
}

export default NovaGentLoading
export { NovaGentLoading as NovagentLoading }
