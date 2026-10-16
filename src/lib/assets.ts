export interface Asset {
  src: string
  alt: string
  width?: number
  height?: number
}

export const assets = {
  brand: {
    logo: {
      src: "/assets/brand/logo.png",
      alt: "Stoneway - Stones Are For Eternity",
      width: 197,
      height: 60,
    },
    logoLight: {
      src: "/assets/brand/logo-light.png",
      alt: "Stoneway - Stones Are For Eternity",
      width: 197,
      height: 60,
    },
    favicon: {
      src: "/assets/brand/favicon.ico",
      alt: "Stoneway Favicon",
      width: 32,
      height: 32,
    },
    ogImage: {
      src: "/assets/brand/og-image.jpg",
      alt: "Stoneway Natural Stone & Tiles Showcase",
      width: 1200,
      height: 630,
    },
  },
  hero: {
    aboutHero1: {
      src: "/assets/hero/about-hero-1.jpg",
      alt: "Stoneway architectural stone and marble workshop banner",
      width: 1920,
      height: 800,
    },
    aboutHero2: {
      src: "/assets/hero/about-hero-2.jpg",
      alt: "Polished natural stone surface texture",
      width: 1200,
      height: 800,
    },
  },
  about: {
    company: {
      src: "/assets/about/about-company.jpg",
      alt: "Premium granite and marble slab selection at Stoneway",
      width: 800,
      height: 1150,
    },
    body: {
      src: "/assets/about/about-body.jpg",
      alt: "Artisan precision craftsmanship and stone cutting",
      width: 500,
      height: 600,
    },
    circleBadge: {
      src: "/assets/cta/cta-circle.svg",
      alt: "Rotate to contact Stoneway stone experts",
      width: 130,
      height: 130,
    },
  },
  values: {
    main: {
      src: "/assets/values/values-main.jpg",
      alt: "High-grade natural marble block showing geological veining",
      width: 900,
      height: 510,
    },
    iconQuality: {
      src: "/assets/values/icon-quality.svg",
      alt: "",
      width: 24,
      height: 24,
    },
    iconIntegrity: {
      src: "/assets/values/icon-integrity.svg",
      alt: "",
      width: 24,
      height: 24,
    },
    iconInnovation: {
      src: "/assets/values/icon-innovation.svg",
      alt: "",
      width: 24,
      height: 24,
    },
  },
  whyUs: {
    main: {
      src: "/assets/why-us/why-us-main.jpg",
      alt: "Stoneway wholesale stone slab warehouse and inspection facility",
      width: 800,
      height: 915,
    },
    iconGlobal: {
      src: "/assets/why-us/icon-global.svg",
      alt: "",
      width: 24,
      height: 24,
    },
    flags: [
      { src: "/assets/why-us/flag-1.png", alt: "United States export partner", name: "United States" },
      { src: "/assets/why-us/flag-2.png", alt: "United Arab Emirates export partner", name: "United Arab Emirates" },
      { src: "/assets/why-us/flag-3.png", alt: "United Kingdom export partner", name: "United Kingdom" },
      { src: "/assets/why-us/flag-4.png", alt: "Germany export partner", name: "Germany" },
      { src: "/assets/why-us/flag-5.png", alt: "India domestic & export distribution", name: "India" },
      { src: "/assets/why-us/flag-6.png", alt: "Canada export partner", name: "Canada" },
      { src: "/assets/why-us/flag-7.png", alt: "Australia export partner", name: "Australia" },
    ],
  },
  people: {
    clients: [
      { src: "/assets/people/client-1.jpg", alt: "Architect client profile", width: 44, height: 44 },
      { src: "/assets/people/client-2.jpg", alt: "Commercial developer client", width: 44, height: 44 },
      { src: "/assets/people/client-3.jpg", alt: "Interior designer client", width: 44, height: 44 },
      { src: "/assets/people/client-4.jpg", alt: "Custom residential builder", width: 44, height: 44 },
    ],
    advisor: {
      src: "/assets/people/advisor.jpg",
      alt: "Senior Stoneway materials consultation advisor",
      width: 48,
      height: 48,
    },
  },
  process: {
    step1: {
      src: "/assets/process/process-1.jpg",
      alt: "Architectural consultation and material grade selection",
      width: 500,
      height: 500,
    },
    step2: {
      src: "/assets/process/process-2.jpg",
      alt: "Direct quarry block sourcing and rigorous physical grading",
      width: 500,
      height: 500,
    },
    step3: {
      src: "/assets/process/process-3.jpg",
      alt: "Automated bridge saw cutting and micro-diamond edge polishing",
      width: 500,
      height: 500,
    },
  },
  qualities: {
    image1: {
      src: "/assets/qualities/qualities-1.jpg",
      alt: "Computerized bridge saw machinery cutting Kota stone",
      width: 600,
      height: 720,
    },
    image2: {
      src: "/assets/qualities/qualities-2.jpg",
      alt: "Polished luxury marble flooring tiles inspection",
      width: 800,
      height: 1160,
    },
    iconEquipment: {
      src: "/assets/qualities/icon-equipment.svg",
      alt: "",
      width: 24,
      height: 24,
    },
    iconExperts: {
      src: "/assets/qualities/icon-experts.svg",
      alt: "",
      width: 24,
      height: 24,
    },
    iconReach: {
      src: "/assets/qualities/icon-reach.svg",
      alt: "",
      width: 24,
      height: 24,
    },
    iconExperience: {
      src: "/assets/qualities/icon-experience.svg",
      alt: "",
      width: 24,
      height: 24,
    },
    badgeBg1: { src: "/assets/qualities/badge-bg-1.svg", alt: "", width: 50, height: 50 },
    badgeBg2: { src: "/assets/qualities/badge-bg-2.svg", alt: "", width: 50, height: 50 },
    badgeBg3: { src: "/assets/qualities/badge-bg-3.svg", alt: "", width: 50, height: 50 },
    badgeBg4: { src: "/assets/qualities/badge-bg-4.svg", alt: "", width: 50, height: 50 },
  },
  features: {
    main: {
      src: "/assets/features/features-main.jpg",
      alt: "Seamless porcelain stone tile installation in living area",
      width: 800,
      height: 936,
    },
    iconRating: {
      src: "/assets/features/icon-rating.svg",
      alt: "",
      width: 20,
      height: 20,
    },
  },
  cta: {
    circle: {
      src: "/assets/cta/cta-circle.svg",
      alt: "Interactive rotating link to contact Stoneway",
      width: 140,
      height: 140,
    },
    iconWarehouse: {
      src: "/assets/cta/icon-warehouse.svg",
      alt: "",
      width: 24,
      height: 24,
    },
    iconProjects: {
      src: "/assets/cta/icon-projects.svg",
      alt: "",
      width: 24,
      height: 24,
    },
    iconDistributors: {
      src: "/assets/cta/icon-distributors.svg",
      alt: "",
      width: 24,
      height: 24,
    },
  },
  faq: {
    main: {
      src: "/assets/faq/faq-main.jpg",
      alt: "Stoneway technical consultation and architectural advisory office",
      width: 800,
      height: 1024,
    },
    iconHeadphone: {
      src: "/assets/faq/icon-headphone.svg",
      alt: "",
      width: 24,
      height: 24,
    },
  },
  icons: {
    phone: { src: "/assets/icons/phone.svg", alt: "", width: 20, height: 20 },
    arrow: { src: "/assets/icons/arrow.svg", alt: "", width: 14, height: 14 },
    plus: { src: "/assets/icons/plus.svg", alt: "", width: 18, height: 18 },
    minus: { src: "/assets/icons/minus.svg", alt: "", width: 18, height: 18 },
    menu: { src: "/assets/icons/menu.svg", alt: "", width: 24, height: 24 },
    close: { src: "/assets/icons/close.svg", alt: "", width: 24, height: 24 },
    socialPinterest: { src: "/assets/icons/social-pinterest.svg", alt: "Pinterest", width: 18, height: 18 },
    socialX: { src: "/assets/icons/social-x.svg", alt: "X", width: 18, height: 18 },
    socialFacebook: { src: "/assets/icons/social-facebook.svg", alt: "Facebook", width: 18, height: 18 },
    socialInstagram: { src: "/assets/icons/social-instagram.svg", alt: "Instagram", width: 18, height: 18 },
  },
} as const
