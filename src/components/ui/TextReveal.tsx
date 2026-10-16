"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/src/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  id?: string
  align?: "left" | "center" | "right"
}

function Word({
  word,
  range,
  progress,
}: {
  word: string
  range: [number, number]
  progress: any
}) {
  const opacity = useTransform(progress, range, [0.2, 1])

  return (
    <span className="relative inline-block mr-[0.28em] last:mr-0">
      <span className="opacity-20 select-none" aria-hidden="true">
        {word}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0"
      >
        {word}
      </motion.span>
    </span>
  )
}

export function TextReveal({
  text,
  className,
  as: Component = "h2",
  id,
  align = "left",
}: TextRevealProps) {
  const targetRef = useRef<HTMLHeadingElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 90%", "start 45%"],
  })

  const words = text.split(" ")

  return (
    <Component
      ref={targetRef as any}
      id={id}
      className={cn(
        "inline-flex flex-wrap items-baseline",
        align === "center" && "justify-center text-center",
        className
      )}
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = Math.min(1, start + 1 / words.length)
        return (
          <Word
            key={`${word}-${i}`}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
          />
        )
      })}
    </Component>
  )
}
