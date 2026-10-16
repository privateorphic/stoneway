import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stoneway-testing-home.netlify.app"
const paths = ["", "/about", "/contact", "/catalogue", "/collection", "/products", "/events", "/blog", "/privacy", "/terms"]

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path, index) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : index < 6 ? 0.8 : 0.4 }))
}
