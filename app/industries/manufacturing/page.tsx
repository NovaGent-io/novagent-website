"use client"

import { IndustryPageTemplate, type IndustryPageTemplateProps } from "@/components/industry-landing-template"
import {
  Wrench,
  ShieldAlert,
  Network,
  Users,
  Cpu,
  ScanSearch,
  Waypoints,
  Factory,
  Warehouse,
  HardHat,
  BrainCircuit,
  Bot,
  DatabaseZap,
  BarChartBig,
  ShieldCheck,
  TrendingUp,
  Gauge,
  CheckCircle2,
  DollarSign,
  Truck,
  ShieldPlus,
} from "lucide-react"

const manufacturingPageData: IndustryPageTemplateProps = {
  industryName: "Manufacturing",
  hero: {
    headline: "Revolutionize Your Factory Floor: AI for Smart Manufacturing",
    subHeadline:
      "NovaGent empowers manufacturers to boost efficiency, reduce downtime, and enhance quality control with intelligent automation and predictive insights.",
    imagePlaceholder: "/placeholder.svg?width=1200&height=800",
    imageAlt: "AI transforming a modern smart factory",
  },
  challenges: {
    headline: "Overcoming Manufacturing's Toughest Hurdles",
    items: [
      {
        icon: Wrench,
        title: "Operational Inefficiencies & Downtime",
        description:
          "Struggling with unplanned machine failures, production bottlenecks, and manual processes that slow down output and increase costs.",
      },
      {
        icon: ShieldAlert,
        title: "Quality Control & Defect Reduction",
        description:
          "Maintaining consistent product quality and minimizing defects in high-volume production environments is a constant challenge.",
      },
      {
        icon: Network,
        title: "Complex Supply Chain Management",
        description:
          "Navigating volatile supply chains, managing inventory effectively, and ensuring timely delivery of materials and finished goods.",
      },
      {
        icon: Users,
        title: "Skilled Labor Shortages & Safety",
        description:
          "Addressing the manufacturing skills gap while ensuring a safe working environment for all employees on the factory floor.",
      },
    ],
  },
  solutions: {
    headline: "NovaGent's AI-Powered Manufacturing Solutions",
    items: [
      {
        icon: Cpu,
        useCaseTitle: "Predictive Maintenance Agent",
        benefitDescription:
          "Our AI monitors equipment health in real-time, predicting potential failures before they occur, scheduling proactive maintenance, and minimizing costly unplanned downtime.",
      },
      {
        icon: ScanSearch,
        useCaseTitle: "Automated Quality Inspection Agent",
        benefitDescription:
          "Leverage computer vision and AI to automatically inspect products on the assembly line, identifying defects with superhuman accuracy and speed, 24/7.",
      },
      {
        icon: Waypoints,
        useCaseTitle: "Supply Chain Optimization Agent",
        benefitDescription:
          "Gain end-to-end visibility into your supply chain. Our AI analyzes demand forecasts, supplier performance, and logistics to optimize inventory levels and reduce lead times.",
      },
      {
        icon: Factory,
        useCaseTitle: "Production Scheduling & Optimization Agent",
        benefitDescription:
          "Dynamically adjust production schedules based on real-time data, including material availability, machine capacity, and order priorities, to maximize throughput and efficiency.",
      },
      {
        icon: Warehouse,
        useCaseTitle: "Smart Inventory Management Agent",
        benefitDescription:
          "Automate inventory tracking, demand forecasting, and reordering processes. Ensure optimal stock levels, reduce holding costs, and prevent stockouts or overstock situations.",
      },
      {
        icon: HardHat,
        useCaseTitle: "Worker Safety & Compliance Agent",
        benefitDescription:
          "Utilize AI-powered video analytics to monitor the factory floor for safety hazards, ensure adherence to PPE protocols, and alert supervisors to potential incidents, fostering a safer work environment.",
      },
    ],
  },
  relevantAgents: {
    headline: "Your Dedicated Manufacturing AI Team",
    items: [
      {
        icon: BrainCircuit,
        name: "NovaGent Core AI Engine",
        description:
          "The foundational AI that powers predictive analytics, process automation, and intelligent decision-making across your manufacturing operations.",
        link: "/solutions/ai-agent-suite",
      },
      {
        icon: Bot,
        name: "Internal Process Automation Agent",
        description:
          "Automates repetitive internal tasks, from order processing to report generation, freeing up your team for higher-value activities.",
        link: "/solutions/customer-support-agent", // Example link, adjust as needed
      },
      {
        icon: DatabaseZap,
        name: "Manufacturing Data Insights Agent",
        description:
          "Collects, processes, and analyzes vast amounts of production data to uncover actionable insights for continuous improvement.",
        link: "/solutions/lead-generation-agent", // Example link, adjust as needed
      },
      {
        icon: BarChartBig,
        name: "Operational Performance Analytics Agent",
        description:
          "Provides real-time dashboards and reports on key performance indicators (KPIs) like OEE, yield, and cycle times.",
        link: "/solutions/ad-campaign-manager-agent", // Example link, adjust as needed
      },
      {
        icon: ShieldCheck,
        name: "Compliance & Reporting Agent",
        description:
          "Helps maintain compliance with industry regulations and automates the generation of necessary reports and documentation.",
        link: "/solutions/seo-reputation-agent", // Example link, adjust as needed
      },
    ],
  },
  keyOutcomes: {
    headline: "Tangible Results for Your Manufacturing Business",
    items: [
      {
        icon: TrendingUp,
        title: "Increased Overall Equipment Effectiveness (OEE)",
        description:
          "Significantly boost your OEE by minimizing downtime, improving performance, and ensuring quality.",
      },
      {
        icon: Gauge,
        title: "Reduced Unplanned Downtime",
        description:
          "Proactively address maintenance needs and prevent costly interruptions to your production schedule with predictive AI.",
      },
      {
        icon: CheckCircle2,
        title: "Improved Product Quality & Reduced Defects",
        description:
          "Achieve higher consistency and lower defect rates through AI-powered quality assurance and automated inspection.",
      },
      {
        icon: DollarSign,
        title: "Lowered Operational Costs",
        description:
          "Optimize resource utilization, reduce waste, and streamline processes to decrease overall operational expenses.",
      },
      {
        icon: Truck,
        title: "Enhanced Supply Chain Resilience",
        description:
          "Build a more agile and responsive supply chain that can adapt to market changes and disruptions using AI-driven insights.",
      },
      {
        icon: ShieldPlus,
        title: "Improved Workplace Safety",
        description:
          "Create a safer manufacturing environment by proactively identifying and mitigating risks with AI monitoring.",
      },
    ],
  },
  cta: {
    headline: "Build Your Smart Factory of the Future, Today.",
    buttonText: "Optimize My Operations",
    buttonLink: "/contact",
  },
}

export default function ManufacturingPage() {
  return <IndustryPageTemplate {...manufacturingPageData} />
}
