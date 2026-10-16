# Stoneway "About Us" Production Page

A production-ready, accessible, high-performance "About Us" page for **Stoneway** (Granite, Tiles & Marble Supplier), built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

Modeled after the layout, interaction hierarchy, and aesthetic direction of the reference template, with completely original copy, unified branding, and custom-generated high-resolution assets stored in `/public/assets`.

---

## 🎨 Extracted Reference Design Tokens

The following design tokens were recorded directly from computed CSS styles of the reference site and implemented across `tailwind.config.ts` and `app/globals.css`:

### 1. Typography
- **Heading Font**: Clash Grotesk (`var(--font-clash)`, `Plus Jakarta Sans` / `ClashGrotesk`)
  - H1 (Desktop): `60px`, `line-height: 1.1em`, `font-weight: 500`, tracking: `-0.02em`
  - H1 (Mobile): `32px - 38px`, `line-height: 1.2em`
  - H2 (Desktop): `48px`, `line-height: 1.12em`, `font-weight: 500`
  - H2 (Mobile): `26px - 34px`, `line-height: 1.2em`
  - H3 / Card Titles: `20px`, `line-height: 1.25em`, `font-weight: 500`
  - Eyebrow: `14px`, `font-weight: 500`, `letter-spacing: 0.02em`
- **Body Font**: Inter (`var(--font-inter)`, `"Inter", sans-serif`)
  - Body Text: `15px - 16px`, `line-height: 1.65em`, `color: #575757`
  - Subtext / Legal: `13px - 14px`, `line-height: 1.5em`

### 2. Palette & Contrast (WCAG AA Compliant)
- **Primary / Charcoal**: `#1D1D1D` (Dark sections, headings, hover states)
- **Secondary / Card White**: `#FFFFFF` (Pure white cards, elevated panels)
- **Base Background**: `#F7F7F7` (Warm architectural stone off-white)
- **Body Text**: `#575757` (High readability neutral stone)
- **Accent Wine / Terracotta**: `#6D1731` (Primary CTA buttons, active states, bullet markers)
- **Accent Secondary Gold**: `#D5B471` (Arrow badge, rating stars, eyebrow dot, phone links)
- **Divider Light**: `rgba(29, 29, 29, 0.08)` (`#1D1D1D14`)
- **Divider Dark**: `rgba(255, 255, 255, 0.10)` (`#FFFFFF14`)

### 3. Layout & Geometry
- **Container Max Width**: `1300px` (`max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8`)
- **Section Vertical Padding**:
  - Desktop: `120px 0`
  - Mobile (<=991px): `70px 0`
- **Border Radii**:
  - Cards & Images: `4px`
  - Overlapping Badges & Secondary Insets: `12px`
  - Buttons & Pill Tags: `100px` (or `rounded-full`)
  - Avatars & Badges: `50%`

### 4. Interactive Micro-Interactions
- **Pill Button Sweep**: `#6D1731` background with a sliding `#1D1D1D` background fill on hover, plus an internal `#D5B471` circular icon arrow that rotates `45deg`.
- **Circular Contact Badge**: Rotates continuously (`animation: infiniteRotate 20s linear infinite`), pauses on hover, links directly to `/contact`.
- **Global Network Marquee**: Smooth infinite horizontal scrolling marquee displaying 7 export partner flag badges; automatically pauses under `prefers-reduced-motion: reduce` and on user hover.
- **Scroll Reveal**: Lightweight `IntersectionObserver` hook triggering CSS opacity and transform transitions without heavy animation dependencies.

---

## 📁 Project Architecture & Components

```
stoneway-main/
├── app/
│   ├── about/
│   │   ├── layout.tsx         # Dedicated Header, skip link, main container, and Footer
│   │   └── page.tsx           # Composes sections sequentially + SEO metadata + JSON-LD
│   ├── globals.css            # Tailwind v4 theme & responsive micro-animations
│   └── layout.tsx             # Root layout with next/font Google fonts
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx     # Sticky navigation with brand logo & catalogue CTA
│   │   │   ├── MobileMenu.tsx # Accessible drawer (focus trap, Esc key, scroll lock)
│   │   │   └── Footer.tsx     # 4-col footer, newsletter form, socials, and legal bar
│   │   ├── ui/
│   │   │   ├── Button.tsx     # Reference button with sweep fill & rotating arrow
│   │   │   ├── Eyebrow.tsx    # Pill badge with gold status indicator dot
│   │   │   ├── SectionHeading.tsx # Reusable section title with H2 and description
│   │   │   ├── Breadcrumb.tsx # Semantic nav + ol breadcrumbs with aria-current
│   │   │   ├── StatCard.tsx   # Metric card with hover slide-in accent
│   │   │   ├── IconCard.tsx   # Values item with scaling icon circle and bullets
│   │   │   ├── Accordion.tsx  # Accessible FAQ & features collapsible with +/- icons
│   │   │   └── ScrollReveal.tsx # Lightweight IntersectionObserver transition hook
│   │   └── sections/
│   │       ├── PageHero.tsx   # 1. Page hero with dark gradient and breadcrumbs
│   │       ├── AboutCompany.tsx # 2. Overlapping images, rotating badge, quality stat
│   │       ├── OurValues.tsx  # 3. 3 core value cards with distinct copy
│   │       ├── WhyChooseUs.tsx# 4. Client avatars, quote, global reach & 7-flag marquee
│   │       ├── StripCta.tsx   # 5 & 7. Reusable advisor avatar quote banner
│   │       ├── ProcessSteps.tsx# 6. Dark 3-step workflow with alternating alignment
│   │       ├── ProductQualities.tsx # 8. 98% satisfaction rate overlay + 4 stat cards
│   │       ├── CoreFeatures.tsx # 9. 4.9/5 rating badge + 4 performance feature items
│   │       ├── ContactCta.tsx # 10. Dark CTA with call prompt and 3 warehouse hubs
│   │       └── Faq.tsx        # 11. 5 technical stone questions + floating call card
│   ├── data/
│   │   └── about.ts           # Type-safe copy and data models (no hardcoded JSX text)
│   └── lib/
│       ├── assets.ts          # Centralized asset manifest mapping src + alt text
│       ├── site.ts            # Unified company configuration & ONE site-wide phone
│       └── utils.ts           # Class merging helper (clsx + tailwind-merge)
├── public/assets/             # Clean folder structure with all temporary real assets
├── ASSETS_TODO.md             # Complete replacement checklist for client photos
├── netlify.toml               # Netlify App Router build configuration
└── tailwind.config.ts         # Design tokens extracted from reference
```

---

## 📞 Site-Wide Phone Consistency

As required, a single phone number is defined once in `src/lib/site.ts` and consumed universally:
- **Raw Number**: `+91 910 924 0966`
- **Formatted Display**: `+(91) 910 924 0966`
- **Tel Link**: `tel:+919109240966`

---

## 🚀 Running Locally

Ensure you have **Node.js 20+** installed.

```bash
# Navigate to the project directory
cd stoneway-main

# Install dependencies
npm install

# Start the development server
npm run dev

# Open http://localhost:3000/about in your browser
```

### Production Build & Verification

```bash
# Run production build and type checking
npm run build

# Start production server
npm run start
```

---

## 🌐 Deploying to Netlify

The repository includes a production-ready `netlify.toml` file configured for the Next.js App Router:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"
```

### Deployment Steps:
1. Push your repository to GitHub / GitLab / Bitbucket.
2. In Netlify, click **Add new site** > **Import an existing project**.
3. Select this repository. Netlify will automatically detect `netlify.toml`.
4. Deploy the site. All SSR/ISR routes and static assets under `/public/assets` will be deployed automatically.
