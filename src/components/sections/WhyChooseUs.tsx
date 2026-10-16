import React from "react"
import Image from "next/image"
import { assets } from "@/src/lib/assets"
import { aboutPageData } from "@/src/data/about"
import { Eyebrow } from "@/src/components/ui/Eyebrow"
import { Button } from "@/src/components/ui/Button"
import { ScrollReveal } from "@/src/components/ui/ScrollReveal"

export function WhyChooseUs() {
  const data = aboutPageData.whyChooseUs

  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="py-[70px] md:py-[120px] bg-[#F7F7F7] overflow-hidden"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Top Header Row: Split across 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <ScrollReveal direction="up">
              <Eyebrow>{data.eyebrow}</Eyebrow>
              <h2
                id="why-choose-us-heading"
                className="font-heading text-[26px] sm:text-[34px] md:text-[44px] lg:text-[48px] font-medium leading-[1.12] text-[#1D1D1D] tracking-tight"
              >
                {data.title}
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start lg:items-end justify-between">
            <ScrollReveal direction="up" delay={100}>
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#575757] max-w-[540px] mb-6">
                {data.description}
              </p>
              <Button href={data.ctaHref}>{data.ctaText}</Button>
            </ScrollReveal>
          </div>
        </div>

        {/* Content Row: Left Image Box + Right Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Main Image with Overlapping Client Banner */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" distance={30} className="h-full">
              <div className="relative h-full min-h-[420px] md:min-h-[520px] rounded-[4px] overflow-hidden shadow-md group">
                <Image
                  src={assets.whyUs.main.src}
                  alt={assets.whyUs.main.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlapping Floating Banner */}
                <div className="absolute left-4 right-4 bottom-4 md:left-auto md:right-8 md:bottom-8 md:max-w-[340px] bg-[#1D1D1D]/90 backdrop-blur-md p-5 rounded-[4px] border border-white/10 text-white shadow-xl z-10">
                  <div className="flex items-center -space-x-2 mb-3">
                    {assets.people.clients.map((client, idx) => (
                      <div
                        key={idx}
                        className="w-10 h-10 rounded-full border-2 border-[#1D1D1D] overflow-hidden relative"
                      >
                        <Image
                          src={client.src}
                          alt={client.alt}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-[14px] font-medium leading-snug text-white/90">
                    {data.clientBannerText}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3 Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: Quote Block with Client Avatars */}
              <ScrollReveal direction="up" delay={100}>
                <div className="bg-white p-6 sm:p-7 rounded-[4px] border border-[rgba(29,29,29,0.06)] shadow-sm flex flex-col justify-between h-full min-h-[220px]">
                  <div className="flex items-center -space-x-2 mb-4">
                    {assets.people.clients.map((client, idx) => (
                      <div
                        key={idx}
                        className="w-9 h-9 rounded-full border-2 border-white overflow-hidden relative shadow-sm"
                      >
                        <Image
                          src={client.src}
                          alt=""
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="font-heading text-[17px] sm:text-[18px] font-medium leading-[1.4] text-[#1D1D1D]">
                    {data.quote}
                  </p>
                </div>
              </ScrollReveal>

              {/* Card 2: 100+ Global Presence Counter */}
              <ScrollReveal direction="up" delay={200}>
                <div className="bg-white p-6 sm:p-7 rounded-[4px] border border-[rgba(29,29,29,0.06)] shadow-sm flex flex-col justify-between h-full min-h-[220px]">
                  <div>
                    <h3 className="font-heading text-[38px] sm:text-[44px] font-bold text-[#1D1D1D] leading-none mb-2">
                      {data.presenceStat.value}
                    </h3>
                    <h4 className="font-heading text-[20px] font-medium text-[#1D1D1D]">
                      {data.presenceStat.title}
                    </h4>
                  </div>
                  <p className="mt-4 pt-4 border-t border-[rgba(29,29,29,0.08)] text-[14px] leading-relaxed text-[#575757]">
                    {data.presenceStat.description}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Card 3: Export Network Marquee */}
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white p-6 sm:p-8 rounded-[4px] border border-[rgba(29,29,29,0.06)] shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#6D1731] flex items-center justify-center shrink-0">
                    <Image
                      src={assets.whyUs.iconGlobal.src}
                      alt=""
                      width={22}
                      height={22}
                      className="w-5 h-5 brightness-0 invert"
                    />
                  </div>
                  <h3 className="font-heading text-[18px] sm:text-[20px] font-medium text-[#1D1D1D]">
                    {data.exportNetwork.title}
                  </h3>
                </div>

                {/* 7-flag Auto-scrolling Marquee */}
                <div className="pt-4 border-t border-[rgba(29,29,29,0.08)] overflow-hidden relative">
                  <div className="flex gap-6 w-max animate-marquee motion-reduce:[animation-play-state:paused] hover:[animation-play-state:paused]">
                    {/* First pass */}
                    {assets.whyUs.flags.map((flag, idx) => (
                      <div
                        key={`flag-a-${idx}`}
                        className="flex flex-col items-center gap-2 shrink-0 group/flag"
                      >
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md relative transition-transform group-hover/flag:scale-110">
                          <Image
                            src={flag.src}
                            alt={flag.alt}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                        <span className="text-[12px] font-medium text-[#575757]">
                          {flag.name}
                        </span>
                      </div>
                    ))}
                    {/* Duplicate pass for continuous marquee loop */}
                    {assets.whyUs.flags.map((flag, idx) => (
                      <div
                        key={`flag-b-${idx}`}
                        className="flex flex-col items-center gap-2 shrink-0 group/flag"
                        aria-hidden="true"
                      >
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md relative transition-transform group-hover/flag:scale-110">
                          <Image
                            src={flag.src}
                            alt=""
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                        <span className="text-[12px] font-medium text-[#575757]">
                          {flag.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
