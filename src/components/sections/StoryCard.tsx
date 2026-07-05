import type { SiteSettings } from '@/lib/types'
import Link from 'next/link'

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
        <div className="font-serif text-[18px] font-normal text-ink mb-1.5 tracking-[0.04em]">
          Lital Shlomo
        </div>
        <span className="font-mono text-[8.5px] tracking-[0.15em] text-rose-gold uppercase mb-3.5 block">
          Industrial Engineer - Founder, Harmony Engineering
        </span>
        <p className="font-serif text-[14px] leading-[1.8] text-ink/90 mb-4">
          {settings?.storyBody ??
            'I run medical supply chains by day. I run a household of four by night. One evening I walked through the door and completely fell apart - and that is when I realized I was applying the wrong framework. Harmony Engineering was born from that moment.'}
        </p>
        <Link
          href="/about"
          className="font-mono text-[9px] tracking-[0.18em] text-cobalt uppercase hover:text-cobalt/60 transition-colors"
        >
          Read the full story
        </Link>
      </div>
    </div>
  )
}
