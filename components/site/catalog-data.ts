export const productCategories = ["Granite", "Marble", "Kota Stone", "Vitrified Tiles", "Tile Adhesive", "Raw Materials"] as const

export const collectionCards = [
  { name: "Granite", description: "Durable natural stone for countertops, flooring and architectural details.", image: "/images/categories/granite-v2.jpg", count: "A wide selection" },
  { name: "Marble", description: "Distinctive natural veining for elegant, light-filled spaces.", image: "/images/categories/marble-v2.jpg", count: "Indian & imported" },
  { name: "Kota Stone", description: "A timeless, practical stone known for its strength and natural finish.", image: "/images/categories/kota-stone-v2.jpg", count: "Classic finishes" },
  { name: "Vitrified Tiles", description: "Versatile, easy-care tiles for residential and commercial interiors.", image: "/images/categories/vitrified-tiles.jpg", count: "Many designs" },
  { name: "Tile Adhesive", description: "Trusted installation essentials for a lasting tile application.", image: "/images/categories/tile-adhesive.jpg", count: "Project-ready" },
  { name: "Raw Materials", description: "Construction basics and building materials under one roof.", image: "/images/categories/construction-materials.jpg", count: "Wholesale supply" },
]

export const products = [
  { name: "Polished Granite Flooring", category: "Granite", description: "Hard-wearing polished granite with rich natural character, suitable for floors, counters and feature spaces.", image: "/images/categories/granite-v2.jpg", finish: "Polished & honed" },
  { name: "Kota Stone Flooring", category: "Kota Stone", description: "Authentic Kota stone flooring with a cool, understated look and dependable everyday performance.", image: "/images/categories/kota-stone-v2.jpg", finish: "Natural finish" },
  { name: "Designer Vitrified Tiles", category: "Vitrified Tiles", description: "Contemporary vitrified tile designs for statement floors, walls and modern interiors.", image: "/images/categories/vitrified-tiles.jpg", finish: "Multiple finishes" },
  { name: "Natural Marble Slabs", category: "Marble", description: "Natural marble slabs with distinctive veining for refined homes and commercial projects.", image: "/images/categories/marble-v2.jpg", finish: "Natural stone" },
  { name: "Tile Adhesive", category: "Tile Adhesive", description: "A dependable adhesive solution for professional tile installation and lasting results.", image: "/images/categories/tile-adhesive.jpg", finish: "Installation essential" },
  { name: "Polished & Honed Granite Slabs", category: "Granite", description: "Versatile premium granite slabs in polished and honed finishes for floors and countertops.", image: "/images/categories/granite-v2.jpg", finish: "Multiple finishes" },
  { name: "Construction Raw Materials", category: "Raw Materials", description: "Everyday building materials selected for reliable work across construction projects.", image: "/images/categories/construction-materials.jpg", finish: "Wholesale supply" },
  { name: "Designer Wall & Floor Tiles", category: "Vitrified Tiles", description: "A considered mix of tile sizes, surfaces and styles for residential and commercial spaces.", image: "/images/categories/vitrified-tiles.jpg", finish: "Design-led range" },
]

export type CatalogProduct = (typeof products)[number]
