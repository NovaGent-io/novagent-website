"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"

interface Particle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  color: string
  opacity: number
  pulse: number
  pulseSpeed: number
}

interface Node {
  x: number
  y: number
  radius: number
  color: string
  connections: number[]
  pulse: number
  pulseSpeed: number
}

const AdvancedSuiteHeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let nodes: Node[] = []
    const particleCount = 80
    const nodeCount = 12
    const maxDistance = 150
    const mouseInfluence = 100

    const colors = {
      particles: [
        "rgba(59, 130, 246, 0.6)", // Blue
        "rgba(147, 51, 234, 0.6)", // Purple
        "rgba(236, 72, 153, 0.6)", // Pink
        "rgba(6, 182, 212, 0.6)", // Cyan
        "rgba(168, 85, 247, 0.6)", // Violet
      ],
      nodes: [
        "rgba(59, 130, 246, 0.8)",
        "rgba(147, 51, 234, 0.8)",
        "rgba(236, 72, 153, 0.8)",
        "rgba(6, 182, 212, 0.8)",
      ],
      connections: "rgba(139, 92, 246, 0.3)",
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
      initNodes()
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          color: colors.particles[Math.floor(Math.random() * colors.particles.length)],
          opacity: Math.random() * 0.5 + 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        })
      }
    }

    const initNodes = () => {
      nodes = []
      for (let i = 0; i < nodeCount; i++) {
        const node: Node = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 4 + 3,
          color: colors.nodes[Math.floor(Math.random() * colors.nodes.length)],
          connections: [],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.03 + 0.01,
        }
        nodes.push(node)
      }

      // Create connections between nearby nodes
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))
            if (distance < 200 && node.connections.length < 3) {
              node.connections.push(j)
            }
          }
        })
      })
    }

    const updateParticles = () => {
      particles.forEach((particle) => {
        // Mouse interaction
        const mouseDistance = Math.sqrt(
          Math.pow(particle.x - mouseRef.current.x, 2) + Math.pow(particle.y - mouseRef.current.y, 2),
        )

        if (mouseDistance < mouseInfluence) {
          const force = (mouseInfluence - mouseDistance) / mouseInfluence
          const angle = Math.atan2(particle.y - mouseRef.current.y, particle.x - mouseRef.current.x)
          particle.vx += Math.cos(angle) * force * 0.01
          particle.vy += Math.sin(angle) * force * 0.01
        }

        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulse += particle.pulseSpeed

        // Boundary collision with slight randomness
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // Damping
        particle.vx *= 0.99
        particle.vy *= 0.99
      })
    }

    const updateNodes = () => {
      nodes.forEach((node) => {
        node.pulse += node.pulseSpeed

        // Gentle floating motion
        node.x += Math.sin(node.pulse * 0.5) * 0.2
        node.y += Math.cos(node.pulse * 0.3) * 0.15

        // Keep nodes in bounds
        node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x))
        node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y))
      })
    }

    const drawParticles = () => {
      particles.forEach((particle) => {
        const pulseSize = 1 + Math.sin(particle.pulse) * 0.3
        const alpha = particle.opacity * (0.7 + Math.sin(particle.pulse) * 0.3)

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${alpha})`)
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = particle.color
        ctx.fill()
        ctx.shadowBlur = 0
      })
    }

    const drawNodes = () => {
      // Draw connections first
      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex]
          if (connectedNode) {
            const gradient = ctx.createLinearGradient(node.x, node.y, connectedNode.x, connectedNode.y)
            gradient.addColorStop(0, node.color)
            gradient.addColorStop(1, connectedNode.color)

            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(connectedNode.x, connectedNode.y)
            ctx.strokeStyle = colors.connections
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      // Draw nodes
      nodes.forEach((node) => {
        const pulseSize = 1 + Math.sin(node.pulse) * 0.2

        // Outer glow
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * pulseSize * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = node.color.replace(/[\d.]+\)$/g, "0.2)")
        ctx.fill()

        // Main node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()

        // Inner highlight
        ctx.beginPath()
        ctx.arc(node.x - node.radius * 0.3, node.y - node.radius * 0.3, node.radius * 0.3, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
        ctx.fill()
      })
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      updateParticles()
      updateNodes()
      drawConnections()
      drawParticles()
      drawNodes()

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    }

    let resizeTimeout: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 100)
    }

    window.addEventListener("resize", debouncedResize)
    canvas.addEventListener("mousemove", handleMouseMove)

    setTimeout(() => {
      resizeCanvas()
      setIsLoaded(true)
      animate()
    }, 100)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", debouncedResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isLoaded ? "opacity-60" : "opacity-0"}`}
    />
  )
}

export default AdvancedSuiteHeroBackground
