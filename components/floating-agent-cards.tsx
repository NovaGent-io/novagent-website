"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Target, Users, PhoneCall, MessageSquare, Search, BarChart2, Share2 } from "lucide-react"

interface FloatingAgent {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  x: number
  y: number
  delay: number
  size: "small" | "medium" | "large"
}

const agents: Omit<FloatingAgent, "x" | "y" | "delay" | "size">[] = [
  {
    id: "prospect-hunter",
    name: "Prospect Hunter",
    icon: <Target className="h-4 w-4" />,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "schedule-coordinator",
    name: "Schedule Coordinator",
    icon: <Users className="h-4 w-4" />,
    color: "from-fuchsia-400 to-fuchsia-600",
  },
  {
    id: "smart-dialer",
    name: "Smart Dialer",
    icon: <PhoneCall className="h-4 w-4" />,
    color: "from-sky-400 to-sky-600",
  },
  {
    id: "support-concierge",
    name: "Support Concierge",
    icon: <MessageSquare className="h-4 w-4" />,
    color: "from-emerald-400 to-emerald-600",
  },
  {
    id: "visibility-manager",
    name: "Visibility Manager",
    icon: <Search className="h-4 w-4" />,
    color: "from-amber-400 to-amber-600",
  },
  {
    id: "insight-intelligence",
    name: "Insight Intelligence",
    icon: <BarChart2 className="h-4 w-4" />,
    color: "from-rose-400 to-rose-600",
  },
  {
    id: "workflow-navigator",
    name: "Workflow Navigator",
    icon: <Share2 className="h-4 w-4" />,
    color: "from-indigo-400 to-indigo-600",
  },
]

const FloatingAgentCards: React.FC = () => {
  const [floatingAgents, setFloatingAgents] = useState<FloatingAgent[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Create a modern grid-based distribution with strategic positioning
    const positions = [
      // Top row
      { x: 65, y: 15, size: "medium" as const }, // Top left
      { x: 85, y: 20, size: "small" as const }, // Top right

      // Middle-upper row
      { x: 75, y: 35, size: "large" as const }, // Center-upper (featured)
      { x: 90, y: 40, size: "medium" as const }, // Right-upper

      // Middle-lower row
      { x: 60, y: 55, size: "medium" as const }, // Left-middle
      { x: 80, y: 65, size: "small" as const }, // Right-middle

      // Bottom row
      { x: 70, y: 80, size: "medium" as const }, // Bottom center
    ]

    const agentsWithPositions = agents.map((agent, index) => ({
      ...agent,
      x: positions[index]?.x || 70,
      y: positions[index]?.y || 50,
      size: positions[index]?.size || "medium",
      delay: index * 200,
    }))

    setFloatingAgents(agentsWithPositions)
    setTimeout(() => setIsVisible(true), 500)
  }, [])

  const getSizeClasses = (size: "small" | "medium" | "large") => {
    switch (size) {
      case "small":
        return {
          card: "px-3 py-2",
          icon: "p-1.5",
          text: "text-xs",
          scale: "scale-90",
        }
      case "large":
        return {
          card: "px-5 py-3",
          icon: "p-2.5",
          text: "text-sm font-semibold",
          scale: "scale-110",
        }
      default: // medium
        return {
          card: "px-4 py-2.5",
          icon: "p-2",
          text: "text-sm",
          scale: "scale-100",
        }
    }
  }

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Subtle connecting network */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        {floatingAgents.slice(0, 5).map((agent, index) => {
          const nextIndex = (index + 1) % 5
          const nextAgent = floatingAgents[nextIndex]
          if (!nextAgent) return null

          return (
            <line
              key={`connection-${agent.id}`}
              x1={`${agent.x}%`}
              y1={`${agent.y}%`}
              x2={`${nextAgent.x}%`}
              y2={`${nextAgent.y}%`}
              stroke="url(#networkGradient)"
              strokeWidth="1"
              strokeDasharray="3,3"
              className="animate-pulse"
              style={{
                animationDelay: `${agent.delay + 1000}ms`,
                animationDuration: "4s",
              }}
            />
          )
        })}
        <defs>
          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Agent cards with strategic positioning */}
      {floatingAgents.map((agent) => {
        const sizeClasses = getSizeClasses(agent.size)

        return (
          <div
            key={agent.id}
            className={`absolute transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${sizeClasses.scale}`}
            style={{
              left: `${agent.x}%`,
              top: `${agent.y}%`,
              transform: `translate(-50%, -50%)`,
              transitionDelay: `${agent.delay}ms`,
              animation: `float-gentle-${agent.id} 6s ease-in-out infinite`,
            }}
          >
            <div className="group relative">
              {/* Modern floating card */}
              <div
                className={`
                relative bg-white/8 backdrop-blur-xl border border-white/20 
                rounded-2xl ${sizeClasses.card} shadow-2xl hover:shadow-purple-500/25
                transition-all duration-500 hover:scale-105 hover:bg-white/12
                hover:border-white/30 cursor-pointer
                ${agent.size === "large" ? "ring-1 ring-white/10" : ""}
              `}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`
                    ${sizeClasses.icon} rounded-xl bg-gradient-to-br ${agent.color} 
                    text-white shadow-lg group-hover:shadow-xl
                    transition-all duration-300 group-hover:scale-110
                  `}
                  >
                    {agent.icon}
                  </div>
                  <span className={`${sizeClasses.text} text-white/95 whitespace-nowrap tracking-wide`}>
                    {agent.name}
                  </span>
                </div>

                {/* Enhanced glow for featured card */}
                {agent.size === "large" && (
                  <div
                    className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-br ${agent.color} 
                    opacity-10 -z-10 blur-xl scale-150
                  `}
                  />
                )}

                {/* Hover glow effect */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-br ${agent.color} 
                  opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10
                  blur-lg scale-125
                `}
                />
              </div>

              {/* Status indicator for featured card */}
              {agent.size === "large" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg" />
              )}
            </div>
          </div>
        )
      })}

      <style jsx>{`
        @keyframes float-gentle-prospect-hunter {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
        @keyframes float-gentle-schedule-coordinator {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-6px); }
        }
        @keyframes float-gentle-smart-dialer {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        @keyframes float-gentle-support-concierge {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-7px); }
        }
        @keyframes float-gentle-visibility-manager {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-9px); }
        }
        @keyframes float-gentle-insight-intelligence {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-5px); }
        }
        @keyframes float-gentle-workflow-navigator {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
      `}</style>
    </div>
  )
}

export default FloatingAgentCards
