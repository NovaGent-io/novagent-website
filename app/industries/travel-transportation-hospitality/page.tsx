"use client"


import { IndustryPageTemplate } from "@/components/industry-landing-template"
import {
  Plane,
  Hotel,
  Bus,
  Calendar,
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
  Globe,
  Zap,
  Star,
  Target,
  BarChart,
  Smile,
  Briefcase,
  Map,
} from "lucide-react"

export default function TravelTransportationHospitalityPage() {
  const tthPageData = {
    industryName: "Travel, Transportation & Hospitality",
    hero: {
      headline: "Elevate Guest Experiences with AI-Powered Automation",
      subHeadline:
        "In today's competitive travel landscape, exceptional service is non-negotiable. NovaGent's AI agents streamline operations, personalize guest interactions, and optimize revenue streams—allowing your team to focus on creating memorable experiences that drive loyalty and growth.",
      imagePlaceholder: "/industries/hero/tth-hero.png",
      imageAlt: "Modern travel and hospitality experience enhanced by AI",
    },
    challenges: {
      headline: "Navigating Complexities in Travel, Transportation & Hospitality",
      items: [
        {
          icon: Clock,
          title: "Labor Shortages & Staff Turnover",
          description:
            "The industry faces persistent staffing challenges, with high turnover rates and difficulty filling customer-facing positions, creating service gaps and inconsistency.",
        },
        {
          icon: Globe,
          title: "Fluctuating Demand Patterns",
          description:
            "Seasonal variations, economic shifts, and global events create unpredictable demand patterns that make resource planning and revenue management increasingly complex.",
        },
        {
          icon: Users,
          title: "Rising Customer Expectations",
          description:
            "Today's travelers expect instant responses, personalized service, and seamless experiences across all touchpoints—standards that are difficult to maintain consistently.",
        },
        {
          icon: TrendingUp,
          title: "Competitive Pricing Pressure",
          description:
            "Online transparency and aggregator sites have intensified price competition, making it challenging to maintain margins while delivering high-quality service.",
        },
      ],
    },
    solutions: {
      headline: "How NovaGent Transforms Travel, Transportation & Hospitality",
      items: [
        {
          icon: Plane,
          useCaseTitle: "AI-Powered Travel Booking & Assistance",
          benefitDescription:
            "Deploy intelligent agents that handle the entire booking process—from initial inquiry to confirmation, upsells, and pre-arrival communication. Our AI can manage complex itineraries, answer FAQs, and provide personalized recommendations, all while maintaining your brand voice.",
        },
        {
          icon: Hotel,
          useCaseTitle: "24/7 Virtual Concierge Services",
          benefitDescription:
            "Offer guests round-the-clock assistance through an AI concierge that handles room service orders, local recommendations, facility information, and special requests. This ensures consistent service quality regardless of staffing levels or time of day.",
        },
        {
          icon: Calendar,
          useCaseTitle: "Intelligent Reservation Management",
          benefitDescription:
            "Optimize your booking calendar with AI that manages reservations, handles modifications, and implements dynamic pricing strategies based on real-time demand signals, competitor rates, and historical patterns.",
        },
        {
          icon: Bus,
          useCaseTitle: "Fleet & Route Optimization",
          benefitDescription:
            "For transportation providers, our AI analyzes traffic patterns, maintenance schedules, and passenger demand to optimize routes, reduce fuel consumption, and maximize vehicle utilization while minimizing downtime.",
        },
        {
          icon: MessageSquare,
          useCaseTitle: "Multilingual Guest Communication",
          benefitDescription:
            "Break language barriers with AI agents that communicate fluently in multiple languages across email, chat, and messaging platforms, ensuring international guests receive the same level of service as domestic travelers.",
        },
        {
          icon: Star,
          useCaseTitle: "Reputation & Feedback Management",
          benefitDescription:
            "Automatically monitor, analyze, and respond to guest reviews across platforms, identifying sentiment trends and service issues while encouraging positive reviews from satisfied guests.",
        },
      ],
    },
    relevantAgents: {
      headline: "Meet Your AI Team for Travel, Transportation & Hospitality",
      items: [
        {
          icon: MessageSquare,
          name: "Customer Support Agent",
          description:
            "Handles guest inquiries, booking assistance, and service requests 24/7 across multiple channels and languages.",
          link: "/solutions/customer-support-agent",
        },
        {
          icon: Calendar,
          name: "Appointment Setter Agent",
          description:
            "Manages reservations, schedules tours, and coordinates transportation logistics with intelligent prioritization.",
          link: "/solutions/appointment-setter-agent",
        },
        {
          icon: Target,
          name: "Lead Generation Agent",
          description:
            "Identifies and nurtures potential guests, corporate clients, and group bookings through personalized outreach.",
          link: "/solutions/lead-generation-agent",
        },
        {
          icon: Star,
          name: "SEO + Reputation Agent",
          description:
            "Monitors and manages your online presence, reviews, and search visibility to attract more direct bookings.",
          link: "/solutions/seo-reputation-agent",
        },
        {
          icon: TrendingUp,
          name: "Ad Campaign Manager Agent",
          description:
            "Creates and optimizes targeted advertising campaigns to fill low-demand periods and promote special offers.",
          link: "/solutions/ad-campaign-manager-agent",
        },
      ],
    },
    keyOutcomes: {
      headline: "Tangible Results for Your Travel & Hospitality Business",
      items: [
        {
          icon: Zap,
          title: "45% Increase in Booking Conversions",
          description:
            "Immediate response to inquiries and personalized follow-up significantly improves conversion rates from initial interest to confirmed bookings.",
        },
        {
          icon: Clock,
          title: "24/7 Guest Support Coverage",
          description:
            "Provide consistent, high-quality service around the clock without the cost of additional staff or call centers.",
        },
        {
          icon: Smile,
          title: "35% Higher Guest Satisfaction",
          description:
            "Faster response times, personalized interactions, and proactive service recovery lead to measurably improved guest satisfaction scores.",
        },
        {
          icon: BarChart,
          title: "20% Revenue Increase per Guest",
          description:
            "AI-powered upselling and cross-selling at optimal moments increases average transaction value and ancillary revenue.",
        },
        {
          icon: Briefcase,
          title: "30% Reduction in Operational Costs",
          description:
            "Automate routine tasks and communications, allowing your team to operate more efficiently with existing resources.",
        },
        {
          icon: Map,
          title: "15% Improvement in Fleet Utilization",
          description:
            "Optimize routes, maintenance schedules, and vehicle allocation to maximize efficiency and reduce downtime.",
        },
      ],
    },
    cta: {
      headline: "Ready to Elevate Your Travel & Hospitality Business?",
      buttonText: "Book Your Personalized Demo",
      buttonLink: "/contact?industry=travel-transportation-hospitality",
    },
  }

  return <IndustryPageTemplate {...tthPageData} />
}
