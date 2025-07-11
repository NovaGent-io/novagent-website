import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import AnimatedHowItWorksSection from '@/components/AnimatedHowItWorksSection'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function VisibilityTrustManagerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="Visibility & Trust Manager"
        subheadingText="Build and protect your brand reputation with AI that monitors, manages, and amplifies your online presence 24/7."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "4.7?", label: "Average Rating Achieved" },
          { value: "82%", label: "More Positive Reviews" },
          { value: "3x", label: "Higher Search Visibility" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="AI-Powered Brand Protection & Growth"
        subheading="Visibility & Trust Manager combines reputation monitoring, review management, and SEO optimization to build unstoppable brand authority."
        capabilities={[
          {
            title: "Real-Time Reputation Monitoring",
            description: "AI monitors mentions across 100+ platforms, alerting you instantly to reviews, comments, and brand discussions.",
            icon: "Eye",
            color: "from-blue-500 to-cyan-500",
            features: [
              "Multi-platform monitoring",
              "Sentiment analysis",
              "Competitive tracking",
              "Alert prioritization"
            ],
            metric: { value: "24/7", label: "monitoring coverage" }
          },
          {
            title: "Intelligent Review Management",
            description: "Automatically request reviews from happy customers and respond to feedback with personalized, brand-aligned messages.",
            icon: "Star",
            color: "from-purple-500 to-pink-500",
            features: [
              "Automated review requests",
              "AI-powered responses",
              "Review platform sync",
              "Crisis detection"
            ],
            metric: { value: "95%", label: "response rate" }
          },
          {
            title: "SEO Content Generation",
            description: "Create search-optimized content that ranks, drives traffic, and establishes your expertise in your industry.",
            icon: "FileText",
            color: "from-emerald-500 to-teal-500",
            features: [
              "Keyword research automation",
              "Content optimization",
              "Local SEO management",
              "Schema markup generation"
            ],
            metric: { value: "250%", label: "traffic increase" }
          },
          {
            title: "Brand Sentiment Analysis",
            description: "Track and analyze how customers feel about your brand over time, identifying trends and opportunities for improvement.",
            icon: "TrendingUp",
            color: "from-orange-500 to-red-500",
            features: [
              "Emotion detection",
              "Trend identification",
              "Competitor benchmarking",
              "Actionable insights"
            ],
            metric: { value: "89%", label: "insight accuracy" }
          }
        ]}
      />
      
      <AnimatedHowItWorksSection
        heading="How Visibility & Trust Manager Works"
        subheading="A comprehensive system that protects and promotes your brand automatically"
        steps={[
          {
            title: "Connect Your Profiles",
            description: "Link your Google Business Profile, social media accounts, review platforms, and website for unified management."
          },
          {
            title: "AI Monitors Everything",
            description: "Our AI continuously scans for mentions, reviews, and ranking changes across all platforms and search engines."
          },
          {
            title: "Automated Response & Action",
            description: "The system responds to reviews, creates SEO content, and manages your online presence based on best practices."
          },
          {
            title: "Measure & Optimize",
            description: "Track improvements in ratings, rankings, and sentiment while the AI continuously refines its approach."
          }
        ]}
      />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              Reputation Results You Can Measure
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">340%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Increase in positive reviews within 90 days</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">Top 3</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Google ranking for local search terms</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">$125K</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Average revenue increase from reputation improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Build Unshakeable Brand Trust?"
        subheading="Let Visibility & Trust Manager protect and promote your reputation with AI that works 24/7 to build your brand authority."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
