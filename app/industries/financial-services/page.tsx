"use client"

import { IndustryPageTemplate, type IndustryPageTemplateProps } from "@/components/industry-landing-template"
import {
  ShieldAlert,
  BarChart3,
  Users,
  Bot,
  TrendingUp,
  CheckCircle,
  Zap,
  Lightbulb,
  MessageSquare,
  Users2,
  Target,
  Award,
  Briefcase,
} from "lucide-react"

const financialServicesPageData: Omit<IndustryPageTemplateProps, "industryName"> = {
  hero: {
    headline: "Intelligent Automation for Financial Services",
    subHeadline:
      "From algorithmic trading and fraud detection to personalized financial advice, NovaGent is redefining the future of finance with AI-driven precision and efficiency.",
    imagePlaceholder: "/industries/hero/financial-services-hero.png",
    imageAlt: "AI transforming the financial services industry",
  },
  challenges: {
    headline: "Navigating Financial Complexity & Risk",
    items: [
      {
        icon: ShieldAlert,
        title: "Regulatory Compliance & Reporting",
        description:
          "Ensuring adherence to ever-evolving financial regulations (e.g., AML, KYC, MiFID II) while managing complex reporting requirements is a constant burden.",
      },
      {
        icon: Zap,
        title: "Fraud Detection & Cybersecurity",
        description:
          "Combating sophisticated financial fraud, cyber threats, and data breaches requires advanced, real-time monitoring and prevention capabilities.",
      },
      {
        icon: BarChart3,
        title: "Data Overload & Insight Generation",
        description:
          "Financial institutions are inundated with vast amounts of market and customer data, making it challenging to extract actionable insights quickly.",
      },
      {
        icon: Users,
        title: "Personalized Customer Experiences",
        description:
          "Meeting increasing customer expectations for tailored financial advice, products, and seamless digital interactions at scale is difficult.",
      },
    ],
  },
  solutions: {
    headline: "NovaGent's AI Solutions for Finance",
    items: [
      {
        icon: Bot,
        useCaseTitle: "AI-Powered Loan Origination & Underwriting",
        benefitDescription:
          "Automate the entire loan application lifecycle, from data collection and verification to AI-driven credit scoring and risk assessment, reducing processing times and improving accuracy.",
      },
      {
        icon: ShieldAlert,
        useCaseTitle: "Intelligent AML & KYC Compliance Automation",
        benefitDescription:
          "Deploy AI agents to continuously monitor transactions, automate due diligence, identify suspicious activities, and streamline regulatory reporting for AML/KYC compliance.",
      },
      {
        icon: BarChart3,
        useCaseTitle: "Algorithmic Trading & Investment Analysis",
        benefitDescription:
          "Leverage AI to analyze vast market datasets, identify trading opportunities, execute strategies with precision, and optimize investment portfolios based on real-time insights.",
      },
      {
        icon: MessageSquare,
        useCaseTitle: "AI-Enhanced Customer Service & Support",
        benefitDescription:
          "Provide 24/7, personalized customer support through AI chatbots that can handle inquiries, offer financial guidance, and escalate complex issues seamlessly.",
      },
      {
        icon: Lightbulb,
        useCaseTitle: "Predictive Fraud Detection & Prevention",
        benefitDescription:
          "Utilize machine learning models to analyze patterns and anomalies in transactional data, proactively identifying and flagging potential fraud in real-time.",
      },
    ],
  },
  relevantAgents: {
    headline: "Your AI Team for Financial Services",
    items: [
      {
        icon: Bot,
        name: "Financial Analyst Agent",
        description:
          "Automates market research, financial modeling, and report generation, providing deep insights for investment decisions.",
        link: "/solutions/custom-agentic-systems",
      },
      {
        icon: ShieldAlert,
        name: "Compliance Monitoring Agent",
        description:
          "Continuously scans transactions and communications for regulatory adherence, flagging potential compliance breaches.",
        link: "/solutions/custom-agentic-systems",
      },
      {
        icon: Users2,
        name: "Client Onboarding Agent",
        description:
          "Streamlines KYC/AML checks and automates the client onboarding process for a faster, smoother experience.",
        link: "/solutions/appointment-setter-agent",
      },
      {
        icon: MessageSquare,
        name: "Customer Support Agent for Finance",
        description:
          "Provides instant, accurate responses to common financial queries and assists with account management tasks.",
        link: "/solutions/customer-support-agent",
      },
    ],
  },
  keyOutcomes: {
    headline: "Achieving Superior Financial Performance with AI",
    items: [
      {
        icon: TrendingUp,
        title: "Enhanced Operational Efficiency",
        description:
          "Automate manual processes, reduce overhead, and accelerate service delivery across banking, insurance, and investment operations.",
      },
      {
        icon: CheckCircle,
        title: "Improved Risk Management",
        description:
          "Proactively identify, assess, and mitigate financial, operational, and compliance risks with greater accuracy and speed.",
      },
      {
        icon: Award,
        title: "Superior Customer Experience",
        description:
          "Deliver personalized financial advice, faster service, and intuitive digital interactions that build loyalty and trust.",
      },
      {
        icon: Target,
        title: "Increased Profitability",
        description:
          "Optimize trading strategies, reduce fraud losses, improve loan performance, and identify new revenue opportunities.",
      },
      {
        icon: Briefcase,
        title: "Streamlined Regulatory Compliance",
        description:
          "Reduce the cost and complexity of compliance, improve reporting accuracy, and ensure adherence to financial regulations.",
      },
    ],
  },
  cta: {
    headline: "Capitalize on the AI Revolution in Finance",
    buttonText: "Schedule a Strategic Session",
    buttonLink: "/contact",
  },
}

export default function FinancialServicesPage() {
  return <IndustryPageTemplate industryName="Financial Services" {...financialServicesPageData} />
}
