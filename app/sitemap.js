// Location: app/sitemap.ts

import { MetadataRoute } from 'next'

export default function sitemap() {
  const baseUrl = 'https://novagent.io'

  // This array contains every URL you provided.
  const pages = [
    // --- High-Priority Core Pages ---
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // --- Solutions & Agent Pages ---
    {
      url: `${baseUrl}/solutions/custom-agentic-systems`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/ai-agent-suite`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/appointment-setter-agent`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/customer-support-agent`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/ad-campaign-manager-agent`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/lead-generation-agent`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/ai-dialer-agent`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/seo-reputation-agent`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/social-media-manager-agent`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },

    // --- Industries Pages ---
    { url: `${baseUrl}/industries/automotive`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/industries/communications`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/industries/real-estate`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/industries/education`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/industries/energy-utilities`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/industries/engineering-construction`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/industries/financial-services`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/industries/healthcare-life-sciences`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/industries/manufacturing`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/industries/media`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/industries/nonprofit`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/industries/professional-services`, lastModified: new Date(), priority: 0.7 },

    // --- About Us Pages ---
    {
      url: `${baseUrl}/about-us/our-story-mission`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about-us/meet-the-founders`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about-us/our-roadmap`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about-us/trust-security`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about-us/join-our-mission`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },

    // --- NEW: Legal & Utility Pages ---
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return pages;
}