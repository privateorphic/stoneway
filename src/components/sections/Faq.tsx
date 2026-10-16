import React from "react"
import Image from "next/image"
import { assets } from "@/src/lib/assets"
import { siteConfig } from "@/src/lib/site"
import { aboutPageData } from "@/src/data/about"
import { SectionHeading } from "@/src/components/ui/SectionHeading"
import { Accordion } from "@/src/components/ui/Accordion"
import { ScrollReveal } from "@/src/components/ui/ScrollReveal"

export function Faq() {
  const data = aboutPageData.faq

  return (
    <section
      aria-labelledby="faq-heading"
      className="py-[70px] md:py-[120px] bg-[#F7F7F7] overflow-hidden"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Image with Floating Call Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" distance={30}>
              <div className="relative aspect-[1/1.25] w-full rounded-[4px] overflow-hidden shadow-lg group">
                <Image
                  src={assets.faq.main.src}
                  alt={assets.faq.main.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Floating Call Card */}
                <div className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6 bg-[#1D1D1D]/90 backdrop-blur-md p-6 rounded-[4px] border border-white/10 text-white shadow-2xl z-10">
                  <div className="flex items-start gap-4 pb-4 mb-4 border-b border-white/10">
                    <div className="w-12 h-12 rounded-full bg-[#6D1731] flex items-center justify-center shrink-0">
                      <Image
                        src={assets.faq.iconHeadphone.src}
                        alt=""
                        width={22}
                        height={22}
                        className="w-5 h-5 brightness-0 invert"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-[18px] font-medium text-white mb-1">
                        {data.ctaHeading}
                      </h3>
                      <p className="text-[13px] text-white/70 leading-relaxed m-0">
                        {data.ctaSubtext}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D5B471]/20 flex items-center justify-center shrink-0">
                      <Image
                        src={assets.icons.phone.src}
                        alt=""
                        width={18}
                        height={18}
                        className="w-4 h-4 brightness-0 invert"
                      />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-white/50">
                        {data.callTitle}
                      </span>
                      <a
                        href={siteConfig.phone.tel}
                        className="font-heading text-[17px] font-semibold text-[#D5B471] hover:underline"
                      >
                        {siteConfig.phone.display}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Title + 5 Accordion Questions */}
          <div className="lg:col-span-7 lg:pl-6">
            <ScrollReveal direction="right" distance={30}>
              <SectionHeading
                eyebrow={data.eyebrow}
                title={data.title}
              />

              <div className="mt-8">
                <Accordion items={data.questions} defaultOpenId="faq-1" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
