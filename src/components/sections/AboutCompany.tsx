import React from "react"
import Image from "next/image"
import Link from "next/link"
import { assets } from "@/src/lib/assets"
import { aboutPageData } from "@/src/data/about"
import { Eyebrow } from "@/src/components/ui/Eyebrow"
import { Button } from "@/src/components/ui/Button"
import { ScrollReveal } from "@/src/components/ui/ScrollReveal"
import { TextReveal } from "@/src/components/ui/TextReveal"

export function AboutCompany() {
  const data = aboutPageData.company

  return (
    <section
      aria-labelledby="about-company-heading"
      className="py-[70px] md:py-[120px] bg-[#F7F7F7] overflow-hidden"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Overlapping Images + Rotating Badge */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" distance={30}>
              <div className="relative flex items-end">
                {/* Main Large Image */}
                <div className="relative w-[78%] z-10">
                  <div className="relative aspect-[1/1.4] overflow-hidden rounded-[4px] shadow-lg group">
                    <Image
                      src={assets.about.company.src}
                      alt={assets.about.company.alt}
                      fill
                      sizes="(max-width: 768px) 80vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Circular Rotating Contact Badge */}
                  <div className="absolute -top-6 -right-10 md:top-12 md:-right-12 z-20">
                    <Link
                      href="/contact"
                      aria-label="Contact Stoneway experts"
                      className="block rounded-full border-[6px] border-white shadow-xl hover:scale-105 transition-transform"
                    >
                      <Image
                        src={assets.cta.circle.src}
                        alt={assets.about.circleBadge.alt}
                        width={130}
                        height={130}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full animate-infinite-rotate hover:[animation-play-state:paused]"
                      />
                    </Link>
                  </div>
                </div>

                {/* Overlapping Secondary Image */}
                <div className="relative w-[42%] -ml-[20%] mb-6 z-20">
                  <div className="relative aspect-[1/0.8] overflow-hidden rounded-[12px] border-[6px] border-[#F7F7F7] shadow-xl group">
                    <Image
                      src={assets.about.body.src}
                      alt={assets.about.body.alt}
                      fill
                      sizes="(max-width: 768px) 40vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 lg:pl-4">
            <ScrollReveal direction="right" distance={30}>
              <Eyebrow>{data.eyebrow}</Eyebrow>

              <TextReveal
                as="h2"
                id="about-company-heading"
                text={data.title}
                className="font-heading text-[26px] sm:text-[34px] md:text-[44px] lg:text-[48px] font-medium leading-[1.14] text-[#1D1D1D] mb-5 tracking-tight"
              />

              <p className="text-[15px] sm:text-[16px] leading-[1.65em] text-[#575757] mb-8">
                {data.description}
              </p>

              {/* Body: Checkmarks + Progress Bar + Small Image */}
              <div className="pt-6 border-t border-[rgba(29,29,29,0.08)] space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  {/* Left Content inside body */}
                  <div className="flex-1 space-y-6">
                    {/* Checkmarks */}
                    <ul className="space-y-3 pb-6 border-b border-[rgba(29,29,29,0.08)]">
                      {data.checklist.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[15px] text-[#1D1D1D]">
                          <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#6D1731] text-white text-[11px] font-bold mt-0.5" aria-hidden="true">
                            ✓
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Progress Bar Card */}
                    <div className="bg-white p-5 rounded-[4px] border border-[rgba(29,29,29,0.06)] shadow-sm">
                      <div className="flex items-center justify-between font-heading font-medium text-[16px] text-[#1D1D1D] mb-2.5">
                        <span>{data.progressStat.label}</span>
                        <span className="font-semibold text-[#6D1731]">{data.progressStat.display}</span>
                      </div>
                      <div className="w-full h-2.5 bg-[#F0EFEB] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#6D1731] rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${data.progressStat.percentage}%` }}
                          role="progressbar"
                          aria-valuenow={data.progressStat.percentage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Body Image */}
                  <div className="shrink-0 w-full sm:w-[190px] h-[190px] relative rounded-[4px] overflow-hidden shadow-md">
                    <Image
                      src={assets.about.body.src}
                      alt={assets.about.body.alt}
                      fill
                      sizes="200px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Contact Us Button */}
                <div className="pt-2">
                  <Button href={data.ctaHref}>{data.ctaText}</Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
