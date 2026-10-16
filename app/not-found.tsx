import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found. Explore Stoneway's granite, marble, tile and building material collections.",
}

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-orbit not-found-orbit-one" aria-hidden="true" />
      <div className="not-found-orbit not-found-orbit-two" aria-hidden="true" />
      <section className="not-found-content" aria-labelledby="not-found-title">
        <p className="not-found-kicker"><span /> Error 404 <span /></p>
        <p className="not-found-number" aria-hidden="true">404</p>
        <h1 id="not-found-title">This page has gone missing.</h1>
        <p className="not-found-description">The address may have changed, or the page may no longer be available. Let&apos;s get you back to something solid.</p>
        <div className="not-found-actions">
          <Link className="pill-button" href="/"><ArrowLeft data-icon="inline-start" /> Back to home <span className="circle-arrow"><ArrowUpRight /></span></Link>
          <Link className="not-found-secondary" href="/collection">Explore our collection <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
      <p className="not-found-footnote">STONEWAY <span>·</span> STONE &amp; SURFACES, BUILT TO LAST</p>
    </main>
  )
}
