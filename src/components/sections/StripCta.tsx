import React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/src/lib/utils"
import { assets } from "@/src/lib/assets"
import { aboutPageData } from "@/src/data/about"
import { ScrollReveal } from "@/src/components/ui/ScrollReveal"

interface StripCtaProps {
  variant?: "light" | "dark"
  className?: string
}

export function StripCta({ variant = "light", className }: StripCtaProps) {
  const data = aboutPageData.stripCta
  const isDark = variant === "dark"

  return (
    <div
      className={cn(
        "py-8 px-6 my-10 rounded-[4px] flex flex-wrap items-center justify-center gap-4 text-center transition-colors",
        isDark
          ? "bg-white/[0.04] border border-white/10 text-white"
          : "bg-white border border-[rgba(29,29,29,0.06)] shadow-sm text-[#1D1D1D]",
        className
      )}
    >
      <ScrollReveal direction="none" className="flex flex-wrap items-center justify-center gap-4">
        {/* Avatars */}
        <div className="flex items-center -space-x-3">
          <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
            <Image
              src={assets.people.advisor.src}
              alt={assets.people.advisor.alt}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#6D1731] border-2 border-white flex items-center justify-center text-white shadow-sm z-10">
            <Image
              src={assets.icons.phone.src}
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 brightness-0 invert"
            />
          </div>
        </div>

        {/* Text */}
        <p className="text-[16px] sm:text-[17px] font-medium m-0">
          <span className={isDark ? "text-white/90" : "text-[#1D1D1D]"}>
            {data.text}{" "}
          </span>
          <Link
            href={data.ctaHref}
            className={cn(
              "font-semibold underline underline-offset-4 transition-colors",
              isDark
                ? "text-[#D5B471] hover:text-white"
                : "text-[#6D1731] hover:text-[#1D1D1D]"
            )}
          >
            {data.ctaText}
          </Link>
        </p>
      </ScrollReveal>
    </div>
  )
}
