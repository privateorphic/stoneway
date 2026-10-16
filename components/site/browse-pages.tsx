"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Check, Search, X } from "lucide-react"
import { PageBanner, imageUrl, PillLink } from "@/components/site/shared"
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion"
import { collectionCards, productCategories, products, type CatalogProduct } from "@/components/site/catalog-data"

function FilterTabs({ active, onChange, items }: { active: string; onChange: (value: string) => void; items: readonly string[] }) {
  return <div className="filter-tabs" role="group" aria-label="Filter by product category">{items.map((item) => <button type="button" key={item} className={active === item ? "active" : ""} aria-pressed={active === item} onClick={() => onChange(item)}>{item}</button>)}</div>
}

export function CollectionPage() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? collectionCards : collectionCards.filter((item) => item.name === active || (active === "Raw Materials" && item.name === "Raw Materials"))
  return <main className="inner-page"><PageBanner title="Our Collection" /><section className="section-pad browse-section"><div className="page-container"><Reveal><div className="browse-intro"><p className="eyebrow"><span />Find your material</p><h2>Choose the right surface for your space.</h2><p>Explore Stoneway&apos;s collection of natural stone, tiles and construction essentials, all available from our Bhopal showroom.</p></div></Reveal><FilterTabs active={active} onChange={setActive} items={["All", ...productCategories]} /><LayoutGroup><motion.div layout className="collection-grid">{filtered.map((item, index) => <motion.article key={item.name} layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.32, delay: index * 0.025 }} className="collection-tile"><Link href={`/products?category=${encodeURIComponent(item.name === "Raw Materials" ? item.name : item.name)}`} className="collection-image"><Image src={imageUrl(item.image)} alt={`${item.name} collection`} fill sizes="(max-width: 700px) 90vw, (max-width: 1024px) 45vw, 30vw" /><span className="collection-count">{item.count}</span><span className="collection-arrow"><ArrowUpRight /></span></Link><div className="collection-tile-copy"><h3>{item.name}</h3><p>{item.description}</p><Link className="text-link" href={`/products?category=${encodeURIComponent(item.name === "Raw Materials" ? item.name : item.name)}`}>View products <ArrowUpRight /></Link></div></motion.article>)}</motion.div></LayoutGroup><div className="browse-bottom"><p>Not sure what will work for your project?</p><PillLink href="/contact">Talk to our team</PillLink></div></div></section></main>
}

function ProductDialog({ product, onClose }: { product: CatalogProduct; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [])
  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") { event.preventDefault(); onClose(); return }
    if (event.key !== "Tab" || !dialogRef.current) return
    const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
  }
  return <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><div ref={dialogRef} className="product-dialog" role="dialog" aria-modal="true" aria-labelledby="quick-view-title" onKeyDown={handleKeyDown} tabIndex={-1}><div className="dialog-layout"><div className="dialog-image"><Image src={imageUrl(product.image)} alt={product.name} fill sizes="(max-width: 700px) 90vw, 45vw" /></div><div className="dialog-copy"><button ref={closeButtonRef} type="button" className="dialog-close" aria-label="Close quick view" onClick={onClose}><X /></button><p className="eyebrow"><span />{product.category}</p><h2 id="quick-view-title">{product.name}</h2><p>{product.description}</p><div className="dialog-detail"><Check /> {product.finish}</div><Link className="pill-button" href={`/contact?product=${encodeURIComponent(product.category)}`}>Enquire Now <span className="circle-arrow"><ArrowUpRight /></span></Link></div></div></div></div>
}

function ProductCard({ product, onQuickView }: { product: CatalogProduct; onQuickView: (product: CatalogProduct) => void }) {
  return <article className="product-card"><div className="product-card-image"><Image src={imageUrl(product.image)} alt={product.name} fill sizes="(max-width: 700px) 90vw, (max-width: 1000px) 45vw, 30vw" /><span className="product-card-category">{product.category}</span><button type="button" className="quick-view-button" onClick={() => onQuickView(product)}>Quick view <ArrowUpRight /></button></div><div className="product-card-copy"><div><h3>{product.name}</h3><p>{product.finish}</p></div><Link className="product-enquire" href={`/contact?product=${encodeURIComponent(product.category)}`} aria-label={`Enquire about ${product.name}`}><ArrowUpRight /></Link></div></article>
}

export function ProductsPage({ initialCategory = "All" }: { initialCategory?: string }) {
  const [active, setActive] = useState(productCategories.includes(initialCategory as (typeof productCategories)[number]) ? initialCategory : "All")
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<CatalogProduct | null>(null)
  const reduced = useReducedMotion()
  const filtered = useMemo(() => products.filter((item) => (active === "All" || item.category === active) && `${item.name} ${item.category} ${item.description}`.toLowerCase().includes(query.toLowerCase().trim())), [active, query])
  return <main className="inner-page"><PageBanner title="Our Products" /><section className="section-pad browse-section products-browse"><div className="page-container"><Reveal><div className="browse-intro"><p className="eyebrow"><span />Stoneway product range</p><h2>Explore surfaces made for living.</h2><p>Find inspiration for your space, then speak with our team for current availability, sizes and wholesale pricing.</p></div></Reveal><div className="product-toolbar"><FilterTabs active={active} onChange={setActive} items={["All", ...productCategories]} /><label className="product-search"><Search aria-hidden="true" /><span className="sr-only">Search products</span><input type="search" placeholder="Search products" value={query} onChange={(event) => setQuery(event.target.value)} /></label></div><AnimatePresence mode="wait"><motion.div key={`${active}-${query}`} className="product-grid" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>{filtered.length ? filtered.map((product) => <ProductCard key={product.name} product={product} onQuickView={setSelected} />) : <div className="no-products">No products match that search. Try another category or keyword.</div>}</motion.div></AnimatePresence><div className="browse-bottom"><p>Looking for a specific finish or size?</p><PillLink href="/contact">Enquire with Stoneway</PillLink></div></div></section>{selected && <ProductDialog product={selected} onClose={() => setSelected(null)} />}</main>
}
