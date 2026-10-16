import React from "react"
import Link from "next/link"
import { cn } from "@/src/lib/utils"

export interface BreadcrumbItemProps {
  label: string
  href: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItemProps[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("inline-block", className)}>
      <ol className="flex flex-wrap items-center justify-center gap-2 text-[15px] sm:text-[16px] text-white">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.href} className="inline-flex items-center">
              {index > 0 && (
                <span className="mx-2 text-white/50 select-none" aria-hidden="true">
                  /
                </span>
              )}
              {item.current || isLast ? (
                <span className="capitalize font-medium text-white" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="capitalize text-white/80 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
