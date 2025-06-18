"use client"


import { IndustryPageTemplate } from "@/components/industry-landing-template"
import {
  Zap,
  Lightbulb,
  BarChart,
  Users,
  AlertTriangle,
  Wind,
  MessageSquare,
  Activity,
  Target,
  Star,
  Clock,
  TrendingUp,
  Shield,
  Droplet,
} from "lucide-react"

export default function EnergyUtilitiesPage() {
  const energyUtilitiesPageData = {
    industryName: "Energy & Utilities",
    hero: {
      headline: "Modernize Energy & Utilities Operations with Intelligent Automation",
      subHeadline:
        "From grid management to customer service, NovaGent's AI agents optimize operations, enhance customer experiences, and drive efficiency—allowing your team to focus on reliability, sustainability, and innovation.",
      imagePlaceholder: "/industries/hero/energy-utilities-hero.png",
      imageAlt: "Modern energy control center with digital displays",
    },
    challenges: {
      headline: "Navigating Today's Energy & Utilities Landscape",
      items: [
        {
          icon: AlertTriangle,
          title: "Outage Management & Response",
          description:
            "Utilities face increasing pressure to minimize outage duration and provide accurate, timely information to affected customers during service disruptions.",
        },
        {
          icon: BarChart,
          title: "Grid Optimization Complexity",
          description:
            "Balancing load, integrating renewable sources, and maintaining grid stability requires sophisticated monitoring and rapid decision-making.",
        },
        {
          icon: Users,
          title: "Customer Service Demands",
          description:
            "Modern utility customers expect the same level of service they receive from retail and tech companies—immediate, personalized, and available across channels.",
        },
        {
          icon: Wind,
          title: "Energy Market Volatility",
          description:
            "Fluctuating energy prices, regulatory changes, and the transition to renewables create complex trading and forecasting challenges.",
        },
      ],
    },
    solutions: {
      headline: "How NovaGent Transforms Energy & Utilities Operations",
      items: [
        {
          icon: Zap,
          useCaseTitle: "Intelligent Grid Optimization",
          benefitDescription:
            "Deploy AI that continuously monitors grid performance, predicts potential issues, and recommends load balancing adjustments—improving reliability while reducing operational costs and energy waste.",
        },
        {
          icon: AlertTriangle,
          useCaseTitle: "Automated Outage Response",
          benefitDescription:
            "Implement a system that detects outages, dispatches crews efficiently, and provides affected customers with real-time updates and estimated restoration times across multiple communication channels.",
        },
        {
          icon: MessageSquare,
          useCaseTitle: "24/7 Customer Service Automation",
          benefitDescription:
            "Offer round-the-clock support with AI agents that handle account inquiries, billing questions, service requests, and outage reporting—reducing call center volume while improving customer satisfaction.",
        },
        {
          icon: Lightbulb,
          useCaseTitle: "Energy Efficiency Recommendations",
          benefitDescription:
            "Analyze customer usage patterns to provide personalized energy-saving recommendations, promote relevant efficiency programs, and help customers optimize their consumption and costs.",
        },
        {
          icon: Activity,
          useCaseTitle: "Predictive Maintenance",
          benefitDescription:
            "Leverage AI to analyze equipment performance data, predict potential failures before they occur, and optimize maintenance scheduling—reducing downtime and extending asset lifespan.",
        },
        {
          icon: BarChart,
          useCaseTitle: "Energy Trading Optimization",
          benefitDescription:
            "Utilize AI to analyze market conditions, weather forecasts, and consumption patterns to optimize energy trading decisions and hedging strategies in volatile markets.",
        },
      ],
    },
    relevantAgents: {
      headline: "Meet Your AI Team for Energy & Utilities Excellence",
      items: [
        {
          icon: MessageSquare,
          name: "Customer Support Agent",
          description: "Handles customer inquiries, billing questions, and service requests across multiple channels.",
          link: "/solutions/customer-support-agent",
        },
        {
          icon: AlertTriangle,
          name: "Outage Reporter Agent",
          description: "Manages outage communications, status updates, and estimated restoration times.",
          link: "/solutions/customer-support-agent",
        },
        {
          icon: Target,
          name: "Lead Generation Agent",
          description: "Promotes new services, efficiency programs, and renewable options to the right customers.",
          link: "/solutions/lead-generation-agent",
        },
        {
          icon: BarChart,
          name: "Ad Campaign Manager Agent",
          description: "Creates and optimizes campaigns for energy efficiency programs and new service offerings.",
          link: "/solutions/ad-campaign-manager-agent",
        },
        {
          icon: Star,
          name: "SEO + Reputation Agent",
          description: "Manages your utility's online presence and customer reviews to improve public perception.",
          link: "/solutions/seo-reputation-agent",
        },
      ],
    },
    keyOutcomes: {
      headline: "Tangible Results for Your Energy & Utilities Business",
      items: [
        {
          icon: Clock,
          title: "30% Reduction in Outage Response Time",
          description: "Detect issues faster and coordinate resources more efficiently during service disruptions.",
        },
        {
          icon: Zap,
          title: "25% Improvement in Grid Efficiency",
          description: "Optimize load balancing and reduce waste through AI-powered monitoring and adjustments.",
        },
        {
          icon: Users,
          title: "60% of Customer Inquiries Resolved Automatically",
          description: "Handle common questions and requests without human intervention, reducing wait times.",
        },
        {
          icon: TrendingUp,
          title: "40% Faster Trading Decisions",
          description: "Analyze market conditions and execute optimal energy trading strategies in real-time.",
        },
        {
          icon: Shield,
          title: "35% Reduction in Preventable Outages",
          description: "Identify and address potential equipment failures before they impact service.",
        },
        {
          icon: Droplet,
          title: "20% Increase in Efficiency Program Adoption",
          description: "Target the right customers with personalized energy-saving recommendations.",
        },
      ],
    },
    cta: {
      headline: "Ready to Modernize Your Energy & Utilities Operations?",
      buttonText: "Book Your Energy & Utilities AI Consultation",
      buttonLink: "/contact?industry=energy-utilities",
    },
  }

  return <IndustryPageTemplate {...energyUtilitiesPageData} />
}
