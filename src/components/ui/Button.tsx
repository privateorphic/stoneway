import React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/src/lib/utils"
import { assets } from "@/src/lib/assets"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  className?: string
  arrow?: boolean
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  arrow = true,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "group relative inline-flex items-center justify-between overflow-hidden rounded-full font-semibold text-[16px] leading-none transition-all duration-400 ease-in-out cursor-pointer select-none",
    // Primary matches .btn-default from reference
    variant === "primary" && [
      "bg-[#6D1731] text-white pl-6 pr-14 py-4 md:py-[18px]",
      "hover:text-white",
      "after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-0 after:h-full after:bg-[#1D1D1D] after:transition-all after:duration-400 after:ease-in-out after:-z-10",
      "hover:after:right-auto hover:after:left-0 hover:after:w-full",
    ],
    variant === "secondary" && [
      "bg-[#D5B471] text-[#1D1D1D] pl-6 pr-14 py-4 md:py-[18px]",
      "hover:bg-[#1D1D1D] hover:text-white",
    ],
    variant === "outline" && [
      "border border-white/20 text-white pl-6 pr-14 py-4 md:py-[18px] backdrop-blur-sm",
      "hover:bg-white hover:text-[#1D1D1D]",
    ],
    className
  )

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <span
          className={cn(
            "absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#D5B471] transition-transform duration-400 ease-in-out z-10",
            "group-hover:rotate-45"
          )}
          aria-hidden="true"
        >
          <Image
            src={assets.icons.arrow.src}
            alt=""
            width={12}
            height={12}
            className="w-3 h-3 md:w-3.5 md:h-3.5"
          />
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  )
}
