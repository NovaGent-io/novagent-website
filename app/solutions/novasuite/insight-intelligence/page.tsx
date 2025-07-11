import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import InsightIntelligenceWorkflow from '@/components/workflows/InsightIntelligenceWorkflow'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function InsightIntelligencePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="Insight Intelligence"
        subheadingText="Transform raw data into actionable insights with AI that analyzes, predicts, and recommends strategies to drive growth."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "87%", label: "Faster Decision Making" },
          { value: "3.2x", label: "ROI on Data Initiatives" },
          { value: "24/7", label: "Real-Time Analysis" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="AI Analytics That See Around Corners"
        subheading="Insight Intelligence combines advanced analytics with predictive modeling to uncover opportunities and risks before they become obvious."
        capabilities={[
          {
            title: "Automated Data Integration",
            description: "AI connects and harmonizes data from all your sources, creating a single source of truth without manual ETL work.",
            icon: "Database",
            color: "from-blue-500 to-cyan-500",
            features: [
              "100+ native connectors",
              "Real-time data sync",
              "Automatic data cleaning",
              "Smart schema mapping"
            ],
            metric: { value: "95%", label: "data accuracy" }
          },
          {
            title: "Predictive Analytics Engine",
            description: "Advanced ML models forecast trends, identify patterns, and predict outcomes with remarkable accuracy.",
            icon: "TrendingUp",
            color: "from-purple-500 to-pink-500",
            features: [
              "Revenue forecasting",
              "Churn prediction",
              "Demand planning",
              "Risk assessment"
            ],
            metric: { value: "91%", label: "prediction accuracy" }
          },
          {
            title: "Natural Language Insights",
            description: "Ask questions in plain English and get instant answers with visualizations, no SQL or technical skills required.",
            icon: "MessageSquare",
            color: "from-emerald-500 to-teal-500",
            features: [
              "Conversational queries",
              "Auto-visualization",
              "Insight explanations",
              "Follow-up suggestions"
            ],
            metric: { value: "10sec", label: "avg query time" }
          },
          {
            title: "Automated Reporting Suite",
            description: "Generate and distribute custom reports automatically, with insights highlighted and recommendations included.",
            icon: "FileBarChart",
            color: "from-orange-500 to-red-500",
            features: [
              "Custom dashboards",
              "Scheduled delivery",
              "Anomaly alerts",
              "Executive summaries"
            ],
            metric: { value: "85%", label: "time saved" }
          }
        ]}
      />
      
      <InsightIntelligenceWorkflow />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              Intelligence That Drives Real Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">42%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Average revenue increase from data-driven decisions</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">$2.3M</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Identified in cost savings opportunities</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">6hrs?15min</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Weekly reporting time reduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Unlock Your Data's Full Potential?"
        subheading="Let Insight Intelligence transform your data into strategic advantage with AI that analyzes, predicts, and guides your growth."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
