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
    {
      url: 'https://theharmonyeng.com/sops/from-bottleneck-to-flow-how-to-find-your-home-s-chokepoint-and-fix-it',
      lastModified: new Date(),
    },
    {
      url: 'https://theharmonyeng.com/sops/running-a-home-is-running-a-business',
      lastModified: new Date(),
    },
    {
      url: 'https://theharmonyeng.com/sops/the-good-enough-manager-why-trying-to-be-perfect-is-quietly-wrecking-you',
      lastModified: new Date(),
    },
    // כשתפרסמי מאמר חדש - תוסיפי כאן עוד בלוק כזה עם הכתובת שלו
  ]
}
