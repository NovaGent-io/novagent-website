import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import AnimatedHowItWorksSection from '@/components/AnimatedHowItWorksSection'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function PropertyIntelligenceManagerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="Property Intelligence Manager"
        subheadingText="Revolutionize real estate operations with AI that manages listings, analyzes markets, and automates transactions 24/7."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "87%", label: "Faster Property Turnover" },
          { value: "94%", label: "Listing Accuracy" },
          { value: "3.2x", label: "More Qualified Leads" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="AI-Powered Real Estate That Sells Itself"
        subheading="Property Intelligence Manager combines market intelligence with automated workflows to transform how properties are marketed, sold, and managed."
        capabilities={[
          {
            title: "Smart Listing Management",
            description: "AI creates compelling property listings, syncs across platforms, and optimizes descriptions for maximum visibility.",
            icon: "Home",
            color: "from-blue-500 to-cyan-500",
            features: [
              "Multi-platform syndication",
              "SEO-optimized descriptions",
              "Virtual tour integration",
              "Automatic updates"
            ],
            metric: { value: "15min", label: "to list everywhere" }
          },
          {
            title: "Market Intelligence Engine",
            description: "Real-time analysis of market trends, comparable properties, and pricing strategies to maximize property value.",
            icon: "TrendingUp",
            color: "from-purple-500 to-pink-500",
            features: [
              "Comparative market analysis",
              "Price optimization",
              "Trend forecasting",
              "Investment insights"
            ],
            metric: { value: "96%", label: "pricing accuracy" }
          },
          {
            title: "Lead Qualification System",
            description: "AI engages with inquiries, qualifies buyers/renters, and schedules viewings automatically based on their needs.",
            icon: "UserCheck",
            color: "from-emerald-500 to-teal-500",
            features: [
              "24/7 inquiry response",
              "Financial pre-qualification",
              "Preference matching",
              "Viewing coordination"
            ],
            metric: { value: "82%", label: "lead quality score" }
          },
          {
            title: "Transaction Automation",
            description: "Streamline the entire transaction process from offer to closing with intelligent document management and tracking.",
            icon: "FileCheck",
            color: "from-orange-500 to-red-500",
            features: [
              "Document generation",
              "Compliance verification",
              "Timeline management",
              "Stakeholder coordination"
            ],
            metric: { value: "65%", label: "faster closings" }
          }
        ]}
      />
      
      <AnimatedHowItWorksSection
        heading="How Property Intelligence Manager Works"
        subheading="A comprehensive system that transforms real estate chaos into seamless transactions"
        steps={[
          {
            title: "Connect Your Portfolio",
            description: "Import your property listings, connect MLS access, and integrate with your existing real estate tools."
          },
          {
            title: "AI Analyzes Everything",
            description: "The system evaluates market conditions, property features, and buyer behavior to optimize every aspect."
          },
          {
            title: "Automated Marketing",
            description: "Properties are marketed across all channels with AI-optimized listings, photos, and targeted campaigns."
          },
          {
            title: "Intelligent Management",
            description: "From lead engagement to closing coordination, AI handles the details while you focus on relationships."
          }
        ]}
      />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              Real Estate Results That Close Deals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">42%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Higher selling prices through market optimization</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">28?9</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Days on market reduced from 28 to 9</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">$2.1M</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Additional commission revenue per year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Dominate Your Real Estate Market?"
        subheading="Let Property Intelligence Manager transform your real estate business with AI that markets smarter, sells faster, and manages everything automatically."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
