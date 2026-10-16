export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  phone: {
    raw: string
    display: string
    tel: string
    label: string
  }
  email: string
  address: {
    street: string
    locality: string
    region: string
    postalCode: string
    country: string
    formatted: string
  }
  geo: {
    latitude: number
    longitude: number
  }
  socials: {
    name: string
    href: string
    iconKey: string
  }[]
  navLinks: {
    href: string
    label: string
  }[]
  quickLinks: {
    href: string
    label: string
  }[]
  collectionLinks: {
    href: string
    label: string
  }[]
  stats: {
    clients: string
    experience: string
    satisfactionRate: string
    qualityPercent: string
    rating: string
    reviewsCount: string
    globalReach: string
    warehouses: string
    projectsCompleted: string
    distributors: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Stoneway",
  tagline: "Stones Are For Eternity",
  description:
    "Stoneway is a premier wholesale supplier and manufacturer of granite, marble, Kota stone, and precision tiles. High-durability natural surfaces engineered for enduring spaces.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://stoneway-testing-home.netlify.app",
  phone: {
    raw: "+91 910 924 0966",
    display: "+(91) 910 924 0966",
    tel: "+919109240966",
    label: "+(91) 910 924 0966",
  },
  email: "contact@stonewaybhopal.com",
  address: {
    street: "Plot No. 3, New Jail Road, Karond",
    locality: "Bhopal",
    region: "Madhya Pradesh",
    postalCode: "462038",
    country: "IN",
    formatted: "Plot No. 3, New Jail Road, Karond, Bhopal, MP 462038",
  },
  geo: {
    latitude: 23.3010903,
    longitude: 77.3779117,
  },
  socials: [
    { name: "Pinterest", href: "https://www.pinterest.com/", iconKey: "social-pinterest" },
    { name: "X", href: "https://x.com/", iconKey: "social-x" },
    { name: "Facebook", href: "https://www.facebook.com/", iconKey: "social-facebook" },
    { name: "Instagram", href: "https://www.instagram.com/", iconKey: "social-instagram" },
  ],
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/catalogue", label: "Request A Catalogue" },
  ],
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ],
  collectionLinks: [
    { href: "/collection/living-room-tiles", label: "Living Room Tiles" },
    { href: "/collection/kitchen-tiles", label: "Kitchen Tiles" },
    { href: "/collection/bathroom-tiles", label: "Bathroom Tiles" },
    { href: "/collection/bedroom-tiles", label: "Bedroom Tiles" },
    { href: "/collection/outdoor-tiles", label: "Outdoor Tiles" },
  ],
  stats: {
    clients: "2,000+",
    experience: "25+",
    satisfactionRate: "98%",
    qualityPercent: "95%",
    rating: "4.9/5",
    reviewsCount: "2500 reviews",
    globalReach: "80+",
    warehouses: "50+",
    projectsCompleted: "3500+",
    distributors: "150+",
  },
}
