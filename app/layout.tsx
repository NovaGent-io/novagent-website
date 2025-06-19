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
import Script from 'next/script' // This import was also missing

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NovaGent | Managed AI for Business Outcomes",
  description:
    "NovaGent designs, deploys, and continuously optimizes autonomous software agents for revenue, marketing, and operations teams.",
    generator: 'v0.dev',
  viewport: { // Restoring mobile viewport settings
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const chatProactiveTriggers = [
    {
      pagePath: "/pricing",
      delaySeconds: 10,
      message: "Thinking about our pricing? I can help clarify our engagement models or discuss custom solutions.",
    },
    {
      pagePath: "/solutions/custom-agentic-systems",
      delaySeconds: 15,
      message:
        "Exploring custom AI solutions? We excel at architecting systems for unique challenges. What specific problem are you looking to solve?",
    },
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