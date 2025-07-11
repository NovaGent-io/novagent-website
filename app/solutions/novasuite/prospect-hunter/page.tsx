import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import ProspectHunterPipeline from '@/components/ProspectHunterPipeline'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function ProspectHunterPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="Prospect Hunter"
        subheadingText="Transform your outreach with AI-powered lead generation that finds, qualifies, and engages your ideal customers 24/7."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "3.5x", label: "Higher Conversion Rate" },
          { value: "87%", label: "Time Saved on Prospecting" },
          { value: "24/7", label: "Continuous Operation" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="Intelligent Lead Generation at Scale"
        subheading="Prospect Hunter combines advanced AI with real-time data to identify and engage high-value prospects automatically."
        capabilities={[
          {
            title: "Smart Lead Discovery",
            description: "AI-powered search algorithms identify ideal prospects based on your specific criteria, industry, and target demographics.",
            icon: "Search",
            color: "from-blue-500 to-cyan-500",
            features: [
              "500+ integrated data sources",
              "Advanced boolean search capabilities",
              "Industry-specific targeting",
              "Technographic filtering"
            ],
            metric: { value: "94%", label: "match accuracy" }
          },
          {
            title: "Real-Time Enrichment",
            description: "Automatically enrich leads with verified contact information, company data, and buying signals from multiple sources.",
            icon: "Database",
            color: "from-purple-500 to-pink-500",
            features: [
              "75+ data points per lead",
              "Email and phone verification",
              "Social media profile matching",
              "Intent data integration"
            ],
            metric: { value: "2.5M", label: "verified contacts" }
          },
          {
            title: "Multi-Channel Outreach",
            description: "Engage prospects across email, LinkedIn, and other channels with personalized messages that resonate.",
            icon: "MessageSquare",
            color: "from-emerald-500 to-teal-500",
            features: [
              "Dynamic personalization engine",
              "A/B testing capabilities",
              "Optimal send time prediction",
              "Cross-channel orchestration"
            ],
            metric: { value: "32%", label: "avg response rate" }
          },
          {
            title: "Intelligent Qualification",
            description: "AI scores and qualifies leads based on engagement, fit, and intent signals, focusing your team on the best opportunities.",
            icon: "Target",
            color: "from-orange-500 to-red-500",
            features: [
              "Behavioral scoring models",
              "Custom qualification criteria",
              "Real-time lead routing",
              "Meeting scheduler integration"
            ],
            metric: { value: "89%", label: "qualification accuracy" }
          }
        ]}
      />
      
      <ProspectHunterPipeline />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              Results That Matter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">85%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Higher response rates than traditional outreach</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">3x</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">More qualified meetings booked per month</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">60%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Reduction in cost per qualified lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Accelerate Your Pipeline?"
        subheading="Let Prospect Hunter transform your lead generation process with AI that works 24/7 to find and engage your ideal customers."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
