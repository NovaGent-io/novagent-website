// New Agent Skills Section
import { Calendar, Phone, Search, Headphones, Package, UserCheck, Shield, Users as UsersIcon, BarChart, Briefcase, DollarSign, FileText, Home } from "lucide-react"

const skillsData = [
  {
    id: "prospect-hunter",
    name: "Prospect Hunter",
    category: "Sales & Growth",
    icon: <Search className="h-6 w-6" />,
    color: "purple",
    description: "AI-powered lead generation that finds and qualifies your ideal customers 24/7",
    basePrice: 200,
    metric: "300+ qualified leads/month",
    features: ["Smart lead scoring", "Multi-source enrichment", "Real-time qualification"]
  },
  {
    id: "schedule-coordinator",
    name: "Schedule Coordinator",
    category: "Sales & Growth",
    icon: <Calendar className="h-6 w-6" />,
    color: "blue",
    description: "Automates outreach sequences and books qualified meetings directly into calendars",
    basePrice: 150,
    metric: "50+ meetings booked/month",
    features: ["Smart scheduling", "Follow-up automation", "Calendar sync"]
  },
  {
    id: "smart-outreach-dialer",
    name: "Smart Outreach Dialer",
    category: "Sales & Growth",
    icon: <Phone className="h-6 w-6" />,
    color: "green",
    description: "Places and transcribes outbound calls with AI voice and real-time coaching",
    basePrice: 300,
    metric: "1000+ minutes/month",
    features: ["AI voice calls", "Live transcription", "Sentiment analysis"]
  },
  {
    id: "support-concierge",
    name: "Support Concierge",
    category: "Support & Intelligence",
    icon: <Headphones className="h-6 w-6" />,
    color: "teal",
    description: "Handles 80% of Tier 1 inquiries with AI-powered responses and smart routing",
    basePrice: 250,
    metric: "100+ tickets resolved/month",
    features: ["24/7 availability", "Smart routing", "Knowledge base AI"]
  },
  {
    id: "commerceops-manager",
    name: "CommerceOps Manager",
    category: "Operations",
    icon: <Package className="h-6 w-6" />,
    color: "orange",
    description: "Monitors inventory, pricing, and automates product feed management",
    basePrice: 500,
    metric: "1000+ SKUs managed",
    features: ["Price monitoring", "Inventory alerts", "Feed automation"]
  },
  {
    id: "talent-welcome-suite",
    name: "Talent Welcome Suite",
    category: "Operations",
    icon: <UserCheck className="h-6 w-6" />,
    color: "pink",
    description: "Automates onboarding from offer letters to IT provisioning",
    basePrice: 300,
    metric: "10+ hires/month",
    features: ["Document automation", "Task orchestration", "IT integration"]
  },
  {
    id: "regulatory-risk-guard",
    name: "Regulatory Risk Guard",
    category: "Operations",
    icon: <Shield className="h-6 w-6" />,
    color: "red",
    description: "Monitors compliance requirements and flags potential risks",
    basePrice: 400,
    metric: "5+ regulations tracked",
    features: ["Real-time monitoring", "Risk alerts", "Audit trails"]
  },
  {
    id: "talent-scout-engine",
    name: "Talent Scout Engine",
    category: "Support & Intelligence",
    icon: <UsersIcon className="h-6 w-6" />,
    color: "indigo",
    description: "Sources, screens, and ranks candidates with AI precision",
    basePrice: 600,
    metric: "100+ candidates screened",
    features: ["Resume parsing", "Skills matching", "Automated outreach"]
  },
  {
    id: "insight-intelligence",
    name: "Insight Intelligence",
    category: "Support & Intelligence",
    icon: <BarChart className="h-6 w-6" />,
    color: "cyan",
    description: "Transforms raw data into actionable business intelligence",
    basePrice: 400,
    metric: "10+ reports/month",
    features: ["Data analysis", "Trend detection", "Custom dashboards"]
  }
]

const colorMap = {
  purple: "bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  blue: "bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  green: "bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
  teal: "bg-teal-100 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800",
  orange: "bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
  pink: "bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800",
  red: "bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800",
  indigo: "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
  cyan: "bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800"
}

// Component code:
<section className="py-16 md:py-24 bg-white dark:bg-slate-950">
  <div className="container mx-auto px-6">
    <motion.div {...fadeInAnimation} className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
        Build Your AI Workforce
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Each skill transforms your AI agent into a specialized expert. Mix and match to create the perfect digital employee for your business.
      </p>
    </motion.div>

    {/* Category Filter Tabs */}
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg">
        All Skills
      </button>
      <button className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-500 transition-all">
        Sales & Growth
      </button>
      <button className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-500 transition-all">
        Operations
      </button>
      <button className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-500 transition-all">
        Support & Intelligence
      </button>
    </div>

    {/* Skills Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {skillsData.map((skill, index) => (
        <motion.div
          key={skill.id}
          className="group bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-6 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-lg border ${colorMap[skill.color]}`}>
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{skill.category}</span>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {skill.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {skill.description}
          </p>

          {/* Pricing */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${skill.basePrice}
              <span className="text-sm font-normal text-gray-500">/mo</span>
            </span>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More
            </Button>
          </div>

          {/* Key Metric */}
          <div className="pt-4 border-t border-gray-200 dark:border-slate-800">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Zap className="h-4 w-4 mr-2 text-yellow-500" />
              <span>{skill.metric}</span>
            </div>
          </div>

          {/* Features (shown on hover) */}
          <div className="mt-3 space-y-1 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300">
            {skill.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                <Check className="h-3 w-3 mr-1 text-green-500" />
                {feature}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* View All Skills Button */}
    <motion.div 
      className="mt-12 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Button 
        size="lg" 
        variant="outline"
        className="border-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
      >
        View All 14+ Skills
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>

    {/* Interactive Calculator CTA */}
    <motion.div 
      className="mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-1">
        <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-2xl" />
          <div className="relative z-10">
            <Calculator className="h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Build Your Custom AI Agent?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Use our interactive pricing calculator to design your perfect AI workforce and see exactly what it will cost
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl"
              onClick={() => setShowCalculator(true)}
            >
              Open Pricing Calculator
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>
