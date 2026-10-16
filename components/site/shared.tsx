import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/site/motion"

export const imageUrl = (path: string) => path.startsWith("/") ? path : `https://stoneway-testing-home.netlify.app/images/${path}`

export function SectionHeading({ eyebrow, title, description, align = "center", light = false }: { eyebrow?: string; title: React.ReactNode; description?: string; align?: "center" | "left"; light?: boolean }) {
  return <Reveal className={`section-heading ${align === "left" ? "heading-left" : ""} ${light ? "heading-light" : ""}`}><>{eyebrow && <p className="eyebrow"><span />{eyebrow}</p>}<h2>{title}</h2>{description && <p className="section-description">{description}</p>}</></Reveal>
}

export function CircleArrow({ className = "" }: { className?: string }) { return <span className={`circle-arrow ${className}`} aria-hidden="true"><ArrowUpRight /></span> }

export function PillLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link href={href} className={`pill-button ${light ? "pill-light" : ""}`}>{children}<CircleArrow /></Link>
}

export function CtaStrip({ title = "Let's make something great work together.", button = "Get Free Quote" }: { title?: string; button?: string }) {
  return <section className="cta-strip"><div className="page-container cta-strip-inner"><div><p className="eyebrow eyebrow-light">A better space starts here</p><h2>{title}</h2></div><PillLink href="/contact">{button}</PillLink></div></section>
}

export function PageBanner({ title, crumb }: { title: string; crumb?: string }) {
  return <section className="page-banner"><div className="banner-image" aria-hidden="true"><Image src={imageUrl("about-us-body-image.jpg")} alt="" fill sizes="100vw" /></div><div className="banner-overlay" /><div className="page-container banner-content"><p className="breadcrumb"><Link href="/">Home</Link><ChevronRight aria-hidden="true" />{crumb ?? title}</p><Reveal><h1>{title}</h1></Reveal></div></section>
}

export function MapEmbed({ compact = false }: { compact?: boolean }) {
  return <div className={`map-frame ${compact ? "map-compact" : ""}`}><iframe title="Stoneway store location on Google Maps" src="https://maps.google.com/maps?q=23.3010903,77.3779117&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
}

export function StoneImage({ path, alt, className = "", sizes = "(max-width: 768px) 100vw, 50vw", priority = false }: { path: string; alt: string; className?: string; sizes?: string; priority?: boolean }) {
  return <Image className={className} src={imageUrl(path)} alt={alt} fill priority={priority} sizes={sizes} />
}
