"use client"


import { IndustryPageTemplate } from "@/components/industry-landing-template"
import {
  Signal,
  Users,
  BarChart,
  Wifi,
  Smartphone,
  MessageSquare,
  Database,
  Target,
  Calendar,
  Star,
  Share2,
  Zap,
  Clock,
  Award,
  TrendingUp,
  Shield,
  Headphones,
} from "lucide-react"

export default function CommunicationsPage() {
  const communicationsPageData = {
    industryName: "Communications",
    hero: {
      headline: "Transform Customer Experience in the Communications Sector",
      subHeadline:
        "In today's hyper-connected world, telecom and communications providers face unprecedented customer service demands. NovaGent's AI agents help you deliver exceptional experiences at scale while optimizing operations and reducing costs.",
      imagePlaceholder: "/industries/hero/communications-hero.png",
      imageAlt: "Modern communications network with AI integration",
    },
    challenges: {
      headline: "Navigating Today's Communications Industry Challenges",
      items: [
        {
          icon: Users,
          title: "High Customer Service Volume",
          description:
            "Communications providers handle millions of customer interactions monthly, from technical support to billing inquiries, straining traditional service models.",
        },
        {
          icon: Signal,
          title: "Network Operations Complexity",
          description:
            "Monitoring and maintaining vast network infrastructure requires constant vigilance and rapid response to potential issues before they affect customers.",
        },
        {
          icon: BarChart,
          title: "Subscription Revenue Pressure",
          description:
            "Increasing competition and commoditization create challenges for customer acquisition, retention, and reducing churn in subscription-based services.",
        },
        {
          icon: Wifi,
          title: "Technical Support Scalability",
          description:
            "Providing expert technical assistance across diverse devices, services, and connectivity issues requires specialized knowledge that's difficult to scale.",
        },
      ],
    },
    solutions: {
      headline: "How NovaGent Transforms Communications Operations",
      items: [
        {
          icon: Smartphone,
          useCaseTitle: "AI-Powered Customer Service",
          benefitDescription:
            "Deploy virtual agents that handle common customer inquiries 24/7—from billing questions and plan changes to basic troubleshooting—freeing your human agents to focus on complex issues requiring expertise and empathy.",
        },
        {
          icon: Signal,
          useCaseTitle: "Network Operations Monitoring",
          benefitDescription:
            "Implement AI that continuously monitors network performance, predicts potential issues, and either resolves them automatically or alerts the appropriate teams with detailed diagnostics.",
        },
        {
          icon: Database,
          useCaseTitle: "Intelligent Subscription Management",
          benefitDescription:
            "Leverage AI to identify at-risk subscribers, proactively offer appropriate retention offers, and optimize upgrade paths based on usage patterns and customer profiles.",
        },
        {
          icon: Headphones,
          useCaseTitle: "Automated Technical Support",
          benefitDescription:
            "Create a tiered support system where AI handles common device setup, connectivity troubleshooting, and service activation, escalating only when necessary to specialized technical teams.",
        },
        {
          icon: Share2,
          useCaseTitle: "Personalized Marketing Campaigns",
          benefitDescription:
            "Develop targeted campaigns that recommend relevant service upgrades, accessories, and new offerings based on individual customer usage patterns, preferences, and lifecycle stage.",
        },
        {
          icon: MessageSquare,
          useCaseTitle: "Proactive Service Notifications",
          benefitDescription:
            "Automatically notify customers about planned maintenance, service outages, billing changes, and account updates through their preferred communication channels.",
        },
      ],
    },
    relevantAgents: {
      headline: "Meet Your AI Team for Communications Excellence",
      items: [
        {
          icon: MessageSquare,
          name: "Customer Support Agent",
          description:
            "Handles customer inquiries, technical support, and account management across multiple channels.",
          link: "/solutions/customer-support-agent",
        },
        {
          icon: Target,
          name: "Lead Generation Agent",
          description:
            "Identifies potential customers and cross-sell opportunities within your existing subscriber base.",
          link: "/solutions/lead-generation-agent",
        },
        {
          icon: Calendar,
          name: "Appointment Setter Agent",
          description: "Schedules installation, service calls, and technical support appointments efficiently.",
          link: "/solutions/appointment-setter-agent",
        },
        {
          icon: BarChart,
          name: "Ad Campaign Manager Agent",
          description: "Creates and optimizes advertising for new services, promotions, and competitive offers.",
          link: "/solutions/ad-campaign-manager-agent",
        },
        {
          icon: Star,
          name: "SEO + Reputation Agent",
          description: "Manages your online presence and customer reviews to improve brand perception.",
          link: "/solutions/seo-reputation-agent",
        },
      ],
    },
    keyOutcomes: {
      headline: "Tangible Results for Your Communications Business",
      items: [
        {
          icon: Zap,
          title: "35% Reduction in Network Downtime",
          description:
            "Predict and address potential issues before they impact service quality and customer experience.",
        },
        {
          icon: Users,
          title: "50% Faster Customer Onboarding",
          description: "Streamline the activation process for new subscribers with automated setup assistance.",
        },
        {
          icon: Clock,
          title: "70% of Support Tickets Resolved Automatically",
          description: "Handle common inquiries and technical issues without human intervention, reducing wait times.",
        },
        {
          icon: TrendingUp,
          title: "20% Increase in Subscription Retention",
          description: "Identify at-risk customers and proactively address concerns before they cancel.",
        },
        {
          icon: Shield,
          title: "40% Improvement in First-Call Resolution",
          description: "Equip human agents with AI-powered insights and recommendations for complex issues.",
        },
        {
          icon: Award,
          title: "25% Higher CSAT and NPS Scores",
          description: "Deliver more consistent, personalized service across all customer touchpoints.",
        },
      ],
    },
    cta: {
      headline: "Ready to Revolutionize Your Communications Business?",
      buttonText: "Book Your Communications AI Consultation",
      buttonLink: "/contact?industry=communications",
    },
  }

  return <IndustryPageTemplate {...communicationsPageData} />
}
