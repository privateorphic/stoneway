import React from "react"
import Image from "next/image"
import { assets } from "@/src/lib/assets"
import { aboutPageData } from "@/src/data/about"
import { SectionHeading } from "@/src/components/ui/SectionHeading"
import { IconCard } from "@/src/components/ui/IconCard"
import { ScrollReveal } from "@/src/components/ui/ScrollReveal"

export function OurValues() {
  const data = aboutPageData.values

  const getIcon = (key: string) => {
    switch (key) {
      case "iconQuality":
        return assets.values.iconQuality.src
      case "iconIntegrity":
        return assets.values.iconIntegrity.src
      case "iconInnovation":
        return assets.values.iconInnovation.src
      default:
        return assets.icons.arrow.src
    }
  }

  return (
    <section
      aria-labelledby="values-heading"
      className="py-[70px] md:py-[120px] bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading + Large Image */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <ScrollReveal direction="up" distance={25}>
              <SectionHeading
                eyebrow={data.eyebrow}
                title={data.title}
                intro={data.intro}
              />
              <div className="relative aspect-[16/9] w-full rounded-[4px] overflow-hidden shadow-md group mt-6">
                <Image
                  src={assets.values.main.src}
                  alt={assets.values.main.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Three Value Cards */}
          <div className="lg:col-span-6 lg:pl-6">
            <ScrollReveal direction="up" delay={150} distance={25}>
              <div className="space-y-6">
                {data.items.map((item) => (
                  <IconCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    bullets={item.bullets}
                    iconSrc={getIcon(item.iconKey)}
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
