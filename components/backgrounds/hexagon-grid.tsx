"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface HexagonGridProps {
  theme?: 'dark' | 'light'
  className?: string
}

export default function HexagonGrid({ theme = 'dark', className = '' }: HexagonGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Hexagon drawing function
    const drawHexagon = (centerX: number, centerY: number, size: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const x = centerX + size * Math.cos(angle)
        const y = centerY + size * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
    }

    // Animation function
    const animate = () => {
      timeRef.current += 0.001
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const hexSize = 40
      const hexWidth = hexSize * 2
      const hexHeight = Math.sqrt(3) * hexSize
      const horizontalSpacing = hexWidth * 0.75
      const verticalSpacing = hexHeight

      const cols = Math.ceil(canvas.width / horizontalSpacing) + 2
      const rows = Math.ceil(canvas.height / verticalSpacing) + 2

      // Draw hexagons with subtle pulse effect
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * horizontalSpacing
          const y = row * verticalSpacing + (col % 2 ? verticalSpacing / 2 : 0)
          
          // Calculate distance from center for wave effect
          const centerX = canvas.width / 2
          const centerY = canvas.height / 2
          const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
          const wave = Math.sin(distance * 0.002 - timeRef.current * 2) * 0.5 + 0.5
          
          // Adjust opacity based on wave
          const baseOpacity = theme === 'dark' ? 0.15 : 0.08
          const opacity = baseOpacity * (0.7 + wave * 0.3)
          
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
          ctx.lineWidth = 1
          
          drawHexagon(x, y, hexSize)
          ctx.stroke()
        }
      }

      // Add gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 2, 
        0,
        canvas.width / 2, 
        canvas.height / 2, 
        Math.max(canvas.width, canvas.height) * 0.7
      )
      
      if (theme === 'dark') {
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.05)')
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.02)')
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)')
      } else {
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.03)')
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.01)')
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)')
      }

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Add shimmer effect
      const shimmerGradient = ctx.createLinearGradient(
        0, 0,
        canvas.width, canvas.height
      )
      
      const shimmerOffset = (timeRef.current * 100) % (canvas.width + canvas.height)
      
      shimmerGradient.addColorStop(0, 'transparent')
      shimmerGradient.addColorStop(Math.max(0, (shimmerOffset - 200) / (canvas.width + canvas.height)), 'transparent')
      shimmerGradient.addColorStop(shimmerOffset / (canvas.width + canvas.height), theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.05)')
      shimmerGradient.addColorStop(Math.min(1, (shimmerOffset + 200) / (canvas.width + canvas.height)), 'transparent')
      shimmerGradient.addColorStop(1, 'transparent')
      
      ctx.fillStyle = shimmerGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [theme])

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}
