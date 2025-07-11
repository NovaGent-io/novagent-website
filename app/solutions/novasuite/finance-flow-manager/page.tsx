import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import AnimatedHowItWorksSection from '@/components/AnimatedHowItWorksSection'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function FinanceFlowManagerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="Finance Flow Manager"
        subheadingText="Automate financial operations with AI that manages invoicing, tracks expenses, and optimizes cash flow 24/7."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "98%", label: "Invoice Accuracy Rate" },
          { value: "85%", label: "Faster Collections" },
          { value: "40%", label: "Cash Flow Improvement" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="AI-Powered Finance That Runs Itself"
        subheading="Finance Flow Manager combines intelligent automation with real-time insights to transform your financial operations from reactive to proactive."
        capabilities={[
          {
            title: "Automated Invoice Processing",
            description: "AI generates, sends, and tracks invoices automatically while managing follow-ups and payment reminders.",
            icon: "FileText",
            color: "from-blue-500 to-cyan-500",
            features: [
              "Smart invoice generation",
              "Multi-currency support",
              "Payment tracking",
              "Automated reminders"
            ],
            metric: { value: "3min", label: "per invoice" }
          },
          {
            title: "Intelligent Expense Management",
            description: "Automatically capture, categorize, and approve expenses with AI that learns your policies and patterns.",
            icon: "Receipt",
            color: "from-purple-500 to-pink-500",
            features: [
              "Receipt scanning & OCR",
              "Auto-categorization",
              "Policy enforcement",
              "Fraud detection"
            ],
            metric: { value: "95%", label: "accuracy rate" }
          },
          {
            title: "Cash Flow Optimization",
            description: "Predictive analytics forecast cash positions and recommend actions to maintain healthy working capital.",
            icon: "TrendingUp",
            color: "from-emerald-500 to-teal-500",
            features: [
              "30-90 day forecasting",
              "Scenario modeling",
              "Collection optimization",
              "Payment scheduling"
            ],
            metric: { value: "92%", label: "forecast accuracy" }
          },
          {
            title: "Real-Time Financial Insights",
            description: "Get instant visibility into financial health with dashboards that update automatically and alert on anomalies.",
            icon: "BarChart3",
            color: "from-orange-500 to-red-500",
            features: [
              "Live P&L tracking",
              "Budget vs actual",
              "Variance analysis",
              "Custom KPI monitoring"
            ],
            metric: { value: "24/7", label: "monitoring" }
          }
        ]}
      />
      
      <AnimatedHowItWorksSection
        heading="How Finance Flow Manager Works"
        subheading="A comprehensive system that transforms financial chaos into streamlined operations"
        steps={[
          {
            title: "Connect Your Systems",
            description: "Integrate with your accounting software, bank accounts, and payment processors for unified financial management."
          },
          {
            title: "AI Learns Your Patterns",
            description: "The system analyzes your historical data to understand your business cycles, policies, and preferences."
          },
          {
            title: "Automated Execution",
            description: "From invoice generation to expense approval, AI handles routine tasks while flagging exceptions for review."
          },
          {
            title: "Continuous Optimization",
            description: "Machine learning improves accuracy over time while providing insights to optimize your financial operations."
          }
        ]}
      />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              Financial Impact You Can Bank On
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">12?3</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Days sales outstanding reduced from 12 to 3</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">$185K</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Annual savings from automation efficiency</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">99.7%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Financial reporting accuracy achieved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Put Your Finances on Autopilot?"
        subheading="Let Finance Flow Manager transform your financial operations with AI that ensures accuracy, improves cash flow, and saves countless hours."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
