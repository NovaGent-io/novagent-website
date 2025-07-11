// Enhanced Prospect Hunter Page with Advanced Animations
// This page showcases the Prospect Hunter capability with modern design
// Includes: animated background, floating cards, interactive demo, and responsive layout

'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, BarChart3, Users, Zap, Brain, Globe, CheckCircle2, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HowItWorksSection } from './HowItWorksSection'
import { CapabilitiesSection } from './CapabilitiesSection'
import { CTASection } from './CTASection'
import { AnimationStyles } from './AnimationStyles'

// Hero Section Component
function HeroSection({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement> }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
            style={{
              animation: 'gridMove 20s linear infinite',
            }}
          />
        </div>

        {/* Data Streams */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-24 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
              style={{
                left: `${10 + i * 20}%`,
                animation: `dataStream 3s linear infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* AI Orb */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-96 h-96 opacity-30 hidden lg:block">
          <div className="absolute inset-[25%] bg-gradient-radial from-cyan-500 to-transparent rounded-full blur-xl animate-pulse" />
          <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-spin-slow" />
          <div className="absolute inset-[10%] border-2 border-cyan-500/30 rounded-full animate-spin-slow-reverse" />
          <div className="absolute inset-[20%] border-2 border-cyan-500/30 rounded-full animate-spin-slow" />
        </div>

        {/* Canvas for node connections */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none opacity-20"
        />

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-cyan-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                animation: `particleFloat ${10 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute top-[20%] right-[5%] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 animate-float hidden lg:block">
        <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-md mb-2" />
        <div className="text-sm text-white/80">AI Scanning LinkedIn...</div>
      </div>

      <div className="absolute bottom-[30%] right-[15%] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 animate-float-delayed hidden lg:block">
        <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-md mb-2" />
        <div className="text-sm text-white/80">5 Qualified Leads Found</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center">
            <Badge className="mb-6 bg-purple-500/10 border-purple-500/20 text-purple-400">
              <Sparkles className="w-3 h-3 mr-1" />
              Part of the NovaCore Suite
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Prospect <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Hunter</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Transform your lead generation with AI that works 24/7 to find, qualify, and engage your ideal prospects. 
              No more manual prospecting - let your AI agent hunt for opportunities while you close deals.
            </p>
            
            {/* Metrics Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">5x</div>
                <div className="text-slate-400">More Qualified Leads</div>
              </Card>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">70%</div>
                <div className="text-slate-400">Time Saved</div>
              </Card>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-slate-400">Always Hunting</div>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                <Link href="/contact">
                  See Prospect Hunter in Action
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-slate-700 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ProspectHunterPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    const nodeCount = 5

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      })
    }

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)'
      ctx.lineWidth = 1

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
      })

      // Draw connections
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i < j) {
            const distance = Math.sqrt(
              Math.pow(otherNode.x - node.x, 2) + 
              Math.pow(otherNode.y - node.y, 2)
            )

            if (distance < 300) {
              ctx.globalAlpha = 1 - (distance / 300)
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.stroke()
            }
          }
        })

        // Draw nodes
        ctx.globalAlpha = 0.8
        ctx.fillStyle = '#00ffff'
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(drawConnections)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    drawConnections()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <HeroSection canvasRef={canvasRef} />
      <HowItWorksSection />
      <CapabilitiesSection />
      <CTASection />
      <AnimationStyles />
    </main>
  )
}