"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, PhoneCall, CheckCircle2, TrendingUp } from "lucide-react"

export default function SmartOutreachDialerPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-24 sm:py-32">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/solutions/novasuite"
              className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to NovaSuite
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
                <PhoneCall className="mr-2 h-4 w-4" />
                Sales & Growth Skill
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                  Smart Outreach Dialer
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                AI-powered calling with real-time transcription, intelligent follow-up, and automatic lead routing. 
                Transform your outbound calling into a data-driven growth engine.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">3x</div>
                  <div className="text-sm text-slate-400">Connect Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">65%</div>
                  <div className="text-sm text-slate-400">Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">100%</div>
                  <div className="text-sm text-slate-400">Call Coverage</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Get Started with Smart Dialer</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Live Call Dashboard</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80">Active call with prospect...</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80">Real-time transcription running...</span>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 mt-4">
                    <span className="text-green-300 font-medium">? 47 calls completed today</span>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Coming Soon</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              We're building out comprehensive details for each Agent Skill as part of our Lightning Strategy Phase 2 rollout.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">Learn More About Smart Outreach Dialer</Link>
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