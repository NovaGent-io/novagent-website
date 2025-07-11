"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search,
  Calendar,
  Phone,
  Shield,
  BarChart3,
  Briefcase,
  UserPlus,
  Scale,
  HeadphonesIcon,
  Brain,
  Users,
  FileText,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Zap,
  TrendingUp,
  Clock,
  Award,
  CheckCircle,
  Star
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Define the skills data with enhanced properties
const skillsData = [
  {
    category: "Sales & Growth",
    color: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-500/10 to-blue-600/10",
    darkBgGradient: "dark:from-cyan-500/20 dark:to-blue-600/20",
    items: [
      { 
        name: "Prospect Hunter", 
        desc: "Intelligent lead generation that fills your pipeline",
        icon: Search,
        stats: "85% qualification rate",
        features: ["AI-powered targeting", "Multi-channel outreach", "Lead enrichment"],
        href: "/capabilities/prospect-hunter"
      },
      { 
        name: "Schedule Coordinator", 
        desc: "Books qualified meetings directly into calendars",
        icon: Calendar,
        stats: "3x booking speed",
        features: ["Smart scheduling", "Timezone handling", "Automated reminders"],
        href: "/capabilities/schedule-coordinator"
      },
      { 
        name: "Smart Outreach Dialer", 
        desc: "AI-powered calls with real-time transcription",
        icon: Phone,
        stats: "40% connection rate",
        features: ["Voice AI", "Live transcription", "Call analytics"],
        href: "/capabilities/smart-outreach-dialer"
      },
      { 
        name: "Visibility & Trust Manager", 
        desc: "SEO optimization and reputation management",
        icon: Shield,
        stats: "2x online visibility",
        features: ["Review automation", "SEO optimization", "Brand monitoring"],
        href: "/capabilities/visibility-trust-manager"
      }
    ]
  },
  {
    category: "Operations & Management",
    color: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-600/10",
    darkBgGradient: "dark:from-purple-500/20 dark:to-pink-600/20",
    items: [
      { 
        name: "Workflow Navigator", 
        desc: "Intelligent project management and task coordination",
        icon: BarChart3,
        stats: "60% faster delivery",
        features: ["Task automation", "Progress tracking", "Team coordination"],
        href: "/capabilities/workflow-navigator"
      },
      { 
        name: "Finance Flow Manager