import type { Metadata } from "next"
import { SimpleContentPage } from "@/components/site/content-pages"
export const metadata: Metadata = { title: "Terms & Conditions", description: "Stoneway terms and conditions." }
export default function Page() { return <SimpleContentPage title="Terms & Condition" eyebrow="Terms of use" text="Product availability, finishes, dimensions and prices may vary. Please confirm current details with Stoneway before placing an order." /> }
