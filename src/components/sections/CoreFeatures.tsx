import React from "react"
import Image from "next/image"
import { assets } from "@/src/lib/assets"
import { aboutPageData } from "@/src/data/about"
import { SectionHeading } from "@/src/components/ui/SectionHeading"
import { Button } from "@/src/components/ui/Button"
import { Accordion } from "@/src/components/ui/Accordion"
import { ScrollReveal } from "@/src/components/ui/ScrollReveal"

export function CoreFeatures() {
  const data = aboutPageData.features

  const accordionItems = data.features.map((f) => ({
    id: f.id,
    question: f.title,
    answer: f.description,
  }))

  return (
    <section
      aria-labelledby="core-features-heading"
      className="py-[70px] md:py-[120px] bg-white overflow-hidden relative"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Image with Rating Badge */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" distance={30}>
              <div className="relative aspect-[1/1.15] w-full rounded-[4px] overflow-hidden shadow-lg group">
                <Image
                  src={assets.features.main.src}
                  alt={assets.features.main.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Rating Badge Overlay */}
                <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 bg-white p-5 rounded-[10px] shadow-2xl border border-[rgba(29,29,29,0.06)] flex items-center gap-4 max-w-[320px] z-10">
                  <div className="w-12 h-12 rounded-full bg-[#D5B471]/20 flex items-center justify-center shrink-0">
                    <Image
                      src={assets.features.iconRating.src}
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-[24px] font-bold text-[#1D1D1D] leading-none">
                        {data.ratingScore}
                      </span>
                      <div className="flex text-[#D5B471] text-xs">★★★★★</div>
                    </div>
                    <p className="text-[13px] text-[#575757] mt-1 m-0">
                      {data.ratingReviews}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Title + Accordion Features + Learn More */}
          <div className="lg:col-span-6 lg:pl-6">
            <ScrollReveal direction="right" distance={30}>
              <SectionHeading
                eyebrow={data.eyebrow}
                title={data.title}
                intro={data.intro}
              />

              <div className="mt-8 mb-10">
                <Accordion items={accordionItems} defaultOpenId="hygienic" />
              </div>

              <div>
                <Button href={data.ctaHref}>{data.ctaText}</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
