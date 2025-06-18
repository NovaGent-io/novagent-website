"use client"

import { IndustryPageTemplate } from "@/components/industry-landing-template"
import {
  Stethoscope,
  FlaskConical,
  FileText,
  Users,
  Calendar,
  Search,
  LineChart,
  Bot,
  TrendingUp,
  Clock,
  Target,
  Smile,
  DollarSign,
  Lock,
  Microscope,
  ClipboardList,
  UserCheck,
  FilePlus,
  MessageSquare,
  Wallet,
} from "lucide-react"

const healthcareData = {
  industryName: "Healthcare & Life Sciences",
  hero: {
    headline: "Pioneering the Future of Health with Intelligent Automation",
    subHeadline:
      "Empower clinicians, accelerate research, and enhance patient outcomes with NovaGent's secure, HIPAA-compliant AI agents.",
    imagePlaceholder: "/industries/hero/healthcare-hero.png",
    imageAlt: "AI-powered diagnostics and patient care interface",
  },
  challenges: {
    headline: "Navigating Critical Healthcare Complexities",
    items: [
      {
        icon: Stethoscope,
        title: "Clinician Burnout & Admin Overload",
        description:
          "Excessive documentation and administrative tasks detract from patient care, leading to burnout and inefficiency.",
      },
      {
        icon: FileText,
        title: "Fragmented Patient Data",
        description:
          "Siloed data across different EHR systems hinders a unified view of patient history, impacting diagnostic accuracy.",
      },
      {
        icon: FlaskConical,
        title: "Lengthy Research & Trial Timelines",
        description:
          "The high cost and long duration of drug discovery and clinical trials create significant barriers to innovation.",
      },
      {
        icon: DollarSign,
        title: "Revenue Cycle Inefficiencies",
        description:
          "Complex medical coding, billing, and prior authorization processes lead to delays and revenue leakage.",
      },
    ],
  },
  solutions: {
    headline: "Your AI-Powered Healthcare Ecosystem",
    items: [
      {
        icon: Microscope,
        useCaseTitle: "AI Medical Scribe & Documentation",
        benefitDescription:
          "Our AI agent listens to patient-doctor conversations and automatically generates accurate, structured clinical notes directly into the EHR, saving hours per day.",
      },
      {
        icon: ClipboardList,
        useCaseTitle: "Intelligent Prior Authorization",
        benefitDescription:
          "Automate the entire prior authorization lifecycle, from submission and status checks to appeals, reducing denials and accelerating patient access to care.",
      },
      {
        icon: UserCheck,
        useCaseTitle: "Clinical Trial Patient Matching",
        benefitDescription:
          "Rapidly scan millions of patient records against complex trial criteria to identify and pre-qualify eligible candidates, drastically speeding up recruitment.",
      },
      {
        icon: FilePlus,
        useCaseTitle: "Automated Medical Coding",
        benefitDescription:
          "Analyze clinical documentation to suggest accurate ICD-10, CPT, and HCPCS codes, improving billing accuracy and optimizing the revenue cycle.",
      },
      {
        icon: MessageSquare,
        useCaseTitle: "Personalized Patient Engagement",
        benefitDescription:
          "Deploy AI assistants for post-discharge follow-ups, medication reminders, and answering common patient questions, improving adherence and satisfaction.",
      },
      {
        icon: Wallet,
        useCaseTitle: "Revenue Cycle Management Bot",
        benefitDescription:
          "Automate claim status checks, denial management, and payment posting to reduce administrative costs and accelerate cash flow for your organization.",
      },
    ],
  },
  relevantAgents: {
    headline: "Your Specialized AI Healthcare Team",
    items: [
      {
        icon: Users,
        name: "Customer Support Agent",
        description: "Manages patient inquiries, appointment scheduling, and provides 24/7 support.",
        link: "/solutions/customer-support-agent",
      },
      {
        icon: Calendar,
        name: "Appointment Setter Agent",
        description: "Handles inbound and outbound scheduling, reminders, and follow-ups.",
        link: "/solutions/appointment-setter-agent",
      },
      {
        icon: Search,
        name: "SEO + Reputation Agent",
        description: "Manages online presence and patient reviews for clinics and hospital systems.",
        link: "/solutions/seo-reputation-agent",
      },
      {
        icon: LineChart,
        name: "Ad Campaign Manager",
        description: "Runs targeted campaigns for service lines or clinical trial recruitment.",
        link: "/solutions/ad-campaign-manager-agent",
      },
      {
        icon: Bot,
        name: "Custom Agentic Systems",
        description: "Bespoke solutions for unique challenges like clinical data analysis or lab automation.",
        link: "/solutions/custom-agentic-systems",
      },
    ],
  },
  keyOutcomes: {
    headline: "Delivering Measurable Health Outcomes",
    items: [
      {
        icon: Clock,
        title: "Reduce Admin Time by 40%",
        description: "Free up clinicians to focus on what matters most: patient care.",
      },
      {
        icon: Target,
        title: "Improve Diagnostic Accuracy",
        description: "Leverage AI to analyze data and assist in identifying critical health indicators.",
      },
      {
        icon: TrendingUp,
        title: "Accelerate Research Cycles",
        description: "Cut down drug discovery and trial recruitment timelines significantly.",
      },
      {
        icon: Smile,
        title: "Enhance Patient Satisfaction",
        description: "Provide timely, personalized communication and support to improve the patient experience.",
      },
      {
        icon: DollarSign,
        title: "Increase Revenue Capture",
        description: "Optimize billing and reduce claim denials to improve your financial health.",
      },
      {
        icon: Lock,
        title: "Strengthen Data Security",
        description: "Ensure HIPAA compliance and protect sensitive patient data with secure AI.",
      },
    ],
  },
  cta: {
    headline: "Ready to Transform Patient Care with AI?",
    buttonText: "Book a Healthcare Demo",
    buttonLink: "/contact",
  },
}

export default function HealthcarePage() {
  return <IndustryPageTemplate {...healthcareData} />
}
