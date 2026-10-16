import type { Metadata } from "next"
import { ContactPage } from "@/components/site/content-pages"
import { productCategories } from "@/components/site/catalog-data"

export const metadata: Metadata = { title: "Contact Stoneway", description: "Contact Stoneway in Karond, Bhopal for granite, marble, Kota stone, tiles and building materials. Call +91 910 924 0966." }
export default async function Page({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const { product = "" } = await searchParams
  const initialInterest = productCategories.includes(product as (typeof productCategories)[number]) ? product : ""
  return <ContactPage initialInterest={initialInterest} />
}
