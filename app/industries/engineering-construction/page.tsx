"use client"

import { IndustryPageTemplate, type IndustryPageTemplateProps } from "@/components/industry-landing-template"
import {
  Building,
  HardHat,
  ClipboardCheck,
  DollarSign,
  Layers,
  Scaling,
  ShieldCheck,
  Clock,
  TrendingUp,
  Users,
  Settings,
  Bot,
  Briefcase,
  FileText,
  GanttChartSquare,
  Ruler,
  Truck,
  DrillIcon as Drone,
  BarChart3,
} from "lucide-react"

const engineeringConstructionPageData: IndustryPageTemplateProps = {
  industryName: "Engineering & Construction",
  hero: {
    headline: "Building the Future, Smarter: AI for Engineering & Construction",
    subHeadline:
      "NovaGent empowers engineering and construction firms to optimize project lifecycles, enhance safety, and drive profitability with intelligent AI agents.",
    imagePlaceholder: "/placeholder.svg?width=1200&height=800",
    imageAlt: "AI transforming an engineering and construction project site",
  },
  challenges: {
    headline: "Navigating Complexities in Modern Construction",
    items: [
      {
        icon: Clock,
        title: "Project Delays & Cost Overruns",
        description:
          "Managing complex schedules, resource allocation, and unforeseen issues often leads to projects exceeding timelines and budgets.",
      },
      {
        icon: HardHat,
        title: "Job Site Safety & Compliance",
        description:
          "Ensuring worker safety and adherence to stringent regulatory standards across dynamic and hazardous environments is a constant challenge.",
      },
      {
        icon: Layers,
        title: "Inefficient Resource Management",
        description:
          "Optimizing the deployment of labor, equipment, and materials across multiple projects and phases requires sophisticated coordination.",
      },
      {
        icon: FileText,
        title: "Documentation & Reporting Burdens",
        description:
          "Extensive paperwork, progress tracking, and compliance reporting consume significant time and resources, diverting focus from core tasks.",
      },
    ],
  },
  solutions: {
    headline: "NovaGent's AI: Your Blueprint for Success",
    items: [
      {
        icon: GanttChartSquare,
        useCaseTitle: "AI-Powered Project Planning & Scheduling",
        benefitDescription:
          "Automate task sequencing, resource leveling, and critical path analysis. Our agents predict potential delays and suggest optimal adjustments, keeping projects on track.",
      },
      {
        icon: Drone,
        useCaseTitle: "Intelligent Site Monitoring & Safety Audits",
        benefitDescription:
          "Deploy AI agents to analyze drone footage and sensor data for real-time safety hazard detection, progress tracking against BIM models, and automated quality control checks.",
      },
      {
        icon: Truck,
        useCaseTitle: "Optimized Equipment & Materials Logistics",
        benefitDescription:
          "Streamline procurement, track material delivery, and manage equipment utilization across sites. AI predicts needs, minimizes waste, and ensures resources are available when and where needed.",
      },
      {
        icon: Ruler,
        useCaseTitle: "Automated Quality Assurance & Defect Detection",
        benefitDescription:
          "Utilize AI for automated comparison of as-built conditions with design specifications, identifying defects or deviations early to reduce rework and ensure quality standards.",
      },
      {
        icon: ClipboardCheck,
        useCaseTitle: "Smart Document Management & Compliance Reporting",
        benefitDescription:
          "Automate the organization, retrieval, and processing of project documents, permits, and compliance reports. Ensure adherence to regulations with AI-driven audit trails.",
      },
      {
        icon: BarChart3,
        useCaseTitle: "Predictive Maintenance for Heavy Equipment",
        benefitDescription:
          "Monitor equipment health using sensor data and AI analytics to predict potential failures, schedule proactive maintenance, and minimize costly downtime.",
      },
    ],
  },
  relevantAgents: {
    headline: "Your Specialized E&C AI Workforce",
    items: [
      {
        icon: Settings,
        name: "Project Operations Agent",
        description:
          "Streamlines scheduling, resource allocation, and progress tracking for complex construction projects.",
        link: "/solutions/ai-agent-suite#project-operations",
      },
      {
        icon: ShieldCheck,
        name: "Safety & Compliance Agent",
        description:
          "Monitors sites for safety hazards, ensures regulatory adherence, and automates incident reporting.",
        link: "/solutions/ai-agent-suite#safety-compliance",
      },
      {
        icon: Briefcase,
        name: "Procurement & Logistics Agent",
        description:
          "Optimizes material sourcing, delivery schedules, and inventory management for construction sites.",
        link: "/solutions/ai-agent-suite#procurement-logistics",
      },
      {
        icon: Bot,
        name: "Field Data Capture Agent",
        description: "Automates the collection and processing of data from site inspections, drones, and IoT sensors.",
        link: "/solutions/ai-agent-suite#field-data",
      },
      {
        icon: Users,
        name: "Stakeholder Communication Agent",
        description: "Provides automated updates and reports to clients, subcontractors, and internal teams.",
        link: "/solutions/ai-agent-suite#stakeholder-communication",
      },
    ],
  },
  keyOutcomes: {
    headline: "Building a Foundation for Measurable Success",
    items: [
      {
        icon: TrendingUp,
        title: "Reduced Project Delays",
        description:
          "Significant decrease in project completion times through AI-optimized scheduling and proactive issue resolution.",
      },
      {
        icon: DollarSign,
        title: "Lower Operational Costs",
        description:
          "Achieve substantial cost savings via efficient resource management, waste reduction, and minimized rework.",
      },
      {
        icon: HardHat,
        title: "Improved Safety Records",
        description: "Enhance on-site safety, leading to fewer incidents and a stronger safety culture.",
      },
      {
        icon: Scaling,
        title: "Enhanced Productivity",
        description:
          "Boost overall productivity of field and office teams by automating repetitive tasks and streamlining workflows.",
      },
      {
        icon: ClipboardCheck,
        title: "Streamlined Compliance",
        description: "Simplify regulatory adherence and documentation, reducing risks and administrative overhead.",
      },
      {
        icon: Building,
        title: "Higher Quality Construction",
        description:
          "Deliver superior quality projects through AI-driven quality assurance and early defect detection.",
      },
    ],
  },
  cta: {
    headline: "Ready to Engineer a Smarter Future?",
    buttonText: "Discuss Your Project",
    buttonLink: "/contact",
  },
}

export default function EngineeringConstructionPage() {
  return <IndustryPageTemplate {...engineeringConstructionPageData} />
}
