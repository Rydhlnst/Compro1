import type { MetadataRoute } from "next"

import { companyProfile } from "@/constants/company-profile"
import { BASE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = companyProfile.services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const projectPages: MetadataRoute.Sitemap = companyProfile.projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticPages, ...servicePages, ...projectPages]
}
