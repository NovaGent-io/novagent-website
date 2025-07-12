import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Search, UserCheck, TrendingUp, Database, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Prospect Hunter - Lead Generation | NovaGent',
  description: 'Automate your lead generation with NovaGent\'s AI-powered Prospect Hunter. Find, qualify, and engage with high-quality prospects 24/7.',
}

export default function ProspectHunterPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Target className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm text-blue-400">Lead Generation Capability</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Prospect Hunter
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Transform your lead generation with AI that works 24/7 to find, qualify, and engage your ideal prospects. 
              No more manual prospecting - let your AI agent hunt for opportunities while you close deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                <Link href="/contact">
                  Deploy Prospect Hunter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
                <Link href="/capabilities">
                  Explore All Capabilities
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Intelligent Lead Generation at Scale
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <Search className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Smart Prospecting</h3>
              <p className="text-slate-400">
                Automatically searches across multiple data sources to find prospects matching your ideal customer profile.
              </p>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <UserCheck className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Lead Qualification</h3>
              <p className="text-slate-400">
                Uses AI to score and qualify leads based on your specific criteria, ensuring you only pursue high-value opportunities.
              </p>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <TrendingUp className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Engagement Automation</h3>
              <p className="text-slate-400">
                Initiates personalized outreach campaigns across email and LinkedIn to warm up prospects before handoff.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            How Prospect Hunter Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-white">1. Define Criteria</h3>
              <p className="text-sm text-slate-400">Set your ideal customer profile and targeting parameters</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2 text-white">2. AI Searches</h3>
              <p className="text-sm text-slate-400">Your agent searches across multiple sources for matching prospects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="font-semibold mb-2 text-white">3. Qualify Leads</h3>
              <p className="text-sm text-slate-400">AI scores and filters prospects based on fit and intent signals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2 text-white">4. Deliver Results</h3>
              <p className="text-sm text-slate-400">Qualified leads are delivered to your CRM or sales team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Notice */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-800/50">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
              <span className="text-sm text-yellow-400">New Platform Update</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Part of the NovaGent Platform
            </h2>
            <p className="text-slate-300 mb-6">
              Prospect Hunter is now part of our unified AI agent platform. Instead of multiple separate agents, 
              you get one powerful AI agent equipped with modular capabilities like Lead Generation (Prospect Hunter), 
              Schedule Coordinator, and more - all managed by our expert team.
            </p>
            <Button asChild className="bg-white text-slate-900 hover:bg-slate-100">
              <Link href="/capabilities">
                View All Capabilities.
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Automate Your Lead Generation?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let our experts configure Prospect Hunter for your specific needs and watch your pipeline grow.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
