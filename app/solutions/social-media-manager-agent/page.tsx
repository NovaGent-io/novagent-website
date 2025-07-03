import React from "react"
import type { FunctionComponent } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Share2,
  Users,
  CalendarDays,
  MessageSquare,
  BarChartBig,
  Lightbulb,
  Cpu,
  Settings2,
  Eye,
  ChevronRight,
  ThumbsUp,
  Clock,
  Zap,
  Sparkles,
  FileText,
  Link2,
  PieChart,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// Placeholder for a more complex animated background component
const AbstractSocialVisual: FunctionComponent<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-gradient-to-br from-sky-900 via-indigo-900 to-purple-900 z-0",
        className,
      )}
    >
      <Share2 className="absolute -left-16 -top-10 h-80 w-80 text-cyan-500/5 opacity-50 animate-pulse" />
      <Users className="absolute -right-14 bottom-1/3 h-72 w-72 text-fuchsia-500/5 opacity-50 animate-pulse animation-delay-2000" />
      <ThumbsUp className="absolute left-1/3 top-1/2 h-60 w-60 text-purple-500/5 opacity-30 animate-pulse animation-delay-4000" />
      {children}
    </div>
  )
}

const socialPainPoints = [
  {
    icon: <Clock className="h-10 w-10 text-rose-400" />,
    text: "Endless hours consumed creating unique content and adapting it for different social platforms.",
    bgColor: "bg-rose-500/10 dark:bg-rose-900/20",
  },
  {
    icon: <AlertCircle className="h-10 w-10 text-amber-400" />,
    text: "Inconsistent posting schedules and a brand voice that struggles to cut through the noise.",
    bgColor: "bg-amber-500/10 dark:bg-amber-900/20",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-sky-400" />,
    text: "Difficulty effectively monitoring all brand mentions, comments, and messages in a timely, engaging manner.",
    bgColor: "bg-sky-500/10 dark:bg-sky-900/20",
  },
  {
    icon: <HelpCircle className="h-10 w-10 text-fuchsia-400" />,
    text: "Uncertainty about which content truly resonates or how to measure tangible ROI from social efforts.",
    bgColor: "bg-fuchsia-500/10 dark:bg-fuchsia-900/20",
  },
]

const socialCoreCapabilities = [
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI-Powered Content Curation & Adaptation",
    description:
      "Intelligently curates relevant third-party content and adapts your core content (blogs, articles) into engaging, platform-specific posts with image/video concepts and hashtag recommendations.",
    color: "text-cyan-400",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Platform-Specific Post Generation Assistance",
    description:
      "Assists in generating new, topical social media content tailored to the nuances of each target platform.",
    color: "text-fuchsia-400",
  },
  {
    icon: <CalendarDays className="h-8 w-8" />,
    title: "Automated Cross-Platform Scheduling",
    description: "Optimizes and automates posting schedules across key social channels for maximum visibility.",
    color: "text-blue-400",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Audience Engagement Monitoring & Flagging",
    description:
      "Tracks mentions, comments, DMs, flagging important interactions for human review or basic auto-replies.",
    color: "text-purple-400",
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Social Listening & Sentiment Analysis (Basic)",
    description: "Monitors brand sentiment and key topics, identifying emerging discussions or trends.",
    color: "text-emerald-400",
  },
  {
    icon: <BarChartBig className="h-8 w-8" />,
    title: "Comprehensive Performance Analytics",
    description: "Provides regular reports on key metrics (reach, engagement, growth, top content, sentiment).",
    color: "text-sky-400",
  },
  {
    icon: <Link2 className="h-8 w-8" />,
    title: "Integration with Content Engine & Tools",
    description: "Connects with your content repositories, brand assets, or planning tools to streamline workflows.",
    color: "text-amber-400",
  },
]

const socialBenefits = [
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Skyrocket Brand Awareness & Reach",
    description:
      "Dramatically expand online visibility and connect with new audiences through consistent, high-quality social activity.",
    stat: "+X% Reach",
    color: "text-emerald-400",
    bgColor: "bg-emerald-900/30",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Deepen Audience Engagement & Loyalty",
    description:
      "Foster a more active, interactive, and loyal online community through timely, relevant, and authentic engagement.",
    stat: "+Y% Engagement",
    color: "text-blue-400",
    bgColor: "bg-blue-900/30",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Reclaim Significant Marketing Team Hours",
    description:
      "Free your team from daily social media grind for higher-level strategy, campaigns, and creative innovation.",
    stat: "Z Hours Saved",
    color: "text-fuchsia-400",
    bgColor: "bg-fuchsia-900/30",
  },
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Develop a Data-Informed Content Strategy",
    description:
      "Make smarter content decisions based on performance analytics, audience sentiment, and emerging trends.",
    stat: "Smarter Content",
    color: "text-purple-400",
    bgColor: "bg-purple-900/30",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Drive Measurable Website Traffic & Conversions",
    description:
      "Convert social engagement into tangible website visits, leads, and sales via strategic content and CTAs.",
    stat: "More Conversions",
    color: "text-amber-400",
    bgColor: "bg-amber-900/30",
  },
]

const socialProcessSteps = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Social Strategy & Content Pillar Definition",
    description: "Collaborative definition of objectives, audience personas, content themes, and brand voice.",
    color: "text-cyan-400",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI Content Adaptation & Calendar Planning",
    description: "Agent processes core content, adapts/generates posts, populates calendar for review/auto-post.",
    color: "text-fuchsia-400",
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: "Automated Publishing & Monitoring",
    description: "Posts published at optimal times; agent monitors engagement, mentions, and sentiment.",
    color: "text-blue-400",
  },
  {
    icon: <PieChart className="h-8 w-8" />,
    title: "Performance Analysis & Insight Generation",
    description: "NovaGent analyzes data, provides insightful reports and strategic recommendations.",
    color: "text-purple-400",
  },
  {
    icon: <Settings2 className="h-8 w-8" />,
    title: "Ongoing Optimization & Adaptive Strategy",
    description: "Strategy dynamically refined based on metrics, feedback, and trends, managed by NovaGent.",
    color: "text-emerald-400",
  },
]

const socialNovaGentAdvantage = [
  {
    icon: <Lightbulb className="h-7 w-7 text-blue-400" />,
    title: "Tailored Social Media Strategy Development",
    description: "Custom strategy and platform selection guidance aligned with your business goals.",
  },
  {
    icon: <FileText className="h-7 w-7 text-fuchsia-400" />,
    title: "Content Calendar Planning & Brand Voice Checks",
    description: "Oversight of content curation and ensuring consistent brand voice.",
  },
  {
    icon: <Cpu className="h-7 w-7 text-purple-400" />,
    title: "AI Configuration for Content Adaptation",
    description: "Expert setup for platform-specific content generation and adaptation support.",
  },
  {
    icon: <Eye className="h-7 w-7 text-emerald-400" />,
    title: "Proactive Engagement & Sentiment Review",
    description: "Monitoring engagement, sentiment analysis review, and escalation protocols.",
  },
  {
    icon: <BarChartBig className="h-7 w-7 text-cyan-400" />,
    title: "Detailed Analytics & Actionable Insights",
    description: "Comprehensive performance reporting and competitive benchmarking.",
  },
  {
    icon: <Users className="h-7 w-7 text-sky-400" />,
    title: "Regular Strategy Reviews & Trend Adaptation",
    description: "Adapting to social media trends, algorithm changes, and your evolving business goals.",
  },
]

const faqItems = [
  {
    question: "Which social media platforms can the agent manage?",
    answer:
      "The NovaGent Social Media Manager Agent is designed to integrate with major platforms like LinkedIn, X (formerly Twitter), Facebook, and Instagram. We work with you to determine the most impactful channels for your specific audience and goals. Support for additional platforms can be discussed based on your needs.",
  },
  {
    question: "How exactly does the AI generate or adapt content? Can I provide all my own content?",
    answer:
      "Absolutely, you can provide all your core content (blog posts, articles, case studies, whitepapers). The AI then intelligently adapts this content into various formats suitable for different social platforms, suggesting headlines, summaries, image/video concepts, and relevant hashtags. It can also assist in generating new, topical posts based on approved themes and your brand voice. All AI-generated or adapted content is typically reviewed and approved by you or our team before publishing, ensuring brand alignment.",
  },
  {
    question: "Is there an approval process for posts before they are published?",
    answer:
      "Yes, we typically implement an approval workflow. The AI can populate a content calendar with suggested posts, which you or your team (or our NovaGent specialists) can review, edit, and approve before they are scheduled for publishing. We can also configure auto-posting for certain types of content if desired, once a high level of trust and consistency is established.",
  },
  {
    question: "How does the agent handle incoming comments, messages, and brand mentions?",
    answer:
      "The agent actively monitors your social channels for brand mentions, comments on your posts, and direct messages. It can be configured to provide basic automated responses to common questions (based on your FAQs). More complex interactions, negative sentiment, or urgent queries are flagged and routed to your designated human team members (or NovaGent specialists) for timely and personalized responses.",
  },
  {
    question: "What kind of analytics and reporting will I receive on my social media performance?",
    answer:
      "You'll receive regular, comprehensive reports detailing key social media metrics. This includes reach, impressions, engagement rates (likes, comments, shares), follower growth, click-through rates (if applicable), top-performing content, and basic sentiment analysis. These insights help measure ROI and guide ongoing strategy refinement.",
  },
  {
    question: "How do you ensure the generated content accurately reflects my brand's unique voice and style?",
    answer:
      "This is a critical part of our onboarding and ongoing management. We conduct a thorough discovery process to understand your brand's voice, tone, style guidelines, and key messaging. This information is used to configure and 'train' the AI. Furthermore, all content typically goes through a human review (either by your team or ours) to ensure it aligns perfectly with your brand identity before it goes live.",
  },
  {
    question: "Can the agent help with paid social media campaigns too?",
    answer:
      "The Social Media Manager Agent primarily focuses on organic social media management (content creation, scheduling, engagement, organic growth). For paid social media advertising campaigns (e.g., setting up ad sets, managing bids, optimizing ad spend), we offer our dedicated 'Ad Campaign Manager Agent', which is specifically designed for those tasks. The two agents can, however, work synergistically, with insights from organic performance informing paid strategies.",
  },
]

export default function SocialMediaManagerAgentPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* 1. Page Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-100 via-indigo-50 to-purple-100 dark:from-sky-900 dark:via-indigo-950 dark:to-purple-950">
        <AbstractSocialVisual />
        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                Elevate Your Brand
              </span>
              with AI-Powered Social Media Management.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl md:text-2xl">
              NovaGent's Social Media Manager Agent intelligently crafts platform-specific posts from your core content
              engine, schedules them for optimal impact, actively monitors engagement and sentiment, and feeds
              actionable insights back to refine your strategy – all fully managed to build a powerful and consistent
              social presence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 h-12 px-8 text-base font-medium"
              >
                <Link href="/contact">
                  Get Started with Social Media
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pain Points Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Is Your Social Media a Time Sink Instead of a Growth Driver?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              The daily demands of social media can easily overwhelm even the most dedicated teams.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {socialPainPoints.map((point, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${point.bgColor} dark:border dark:border-slate-700/50 flex flex-col items-center text-center`}
              >
                <div className="flex justify-center mb-4">{point.icon}</div>
                <p className="text-slate-700 dark:text-slate-200 font-medium">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Solution Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Your Always-On AI Specialist for Strategic Social Media Engagement & Growth.
              </h2>
              <p className="mt-6 text-lg text-slate-300">
                Our AI Social Media Manager acts as your dedicated content strategist, using AI to help craft
                compelling, platform-specific posts. This entire process is fully managed by our experts to ensure a
                consistent and data-informed social media presence.
              </p>
              <p className="mt-4 text-lg text-cyan-400 font-semibold">
                What truly sets it apart, however, is its autonomous content strategy. The agent intelligently recycles
                your top-performing content for maximum reach and proactively scans for trending industry topics,
                ensuring your brand is always timely and part of the conversation.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-fuchsia-500 opacity-10 blur-2xl"></div>
                <Cpu className="absolute inset-0 m-auto h-2/5 w-2/5 opacity-40" />
                <div className="absolute top-1/4 left-1/4 flex gap-2">
                  <Linkedin className="h-10 w-10 text-sky-300 opacity-70 animate-pulse" />
                  <Twitter className="h-10 w-10 text-blue-300 opacity-70 animate-pulse animation-delay-500" />
                </div>
                <div className="absolute bottom-1/4 right-1/4 flex gap-2">
                  <Facebook className="h-10 w-10 text-indigo-300 opacity-70 animate-pulse animation-delay-1000" />
                  <Instagram className="h-10 w-10 text-fuchsia-300 opacity-70 animate-pulse animation-delay-1500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities Section */}
      <section id="social-features" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Powering Your Social Presence: Features That Build Brands & Engage Communities.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Our AI Social Media Manager is equipped with intelligent features for seamless and impactful social
              engagement.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
            {socialCoreCapabilities.map((capability) => (
              <div
                key={capability.title}
                className="group rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/60 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-purple-500/70 dark:hover:border-purple-400/70 hover:-translate-y-1.5 flex flex-col"
              >
                <div className={`mb-5 flex items-center gap-3 ${capability.color}`}>
                  {capability.icon}
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{capability.title}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 flex-grow">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Impact: Tangible Benefits Section */}
      <section className="py-16 sm:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Transform Your Social Media into a Powerful Engine for Brand Growth & Customer Connection.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
            {socialBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className={`flex flex-col items-center text-center p-8 rounded-2xl shadow-xl ${benefit.bgColor} border border-transparent hover:border-slate-700 dark:hover:border-slate-600 transition-all duration-300`}
              >
                <div
                  className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full ${benefit.color} bg-slate-800/50 dark:bg-slate-700/50`}
                >
                  {benefit.icon}
                </div>
                <h3 className={`text-2xl font-semibold mb-2 ${benefit.color}`}>{benefit.stat}</h3>
                <h4 className="text-lg font-medium mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-300 dark:text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How It Works Section */}
      <section className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Your Automated Journey to Social Media Excellence, Expertly Guided.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              A streamlined and strategic process for impactful social media management.
            </p>
          </div>
          <div className="mt-16">
            <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-5 md:gap-x-6">
              {socialProcessSteps.map((step, index) => (
                <div key={step.title} className="relative flex flex-col items-center text-center px-2">
                  {index < socialProcessSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 -translate-y-1/2">
                      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1">
                        <path
                          d="M0,0.5 L100,0.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="5 5"
                          className="text-slate-300 dark:text-slate-700"
                        />
                      </svg>
                    </div>
                  )}
                  {index > 0 && (
                    <div className="md:hidden absolute bottom-full left-1/2 w-0.5 h-10 -translate-x-1/2 mb-2">
                      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1 100">
                        <path
                          d="M0.5,0 L0.5,100"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="5 5"
                          className="text-slate-300 dark:text-slate-700"
                        />
                      </svg>
                    </div>
                  )}
                  <div
                    className={`relative z-10 mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full border-4 ${step.color.replace("text-", "border-")} bg-white dark:bg-slate-800 shadow-lg`}
                  >
                    {React.cloneElement(step.icon, { className: `h-9 w-9 ${step.color}` })}
                  </div>
                  <h3 className={`text-lg font-semibold mb-1 ${step.color}`}>{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. The NovaGent Advantage Section */}
      <section className="py-16 sm:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Beyond Scheduling Tools: Expertly Managed Social Media, Driven by AI & Human Strategists.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              The NovaGent Social Media Manager Agent is a comprehensive service, blending AI efficiency with human
              expertise. Our experts provide:
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
            {socialNovaGentAdvantage.map((advantage) => (
              <div
                key={advantage.title}
                className="flex flex-col items-start gap-4 rounded-xl bg-slate-800/50 p-6 border border-slate-700/60 hover:border-purple-500/50 transition-colors duration-300"
              >
                <div className="flex-shrink-0">{advantage.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-slate-400 text-sm">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Your Social Media Manager Agent Questions, Answered.
            </h2>
          </div>
          <div className="mt-12 mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-slate-200 dark:border-slate-700">
                  <AccordionTrigger className="text-left text-lg font-medium text-slate-800 dark:text-slate-100 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-slate-600 dark:text-slate-300 pt-2 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Transform Your Social Media From a Daily Chore into a Powerful Channel for Brand Growth & Engagement.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Discover how NovaGent's AI Social Media Manager can save you time, elevate your content, and build a more
            connected audience.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="h-14 px-10 text-lg font-semibold bg-white text-purple-700 shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Book a Demo of the Social Media Manager Agent</Link>
            </Button>
            <Button variant="link" size="lg" asChild className="text-base font-medium text-slate-200 hover:text-white">
              <Link href="/pricing">View Our Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
