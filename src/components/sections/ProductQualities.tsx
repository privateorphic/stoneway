import React from "react"
import Image from "next/image"
import { assets } from "@/src/lib/assets"
import { aboutPageData } from "@/src/data/about"
import { SectionHeading } from "@/src/components/ui/SectionHeading"
import { StatCard } from "@/src/components/ui/StatCard"
import { ScrollReveal } from "@/src/components/ui/ScrollReveal"

export function ProductQualities() {
  const data = aboutPageData.qualities

  const getIcon = (key: string) => {
    switch (key) {
      case "iconEquipment":
        return assets.qualities.iconEquipment.src
      case "iconExperts":
        return assets.qualities.iconExperts.src
      case "iconReach":
        return assets.qualities.iconReach.src
      case "iconExperience":
        return assets.qualities.iconExperience.src
      default:
        return assets.icons.arrow.src
    }
  }

  const getBadgeBg = (key: string) => {
    switch (key) {
      case "badgeBg1":
        return assets.qualities.badgeBg1.src
      case "badgeBg2":
        return assets.qualities.badgeBg2.src
      case "badgeBg3":
        return assets.qualities.badgeBg3.src
      case "badgeBg4":
        return assets.qualities.badgeBg4.src
      default:
        return assets.qualities.badgeBg1.src
    }
  }

  return (
    <section
      aria-labelledby="product-qualities-heading"
      className="py-[70px] md:py-[120px] bg-[#F7F7F7] overflow-hidden"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Two Images + 98% Client Satisfaction Rate Overlay */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" distance={30}>
              <div className="relative flex items-end">
                {/* Secondary Image 1 */}
                <div className="relative w-[50%] z-10">
                  <div className="relative aspect-[1/1.2] rounded-[4px] overflow-hidden shadow-lg group">
                    <Image
                      src={assets.qualities.image1.src}
                      alt={assets.qualities.image1.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* 98% Satisfaction Overlay Card */}
                  <div className="mt-4 bg-[#6D1731] text-white p-6 rounded-[4px] shadow-xl text-center">
                    <h3 className="font-heading text-[36px] sm:text-[42px] font-bold leading-none mb-1">
                      {data.satisfactionRate}
                    </h3>
                    <p className="font-heading text-[15px] sm:text-[16px] font-medium text-white/90">
                      {data.satisfactionLabel}
                    </p>
                  </div>
                </div>

                {/* Primary Image 2 */}
                <div className="relative w-[60%] -ml-[10%] mb-12 z-20">
                  <div className="relative aspect-[1/1.4] rounded-l-[12px] border-[6px] border-r-0 border-b-0 border-[#F7F7F7] overflow-hidden shadow-2xl group">
                    <Image
                      src={assets.qualities.image2.src}
                      alt={assets.qualities.image2.alt}
                      fill
                      sizes="(max-width: 768px) 60vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Title + 4 Stat Cards */}
          <div className="lg:col-span-7 lg:pl-6">
            <ScrollReveal direction="right" distance={30}>
              <SectionHeading
                eyebrow={data.eyebrow}
                title={data.title}
                intro={data.intro}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {data.items.map((item) => (
                  <StatCard
                    key={item.id}
                    value={item.metric}
                    label={item.title}
                    description={item.description}
                    iconSrc={getIcon(item.iconKey)}
                    badgeBgSrc={getBadgeBg(item.badgeBgKey)}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
