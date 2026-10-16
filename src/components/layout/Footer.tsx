"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { assets } from "@/src/lib/assets"
import { siteConfig } from "@/src/lib/site"
import { aboutPageData } from "@/src/data/about"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  const getSocialIcon = (key: string) => {
    switch (key) {
      case "social-pinterest":
        return assets.icons.socialPinterest.src
      case "social-x":
        return assets.icons.socialX.src
      case "social-facebook":
        return assets.icons.socialFacebook.src
      case "social-instagram":
        return assets.icons.socialInstagram.src
      default:
        return assets.icons.arrow.src
    }
  }

  return (
    <footer className="bg-[#1D1D1D] text-white pt-20 md:pt-28 pb-10 border-t border-white/5 relative z-10">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Brand Card - Left col */}
          <div className="lg:col-span-4 bg-white/[0.04] backdrop-blur-md p-8 md:p-10 rounded-[4px] border border-white/10 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5B471] rounded-lg">
                <Image
                  src={assets.brand.logoLight.src}
                  alt={assets.brand.logoLight.alt}
                  width={197}
                  height={60}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-[15px] leading-relaxed text-white/75">
                {aboutPageData.footer.brandDescription}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="font-heading text-[18px] font-medium text-white mb-4">
                Follow Us On Social:
              </h3>
              <nav className="flex items-center gap-3" aria-label="Social media channels">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Stoneway on ${social.name}`}
                    className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-[#6D1731] hover:border-[#6D1731] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5B471]"
                  >
                    <Image
                      src={getSocialIcon(social.iconKey)}
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4 brightness-0 invert"
                    />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Links & Newsletter - Right cols */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-12 lg:space-y-0 lg:pl-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
              {/* Quick Links */}
              <div>
                <h3 className="font-heading text-[19px] font-medium text-white mb-6">
                  Quick Links
                </h3>
                <ul className="space-y-3.5 text-[15px] text-white/75">
                  {siteConfig.quickLinks.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-[#D5B471] transition-colors inline-flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D5B471] opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Collection */}
              <div>
                <h3 className="font-heading text-[19px] font-medium text-white mb-6">
                  Our Collection
                </h3>
                <ul className="space-y-3.5 text-[15px] text-white/75">
                  {siteConfig.collectionLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-[#D5B471] transition-colors inline-flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D5B471] opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="font-heading text-[19px] font-medium text-white mb-4">
                  Subscribe To Newsletter
                </h3>
                <p className="text-[14px] leading-relaxed text-white/70 mb-5">
                  Subscribe to receive seasonal stone catalog updates, quarry lot releases, and architectural tile guides.
                </p>

                <form onSubmit={handleSubmit} className="relative">
                  <div className="flex items-center border-b border-white/20 pb-2">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email Address"
                      required
                      className="w-full bg-transparent text-[14px] text-white placeholder-white/40 focus:outline-none pr-3"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to Stoneway newsletter"
                      className="shrink-0 w-8 h-8 rounded-full bg-[#D5B471] hover:bg-[#6D1731] flex items-center justify-center text-[#1D1D1D] hover:text-white transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <Image
                        src={assets.icons.arrow.src}
                        alt=""
                        width={12}
                        height={12}
                        className="w-3 h-3 group-hover:rotate-45 transition-transform"
                      />
                    </button>
                  </div>
                  {isSubscribed && (
                    <p className="text-xs text-[#D5B471] mt-2 font-medium" role="status">
                      ✓ Thank you for subscribing to Stoneway updates.
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* Middle Policy Strip */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h4 className="font-heading text-[17px] text-white font-medium">
                {aboutPageData.footer.policyTitle}
              </h4>
              <nav className="flex items-center gap-6 text-[14px] text-white/70" aria-label="Legal navigation">
                {aboutPageData.footer.legalLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:text-[#D5B471] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-[14px] text-white/50">
          <p>{aboutPageData.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
