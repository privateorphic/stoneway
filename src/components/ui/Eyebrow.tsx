import React from "react"
import { cn } from "@/src/lib/utils"

interface EyebrowProps {
  children: React.ReactNode
  variant?: "dark" | "light"
  className?: string
}

export function Eyebrow({ children, variant = "light", className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center text-[14px] font-medium leading-none capitalize rounded-full px-5 py-2 pl-9 mb-4 transition-colors",
        variant === "light" && "border border-[rgba(29,29,29,0.12)] text-[#1D1D1D] bg-transparent",
        variant === "dark" && "border border-[rgba(255,255,255,0.14)] text-white bg-transparent",
        className
      )}
    >
      <span
        className="absolute left-4 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#D5B471]"
        aria-hidden="true"
      />
      {children}
    </span>
  )
}
