import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import AnimatedHowItWorksSection from '@/components/AnimatedHowItWorksSection'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function RegulatoryRiskGuardPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="Regulatory Risk Guard"
        subheadingText="Stay ahead of compliance with AI that monitors regulations, manages documentation, and prevents violations before they happen."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "99.8%", label: "Compliance Rate Achieved" },
          { value: "85%", label: "Faster Audit Preparation" },
          { value: "$2.4M", label: "Avg Penalties Avoided" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="AI-Powered Compliance That Never Sleeps"
        subheading="Regulatory Risk Guard combines real-time monitoring with intelligent automation to ensure your business stays compliant across all jurisdictions."
        capabilities={[
          {
            title: "Real-Time Regulation Tracking",
            description: "AI monitors regulatory changes across federal, state, and local jurisdictions, alerting you to relevant updates instantly.",
            icon: "Shield",
            color: "from-blue-500 to-cyan-500",
            features: [
              "Multi-jurisdiction monitoring",
              "Change impact analysis",
              "Automated alerts",
              "Regulatory calendars"
            ],
            metric: { value: "24/7", label: "monitoring coverage" }
          },
          {
            title: "Intelligent Document Management",
            description: "Automatically generate, update, and maintain compliance documentation with version control and audit trails.",
            icon: "FileCheck",
            color: "from-purple-500 to-pink-500",
            features: [
              "Policy template library",
              "Auto-documentation",
              "Version control",
              "Digital signatures"
            ],
            metric: { value: "93%", label: "documentation accuracy" }
          },
          {
            title: "Risk Assessment Engine",
            description: "Continuously evaluate your operations against regulatory requirements to identify and prioritize compliance gaps.",
            icon: "AlertTriangle",
            color: "from-emerald-500 to-teal-500",
            features: [
              "Gap analysis",
              "Risk scoring",
              "Mitigation planning",
              "Predictive insights"
            ],
            metric: { value: "72%", label: "risks prevented" }
          },
          {
            title: "Audit Preparation Assistant",
            description: "Be audit-ready at all times with AI that organizes evidence, prepares reports, and manages the entire audit lifecycle.",
            icon: "ClipboardCheck",
            color: "from-orange-500 to-red-500",
            features: [
              "Evidence collection",
              "Report generation",
              "Auditor portal",
              "Finding remediation"
            ],
            metric: { value: "10x", label: "faster prep time" }
          }
        ]}
      />
      
      <AnimatedHowItWorksSection
        heading="How Regulatory Risk Guard Works"
        subheading="A proactive system that transforms compliance from a burden to a competitive advantage"
        steps={[
          {
            title: "Connect Your Systems",
            description: "Integrate with your existing tools, databases, and workflows to create a unified compliance ecosystem."
          },
          {
            title: "AI Maps Requirements",
            description: "The system analyzes your business operations and maps them against applicable regulations and standards."
          },
          {
            title: "Continuous Monitoring",
            description: "AI monitors for regulatory changes, operational risks, and compliance gaps in real-time across all areas."
          },
          {
            title: "Automated Remediation",
            description: "When issues are detected, the system guides remediation efforts and updates documentation automatically."
          }
        ]}
      />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              Compliance Results That Protect Your Business
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Zero</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Compliance violations in the last 24 months</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">68%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Reduction in compliance team workload</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">100%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Audit success rate with zero major findings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Make Compliance Your Competitive Edge?"
        subheading="Let Regulatory Risk Guard protect your business with AI that ensures compliance, prevents violations, and turns regulations into strategic advantages."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
