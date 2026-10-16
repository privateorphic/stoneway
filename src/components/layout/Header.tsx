"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { assets } from "@/src/lib/assets"
import { siteConfig } from "@/src/lib/site"
import { Button } from "@/src/components/ui/Button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "w-full z-50 transition-all duration-300",
        isScrolled
          ? "fixed top-0 md:top-4 left-0 right-0 px-0 md:px-4"
          : "absolute top-4 md:top-8 left-0 right-0 px-4"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-[1300px] overflow-hidden transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md rounded-none md:rounded-full border border-black/5"
            : "bg-white rounded-2xl md:rounded-full shadow-sm",
          isMobileMenuOpen && "rounded-2xl shadow-xl"
        )}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 md:px-8 md:py-4">
          {/* Logo Left */}
          <Link
            href="/"
            className="shrink-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D1731] rounded-lg"
          >
            <Image
              src={assets.brand.logo.src}
              alt={assets.brand.logo.alt}
              width={197}
              height={60}
              priority
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Center */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {siteConfig.navLinks.slice(0, 3).map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-[16px] font-semibold transition-colors duration-200 capitalize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D1731] rounded-sm py-1 px-1",
                    isActive
                      ? "text-[#6D1731]"
                      : "text-[#1D1D1D] hover:text-[#6D1731]"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button Right */}
          <div className="hidden lg:flex items-center">
            <Button href="/catalogue" className="text-[15px] py-3.5 px-6 pr-14">
              Request A Catalogue
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            className={cn(
              "lg:hidden flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D1731]",
              isMobileMenuOpen
                ? "w-11 h-11 rounded-xl bg-[#6D1731] text-white shadow-sm"
                : "w-11 h-11 rounded-full bg-[#F7F7F7] border border-[rgba(29,29,29,0.08)] text-[#1D1D1D] hover:bg-[#1D1D1D] hover:text-white"
            )}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white stroke-[2.5]" />
            ) : (
              <Image
                src={assets.icons.menu.src}
                alt=""
                width={20}
                height={20}
                className="w-5 h-5 pointer-events-none"
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown (Matches reference screenshot) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="lg:hidden bg-[#6D1731] text-white px-7 py-6 overflow-hidden"
            >
              <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation Menu">
                {siteConfig.navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[20px] font-bold text-white tracking-wide transition-opacity hover:opacity-85 py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
