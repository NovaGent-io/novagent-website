// app/sitemap.ts
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://novagent.io',
      lastModified: new Date(),
    },
  ]
}