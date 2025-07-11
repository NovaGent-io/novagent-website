"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Users, 
  PhoneCall, 
  Mail, 
  MessageSquare, 
  FileText,
  BarChart3,
  TrendingUp,
  Calculator,
  Info
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip"

interface UsageMetrics {
  leads: number
  calls: number
  emails: number
  supportTickets: number
  appointments: number
  reports: number
}

interface EstimatedCosts {
  aiCredits: number
  basePlatform: number
  planName: string
  includedCredits: number
  overageCredits: number
  overageCost: number
  needsScalePlan: boolean
  total: number
  breakdown: {
    [key: string]: {
      credits: number
      cost: number
    }
  }
}

export default function UsageEstimator() {
  const [metrics, setMetrics] = useState<UsageMetrics>({
    leads: 100,
    calls: 50,
    emails: 200,
    supportTickets: 150,
    appointments: 30,
    reports: 10
  })

  // Credit costs per action type
  const creditCosts = {
    leads: 5, // Credits per lead generated
    calls: 20, // Credits per call (includes transcription)
    emails: 2, // Credits per email
    supportTickets: 8, // Credits per support ticket
    appointments: 10, // Credits per appointment scheduled
    reports: 50 // Credits per report generated
  }

  // Calculate total credits and costs
  const calculateEstimates = (): EstimatedCosts => {
    const breakdown: EstimatedCosts['breakdown'] = {}
    let totalCredits = 0

    Object.entries(metrics).forEach(([key, value]) => {
      const credits = value * creditCosts[key as keyof typeof creditCosts]
      totalCredits += credits
      breakdown[key] = {
        credits,
        cost: credits * 0.05 // $0.05 per credit
      }
    })

    // Determine recommended plan based on usage
    let basePlatform = 349 // Starter Plan (includes 5,000 credits)
    let planName = 'Starter Plan'
    let includedCredits = 5000
    
    if (totalCredits > 5000) {
      basePlatform = 1749 // Growth Plan (includes 20,000 credits)
      planName = 'Growth Plan'
      includedCredits = 20000
    }
    
    // Flag if usage significantly exceeds Growth plan
    const needsScalePlan = totalCredits > 50000 // Suggest Scale plan for very high usage
    
    // Calculate overage credits if usage exceeds plan allowance
    const overageCredits = Math.max(0, totalCredits - includedCredits)
    const overageCost = overageCredits * 0.05 // $0.05 per credit overage

    return {
      aiCredits: totalCredits,
      basePlatform,
      planName,
      includedCredits,
      overageCredits,
      overageCost,
      needsScalePlan,
      total: basePlatform + overageCost,
      breakdown
    }
  }

  const estimates = calculateEstimates()

  const metricInfo = {
    leads: {
      icon: <Users className="h-5 w-5" />,
      label: "Qualified Leads per Month",
      description: "Prospects identified, enriched, and qualified by AI"
    },
    calls: {
      icon: <PhoneCall className="h-5 w-5" />,
      label: "Outbound Calls per Month",
      description: "AI-powered calls with transcription and follow-up"
    },
    emails: {
      icon: <Mail className="h-5 w-5" />,
      label: "Personalized Emails per Month",
      description: "AI-written emails tailored to each recipient"
    },
    supportTickets: {
      icon: <MessageSquare className="h-5 w-5" />,
      label: "Support Tickets per Month",
      description: "Customer inquiries resolved by AI"
    },
    appointments: {
      icon: <Users className="h-5 w-5" />,
      label: "Appointments Scheduled per Month",
      description: "Meetings booked and confirmed by AI"
    },
    reports: {
      icon: <FileText className="h-5 w-5" />,
      label: "Analytics Reports per Month",
      description: "Comprehensive reports with AI insights"
    }
  }

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-purple-800 dark:text-purple-200">
            <p className="font-medium mb-1">How to use this estimator:</p>
            <p>Adjust the sliders below to match your expected monthly usage. We'll calculate the AI credits needed and recommend the best plan for your needs.</p>
          </div>
        </div>
      </div>

      {/* Metrics Inputs */}
      <div className="space-y-6">
        {Object.entries(metricInfo).map(([key, info]) => (
          <div key={key} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                  {info.icon}
                </div>
                <div>
                  <Label className="text-base font-medium">{info.label}</Label>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{info.description}</p>
                </div>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                      {metrics[key as keyof UsageMetrics].toLocaleString()}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{creditCosts[key as keyof typeof creditCosts]} credits per {key.slice(0, -1)}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Slider
              value={[metrics[key as keyof UsageMetrics]]}
              onValueChange={(value) => setMetrics(prev => ({ ...prev, [key]: value[0] }))}
              max={key === 'reports' ? 50 : key === 'appointments' ? 100 : 500}
              step={key === 'reports' ? 1 : 5}
              className="w-full"
            />
          </div>
        ))}
      </div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 pt-6 border-t"
      >
        <h3 className="text-lg font-semibold">Estimated Monthly Usage</h3>
        
        {/* Credit Breakdown */}
        <Card className="p-4 bg-slate-50 dark:bg-slate-800">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Total AI Credits Needed</span>
              <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {estimates.aiCredits.toLocaleString()} credits
              </span>
            </div>
            
            <div className="space-y-2 pt-2 border-t">
              {Object.entries(estimates.breakdown).map(([key, data]) => (
                <div key={key} className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span>{data.credits.toLocaleString()} credits (${data.cost.toFixed(2)})</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Recommended Plan */}
        <Card className="p-4 bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 border-purple-200 dark:border-purple-700">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">Recommended Plan</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {estimates.planName}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  ${estimates.total.toFixed(0)}/mo
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">estimated total</p>
              </div>
            </div>
            
            <div className="pt-2 border-t space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Base Platform Fee</span>
                <span>${estimates.basePlatform}</span>
              </div>
              <div className="flex justify-between text-green-600 dark:text-green-400">
                <span>Included Credits</span>
                <span>{estimates.includedCredits.toLocaleString()}</span>
              </div>
              {estimates.overageCredits > 0 && (
                <div className="flex justify-between text-orange-600 dark:text-orange-400">
                  <span>Overage Credits ({estimates.overageCredits.toLocaleString()})</span>
                  <span>${estimates.overageCost.toFixed(2)}</span>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Scale Plan Recommendation */}
        {estimates.needsScalePlan && (
          <Card className="p-4 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-amber-800 dark:text-amber-200 mb-1">Consider our Scale Plan</p>
                <p className="text-amber-700 dark:text-amber-300">
                  Your usage exceeds typical Growth plan limits. Our Scale plan offers unlimited Agent Skills, 
                  custom credit pools, and dedicated infrastructure for high-volume operations.
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* ROI Insight */}
        <Card className="p-4 bg-green-50 dark:bg-green-900/20">
          <div className="flex items-start space-x-3">
            <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-green-800 dark:text-green-200 mb-1">Potential ROI</p>
              <p className="text-green-700 dark:text-green-300">
                Based on your usage, you could save approximately {Math.round(estimates.total * 2.5 / 160)} 
                hours per month in manual work, worth ${(estimates.total * 2.5).toFixed(0)} at $50/hour.
              </p>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
            Get Detailed Quote
          </Button>
          <Button variant="outline" className="flex-1">
            Export Estimate
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
