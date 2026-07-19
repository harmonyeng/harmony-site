import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://theharmonyeng.com',
      lastModified: new Date(),
    },
    {
      url: 'https://theharmonyeng.com/about',
      lastModified: new Date(),
    },
    // תוסיפי כאן כל דף נוסף שיש לך (מאמרים, וכו')
  ]
}
