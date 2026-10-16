export interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

export interface AboutCompanyData {
  eyebrow: string
  title: string
  description: string
  checklist: string[]
  progressStat: {
    label: string
    percentage: number
    display: string
  }
  ctaText: string
  ctaHref: string
}

export interface ValueCard {
  id: string
  title: string
  description: string
  bullets: [string, string]
  iconKey: "iconQuality" | "iconIntegrity" | "iconInnovation"
}

export interface ValuesData {
  eyebrow: string
  title: string
  intro: string
  items: ValueCard[]
}

export interface WhyChooseUsData {
  eyebrow: string
  title: string
  description: string
  ctaText: string
  ctaHref: string
  clientBannerText: string
  quote: string
  presenceStat: {
    value: string
    title: string
    description: string
  }
  exportNetwork: {
    title: string
  }
}

export interface StripCtaData {
  text: string
  highlightText: string
  ctaText: string
  ctaHref: string
}

export interface ProcessStep {
  stepNumber: string
  title: string
  description: string
  imageKey: "step1" | "step2" | "step3"
}

export interface ProcessData {
  eyebrow: string
  title: string
  steps: ProcessStep[]
}

export interface ProductQualityItem {
  id: string
  metric: string
  title: string
  description: string
  iconKey: "iconEquipment" | "iconExperts" | "iconReach" | "iconExperience"
  badgeBgKey: "badgeBg1" | "badgeBg2" | "badgeBg3" | "badgeBg4"
}

export interface ProductQualitiesData {
  eyebrow: string
  title: string
  intro: string
  satisfactionRate: string
  satisfactionLabel: string
  items: ProductQualityItem[]
}

export interface FeatureItem {
  id: string
  title: string
  description: string
}

export interface CoreFeaturesData {
  eyebrow: string
  title: string
  intro: string
  ratingScore: string
  ratingReviews: string
  features: FeatureItem[]
  ctaText: string
  ctaHref: string
}

export interface ContactCtaStat {
  value: string
  label: string
  iconKey: "iconWarehouse" | "iconProjects" | "iconDistributors"
}

export interface ContactCtaData {
  eyebrow: string
  title: string
  description: string
  phoneLabel: string
  stats: ContactCtaStat[]
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface FaqData {
  eyebrow: string
  title: string
  ctaHeading: string
  ctaSubtext: string
  callTitle: string
  questions: FaqItem[]
}

export const aboutPageData = {
  hero: {
    title: "About us",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about", current: true },
    ] as BreadcrumbItem[],
  },
  company: {
    eyebrow: "About Our Company",
    title: "Designed for premium living, built for everyday life",
    description:
      "At Stoneway, our state-of-the-art processing yards, master stone masons, and strict dimensional tolerances ensure pristine finishes, uniform vein alignment, and enduring structural resilience across all installations.",
    checklist: [
      "Continuous investment in diamond-wire gang saws & CNC profiling technology",
      "Rigorous physical testing against international moisture absorption & abrasion standards",
    ],
    progressStat: {
      label: "Manufacturing Quality",
      percentage: 95,
      display: "95%",
    },
    ctaText: "Contact Us",
    ctaHref: "/contact",
  } as AboutCompanyData,
  values: {
    eyebrow: "Our Values",
    title: "Foundational values behind our marble & stone craft",
    intro:
      "Every slab, tile, and bespoke architectural architectural block we cut reflects an uncompromising commitment to geological purity, ethical sourcing, and technological precision.",
    items: [
      {
        id: "quality",
        title: "Quality Excellence",
        description:
          "We engineer every granite, marble, and Kota stone slab through multi-point inspections, automated laser calibration, and mirror-gloss polishing lines.",
        bullets: [
          "Zero-tolerance slab thickness calibration",
          "Diamond-grade surface planar polishing",
        ],
        iconKey: "iconQuality",
      },
      {
        id: "integrity",
        title: "Integrity & Transparency",
        description:
          "Clear quarry provenance, genuine physical grade certification, and direct fair pricing eliminate intermediary markups and misleading substitutions.",
        bullets: [
          "100% verified quarry batch documentation",
          "Honest grading with transparent lot pricing",
        ],
        iconKey: "iconIntegrity",
      },
      {
        id: "innovation",
        title: "Innovation & Technology",
        description:
          "Blending decades of artisanal stone carving with high-speed multi-axis bridge cutters, waterjet shaping, and eco-friendly water recirculation systems.",
        bullets: [
          "Waterjet cutting for custom book-matched motifs",
          "Sustainable dust extraction and slurry filtration",
        ],
        iconKey: "iconInnovation",
      },
    ],
  } as ValuesData,
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    title: "Quality, craftsmanship, and reliability you can trust",
    description:
      "We combine selective raw block procurement, experienced technical stone advisors, and automated logistics to deliver natural stone products that consistently outlast commercial and residential expectations.",
    ctaText: "Learn More",
    ctaHref: "/contact",
    clientBannerText: "Chosen by 2,000+ Clients Worldwide for Premium Tiles & Marble Quality",
    quote: "“ We don't just supply tiles and marble — we craft enduring architectural surfaces that stand the test of time. ”",
    presenceStat: {
      value: "100+",
      title: "Global Presence",
      description: "Our integrated logistics network delivers pristine calibrated stone and tiles across domestic and international markets.",
    },
    exportNetwork: {
      title: "Exporting Premium Tiles & Stone Across a Global Network",
    },
  } as WhyChooseUsData,
  stripCta: {
    text: "Let's make something great work together.",
    highlightText: "Get Free Quote",
    ctaText: "Get Free Quote",
    ctaHref: "/contact",
  } as StripCtaData,
  process: {
    eyebrow: "Work Process",
    title: "Crafted through precision and advanced processes",
    steps: [
      {
        stepNumber: "Step 01",
        title: "Consultation & Selection",
        description:
          "We study your structural drawings, traffic requirements, and aesthetic palette to curate the ideal natural stones, slab thicknesses, and surface finishes.",
        imageKey: "step1",
      },
      {
        stepNumber: "Step 02",
        title: "Sourcing Premium Materials",
        description:
          "Our geologists source premium blocks directly from high-yield quarry beds, ensuring exceptional structural density, color uniformity, and crystal stability.",
        imageKey: "step2",
      },
      {
        stepNumber: "Step 03",
        title: "Custom Cutting & Finishing",
        description:
          "State-of-the-art CNC bridge saws slice and chamfer each tile with micron accuracy, followed by specialized honed, flamed, or mirror-polish treatments.",
        imageKey: "step3",
      },
    ],
  } as ProcessData,
  qualities: {
    eyebrow: "Our Product Qualities",
    title: "The standards that make our tile & marble exceptional",
    intro:
      "From high-traffic institutional plazas to luxury residential interiors, our stone materials surpass standard tensile benchmarks and resist wear across decades of continuous use.",
    satisfactionRate: "98%",
    satisfactionLabel: "Client Satisfaction Rate",
    items: [
      {
        id: "equipped",
        metric: "50+",
        title: "Highly Equipped Units",
        description: "Equipped with high-tonnage gang saws, CNC edge molders, and automated polishing beds for unmatched consistency.",
        iconKey: "iconEquipment",
        badgeBgKey: "badgeBg1",
      },
      {
        id: "experts",
        metric: "100+",
        title: "Skilled Experts",
        description: "Master stonemasons, geological evaluators, and architectural technicians dedicated to flawless fabrication.",
        iconKey: "iconExperts",
        badgeBgKey: "badgeBg2",
      },
      {
        id: "reach",
        metric: "80+",
        title: "Global Reach",
        description: "Serving commercial and residential development projects across 80+ international trade hubs and regions.",
        iconKey: "iconReach",
        badgeBgKey: "badgeBg3",
      },
      {
        id: "experience",
        metric: "25+",
        title: "Years Experience",
        description: "Over a quarter-century of stone quarrying, processing, and direct architectural supply expertise in Central India.",
        iconKey: "iconExperience",
        badgeBgKey: "badgeBg4",
      },
    ],
  } as ProductQualitiesData,
  features: {
    eyebrow: "Our Core Features",
    title: "Reliable features built for lasting performance",
    intro:
      "Engineered through high-pressure compaction and precision sealing, our stone and porcelain tiles guarantee lifelong hygiene, effortless upkeep, and enduring structural integrity.",
    ratingScore: "4.9/5",
    ratingReviews: "Based on 2500 reviews",
    ctaText: "Learn More",
    ctaHref: "/contact",
    features: [
      {
        id: "hygienic",
        title: "Hygienic Surface Density",
        description:
          "High crystal compactness and non-porous resin curing prevent microbial growth, bacterial retention, and organic moisture trapping in wet interior zones.",
      },
      {
        id: "easy-clean",
        title: "Easy To Clean & Maintain",
        description:
          "Ultra-smooth calibrated face finishes wash down effortlessly with standard pH-neutral cleansers, maintaining showroom sheen without costly periodic waxing.",
      },
      {
        id: "stain-resistant",
        title: "Stain Resistant Treatment",
        description:
          "Factory-applied deep penetrating silicone sealers repel hot oils, wines, acidic liquids, and industrial chemicals before they penetrate the stone matrix.",
      },
      {
        id: "impact-resistant",
        title: "Impact & Abrasion Resistant",
        description:
          "Exceptional compressive strength and high Mohs hardness ratings shield against heavy foot traffic, falling cookware, forklift ruts, and trolley friction.",
      },
    ],
  } as CoreFeaturesData,
  contactCta: {
    eyebrow: "Contact Us Today",
    title: "Let's discuss your tiles and marble requirements",
    description:
      "Connect directly with our technical stone consultants to review architectural specifications, request sample sets, or arrange customized wholesale crate delivery to your site.",
    phoneLabel: "Need Any Help? Call Us",
    stats: [
      {
        value: "50+",
        label: "Global Warehousing Hubs",
        iconKey: "iconWarehouse",
      },
      {
        value: "3500+",
        label: "Global Projects Completed",
        iconKey: "iconProjects",
      },
      {
        value: "150+",
        label: "Authorized Global Distributors",
        iconKey: "iconDistributors",
      },
    ],
  } as ContactCtaData,
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Helping you make confident tile & marble decisions",
    ctaHeading: "Still have questions?",
    ctaSubtext: "Our dedicated technical team is here to assist. Connect with our quarry experts for custom cut lists, stone test reports, and volume quotes.",
    callTitle: "Call Us Today",
    questions: [
      {
        id: "faq-1",
        question: "Q1. What types of tiles, marble, and natural stone do you manufacture?",
        answer:
          "Stoneway specializes in wholesale fabrication of premium Indian & imported granites, Makrana and Italian marbles, heavy-duty Kota stone slabs, vitrified porcelain tiles, sandstone pavers, and custom architectural moldings. Every product line is available in customized slab dimensions, calibrated tile formats, and specialized surface finishes.",
      },
      {
        id: "faq-2",
        question: "Q2. Are your tiles and natural marble suitable for heavy commercial projects?",
        answer:
          "Yes. Our materials are regularly specified for airport concourses, luxury hotel lobbies, corporate campuses, and exterior building facades. Each batch is rated for high compressive strength, low water absorption (<0.5%), and superior wear resistance under rigorous commercial foot and vehicle traffic.",
      },
      {
        id: "faq-3",
        question: "Q3. Do you follow standardized quality control throughout the manufacturing lifecycle?",
        answer:
          "Every block and slab undergoes strict four-tier inspection: raw block ultrasonic fissure testing, automated laser thickness calibration (+/- 0.5mm tolerance), 60-degree gloss-meter reflectivity measurement, and protective corner packaging before containerization.",
      },
      {
        id: "faq-4",
        question: "Q4. What interior and exterior applications are your stone products best suited for?",
        answer:
          "Our stone collections are engineered for interior luxury flooring, kitchen countertops, vertical feature walls, bathroom vanity surrounds, staircase treads, poolside non-slip coping, and exterior rain-screen cladding systems.",
      },
      {
        id: "faq-5",
        question: "Q5. How do I contact your engineering team for technical support or custom project quotes?",
        answer:
          "You can reach our Karond, Bhopal headquarters directly by calling +(91) 910 924 0966, emailing contact@stonewaybhopal.com, or submitting your project specifications and BOQs through our online contact form for a guaranteed same-day response.",
      },
    ],
  } as FaqData,
  footer: {
    brandDescription:
      "Serving commercial developers, architects, and discerning homeowners across 80+ global markets with precision-calibrated granite, marble, and architectural tile solutions.",
    copyright: `Copyright © ${new Date().getFullYear()} Stoneway. All Rights Reserved.`,
    policyTitle: "Premium Tiles & Marble Manufacturing Excellence",
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
}
