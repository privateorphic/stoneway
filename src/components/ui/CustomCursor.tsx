"use client"

import React, { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [cursorType, setCursorType] = useState<"default" | "hover" | "drag">("default")
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Smooth spring physics for outer trailing follower
  const springConfig = { damping: 24, stiffness: 220, mass: 0.6 }
  const followerX = useSpring(mouseX, springConfig)
  const followerY = useSpring(mouseY, springConfig)

  const visibleRef = React.useRef(false)

  useEffect(() => {
    // Disable on touch devices and small screens (tablets/phones)
    const isTouchOrSmall = window.matchMedia("(pointer: coarse), (max-width: 1024px)").matches
    if (isTouchOrSmall) {
      setIsTouchDevice(true)
      return
    }
    setIsTouchDevice(false)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visibleRef.current) {
        visibleRef.current = true
        setIsVisible(true)
      }

      // Check element under cursor for special interactive states
      const target = e.target as HTMLElement | null
      if (!target) return

      const dragTarget = target.closest('[data-cursor="drag"]')
      if (dragTarget) {
        setCursorType("drag")
        return
      }

      const interactiveTarget = target.closest('a, button, [role="button"], input, textarea, select, label')
      if (interactiveTarget) {
        setCursorType("hover")
        return
      }

      setCursorType("default")
    }

    const handleMouseLeave = () => {
      visibleRef.current = false
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      visibleRef.current = true
      setIsVisible(true)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [mouseX, mouseY])

  if (isTouchDevice) return null

  return (
    <>
      {/* 1. Precise Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#6D1731]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "drag" ? 0 : cursorType === "hover" ? 6 : 8,
          height: cursorType === "drag" ? 0 : cursorType === "hover" ? 6 : 8,
          opacity: isVisible && cursorType !== "drag" ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* 2. Trailing Follower (morphs into Drag bubble or hover halo) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center font-medium text-xs select-none"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "drag" ? 68 : cursorType === "hover" ? 48 : 36,
          height: cursorType === "drag" ? 68 : cursorType === "hover" ? 48 : 36,
          backgroundColor:
            cursorType === "drag"
              ? "rgba(29, 29, 29, 0.95)"
              : cursorType === "hover"
              ? "rgba(109, 23, 49, 0.12)"
              : "rgba(109, 23, 49, 0.05)",
          borderColor:
            cursorType === "drag"
              ? "rgba(255, 255, 255, 0.15)"
              : cursorType === "hover"
              ? "rgba(109, 23, 49, 0.45)"
              : "rgba(109, 23, 49, 0.25)",
          borderWidth: cursorType === "drag" ? 0 : 1.5,
          borderStyle: "solid",
          opacity: isVisible ? 1 : 0,
          color: "#FFFFFF",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {cursorType === "drag" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[12px] tracking-wide text-white font-medium"
          >
            Drag
          </motion.span>
        )}
      </motion.div>
    </>
  )
}
