"use client"


import { IndustryPageTemplate } from "@/components/industry-landing-template"
import type { IndustryPageProps } from "@/lib/types/industry-page"

const publicSectorData: Omit<IndustryPageProps, "industryName"> = {
  heroData: {
    title: "Modernizing the Public Sector with AI",
    subtitle:
      "Improve citizen services, increase operational efficiency, and enhance public safety with NovaGent's trusted AI solutions.",
    cta: {
      text: "Serve Your Community Better",
      href: "/contact",
    },
  },
  benefits: [
    {
      icon: "efficiency",
      title: "Efficient Citizen Services",
      description:
        "Automate responses to common citizen inquiries, process applications for permits and services, and provide 24/7 access to information.",
    },
    {
      icon: "intelligence",
      title: "Data-Driven Policy Making",
      description:
        "Analyze public data to identify community needs, assess the impact of policies, and make more informed decisions.",
    },
    {
      icon: "growth",
      title: "Streamlined Internal Operations",
      description:
        "Automate procurement, HR processes, and inter-departmental workflows to reduce bureaucracy and improve efficiency.",
    },
    {
      icon: "security",
      title: "Enhanced Public Safety",
      description:
        "Deploy AI for traffic management, emergency response coordination, and analysis of public safety data to identify trends.",
    },
  ],
  useCases: [
    {
      title: "AI-Powered 311 Assistant",
      description:
        "Provides citizens with instant answers to non-emergency questions and guides them to the correct government resources.",
      image: "/industries/public-sector-311.png",
    },
    {
      title: "Automated Grant Management",
      description:
        "Manages the entire grant lifecycle for government agencies, from application intake and review to award and reporting.",
      image: "/industries/public-sector-grants.png",
    },
    {
      title: "Public Records Request Bot",
      description:
        "Automates the processing of public records requests, searching databases and redacting sensitive information before release.",
      image: "/industries/public-sector-records.png",
    },
  ],
  cta: {
    title: "Build a Smarter, More Responsive Government",
    subtitle:
      "Partner with NovaGent to leverage AI for the public good, creating a more efficient and effective public sector.",
    cta: {
      text: "Request Information",
      href: "/contact",
    },
  },
}

export default function PublicSectorPage() {
  return <IndustryPageTemplate industryName="Public Sector" {...publicSectorData} />
}
