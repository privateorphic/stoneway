"use client"

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"

export function Reveal({ children, className, delay = 0, y = 28 }: { children: ReactNode; className?: string; delay?: number; y?: number }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: reduced ? 0 : 0.62, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={{ hidden: {}, show: { transition: { staggerChildren: reduced ? 0 : 0.09 } } }}>{children}</motion.div>
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} variants={{ hidden: { opacity: 0, y: reduced ? 0 : 24 }, show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] } } }}>{children}</motion.div>
}

export function CountUp({ value, suffix = "", label, decimals = 0 }: { value: number; suffix?: string; label?: string; decimals?: number }) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })
  const count = useMotionValue(0)
  const display = useTransform(count, (latest) => `${latest.toFixed(decimals)}${suffix}`)
  useEffect(() => {
    if (!inView) return
    if (reduced) { count.set(value); return }
    const controls = animate(count, value, { duration: 1.35, ease: "easeOut" })
    return () => controls.stop()
  }, [count, inView, reduced, value])
  return <motion.span ref={ref} aria-label={label ?? `${value}${suffix}`} className="count-value">{display}</motion.span>
}

export function RotatingBadge({ text }: { text?: string }) {
  const reduced = useReducedMotion()
  return (
    <Link
      href="/contact"
      className={`rotating-badge ${reduced ? "motion-still" : ""}`}
      aria-label="Contact Stoneway"
    >
      <Image
        src="/assets/cta/cta-circle.svg"
        alt="Contact Stoneway"
        width={130}
        height={130}
        className="w-full h-full rounded-full animate-infinite-rotate hover:[animation-play-state:paused]"
      />
    </Link>
  )
}

export function ImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { clipPath: "inset(10% 0 10% 0 round 18px)", opacity: 0.55 }} whileInView={{ clipPath: "inset(0% 0 0% 0 round 18px)", opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}
