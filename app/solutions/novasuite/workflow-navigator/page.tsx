import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import AnimatedHowItWorksSection from '@/components/AnimatedHowItWorksSection'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function WorkflowNavigatorPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="Workflow Navigator"
        subheadingText="Orchestrate complex projects with AI that manages tasks, coordinates teams, and ensures everything stays on track automatically."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "94%", label: "On-Time Delivery Rate" },
          { value: "67%", label: "Productivity Increase" },
          { value: "3.5x", label: "Faster Project Completion" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="AI Project Management That Thinks Ahead"
        subheading="Workflow Navigator combines intelligent task orchestration with predictive planning to keep projects moving smoothly without constant oversight."
        capabilities={[
          {
            title: "Smart Task Orchestration",
            description: "AI automatically creates, assigns, and prioritizes tasks based on project goals, dependencies, and team capacity.",
            icon: "GitBranch",
            color: "from-blue-500 to-cyan-500",
            features: [
              "Dependency mapping",
              "Auto-task creation",
              "Priority optimization",
              "Resource balancing"
            ],
            metric: { value: "88%", label: "efficiency gain" }
          },
          {
            title: "Predictive Project Planning",
            description: "Machine learning analyzes past projects to accurately forecast timelines, identify risks, and suggest optimizations.",
            icon: "Calendar",
            color: "from-purple-500 to-pink-500",
            features: [
              "Timeline forecasting",
              "Risk prediction",
              "Bottleneck detection",
              "Scenario planning"
            ],
            metric: { value: "92%", label: "forecast accuracy" }
          },
          {
            title: "Team Coordination Hub",
            description: "Keep everyone aligned with automated updates, smart notifications, and context-aware communication routing.",
            icon: "Users",
            color: "from-emerald-500 to-teal-500",
            features: [
              "Status synchronization",
              "Meeting summaries",
              "Action item tracking",
              "Cross-team visibility"
            ],
            metric: { value: "75%", label: "fewer meetings" }
          },
          {
            title: "Intelligent Progress Tracking",
            description: "Real-time monitoring with AI that detects delays, suggests interventions, and keeps stakeholders informed automatically.",
            icon: "BarChart3",
            color: "from-orange-500 to-red-500",
            features: [
              "Real-time dashboards",
              "Automated reporting",
              "Milestone tracking",
              "Performance insights"
            ],
            metric: { value: "24/7", label: "monitoring" }
          }
        ]}
      />
      
      <AnimatedHowItWorksSection
        heading="How Workflow Navigator Works"
        subheading="A intelligent system that transforms project chaos into coordinated execution"
        steps={[
          {
            title: "Define Project Goals",
            description: "Set your objectives, timelines, and key milestones - the AI handles the detailed planning and task breakdown."
          },
          {
            title: "AI Plans & Assigns",
            description: "The system creates optimal task sequences, assigns work based on skills and availability, and sets realistic deadlines."
          },
          {
            title: "Continuous Optimization",
            description: "As work progresses, AI adjusts plans, reallocates resources, and keeps everything on track automatically."
          },
          {
            title: "Proactive Problem Solving",
            description: "When risks or delays are detected, the system alerts stakeholders and suggests corrective actions immediately."
          }
        ]}
      />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              Project Success Metrics That Matter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">82%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Reduction in project overruns and delays</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">45%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Less time spent on project administration</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">$380K</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Average annual savings from efficiency gains</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Make Every Project a Success?"
        subheading="Let Workflow Navigator transform your project management with AI that plans, coordinates, and delivers results automatically."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
