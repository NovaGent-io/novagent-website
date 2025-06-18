"use client"

import { IndustryPageTemplate, type IndustryPageTemplateProps } from "@/components/industry-landing-template"
import {
  Clapperboard,
  Users,
  TrendingUp,
  ShieldCheck,
  Lightbulb,
  Settings,
  Target,
  Zap,
  Film,
  Radio,
  Newspaper,
  BarChart2,
  Share2,
  Bot,
  BrainCircuit,
  Search,
  LineChart,
  Sparkles,
} from "lucide-react"

const mediaPageData: IndustryPageTemplateProps = {
  industryName: "Media & Entertainment",
  hero: {
    headline: "Create the Future of Content with AI",
    subHeadline:
      "From hyper-personalized recommendations to automated production workflows, NovaGent empowers media companies to captivate audiences and unlock new revenue streams.",
    imagePlaceholder: "/industries/hero/media-hero.png",
    imageAlt: "Abstract visualization of digital media streams and AI data analysis",
  },
  challenges: {
    headline: "Navigating a Fragmented Media Landscape",
    items: [
      {
        icon: Users,
        title: "Audience Fragmentation",
        description:
          "Engaging viewers across countless platforms and devices while battling for their limited attention.",
      },
      {
        icon: Clapperboard,
        title: "Content Overload & Discovery",
        description:
          "Struggling to make your content stand out in a sea of competition and ensuring it reaches the right audience.",
      },
      {
        icon: TrendingUp,
        title: "Monetization Pressure",
        description:
          "Maximizing ad revenue, subscription value, and other income streams in a rapidly changing market.",
      },
      {
        icon: ShieldCheck,
        title: "Digital Rights & Piracy",
        description:
          "Protecting intellectual property and ensuring proper content licensing and distribution across the web.",
      },
    ],
  },
  solutions: {
    headline: "Your AI-Powered Content & Audience Engine",
    items: [
      {
        icon: Film,
        useCaseTitle: "AI-Assisted Video Production",
        benefitDescription:
          "Automate rough cuts, generate highlights, transcribe audio, and tag content with rich metadata, slashing production time and costs.",
      },
      {
        icon: Radio,
        useCaseTitle: "Hyper-Personalized Content Curation",
        benefitDescription:
          "Develop sophisticated recommendation engines that analyze user behavior to deliver highly relevant content, boosting engagement and retention.",
      },
      {
        icon: Newspaper,
        useCaseTitle: "Dynamic Ad Insertion & Optimization",
        benefitDescription:
          "Intelligently place personalized ads in real-time within streaming content based on viewer data, maximizing ad revenue and relevance.",
      },
      {
        icon: BarChart2,
        useCaseTitle: "Real-Time Audience Sentiment Analysis",
        benefitDescription:
          "Monitor social media and news to gauge audience reactions to content, talent, and campaigns, enabling data-driven creative decisions.",
      },
      {
        icon: Share2,
        useCaseTitle: "Automated Social Media Management",
        benefitDescription:
          "Identify trending topics, curate relevant content, and automatically schedule posts across platforms to grow your online presence.",
      },
      {
        icon: ShieldCheck,
        useCaseTitle: "Intelligent Digital Rights Management",
        benefitDescription:
          "Use AI to track content usage across the web, identify unauthorized distribution, and manage complex licensing agreements automatically.",
      },
    ],
  },
  relevantAgents: {
    headline: "Meet Your AI Media Team",
    items: [
      {
        icon: Bot,
        name: "Social Media Manager Agent",
        description: "Your AI expert for content curation, scheduling, and audience engagement.",
        link: "/solutions/social-media-manager-agent",
      },
      {
        icon: BrainCircuit,
        name: "Ad Campaign Manager Agent",
        description: "Optimizes ad spend and targeting across digital platforms for maximum ROAS.",
        link: "/solutions/ad-campaign-manager-agent",
      },
      {
        icon: Search,
        name: "SEO + Reputation Agent",
        description: "Enhances content visibility and manages your brand's online reputation.",
        link: "/solutions/seo-reputation-agent",
      },
      {
        icon: Users,
        name: "Customer Support Agent",
        description: "Manages subscriber inquiries, billing questions, and support requests 24/7.",
        link: "/solutions/customer-support-agent",
      },
      {
        icon: Sparkles,
        name: "Custom Agentic Systems",
        description: "Bespoke solutions for unique challenges like content moderation or royalty tracking.",
        link: "/solutions/custom-agentic-systems",
      },
    ],
  },
  keyOutcomes: {
    headline: "Tangible Results for Your Media Business",
    items: [
      {
        icon: TrendingUp,
        title: "Increased Audience Engagement",
        description: "Boost watch time, click-through rates, and session duration with personalized content.",
      },
      {
        icon: Target,
        title: "Higher Ad Revenue",
        description: "Maximize CPMs and fill rates with dynamically inserted, highly targeted advertising.",
      },
      {
        icon: Zap,
        title: "Reduced Production Costs",
        description: "Cut down on manual labor and time spent on repetitive tasks in the content creation pipeline.",
      },
      {
        icon: Lightbulb,
        title: "Deeper Audience Insights",
        description: "Gain a comprehensive understanding of viewer preferences, behavior, and sentiment.",
      },
      {
        icon: Settings,
        title: "Streamlined Operations",
        description: "Automate workflows for content tagging, rights management, and social media distribution.",
      },
      {
        icon: LineChart,
        title: "Improved Subscriber Retention",
        description: "Reduce churn by delivering a superior, personalized user experience that builds loyalty.",
      },
    ],
  },
  cta: {
    headline: "Ready to Redefine Entertainment?",
    buttonText: "Book a Media Consultation",
    buttonLink: "/contact",
  },
}

export default function MediaPage() {
  return <IndustryPageTemplate {...mediaPageData} />
}
