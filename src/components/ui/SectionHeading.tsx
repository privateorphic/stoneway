import React from "react"
import { cn } from "@/src/lib/utils"
import { Eyebrow } from "./Eyebrow"
import { TextReveal } from "./TextReveal"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  intro?: string
  align?: "left" | "center"
  variant?: "light" | "dark"
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  variant = "light",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const isDark = variant === "dark"

  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        align === "center" && "text-center mx-auto max-w-[760px]",
        className
      )}
    >
      {eyebrow && <Eyebrow variant={variant}>{eyebrow}</Eyebrow>}
      <TextReveal
        as="h2"
        text={title}
        align={align}
        className={cn(
          "font-heading text-[26px] sm:text-[34px] md:text-[44px] lg:text-[48px] font-medium leading-[1.12] tracking-tight",
          isDark ? "text-white" : "text-[#1D1D1D]",
          titleClassName
        )}
      />
      {intro && (
        <p
          className={cn(
            "mt-4 text-[15px] sm:text-[16px] leading-[1.65em]",
            isDark ? "text-white/80" : "text-[#575757]"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
