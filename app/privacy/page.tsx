import type { Metadata } from "next"
import { SimpleContentPage } from "@/components/site/content-pages"
export const metadata: Metadata = { title: "Privacy Policy", description: "Stoneway privacy information." }
export default function Page() { return <SimpleContentPage title="Privacy Policy" eyebrow="Your information" text="Stoneway respects your privacy. We use details shared through enquiry forms only to respond to your requests and discuss relevant products and services." /> }
