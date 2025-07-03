"use client"

import type React from "react"
import { useRef, useEffect } from "react"

interface Particle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  color: string
}

const SuiteHeroBackground: React.FC<{ isLightBackground?: boolean }> = ({ isLightBackground = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 70
    const maxDistance = 100

    // Define colors based on background type
    const lightBgParticleColors = [
      `rgba(96, 165, 250, ${Math.random() * 0.5 + 0.3})`, // Blue-400
      `rgba(192, 132, 252, ${Math.random() * 0.5 + 0.3})`, // Fuchsia-400
      `rgba(129, 140, 248, ${Math.random() * 0.4 + 0.2})`, // Indigo-400
    ]
    const lightBgLineColor = `rgba(165, 180, 252, ${0.15})` // Lighter Indigo for lines on light bg

    const darkBgParticleColors = [
      `rgba(34, 211, 238, ${Math.random() * 0.4 + 0.1})`, // Cyan
      `rgba(217, 70, 239, ${Math.random() * 0.4 + 0.1})`, // Fuchsia/Magenta
      `rgba(165, 180, 252, ${Math.random() * 0.3 + 0.1})`, // Light Indigo
    ]
    const darkBgLineColor = `rgba(129, 140, 248, ${0.15})` // Subtle indigo lines for dark bg

    const particleColors = isLightBackground ? lightBgParticleColors : darkBgParticleColors
    const baseLineColor = isLightBackground ? lightBgLineColor : darkBgLineColor

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * (isLightBackground ? 1.8 : 1.5) + 0.5, // Slightly larger for light bg
          vx: Math.random() * 0.3 - 0.15,
          vy: Math.random() * 0.3 - 0.15,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
        })
      }
    }

    const drawParticles = () => {
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })
    }

    const updateParticles = () => {
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const opacity = 1 - distance / maxDistance
            // Construct RGBA string for line color
            const lineColorMatch = baseLineColor.match(/rgba\((\d+,\s*\d+,\s*\d+),/)
            if (lineColorMatch) {
              ctx.strokeStyle = `rgba(${lineColorMatch[1]}, ${opacity * Number.parseFloat(baseLineColor.match(/,\s*([\d.]+)\)/)![1])})`
            } else {
              ctx.strokeStyle = baseLineColor // Fallback
            }
            ctx.lineWidth = isLightBackground ? 0.4 : 0.3 // Slightly thicker lines for light bg
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      updateParticles()
      drawLines()
      drawParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    let resizeTimeout: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 100)
    }

    window.addEventListener("resize", debouncedResize)
    setTimeout(resizeCanvas, 0)
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", debouncedResize)
      clearTimeout(resizeTimeout)
    }
  }, [isLightBackground])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-70" // Increased opacity for better visibility on light bg
    />
  )
}

export default SuiteHeroBackground
