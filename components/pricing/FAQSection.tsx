import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Info, 
  Sparkles, 
  Zap, 
  Settings, 
  Shield, 
  TrendingUp, 
  Users, 
  AlertCircle, 
  Crown, 
  Brain 
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    id: "credits",
    category: "Pricing & Credits",
    icon: <Sparkles className="h-6 w-6" />,
    color: "purple",
    question: "How does usage-based pricing work?",
    answer: "Your agent's activities consume credits based on task complexity. Simple tasks use fewer credits, complex workflows use more.",
    highlight: "Pay only for what you use."
  },
  {
    id: "timeline",
    category: "Getting Started",
    icon: <Zap className="h-6 w-6" />,
    color: "green",
    question: "How fast can I get started?",
    answer: "Most clients are operational in",
    highlight: "2 weeks",
    extra: "Week 1: Setup & config. Week 2: Testing & training."
  },
  {
    id: "flexibility",
    category: "Platform Features",
    icon: <Settings className="h-6 w-6" />,
    color: "blue",
    question: "Can I change skills anytime?",
    answer: "Yes! Add or pause skills instantly. Limits:",
    highlight: "3 (Starter), 5 (Pro), 8 (Growth), ? (Scale)"
  },
  {
    id: "security",
    category: "Security & Trust",
    icon: <Shield className="h-6 w-6" />,
    color: "purple",
    question: "Is my data secure?",
    answer: "SOC 2 compliant. Dedicated environment. Single-tenant architecture. End-to-end encryption.",
    highlight: "SOC 2 compliant"
  },
  {
    id: "roi",
    category: "Results & Value",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "green",
    question: "What ROI can I expect?",
    answer: "Most clients see positive ROI within 60 days. Example: 300+ qualified leads per month can generate $5K+ in new revenue.",
    highlight: "Positive ROI in 60 days"
  },
  {
    id: "managed",
    category: "Service & Support",
    icon: <Users className="h-6 w-6" />,
    color: "purple",
    question: "What's \"fully managed\"?",
    answer: "We handle everything: setup, optimization, monitoring, integrations, and proactive improvements.",
    highlight: "You focus on strategy."
  },
  {
    id: "overage",
    category: "Pricing & Credits",
    icon: <AlertCircle className="h-6 w-6" />,
    color: "orange",
    question: "What if I exceed credits?",
    answer: "No surprises. When you reach 80% usage, we proactively reach out to discuss options and optimize your configuration.",
    highlight: "Full transparency, no hidden fees."
  },
  {
    id: "tiers",
    category: "Platform Features",
    icon: <Crown className="h-6 w-6" />,
    color: "purple",
    question: "Which tier is right for me?",
    answer: "Starter: Single focus. Pro: Department. Growth: Company-wide. Scale: Enterprise.",
    highlight: null
  },
  {
    id: "technical",
    category: "Getting Started",
    icon: <Brain className="h-6 w-6" />,
    color: "blue",
    question: "Do I need tech skills?",
    answer: "Zero technical knowledge needed. If you can send an email, you can use NovaGent.",
    highlight: "Zero technical knowledge needed"
  },
  {
    id: "demo",
    category: "Getting Started",
    icon: <Sparkles className="h-6 w-6" />,
    color: "purple",
    question: "How do I know NovaGent is right for me?",
    answer: "Schedule a consultation where we'll analyze your specific use cases and demonstrate exactly how NovaGent can solve your challenges.",
    highlight: "Personalized ROI analysis included."
  }
]

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const categories = Array.from(new Set(faqs.map(faq => faq.category)))
  
  const filteredFaqs = selectedCategory 
    ? faqs.filter(faq => faq.category === selectedCategory)
    : faqs

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6"
            >
              <Info className="h-4 w-4" />
              <span>Got questions? We've got answers</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Clear, honest answers about pricing, features, and getting started
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                !selectedCategory 
                  ? "bg-purple-600 text-white" 
                  : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700"
              )}
            >
              All Questions
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  selectedCategory === category 
                    ? "bg-purple-600 text-white" 
                    : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "p-3 rounded-lg transition-all duration-300",
                      faq.color === "purple" && "bg-purple-100 dark:bg-purple-900/30",
                      faq.color === "green" && "bg-green-100 dark:bg-green-900/30",
                      faq.color === "blue" && "bg-blue-100 dark:bg-blue-900/30",
                      faq.color === "orange" && "bg-orange-100 dark:bg-orange-900/30"
                    )}>
                      <div className={cn(
                        faq.color === "purple" && "text-purple-600 dark:text-purple-400",
                        faq.color === "green" && "text-green-600 dark:text-green-400",
                        faq.color === "blue" && "text-blue-600 dark:text-blue-400",
                        faq.color === "orange" && "text-orange-600 dark:text-orange-400"
                      )}>
                        {faq.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {faq.answer}{" "}
                        {faq.highlight && (
                          <span className={cn(
                            "font-medium",
                            faq.color === "purple" && "text-purple-600 dark:text-purple-400",
                            faq.color === "green" && "text-green-600 dark:text-green-400",
                            faq.color === "blue" && "text-blue-600 dark:text-blue-400",
                            faq.color === "orange" && "text-orange-600 dark:text-orange-400"
                          )}>
                            {faq.highlight}
                          </span>
                        )}
                        {faq.extra && (
                          <span className="text-gray-600 dark:text-gray-400"> {faq.extra}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 rounded-3xl p-8 md:p-12 border border-purple-200 dark:border-purple-800">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Still have questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Our team is ready to help you understand how NovaGent can transform your business
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Talk to an Expert
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
