"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, MotionConfig, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion"
import { ArrowUpRight, ArrowUp, Menu, X, Camera, Phone } from "lucide-react"
import { useEffect, useState } from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/catalogue", label: "Request A Catalogue" },
]
const logo = "/assets/brand/logo.png"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent background scrolling and allow Escape to close menu on mobile
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false)
      }
      window.addEventListener("keydown", onKeyDown)
      return () => {
        document.body.style.overflow = ""
        window.removeEventListener("keydown", onKeyDown)
      }
    } else {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""} ${open ? "site-header-open" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Stoneway home">
          <Image src={logo} alt="Stoneway — Stone & Tile for Every Home" width={170} height={55} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.slice(0, 3).map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/catalogue" className="pill-button header-cta">
          Request A Catalogue <span className="button-arrow"><ArrowUpRight aria-hidden="true" /></span>
        </Link>
        <button
          className={`menu-toggle ${open ? "menu-toggle-active" : ""}`}
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="w-5 h-5 text-white stroke-[2.5]" /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function RouteTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const reduced = useReducedMotion()
  return <AnimatePresence mode="wait" initial={false}><motion.div key={pathname} initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -6 }} transition={{ duration: 0.28, ease: "easeOut" }}>{children}</motion.div></AnimatePresence>
}

function ScrollTools() {
  const { scrollYProgress } = useScroll()
  const [showTop, setShowTop] = useState(false)
  useMotionValueEvent(scrollYProgress, "change", (value) => setShowTop(value > 0.18))
  return <>
    <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
    <AnimatePresence>{showTop && <motion.button className="back-to-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}><ArrowUp aria-hidden="true" /></motion.button>}</AnimatePresence>
  </>
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user"><ScrollTools /><SiteHeader /><RouteTransition>{children}</RouteTransition><SiteFooter /></MotionConfig>
}

const quickLinks = [
  ["Home", "/"], ["About Us", "/about"], ["Events", "/events"], ["Blogs", "/blog"], ["Contact Us", "/contact"],
]
const collections = [
  { label: "Living Room Tiles", href: "/collection/living-room-tiles" },
  { label: "Kitchen Tiles", href: "/collection/kitchen-tiles" },
  { label: "Bathroom Tiles", href: "/collection/bathroom-tiles" },
  { label: "Bedroom Tiles", href: "/collection/bedroom-tiles" },
  { label: "Outdoor Tiles", href: "/collection/outdoor-tiles" },
]

export function SiteFooter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  return <footer className="site-footer">
    <div className="footer-layout page-container">
      <section className="footer-brand-card" aria-label="About Stoneway">
        <Link href="/" className="footer-logo" aria-label="Stoneway home"><Image src={logo} alt="Stoneway" width={170} height={55} /></Link>
        <p>Serving clients over 35+ countries, deliver premium tiles and marble with consistent quality and timely delivery.</p>
        <div className="footer-social-block">
          <h2>Follow Us On Social:</h2>
          <nav className="social-links" aria-label="Social media">
            <a href="https://www.pinterest.com/" aria-label="Pinterest"><span className="social-letter social-pinterest" aria-hidden="true">p</span></a>
            <a href="https://x.com/" aria-label="X"><span className="social-letter" aria-hidden="true">X</span></a>
            <a href="https://www.facebook.com/" aria-label="Facebook"><span className="social-letter social-facebook" aria-hidden="true">f</span></a>
            <a href="https://www.instagram.com/" aria-label="Instagram"><Camera aria-hidden="true" /></a>
          </nav>
        </div>
      </section>
      <div className="footer-right">
        <div className="footer-columns">
          <nav className="footer-link-column" aria-label="Quick links"><h2>Quick Links</h2><ul>{quickLinks.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></nav>
          <nav className="footer-link-column" aria-label="Our collection"><h2>Our Collection</h2><ul>{collections.map(({ label, href }) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul></nav>
          <section className="footer-newsletter" aria-labelledby="footer-newsletter-title"><h2 id="footer-newsletter-title">Subscribe To Newsletter</h2><p>Subscribe to our newsletter for the latest tiles trends, design inspiration, etc.</p><form onSubmit={(event) => { event.preventDefault(); if (email.trim()) setSubscribed(true) }}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Enter Your Email Address" required value={email} onChange={(event) => setEmail(event.target.value)} /><button type="submit" aria-label="Subscribe"><ArrowUpRight /></button></form>{subscribed && <p className="newsletter-success" role="status">Thanks for subscribing.</p>}</section>
        </div>
        <div className="footer-meta"><strong>Premium Tiles &amp; Marble Manufacturing Excellence</strong><nav className="footer-legal" aria-label="Legal information"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Condition</Link></nav></div>
      </div>
    </div>
    <div className="footer-copyright page-container"><p>Copyright © 2026 All Rights Reserved.</p></div>
  </footer>
}

export function RouteShell({ children }: { children: React.ReactNode }) { return <SiteFrame>{children}</SiteFrame> }
