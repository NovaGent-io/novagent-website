"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  ArrowLeft, 
  ShoppingCart,
  CheckCircle2, 
  TrendingUp,
  Package,
  DollarSign,
  MessageSquare,
  PieChart,
  ArrowRight,
  BarChart3,
  Store,
  Tag,
  Truck,
  Sparkles
} from "lucide-react"

export default function EcommerceRetailBundlePage() {
  const includedSkills = [
    {
      name: "CommerceOps Manager",
      icon: <ShoppingCart className="h-5 w-5 text-violet-500" />,
      description: "E-commerce inventory and pricing management",
      value: "$500-2000/mo"
    },
    {
      name: "Finance Flow Manager",
      icon: <DollarSign className="h-5 w-5 text-green-500" />,
      description: "Transaction processing and financial operations",
      value: "$500-2000/mo"
    },
    {
      name: "Support Concierge", 
      icon: <MessageSquare className="h-5 w-5 text-emerald-500" />,
      description: "AI-powered customer support",
      value: "$250-1200/mo"
    },
    {
      name: "Insight Intelligence",
      icon: <PieChart className="h-5 w-5 text-purple-500" />,
      description: "Analytics and reporting automation",
      value: "$400-1500/mo"
    }
  ]

  const caseStudies = [
    {
      company: "Fashion Forward Co",
      industry: "Online Fashion Retail",
      challenge: "Managing 10,000+ SKUs across multiple channels with price mismatches",
      solution: "Automated inventory sync, dynamic pricing, and unified analytics",
      results: [
        "95% reduction in pricing errors",
        "40% increase in profit margins",
        "3x faster inventory turnover"
      ]
    },
    {
      company: "Digital Marketplace Pro",
      industry: "Multi-Channel E-commerce",
      challenge: "Customer support overwhelmed with 500+ daily inquiries",
      solution: "AI support automation with intelligent routing and analytics",
      results: [
        "80% first-contact resolution rate",
        "65% reduction in support costs",
        "4.8/5 customer satisfaction score"
      ]
    }
  ]

  const benefits = [
    {
      title: "Unified Commerce Operations",
      description: "Manage inventory, pricing, and orders across all channels from one place"
    },
    {
      title: "Real-Time Financial Insights",
      description: "Track revenue, costs, and profitability with automated reporting"
    },
    {
      title: "24/7 Customer Excellence",
      description: "Provide instant, accurate support that drives customer loyalty"
    },
    {
      title: "Data-Driven Growth",
      description: "Make smarter decisions with comprehensive analytics and insights"
    }
  ]

  const metrics = [
    { label: "Inventory Accuracy", value: "99.8%", trend: "up" },
    { label: "Order Processing Time", value: "2min", trend: "down" },
    { label: "Customer Response Time", value: "<30s", trend: "down" },
    { label: "Revenue Growth", value: "+45%", trend: "up" }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 text-white py-24 sm:py-32">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/solutions/novasuite"
              className="inline-flex items-center text-violet-300 hover:text-violet-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to NovaSuite
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
                <Store className="mr-2 h-4 w-4" />
                Commerce Operations Bundle
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
                  E-Commerce & Retail Bundle
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                The complete AI solution for modern e-commerce operations. 
                Automate inventory, optimize pricing, delight customers, and scale your business.
              </p>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400">35%</div>
                  <div className="text-sm text-slate-400">Bundle Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">4</div>
                  <div className="text-sm text-slate-400">Commerce Skills</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">Multi</div>
                  <div className="text-sm text-slate-400">Channel Ready</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400">?</div>
                  <div className="text-sm text-slate-400">AOV Increase: +32%</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700" asChild>
                  <Link href="/contact">Get Started with E-Commerce Bundle</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/pricing">See Bundle Pricing</Link>
                </Button>
              </div>
            </div>

            <div className="relative lg:pl-8">
              {/* Modern Skills Grid Visualization */}
              <div className="relative">
                {/* Background Gradient Orb */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-r from-violet-600/30 to-purple-600/30 rounded-full blur-3xl"></div>
                </div>
                
                {/* Skills Grid */}
                <div className="relative grid grid-cols-2 gap-4 max-w-sm mx-auto">
                  {/* CommerceOps Manager */}
                  <div className="group relative bg-gradient-to-br from-violet-500/10 to-violet-600/10 backdrop-blur border border-violet-500/20 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-violet-400/40 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <ShoppingCart className="h-8 w-8 text-violet-400 mb-3" />
                    <h4 className="text-white font-semibold text-sm mb-1">CommerceOps</h4>
                    <p className="text-violet-300 text-xs">Inventory & pricing AI</p>
                    <div className="mt-3 text-2xl font-bold text-violet-400">99.8%</div>
                    <p className="text-xs text-violet-300/60">inventory accuracy</p>
                  </div>
                  
                  {/* Finance Flow Manager */}
                  <div className="group relative bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur border border-green-500/20 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-green-400/40 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <DollarSign className="h-8 w-8 text-green-400 mb-3" />
                    <h4 className="text-white font-semibold text-sm mb-1">Finance Flow</h4>
                    <p className="text-green-300 text-xs">Automated transactions</p>
                    <div className="mt-3 text-2xl font-bold text-green-400">2min</div>
                    <p className="text-xs text-green-300/60">order processing</p>
                  </div>
                  
                  {/* Support Concierge */}
                  <div className="group relative bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 backdrop-blur border border-emerald-500/20 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-emerald-400/40 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <MessageSquare className="h-8 w-8 text-emerald-400 mb-3" />
                    <h4 className="text-white font-semibold text-sm mb-1">Support AI</h4>
                    <p className="text-emerald-300 text-xs">24/7 customer care</p>
                    <div className="mt-3 text-2xl font-bold text-emerald-400">&lt;30s</div>
                    <p className="text-xs text-emerald-300/60">response time</p>
                  </div>
                  
                  {/* Insight Intelligence */}
                  <div className="group relative bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur border border-purple-500/20 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-purple-400/40 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <PieChart className="h-8 w-8 text-purple-400 mb-3" />
                    <h4 className="text-white font-semibold text-sm mb-1">Insights AI</h4>
                    <p className="text-purple-300 text-xs">Analytics & reports</p>
                    <div className="mt-3 text-2xl font-bold text-purple-400">+45%</div>
                    <p className="text-xs text-purple-300/60">revenue growth</p>
                  </div>
                </div>
                
                {/* Central AI Badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                      <Package className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with other sections... */}
    </div>
  )
}
