import type { Metadata } from "next"
import { ProductsPage } from "@/components/site/browse-pages"
import { productCategories } from "@/components/site/catalog-data"

export const metadata: Metadata = { title: "Stoneway Products", description: "Explore Stoneway's granite, marble, Kota stone, tiles, tile adhesive and construction materials in Bhopal." }
export default async function Page({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category = "All" } = await searchParams
  const initialCategory = category === "Raw Materials" ? category : productCategories.includes(category as (typeof productCategories)[number]) ? category : "All"
  return <ProductsPage initialCategory={initialCategory} />
}
