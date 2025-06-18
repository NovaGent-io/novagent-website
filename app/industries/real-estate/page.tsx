"use client"


import { IndustryPageTemplate } from "@/components/industry-landing-template"
import {
  Users,
  Clock,
  Calendar,
  MessageSquare,
  Share2,
  Star,
  Building,
  Target,
  UserCheck,
  BarChart,
} from "lucide-react"

export default function RealEstatePage() {
  const realEstatePageData = {
    industryName: "Real Estate",
    hero: {
      headline: "Automate Your Real Estate Business from Lead to Close.",
      subHeadline:
        "In the fast-paced real estate market, speed and responsiveness are everything. NovaGent provides a suite of managed AI agents designed to automate your most time-consuming tasks, from lead qualification and appointment setting to client follow-up, allowing you to focus on what you do best: building relationships and closing deals.",
      imagePlaceholder: "/industries/hero/real-estate-hero.png",
      imageAlt: "Modern real estate business automation with AI",
    },
    challenges: {
      headline: "Navigating the Complexities of Today's Real Estate Market",
      items: [
        {
          icon: Clock,
          title: "Time-Consuming Lead Management",
          description:
            "Real estate professionals spend up to 40% of their time qualifying leads and following up with prospects, taking away from valuable client-facing activities and property showings.",
        },
        {
          icon: MessageSquare,
          title: "Inconsistent Client Communication",
          description:
            "Maintaining regular, personalized communication with clients across multiple channels becomes increasingly difficult as your client base grows.",
        },
        {
          icon: Calendar,
          title: "Complex Scheduling Logistics",
          description:
            "Coordinating viewings, inspections, and closings between multiple parties creates scheduling bottlenecks that slow down the sales process.",
        },
        {
          icon: Share2,
          title: "Ineffective Listing Promotion",
          description:
            "Creating and distributing compelling content across various platforms to maximize property visibility requires significant time and marketing expertise.",
        },
      ],
    },
    solutions: {
      headline: "How NovaGent Helps the Real Estate Industry",
      items: [
        {
          icon: Target,
          useCaseTitle: "Instant Lead Qualification",
          benefitDescription:
            "Automate the intake and qualification of new buyer and seller leads from your website, Zillow, Trulia, and other real estate portals 24/7. Our AI agents engage with leads immediately, ask qualifying questions, and route hot prospects directly to your team while nurturing others automatically.",
        },
        {
          icon: MessageSquare,
          useCaseTitle: "Automated Lead Nurturing",
          benefitDescription:
            "Deploy multi-channel follow-up sequences via email and SMS to keep you top-of-mind with new leads, ensuring no opportunity goes cold. Our AI agents personalize communication based on prospect interests and behavior, increasing engagement rates by up to 60%.",
        },
        {
          icon: Calendar,
          useCaseTitle: "Intelligent Appointment Scheduling",
          benefitDescription:
            "Allow our AI agent to handle the back-and-forth of scheduling property viewings, consultations, and open houses directly on your calendar. The agent coordinates with all parties, sends reminders, and handles rescheduling, saving your team 15+ hours per week.",
        },
        {
          icon: Share2,
          useCaseTitle: "Social Media for Listings",
          benefitDescription:
            "Automatically generate and schedule social media posts to promote new listings, open houses, and recently sold properties across your channels. Our AI creates platform-specific content optimized for engagement, including image captions, hashtags, and call-to-actions.",
        },
        {
          icon: Star,
          useCaseTitle: "Reputation & Review Management",
          benefitDescription:
            "Proactively request reviews and testimonials from satisfied clients to build your online reputation and attract more business. Our AI monitors review platforms, responds to feedback, and helps you maintain a stellar online presence.",
        },
        {
          icon: Building,
          useCaseTitle: "Tenant & Maintenance Communication",
          benefitDescription:
            "Use an AI agent to handle common tenant inquiries, log maintenance requests, and send out community updates, freeing up your property management team. The system prioritizes urgent matters and ensures nothing falls through the cracks.",
        },
      ],
    },
    relevantAgents: {
      headline: "Meet Your AI Team for Real Estate",
      items: [
        {
          icon: Target,
          name: "Lead Generation Agent",
          description:
            "Identifies and qualifies potential buyers and sellers through multiple channels, creating a steady pipeline of opportunities.",
          link: "/solutions/lead-generation-agent",
        },
        {
          icon: Calendar,
          name: "Appointment Setter Agent",
          description:
            "Manages your calendar, coordinates showings, and ensures all parties are prepared and informed.",
          link: "/solutions/appointment-setter-agent",
        },
        {
          icon: MessageSquare,
          name: "Customer Support Agent",
          description:
            "Handles client inquiries, provides property information, and maintains consistent communication.",
          link: "/solutions/customer-support-agent",
        },
        {
          icon: Share2,
          name: "Social Media Manager Agent",
          description: "Creates and distributes compelling content about your properties across social platforms.",
          link: "/solutions/social-media-manager-agent",
        },
        {
          icon: Star,
          name: "SEO + Reputation Agent",
          description: "Builds and maintains your online presence, manages reviews, and improves search visibility.",
          link: "/solutions/seo-reputation-agent",
        },
      ],
    },
    keyOutcomes: {
      headline: "Tangible Results for Your Real Estate Business",
      items: [
        {
          icon: UserCheck,
          title: "More Qualified Leads",
          description: "Increase your pipeline of pre-qualified buyer and seller leads by 35-50% without adding staff.",
        },
        {
          icon: Calendar,
          title: "Fuller Appointment Calendar",
          description: "Book 40% more property viewings and client meetings with automated scheduling and follow-up.",
        },
        {
          icon: Clock,
          title: "Faster Response Times",
          description: "Reduce lead response time from hours to seconds, increasing conversion rates by up to 45%.",
        },
        {
          icon: Users,
          title: "Improved Client Satisfaction",
          description: "Achieve 30% higher client satisfaction scores through consistent, professional communication.",
        },
        {
          icon: Star,
          title: "Stronger Online Reputation",
          description: "Generate 3-5x more positive reviews and testimonials with automated review solicitation.",
        },
        {
          icon: BarChart,
          title: "Increased Productivity",
          description:
            "Reclaim 15-20 hours per week per agent for high-value activities like client meetings and closings.",
        },
      ],
    },
    cta: {
      headline: "Ready to Build the Future of Your Real Estate Business?",
      buttonText: "Discuss Your Real Estate Solutions",
      buttonLink: "/contact?industry=real-estate",
    },
  }

  return <IndustryPageTemplate {...realEstatePageData} />
}
