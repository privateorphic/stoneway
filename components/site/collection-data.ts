export interface CollectionItemData {
  title: string
  category: string
  subtitle: string
  description: string
  expectedLaunch: string
  highlights: string[]
  previewImages: { title: string; image: string; tag: string; description: string }[]
}

export const slugAliases: Record<string, string> = {
  "living-room-tiles": "living-room-tiles",
  "living-room": "living-room-tiles",
  "kitchen-tiles": "kitchen-tiles",
  "kitchen": "kitchen-tiles",
  "bathroom-tiles": "bathroom-tiles",
  "bathroom": "bathroom-tiles",
  "bedroom-tiles": "bedroom-tiles",
  "bedroom": "bedroom-tiles",
  "outdoor-tiles": "outdoor-tiles",
  "outdoor": "outdoor-tiles",
}

export const collectionData: Record<string, CollectionItemData> = {
  "living-room-tiles": {
    title: "Living Room Tiles",
    category: "Grand Living & Lounge Spaces",
    subtitle: "Bhopal's upcoming signature collection for luxury living spaces & entertaining halls.",
    description: "We are currently curating an exclusive range of large-format Italian marble-look tiles, bookmatched glazed porcelain, and satin-matte vitrified surfaces designed specifically for grand living rooms and contemporary lounges.",
    expectedLaunch: "Launching Soon • Showroom Previews Available in Karond",
    highlights: [
      "Large-format 1200×1800mm & 800×1600mm seamless slabs",
      "Stain-resistant high-traffic nano-polish surface technology",
      "Continuous veining and mirror bookmatch configurations",
      "Wholesale pricing directly from premier manufacturing hubs"
    ],
    previewImages: [
      {
        title: "Statuario Venato Bookmatch",
        image: "/images/categories/marble-v2.jpg",
        tag: "Polished Glazed",
        description: "Classic Italian white marble veining with reflective high-gloss finish."
      },
      {
        title: "Armani Gris Satin Porcelain",
        image: "/images/categories/granite-v2.jpg",
        tag: "Satin Honed",
        description: "Sophisticated neutral grey tone with soft velvety underfoot feel."
      },
      {
        title: "Travertine Warm Carving",
        image: "/images/categories/vitrified-tiles.jpg",
        tag: "Carving Finish",
        description: "Tactile micro-vein texture reflecting light dynamically at every angle."
      },
    ]
  },
  "kitchen-tiles": {
    title: "Kitchen Tiles",
    category: "Culinary & Dining Spaces",
    subtitle: "Heat-resistant, non-porous, and hygienic surfaces for the heart of your home.",
    description: "Our kitchen tile and countertop collection is being curated with precision. Featuring zero-porosity vitrified tiles, stain-proof backsplash mosaics, and heavy-duty granite surfaces engineered for Indian cooking conditions.",
    expectedLaunch: "Launching Soon • Showroom Previews Available in Karond",
    highlights: [
      "Zero-porosity surface with high turmeric & oil stain resistance",
      "Thermal shock tested for hot pans and heavy cookware",
      "Scratch-resistant anti-abrasion diamond glaze",
      "Seamless large formats for minimal grout line maintenance"
    ],
    previewImages: [
      {
        title: "Calacatta Quartz Countertop",
        image: "/images/categories/marble-v2.jpg",
        tag: "Heavy-Duty Countertops",
        description: "Food-safe, acid-resistant engineered surface with striking grey veining."
      },
      {
        title: "Smoked Basalt Wall Tiles",
        image: "/images/categories/granite-v2.jpg",
        tag: "Backsplash Finish",
        description: "Deep charcoal tone that masks cooking splashes effortlessly."
      },
      {
        title: "Anti-Skid Terrazzo Grid",
        image: "/images/categories/vitrified-tiles.jpg",
        tag: "Floor Vitrified",
        description: "Safe grip even when wet, combined with playful terrazzo flecks."
      },
    ]
  },
  "bathroom-tiles": {
    title: "Bathroom Tiles",
    category: "Bathrooms & Luxury Spas",
    subtitle: "Waterproof, slip-resistant, and luxurious spa-grade tile collections.",
    description: "Designed for wet zones and master suites, our upcoming bathroom collection features anti-skid floor tiles, full-body vitrified wall panels, and designer accent tiles that turn everyday bathrooms into private luxury sanctuaries.",
    expectedLaunch: "Launching Soon • Showroom Previews Available in Karond",
    highlights: [
      "R10 & R11 slip-resistance certified textures for wet zones",
      "Anti-fungal and moisture-sealed grout compatibility",
      "Monolithic full-height wall slabs that eliminate horizontal grout lines",
      "Textured fluted, stone-grain, and metallic accent panels"
    ],
    previewImages: [
      {
        title: "Terrazzo Bianco Wet-Zone",
        image: "/images/categories/vitrified-tiles.jpg",
        tag: "Anti-Skid Flooring",
        description: "Slip-resistant matte finish engineered for wet shower enclosures."
      },
      {
        title: "Nero Marquina Wall Panel",
        image: "/images/categories/marble-v2.jpg",
        tag: "Accent Cladding",
        description: "Deep black marble slab with high-contrast white lightning streaks."
      },
      {
        title: "Fluted Greige Ceramic",
        image: "/images/categories/granite-v2.jpg",
        tag: "Vanity Accent",
        description: "Vertical fluted ridges that add tactile depth behind vanity mirrors."
      },
    ]
  },
  "bedroom-tiles": {
    title: "Bedroom Tiles",
    category: "Bedrooms & Master Suites",
    subtitle: "Warm, peaceful textures and satin finishes for cozy private retreats.",
    description: "We are crafting a collection of warm wood-grain vitrified tiles, soft-honed natural stone textures, and sound-dampening matte surfaces crafted to create relaxing master bedroom environments.",
    expectedLaunch: "Launching Soon • Showroom Previews Available in Karond",
    highlights: [
      "Natural hardwood wood-plank aesthetics with zero termite worries",
      "Soft-touch satin and honed matte finishes for bare feet",
      "Hypoallergenic, dust-mite and pet resistant surfaces",
      "Warm neutral color palettes (Beige, Warm Oak, Greige, Almond)"
    ],
    previewImages: [
      {
        title: "Nordic Oak Wood Planks",
        image: "/images/categories/vitrified-tiles.jpg",
        tag: "Wood Finish Planks",
        description: "Realistic natural oak grain texture with the durability of porcelain."
      },
      {
        title: "Crema Sand Honed Slab",
        image: "/images/categories/marble-v2.jpg",
        tag: "Honed Texture",
        description: "Quiet matte surface that diffuses morning sunlight softly."
      },
      {
        title: "Silk Touch Platinum",
        image: "/images/categories/granite-v2.jpg",
        tag: "Satin Glazed",
        description: "Subtle pearlescent sheen that adds luxury without glare."
      },
    ]
  },
  "outdoor-tiles": {
    title: "Outdoor Tiles",
    category: "Outdoor, Driveways & Terraces",
    subtitle: "Heavy-duty 16mm-20mm outdoor vitrified tiles and authentic Kota stone.",
    description: "Engineered to withstand harsh Bhopal monsoons and intense summer heat. Featuring thick exterior pavers, anti-moss vitrified surfaces, and calibrated Kota stone for driveways, balconies, garden walkways, and terrace decks.",
    expectedLaunch: "Launching Soon • Showroom Previews Available in Karond",
    highlights: [
      "16mm & 20mm heavy vehicular load capacity for driveways",
      "Calibrated Kota stone with natural non-slip grip",
      "UV & weather-fade resistant coloration under direct sunlight",
      "Frost and thermal fluctuation resistant against cracking"
    ],
    previewImages: [
      {
        title: "Calibrated Blue Kota Stone",
        image: "/images/categories/kota-stone-v2.jpg",
        tag: "Natural Stone Pavers",
        description: "Authentic Central India Kota stone, calibrated for uniform thickness."
      },
      {
        title: "20mm Granite Cobble Slabs",
        image: "/images/categories/granite-v2.jpg",
        tag: "Driveway Heavy-Duty",
        description: "Carries SUV vehicular loads without settling or cracking."
      },
      {
        title: "Rustic Quartzite Pavers",
        image: "/images/categories/vitrified-tiles.jpg",
        tag: "Terrace & Balcony",
        description: "Textured grip for open garden decks and rain-exposed terraces."
      },
    ]
  }
}
