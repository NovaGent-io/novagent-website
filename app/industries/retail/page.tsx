"use client"


import { IndustryPageTemplate } from "@/components/industry-landing-template"
import type { IndustryPageProps } from "@/lib/types/industry-page"

const retailData: Omit<IndustryPageProps, "industryName"> = {
  heroData: {
    title: "The Future of Retail is Autonomous",
    subtitle:
      "Personalize the shopping experience, optimize inventory, and empower your staff with NovaGent's AI agents for retail.",
    cta: {
      text: "Reinvent Your Retail Experience",
      href: "/contact",
    },
  },
  benefits: [
    {
      icon: "efficiency",
      title: "Hyper-Personalized Shopping",
      description:
        "Engage customers with AI-powered personal shoppers that provide recommendations, style advice, and locate products.",
    },
    {
      icon: "intelligence",
      title: "Intelligent Inventory Management",
      description:
        "Automate stock monitoring, predict demand for specific products, and manage replenishment to avoid stockouts and overstock.",
    },
    {
      icon: "growth",
      title: "Optimized Pricing & Promotions",
      description:
        "Analyze competitor pricing and market trends to dynamically adjust prices and create targeted promotional campaigns.",
    },
    {
      icon: "security",
      title: "Automated Customer Support",
      description:
        "Handle order tracking, returns, and common customer questions 24/7, freeing up your team to provide high-touch service.",
    },
  ],
  useCases: [
    {
      title: "AI Personal Shopper",
      description:
        "An online chatbot that helps customers find the perfect product based on their needs, preferences, and past purchases.",
      image: "/industries/retail-personal-shopper.png",
    },
    {
      title: "Dynamic Pricing Agent",
      description:
        "Monitors competitor websites and market conditions to recommend and execute optimal pricing strategies in real-time.",
      image: "/industries/retail-dynamic-pricing.png",
    },
    {
      title: "Automated Returns Processor",
      description:
        "Guides customers through the returns process, generates shipping labels, and processes refunds or exchanges automatically.",
      image: "/industries/retail-returns.png",
    },
  ],
  cta: {
    title: "Convert More Customers with AI",
    subtitle:
      "Let's build a smarter retail ecosystem together. Discover how NovaGent can boost your sales and customer loyalty.",
    cta: {
      text: "Get a Retail Demo",
      href: "/contact",
    },
  },
}

export default function RetailPage() {
  return <IndustryPageTemplate industryName="Retail" {...retailData} />
}
