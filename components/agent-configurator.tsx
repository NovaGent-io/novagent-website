"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import type { AgentSkill } from "@/app/solutions/novasuite/page"

interface AgentConfiguratorProps {
  agentSkills: AgentSkill[]
  selectedSkills: string[]
  toggleSkill: (skillId: string) => void
  calculateEstimatedCost: () => number
  activeCategory: string
  setActiveCategory: (category: string) => void
  categories: string[]
  filteredSkills: AgentSkill[]
}

const AgentConfigurator: React.FC<AgentConfiguratorProps> = ({
  agentSkills,
  selectedSkills,
  toggleSkill,
  calculateEstimatedCost,
  activeCategory,
  setActiveCategory,
  categories,
  filteredSkills
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Panel - Skill Selection */}
      <div className="lg:col-span-2">
        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category 
                    ? 'bg-purple-600 hover:bg-purple-700' 
                    : 'hover:bg-purple-50 hover:border-purple-300'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSkills.map((skill) => (
            <Card 
              key={skill.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 ${
                selectedSkills.includes(skill.id)
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
              onClick={() => toggleSkill(skill.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-slate-800 dark:text-slate-200">
                        {skill.publicName}
                      </CardTitle>
                      <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedSkills.includes(skill.id)
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-slate-300 dark:border-slate-600'
                  }`}>
                    {selectedSkills.includes(skill.id) && (
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {skill.tagline}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    From ${skill.basePricing.basic}/mo
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs"
                  >
                    <Link href={skill.href}>
                      Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Phase Notice */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            <strong>Phase 1 Launch:</strong> We're starting with our 4 most impactful skills. 
            10+ additional skills are coming in Phase 2 & 3 of our Lightning Strategy rollout.
          </p>
        </div>
      </div>

      {/* Right Panel - Agent Visualization & Summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-8 space-y-6">
          {/* Agent Visualization */}
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-700">
            <CardHeader className="text-center">
              <CardTitle className="text-purple-800 dark:text-purple-200">
                Your Agent Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Central Agent Visual */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                
                {/* Selected Skills as Connected Modules */}
                {selectedSkills.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {selectedSkills.map((skillId, index) => {
                      const skill = agentSkills.find(s => s.id === skillId)
                      return skill ? (
                        <div key={skillId} className="flex items-center justify-between bg-white dark:bg-slate-800 rounded-lg p-2 shadow-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded bg-purple-100 dark:bg-purple-800 flex items-center justify-center">
                              {React.cloneElement(skill.icon, { className: "h-3 w-3" })}
                            </div>
                            <span className="text-sm font-medium">{skill.publicName}</span>
                          </div>
                          <button 
                            onClick={() => toggleSkill(skillId)}
                            className="text-purple-600 hover:text-purple-800 text-xs"
                          >
                            ?
                          </button>
                        </div>
                      ) : null
                    })}
                  </div>
                )}

                {selectedSkills.length === 0 && (
                  <div className="mt-4 text-center text-slate-500 dark:text-slate-400 text-sm">
                    Select skills to configure your agent
                  </div>
                )}
              </div>

              {/* Cost Summary */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Platform Base:</span>
                  <span className="text-sm font-medium">$299/mo</span>
                </div>
                {selectedSkills.map(skillId => {
                  const skill = agentSkills.find(s => s.id === skillId)
                  return skill ? (
                    <div key={skillId} className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">{skill.publicName}:</span>
                      <span className="text-sm font-medium">${skill.basePricing.basic}/mo</span>
                    </div>
                  ) : null
                })}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Estimated Total:</span>
                    <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      ${calculateEstimatedCost().toLocaleString()}/mo
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    * Plus usage-based events
                  </div>
                </div>
              </div>

              {/* CTAs */}
              {selectedSkills.length > 0 && (
                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href="/contact">Get Started with This Configuration</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/pricing">See Detailed Pricing</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Info */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Why Choose NovaSuite?</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  One agent, multiple skills
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Expertly managed & optimized
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Transparent platform monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  Pay only for results delivered
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AgentConfigurator