"use client" // <-- ADD THIS LINE

import { IndustryPageTemplate } from "@/components/industry-landing-template"
import {
  Car,
  Users,
  ShoppingCart,
  Wrench,
  Gauge,
  MessageSquare,
  BarChart,
  Target,
  Calendar,
  Star,
  Share2,
  Zap,
  Clock,
  Award,
  TrendingUp,
  Shield,
} from "lucide-react"

export default function AutomotivePage() {
  const automotivePageData = {
    industryName: "Automotive",
    hero: {
      headline: "Accelerate Your Automotive Business with Intelligent Automation",
      subHeadline:
        "From dealerships to service centers, NovaGent's AI agents streamline operations, enhance customer experiences, and drive sales growth—allowing your team to focus on building relationships and delivering exceptional service.",
      imagePlaceholder: "/industries/hero/automotive-hero.png",
      imageAlt: "Modern automotive dealership enhanced with AI technology",
    },
    challenges: {
      headline: "Navigating Today's Automotive Industry Challenges",
      items: [
        {
          icon: Users,
          title: "Evolving Customer Expectations",
          description:
            "Today's automotive customers research extensively online and expect immediate, personalized responses across multiple channels before ever setting foot in a dealership.",
        },
        {
          icon: ShoppingCart,
          title: "Complex Sales Processes",
          description:
            "The vehicle purchase journey involves numerous touchpoints, financing options, and paperwork—creating friction that can lead to lost sales opportunities.",
        },
        {
          icon: Wrench,
          title: "Service Department Efficiency",
          description:
            "Managing service appointments, parts inventory, and customer communications creates operational bottlenecks that impact both customer satisfaction and revenue.",
        },
        {
          icon: Gauge,
          title: "Inventory Management Pressure",
          description:
            "Balancing optimal inventory levels while adapting to supply chain fluctuations and changing consumer preferences requires constant attention and analysis.",
        },
      ],
    },
    solutions: {
      headline: "How NovaGent Transforms Automotive Operations",
      items: [
        {
          icon: MessageSquare,
          useCaseTitle: "24/7 Virtual Sales Assistant",
          benefitDescription:
            "Deploy AI agents that engage website visitors instantly, answer vehicle questions, schedule test drives, and qualify leads—ensuring no opportunity is missed, even outside business hours. Our agents seamlessly hand off qualified prospects to your sales team with complete conversation history.",
        },
        {
          icon: Calendar,
          useCaseTitle: "Automated Service Scheduling",
          benefitDescription:
            "Streamline appointment booking with AI that manages your service calendar, sends reminders, confirms appointments, and even helps upsell maintenance packages based on vehicle history and manufacturer recommendations.",
        },
        {
          icon: Car,
          useCaseTitle: "Proactive Vehicle Maintenance Alerts",
          benefitDescription:
            "Implement a system that tracks customer vehicles, sends timely service reminders, and provides personalized maintenance recommendations—building service department loyalty and recurring revenue.",
        },
        {
          icon: BarChart,
          useCaseTitle: "Inventory & Parts Management",
          benefitDescription:
            "Optimize your inventory with AI that analyzes market trends, tracks parts usage, automates reordering, and helps price vehicles competitively based on real-time market data and local demand patterns.",
        },
        {
          icon: Share2,
          useCaseTitle: "Automated Marketing Campaigns",
          benefitDescription:
            "Create targeted, multi-channel marketing campaigns that promote specific models, service specials, and seasonal offers to the right customers at the right time, with messaging that adapts based on engagement.",
        },
        {
          icon: Star,
          useCaseTitle: "Customer Satisfaction & Reputation Management",
          benefitDescription:
            "Automatically solicit and manage customer reviews, respond to feedback across platforms, and identify service issues before they impact your reputation.",
        },
      ],
    },
    relevantAgents: {
      headline: "Meet Your AI Team for Automotive Success",
      items: [
        {
          icon: Target,
          name: "Lead Generation Agent",
          description:
            "Identifies and nurtures potential customers through your website, social media, and third-party listing sites.",
          link: "/solutions/lead-generation-agent",
        },
        {
          icon: Calendar,
          name: "Appointment Setter Agent",
          description:
            "Manages test drives, service appointments, and follow-up scheduling without human intervention.",
          link: "/solutions/appointment-setter-agent",
        },
        {
          icon: MessageSquare,
          name: "Customer Support Agent",
          description:
            "Handles inquiries about vehicles, financing options, service questions, and parts availability.",
          link: "/solutions/customer-support-agent",
        },
        {
          icon: BarChart,
          name: "Ad Campaign Manager Agent",
          description: "Creates and optimizes advertising for specific models, promotions, and service offerings.",
          link: "/solutions/ad-campaign-manager-agent",
        },
        {
          icon: Star,
          name: "SEO + Reputation Agent",
          description:
            "Manages your dealership's online presence, reviews, and search visibility to drive more traffic.",
          link: "/solutions/seo-reputation-agent",
        },
      ],
    },
    keyOutcomes: {
      headline: "Tangible Results for Your Automotive Business",
      items: [
        {
          icon: Zap,
          title: "40% Faster Lead Response Times",
          description:
            "Engage potential customers instantly, dramatically increasing lead-to-appointment conversion rates.",
        },
        {
          icon: Clock,
          title: "25% Reduction in Service Scheduling Delays",
          description: "Streamline the appointment process and reduce scheduling conflicts and no-shows.",
        },
        {
          icon: Users,
          title: "60% Improvement in Customer Satisfaction",
          description: "Provide consistent, personalized communication throughout the customer journey.",
        },
        {
          icon: TrendingUp,
          title: "35% Increase in Service Department Revenue",
          description: "Proactively capture maintenance opportunities and improve service bay utilization.",
        },
        {
          icon: Shield,
          title: "50% More Positive Online Reviews",
          description: "Systematically build your reputation through automated review solicitation and management.",
        },
        {
          icon: Award,
          title: "30% Higher Sales Team Productivity",
          description: "Free your sales professionals from routine tasks so they can focus on closing deals.",
        },
      ],
    },
    cta: {
      headline: "Ready to Revolutionize Your Automotive Business?",
      buttonText: "Book Your Automotive AI Consultation",
      buttonLink: "/contact?industry=automotive",
    },
  }

  return <IndustryPageTemplate {...automotivePageData} />
}
