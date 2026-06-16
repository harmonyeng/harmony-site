import { sanityClient } from '../../sanity/lib/client'
import {
  latestSopQuery,
  latestProductQuery,
  siteSettingsQuery,
  featuredArticlesQuery,
} from '../../sanity/lib/queries'
import { SplashGate } from '@/components/sections/SplashGate'
import { Navbar } from '@/components/layout/Navbar'
import { SopSection } from '@/components/sections/SopSection'
import { OpsCenter } from '@/components/sections/OpsCenter'
import { StoryCard } from '@/components/sections/StoryCard'
import { AmazonBoutique } from '@/components/sections/AmazonBoutique'
import { FeaturedArticles } from '@/components/sections/FeaturedArticles'
import { BrandStamp } from '@/components/ui/BrandStamp'
import type { Sop, Product, SiteSettings } from '@/lib/types'

export const revalidate = 60

export default async function HomePage() {
  const [latestSop, latestProduct, settings, featuredArticles] = await Promise.all([
    sanityClient.fetch<Sop>(latestSopQuery),
    sanityClient.fetch<Product>(latestProductQuery),
    sanityClient.fetch<SiteSettings>(siteSettingsQuery),
    sanityClient.fetch(featuredArticlesQuery),
  ])

  return (
    <>
      <div className="sr-only" aria-hidden="true">
        <h1>{settings?.siteTitle ?? 'Harmony Engineering'}</h1>
        <h2>Standard Operating Procedures for Home Management</h2>
        {latestSop && <p>{latestSop.excerpt}</p>}
        <h2>Amazon Boutique — Household Systems Products</h2>
        {latestProduct && <p>{latestProduct.snippet}</p>}
        <h2>Chief of Home — Lital Shlomo, Industrial Engineer</h2>
        {settings?.storyBody && <p>{settings.storyBody}</p>}
      </div>

      <SplashGate
        headline={settings?.siteTagline ?? 'The New Standard for Home Management'}
      />

      <div id="main-site" className="opacity-0 transition-opacity duration-500" style={{ transitionDelay: '0.92s' }}>
        <Navbar />
        <main className="max-w-[1120px] mx-auto min-h-[calc(100vh-52px)]">

          {/* Top — two columns */}
          <div className="grid grid-cols-[65%_35%]">
            {/* Left Column */}
            <div className="px-col py-col border-r border-cobalt/10" style={{ paddingLeft: '36px', paddingRight: '48px', paddingTop: '52px', paddingBottom: '52px' }}>
              <SopSection sop={latestSop} />
            </div>
            {/* Right Column */}
            <div className="relative flex flex-col gap-[36px]" style={{ padding: '52px 32px 52px 28px' }}>
              <StoryCard settings={settings} />
              <AmazonBoutique product={latestProduct} />
              <div className="absolute bottom-7 right-5">
                <BrandStamp size={108} rotation={6} />
              </div>
            </div>
          </div>

          {/* Featured Articles — full width */}
          <FeaturedArticles articles={featuredArticles} />

          {/* Ops Center — bottom left, subdued */}
          <div className="max-w-[65%] px-[36px] py-[36px] opacity-80">
            <OpsCenter />
          </div>

        </main>
      </div>
    </>
  )
}
