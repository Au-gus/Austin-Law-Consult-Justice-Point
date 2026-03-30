import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://austinlaw.com.np'

  // Standard routes
  const routes = ['', '/#about', '/#practice-areas', '/#blog', '/#contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  )

  // In Next.js, sitemap can also be dynamic but for this structure 
  // since we have static practice areas data, we can define them here
  const practiceAreaSlugs = [
    'corporate-law',
    'criminal-defense',
    'family-divorce',
    'real-estate-law',
    'banking-finance',
    'intellectual-property'
  ]

  const practiceRoutes = practiceAreaSlugs.map((slug) => ({
    url: `${baseUrl}/practice-areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...practiceRoutes]
}
