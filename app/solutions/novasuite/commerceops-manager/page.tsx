import InteractiveCapabilitiesSection from '@/components/InteractiveCapabilitiesSection'
import CTASection from '@/components/CTASection'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import AnimatedHowItWorksSection from '@/components/AnimatedHowItWorksSection'
import IntegrationsAndFeaturesSection from '@/components/IntegrationsAndFeaturesSection'

export default function CommerceOpsManagerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <EnhancedHeroSection
        className="hero-section bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 text-white"
        headingText="CommerceOps Manager"
        subheadingText="Automate e-commerce operations with AI that manages inventory, optimizes pricing, and maximizes conversions across all channels."
        primaryButtonText="See It In Action"
        primaryButtonHref="#demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
        stats={[
          { value: "42%", label: "Revenue Increase" },
          { value: "89%", label: "Inventory Accuracy" },
          { value: "3.7x", label: "Conversion Rate Lift" }
        ]}
      />
      
      <InteractiveCapabilitiesSection
        heading="AI E-Commerce That Never Sleeps"
        subheading="CommerceOps Manager combines intelligent automation with real-time optimization to transform your online store into a revenue-generating machine."
        capabilities={[
          {
            title: "Dynamic Pricing Engine",
            description: "AI monitors competitors, demand, and inventory to adjust prices in real-time for maximum profitability.",
            icon: "DollarSign",
            color: "from-blue-500 to-cyan-500",
            features: [
              "Competitor price tracking",
              "Demand-based pricing",
              "Margin optimization",
              "Promotional automation"
            ],
            metric: { value: "24/7", label: "price optimization" }
          },
          {
            title: "Inventory Intelligence",
            description: "Predict demand, prevent stockouts, and optimize reorder points across all products and channels automatically.",
            icon: "Package",
            color: "from-purple-500 to-pink-500",
            features: [
              "Demand forecasting",
              "Multi-channel sync",
              "Automated reordering",
              "Dead stock alerts"
            ],
            metric: { value: "96%", label: "stock availability" }
          },
          {
            title: "Customer Experience AI",
            description: "Personalize every interaction with AI that recommends products, handles inquiries, and recovers abandoned carts.",
            icon: "ShoppingCart",
            color: "from-emerald-500 to-teal-500",
            features: [
              "Product recommendations",
              "Cart abandonment recovery",
              "Live chat support",
              "Review management"
            ],
            metric: { value: "68%", label: "cart recovery rate" }
          },
          {
            title: "Marketing Automation Hub",
            description: "Create and optimize campaigns across email, social, and ads with AI that knows what converts.",
            icon: "Megaphone",
            color: "from-orange-500 to-red-500",
            features: [
              "Campaign generation",
              "A/B testing automation",
              "ROI optimization",
              "Cross-channel coordination"
            ],
            metric: { value: "5.2x", label: "ROAS improvement" }
          }
        ]}
      />
      
      <AnimatedHowItWorksSection
        heading="How CommerceOps Manager Works"
        subheading="A unified system that transforms e-commerce complexity into automated growth"
        steps={[
          {
            title: "Connect Your Platforms",
            description: "Integrate your store, marketplaces, inventory systems, and marketing tools for unified management."
          },
          {
            title: "AI Learns Your Business",
            description: "The system analyzes your data to understand products, customers, seasonality, and profit drivers."
          },
          {
            title: "Automated Optimization",
            description: "From pricing to inventory to marketing, AI makes thousands of micro-decisions to maximize performance."
          },
          {
            title: "Scale Without Limits",
            description: "Add products, channels, or markets while AI handles the increased complexity automatically."
          }
        ]}
      />
      
      <IntegrationsAndFeaturesSection />
      
      <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900 dark:text-white">
              E-Commerce Results That Drive Growth
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">$847K</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Additional annual revenue from optimization</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">73%</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Reduction in operational overhead</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm shadow-lg dark:shadow-none">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">4.9?</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Average customer satisfaction rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        heading="Ready to Dominate E-Commerce?"
        subheading="Let CommerceOps Manager transform your online business with AI that optimizes everything, sells more, and scales effortlessly."
        primaryButtonText="Schedule a Demo"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Platform"
        secondaryButtonHref="/platform"
        className="bg-slate-900 dark:bg-slate-950"
      />
    </main>
  )
}
