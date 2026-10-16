import type { Metadata } from "next"
import { siteConfig } from "@/src/lib/site"
import { AboutPage as AboutPageView } from "@/components/site/content-pages"

export const metadata: Metadata = {
  title: "About Us | Stoneway - Wholesale Granite, Tiles & Marble Supplier",
  description:
    "Discover Stoneway: Bhopal's leading wholesale partner for premium granite, Italian marble, Kota stone, and precision vitrified tiles. High structural durability, direct quarry pricing, and expert guidance.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Us | Stoneway - Wholesale Granite, Tiles & Marble Supplier",
    description:
      "Crafting enduring architectural surfaces. Premium granite, marble, and precision tiles engineered for everyday life and luxury spaces.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/assets/brand/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Stoneway Natural Stone and Tile Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Stoneway - Wholesale Granite, Tiles & Marble Supplier",
    description:
      "Direct quarry sourcing, precision CNC fabrication, and wholesale building material supply across Central India and international hubs.",
    images: [`${siteConfig.url}/assets/brand/og-image.jpg`],
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/assets/brand/logo.svg`,
  description: siteConfig.description,
  telephone: siteConfig.phone.raw,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  sameAs: siteConfig.socials.map((s) => s.href),
}

export default function AboutPage() {
  return (
    <>
      {/* Organization JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <AboutPageView />
    </>
  )
}

