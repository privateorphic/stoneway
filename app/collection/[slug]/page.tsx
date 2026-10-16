import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CollectionComingSoonPage } from "@/components/site/collection-coming-soon"
import { collectionData, slugAliases } from "@/components/site/collection-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const resolvedSlug = slugAliases[slug] || slug
  const data = collectionData[resolvedSlug]

  if (!data) {
    return {
      title: "Page Not Found | Stoneway Bhopal",
    }
  }

  return {
    title: `${data.title} | Coming Soon | Stoneway Bhopal`,
    description: data.description,
    openGraph: {
      title: `${data.title} - Coming Soon | Stoneway Bhopal`,
      description: data.description,
    },
  }
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams?.slug || ""
  const resolvedSlug = slugAliases[slug] || slug
  const data = collectionData[resolvedSlug]

  if (!data) {
    notFound()
  }

  return <CollectionComingSoonPage data={data} slug={resolvedSlug} />
}
