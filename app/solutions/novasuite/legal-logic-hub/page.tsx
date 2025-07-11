import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import AnimatedHowItWorksSection from '@/components/AnimatedHowItWorksSection'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function LegalLogicHubPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="Legal Logic Hub"
        subheadingText="Streamline legal operations with AI that drafts contracts, manages documents, and ensures compliance automatically."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "95%", label: "Faster Contract Creation" },
          { value: "99.7%", label: "Accuracy Rate" },
          { value: "82%", label: "Cost Reduction" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="AI Legal Operations That Scale With You"
        subheading="Legal Logic Hub combines intelligent document generation with automated workflows to transform how legal work gets done."
        capabilities={[
          {
            title: "Smart Contract Generation",
            description: "AI creates customized contracts from your templates, ensuring consistency while adapting to specific deal terms.",
            icon: "FileText",
            color: "from-blue-500 to-cyan-500",
            features: [
              "Template library management",
              "Dynamic clause selection",
              "Multi-party coordination",
              "Version control"
            ],
            metric: { value: "10min", label: "avg draft time" }
          },
          {
            title: "Automated Document Review",
            description: "AI analyzes contracts for risks, missing clauses, and compliance issues before they become problems.",
            icon: "Search",
            color: "from-purple-500 to-pink-500",
            features: [
              "Risk identification",
              "Clause extraction",
              "Compliance checking",
              "Precedent matching"
            ],
            metric: { value: "98%", label: "issue detection" }
          },
          {
            title: "Intelligent Workflow Management",
            description: "Orchestrate approvals, signatures, and deadlines automatically while maintaining complete audit trails.",
            icon: "GitBranch",
            color: "from-emerald-500 to-teal-500",
            features: [
              "Approval routing",
              "E-signature integration",
              "Deadline tracking",
              "Audit logging"
            ],
            metric: { value: "75%", label: "faster turnaround" }
          },
          {
            title: "Legal Knowledge Base",
            description: "AI-powered repository that learns from your documents to provide instant answers and precedent recommendations.",
            icon: "Brain",
            color: "from-orange-500 to-red-500",
            features: [
              "Natural language search",
              "Precedent analysis",
              "Clause recommendations",
              "Regulatory updates"
            ],
            metric: { value: "24/7", label: "availability" }
          }
        ]}
      />
      
      <AnimatedHowItWorksSection
        heading="How Legal Logic Hub Works"
        subheading="A sophisticated system that transforms legal complexity into streamlined efficiency"
        steps={[
          {
            title: "Upload Your Templates",
            description: "Import your existing contracts, templates, and legal documents to build your personalized AI knowledge base."
          },
          {
            title: "AI Learns Your Style",
            description: "The system analyzes your documents to understand your preferred language, clauses, and negotiation patterns."
          },
          {
            title: "Automated Drafting",
            description: "Generate new contracts instantly by providing key terms - AI handles the rest while maintaining your standards."
          },
          {
            title: "Intelligent Management",
            description: "Track obligations, renewals, and compliance automatically with proactive alerts and recommendations."
          }
        ]}
      />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              Legal Efficiency That Delivers Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">6hrs?15min</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Contract drafting time reduction</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">$450K</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Annual savings on legal operations</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">Zero</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Compliance violations from missed deadlines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Transform Your Legal Operations?"
        subheading="Let Legal Logic Hub revolutionize your legal workflows with AI that drafts faster, reviews smarter, and ensures nothing falls through the cracks."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
