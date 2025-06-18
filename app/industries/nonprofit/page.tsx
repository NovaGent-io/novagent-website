"use client"

import { IndustryPageTemplate, type IndustryPageTemplateProps } from "@/components/industry-landing-template"
import {
  HeartHandshake,
  Users,
  TrendingUp,
  Settings,
  BarChart3,
  Megaphone,
  ShieldCheck,
  CalendarDays,
  HandCoins,
  Presentation,
  FileText,
  Search,
  Share2,
  LineChart,
  Goal,
  Sparkles,
  Palette,
  DatabaseZap,
  MailCheck,
  UserCog,
} from "lucide-react"

const nonprofitPageData: IndustryPageTemplateProps = {
  industryName: "Nonprofit",
  hero: {
    headline: "Amplify Your Impact with AI-Powered Solutions for Nonprofits",
    subHeadline:
      "NovaGent empowers nonprofit organizations to streamline operations, enhance donor engagement, and maximize their mission's reach through intelligent automation.",
    imagePlaceholder: "/industries/hero/nonprofit-hero.png", // Existing, can be updated with a new query if desired
    imageAlt: "AI empowering a nonprofit organization's mission",
  },
  challenges: {
    headline: "Navigating the Unique Landscape of Nonprofit Operations",
    items: [
      {
        icon: HandCoins,
        title: "Securing Sustainable Funding",
        description:
          "Facing intense competition for grants and donations, requiring innovative fundraising strategies and donor retention.",
      },
      {
        icon: Users,
        title: "Maximizing Limited Resources",
        description:
          "Operating with tight budgets and small teams, necessitating extreme efficiency and impactful resource allocation.",
      },
      {
        icon: BarChart3,
        title: "Demonstrating Tangible Impact",
        description:
          "The critical need to measure, report, and communicate program outcomes effectively to stakeholders and funders.",
      },
      {
        icon: Megaphone,
        title: "Effective Volunteer & Community Engagement",
        description:
          "Recruiting, managing, and retaining volunteers while fostering strong community connections and awareness.",
      },
    ],
  },
  solutions: {
    headline: "Intelligent Automation to Elevate Your Nonprofit's Mission",
    items: [
      {
        icon: HeartHandshake,
        useCaseTitle: "AI-Powered Donor Relationship Management",
        benefitDescription:
          "Automate personalized donor communication, segment audiences for targeted appeals, and predict giving patterns to enhance fundraising efforts.",
      },
      {
        icon: FileText,
        useCaseTitle: "Intelligent Grant Proposal Assistant",
        benefitDescription:
          "Leverage AI to identify relevant grant opportunities, assist in drafting compelling narratives, and manage application deadlines efficiently.",
      },
      {
        icon: Presentation,
        useCaseTitle: "Automated Impact Reporting & Analytics",
        benefitDescription:
          "Collect and analyze program data to generate insightful reports, visualize impact metrics, and streamline reporting to funders and boards.",
      },
      {
        icon: CalendarDays,
        useCaseTitle: "Streamlined Volunteer Coordination & Management",
        benefitDescription:
          "Automate volunteer onboarding, scheduling, communication, and task assignments to optimize your volunteer program's effectiveness.",
      },
      {
        icon: Share2,
        useCaseTitle: "AI-Enhanced Advocacy & Awareness Campaigns",
        benefitDescription:
          "Optimize social media outreach, identify key influencers, and automate content dissemination to amplify your cause and engage a wider audience.",
      },
      {
        icon: DatabaseZap,
        useCaseTitle: "Efficient Program Data Management & Insights",
        benefitDescription:
          "Centralize and analyze program data to identify trends, measure outcomes more effectively, and make data-driven decisions for future initiatives.",
      },
    ],
  },
  relevantAgents: {
    headline: "Your Dedicated AI Team for Nonprofit Success",
    items: [
      {
        icon: MailCheck,
        name: "Donor Engagement Agent",
        description:
          "Automates personalized outreach and follow-ups to nurture donor relationships and boost retention.",
        link: "/solutions/appointment-setter-agent", // Example link, update as needed
      },
      {
        icon: Search,
        name: "Grant Discovery Agent",
        description: "Scans databases and online resources to find relevant grant opportunities matching your mission.",
        link: "/solutions/lead-generation-agent", // Example link
      },
      {
        icon: LineChart,
        name: "Impact Reporting Agent",
        description:
          "Collects program data and generates customizable reports to showcase your organization's achievements.",
        link: "/solutions/seo-reputation-agent", // Example link
      },
      {
        icon: UserCog,
        name: "Volunteer Management Agent",
        description: "Assists with volunteer scheduling, communication, and task assignments to streamline operations.",
        link: "/solutions/customer-support-agent", // Example link
      },
      {
        icon: Palette,
        name: "Content & Campaign Agent",
        description: "Helps create and schedule social media content, newsletters, and awareness campaign materials.",
        link: "/solutions/social-media-manager-agent",
      },
    ],
  },
  keyOutcomes: {
    headline: "Achieving Greater Impact and Sustainability",
    items: [
      {
        icon: TrendingUp,
        title: "Increased Fundraising Efficiency",
        description: "Boost donation revenue and grant acquisition rates through targeted, AI-driven strategies.",
      },
      {
        icon: Goal,
        title: "Enhanced Program Effectiveness",
        description:
          "Optimize resource allocation and program delivery based on data-driven insights for better outcomes.",
      },
      {
        icon: Users,
        title: "Improved Stakeholder Engagement",
        description:
          "Strengthen relationships with donors, volunteers, and beneficiaries through personalized communication.",
      },
      {
        icon: Settings,
        title: "Streamlined Operational Processes",
        description: "Reduce administrative burden and free up staff time to focus on core mission activities.",
      },
      {
        icon: ShieldCheck,
        title: "Greater Transparency & Accountability",
        description:
          "Clearly demonstrate impact and responsible stewardship of resources to build trust and credibility.",
      },
      {
        icon: Sparkles,
        title: "Expanded Mission Reach & Awareness",
        description: "Amplify your message and connect with a broader audience to grow your community of support.",
      },
    ],
  },
  cta: {
    headline: "Ready to Transform Your Nonprofit with AI?",
    buttonText: "Discuss Your Mission",
    buttonLink: "/contact",
  },
}

export default function NonprofitPage() {
  return <IndustryPageTemplate {...nonprofitPageData} />
}
