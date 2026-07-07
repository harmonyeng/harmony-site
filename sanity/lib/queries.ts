import { groq } from 'next-sanity'
// Latest SOP for homepage (featured or most recent)
export const latestSopQuery = groq`
  *[_type == "sop"] | order(publishedAt desc) [0] {
    _id,
    title,
    slug,
    sopNumber,
    category,
    excerpt,
    publishedAt
  }
`
// All SOPs for archive sidebar (newest to oldest)
export const allSopsQuery = groq`
  *[_type == "sop"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    sopNumber,
    category,
    publishedAt
  }
`
// Single SOP by slug
export const sopBySlugQuery = groq`
  *[_type == "sop" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    sopNumber,
    category,
    excerpt,
    body,
    publishedAt
  }
`
// Latest featured product for homepage
export const latestProductQuery = groq`
  *[_type == "product" && featured == true] | order(publishedAt desc) [0] {
    _id,
    name,
    slug,
    image,
    snippet,
    amazonUrl
  }
`
// All products for catalog
export const allProductsQuery = groq`
  *[_type == "product"] | order(publishedAt desc) {
    _id,
    name,
    slug,
    image,
    snippet,
    amazonUrl
  }
`
// Ops Center: answered questions (for public display)
export const answeredQuestionsQuery = groq`
  *[_type == "question" && status in ["answered", "archived"]] | order(createdAt desc) [0..19] {
    _id,
    authorName,
    body,
    answer,
    answeredAt,
    status,
    relatedSop-> { title, slug }
  }
`
// Think-Tank: archived discussions
export const thinkTankQuery = groq`
  *[_type == "question" && status == "archived"] | order(createdAt desc) {
    _id,
    authorName,
    body,
    answer,
    answeredAt,
    relatedSop-> { title, slug }
  }
`
// Site settings (singleton)
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    siteTagline,
    metaDescription,
    storyHeadline,
    storyBody,
    ogImage
  }
`
// Featured Articles for homepage cards
export const featuredArticlesQuery = groq`
  *[_type == "featuredArticle"] | order(order asc) {
    _id,
    title,
    description,
    order,
    "slug": linkedSop->slug.current
  }
`
`
