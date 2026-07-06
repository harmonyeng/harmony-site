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
import { StoryCard } from '@/components/sections/StoryCard'
import { AmazonBoutique } from '@/components/sections/AmazonBoutique'
import { FeaturedArticles } from '@/components/sections/FeaturedArticles'
import { QuestionForm } from '@/components/sections/QuestionForm'
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
      </div>

      <SplashGate
        headline={settings?.siteTagline ?? 'The New Standard for Home Management'}
      />

      <div id="main-site" className="opacity-0 transition-opacity duration-500" style={{ transitionDelay: '0.92s' }}>
        <Navbar />
        <main className="max-w-[1120px] mx-auto min-h-[calc(100vh-52px)]">

          <div className="grid grid-cols-[65%_35%] border-b border-cobalt/10">
            <div className="px-[36px] py-[52px] border-r border-cobalt/10">
              <SopSection sop={latestSop} />
            </div>
            <div className="py-[52px] px-[28px] flex flex-col gap-[16px]">
              <FeaturedArticles articles={featuredArticles} stacked />
            </div>
          </div>

          <div className="grid grid-cols-3 border-t border-cobalt/10">
            <div className="px-[32px] py-[44px] border-r border-cobalt/10">
              <AmazonBoutique product={latestProduct} />
            </div>
            <div className="px-[32px] py-[44px] border-r border-cobalt/10">
              <StoryCard settings={settings} />
            </div>
            <div className="px-[32px] py-[44px]">
              <QuestionForm />
            </div>
          </div>

        </main>
      </div>
    </>
  )
}
