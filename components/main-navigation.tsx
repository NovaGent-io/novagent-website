"use client"

import type React from "react"
import React from "react"
import { useState, useEffect, forwardRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Menu,
  X,
  ChevronDown,
  Lightbulb,
  Users,
  Target,
  PhoneCall,
  MessageSquare,
  Search,
  BarChart2,
  Share2,
  BookOpen,
  Users2,
  Map,
  ShieldCheck,
  Car,
  Radio,
  Home,
  GraduationCap,
  Zap,
  Building2,
  CreditCard,
  Heart,
  Factory,
  Tv,
  HandHeart,
  Building,
  Newspaper,
  Sparkles,
  Grid3X3,
  UserPlus,
  Briefcase,
  ShoppingCart,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from '@/components/theme-toggle'

const getNavItemClasses = (
  currentPathname: string,
  linkHref: string,
  isLinkScrolled: boolean,
  isTrigger = false,
  isLinkEnterprise = false,
) => {
  const isActive =
    currentPathname === linkHref ||
    (linkHref !== "/" && currentPathname.startsWith(linkHref + (linkHref.endsWith("/") ? "" : "/")))

  return cn(
    "relative text-sm font-medium transition-colors duration-300 ease-in-out group px-3 py-2",
    isLinkEnterprise
      ? "text-pink-500 hover:text-pink-400 font-semibold"
      : isLinkScrolled || currentPathname !== "/"
      ? "text-slate-700 dark:text-slate-300 hover:text-fuchsia-500 dark:hover:text-fuchsia-400"
      : "text-slate-200 hover:text-white",
    isActive &&
      !isLinkEnterprise &&
      (isLinkScrolled || currentPathname !== "/" ? "text-fuchsia-600 dark:text-fuchsia-400" : "text-white"),
    isActive && isLinkEnterprise && "text-pink-600 dark:text-pink-400",
    isTrigger && navigationMenuTriggerStyle(),
    isTrigger && "bg-transparent",
    isTrigger &&
      (isLinkScrolled || currentPathname !== "/" ? "hover:bg-slate-100 dark:hover:bg-slate-800" : "hover:bg-white/10"),
    isTrigger &&
      !isLinkEnterprise &&
      (isLinkScrolled || currentPathname !== "/" ? "!text-slate-700 dark:!text-slate-300" : "!text-slate-200"),
  )
}

const getActiveLinkIndicatorClassName = (
  currentPathname: string,
  linkHref: string,
  isLinkScrolled: boolean,
  isLinkEnterprise = false,
) => {
  const isActive =
    currentPathname === linkHref ||
    (linkHref !== "/" && currentPathname.startsWith(linkHref + (linkHref.endsWith("/") ? "" : "/")))
  if (!isActive) return "scale-x-0"

  return cn(
    "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-[calc(100%-1.5rem)] transition-transform duration-300 ease-in-out group-hover:scale-x-100",
    isActive ? "scale-x-100" : "scale-x-0",
    isLinkEnterprise ? "bg-pink-500" : isLinkScrolled || currentPathname !== "/" ? "bg-fuchsia-500" : "bg-white",
  )
}

const solutionsLinks: SolutionLink[] = []

// Define the 14 Agent Skills for the new dropdown
const novaSuiteSkills = [
  {
    id: "prospect-hunter",
    name: "Prospect Hunter",
    category: "Sales & Growth",
    description: "AI-powered lead generation and qualification",
    icon: <Target className="h-5 w-5 text-blue-500" />,
    href: "/solutions/novasuite/prospect-hunter",
    available: true
  },
  {
    id: "schedule-coordinator", 
    name: "Schedule Coordinator",
    category: "Sales & Growth",
    description: "Automated appointment setting and calendar management",
    icon: <Users className="h-5 w-5 text-fuchsia-500" />,
    href: "/solutions/novasuite/schedule-coordinator",
    available: true
  },
  {
    id: "smart-outreach-dialer",
    name: "Smart Outreach Dialer", 
    category: "Sales & Growth",
    description: "AI-powered calling with transcription and follow-up",
    icon: <PhoneCall className="h-5 w-5 text-sky-500" />,
    href: "/solutions/novasuite/smart-outreach-dialer",
    available: true
  },
  {
    id: "support-concierge",
    name: "Support Concierge",
    category: "Support & Service", 
    description: "Autonomous customer support with intelligent escalation",
    icon: <MessageSquare className="h-5 w-5 text-emerald-500" />,
    href: "/solutions/novasuite/support-concierge",
    available: true
  },
  {
    id: "visibility-trust-manager",
    name: "Visibility & Trust Manager",
    category: "Marketing",
    description: "SEO optimization and reputation management", 
    icon: <Search className="h-5 w-5 text-amber-500" />,
    href: "/solutions/novasuite/visibility-trust-manager",
    available: true
  },
  {
    id: "talent-welcome-suite",
    name: "Talent Welcome Suite",
    category: "HR & Operations",
    description: "Automated employee onboarding and integration",
    icon: <UserPlus className="h-5 w-5 text-green-500" />,
    href: "/solutions/novasuite/talent-welcome-suite", 
    available: true
  },
  {
    id: "regulatory-risk-guard",
    name: "Regulatory Risk Guard",
    category: "HR & Operations",
    description: "Compliance monitoring and risk management",
    icon: <ShieldCheck className="h-5 w-5 text-red-500" />,
    href: "/solutions/novasuite/regulatory-risk-guard",
    available: true
  },
  {
    id: "talent-scout-engine", 
    name: "Talent Scout Engine",
    category: "HR & Operations",
    description: "End-to-end recruitment and candidate management",
    icon: <Briefcase className="h-5 w-5 text-indigo-500" />,
    href: "/solutions/novasuite/talent-scout-engine",
    available: true
  },
  {
    id: "insight-intelligence",
    name: "Insight Intelligence", 
    category: "Analytics & Intelligence",
    description: "Automated reporting and data analysis",
    icon: <BarChart2 className="h-5 w-5 text-purple-500" />,
    href: "/solutions/novasuite/insight-intelligence",
    available: true
  },
  {
    id: "workflow-navigator",
    name: "Workflow Navigator",
    category: "Operations", 
    description: "Project management and task coordination",
    icon: <Grid3X3 className="h-5 w-5 text-slate-500" />,
    href: "/solutions/novasuite/workflow-navigator",
    available: true
  },
  {
    id: "finance-flow-manager",
    name: "Finance Flow Manager",
    category: "Finance & Legal",
    description: "Transaction processing and financial operations", 
    icon: <CreditCard className="h-5 w-5 text-green-600" />,
    href: "/solutions/novasuite/finance-flow-manager",
    available: true
  },
  {
    id: "legal-logic-hub",
    name: "Legal Logic Hub",
    category: "Finance & Legal",
    description: "Contract drafting and legal document management",
    icon: <BookOpen className="h-5 w-5 text-blue-600" />,
    href: "/solutions/novasuite/legal-logic-hub", 
    available: true
  },
  {
    id: "property-intelligence-manager",
    name: "Property Intelligence Manager",
    category: "Industry Specific",
    description: "Real estate operations and MLS integration",
    icon: <Building className="h-5 w-5 text-orange-500" />,
    href: "/solutions/novasuite/property-intelligence-manager",
    available: true
  },
  {
    id: "commerceops-manager",
    name: "CommerceOps Manager", 
    category: "Industry Specific",
    description: "E-commerce inventory and pricing management",
    icon: <ShoppingCart className="h-5 w-5 text-pink-500" />,
    href: "/solutions/novasuite/commerceops-manager",
    available: true
  }
]

// Group skills by category for organized display
const skillsByCategory = novaSuiteSkills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = []
  }
  acc[skill.category].push(skill)
  return acc
}, {} as Record<string, typeof novaSuiteSkills>)

interface IndustryLink {
  href: string
  title: string
  icon: React.ReactElement<typeof LucideIcon>
}

const industriesLinks: IndustryLink[] = [
  {
    href: "/industries/automotive",
    title: "Automotive",
    icon: <Car className="h-5 w-5 text-blue-500" />,
  },
  {
    href: "/industries/communications",
    title: "Communications",
    icon: <Radio className="h-5 w-5 text-green-500" />,
  },
  {
    href: "/industries/real-estate",
    title: "Real Estate",
    icon: <Home className="h-5 w-5 text-teal-500" />,
  },
  {
    href: "/industries/education",
    title: "Education",
    icon: <GraduationCap className="h-5 w-5 text-indigo-500" />,
  },
  {
    href: "/industries/energy-utilities",
    title: "Energy & Utilities",
    icon: <Zap className="h-5 w-5 text-yellow-500" />,
  },
  {
    href: "/industries/engineering-construction",
    title: "Engineering & Construction",
    icon: <Building2 className="h-5 w-5 text-orange-500" />,
  },
  {
    href: "/industries/financial-services",
    title: "Financial Services",
    icon: <CreditCard className="h-5 w-5 text-emerald-500" />,
  },
  {
    href: "/industries/healthcare-life-sciences",
    title: "Healthcare & Life Sciences",
    icon: <Heart className="h-5 w-5 text-red-500" />,
  },
  {
    href: "/industries/manufacturing",
    title: "Manufacturing",
    icon: <Factory className="h-5 w-5 text-gray-500" />,
  },
  {
    href: "/industries/media",
    title: "Media",
    icon: <Tv className="h-5 w-5 text-pink-500" />,
  },
  {
    href: "/industries/nonprofit",
    title: "Nonprofit",
    icon: <HandHeart className="h-5 w-5 text-teal-500" />,
  },
  {
    href: "/industries/professional-services",
    title: "Professional Services",
    icon: <Building className="h-5 w-5 text-slate-500" />,
  },
]

interface AboutUsLink {
  href: string
  title: string
  description: string
  icon: React.ReactElement<typeof LucideIcon>
}

const aboutUsLinks: AboutUsLink[] = [
  {
    href: "/about-us/our-story-mission",
    title: "Our Story & Mission",
    description: "Learn about NovaGent's origins, values, and purpose.",
    icon: <BookOpen className="h-5 w-5 text-sky-500" />,
  },
  {
    href: "/about-us/meet-the-founders",
    title: "Meet the Founders",
    description: "Meet the passionate experts driving NovaGent's innovation.",
    icon: <Users2 className="h-5 w-5 text-emerald-500" />,
  },
  {
    href: "/about-us/our-roadmap",
    title: "Our Roadmap",
    description: "Discover our vision for the future of AI and NovaGent.",
    icon: <Map className="h-5 w-5 text-purple-500" />,
  },
  {
    href: "/about-us/trust-security",
    title: "Trust & Security",
    description: "Understand our commitment to data protection and ethical AI.",
    icon: <ShieldCheck className="h-5 w-5 text-rose-500" />,
  },
  {
    href: "/about-us/join-our-mission",
    title: "Join Our Mission",
    description: "Help shape the future of AI with NovaGent.",
    icon: <Users className="h-5 w-5 text-cyan-500" />,
  },
  {
    href: "/blog",
    title: "Blog",
    description: "Read our latest insights, news, and articles.",
    icon: <Newspaper className="h-5 w-5 text-lime-500" />,
  },
]

interface SolutionLink {
  href: string
  title: string
  description: string
  icon: React.ReactElement<typeof LucideIcon>
}

export function MainNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false)
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false)
  const [isMobileAboutUsOpen, setIsMobileAboutUsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const commonLinkProps = (href: string, isEnterprise = false) => ({
    className: getNavItemClasses(pathname, href, isScrolled, false, isEnterprise),
  })

  const commonTriggerProps = (hrefPrefix: string, isEnterprise = false) => ({
    className: getNavItemClasses(pathname, hrefPrefix, isScrolled, true, isEnterprise),
  })

  const activeIndicatorSpan = (href: string, isEnterprise = false) => {
    const indicatorClassName = getActiveLinkIndicatorClassName(pathname, href, isScrolled, isEnterprise)
    return indicatorClassName !== "scale-x-0" ? <span className={indicatorClassName}></span> : null
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white/80 dark:bg-slate-900/80 shadow-lg backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => {
            setIsMobileMenuOpen(false)
            setIsMobileSolutionsOpen(false)
            setIsMobileIndustriesOpen(false)
            setIsMobileAboutUsOpen(false)
          }}
        >
          {/* Ensure Link has a single child element */}
          <div className="flex flex-shrink-0 items-center gap-2">
            <Image
              src="/novagent-logo-offset.png"
              alt="NovaGent Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
            <span
              className={cn(
                "text-xl font-bold",
                isScrolled || pathname !== "/" ? "text-slate-900 dark:text-white" : "text-white",
              )}
            >
              NovaGent
            </span>
          </div>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger {...commonTriggerProps("/platform")}>
                Platform
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4 bg-white dark:bg-slate-950 shadow-xl rounded-lg border border-slate-200 dark:border-slate-800">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/platform"
                      className="group flex flex-col space-y-1 rounded-md p-3 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 hover:from-cyan-100 hover:to-purple-100 dark:hover:from-cyan-900/30 dark:hover:to-purple-900/30 transition-all duration-200"
                    >
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        The NovaGent Platform
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Experience the world's first managed AI platform with complete transparency and control
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  
                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/platform/integrations"
                        className="group flex items-center justify-between rounded-md p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-100 to-purple-100 dark:from-cyan-800/30 dark:to-purple-800/30 flex items-center justify-center">
                            <Share2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                              Integrations
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Connect with 30+ tools you already use
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <Link
                        href="/platform/security"
                        className="group flex items-center justify-between rounded-md p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 mt-2"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-purple-800/30 dark:to-fuchsia-800/30 flex items-center justify-center">
                            <ShieldCheck className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                              Security
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Enterprise-grade security & compliance
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/how-it-works" legacyBehavior passHref>
                <NavigationMenuLink {...commonLinkProps("/how-it-works")}>
                  <span>
                    How It Works
                    {activeIndicatorSpan("/how-it-works")}
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* TEMPORARILY HIDDEN - Enterprise link moved to footer only
            <NavigationMenuItem>
              <Link href="/solutions/custom-agentic-systems" legacyBehavior passHref>
                <NavigationMenuLink {...commonLinkProps("/solutions/custom-agentic-systems", true)}>
                  <span>
                    Enterprise
                    {activeIndicatorSpan("/solutions/custom-agentic-systems", true)}
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            */}

            <NavigationMenuItem>
              <NavigationMenuTrigger {...commonTriggerProps("/solutions", true)}>
                NovaSuite
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[950px] p-4 bg-white dark:bg-slate-950 shadow-2xl rounded-xl border border-slate-200 dark:border-slate-800">
                  {/* Header Section */}
                  <div className="mb-4">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/solutions/novasuite"
                        className="group flex items-center space-x-3 rounded-lg p-3 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20 hover:from-purple-100 hover:via-blue-100 hover:to-cyan-100 dark:hover:from-purple-900/30 dark:hover:via-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-300 border border-purple-200/50 dark:border-purple-700/50"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <Sparkles className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="text-base font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            NovaSuite - Configure Your Agent
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            One intelligent agent, 14+ modular skills. Configure the exact capabilities your business needs.
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-white/50 dark:bg-slate-800/50 flex items-center justify-center">
                            <ArrowRight className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>

                  {/* Skills Grid - Multi-column layout with visual indicators */}
                  <div className="grid grid-cols-3 gap-6">
                    {Object.entries(skillsByCategory).map(([category, skills]) => (
                      <div key={category} className="space-y-2">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 px-2 border-b border-slate-200 dark:border-slate-700 pb-1">
                          {category}
                        </h3>
                        <div className="space-y-1">
                          {skills.map((skill) => (
                            <NavigationMenuLink key={skill.id} asChild>
                              <Link
                                href={skill.href}
                                className={`group flex items-center space-x-2 rounded-md p-2 transition-all duration-200 border ${
                                  skill.available 
                                    ? 'hover:bg-slate-50 dark:hover:bg-slate-800/60 border-transparent hover:border-slate-200 dark:hover:border-slate-700' 
                                    : 'opacity-60 cursor-not-allowed border-slate-100 dark:border-slate-800'
                                }`}
                              >
                                <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center ${
                                  skill.available 
                                    ? 'bg-slate-100 dark:bg-slate-800 group-hover:scale-105' 
                                    : 'bg-slate-50 dark:bg-slate-900'
                                } transition-transform`}>
                                  {React.cloneElement(skill.icon, { className: "h-3.5 w-3.5" })}
                                </div>
                                <div className="flex-grow min-w-0">
                                  <div className={`text-xs font-medium ${
                                    skill.available 
                                      ? 'text-slate-800 dark:text-slate-200' 
                                      : 'text-slate-500 dark:text-slate-500'
                                  }`}>
                                    {skill.name}
                                    {!skill.available && (
                                      <span className="ml-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-1.5 py-0.5 rounded">
                                        Soon
                                      </span>
                                    )}
                                  </div>
                                  <p className={`text-xs line-clamp-1 mt-0.5 ${
                                    skill.available 
                                      ? 'text-slate-500 dark:text-slate-400' 
                                      : 'text-slate-400 dark:text-slate-500'
                                  }`}>
                                    {skill.description}
                                  </p>
                                </div>
                                {skill.available && (
                                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight className="h-3 w-3 text-slate-400" />
                                  </div>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enterprise Solutions Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/solutions/custom-agentic-systems"
                        className="group flex items-center space-x-3 rounded-lg p-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-fuchsia-50 dark:hover:from-pink-900/20 dark:hover:to-fuchsia-900/20 transition-all duration-200 border border-transparent hover:border-pink-200 dark:hover:border-pink-700"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-fuchsia-600 flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                          <Sparkles className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            Enterprise
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            Custom agentic systems designed for large-scale operations and complex business needs
                          </p>
                        </div>
                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger {...commonTriggerProps("/industries")}>
                Industry Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[800px] p-6 bg-white dark:bg-slate-950 shadow-xl rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-cyan-600 dark:text-cyan-400">INDUSTRIES WE SERVE</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Discover how NovaGent's AI solutions transform businesses across diverse sectors.
                    </p>
                  </div>
                  
                  {/* Industries Overview Link - Added Here */}
                  <div className="mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/industries"
                        className="flex items-center space-x-3 rounded-md p-3 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 hover:from-cyan-100 hover:to-purple-100 dark:hover:from-cyan-900/30 dark:hover:to-purple-900/30 transition-all duration-200"
                      >
                        <Grid3X3 className="h-6 w-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600" />
                        <div>
                          <div className="text-base font-semibold bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Industries Overview
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                            Explore all industries and discover tailored AI solutions for your sector
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  
                  {/* Individual Industries Grid */}
                  <div className="grid grid-cols-4 gap-3">
                    {industriesLinks.map((industry) => (
                      <IndustryItem
                        key={industry.title}
                        title={industry.title}
                        href={industry.href}
                        icon={industry.icon}
                        className="hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-md transition-colors duration-150"
                      />
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink {...commonLinkProps("/pricing")}>
                  <span>
                    Pricing
                    {activeIndicatorSpan("/pricing")}
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger {...commonTriggerProps("/about-us")}>
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[600px] p-6 bg-white dark:bg-slate-950 shadow-2xl rounded-xl border border-slate-200 dark:border-slate-800">
                  {/* Header Section with Gradient Background */}
                  <div className="mb-6">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about-us/our-story-mission"
                        className="group block rounded-lg p-4 bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50 dark:from-sky-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 hover:from-sky-100 hover:via-indigo-100 hover:to-purple-100 dark:hover:from-sky-900/30 dark:hover:via-indigo-900/30 dark:hover:to-purple-900/30 transition-all duration-300 border border-sky-200/50 dark:border-sky-700/50"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-sky-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                              Discover NovaGent
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                              Learn about our mission to transform businesses through managed AI
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                              <ArrowRight className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>

                  {/* Links Grid - Two columns with visual hierarchy */}
                  <div className="grid grid-cols-2 gap-4">
                    {aboutUsLinks.map((component, index) => {
                      // Special styling for certain items
                      const isHighlighted = component.title === "Join Our Mission" || component.title === "Trust & Security";
                      
                      return (
                        <NavigationMenuLink key={component.title} asChild>
                          <Link
                            href={component.href}
                            className={cn(
                              "group relative flex flex-col space-y-2 rounded-lg p-4 transition-all duration-200",
                              isHighlighted
                                ? "bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-800/30 border border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-600"
                                : "hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                            )}
                          >
                            {/* Icon with gradient background */}
                            <div className="flex items-start space-x-3">
                              <div className={cn(
                                "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105",
                                isHighlighted
                                  ? "bg-gradient-to-br from-sky-100 to-purple-100 dark:from-sky-800/30 dark:to-purple-800/30"
                                  : "bg-slate-100 dark:bg-slate-800"
                              )}>
                                {React.cloneElement(component.icon, { 
                                  className: cn(
                                    "h-5 w-5",
                                    isHighlighted ? "text-sky-600 dark:text-sky-400" : component.icon.props.className
                                  )
                                })}
                              </div>
                              <div className="flex-grow">
                                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                  {component.title}
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                                  {component.description}
                                </p>
                              </div>
                            </div>
                            
                            {/* Hover indicator */}
                            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-sky-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                          </Link>
                        </NavigationMenuLink>
                      );
                    })}
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>Building the future of Managed AI</span>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/contact"
                          className="font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
                        >
                          Get in touch ?
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/why-novagent" legacyBehavior passHref>
                <NavigationMenuLink {...commonLinkProps("/why-novagent")}>
                  <span>
                    Why NovaGent?
                    {activeIndicatorSpan("/why-novagent")}
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Theme Toggle for Desktop View */}
          <div className="hidden lg:flex">
             <ThemeToggle />
          </div>
          <Button
            asChild
            variant="ghost"
            className="hidden lg:inline-flex h-9 px-4 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white underline-offset-4 hover:underline transition-all duration-300"
          >
            <Link href="/login">Log In</Link>
          </Button>
          <Button
            asChild
            className="hidden lg:inline-flex h-9 px-5 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Sheet
            open={isMobileMenuOpen}
            onOpenChange={(isOpen) => {
              setIsMobileMenuOpen(isOpen)
              if (!isOpen) {
                setIsMobileSolutionsOpen(false)
                setIsMobileIndustriesOpen(false)
                setIsMobileAboutUsOpen(false)
              }
            }}
          >
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-md p-1.5",
                  isScrolled || pathname !== "/"
                    ? "text-slate-700 hover:bg-slate-200/50 dark:text-slate-300 dark:hover:bg-slate-700/50"
                    : "text-white hover:bg-white/10",
                )}
                aria-label="Open mobile menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-xs bg-white dark:bg-slate-900 p-0 shadow-xl"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 p-4">
                  <Link
                    href="/"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      setIsMobileSolutionsOpen(false)
                      setIsMobileIndustriesOpen(false)
                      setIsMobileAboutUsOpen(false)
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <Image
                        src="/novagent-logo-offset.png"
                        alt="NovaGent Logo"
                        width={32}
                        height={32}
                        className="h-8 w-auto object-contain"
                        priority
                      />
                      <span className="text-lg font-bold text-slate-900 dark:text-white">NovaGent</span>
                    </div>
                  </Link>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-md p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-700/50"
                    >
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex-grow space-y-1 p-4 overflow-y-auto">
                  <div>
                    <SheetClose asChild>
                      <Link
                        href="/platform"
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                          pathname === "/platform"
                            ? "bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-400"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                        )}
                      >
                        Platform
                      </Link>
                    </SheetClose>
                    <div className="ml-4 mt-1 border-l border-slate-200 dark:border-slate-700 pl-3">
                      <SheetClose asChild>
                        <Link
                          href="/platform/integrations"
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                            pathname === "/platform/integrations"
                              ? "bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-400"
                              : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
                          )}
                        >
                          Integrations
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/platform/security"
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                            pathname === "/platform/security"
                              ? "bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-400"
                              : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
                          )}
                        >
                          Security
                        </Link>
                      </SheetClose>
                    </div>
                  </div>

                  <SheetClose asChild>
                    <Link
                      href="/how-it-works"
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                        pathname === "/how-it-works"
                          ? "bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-400"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                      )}
                    >
                      How It Works
                    </Link>
                  </SheetClose>

                  {/* TEMPORARILY HIDDEN - Enterprise link moved to footer only
                  <SheetClose asChild>
                    <Link
                      href="/solutions/custom-agentic-systems"
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-base font-semibold transition-colors",
                        pathname === "/solutions/custom-agentic-systems"
                          ? "bg-pink-500/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400"
                          : "text-pink-500 hover:bg-pink-100/80 dark:text-pink-400 dark:hover:bg-pink-900/30",
                      )}
                    >
                      Enterprise
                    </Link>
                  </SheetClose>
                  */}

                  <div>
                    <button
                      onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-semibold text-pink-500 hover:bg-pink-100/80 dark:text-pink-400 dark:hover:bg-pink-900/30 transition-colors"
                    >
                      NovaSuite
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", isMobileSolutionsOpen && "rotate-180")}
                      />
                    </button>
                    {isMobileSolutionsOpen && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-slate-200 dark:border-slate-700 pl-3 py-1">
                        <SheetClose asChild>
                          <Link
                            href="/solutions/novasuite"
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm font-semibold transition-colors bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-700",
                              pathname === "/solutions/novasuite"
                                ? "bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 dark:from-purple-800/40 dark:to-blue-800/40 dark:text-purple-300"
                                : "text-purple-600 hover:from-purple-100 hover:to-blue-100 dark:text-purple-400 dark:hover:from-purple-800/30 dark:hover:to-blue-800/30",
                            )}
                          >
                            ? NovaSuite - Configure Your Agent
                          </Link>
                        </SheetClose>
                        
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-3 py-2 mt-3">
                          All 14 Agent Skills
                        </div>
                        {novaSuiteSkills.map((skill) => (
                          <SheetClose key={skill.id} asChild>
                            <Link
                              href={skill.href}
                              className={cn(
                                "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                pathname === skill.href
                                  ? "bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-400"
                                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
                              )}
                            >
                              {skill.name}
                            </Link>
                          </SheetClose>
                        ))}
                        
                        {/* TEMPORARILY HIDDEN - Enterprise link moved to footer only
                        <div className="border-t border-slate-200 dark:border-slate-700 mt-2 pt-2">
                          <SheetClose asChild>
                            <Link
                              href="/solutions/custom-agentic-systems"
                              className={cn(
                                "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                pathname === "/solutions/custom-agentic-systems"
                                  ? "bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400"
                                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
                              )}
                            >
                              ? Custom Agentic Systems
                            </Link>
                          </SheetClose>
                        </div>
                        */}
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      Industry Solutions
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", isMobileIndustriesOpen && "rotate-180")}
                      />
                    </button>
                    {isMobileIndustriesOpen && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-slate-200 dark:border-slate-700 pl-3 py-1">
                        <SheetClose asChild>
                          <Link
                            href="/industries"
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                              pathname === "/industries"
                                ? "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400"
                                : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                            )}
                          >
                            Industries Overview
                          </Link>
                        </SheetClose>
                        {industriesLinks.map((link) => (
                          <SheetClose key={link.href} asChild>
                            <Link
                              href={link.href}
                              className={cn(
                                "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                pathname === link.href
                                  ? "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400"
                                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
                              )}
                            >
                              {link.title}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>

                  <SheetClose asChild>
                    <Link
                      href="/pricing"
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                        pathname === "/pricing"
                          ? "bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-400"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                      )}
                    >
                      Pricing
                    </Link>
                  </SheetClose>

                  <div>
                    <button
                      onClick={() => setIsMobileAboutUsOpen(!isMobileAboutUsOpen)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      About Us
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", isMobileAboutUsOpen && "rotate-180")}
                      />
                    </button>
                    {isMobileAboutUsOpen && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-slate-200 dark:border-slate-700 pl-3 py-1">
                        <SheetClose asChild>
                          <Link
                            href="/about-us/our-story-mission"
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                              pathname === "/about-us/our-story-mission" || pathname === "/about-us"
                                ? "bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400"
                                : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                            )}
                          >
                            About Us Overview
                          </Link>
                        </SheetClose>
                        {aboutUsLinks.map((link) => (
                          <SheetClose key={link.href} asChild>
                            <Link
                              href={link.href}
                              className={cn(
                                "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                pathname === link.href
                                  ? "bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400"
                                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
                              )}
                            >
                              {link.title}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>

                  <SheetClose asChild>
                    <Link
                      href="/why-novagent"
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                        pathname === "/why-novagent"
                          ? "bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-400"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                      )}
                    >
                      Why NovaGent?
                    </Link>
                  </SheetClose>
                </nav>
                <div className="border-t border-slate-200 dark:border-slate-800 p-4 space-y-3">
                  {/* Theme Toggle for Mobile View */}
                  <div className="flex justify-center pt-2 pb-4">
                    <ThemeToggle />
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full h-11 text-sm font-medium border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                  >
                    <Link href="/login">Log In</Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full h-11 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactElement }>(
  ({ className, title, children, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "flex select-none items-start space-x-3 rounded-md p-3 leading-none no-underline outline-none transition-colors",
              className,
            )}
            {...props}
          >
            {icon && <div className="mt-0.5 flex-shrink-0">{icon}</div>}
            <div className="flex-grow">
              <div className="text-sm font-semibold leading-tight text-slate-800 dark:text-white">{title}</div>
              <p className="mt-1 line-clamp-2 text-xs leading-snug text-slate-500 dark:text-slate-400">{children}</p>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

const IndustryItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactElement }
>(({ className, title, icon, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "flex select-none items-center space-x-3 rounded-md p-3 leading-none no-underline outline-none transition-colors",
          className,
        )}
        {...props}
      >
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <div className="text-sm font-medium leading-tight text-slate-800 dark:text-white">{title}</div>
      </a>
    </NavigationMenuLink>
  )
})
IndustryItem.displayName = "IndustryItem"

export default MainNavigation;
