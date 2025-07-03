"use client"

import { useEffect, useRef } from "react"

export function IndustryHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight)
    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight
    })

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `rgba(79, 128, 255, ${Math.random() * 0.5 + 0.2})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.1) this.size -= 0.01
        if (this.x < 0 || this.x > width) this.speedX *= -1
        if (this.y < 0 || this.y > height) this.speedY *= -1
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      if (ctx) {
        ctx.clearRect(0, 0, width, height)
        for (let i = 0; i < particles.length; i++) {
          particles[i].update()
          particles[i].draw()
        }
        connect()
        requestAnimationFrame(animate)
      }
    }

    function connect() {
      if (ctx) {
        let opacityValue = 1
        for (let a = 0; a < particles.length; a++) {
          for (let b = a; b < particles.length; b++) {
            const distance = Math.sqrt(
              (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
                (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y),
            )
            if (distance < 100) {
              opacityValue = 1 - distance / 100
              ctx.strokeStyle = `rgba(79, 128, 255, ${opacityValue * 0.3})`
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(particles[a].x, particles[a].y)
              ctx.lineTo(particles[b].x, particles[b].y)
              ctx.stroke()
            }
          }
        }
      }
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", () => {})
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
}
