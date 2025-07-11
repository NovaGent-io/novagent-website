// Capabilities Section Component
import { Card } from '@/components/ui/card'
import { Globe, Brain, Users, Zap, Database, BarChart3 } from 'lucide-react'

export function CapabilitiesSection() {
  return (
    <section className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Core <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Capabilities</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-3xl mx-auto">
          Everything you need for intelligent lead generation at scale
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Capability 1 */}
          <Card className="bg-slate-900/50 border-slate-800 p-6 hover:border-cyan-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Multi-Source Discovery</h3>
            <p className="text-slate-400">
              Searches LinkedIn, company websites, industry databases, and public records to find prospects that match your criteria
            </p>
          </Card>

          {/* Capability 2 */}
          <Card className="bg-slate-900/50 border-slate-800 p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Qualification</h3>
            <p className="text-slate-400">
              Uses machine learning to score leads based on firmographic data, technographic signals, and buying intent indicators
            </p>
          </Card>

          {/* Capability 3 */}
          <Card className="bg-slate-900/50 border-slate-800 p-6 hover:border-purple-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Contact Enrichment</h3>
            <p className="text-slate-400">
              Automatically finds email addresses, phone numbers, and social profiles for each qualified prospect
            </p>
          </Card>

          {/* Capability 4 */}
          <Card className="bg-slate-900/50 border-slate-800 p-6 hover:border-pink-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-Time Alerts</h3>
            <p className="text-slate-400">
              Get notified instantly when high-value prospects matching your criteria are discovered
            </p>
          </Card>

          {/* Capability 5 */}
          <Card className="bg-slate-900/50 border-slate-800 p-6 hover:border-cyan-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">CRM Sync</h3>
            <p className="text-slate-400">
              Seamlessly integrates with Salesforce, HubSpot, and other CRMs to keep your pipeline always up-to-date
            </p>
          </Card>

          {/* Capability 6 */}
          <Card className="bg-slate-900/50 border-slate-800 p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
            <p className="text-slate-400">
              Track lead quality, conversion rates, and ROI with detailed dashboards and reporting
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}