import React from "react"
import Image from "next/image"
import { assets } from "@/src/lib/assets"
import { aboutPageData } from "@/src/data/about"
import { SectionHeading } from "@/src/components/ui/SectionHeading"
import { ScrollReveal } from "@/src/components/ui/ScrollReveal"

export function ProcessSteps() {
  const data = aboutPageData.process

  const getImage = (key: string) => {
    switch (key) {
      case "step1":
        return assets.process.step1
      case "step2":
        return assets.process.step2
      case "step3":
        return assets.process.step3
      default:
        return assets.process.step1
    }
  }

  return (
    <section
      aria-labelledby="work-process-heading"
      className="py-[70px] md:py-[120px] bg-[#1D1D1D] text-white overflow-hidden relative"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            align="center"
            variant="dark"
          />
        </ScrollReveal>

        {/* Three Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-12 md:mt-16">
          {data.steps.map((step, idx) => {
            const stepImage = getImage(step.imageKey)
            const isMiddle = idx === 1

            return (
              <ScrollReveal
                key={step.stepNumber}
                direction="up"
                delay={idx * 150}
                className="h-full"
              >
                <div
                  className={`flex flex-col items-center text-center h-full justify-between gap-6 ${
                    isMiddle ? "md:flex-col-reverse" : "md:flex-col"
                  }`}
                >
                  {/* Step Image (Circle with blur ring) */}
                  <div className="p-3.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-105">
                    <div className="w-[180px] h-[180px] sm:w-[210px] sm:h-[210px] rounded-full overflow-hidden relative">
                      <Image
                        src={stepImage.src}
                        alt={stepImage.alt}
                        fill
                        sizes="240px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex flex-col items-center max-w-[340px]">
                    <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#D5B471] mb-4">
                      {step.stepNumber}
                    </span>
                    <h3 className="font-heading text-[20px] sm:text-[22px] font-medium text-white mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] leading-relaxed text-white/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
