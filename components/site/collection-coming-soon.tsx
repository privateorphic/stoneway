"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight, Check, Clock3, Eye, MessageSquare, Phone, Sparkles } from "lucide-react"
import { PageBanner, CtaStrip, PillLink, StoneImage, imageUrl } from "@/components/site/shared"
import { Reveal } from "@/components/site/motion"
import { PartnerMarquee } from "@/components/site/home-page"

import type { CollectionItemData } from "./collection-data"


export function CollectionComingSoonPage({ data, slug }: { data: CollectionItemData; slug: string }) {
  const [contactInput, setContactInput] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (contactInput.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <main className="inner-page">
      {/* 1. Page Banner */}
      <PageBanner title={data.title} crumb={`Our Collection / ${data.title}`} />

      {/* 2. Main Coming Soon Showcase Section */}
      <section className="section-pad bg-[#fbf9f6] border-b border-[#eee8df] overflow-hidden">
        <div className="page-container">
          <div className="max-w-[900px] mx-auto text-center mb-12 sm:mb-16">
            {/* Glowing Coming Soon Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f4ecef] border border-[#e4ccd4] text-[#6D1731] text-xs font-bold tracking-wider uppercase mb-6 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6D1731] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6D1731]" />
              </span>
              Coming Soon • New Collection Launch
            </div>

            <Reveal>
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#1d1d1d] mb-5 leading-tight">
                {data.title}
              </h1>
              <p className="text-lg sm:text-xl text-[#6D1731] font-medium mb-4">
                {data.subtitle}
              </p>
              <p className="text-base text-[#575757] leading-relaxed max-w-2xl mx-auto">
                {data.description}
              </p>
            </Reveal>

            {/* Launch Progress Meter */}
            <div className="mt-8 p-5 bg-white rounded-2xl border border-[#ebe5dc] shadow-sm max-w-md mx-auto">
              <div className="flex justify-between items-center text-xs font-semibold text-[#1d1d1d] mb-2">
                <span className="flex items-center gap-1.5">
                  <Clock3 className="w-3.5 h-3.5 text-[#6D1731]" />
                  Curating &amp; Sourcing Phase
                </span>
                <span className="text-[#6D1731] font-bold">85% Complete</span>
              </div>
              <div className="w-full h-2.5 bg-[#eee8df] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#6D1731] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <p className="text-[11px] text-[#77716d] mt-2 mb-0">
                {data.expectedLaunch}
              </p>
            </div>

            {/* Priority Notification & Early Access Form */}
            <div className="mt-8 max-w-lg mx-auto">
              {submitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm font-medium flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! We&apos;ve added you to the preview list. Our team will contact you once slabs arrive.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="text"
                    required
                    value={contactInput}
                    onChange={(e) => setContactInput(e.target.value)}
                    placeholder="Enter your phone or email for early catalog"
                    className="flex-1 px-4 py-3 text-sm bg-white border border-[#dcd6cc] rounded-full outline-none focus:border-[#6D1731] transition-colors shadow-xs"
                  />
                  <button
                    type="submit"
                    className="pill-button !py-3 !px-6 whitespace-nowrap cursor-pointer justify-center"
                  >
                    Notify Me First <ArrowUpRight className="w-4 h-4 ml-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* 3. Sneak Peek Preview Cards */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="eyebrow"><span />Sneak Peek</p>
                <h2 className="font-heading text-2xl sm:text-3xl font-medium text-[#1d1d1d] m-0">
                  Styles Arriving in this Collection
                </h2>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#77716d] font-medium bg-white px-3 py-1.5 rounded-full border border-[#ebe5dc]">
                <Eye className="w-3.5 h-3.5 text-[#6D1731]" />
                Showroom Samples Incoming
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.previewImages.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-[#ebe5dc] shadow-sm hover:shadow-md transition-shadow group flex flex-col"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-[#e8e2d8]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-[#6D1731] shadow-xs">
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#1d1d1d] mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#66615c] leading-relaxed m-0">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#f0ebe3] flex items-center justify-between text-xs font-semibold text-[#6D1731]">
                      <span>Coming Soon</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Key Highlights & Specs Box */}
          <div className="bg-white rounded-2xl border border-[#e5dfd5] p-6 sm:p-10 shadow-sm mb-14">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1d1d1d] mb-4">
              Why Wait for Stoneway&apos;s {data.title}?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#6D1731] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-[#444] font-medium leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Direct Contact & Explore Alternatives */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#eeeae4] rounded-2xl border border-[#e0dad0]">
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1d1d1d] m-0">
                Need tiles or stone right now for your project?
              </h3>
              <p className="text-xs sm:text-sm text-[#66615c] mt-1 mb-0">
                We have over 500+ slabs and in-stock vitrified tiles available for immediate loading at our Karond showroom.
              </p>
            </div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <Link href="/collection" className="pill-button !py-2.5 !px-5 text-xs">
                Browse In-Stock Collection <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
              <a
                href="https://wa.me/919109240966"
                target="_blank"
                rel="noreferrer"
                className="pill-button !py-2.5 !px-5 text-xs bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Chat on WhatsApp <MessageSquare className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Partner Marquee */}
      <PartnerMarquee />

      {/* 7. Bottom CTA */}
      <CtaStrip
        title="Can't wait? Visit our Karond showroom today."
        button="Contact Showroom"
      />
    </main>
  )
}
