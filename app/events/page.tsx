import type { Metadata } from "next"
import { SimpleContentPage } from "@/components/site/content-pages"
export const metadata: Metadata = { title: "Events", description: "Showroom news and Stoneway events in Bhopal." }
export default function Page() { return <SimpleContentPage title="Events" eyebrow="What’s happening" text="Updates from Stoneway and our Bhopal showroom." /> }
