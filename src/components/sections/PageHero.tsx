import React from "react"
import Image from "next/image"
import { assets } from "@/src/lib/assets"
import { aboutPageData } from "@/src/data/about"
import { Breadcrumb } from "@/src/components/ui/Breadcrumb"
import { ScrollReveal } from "@/src/components/ui/ScrollReveal"

export function PageHero() {
  const { title, breadcrumbs } = aboutPageData.hero

  return (
    <section
      aria-label="Page Header"
      className="relative min-h-[480px] md:min-h-[580px] lg:min-h-[620px] flex items-center justify-center pt-[220px] pb-[120px] md:pt-[270px] md:pb-[160px] overflow-hidden bg-[#1D1D1D]"
    >
      {/* Background Banner Image with Priority */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assets.hero.aboutHero1.src}
          alt={assets.hero.aboutHero1.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75 scale-105"
        />
        {/* Dark gradient overlay matching reference CSS */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(29, 29, 29, 0.95) 0%, rgba(29, 29, 29, 0.4) 45%, #1D1D1D 90%)",
          }}
        />
      </div>

      <div className="relative z-20 mx-auto max-w-[1300px] px-4 text-center">
        <ScrollReveal direction="up" distance={30}>
          <h1 className="font-heading text-[38px] sm:text-[48px] md:text-[60px] font-medium text-white leading-[1.1] mb-5 tracking-tight">
            {title}
          </h1>
          <Breadcrumb items={breadcrumbs} />
        </ScrollReveal>
      </div>
    </section>
  )
}
