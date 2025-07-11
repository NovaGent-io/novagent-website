import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import SupportConciergeWorkflow from '@/components/workflows/SupportConciergeWorkflow'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function SupportConciergePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="Support Concierge"
        subheadingText="Deliver exceptional customer service 24/7 with AI that resolves issues instantly, escalates intelligently, and delights customers."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "85%", label: "First Contact Resolution" },
          { value: "4.8/5", label: "Customer Satisfaction" },
          { value: "90%", label: "Cost Reduction" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="AI Support That Customers Actually Love"
        subheading="Support Concierge combines deep knowledge bases with emotional intelligence to provide support that feels personal and solves problems fast."
        capabilities={[
          {
            title: "Instant Issue Resolution",
            description: "AI understands context, accesses your knowledge base, and resolves common issues without human intervention.",
            icon: "Headphones",
            color: "from-blue-500 to-cyan-500",
            features: [
              "Natural language understanding",
              "Multi-language support",
              "Context-aware responses",
              "Solution verification"
            ],
            metric: { value: "92%", label: "accuracy rate" }
          },
          {
            title: "Smart Ticket Management",
            description: "Automatically categorize, prioritize, and route tickets to the right team members based on complexity and urgency.",
            icon: "Inbox",
            color: "from-purple-500 to-pink-500",
            features: [
              "Auto-categorization",
              "Priority scoring",
              "Intelligent routing",
              "SLA monitoring"
            ],
            metric: { value: "75%", label: "faster resolution" }
          },
          {
            title: "Proactive Support",
            description: "Identify and resolve issues before customers even notice them, turning problems into positive experiences.",
            icon: "Shield",
            color: "from-emerald-500 to-teal-500",
            features: [
              "Issue prediction",
              "Automated notifications",
              "Self-healing workflows",
              "Preventive messaging"
            ],
            metric: { value: "60%", label: "issues prevented" }
          },
          {
            title: "Seamless Escalation",
            description: "When human touch is needed, AI provides agents with complete context and suggested solutions for quick resolution.",
            icon: "Users",
            color: "from-orange-500 to-red-500",
            features: [
              "Context preservation",
              "Agent assist mode",
              "Suggested responses",
              "Knowledge surfacing"
            ],
            metric: { value: "3x", label: "faster handoffs" }
          }
        ]}
      />
      
      <SupportConciergeWorkflow />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              Support Metrics That Matter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2min</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Average response time vs 24hr industry standard</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">94%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Customer issues resolved without escalation</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">$18</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Cost per ticket vs $75 human average</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Transform Your Customer Support?"
        subheading="Let Support Concierge deliver exceptional service 24/7 with AI that resolves issues instantly and keeps customers happy."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
