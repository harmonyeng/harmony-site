// ─────────────────────────────────────────────────────────────
// Harmony Engineering — shared TypeScript types
// ─────────────────────────────────────────────────────────────

export interface Slug {
  current: string
}

export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  alt?: string
  hotspot?: { x: number; y: number }
}

export interface Sop {
  _id: string
  title: string
  slug: Slug
  sopNumber?: string
  category?: string
  excerpt: string
  body?: any[]       // Portable Text
  publishedAt: string
}

export interface Product {
  _id: string
  name: string
  slug: Slug
  image?: SanityImage
  snippet: string
  amazonUrl: string
  featured?: boolean
  publishedAt?: string
}

export interface Question {
  _id: string
  authorName?: string
  body: string
  answer?: any[]    // Portable Text
  answeredAt?: string
  status: 'pending' | 'answered' | 'archived'
  relatedSop?: { title: string; slug: Slug }
}

export interface SiteSettings {
  siteTitle?: string
  siteTagline?: string
  metaDescription?: string
  storyHeadline?: string
  storyBody?: string
  ogImage?: SanityImage
}
