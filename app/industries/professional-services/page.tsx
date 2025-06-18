"use client"

import { IndustryPageTemplate } from "@/components/industry-landing-template"
import {
  Users,
  Clock,
  FileText,
  TrendingUp,
  MessageSquare,
  Calendar,
  BarChart,
  Shield,
  Target,
  Star,
  Zap,
  Award,
  DollarSign,
  CheckCircle,
  Brain,
} from "lucide-react"

export default function ProfessionalServicesPage() {
  const professionalServicesPageData = {
    industryName: "Professional Services",
    hero: {
      headline: "AI-Powered Efficiency for Professional Services",
      subHeadline:
        "Automate client onboarding, streamline project management, and deliver exceptional value with NovaGent's AI agents.",
      imagePlaceholder: "/industries/hero/professional-services-hero.png",
      imageAlt: "Modern professional services office enhanced with AI technology",
    },
    challenges: {
      headline: "Navigating Today's Professional Services Challenges",
      items: [
        {
          icon: Users,
          title: "Complex Client Onboarding",
          description:
            "Managing multiple client intake processes, document collection, and initial consultations creates bottlenecks that delay project starts and impact client satisfaction.",
        },
        {
          icon: Clock,
          title: "Time-Intensive Administrative Tasks",
          description:
            "Billable hour tracking, invoice generation, and project documentation consume valuable time that could be spent on high-value client work and business development.",
        },
        {
          icon: FileText,
          title: "Document Management & Research",
          description:
            "Organizing case files, conducting research, and maintaining compliance documentation requires significant manual effort and attention to detail across multiple client engagements.",
        },
        {
          icon: TrendingUp,
          title: "Scaling Service Delivery",
          description:
            "Growing client demands while maintaining service quality and profitability requires efficient systems that can handle increased workload without proportional staff increases.",
        },
      ],
    },
    solutions: {
      headline: "How NovaGent Transforms Professional Services Operations",
      items: [
        {
          icon: MessageSquare,
          useCaseTitle: "Automated Client Intake & Qualification",
          benefitDescription:
            "Deploy AI agents that handle initial client inquiries, collect necessary documentation, and qualify prospects before they reach your team. Our agents can conduct preliminary consultations, gather case details, and schedule follow-up meetings—ensuring your professionals focus on high-value strategic work.",
        },
        {
          icon: Calendar,
          useCaseTitle: "Intelligent Project Management",
          benefitDescription:
            "Streamline project workflows with AI that tracks milestones, manages resource allocation, and proactively identifies potential delays or budget overruns. The system automatically updates clients on progress and coordinates team schedules for optimal efficiency.",
        },
        {
          icon: FileText,
          useCaseTitle: "AI-Powered Research & Document Analysis",
          benefitDescription:
            "Accelerate legal research, case preparation, and due diligence with AI agents that can analyze vast amounts of documents, extract key insights, and prepare preliminary reports—reducing research time by up to 70% while improving accuracy.",
        },
        {
          icon: DollarSign,
          useCaseTitle: "Automated Billing & Time Tracking",
          benefitDescription:
            "Eliminate manual time entry and billing errors with AI that automatically tracks billable activities, generates accurate invoices, and sends payment reminders. The system integrates with your existing practice management software for seamless operations.",
        },
        {
          icon: Shield,
          useCaseTitle: "Compliance & Risk Management",
          benefitDescription:
            "Maintain regulatory compliance with AI agents that monitor deadlines, track document requirements, and ensure all client matters meet industry standards and ethical guidelines—reducing liability and improving client trust.",
        },
        {
          icon: Brain,
          useCaseTitle: "Strategic Business Intelligence",
          benefitDescription:
            "Gain insights into practice performance with AI that analyzes client patterns, identifies profitable service areas, and recommends growth opportunities based on market trends and your firm's capabilities.",
        },
      ],
    },
    relevantAgents: {
      headline: "Meet Your AI Team for Professional Services Excellence",
      items: [
        {
          icon: Target,
          name: "Lead Generation Agent",
          description:
            "Identifies and nurtures potential clients through targeted outreach and referral network management.",
          link: "/solutions/lead-generation-agent",
        },
        {
          icon: Calendar,
          name: "Appointment Setter Agent",
          description: "Manages client consultations, court dates, and internal meetings without human intervention.",
          link: "/solutions/appointment-setter-agent",
        },
        {
          icon: MessageSquare,
          name: "Customer Support Agent",
          description: "Handles client inquiries, case status updates, and routine communications 24/7.",
          link: "/solutions/customer-support-agent",
        },
        {
          icon: BarChart,
          name: "Ad Campaign Manager Agent",
          description: "Creates and optimizes marketing campaigns for specific practice areas and client acquisition.",
          link: "/solutions/ad-campaign-manager-agent",
        },
        {
          icon: Star,
          name: "SEO + Reputation Agent",
          description:
            "Manages your firm's online presence, client reviews, and search visibility to attract quality clients.",
          link: "/solutions/seo-reputation-agent",
        },
      ],
    },
    keyOutcomes: {
      headline: "Tangible Results for Your Professional Services Firm",
      items: [
        {
          icon: Zap,
          title: "50% Faster Client Onboarding",
          description:
            "Streamline intake processes and reduce time-to-engagement, allowing you to start billable work sooner.",
        },
        {
          icon: Clock,
          title: "30% Increase in Billable Hours",
          description: "Eliminate administrative tasks and focus your team's expertise on high-value client work.",
        },
        {
          icon: CheckCircle,
          title: "95% Reduction in Billing Errors",
          description: "Automated time tracking and invoicing ensures accurate billing and faster payment collection.",
        },
        {
          icon: TrendingUp,
          title: "40% Improvement in Client Satisfaction",
          description: "Consistent communication and proactive project management enhance the client experience.",
        },
        {
          icon: Shield,
          title: "100% Compliance Monitoring",
          description: "Never miss a deadline or regulatory requirement with automated compliance tracking.",
        },
        {
          icon: Award,
          title: "25% Growth in Practice Revenue",
          description: "Increased efficiency and client capacity drives sustainable business growth and profitability.",
        },
      ],
    },
    cta: {
      headline: "Ready to Transform Your Professional Services Practice?",
      buttonText: "Book Your Professional Services AI Consultation",
      buttonLink: "/contact?industry=professional-services",
    },
  }

  return <IndustryPageTemplate {...professionalServicesPageData} />
}
