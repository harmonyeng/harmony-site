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

          {/* Top — two columns: latest SOP left, featured articles right */}
          <div className="grid grid-cols-[65%_35%] border-b border-cobalt/10">
            {/* Left — latest article */}
            <div className="px-[36px] py-[52px] border-r border-cobalt/10">
              <SopSection sop={latestSop} />
            </div>
            {/* Right — three featured article cards stacked */}
            <div className="py-[52px] px-[28px] flex flex-col gap-[16px]">
              <FeaturedArticles articles={featuredArticles} stacked />
            </div>
          </div>

          {/* Bottom — three columns: Amazon | Story | Ask a Question */}
          <div className="grid grid-cols-3 border-t border-cobalt/10">
            {/* Amazon */}
            <div className="px-[32px] py-[44px] border-r border-cobalt/10">
              <AmazonBoutique product={latestProduct} />
            </div>
            {/* Story */}
            <div className="px-[32px] py-[44px] border-r border-cobalt/10">
              <StoryCard settings={settings} />
            </div>
            {/* Ask a Question */}
            <div className="px-[32px] py-[44px]">
              <p className="font-mono text-[9px] tracking-[0.15em] text-cobalt uppercase mb-4">Ask a Question</p>
              <textarea
                className="w-full h-[120px] bg-transparent border border-cobalt/20 rounded-steel p-3 font-serif text-[13px] text-ink placeholder:text-muted/50 resize-none focus:outline-none focus:border-cobalt/50 transition-colors"
                placeholder="Ask me anything about home management, systems, or operations..."
              />
              <p className="font-mono text-[8px] tracking-[0.1em] text-muted/60 mt-2 mb-3">
                Questions are published anonymously · Chief Engineer replies marked ★
              </p>
              
                href="mailto:harmonyengineeringtn@gmail.com?subject=Question from theharmonyeng.com"
                className="font-mono text-[9px] tracking-[0.13em] text-white uppercase bg-cobalt px-4 py-2 rounded-steel hover:bg-cobalt-dark transition-colors inline-block"
              >
                Submit Question →
              </a>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}
