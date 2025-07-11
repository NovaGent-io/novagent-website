import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prospect Hunter - AI-Powered Lead Generation | NovaGent',
  description: 'Transform your lead generation with AI-powered prospect discovery. Find, qualify, and engage your ideal customers at scale. 5x more qualified leads, 80% time saved.',
  keywords: 'lead generation, AI prospecting, sales automation, B2B lead generation, prospect discovery, sales intelligence',
  openGraph: {
    title: 'Prospect Hunter - AI-Powered Lead Generation',
    description: 'Find and qualify your ideal prospects automatically with NovaGent\'s AI-powered Prospect Hunter. 5x more qualified leads while saving 80% of your time.',
    url: 'https://novagent.io/capabilities/prospect-hunter',
    siteName: 'NovaGent',
    images: [
      {
        url: '/images/prospect-hunter-og.png',
        width: 1200,
        height: 630,
        alt: 'NovaGent Prospect Hunter - AI Lead Generation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prospect Hunter - AI-Powered Lead Generation | NovaGent',
    description: '5x your qualified leads with AI that finds, qualifies, and engages prospects 24/7',
    images: ['/images/prospect-hunter-twitter.png'],
  },
}
