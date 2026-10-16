import React from "react"
import Link from "next/link"
import Image from "next/image"
import { assets } from "@/src/lib/assets"
import { siteConfig } from "@/src/lib/site"
import { aboutPageData } from "@/src/data/about"
import { SectionHeading } from "@/src/components/ui/SectionHeading"
import { ScrollReveal } from "@/src/components/ui/ScrollReveal"

export function ContactCta() {
  const data = aboutPageData.contactCta

  const getIcon = (key: string) => {
    switch (key) {
      case "iconWarehouse":
        return assets.cta.iconWarehouse.src
      case "iconProjects":
        return assets.cta.iconProjects.src
      case "iconDistributors":
        return assets.cta.iconDistributors.src
      default:
        return assets.icons.arrow.src
    }
  }

  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="py-[80px] md:py-[130px] bg-[#1D1D1D] text-white relative overflow-hidden"
    >
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <Image
          src={assets.hero.aboutHero2.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Row: Content Left, Rotating Badge Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 md:pb-24 border-b border-white/10">
          <div className="lg:col-span-8">
            <ScrollReveal direction="up">
              <SectionHeading
                eyebrow={data.eyebrow}
                title={data.title}
                intro={data.description}
                variant="dark"
              />

              {/* Call Link Box */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="text-[14px] uppercase tracking-wider text-white/60">
                  {data.phoneLabel}
                </span>
                <a
                  href={siteConfig.phone.tel}
                  className="font-heading text-[24px] sm:text-[30px] md:text-[34px] font-bold text-[#D5B471] hover:text-white transition-colors"
                >
                  {siteConfig.phone.display}
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <ScrollReveal direction="none" delay={200}>
              <Link
                href="/contact"
                aria-label="Contact Stoneway online"
                className="group relative block w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-white/20 hover:border-white/40 p-2 transition-all shadow-2xl"
              >
                <Image
                  src={assets.cta.circle.src}
                  alt={assets.cta.circle.alt}
                  fill
                  sizes="180px"
                  className="rounded-full animate-infinite-rotate group-hover:[animation-play-state:paused]"
                />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Row: 3 Stat Boxes with Diagonal Separators */}
        <div className="pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            {data.stats.map((stat, idx) => (
              <ScrollReveal
                key={stat.label}
                direction="up"
                delay={idx * 150}
                className="relative"
              >
                <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#6D1731] flex items-center justify-center shrink-0 shadow-lg">
                    <Image
                      src={getIcon(stat.iconKey)}
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6 brightness-0 invert"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-[38px] sm:text-[44px] font-bold text-white leading-none">
                      {stat.value}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-white/80 mt-2">
                      {stat.label}
                    </p>
                  </div>
                </div>

                {/* Angled Separator between items on desktop */}
                {idx < data.stats.length - 1 && (
                  <div
                    className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 rotate-12"
                    aria-hidden="true"
                  />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
