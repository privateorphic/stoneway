import type { Metadata } from "next"
import { Suspense } from "react"
import { ContactPage } from "@/components/site/content-pages"

export const metadata: Metadata = {
  title: "Contact Stoneway",
  description: "Contact Stoneway in Karond, Bhopal for granite, marble, Kota stone, tiles and building materials. Call +91 910 924 0966.",
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] bg-[#f7f5f1]" />}>
      <ContactPage />
    </Suspense>
  )
}
