"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowUpRight, Check, Clock3, Compass, Globe, HeartHandshake, Mail, MapPin, Phone, Play, ShieldCheck, Sparkles, Star, Target } from "lucide-react"
import { productCategories } from "@/components/site/catalog-data"
import { PageBanner, CtaStrip, MapEmbed, PillLink, SectionHeading, StoneImage, imageUrl } from "@/components/site/shared"
import { CountUp, ImageReveal, Reveal, RotatingBadge, Stagger, StaggerItem } from "@/components/site/motion"
import { LeadForm } from "@/components/site/lead-forms"
import { PartnerMarquee, TestimonialCarousel } from "@/components/site/home-page"

const flags = [
  { name: "India", src: "/assets/why-us/flag-1.png" },
  { name: "Italy", src: "/assets/why-us/flag-2.png" },
  { name: "Spain", src: "/assets/why-us/flag-3.png" },
  { name: "Turkey", src: "/assets/why-us/flag-4.png" },
  { name: "Brazil", src: "/assets/why-us/flag-5.png" },
  { name: "Greece", src: "/assets/why-us/flag-6.png" },
  { name: "Vietnam", src: "/assets/why-us/flag-7.png" },
]

const clientAvatars = [
  { name: "Architect Verma", src: "/assets/people/client-1.jpg" },
  { name: "Er. Alok Sharma", src: "/assets/people/client-2.jpg" },
  { name: "Neha Patel", src: "/assets/people/client-3.jpg" },
  { name: "Rajesh Singhania", src: "/assets/people/client-4.jpg" },
]

export function AboutPage() {
  return (
    <main className="inner-page">
      {/* 1. Page Hero Banner */}
      <PageBanner title="About Us" crumb="About Us" />

      {/* 2. Section 1: About Stoneway / Story & Highlights */}
      <section className="section-pad about-story">
        <div className="page-container">
          <div className="about-hero-grid">
            {/* Left Column: Overlapping images + rotating circular badge */}
            <div className="about-image-stack">
              <ImageReveal className="about-main-img-box">
                <StoneImage
                  path="about-us-image-1.jpg"
                  alt="Stoneway Bhopal stone and interior materials"
                  sizes="(max-width: 768px) 90vw, 45vw"
                  priority
                />
              </ImageReveal>

              <div className="about-badge-pos">
                <RotatingBadge />
              </div>

              <ImageReveal className="about-secondary-img-box">
                <StoneImage
                  path="about-us-image-2.jpg"
                  alt="Finished bathroom interior featuring natural stone vanity"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </ImageReveal>
            </div>

            {/* Right Column: Copy, Wholesale Highlights & Progress Bar */}
            <div className="about-copy">
              <p className="eyebrow"><span />About Stoneway</p>
              <Reveal>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4 text-[#1d1d1d]">
                  Bhopal&apos;s Trusted Stone &amp; Building Material Partner
                </h2>
                <p className="body-copy text-base text-[#575757] leading-relaxed mb-6">
                  Stoneway is a premier stone &amp; building material wholesaler based in Karond, Bhopal. We bring together finest granite, Italian marble, Kota stone, and vitrified tiles for homes, architects, and builders.
                </p>
              </Reveal>

              {/* Highlights */}
              <ul className="checklist mb-6">
                <li>
                  <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#6D1731] text-white text-[11px] font-bold mt-0.5">
                    ✓
                  </span>
                  <span><strong>Wholesale Rates</strong>- Direct quarry sourcing with unmatched pricing</span>
                </li>
                <li>
                  <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#6D1731] text-white text-[11px] font-bold mt-0.5">
                    ✓
                  </span>
                  <span><strong>All Materials</strong> - From raw foundation to luxury interior finishes</span>
                </li>
              </ul>

              {/* Manufacturing Quality 95% Progress Bar */}
              <div className="about-progress-box">
                <div className="about-progress-label">
                  <span>Manufacturing Quality</span>
                  <span className="text-[#6D1731] font-bold">95%</span>
                </div>
                <div className="about-progress-track">
                  <motion.div
                    className="about-progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </div>

              <PillLink href="/collection">Explore Our Collection</PillLink>
            </div>
          </div>

          {/* Full-width Showroom Living Room Image */}
          <div className="mt-14 sm:mt-20">
            <div className="relative aspect-[16/7] min-h-[260px] sm:min-h-[400px] rounded-[22px] overflow-hidden shadow-xl">
              <StoneImage
                path="why-choose-us-image.jpg"
                alt="Modern living room with marble wall and luxury furniture at Stoneway showroom"
                sizes="(max-width: 1300px) 100vw, 1300px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 2: Our Process / Standard */}
      <section className="section-pad bg-[#fbf9f6] border-y border-[#eee8df]">
        <div className="page-container">
          <SectionHeading
            eyebrow="Our Process"
            title="Pioneering the standard in tiles & marble craft"
            description="Every slab and tile is inspected for density, polish consistency, and structural perfection before reaching your project site."
          />

          {/* Wide Bedroom Feature Image */}
          <div className="my-10 relative aspect-[16/7] md:aspect-[21/8] min-h-[240px] sm:min-h-[380px] rounded-[20px] overflow-hidden shadow-md">
            <StoneImage
              path="about-us-body-image.jpg"
              alt="High-end bedroom featuring precision-cut marble feature wall"
              sizes="(max-width: 1300px) 100vw, 1300px"
            />
          </div>

          {/* 3 Process Cards */}
          <div className="process-grid-3">
            <div className="process-step-card">
              <div className="process-step-icon">
                <ShieldCheck />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1d] mb-2 font-heading">01. Verified Quality</h3>
              <p className="text-sm text-[#66615c] leading-relaxed">
                Rigorous multi-point testing ensures every stone slab and tile box meets superior structural standards.
              </p>
              <div className="process-sub-list">
                <div className="process-sub-item">
                  <Check className="w-4 h-4 text-[#6D1731]" />
                  <span>Laser-cut precision edges</span>
                </div>
                <div className="process-sub-item">
                  <Check className="w-4 h-4 text-[#6D1731]" />
                  <span>Zero surface blemishes</span>
                </div>
              </div>
            </div>

            <div className="process-step-card">
              <div className="process-step-icon">
                <Sparkles />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1d] mb-2 font-heading">02. Custom Finishes &amp; Sizing</h3>
              <p className="text-sm text-[#66615c] leading-relaxed">
                Custom polishing, edge profiling, and cutting tailored to exact architect and designer specifications.
              </p>
              <div className="process-sub-list">
                <div className="process-sub-item">
                  <Check className="w-4 h-4 text-[#6D1731]" />
                  <span>High-gloss &amp; matte finishes</span>
                </div>
                <div className="process-sub-item">
                  <Check className="w-4 h-4 text-[#6D1731]" />
                  <span>Exact dimension matching</span>
                </div>
              </div>
            </div>

            <div className="process-step-card">
              <div className="process-step-icon">
                <Globe />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1d] mb-2 font-heading">03. Advanced Sourcing &amp; Wholesale</h3>
              <p className="text-sm text-[#66615c] leading-relaxed">
                Direct ties with quarries across India and global hubs ensure genuine wholesale rates without middle margins.
              </p>
              <div className="process-sub-list">
                <div className="process-sub-item">
                  <Check className="w-4 h-4 text-[#6D1731]" />
                  <span>Transparent square-foot pricing</span>
                </div>
                <div className="process-sub-item">
                  <Check className="w-4 h-4 text-[#6D1731]" />
                  <span>Bulk on-site logistics across MP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 3: Why Choose Us & Proof */}
      <section className="section-pad why-about">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Copy & Button */}
            <div className="lg:col-span-6">
              <p className="eyebrow"><span />Why Choose Us</p>
              <Reveal>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4 text-[#1d1d1d]">
                  Crafting timeless surfaces with reliability &amp; trust
                </h2>
                <p className="body-copy text-base text-[#575757] leading-relaxed mb-8">
                  From residential villas to commercial towers in Bhopal, we deliver reliable stone solutions backed by decades of regional expertise and direct quarry relationships.
                </p>
              </Reveal>
              <PillLink href="/collection">Discover Stoneway</PillLink>
            </div>

            {/* Right Column: Terrazzo Mirror Photo with Floating Avatar Badge */}
            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[460px] rounded-[22px] overflow-hidden shadow-xl border-4 border-white">
                <StoneImage
                  path="our-core-features-image.jpg"
                  alt="Terrazzo wall and round bathroom mirror"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Floating Avatar Card */}
                <div className="absolute bottom-5 left-5 right-5 sm:left-auto sm:right-6 sm:bottom-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/80 max-w-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex -space-x-2.5">
                      {clientAvatars.map((client, i) => (
                        <div key={i} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                          <Image src={client.src} alt={client.name} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="flex text-[#d5b979] text-xs font-bold tracking-widest">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-xs sm:text-[13px] font-semibold text-[#1d1d1d] m-0 leading-tight">
                    Trusted by 500+ Homeowners &amp; Architects in Bhopal
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Proof Cards */}
          <div className="proof-cards-grid">
            {/* Proof Card 1: Review */}
            <div className="proof-card">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex -space-x-2">
                    {clientAvatars.slice(0, 3).map((client, i) => (
                      <div key={i} className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-xs">
                        <Image src={client.src} alt={client.name} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-[#d5b979] text-xs font-bold tracking-widest">
                    ★★★★★
                  </div>
                </div>
                <blockquote className="text-[13px] sm:text-sm text-[#444] italic leading-relaxed m-0">
                  &ldquo;Stoneway delivered exceptional Italian marble on time for our Arera Colony villa. Flawless cutting and finish.&rdquo;
                </blockquote>
              </div>
              <p className="text-xs font-bold text-[#6D1731] mt-4 mb-0">
                - Er. Alok Sharma, Architect
              </p>
            </div>

            {/* Proof Card 2: 100+ Projects */}
            <div className="proof-card">
              <div>
                <div className="text-4xl sm:text-5xl font-bold font-heading text-[#1d1d1d] mb-1">
                  <CountUp value={100} suffix="+" />
                </div>
                <h4 className="text-base font-bold text-[#6D1731] mb-2 font-heading">
                  Landmark Projects Across MP
                </h4>
                <p className="text-xs sm:text-[13px] text-[#66615c] leading-relaxed m-0">
                  Supplying premium stone and tiles for premier residences, hotels, and commercial developments across Central India.
                </p>
              </div>
            </div>

            {/* Proof Card 3: Global Sourcing & Flags */}
            <div className="proof-card">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#6D1731] text-white flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#1d1d1d] m-0 font-heading">
                    Direct Wholesale Network
                  </h4>
                </div>
                <p className="text-xs text-[#66615c] m-0">
                  Quarry relationships across India and worldwide hubs:
                </p>
              </div>

              <div className="flags-strip">
                {flags.map((flag, idx) => (
                  <div key={idx} className="relative w-7 h-7 rounded-full overflow-hidden border border-black/10 shadow-xs" title={flag.name}>
                    <Image src={flag.src} alt={flag.name} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section 4: Dark Precision Craft Showcase */}
      <section className="dark-craft-showcase">
        <div className="page-container text-center">
          <p className="eyebrow eyebrow-light justify-center text-[#d5b979]">
            <span className="bg-[#d5b979]" />Discover More
          </p>
          <Reveal>
            <h2 className="text-white max-w-[760px] mx-auto text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-2 font-heading">
              Created through precision and tailored for your space
            </h2>
          </Reveal>

          {/* Circular Portal Frame */}
          <div className="craft-circle-portal group">
            <Image
              src={imageUrl("our-product-qualities-image-1.jpg")}
              alt="Artisan crafted stone and luxury marble craftsmanship"
              fill
              className="object-cover"
              sizes="320px"
            />
            <div className="craft-portal-play group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <PillLink href="/collection" light>
              Explore Our Craftsmanship
            </PillLink>
            <p className="mt-4 text-xs text-white/60 tracking-widest uppercase font-semibold">
              Precision Cut • Zero Tolerance • Karond Showroom, Bhopal
            </p>
          </div>
        </div>
      </section>

      {/* 6. Section 5: Brand Partners Marquee */}
      <PartnerMarquee />

      {/* 7. Section 6: Client Reviews & Testimonials Carousel */}
      <TestimonialCarousel />

      {/* 8. Section 7: Final CTA Strip */}
      <CtaStrip
        title="Let’s make your next project a little more beautiful."
        button="Get a Free Quote"
      />
    </main>
  )
}

const contactDetails = [
  { title: "Call Stoneway", detail: "+91 910 924 0966", href: "tel:+919109240966", icon: Phone },
  { title: "Visit the showroom", detail: "Plot No. 3, New Jail Rd, Karond, Bhopal 462038", href: "https://maps.google.com/?q=23.3010903,77.3779117", icon: MapPin },
  { title: "Showroom hours", detail: "Open 6 days a week. Walk-ins are welcome.", href: "#contact-form", icon: Clock3 },
]

export function ContactPage({ initialInterest = "" }: { initialInterest?: string }) {
  const searchParams = useSearchParams()
  const productParam = searchParams ? searchParams.get("product") ?? "" : ""
  const selectedInterest = initialInterest || (productCategories.includes(productParam as (typeof productCategories)[number]) ? productParam : "")

  return <main className="inner-page"><PageBanner title="Contact Us" /><section className="section-pad contact-page-section"><div className="page-container"><div className="contact-page-intro"><SectionHeading align="left" eyebrow="Let’s talk" title="Tell us what you’re planning." description="Questions about materials, pricing or quantities? Get in touch and our Bhopal team will be happy to help." /><div className="contact-shortcuts"><a className="pill-button" href="tel:+919109240966">Call Stoneway <span className="circle-arrow"><Phone /></span></a><a className="pill-button whatsapp-button" href="https://wa.me/919109240966" target="_blank" rel="noreferrer">Chat on WhatsApp <span className="circle-arrow"><ArrowUpRight /></span></a></div></div><div className="contact-info-grid">{contactDetails.map(({ title, detail, href, icon: Icon }) => <a className="contact-info-card" href={href} key={title}><span className="contact-info-icon"><Icon /></span><span><strong>{title}</strong><small>{detail}</small></span><ArrowUpRight className="contact-info-arrow" /></a>)}</div><div className="contact-form-layout" id="contact-form"><div className="contact-form-copy"><p className="eyebrow"><span />Send an enquiry</p><h2>We&apos;re here to help you choose well.</h2><p>Share a few details about what you need and we&apos;ll point you in the right direction.</p><div className="contact-note"><Compass /><span>Visit our showroom in Karond for a closer look at materials, finishes and available sizes.</span></div></div><div className="form-panel"><LeadForm kind="contact" initialInterest={selectedInterest} /></div></div></div></section><div className="contact-map"><div className="page-container"><SectionHeading eyebrow="Find us in Bhopal" title="A warm welcome is waiting at Stoneway." /><p className="map-address"><MapPin /> Plot No. 3, New Jail Road, Karond, Bhopal, Madhya Pradesh 462038</p></div><MapEmbed /></div></main>
}

export function CataloguePage() {
  return <main className="inner-page"><PageBanner title="Request a Catalogue" /><section className="section-pad catalogue-section"><div className="page-container catalogue-grid"><div className="catalogue-copy"><p className="eyebrow"><span />Materials for your next project</p><Reveal><h2>A closer look at the Stoneway collection.</h2><p>Tell us where to send your catalogue and which materials you&apos;re exploring. Our team can also help you compare options and plan your next visit.</p></Reveal><div className="catalogue-perks"><div><Check /><span>Granite, marble and Kota stone</span></div><div><Check /><span>Vitrified tiles and installation essentials</span></div><div><Check /><span>Building materials at wholesale rates</span></div></div><div className="catalogue-image"><StoneImage path="our-product-qualities-image-1.jpg" alt="Stone and tile surfaces from the Stoneway catalogue" /></div></div><div className="form-panel catalogue-form-panel"><div className="form-panel-heading"><h2>Request your catalogue</h2><p>Complete the form and our local team will get in touch.</p></div><LeadForm kind="catalogue" /></div></div></section><CtaStrip title="Prefer to talk it through? We’re one call away." button="Call Stoneway" /></main>
}

export function SimpleContentPage({ title, eyebrow, text }: { title: string; eyebrow: string; text: string }) {
  return <main className="inner-page"><PageBanner title={title} /><section className="section-pad simple-content"><div className="page-container"><p className="eyebrow"><span />{eyebrow}</p><h2>{text}</h2><p>For more information about Stoneway&apos;s collection and showroom in Bhopal, please contact our team.</p><Link className="pill-button" href="/contact">Contact Stoneway <span className="circle-arrow"><ArrowUpRight /></span></Link></div></section></main>
}

export { Target, Mail }
