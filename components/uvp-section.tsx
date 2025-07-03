"use client"

import Link from "next/link"
import { Brain, Target, BarChart3, LinkIcon } from "lucide-react"

export default function UVPSection() {
  const features = [
    {
      icon: Brain,
      title: "Modular Power",
      description: "One agent, infinite capabilities. Your AI adapts to your exact business needs with configurable skills from the NovaCore Suite. Stop managing multiple bots?deploy one intelligent agent that does it all.",
      borderColor: "border-l-cyan-400",
      number: "01"
    },
    {
      icon: Target,
      title: "The Command Center", 
      description: "Transparent control and real-time insights. Communicate directly with your AI through our new interactive agent interface -ask questions, get status updates, and give instructions in natural language. Monitor every action, track ROI, and configure your agent through our powerful platform. No more black boxes -see and interact with exactly what your AI is doing and why.",
      borderColor: "border-l-purple-400",
      number: "02"
    },
    {
      icon: BarChart3,
      title: "Managed Ingenuity",
      description: "Expert human oversight amplifies AI power. Our specialists design, deploy, and continuously optimize your agent for peak performance. Get the power of custom AI without the penalty of managing it.",
      borderColor: "border-l-pink-400", 
      number: "03"
    }
  ]

  return (
    <section className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center">
          
          {/* Left Section */}
          <div className="lg:pr-16 py-20 lg:py-0 relative">
            {/* Gradient line before overline */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-10 w-8 h-0.5 bg-cyan-400 hidden lg:block"></div>
            
            <div className="space-y-8">
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-[4px]">
                Three Strategic Pillars
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                The Power of the
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    NovaGent Platform
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-30 rounded-full"></div>
                </span>
              </h2>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                The NovaGent Platform provides the power. Our experts provide the guidance. You get the results. Experience the perfect fusion of advanced AI technology and human expertise.
              </p>
              
              <Link 
                href="/platform"
                className="inline-flex items-center gap-2 py-4 text-purple-300 font-semibold border-b-2 border-transparent hover:border-purple-300 transition-all duration-300 hover:translate-x-1"
              >
                Tour the Platform
                <LinkIcon className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Separator line for larger screens */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block"></div>
          </div>

          {/* Right Section - Simple Stacked Cards */}
          <div className="py-20 lg:py-0 flex items-center justify-center">
            <div className="w-full max-w-md space-y-4">
              
              {features.map((feature, index) => (
                <div
                  key={feature.number}
                  className={`relative bg-white ${feature.borderColor} border-l-4 rounded-2xl p-8 cursor-pointer transition-all duration-300 ease-out hover:bg-gray-50 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] shadow-lg group`}
                  style={{
                    zIndex: 10 + index
                  }}
                >
                  {/* Card Number */}
                  <div className="text-4xl font-black text-gray-100 leading-none mb-4 transition-all duration-300 group-hover:text-gray-200">
                    {feature.number}
                  </div>
                  
                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight transition-all duration-300 group-hover:text-gray-900">
                    {feature.title}
                  </h3>
                  
                  {/* Card Description */}
                  <p className="text-sm text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                    {feature.description}
                  </p>
                  
                  {/* Subtle hover indicator */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gray-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-gray-400"></div>
                </div>
              ))}
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
