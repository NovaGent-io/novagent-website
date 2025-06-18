"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Users,
  Headphones,
  Star,
  Settings,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data for articles
const allArticles = [
  {
    id: 1,
    title: "The Future of AI-Powered Sales Automation: 5 Trends to Watch in 2024",
    excerpt:
      "Discover how artificial intelligence is revolutionizing sales processes and what it means for your revenue operations.",
    category: "Sales & Revenue Ops",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "/blog/article-placeholder-1.png",
    slug: "future-ai-sales-automation-2024",
  },
  {
    id: 2,
    title: "Marketing Automation ROI: How to Measure Success Beyond Open Rates",
    excerpt: "Learn the key metrics that truly matter when evaluating your marketing automation investment.",
    category: "Marketing Automation",
    publishDate: "2024-01-12",
    readTime: "6 min read",
    image: "/blog/article-placeholder-2.png",
    slug: "marketing-automation-roi-metrics",
  },
  {
    id: 3,
    title: "Building Customer Support That Scales: AI Agent Implementation Guide",
    excerpt: "A comprehensive guide to implementing AI-powered customer support without losing the human touch.",
    category: "Customer Support Innovation",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    image: "/blog/article-placeholder-3.png",
    slug: "ai-customer-support-implementation",
  },
  {
    id: 4,
    title: "SEO in the Age of AI: Adapting Your Strategy for 2024",
    excerpt: "How artificial intelligence is changing search engine optimization and what you need to know.",
    category: "SEO & Reputation",
    publishDate: "2024-01-08",
    readTime: "10 min read",
    image: "/blog/article-placeholder-4.png",
    slug: "seo-ai-strategy-2024",
  },
  {
    id: 6,
    title: "AI Automation Strategy: Building a Roadmap for Digital Transformation",
    excerpt: "Strategic insights on how to plan and implement AI automation across your organization.",
    category: "AI Automation Strategy",
    publishDate: "2024-01-03",
    readTime: "15 min read",
    image: "/blog/article-placeholder-1.png",
    slug: "ai-automation-digital-transformation",
  },
]

const categories = [
  { name: "All Topics", icon: BookOpen },
  { name: "AI Automation Strategy", icon: TrendingUp },
  { name: "Sales & Revenue Ops", icon: Users },
  { name: "Marketing Automation", icon: Star },
  { name: "Customer Support Innovation", icon: Headphones },
  { name: "SEO & Reputation", icon: Search },
  { name: "NovaGent Platform Updates", icon: Settings },
]

const featuredArticle = allArticles[0]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Topics")

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All Topics" || article.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI Automation Strategy": "bg-blue-500/10 text-blue-400 border-blue-500/20",
      "Sales & Revenue Ops": "bg-green-500/10 text-green-400 border-green-500/20",
      "Marketing Automation": "bg-purple-500/10 text-purple-400 border-purple-500/20",
      "Customer Support Innovation": "bg-orange-500/10 text-orange-400 border-orange-500/20",
      "SEO & Reputation": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      "NovaGent Platform Updates": "bg-magenta-500/10 text-magenta-400 border-magenta-500/20",
    }
    return colors[category as keyof typeof colors] || "bg-slate-500/10 text-slate-400 border-slate-500/20"
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Featured Article Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={featuredArticle.image || "/placeholder.svg"}
            alt={featuredArticle.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              Featured Post
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{featuredArticle.title}</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">{featuredArticle.excerpt}</p>
            <Link href={`/blog/${featuredArticle.slug}`}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                Read More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Categories Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search our articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon
                const isActive = selectedCategory === category.name
                return (
                  <Button
                    key={category.name}
                    variant={isActive ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
                        : "bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-700/50 hover:text-white"
                    } px-4 py-2`}
                  >
                    <IconComponent className="mr-2 h-4 w-4" />
                    {category.name}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Feed */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="bg-slate-900/50 border-slate-800 overflow-hidden group hover:border-slate-700 transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getCategoryColor(article.category)} border`}>{article.category}</Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <Link href={`/blog/${article.slug}`}>
                        <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors cursor-pointer">
                          {article.title}
                        </h3>
                      </Link>

                      <p className="text-slate-400 mb-4 line-clamp-2">{article.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {new Date(article.publishDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          {article.readTime}
                        </div>
                      </div>

                      <Link href={`/blog/${article.slug}`}>
                        <Button
                          variant="ghost"
                          className="w-full text-blue-400 hover:text-white hover:bg-blue-600/20 p-0 h-auto py-2"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-slate-400 text-lg mb-4">No articles found matching your criteria.</div>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All Topics")
                  }}
                  variant="outline"
                  className="bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-700/50"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-950 to-magenta-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to See AI in Action?</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Discover how NovaGent's managed AI agents can transform your business operations and drive real results.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                Book a Personalized Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
