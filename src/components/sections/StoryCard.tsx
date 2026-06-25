import type { SiteSettings, Product } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../../sanity/lib/client'

// ── The Story (About) ─────────────────────────────────────────────────────

interface StoryCardProps {
  settings: SiteSettings | null
}

export function StoryCard({ settings }: StoryCardProps) {
  return (
    <div>
      <div className="font-mono text-[9px] tracking-[0.24em] text-ink/50 uppercase mb-4 flex items-center gap-2.5 after:content-[''] after:flex-1 after:h-px after:bg-cobalt/13">
        The Story
      </div>
      <div
        className="border border-cobalt/13 rounded-steel px-[22px] py-6"
        style={{ background: 'rgba(255,255,255,0.28)' }}
      >
        <span className="font-mono text-[8px] tracking-[0.2em] text-cobalt uppercase mb-2.5 block">
          Chief of Home (COH)
        </span>
        <div className="font-serif text-[18px] font-normal text-ink mb-1.5 tracking-[0.04em]">
          Lital Shlomo
        </div>
        <span className="font-mono text-[8.5px] tracking-[0.15em] text-rose-gold uppercase mb-3.5 block">
          Industrial Engineer · Founder, Harmony Engineering
        </span>
        <p className="font-serif text-[14px] leading-[1.8] text-ink/90 mb-4">
          {settings?.storyBody ??
            'Industrial engineering applied to the household. Harmony Engineering was built on the belief that the operational complexity of running a home deserves the same rigorous systems thinking as any factory floor — without losing the warmth that makes it a home.'}
        </p>
        <Link
          href="/about"
          className="font-mono text-[9px] tracking-[0.18em] text-cobalt uppercase hover:text-cobalt/60 transition-colors"
        >
          Read the full story →
        </Link>
      </div>
    </div>
  )
}

// ── Amazon Boutique ───────────────────────────────────────────────────────

interface AmazonBoutiqueProps {
  product: Product | null
}

export function AmazonBoutique({ product }: AmazonBoutiqueProps) {
  return (
    <div>
      <Link
        href="/boutique"
        className="font-mono text-[9px] tracking-[0.24em] text-ink/50 uppercase mb-4 flex items-center gap-2.5 hover:opacity-100 transition-opacity cursor-pointer after:content-[''] after:flex-1 after:h-px after:bg-cobalt/13"
      >
        Amazon My Love — Full Catalog ↗
      </Link>

      {product ? (
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex gap-3.5 items-start border border-cobalt/13 rounded-steel p-3.5 hover:border-cobalt hover:bg-cobalt/[0.04] transition-all"
          style={{ background: 'rgba(255,255,255,0.22)', textDecoration: 'none' }}
        >
          <div className="w-14 h-14 flex-shrink-0 rounded-[8px] flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg,rgba(26,79,173,0.07),rgba(196,144,106,0.10))' }}>
            {product.image ? (
              <Image
                src={urlFor(product.image).width(112).height(112).url()}
                alt={product.image.alt ?? product.name}
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-[22px]">📋</span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="font-serif text-[13.5px] font-normal text-ink leading-[1.4] mb-1.5">
              {product.name}
            </div>
            <div className="font-serif text-[12px] italic text-ink/70 leading-[1.55] mb-1.5 line-clamp-2">
              {product.snippet}
            </div>
            <div className="font-mono text-[8px] tracking-[0.15em] text-gold uppercase">
              View on Amazon →
            </div>
          </div>
        </a>
      ) : (
        <p className="font-serif text-[13px] text-ink/80">
          First product coming soon.
        </p>
      )}
    </div>
  )
}
