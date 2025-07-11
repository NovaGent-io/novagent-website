import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import AnimatedHowItWorksSection from '@/components/AnimatedHowItWorksSection'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function TalentScoutEnginePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="Talent Scout Engine"
        subheadingText="Find and attract top talent with AI that sources candidates, screens applications, and identifies perfect matches 24/7."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "92%", label: "Quality of Hire Score" },
          { value: "73%", label: "Faster Time to Fill" },
          { value: "4.6x", label: "More Qualified Candidates" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="AI Recruiting That Finds Hidden Gems"
        subheading="Talent Scout Engine combines deep sourcing capabilities with intelligent screening to build a pipeline of exceptional candidates automatically."
        capabilities={[
          {
            title: "Multi-Channel Talent Sourcing",
            description: "AI searches across job boards, social networks, and talent databases to find both active and passive candidates.",
            icon: "Search",
            color: "from-blue-500 to-cyan-500",
            features: [
              "LinkedIn deep search",
              "GitHub talent mining",
              "Boolean query optimization",
              "Passive candidate identification"
            ],
            metric: { value: "10M+", label: "profiles accessed" }
          },
          {
            title: "Intelligent Resume Screening",
            description: "Advanced NLP analyzes resumes beyond keywords, understanding context, experience quality, and cultural fit.",
            icon: "FileText",
            color: "from-purple-500 to-pink-500",
            features: [
              "Contextual skill matching",
              "Experience validation",
              "Culture fit scoring",
              "Bias-free screening"
            ],
            metric: { value: "96%", label: "screening accuracy" }
          },
          {
            title: "Automated Candidate Engagement",
            description: "Personalized outreach sequences that nurture relationships and keep top talent engaged throughout the process.",
            icon: "MessageSquare",
            color: "from-emerald-500 to-teal-500",
            features: [
              "Personalized messaging",
              "Interview scheduling",
              "Status updates",
              "Candidate experience tracking"
            ],
            metric: { value: "68%", label: "response rate" }
          },
          {
            title: "Predictive Hiring Analytics",
            description: "AI predicts candidate success, retention likelihood, and team fit based on historical data and performance patterns.",
            icon: "Brain",
            color: "from-orange-500 to-red-500",
            features: [
              "Success prediction",
              "Retention forecasting",
              "Team dynamics analysis",
              "Offer acceptance probability"
            ],
            metric: { value: "89%", label: "prediction accuracy" }
          }
        ]}
      />
      
      <AnimatedHowItWorksSection
        heading="How Talent Scout Engine Works"
        subheading="A comprehensive system that transforms recruiting from reactive to proactive"
        steps={[
          {
            title: "Define Your Ideal Profile",
            description: "Set requirements including skills, experience, culture fit, and other criteria that matter for the role."
          },
          {
            title: "AI Hunts Everywhere",
            description: "The engine searches multiple platforms simultaneously, identifying candidates that match your exact needs."
          },
          {
            title: "Smart Screening & Ranking",
            description: "Applications are analyzed, scored, and ranked based on fit, with detailed insights on each candidate."
          },
          {
            title: "Automated Engagement",
            description: "Top candidates receive personalized outreach, interview invitations, and are guided through your hiring process."
          }
        ]}
      />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              Recruiting Results That Build Great Teams
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">21?7</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Days to hire reduced from 21 to 7</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">$8,400</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Average cost per hire reduction</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">94%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">New hire retention after 12 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Build Your Dream Team Faster?"
        subheading="Let Talent Scout Engine transform your hiring with AI that finds, screens, and engages the perfect candidates for every role."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
