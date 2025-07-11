// How It Works Section Component
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Prospect Hunter</span> Works
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-3xl mx-auto">
          Your AI agent uses advanced intelligence to identify, qualify, and engage with your ideal prospects automatically
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Process Steps */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Define Your ICP</h3>
                <p className="text-slate-400">Set your ideal customer profile with industry, company size, job titles, and other targeting criteria</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Multi-Source Discovery</h3>
                <p className="text-slate-400">Your agent searches across LinkedIn, company websites, databases, and more to find matching prospects</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Qualification</h3>
                <p className="text-slate-400">Advanced scoring algorithms evaluate each prospect based on fit, intent signals, and engagement potential</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">CRM Integration</h3>
                <p className="text-slate-400">Qualified leads are automatically enriched and delivered to your CRM with complete contact information</p>
              </div>
            </div>
          </div>

          {/* Demo Card */}
          <Card className="bg-slate-900/50 border-slate-800 p-8 animate-float">
            <div className="text-center mb-6">
              <Badge className="bg-cyan-500/10 text-cyan-400 mb-2">Live Prospect Hunter Demo</Badge>
              <div className="text-2xl font-mono text-slate-300">Scanning LinkedIn Sales Navigator...</div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-slate-800/50 rounded-lg p-3 flex justify-between items-center">
                <span className="text-sm">Found: Sarah Chen, VP Sales @ TechCorp</span>
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 flex justify-between items-center opacity-75">
                <span className="text-sm">Analyzing: Michael Ross, Director @ DataFlow</span>
                <div className="w-5 h-5 border-2 border-yellow-400 rounded-full border-t-transparent animate-spin" />
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 opacity-50">
                <span className="text-sm text-slate-500">Pending: 47 more prospects in queue...</span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="text-sm text-slate-400">Result: 12 qualified leads ready for outreach</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}