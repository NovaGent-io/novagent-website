"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { 
  Calculator,
  DollarSign,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Sparkles
} from "lucide-react"
import Link from "next/link"

interface SkillConfig {
  id: string
  name: string
  baseCost: number
  eventsIncluded: number
  costPerEvent: number
  estimatedUsage: number
}

interface ConfiguratorProps {
  selectedSkills: string[]
  agentSkills: any[]
  platformTier: 'starter' | 'professional' | 'enterprise'
}

export default function AdvancedConfigurator({ selectedSkills, agentSkills, platformTier = 'starter' }: ConfiguratorProps) {
  const [showROI, setShowROI] = useState(false)
  const [avgDealSize, setAvgDealSize] = useState(25000)
  const [closeRate, setCloseRate] = useState(15)
  const [skillUsage, setSkillUsage] = useState<Record<string, number>>({})

  // Platform tier pricing
  const platformPricing = {
    starter: { fee: 299, maxSkills: 3, eventMultiplier: 1 },
    professional: { fee: 699, maxSkills: 5, eventMultiplier: 1.5 },
    enterprise: { fee: 1499, maxSkills: 999, eventMultiplier: 3 }
  }

  const currentPlatform = platformPricing[platformTier]

  // Initialize usage estimates
  useEffect(() => {
    const initialUsage: Record<string, number> = {}
    selectedSkills.forEach(skillId => {
      const skill = agentSkills.find(s => s.id === skillId)
      if (skill) {
        initialUsage[skillId] = skill.basePricing.basic * 2.5 // Default estimate
      }
    })
    setSkillUsage(initialUsage)
  }, [selectedSkills, agentSkills])

  // Calculate costs
  const calculateSkillCost = (skillId: string) => {
    const skill = agentSkills.find(s => s.id === skillId)
    if (!skill) return 0
    
    const usage = skillUsage[skillId] || 0
    const baseCost = skill.basePricing.basic
    const includedEvents = 500 * currentPlatform.eventMultiplier // Example calculation
    const overageRate = 0.4 // Example rate
    
    if (usage <= includedEvents) {
      return baseCost
    }
    
    const overage = usage - includedEvents
    return baseCost + (overage * overageRate)
  }

  const totalMonthlyCost = currentPlatform.fee + selectedSkills.reduce((sum, skillId) => {
    return sum + calculateSkillCost(skillId)
  }, 0)

  // ROI Calculations
  const calculateROI = () => {
    // Simple ROI calculation based on lead generation potential
    const leadsPerMonth = selectedSkills.includes('prospect-hunter') ? (skillUsage['prospect-hunter'] || 500) : 0
    const meetingsPerMonth = selectedSkills.includes('schedule-coordinator') ? (skillUsage['schedule-coordinator'] || 200) * 0.3 : 0
    const totalOpportunities = leadsPerMonth * 0.1 + meetingsPerMonth * 0.5
    const closedDeals = totalOpportunities * (closeRate / 100)
    const monthlyRevenue = closedDeals * avgDealSize
    const roi = ((monthlyRevenue - totalMonthlyCost) / totalMonthlyCost) * 100
    
    return {
      leadsPerMonth,
      meetingsPerMonth,
      totalOpportunities: Math.round(totalOpportunities),
      closedDeals: closedDeals.toFixed(1),
      monthlyRevenue: Math.round(monthlyRevenue),
      roi: Math.round(roi)
    }
  }

  const roiData = calculateROI()

  return (
    <div className="space-y-6">
      {/* Cost Summary */}
      <Card className="border-purple-200 dark:border-purple-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Configuration Summary</span>
            <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              ${totalMonthlyCost.toLocaleString()}/mo
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Platform Fee */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Platform Fee ({platformTier})</span>
            <span className="font-semibold">${currentPlatform.fee}/mo</span>
          </div>
          
          {/* Selected Skills */}
          {selectedSkills.map(skillId => {
            const skill = agentSkills.find(s => s.id === skillId)
            if (!skill) return null
            
            return (
              <div key={skillId} className="space-y-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{skill.publicName}</span>
                  <span className="font-semibold">${calculateSkillCost(skillId).toFixed(0)}/mo</span>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Estimated Monthly Usage</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      value={[skillUsage[skillId] || 0]}
                      onValueChange={(value) => setSkillUsage({...skillUsage, [skillId]: value[0]})}
                      max={5000}
                      step={50}
                      className="flex-1"
                    />
                    <span className="text-sm w-16 text-right">{skillUsage[skillId] || 0}</span>
                  </div>
                </div>
              </div>
            )
          })}
          
          {/* ROI Toggle */}
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setShowROI(!showROI)}
          >
            <Calculator className="mr-2 h-4 w-4" />
            {showROI ? 'Hide' : 'Show'} ROI Calculator
          </Button>
        </CardContent>
      </Card>

      {/* ROI Calculator */}
      {showROI && (
        <Card className="border-green-200 dark:border-green-700">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
              ROI Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Average Deal Size</Label>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-slate-400" />
                  <Input
                    type="number"
                    value={avgDealSize}
                    onChange={(e) => setAvgDealSize(Number(e.target.value))}
                  />
                </div>
              </div>
              <div>
                <Label>Close Rate (%)</Label>
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-slate-400" />
                  <Input
                    type="number"
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    max={100}
                  />
                </div>
              </div>
            </div>

            {/* ROI Results */}
            <div className="space-y-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-200">Projected Monthly Results</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Leads Generated</p>
                  <p className="font-bold text-lg">{roiData.leadsPerMonth.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Meetings Booked</p>
                  <p className="font-bold text-lg">{Math.round(roiData.meetingsPerMonth)}</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Closed Deals</p>
                  <p className="font-bold text-lg">{roiData.closedDeals}</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Revenue Generated</p>
                  <p className="font-bold text-lg">${roiData.monthlyRevenue.toLocaleString()}</p>
                </div>
              </div>
              <div className="pt-3 border-t border-green-200 dark:border-green-700">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Estimated ROI</span>
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {roiData.roi}%
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex-1 bg-purple-600 hover:bg-purple-700" asChild>
          <Link href="/contact">
            <Sparkles className="mr-2 h-4 w-4" />
            Get Started with This Configuration
          </Link>
        </Button>
        <Button variant="outline" className="flex-1" asChild>
          <Link href="/pricing">
            <BarChart3 className="mr-2 h-4 w-4" />
            View Detailed Pricing
          </Link>
        </Button>
      </div>
    </div>
  )
}