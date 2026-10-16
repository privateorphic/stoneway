import type { Metadata } from "next"
import { HomePage } from "@/components/site/home-page"

export const metadata: Metadata = {
  title: "Stoneway - Granite, Tiles & Stone Supplier in Bhopal",
  description: "Stoneway is Bhopal's trusted wholesale supplier of granite, marble, Kota stone, tiles & all building materials. Best prices. Karond, New Jail Road. Call Now!",
  openGraph: {
    title: "Stoneway - Granite, Tiles & Stone Supplier in Bhopal",
    description: "Bhopal's trusted wholesale supplier of granite, marble, Kota stone, tiles and building materials.",
    type: "website",
  },
}

export default function Page() {
  return <HomePage />
}

