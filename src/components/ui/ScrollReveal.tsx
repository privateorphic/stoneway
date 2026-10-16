"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/src/lib/utils"

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  className?: string
  as?: React.ElementType
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 20,
  className,
  as: Component = "div",
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    // If user prefers reduced motion, never hide or animate
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsRevealed(true)
      return
    }

    const element = ref.current
    if (!element) return

    // Check if element is already in the viewport on reload
    const rect = element.getBoundingClientRect()
    const inInitialViewport = rect.top < window.innerHeight && rect.bottom > 0

    // Elements already visible in the initial viewport should NOT flash or hide
    if (inInitialViewport) {
      setIsRevealed(true)
      return
    }

    // Only elements below the fold will start hidden and animate on scroll
    setShouldAnimate(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  const isHidden = shouldAnimate && !isRevealed

  const getTransform = () => {
    if (!isHidden) return "none"
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`
      case "down":
        return `translateY(-${distance}px)`
      case "left":
        return `translateX(${distance}px)`
      case "right":
        return `translateX(-${distance}px)`
      case "none":
      default:
        return "none"
    }
  }

  return (
    <Component
      ref={ref}
      style={{
        opacity: isHidden ? 0 : 1,
        transform: getTransform(),
        transition: shouldAnimate
          ? `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
          : "none",
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  )
}
