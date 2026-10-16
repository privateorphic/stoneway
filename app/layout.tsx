import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { SiteFrame } from "@/components/site/site-shell"
import { CustomCursor } from "@/src/components/ui/CustomCursor"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-clash",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stoneway-testing-home.netlify.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Stoneway - Granite, Tiles & Stone Supplier in Bhopal", template: "%s | Stoneway Bhopal" },
  description: "Stoneway is Bhopal's trusted wholesale supplier of granite, marble, Kota stone, tiles & all building materials. Best prices. Karond, New Jail Road. Call Now!",
  applicationName: "Stoneway",
  openGraph: {
    title: "Stoneway - Granite, Tiles & Stone Supplier in Bhopal",
    description: "Premium granite, marble, Kota stone, tiles and building materials at wholesale rates in Bhopal.",
    url: siteUrl,
    siteName: "Stoneway",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://stoneway-testing-home.netlify.app/images/home/logo-s.jpg", width: 600, height: 200, alt: "Stoneway stone and building materials" }],
  },
  twitter: { card: "summary_large_image", title: "Stoneway - Granite, Tiles & Stone Supplier in Bhopal" },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
}

export const viewport: Viewport = { colorScheme: "light", themeColor: "#f7f5f1", width: "device-width", initialScale: 1 }

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Stoneway",
  description: "Wholesale supplier of granite, marble, Kota stone, tiles, tile adhesive and building materials in Bhopal.",
  telephone: "+91 910 924 0966",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 3, New Jail Road, Karond",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462038",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 23.3010903, longitude: 77.3779117 },
  areaServed: ["Bhopal", "Madhya Pradesh"],
  url: siteUrl,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${headingFont.variable}`} data-scroll-behavior="smooth">
      <body className="antialiased">
        <CustomCursor />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        <SiteFrame>{children}</SiteFrame>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
