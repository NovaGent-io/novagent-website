"use client"


import { IndustryPageTemplate } from "@/components/industry-landing-template"
import {
  GraduationCap,
  Users,
  Clock,
  Calendar,
  MessageSquare,
  BookOpen,
  FileText,
  BarChart,
  Target,
  Star,
  Share2,
  Zap,
  Lightbulb,
  School,
} from "lucide-react"

export default function EducationPage() {
  const educationPageData = {
    industryName: "Education",
    hero: {
      headline: "Transform Learning Experiences with Intelligent Automation",
      subHeadline:
        "From K-12 schools to universities and online learning platforms, NovaGent's AI agents streamline administrative tasks, enhance student engagement, and provide personalized support—allowing educators to focus on what matters most: teaching and mentoring.",
      imagePlaceholder: "/industries/hero/education-hero.png",
      imageAlt: "Modern educational environment enhanced with AI technology",
    },
    challenges: {
      headline: "Navigating Today's Educational Landscape",
      items: [
        {
          icon: Clock,
          title: "Administrative Burden",
          description:
            "Educators and staff spend up to 30% of their time on repetitive administrative tasks rather than focusing on teaching and student development.",
        },
        {
          icon: Users,
          title: "Scaling Personalized Support",
          description:
            "Growing student populations and diverse learning needs make it increasingly difficult to provide individualized attention and support.",
        },
        {
          icon: Calendar,
          title: "Complex Scheduling & Coordination",
          description:
            "Managing class schedules, room assignments, and academic calendars creates logistical challenges that impact the entire educational ecosystem.",
        },
        {
          icon: MessageSquare,
          title: "Communication Overload",
          description:
            "Maintaining effective communication with students, parents, and staff across multiple channels becomes increasingly complex as institutions grow.",
        },
      ],
    },
    solutions: {
      headline: "How NovaGent Transforms Educational Institutions",
      items: [
        {
          icon: GraduationCap,
          useCaseTitle: "AI-Powered Admissions & Enrollment",
          benefitDescription:
            "Streamline the entire admissions process with AI agents that answer prospective student questions, guide application completion, and provide personalized follow-up—increasing conversion rates while reducing administrative workload.",
        },
        {
          icon: BookOpen,
          useCaseTitle: "Intelligent Learning Assistant",
          benefitDescription:
            "Deploy AI tutors that provide 24/7 homework help, answer subject-specific questions, and adapt explanations based on individual learning styles and progress—extending educational support beyond classroom hours.",
        },
        {
          icon: Calendar,
          useCaseTitle: "Automated Scheduling & Coordination",
          benefitDescription:
            "Implement intelligent scheduling that optimizes class timetables, manages room assignments, coordinates faculty availability, and helps students navigate complex registration processes.",
        },
        {
          icon: MessageSquare,
          useCaseTitle: "Multi-Channel Communication Hub",
          benefitDescription:
            "Create a centralized system that manages communications with students and parents across email, text, and portals—sending timely reminders about assignments, events, and deadlines while answering common questions.",
        },
        {
          icon: FileText,
          useCaseTitle: "Administrative Workflow Automation",
          benefitDescription:
            "Automate routine paperwork, form processing, and data entry tasks—from attendance tracking to grade recording—freeing staff to focus on higher-value activities that directly impact student success.",
        },
        {
          icon: BarChart,
          useCaseTitle: "Student Success Analytics",
          benefitDescription:
            "Leverage AI to identify at-risk students early, recommend intervention strategies, and track the effectiveness of support programs through comprehensive data analysis and pattern recognition.",
        },
      ],
    },
    relevantAgents: {
      headline: "Meet Your AI Team for Educational Excellence",
      items: [
        {
          icon: MessageSquare,
          name: "Customer Support Agent",
          description:
            "Handles inquiries from prospective students, current students, and parents across all channels.",
          link: "/solutions/customer-support-agent",
        },
        {
          icon: Target,
          name: "Lead Generation Agent",
          description: "Identifies and nurtures prospective students through personalized communication sequences.",
          link: "/solutions/lead-generation-agent",
        },
        {
          icon: Calendar,
          name: "Appointment Setter Agent",
          description: "Manages campus tours, advisor meetings, and parent-teacher conferences efficiently.",
          link: "/solutions/appointment-setter-agent",
        },
        {
          icon: Share2,
          name: "Social Media Manager Agent",
          description: "Creates and distributes engaging content about campus events, achievements, and programs.",
          link: "/solutions/social-media-manager-agent",
        },
        {
          icon: Star,
          name: "SEO + Reputation Agent",
          description: "Enhances your institution's online presence and manages reviews across educational platforms.",
          link: "/solutions/seo-reputation-agent",
        },
      ],
    },
    keyOutcomes: {
      headline: "Tangible Results for Your Educational Institution",
      items: [
        {
          icon: Zap,
          title: "60% Faster Admissions Processing",
          description:
            "Streamline application review and communication, reducing decision time and improving yield rates.",
        },
        {
          icon: Users,
          title: "40% Improvement in Student Engagement",
          description:
            "Provide personalized support and timely communication that keeps students connected and motivated.",
        },
        {
          icon: Clock,
          title: "25+ Hours/Week Saved on Administrative Tasks",
          description: "Automate routine processes, allowing staff to focus on meaningful student interactions.",
        },
        {
          icon: Calendar,
          title: "50% Reduction in Scheduling Conflicts",
          description: "Optimize timetables and resource allocation with intelligent scheduling algorithms.",
        },
        {
          icon: School,
          title: "30% Increase in Enrollment Conversion",
          description: "Guide prospective students through the application process with personalized assistance.",
        },
        {
          icon: Lightbulb,
          title: "45% More Effective Early Intervention",
          description: "Identify and support at-risk students before academic challenges become critical.",
        },
      ],
    },
    cta: {
      headline: "Ready to Transform Your Educational Institution?",
      buttonText: "Book Your Education AI Consultation",
      buttonLink: "/contact?industry=education",
    },
  }

  return <IndustryPageTemplate {...educationPageData} />
}
