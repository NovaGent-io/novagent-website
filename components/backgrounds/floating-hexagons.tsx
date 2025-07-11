"use client"

import { motion } from 'framer-motion'

interface FloatingHexagonProps {
  theme?: 'dark' | 'light'
  delay?: number
  size?: number
  position?: { x: string; y: string }
}

export function FloatingHexagon({ 
  theme = 'dark', 
  delay = 0, 
  size = 60,
  position = { x: '50%', y: '50%' }
}: FloatingHexagonProps) {
  const hexPath = "M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z"
  
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: position.x, top: position.y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.3, 0.3, 0],
        scale: [0, 1, 1, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg
        width={size}
        height={size * 1.15}
        viewBox="0 0 60 70"
        className={theme === 'dark' ? 'text-purple-500/20' : 'text-purple-400/10'}
      >
        <path
          d={hexPath}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d={hexPath}
          fill="currentColor"
          opacity="0.1"
        />
      </svg>
    </motion.div>
  )
}

interface FloatingHexagonsProps {
  theme?: 'dark' | 'light'
}

export default function FloatingHexagons({ theme = 'dark' }: FloatingHexagonsProps) {
  const hexagons = [
    { x: '10%', y: '20%', size: 40, delay: 0 },
    { x: '85%', y: '15%', size: 60, delay: 2 },
    { x: '15%', y: '75%', size: 50, delay: 4 },
    { x: '90%', y: '80%', size: 45, delay: 6 },
    { x: '50%', y: '10%', size: 55, delay: 8 },
    { x: '30%', y: '90%', size: 35, delay: 10 },
    { x: '70%', y: '50%', size: 65, delay: 12 },
    { x: '5%', y: '50%', size: 40, delay: 14 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hexagons.map((hex, index) => (
        <FloatingHexagon
          key={index}
          theme={theme}
          position={{ x: hex.x, y: hex.y }}
          size={hex.size}
          delay={hex.delay}
        />
      ))}
    </div>
  )
}
