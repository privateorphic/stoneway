"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { assets } from "@/src/lib/assets"
import { siteConfig } from "@/src/lib/site"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const drawerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const prevPathname = useRef(pathname)

  // Auto-close on route change
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname
      onClose()
    }
  }, [pathname, onClose])

  // Body scroll lock & focus trap
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus()
    }, 50)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
        return
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[100] lg:hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Container matching screenshot */}
          <motion.div
            ref={drawerRef}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-3 left-4 right-4 max-w-[500px] mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Top Bar: Logo Left, Burgundy Square X Right */}
            <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
              <Link href="/" onClick={onClose} className="flex items-center">
                <Image
                  src={assets.brand.logo.src}
                  alt={assets.brand.logo.alt}
                  width={170}
                  height={55}
                  priority
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="w-11 h-11 rounded-xl bg-[#6D1731] hover:bg-[#831e3d] text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D1731]"
              >
                <X className="w-5 h-5 text-white stroke-[2.5]" />
              </button>
            </div>

            {/* Burgundy Body: Exact 4 options */}
            <div className="bg-[#6D1731] text-white px-7 py-6">
              <nav className="flex flex-col space-y-4" aria-label="Mobile main navigation">
                {siteConfig.navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="text-[20px] font-bold text-white tracking-wide transition-opacity hover:opacity-85 py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
