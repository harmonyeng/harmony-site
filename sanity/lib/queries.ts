import { groq } from 'next-sanity'

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

export const featuredArticlesQuery = groq`
  *[_type == "featuredArticle"] | order(order asc) {
    _id,
    title,
    description,
    order,
    "slug": linkedSop->slug.current
  }
`
