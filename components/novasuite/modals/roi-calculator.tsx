"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  DollarSign, 
  Users, 
  Clock, 
  TrendingUp, 
  Calculator,
  Briefcase,
  PiggyBank,
  BarChart,
  Info,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip"

interface ROIInputs {
  businessType: 'sales' | 'support' | 'operations' | 'mixed'
  teamSize: number
  avgSalary: number
  hoursPerWeek: number
  currentToolCost: number
  conversionRate: number
  avgDealSize: number
}

interface ROIResults {
  timeSaved: number
  laborCostSaved: number
  productivityGain: number
  revenueIncrease: number
  totalBenefit: number
  novagentCost: number
  netROI: number
  roiPercentage: number
  paybackPeriod: number
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    businessType: 'sales',
    teamSize: 5,
    avgSalary: 60000,
    hoursPerWeek: 20,
    currentToolCost: 500,
    conversionRate: 2,
    avgDealSize: 5000
  })

  // Business type multipliers
  const businessMultipliers = {
    sales: { efficiency: 0.35, revenue: 0.25 },
    support: { efficiency: 0.40, revenue: 0.10 },
    operations: { efficiency: 0.45, revenue: 0.15 },
    mixed: { efficiency: 0.38, revenue: 0.18 }
  }

  const calculateROI = (): ROIResults => {
    const multiplier = businessMultipliers[inputs.businessType]
    
    // Calculate time saved (hours per month)
    const hoursPerMonth = inputs.hoursPerWeek * 4
    const timeSaved = hoursPerMonth * inputs.teamSize * multiplier.efficiency
    
    // Calculate labor cost saved
    const hourlyRate = inputs.avgSalary / 2080 // Annual hours
    const laborCostSaved = timeSaved * hourlyRate
    
    // Calculate productivity gain (ability to handle more work)
    const productivityGain = laborCostSaved * 0.5 // 50% additional capacity
    
    // Calculate revenue increase (from better conversion/efficiency)
    const monthlyDeals = (inputs.teamSize * 40) // baseline deals
    const additionalDeals = monthlyDeals * (multiplier.revenue)
    const revenueIncrease = additionalDeals * inputs.avgDealSize * (inputs.conversionRate / 100)
    
    // Total benefits
    const totalBenefit = laborCostSaved + productivityGain + revenueIncrease + inputs.currentToolCost
    
    // NovaGent cost (estimated based on team size)
    const novagentCost = inputs.teamSize <= 3 ? 349 : inputs.teamSize <= 10 ? 1749 : 4500
    
    // Net ROI
    const netROI = totalBenefit - novagentCost
    const roiPercentage = (netROI / novagentCost) * 100
    const paybackPeriod = novagentCost / totalBenefit
    
    return {
      timeSaved: Math.round(timeSaved),
      laborCostSaved: Math.round(laborCostSaved),
      productivityGain: Math.round(productivityGain),
      revenueIncrease: Math.round(revenueIncrease),
      totalBenefit: Math.round(totalBenefit),
      novagentCost,
      netROI: Math.round(netROI),
      roiPercentage: Math.round(roiPercentage),
      paybackPeriod: Math.round(paybackPeriod * 30) // days
    }
  }

  const results = calculateROI()

  const businessTypes = [
    { value: 'sales', label: 'Sales & Growth', icon: <TrendingUp className="h-4 w-4" /> },
    { value: 'support', label: 'Customer Support', icon: <Users className="h-4 w-4" /> },
    { value: 'operations', label: 'Operations', icon: <Briefcase className="h-4 w-4" /> },
    { value: 'mixed', label: 'Mixed Use', icon: <BarChart className="h-4 w-4" /> }
  ]

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-purple-800 dark:text-purple-200">
            <p className="font-medium mb-1">Calculate your potential return:</p>
            <p>Enter your current business metrics below to see how NovaGent can impact your bottom line through automation and efficiency gains.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          {/* Business Type */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Primary Use Case</Label>
            <RadioGroup 
              value={inputs.businessType} 
              onValueChange={(value) => setInputs(prev => ({ ...prev, businessType: value as any }))}
              className="grid grid-cols-2 gap-3"
            >
              {businessTypes.map((type) => (
                <div key={type.value}>
                  <RadioGroupItem
                    value={type.value}
                    id={type.value}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={type.value}
                    className="flex items-center gap-2 rounded-lg border-2 border-slate-200 bg-white p-3 hover:bg-slate-50 peer-data-[state=checked]:border-purple-600 peer-data-[state=checked]:bg-purple-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:peer-data-[state=checked]:border-purple-500 dark:peer-data-[state=checked]:bg-purple-900/20 cursor-pointer transition-all"
                  >
                    {type.icon}
                    <span className="text-sm font-medium">{type.label}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Team Size */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="teamSize" className="text-base font-medium">Team Size</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {inputs.teamSize} people
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Number of team members who will benefit from AI automation</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="teamSize"
              type="number"
              value={inputs.teamSize}
              onChange={(e) => setInputs(prev => ({ ...prev, teamSize: parseInt(e.target.value) || 0 }))}
              min={1}
              max={100}
            />
          </div>

          {/* Average Salary */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="avgSalary" className="text-base font-medium">Average Annual Salary</Label>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                ${inputs.avgSalary.toLocaleString()}
              </span>
            </div>
            <Input
              id="avgSalary"
              type="number"
              value={inputs.avgSalary}
              onChange={(e) => setInputs(prev => ({ ...prev, avgSalary: parseInt(e.target.value) || 0 }))}
              min={30000}
              max={200000}
              step={5000}
            />
          </div>

          {/* Hours per Week */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="hoursPerWeek" className="text-base font-medium">Hours on Repetitive Tasks</Label>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {inputs.hoursPerWeek} hrs/week
              </span>
            </div>
            <Input
              id="hoursPerWeek"
              type="number"
              value={inputs.hoursPerWeek}
              onChange={(e) => setInputs(prev => ({ ...prev, hoursPerWeek: parseInt(e.target.value) || 0 }))}
              min={5}
              max={40}
            />
            <p className="text-xs text-slate-600 dark:text-slate-400">Per team member, per week</p>
          </div>

          {/* Current Tool Cost */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="currentToolCost" className="text-base font-medium">Current Tool Costs</Label>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                ${inputs.currentToolCost}/mo
              </span>
            </div>
            <Input
              id="currentToolCost"
              type="number"
              value={inputs.currentToolCost}
              onChange={(e) => setInputs(prev => ({ ...prev, currentToolCost: parseInt(e.target.value) || 0 }))}
              min={0}
              max={10000}
              step={100}
            />
          </div>

          {/* For Sales Teams */}
          {inputs.businessType === 'sales' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="conversionRate" className="text-base font-medium">Current Conversion Rate</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="conversionRate"
                    type="number"
                    value={inputs.conversionRate}
                    onChange={(e) => setInputs(prev => ({ ...prev, conversionRate: parseFloat(e.target.value) || 0 }))}
                    min={0.5}
                    max={20}
                    step={0.5}
                    className="flex-1"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-400">%</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="avgDealSize" className="text-base font-medium">Average Deal Size</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">$</span>
                  <Input
                    id="avgDealSize"
                    type="number"
                    value={inputs.avgDealSize}
                    onChange={(e) => setInputs(prev => ({ ...prev, avgDealSize: parseInt(e.target.value) || 0 }))}
                    min={100}
                    max={100000}
                    step={500}
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Column - Results */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Your Projected ROI</h3>
          
          {/* Main ROI Card */}
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Monthly Net ROI</p>
                  <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                    ${results.netROI.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600 dark:text-slate-400">ROI Percentage</p>
                  <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                    {results.roiPercentage}%
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-green-200 dark:border-green-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Payback Period</span>
                  <span className="font-semibold text-green-700 dark:text-green-400">
                    {results.paybackPeriod} days
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Breakdown Cards */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400">Monthly Value Breakdown</h4>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">Time Saved</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{results.timeSaved} hours/month</p>
                  </div>
                </div>
                <p className="font-semibold">${results.laborCostSaved.toLocaleString()}</p>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="text-sm font-medium">Productivity Gains</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Additional capacity</p>
                  </div>
                </div>
                <p className="font-semibold">${results.productivityGain.toLocaleString()}</p>
              </div>
            </Card>

            {inputs.businessType === 'sales' && (
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-sm font-medium">Revenue Increase</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">From improved conversion</p>
                    </div>
                  </div>
                  <p className="font-semibold">${results.revenueIncrease.toLocaleString()}</p>
                </div>
              </Card>
            )}

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <PiggyBank className="h-5 w-5 text-amber-500" />
                  <div>
                    <p className="text-sm font-medium">Tool Consolidation</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Replace existing tools</p>
                  </div>
                </div>
                <p className="font-semibold">${inputs.currentToolCost.toLocaleString()}</p>
              </div>
            </Card>

            <div className="pt-3 border-t">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Total Monthly Benefit</span>
                <span className="font-bold text-lg">${results.totalBenefit.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="font-medium">NovaGent Investment</span>
                <span className="font-bold text-lg text-purple-600 dark:text-purple-400">
                  -${results.novagentCost.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
              Get Personalized Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex-1">
              Download Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
