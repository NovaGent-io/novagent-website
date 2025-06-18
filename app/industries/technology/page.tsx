"use client"


import { IndustryPageTemplate } from "@/components/industry-landing-template"
import type { IndustryPageProps } from "@/lib/types/industry-page"

const technologyData: Omit<IndustryPageProps, "industryName"> = {
  heroData: {
    title: "Accelerating Innovation for the Technology Sector",
    subtitle:
      "Automate software development cycles, enhance customer support, and scale your operations with NovaGent's AI agents.",
    cta: {
      text: "Scale Your Tech",
      href: "/contact",
    },
  },
  benefits: [
    {
      icon: "efficiency",
      title: "Automated DevOps",
      description:
        "Deploy AI agents to manage CI/CD pipelines, monitor application performance, and automate testing and deployment.",
    },
    {
      icon: "intelligence",
      title: "Intelligent Technical Support",
      description:
        "Provide 24/7, tier-1 technical support with AI agents that can troubleshoot issues, guide users, and escalate complex problems.",
    },
    {
      icon: "growth",
      title: "AI-Powered Sales Enablement",
      description:
        "Equip your sales team with agents that can research prospects, generate personalized outreach, and schedule demos.",
    },
    {
      icon: "security",
      title: "Proactive Cybersecurity",
      description:
        "Monitor networks and systems for threats, analyze security alerts, and automate incident response to protect your infrastructure.",
    },
  ],
  useCases: [
    {
      title: "AI Code Reviewer",
      description:
        "Assists development teams by automatically reviewing code for bugs, style inconsistencies, and potential security vulnerabilities.",
      image: "/industries/tech-code-reviewer.png",
    },
    {
      title: "Automated SaaS Onboarding Agent",
      description:
        "Guides new users through your software, explaining features and ensuring they get value from your product from day one.",
      image: "/industries/tech-saas-onboarding.png",
    },
    {
      title: "Cybersecurity Threat Hunter",
      description:
        "Proactively searches for indicators of compromise within your network, identifying threats before they can cause damage.",
      image: "/industries/tech-cybersecurity.png",
    },
  ],
  cta: {
    title: "Build the Next Generation of Technology, Faster",
    subtitle:
      "Discover how NovaGent's autonomous agents can give your tech company the operational leverage to out-innovate the competition.",
    cta: {
      text: "Book a Technical Deep Dive",
      href: "/contact",
    },
  },
}

export default function TechnologyPage() {
  return <IndustryPageTemplate industryName="Technology" {...technologyData} />
}
