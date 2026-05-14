import { sanityClient } from '../../sanity/lib/client'
import {
  latestSopQuery,
  latestProductQuery,
  siteSettingsQuery,
} from '../../sanity/lib/queries'
import { SplashGate } from '@/components/sections/SplashGate'
import { Navbar } from '@/components/layout/Navbar'
import { SopSection } from '@/components/sections/SopSection'
import { OpsCenter } from '@/components/sections/OpsCenter'
import { StoryCard } from '@/components/sections/StoryCard'
import { AmazonBoutique } from '@/components/sections/AmazonBoutique'
import { BraveManButton } from '@/components/sections/BraveManButton'
import { BrandStamp } from '@/components/ui/BrandStamp'
import type { Sop, Product, SiteSettings } from '@/lib/types'

// Revalidate every 60 seconds (ISR) so new CMS content appears promptly
export const revalidate = 60

export default async function HomePage() {
  const [latestSop, latestProduct, settings] = await Promise.all([
    sanityClient.fetch<Sop>(latestSopQuery),
    sanityClient.fetch<Product>(latestProductQuery),
    sanityClient.fetch<SiteSettings>(siteSettingsQuery),
  ])

  return (
    <>
      {/* ── SEO content: always in DOM, crawlable behind splash ── */}
      <div className="sr-only" aria-hidden="true">
        <h1>{settings?.siteTitle ?? 'Harmony Engineering'} — {settings?.siteTagline ?? 'The New Standard for Home Management'}</h1>
        <h2>Standard Operating Procedures for Home Management</h2>
        {latestSop && <p>{latestSop.excerpt}</p>}
        <h2>Amazon Boutique — Household Systems Products</h2>
        {latestProduct && <p>{latestProduct.snippet}</p>}
        <h2>Chief of Home — Lital Shlomo, Industrial Engineer</h2>
        {settings?.storyBody && <p>{settings.storyBody}</p>}
      </div>

      {/* ── Splash Gate ── */}
      <SplashGate
        headline={settings?.siteTagline ?? 'The New Standard for Home Management'}
      />

      {/* ── Main site (revealed after splash) ── */}
      <div id="main-site" className="opacity-0 transition-opacity duration-500" style={{ transitionDelay: '0.92s' }}>
        <Navbar />

        <main className="max-w-[1120px] mx-auto grid grid-cols-[65%_35%] min-h-[calc(100vh-52px)]">

          {/* Left Column — Operations Hub */}
          <div className="px-col py-col border-r border-cobalt/10" style={{ paddingLeft: '36px', paddingRight: '48px', paddingTop: '52px', paddingBottom: '52px' }}>
            <SopSection sop={latestSop} />
            <div className="my-[44px] h-px bg-cobalt/10" />
            <OpsCenter />
          </div>

          {/* Right Column — CEO & Boutique */}
          <div className="relative flex flex-col gap-[36px] pb-[100px]" style={{ padding: '52px 32px 100px 28px' }}>
            <StoryCard settings={settings} />
            <AmazonBoutique product={latestProduct} />
            <BraveManButton />

            {/* Brand stamp — physically tilted, bottom right */}
            <div className="absolute bottom-7 right-5">
              <BrandStamp size={108} rotation={6} />
            </div>
          </div>

        </main>
      </div>
    </>
  )
}
