import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import SmartDialerWorkflow from '@/components/workflows/SmartDialerWorkflow'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function SmartOutreachDialerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="Smart Outreach Dialer"
        subheadingText="Scale your phone outreach with AI that makes thousands of personalized calls, qualifies leads, and books appointments automatically."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "10x", label: "More Conversations Daily" },
          { value: "45%", label: "Connect Rate Achieved" },
          { value: "24/7", label: "Autonomous Operation" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="Voice AI That Sounds Human, Works Like Magic"
        subheading="Smart Outreach Dialer combines natural language processing with intelligent call routing to deliver personalized conversations at scale."
        capabilities={[
          {
            title: "Natural Conversations",
            description: "Advanced voice AI that sounds genuinely human, handling objections and questions with context-aware responses.",
            icon: "Phone",
            color: "from-blue-500 to-cyan-500",
            features: [
              "Natural voice synthesis",
              "Dynamic conversation flows",
              "Objection handling library",
              "Sentiment detection"
            ],
            metric: { value: "97%", label: "human-like rating" }
          },
          {
            title: "Intelligent Call Routing",
            description: "AI determines the best action for each call - qualify further, book a meeting, or route to the right team member.",
            icon: "GitBranch",
            color: "from-purple-500 to-pink-500",
            features: [
              "Real-time lead scoring",
              "Smart transfer logic",
              "Voicemail detection",
              "Callback scheduling"
            ],
            metric: { value: "3.5x", label: "qualified leads" }
          },
          {
            title: "Parallel Dialing Engine",
            description: "Make hundreds of simultaneous calls while maintaining quality and compliance with local regulations.",
            icon: "Zap",
            color: "from-emerald-500 to-teal-500",
            features: [
              "Predictive dialing algorithms",
              "TCPA compliance built-in",
              "Local presence dialing",
              "Optimal time calling"
            ],
            metric: { value: "500+", label: "calls per hour" }
          },
          {
            title: "Real-Time Analytics",
            description: "Track performance, listen to recordings, and optimize scripts based on what's actually working in the field.",
            icon: "BarChart3",
            color: "from-orange-500 to-red-500",
            features: [
              "Call recording & transcription",
              "Conversion tracking",
              "A/B script testing",
              "Performance dashboards"
            ],
            metric: { value: "82%", label: "insight accuracy" }
          }
        ]}
      />
      
      <SmartDialerWorkflow />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              Results That Speak Volumes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">68%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Higher contact rates than manual dialing</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">$312K</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Average revenue per 1000 dials</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">91%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Cost reduction vs human SDRs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Scale Your Phone Outreach?"
        subheading="Let Smart Outreach Dialer transform your calling process with AI that works 24/7 to connect with prospects and book qualified meetings."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
