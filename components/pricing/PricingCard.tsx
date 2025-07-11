"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import React from "react"

interface PricingFeature {
  text: string
  highlight: boolean
}

interface PricingCardProps {
  tier: {
    id: string
    name: string
    price: number | string
    monthlyPrice: number
    description: string
    icon: React.ReactNode
    color: string
    features: PricingFeature[]
    maxSkills: number | string
    includedCredits: number | string
    serverType: string
    popular: boolean
  }
  selected: boolean
  onSelect: () => void
  index: number
}

export default function PricingCard({ tier, selected, onSelect, index }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border-2 bg-white dark:bg-slate-800 transition-all duration-300",
        tier.popular 
          ? "border-purple-500 scale-105 shadow-2xl" 
          : "border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600",
        selected && "ring-2 ring-purple-500 ring-offset-2"
      )}
    >
      {tier.popular && (
        <div className="absolute -top-5 left-0 right-0 flex justify-center">
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-4 py-1 rounded-full text-sm font-semibold inline-flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8">
        <div className="text-center">
          <div className={cn(
            "inline-flex p-3 rounded-lg mb-4",
            tier.color === "cyan" && "bg-cyan-100 dark:bg-cyan-900/20",
            tier.color === "blue" && "bg-blue-100 dark:bg-blue-900/20",
            tier.color === "purple" && "bg-purple-100 dark:bg-purple-900/20",
            tier.color === "fuchsia" && "bg-fuchsia-100 dark:bg-fuchsia-900/20"
          )}>
            {React.cloneElement(tier.icon as React.ReactElement, { 
              className: cn(
                "h-8 w-8",
                tier.color === "cyan" && "text-cyan-600 dark:text-cyan-400",
                tier.color === "blue" && "text-blue-600 dark:text-blue-400",
                tier.color === "purple" && "text-purple-600 dark:text-purple-400",
                tier.color === "fuchsia" && "text-fuchsia-600 dark:text-fuchsia-400"
              )
            })}
          </div>
          
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{tier.name}</h3>
          
          <div className="mb-4">
            {tier.price === "Custom" ? (
              <div>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">Custom</span>
                <span className="text-gray-500 dark:text-gray-400"> pricing</span>
              </div>
            ) : (
              <div>
                <span className="text-4xl font-bold text-gray-900 dark:text-white">${tier.price}</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 min-h-[3rem]">{tier.description}</p>
        </div>

        <div className="space-y-3 mb-8 min-h-[288px]">
          {tier.features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <CheckCircle2 className={cn(
                "w-5 h-5 mr-3 mt-0.5 flex-shrink-0",
                feature.highlight ? "text-purple-600 dark:text-purple-400" : "text-green-600 dark:text-green-400"
              )} />
              <span className={cn(
                "text-sm",
                feature.highlight ? "font-semibold text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"
              )}>{feature.text}</span>
            </div>
          ))}
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={onSelect}
        >
          Contact Us
        </Button>
      </div>
    </div>
  )
}
