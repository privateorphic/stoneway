import type { Metadata } from "next"
import { SimpleContentPage } from "@/components/site/content-pages"
export const metadata: Metadata = { title: "Stoneway Blog", description: "Ideas and advice for choosing stone, tile and building materials." }
export default function Page() { return <SimpleContentPage title="Blogs" eyebrow="Ideas & inspiration" text="Helpful ideas for choosing surfaces and planning your next project." /> }
