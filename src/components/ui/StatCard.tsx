import React from "react"
import Image from "next/image"
import { cn } from "@/src/lib/utils"

interface StatCardProps {
  value: string
  label: string
  description?: string
  iconSrc?: string
  badgeBgSrc?: string
  variant?: "light" | "dark" | "accent"
  className?: string
}

export function StatCard({
  value,
  label,
  description,
  iconSrc,
  badgeBgSrc,
  variant = "light",
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[4px] p-6 sm:p-7 md:p-8 transition-all duration-400 ease-in-out",
        variant === "light" && [
          "bg-white border border-[rgba(29,29,29,0.06)] shadow-sm",
          "hover:border-transparent",
          // Slide in accent background on hover
          "before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-[#6D1731] before:transition-all before:duration-400 before:ease-in-out before:z-0",
          "hover:before:w-full",
        ],
        variant === "dark" && [
          "bg-white/5 border border-white/10 text-white backdrop-blur-md",
        ],
        variant === "accent" && [
          "bg-[#6D1731] text-white",
        ],
        className
      )}
    >
      {badgeBgSrc && (
        <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity">
          <Image src={badgeBgSrc} alt="" width={60} height={60} className="w-14 h-14" />
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[rgba(29,29,29,0.08)] group-hover:border-white/15 transition-colors">
          {iconSrc && (
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#6D1731]/10 group-hover:bg-white/15 transition-colors">
              <Image
                src={iconSrc}
                alt=""
                width={22}
                height={22}
                className="w-5 h-5 group-hover:brightness-0 group-hover:invert transition-all"
              />
            </div>
          )}
          <span className="font-heading text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#1D1D1D] group-hover:text-white transition-colors">
            {value}
          </span>
        </div>

        <h3 className="font-heading text-[18px] sm:text-[20px] font-medium text-[#1D1D1D] group-hover:text-white transition-colors">
          {label}
        </h3>

        {description && (
          <p className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-[#575757] group-hover:text-white/80 transition-colors">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
