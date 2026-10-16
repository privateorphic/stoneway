import React from "react"
import Image from "next/image"
import { cn } from "@/src/lib/utils"

interface IconCardProps {
  title: string
  description: string
  bullets?: [string, string]
  iconSrc: string
  className?: string
}

export function IconCard({
  title,
  description,
  bullets,
  iconSrc,
  className,
}: IconCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col sm:flex-row gap-5 pb-8 mb-8 border-b border-[rgba(29,29,29,0.08)] last:border-b-0 last:pb-0 last:mb-0 transition-colors",
        className
      )}
    >
      <div className="relative shrink-0 w-12 h-12 rounded-full bg-[#6D1731] flex items-center justify-center overflow-hidden">
        {/* Hover scale fill circle */}
        <span
          className="absolute inset-0 w-full h-full rounded-full bg-[#1D1D1D] scale-0 group-hover:scale-100 transition-transform duration-400 ease-in-out"
          aria-hidden="true"
        />
        <Image
          src={iconSrc}
          alt=""
          width={22}
          height={22}
          className="relative z-10 w-5 h-5 brightness-0 invert"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-heading text-[20px] font-medium text-[#1D1D1D] group-hover:text-[#6D1731] transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-[#575757]">
          {description}
        </p>

        {bullets && (
          <ul className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-x-8 text-[14px] text-[#575757]">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D1731] shrink-0" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
