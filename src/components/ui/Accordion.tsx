"use client"

import React, { useState } from "react"
import Image from "next/image"
import { cn } from "@/src/lib/utils"
import { assets } from "@/src/lib/assets"

export interface AccordionItemData {
  id: string
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItemData[]
  defaultOpenId?: string
  className?: string
}

export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || items[0]?.id || null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id
        const headerId = `heading-${item.id}`
        const panelId = `panel-${item.id}`

        return (
          <div
            key={item.id}
            className="border-b border-[rgba(29,29,29,0.08)] pb-5 transition-colors"
          >
            <h3 className="m-0 p-0 text-left">
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between gap-4 py-2 text-left font-heading text-[17px] sm:text-[19px] md:text-[20px] font-medium text-[#1D1D1D] hover:text-[#6D1731] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D1731] rounded-sm"
              >
                <span>{item.question}</span>
                <span
                  className={cn(
                    "shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300",
                    isOpen ? "rotate-180 bg-[#D5B471]/20" : "bg-[rgba(29,29,29,0.05)]"
                  )}
                  aria-hidden="true"
                >
                  <Image
                    src={isOpen ? assets.icons.minus.src : assets.icons.plus.src}
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#575757]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
