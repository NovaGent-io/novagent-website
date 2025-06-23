import { cn } from "@/lib/utils"
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import MainNavigation from "@/components/main-navigation"
import MainFooter from "@/components/main-footer"
import ProactiveChatAgent from "@/components/proactive-chat-agent"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NovaGent | Managed AI for Business Outcomes",
  description:
    "NovaGent designs, deploys, and continuously optimizes autonomous software agents for revenue, marketing, and operations teams.",
  generator: 'v0.dev',
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  // --- FAVICON CODE ADDED HERE (BEST PRACTICE FOR NEXT.JS) ---
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  // -----------------------------------------------------------
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const chatProactiveTriggers = [
    {
      pagePath: "/",
      delaySeconds: 20,
      message: "Welcome to NovaGent! I can help you understand how our AI agents can transform your business operations. What brings you here today?",
      showOncePerSession: true
    },
    {
      pagePath: "/pricing",
      delaySeconds: 30,
      message: "Thinking about our pricing? I can help clarify our engagement models or discuss custom solutions that fit your budget.",
      showOncePerSession: true
    },
    {
      pagePath: "/solutions/custom-agentic-systems",
      delaySeconds: 25,
      message: "Exploring custom AI solutions? We excel at architecting systems for unique challenges. What specific problem are you looking to solve?",
      showOncePerSession: true
    },
    {
      pagePath: "/solutions/*", // Matches any other solutions page
      delaySeconds: 25,
      message: "Exploring our AI solutions? I can help clarify how they'd work for your specific industry and use case.",
      showOncePerSession: true
    },
    {
      pagePath: "/how-it-works",
      delaySeconds: 35,
      message: "Questions about our process? I can walk you through exactly how we build and deploy AI agents for businesses like yours.",
      showOncePerSession: true
    },
    {
      pagePath: "/about-us",
      delaySeconds: 40,
      message: "Want to know more about our team and approach? I'm happy to share what makes NovaGent different in the AI space.",
      showOncePerSession: true
    }
  ]

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-white dark:bg-slate-950 flex flex-col min-h-screen overflow-x-hidden")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <MainNavigation />
          <main className="pt-16 flex-grow relative">
            {children}
          </main>
          <MainFooter />
          <ProactiveChatAgent proactiveTriggers={chatProactiveTriggers} />
        </ThemeProvider>

        {/* --- Google Analytics Scripts Added Here --- */}
        <GoogleAnalytics measurementId="G-DTG535C7QL" />

      </body>
    </html>
  )
}