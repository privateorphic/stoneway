"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ArrowDown, ArrowUpRight, BadgeCheck, Boxes, Check, ChevronLeft, ChevronRight, CircleDollarSign, Clock3, Droplets, MapPin, MessageSquarePlus, Send, ShieldCheck, Sparkles, Star, Waves, X } from "lucide-react"
import { CircleArrow, imageUrl, MapEmbed, PillLink, SectionHeading, StoneImage } from "@/components/site/shared"
import { CountUp, ImageReveal, Reveal, RotatingBadge, Stagger, StaggerItem } from "@/components/site/motion"

const categories = [
  { name: "Granite", copy: "Strong, beautiful granite for kitchens, floors and every space in between.", image: "/images/categories/granite-v2.jpg" },
  { name: "Marble", copy: "Natural marble with distinctive veining and an unmistakable premium finish.", image: "/images/categories/marble-v2.jpg" },
  { name: "Kota Stone", copy: "Authentic Kota stone: timeless, durable and thoughtfully priced.", image: "/images/categories/kota-stone-v2.jpg" },
  { name: "Vitrified Tiles", copy: "Easy-care vitrified tiles in designs for modern homes and businesses.", image: "/images/categories/vitrified-tiles.jpg" },
  { name: "Tile Adhesive", copy: "Reliable installation essentials for a finish built to last.", image: "/images/categories/tile-adhesive.jpg" },
  { name: "Construction Raw Materials", copy: "Everyday construction materials, brought together under one roof.", image: "/images/categories/construction-materials.jpg" },
]
const featured = [
  { title: "Polished Granite Flooring", image: "/images/categories/granite-v2.jpg", category: "Granite" },
  { title: "Kota Stone Flooring", image: "/images/categories/kota-stone-v2.jpg", category: "Kota Stone" },
  { title: "Designer Vitrified Tiles", image: "/images/categories/vitrified-tiles.jpg", category: "Vitrified Tiles" },
]
const showcase = [
  { title: "Polished & Honed Granite Slabs", description: "Premium granite slabs available in polished and honed finishes for flooring and countertops.", image: "/images/categories/granite-v2.jpg" },
  { title: "Natural Marble Slabs", description: "Imported and Indian marble slabs with unique veining and premium finish for luxury interiors.", image: "/images/categories/marble-v2.jpg" },
  { title: "Kota Stone Tiles", description: "Authentic Kota stone tiles — classic, durable and affordable for every project.", image: "/images/categories/kota-stone-v2.jpg" },
  { title: "Designer Tiles Collection", description: "A wide range of ceramic and vitrified tiles in beautiful designs and finishes.", image: "/images/categories/vitrified-tiles.jpg" },
]
const testimonials = [
  { name: "John Richardson", role: "Architect, UK", quote: "We used these tiles in a hotel project, and the results were impressive — luxurious appearance with practical performance.", image: "author-1.jpg" },
  { name: "Kristin Watson", role: "Construction Consultant", quote: "We selected their tiles for a retail project and the feedback has been excellent. Durable, stylish, and perfect for high-traffic spaces.", image: "author-2.jpg" },
  { name: "Esther Howard", role: "Penthouse Owner", quote: "The tiles instantly elevated the look of our interiors. The finish is flawless, and the quality truly feels premium in every sense.", image: "author-3.jpg" },
  { name: "Floyd Miles", role: "Construction Consultant", quote: "The team helped me choose the perfect tiles for my living room. The installation was flawless and the space looks absolutely stunning!", image: "author-4.jpg" },
]
const qualities = [
  { title: "Verified Products", description: "Carefully selected materials you can trust.", icon: BadgeCheck },
  { title: "Product Categories", description: "A complete range for every stage of your project.", icon: Boxes },
  { title: "Direct Pricing", description: "Wholesale value without unnecessary middlemen.", icon: CircleDollarSign },
  { title: "Google Rating", description: "5.0/5.0 from Stoneway customers.", icon: Star },
]
const features = [
  { title: "Durable & Long-Lasting", description: "Surfaces selected to perform beautifully for years.", icon: ShieldCheck },
  { title: "Easy to Clean & Maintain", description: "Practical finishes that fit everyday life.", icon: Sparkles },
  { title: "Hygienic & Safe", description: "Thoughtful materials for comfortable living spaces.", icon: Droplets },
  { title: "Impact Resistant", description: "Dependable options for busy homes and projects.", icon: Waves },
]
const localStrength = [
  { title: "24*7", text: "Showroom open weekly", icon: Clock3 },
  { title: "5*", text: "Google rated in Bhopal", icon: Star },
  { title: "100%", text: "Direct wholesale pricing", icon: CircleDollarSign },
]

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduced = useReducedMotion()
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const updatePlayback = () => {
      if (document.hidden || reduced || window.matchMedia("(max-width: 700px)").matches) video.pause()
      else video.play().catch(() => undefined)
    }
    updatePlayback()
    document.addEventListener("visibilitychange", updatePlayback)
    window.addEventListener("resize", updatePlayback)
    return () => { document.removeEventListener("visibilitychange", updatePlayback); window.removeEventListener("resize", updatePlayback) }
  }, [reduced])
  return <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline preload="none" poster="https://stoneway-testing-home.netlify.app/images/about-us-body-image.jpg" aria-hidden="true"><source src="https://demo.awaikenthemes.com/assets/videos/tilux-hero-video.mp4" type="video/mp4" /></video>
}

export function PartnerMarquee() {
  const logos = ["company-supports-logo-1.svg", "company-supports-logo-2.svg", "company-supports-logo-3.svg", "company-supports-logo-4.svg", "company-supports-logo-5.svg"]
  return <section className="partner-section"><div className="page-container"><p className="partner-title">Partnering with Trusted Suppliers and Industry Experts</p></div><div className="partner-marquee" aria-label="Trusted supplier partners"><div className="partner-track">{[...logos, ...logos].map((logo, index) => <div className="partner-logo" key={`${logo}-${index}`}><Image src={imageUrl(logo)} alt={index < logos.length ? `Stoneway supplier partner ${index + 1}` : ""} width={148} height={56} aria-hidden={index >= logos.length} /></div>)}</div></div></section>
}

interface TestimonialItem {
  name: string
  role: string
  quote: string
  image?: string
  rating?: number
}

export function TestimonialCarousel() {
  const [items, setItems] = useState<TestimonialItem[]>(testimonials)
  const [active, setActive] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Interactive Form State
  const [authorName, setAuthorName] = useState("")
  const [authorRole, setAuthorRole] = useState("")
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [commentText, setCommentText] = useState("")

  const [isHovered, setIsHovered] = useState(false)
  const reduced = useReducedMotion()

  // Load reviews from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("stoneway_user_reviews")
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setItems([...parsed, ...testimonials])
        }
      }
    } catch {
      // ignore
    }
  }, [])

  // Auto-play interval - paused when modal is open or user is hovering
  useEffect(() => {
    if (reduced || isModalOpen || isHovered) return
    const interval = window.setInterval(
      () => setActive((current) => (current + 1) % items.length),
      7000
    )
    return () => window.clearInterval(interval)
  }, [reduced, items.length, isModalOpen, isHovered])

  const move = (direction: number) =>
    setActive((current) => (current + direction + items.length) % items.length)

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (!authorName.trim() || !commentText.trim()) return

    const newReview: TestimonialItem = {
      name: authorName.trim(),
      role: authorRole.trim() || "Verified Customer, Bhopal",
      quote: commentText.trim(),
      rating,
    }

    const updated = [newReview, ...items]
    setItems(updated)
    setActive(0)

    try {
      const existing = localStorage.getItem("stoneway_user_reviews")
      const parsed = existing ? JSON.parse(existing) : []
      parsed.unshift(newReview)
      localStorage.setItem("stoneway_user_reviews", JSON.stringify(parsed))
    } catch {
      // ignore
    }

    setAuthorName("")
    setAuthorRole("")
    setRating(5)
    setCommentText("")
    setIsModalOpen(false)

    setToastMessage("Thank you! Your review has been added.")
    setTimeout(() => setToastMessage(null), 4000)
  }

  const testimonial = items[active] || items[0]

  return (
    <section className="testimonial-section">
      <div className="testimonial-overlay" aria-hidden="true" />
      <div
        className="page-container testimonial-layout"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Column: Heading + Controls + Interactive Action */}
        <div className="testimonial-intro">
          <p className="eyebrow"><span />Kind words</p>
          <h2>Trusted voices that reflect</h2>
          <p>We build lasting relationships by making every project feel personal.</p>

          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-btn"
              aria-label="Previous testimonial"
              onClick={() => move(-1)}
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="carousel-btn"
              aria-label="Next testimonial"
              onClick={() => move(1)}
            >
              <ChevronRight />
            </button>

            {/* Interactive Add Review Button */}
            <button
              type="button"
              id="open-add-review-btn"
              onClick={() => setIsModalOpen(true)}
              className="add-review-btn"
            >
              <MessageSquarePlus className="w-4 h-4" /> Add Your Review
            </button>
          </div>

          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="review-toast"
            >
              <Check className="w-4 h-4" /> {toastMessage}
            </motion.div>
          )}
        </div>

        {/* Right Column: Active Testimonial Card */}
        <div className="testimonial-card" aria-live="polite">
          <Image
            src={imageUrl("testimonial-quote.svg")}
            alt=""
            width={48}
            height={40}
            className="quote-mark"
          />

          <motion.div
            key={active}
            initial={reduced ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={(_, info) => {
              if (info.offset.x < -70) move(1)
              else if (info.offset.x > 70) move(-1)
            }}
          >
            <div className="star-row" aria-label={`${testimonial.rating || 5} out of 5 stars`}>
              {Array.from({ length: testimonial.rating || 5 }, (_, index) => (
                <Star key={index} fill="currentColor" />
              ))}
            </div>

            <blockquote>“{testimonial.quote}”</blockquote>

            <div className="review-author">
              {testimonial.image ? (
                <Image
                  src={imageUrl(testimonial.image)}
                  alt={testimonial.name}
                  width={54}
                  height={54}
                />
              ) : (
                <div className="avatar-placeholder" aria-hidden="true">
                  {testimonial.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="carousel-dots" role="group" aria-label="Choose testimonial">
            {items.map((item, index) => (
              <button
                key={`${item.name}-${index}`}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={active === index}
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Review / Comment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
              aria-hidden="true"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-[500px] bg-white text-[#1D1D1D] rounded-2xl shadow-2xl p-6 sm:p-7 z-10"
              role="dialog"
              aria-modal="true"
              aria-labelledby="review-modal-title"
            >
              <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 mb-5">
                <div>
                  <h3 id="review-modal-title" className="text-xl font-bold text-[#1D1D1D]">
                    Share Your Review
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Your feedback helps others choose premium stone &amp; tile with confidence.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleAddReview} className="space-y-4">
                {/* Rating Stars */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                    Your Rating *
                  </label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-[#bc9656] hover:scale-110 transition-transform focus:outline-none"
                        aria-label={`Rate ${star} stars`}
                      >
                        <Star
                          className="w-6 h-6"
                          fill={(hoverRating || rating) >= star ? "currentColor" : "none"}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-xs font-bold text-[#6D1731]">
                      {hoverRating || rating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="rev-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="rev-name"
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Anand Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#6D1731] focus:ring-1 focus:ring-[#6D1731] outline-none text-sm text-[#1D1D1D]"
                  />
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="rev-role" className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                    Role / Location
                  </label>
                  <input
                    id="rev-role"
                    type="text"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    placeholder="e.g. Homeowner, Karond Bhopal or Architect"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#6D1731] focus:ring-1 focus:ring-[#6D1731] outline-none text-sm text-[#1D1D1D]"
                  />
                </div>

                {/* Comment */}
                <div>
                  <label htmlFor="rev-comment" className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                    Your Review &amp; Experience *
                  </label>
                  <textarea
                    id="rev-comment"
                    required
                    rows={4}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Share how the granite, tiles or delivery matched your project needs..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#6D1731] focus:ring-1 focus:ring-[#6D1731] outline-none text-sm text-[#1D1D1D] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-[#6D1731] hover:bg-[#831e3d] text-white text-xs font-bold shadow-md transition-colors inline-flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" /> Submit Review
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export function HomePage() {
  return <main>
    <section className="hero-section"><HeroVideo /><div className="hero-shade" /><div className="hero-content page-container"><div className="hero-title-block"><motion.p className="eyebrow hero-eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}><span />Crafting Timeless Stone Surfaces</motion.p><motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} aria-label="Bhopal Trusted Building Material Supplier"><span className="hero-marquee-line"><span className="hero-marquee-track"><span className="hero-marquee-group">Bhopal Trusted</span></span></span><span className="hero-marquee-line"><span className="hero-marquee-track hero-marquee-track-reverse"><span className="hero-marquee-group">Building Material Supplier</span></span></span></motion.h1><motion.div className="hero-chips" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.55 } } }}>{["Wholesale Rates", "13+ Google Reviews", "Walk-in Welcome", "Free Consultation"].map((chip) => <motion.span key={chip} variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}><Check aria-hidden="true" />{chip}</motion.span>)}</motion.div><PillLink href="/collection" light>Explore Our Collection</PillLink></div><motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>Premium quality granite, marble, Kota stone, vitrified tiles, tile adhesive &amp; all construction materials - at wholesale rates. Serving Bhopal, Karond &amp; Madhya Pradesh.</motion.p></div><a className="hero-scroll" href="#about" aria-label="Scroll to About Stoneway"><ArrowDown /></a></section>

    <section className="about-section section-pad" id="about"><div className="page-container about-grid"><div className="about-visual"><ImageReveal className="about-image-main"><StoneImage path="about-us-image-1.jpg" alt="Elegant stone flooring and interiors from Stoneway" priority /></ImageReveal><ImageReveal className="about-image-secondary"><StoneImage path="about-us-image-2.jpg" alt="Natural stone selected for a refined interior" /></ImageReveal><RotatingBadge text="STONEWAY • QUALITY • TRUST • " /><div className="manufacturing-card"><span>Manufacturing Quality</span><strong><CountUp value={95} suffix="%" /></strong></div></div><div className="about-copy"><p className="eyebrow"><span />About Stoneway</p><Reveal><h2>Your Trusted Stone &amp; Building Material Partner in Bhopal</h2><p className="body-copy">Find the right materials for your next project at Stoneway. From our showroom in Karond, we bring together quality granite, marble, Kota stone, tiles, adhesives and essential building materials - all at dependable wholesale prices.</p><p className="body-copy">Visit us on New Jail Road, next to Bharat Petrol Pump and opposite Maple Tree in Sanyog Nagar. Our team is here to help you compare finishes, plan quantities and make confident choices.</p></Reveal><div className="about-highlights"><div><Check /><span><strong>Wholesale Rates</strong><small>Direct value, no middlemen</small></span></div><div><Check /><span><strong>All Materials</strong><small>More choice under one roof</small></span></div></div><PillLink href="/about">More About Us</PillLink></div></div></section>

    <section className="products-section section-pad"><div className="page-container"><SectionHeading title={<>Complete Range of<br />Stone &amp; Building Materials in<br />Bhopal</>} light /><Stagger className="category-grid">{categories.map((category, index) => <StaggerItem key={category.name}><Link href="/collection" className="category-card"><div className="category-image"><StoneImage path={category.image} alt={`${category.name} materials available at Stoneway`} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 30vw" /><span className="category-number">0{index + 1}</span><CircleArrow /></div><div className="category-card-copy"><h3>{category.name}</h3><p>{category.copy}</p><span className="text-link">Explore category <ArrowUpRight /></span></div></Link></StaggerItem>)}</Stagger></div></section>

    <section className="why-section section-pad"><div className="page-container why-grid"><div className="why-copy"><p className="eyebrow"><span />Why choose Stoneway</p><Reveal><h2>Quality, Affordability, and Trust - All Under One Roof</h2><p className="body-copy">For homeowners, builders and contractors, finding the right stone and building materials should feel simple. Explore a considered range, get straight answers and enjoy pricing that makes sense.</p></Reveal><div className="client-proof"><div className="avatar-stack">{["author-1.jpg", "author-2.jpg", "author-3.jpg", "author-4.jpg"].map((image) => <Image key={image} src={imageUrl(image)} alt="" width={43} height={43} />)}</div><p><strong>Chosen by 2,000+ clients worldwide</strong><span>Across homes and projects in Bhopal</span></p></div><div className="global-stat"><span className="stat-icon"><MapPin /></span><strong><CountUp value={100} suffix="+" /></strong><span>Global presence</span></div><PillLink href="/about">Discover Stoneway</PillLink></div><ImageReveal className="why-image"><StoneImage path="why-choose-us-image.jpg" alt="Stoneway team-selected building materials for a polished home" /></ImageReveal></div></section>

    <section className="featured-section section-pad"><div className="page-container"><SectionHeading title="Top-Quality Stone & Tile Products Available in Bhopal" light /><div className="featured-grid">{featured.map((product, index) => <Reveal key={product.title} delay={index * 0.08}><Link href="/products" className="featured-card"><div className="featured-image"><StoneImage path={product.image} alt={product.title} sizes="(max-width: 720px) 90vw, 33vw" /><span className="product-tag">{product.category}</span><CircleArrow /></div><div className="featured-card-copy"><h3>{product.title}</h3><span>View Products <ArrowUpRight /></span></div></Link></Reveal>)}</div></div></section>

    <section className="quality-section section-pad"><div className="page-container"><div className="quality-top"><div><p className="eyebrow"><span />Made to be trusted</p><strong className="quality-metric"><CountUp value={98} suffix="%" /></strong><p>Client Satisfaction Rate</p></div><SectionHeading align="left" title="Building Materials You Can Rely On - Every Single Time" description="Thoughtful quality and dependable service at every step of your build." /></div><Stagger className="quality-grid">{qualities.map(({ title, description, icon: Icon }, index) => <StaggerItem key={title}><div className="quality-card"><div className="quality-icon"><Icon className="icon-default" /><Icon className="icon-hover" /></div><span className="quality-card-index">0{index + 1}</span><h3>{title}</h3><p>{description}</p></div></StaggerItem>)}</Stagger></div></section>

    <section className="showcase-section section-pad"><div className="page-container"><SectionHeading eyebrow="Explore our materials" title="Explore Our Stone & Tile Collections" description="Choose from a considered range of surfaces for homes and commercial projects." /><div className="showcase-grid">{showcase.map((item, index) => <Reveal key={item.title} delay={(index % 2) * 0.1}><Link href="/products" className={`showcase-card showcase-${index + 1}`}><div className="showcase-image"><StoneImage path={item.image} alt={item.title} /><CircleArrow /></div><div className="showcase-copy"><h3>{item.title}</h3><p>{item.description}</p><span className="text-link">View Product <ArrowUpRight /></span></div></Link></Reveal>)}</div></div></section>

    <section className="core-section section-pad"><div className="page-container core-grid"><div className="core-visual"><ImageReveal className="core-image"><StoneImage path="our-core-features-image.jpg" alt="A bright, timeless interior with natural stone details" /></ImageReveal><div className="review-badge"><div aria-label="5 out of 5 stars">★★★★★</div><strong><CountUp value={4.9} decimals={1} suffix="/5" /></strong><span>Based on 2,500 reviews</span></div></div><div className="core-copy"><p className="eyebrow"><span />The Stoneway standard</p><SectionHeading align="left" title="Why Our Stones and Tiles Last a Lifetime" description="Beautiful materials should be as dependable as they are timeless. We help you choose surfaces that work for the way you live." /><div className="feature-list">{features.map(({ title, description, icon: Icon }) => <div className="feature-row" key={title}><span className="feature-icon"><Icon /></span><div><h3>{title}</h3><p>{description}</p></div><Check className="feature-check" /></div>)}</div></div></div></section>

    <section className="contact-cta-section"><div className="contact-cta-image"><StoneImage path="about-us-body-image.jpg" alt="" /></div><div className="contact-cta-overlay" /><div className="page-container contact-cta-content"><RotatingBadge text="LET'S TALK • PLAN • BUILD • " /><div><p className="eyebrow eyebrow-light"><span />Get in touch</p><h2>Let&apos;s Discuss Your Granite, Marble &amp; Building Material Requirements in Bhopal</h2><p>Talk with our team for product recommendations, project quantities and a free quote.</p><a className="contact-phone" href="tel:+919109240966">+91 910 924 0966 <ArrowUpRight /></a></div><div className="cta-stats"><div><strong><CountUp value={6} suffix="+" /></strong><span>Categories</span></div><div><strong><CountUp value={13} suffix="+" /></strong><span>Google reviews</span></div><div><strong><CountUp value={5} suffix="*" /></strong><span>Local rating</span></div></div></div></section>

    <section className="local-section section-pad"><div className="page-container"><SectionHeading eyebrow="Rooted in Bhopal" title="Trusted by Builders, Contractors & Homeowners Across Bhopal" description="The kind of service that brings people back — and brings them together." /><Stagger className="local-grid">{localStrength.map(({ title, text, icon: Icon }) => <StaggerItem key={text}><div className="local-card"><span className="local-icon"><Icon /></span><h3>{title}</h3><p>{text}</p></div></StaggerItem>)}</Stagger></div></section>

    <TestimonialCarousel />

    <section className="map-section section-pad"><div className="page-container"><div className="map-heading"><SectionHeading eyebrow="Visit our showroom" title="Visit Our Granite & Marble Store in Bhopal" description="Discover premium granite, marble, tiles & adhesive collections at Stoneway for elegant residential and commercial spaces." /><PillLink href="https://maps.google.com/?q=23.3010903,77.3779117">Get Directions</PillLink></div><MapEmbed /></div></section>
  </main>
}

export { categories, featured, showcase }

export default HomePage
