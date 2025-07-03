"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, UserPlus, CheckCircle2, TrendingUp } from "lucide-react"

export default function TalentWelcomeSuitePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-pink-900 to-purple-900 text-white py-24 sm:py-32">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/solutions/novasuite"
              className="inline-flex items-center text-pink-300 hover:text-pink-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to NovaSuite
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center rounded-full bg-pink-500/10 px-4 py-1.5 text-sm font-medium text-pink-300">
                <UserPlus className="mr-2 h-4 w-4" />
                HR & Operations Skill
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-fuchsia-400">
                  Talent Welcome Suite
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Complete employee onboarding automation with intelligent workflows. 
                Create exceptional first impressions while ensuring compliance and productivity from day one.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">90%</div>
                  <div className="text-sm text-slate-400">Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-sm text-slate-400">Compliance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fuchsia-400">4.9/5</div>
                  <div className="text-sm text-slate-400">Employee Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700" asChild>
                  <Link href="/contact">Transform Your Onboarding</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Onboarding Dashboard</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80">3 new hires onboarding today...</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80">All compliance forms completed...</span>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 mt-4">
                    <span className="text-green-300 font-medium">? 25 employees onboarded this month</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Detailed Information
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"> Coming Soon</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              We're building out comprehensive details for each Agent Skill as part of our Lightning Strategy Phase 2 rollout.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">Learn More About Talent Welcome Suite</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/solutions/novasuite">Back to NovaSuite</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}