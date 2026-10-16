import type { Metadata } from "next"
import { CataloguePage } from "@/components/site/content-pages"

export const metadata: Metadata = { title: "Request a Stoneway Catalogue", description: "Request a catalogue of Stoneway's granite, marble, Kota stone, tiles and building materials available in Bhopal." }
export default function Page() { return <CataloguePage /> }
