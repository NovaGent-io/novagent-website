'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Search, Target, Filter, Globe, Database, Zap, Users, TrendingUp, CheckCircle } from 'lucide-react'

export default function ProspectHunterPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                NovaGent
              </span>
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 rounded-lg hover:opacity-90 transition-opacity"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-purple-500/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm">Part of the NovaCore Suite</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Prospect Hunter
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your lead generation with AI-powered prospect discovery. Find, qualify, and engage 
            your ideal customers at scale while your team focuses on closing deals.
          </p>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-slate-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                5x
              </div>
              <div className="text-gray-400 mt-2">More Qualified Leads</div>
            </div>
            <div className="bg-slate-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                80%
              </div>
              <div className="text-gray-400 mt-2">Time Saved on Research</div>
            </div>
            <div className="bg-slate-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-gray-400 mt-2">Always Hunting</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 text-white bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              See it in Action
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 text-gray-100 bg-transparent border border-gray-600 rounded-lg font-medium hover:border-purple-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            How <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Prospect Hunter</span> Works
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Your AI agent uses advanced intelligence to find and qualify your ideal prospects automatically
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Process Steps */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Define Your Ideal Customer</h3>
                  <p className="text-gray-400">Set specific criteria like industry, company size, technology stack, and job titles to target exactly who you want.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Discovery</h3>
                  <p className="text-gray-400">Your agent searches across multiple data sources, social networks, and databases to find matching prospects.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Intelligent Qualification</h3>
                  <p className="text-gray-400">Each prospect is scored based on buying signals, engagement data, and fit with your ideal customer profile.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enriched Lead Delivery</h3>
                  <p className="text-gray-400">Get complete prospect profiles with contact info, company insights, and personalized talking points delivered to your CRM.</p>
                </div>
              </div>
            </div>

            {/* Demo Card */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 animate-float">
              <div className="text-center mb-6">
                <div className="text-cyan-400 text-sm mb-2">Live Prospect Hunter Demo</div>
                <div className="text-2xl font-mono text-gray-300">Scanning LinkedIn Sales Navigator...</div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-slate-900/50 rounded-lg p-3 flex justify-between items-center">
                  <span>Tech startup, 50-200 employees, Series B</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 flex justify-between items-center opacity-75">
                  <span>VP of Sales - Decision maker identified</span>
                  <span className="text-yellow-500">?</span>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 opacity-50 text-gray-500">
                  <span>Analyzing buying signals...</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="text-sm text-gray-400">12 qualified prospects found</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Core <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Everything you need for intelligent, scalable lead generation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Source Discovery</h3>
              <p className="text-gray-400 text-sm">Searches across LinkedIn, company websites, industry databases, and social media to find prospects everywhere.</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Precision Targeting</h3>
              <p className="text-gray-400 text-sm">Uses 50+ data points to identify prospects that match your exact ideal customer profile.</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Filter className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Qualification</h3>
              <p className="text-gray-400 text-sm">Automatically scores and ranks prospects based on buying intent signals and fit criteria.</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Enrichment</h3>
              <p className="text-gray-400 text-sm">Enhances every lead with verified contact details, company info, and personalized insights.</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Alerts</h3>
              <p className="text-gray-400 text-sm">Get notified instantly when high-value prospects show buying signals or match trigger events.</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">CRM Integration</h3>
              <p className="text-gray-400 text-sm">Seamlessly syncs with Salesforce, HubSpot, and other CRMs to keep your pipeline always full.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">5x Your Pipeline</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Join thousands of sales teams using Prospect Hunter to find and qualify leads 
            on autopilot while they focus on closing deals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="px-8 py-4 text-white bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 text-gray-100 bg-transparent border border-gray-600 rounded-lg font-medium hover:border-purple-600 transition-colors"
            >
              Try Prospect Hunter Free
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            No credit card required ? 14-day free trial ? Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">? 2025 NovaGent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
