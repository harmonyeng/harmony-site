import Link from 'next/link'
import type { Sop } from '@/lib/types'

interface SopSectionProps {
  sop: Sop | null
}

export function SopSection({ sop }: SopSectionProps) {
  return (
    <section>
      <Link href="/sops" className="group flex items-center gap-0 mb-9 border border-cobalt/13 rounded-steel overflow-hidden hover:border-cobalt transition-colors">
        <span className="bg-cobalt text-pearl font-mono text-[9px] tracking-[0.22em] uppercase px-[18px] py-[10px] whitespace-nowrap">
          SOPs
        </span>
        <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-cobalt px-4 py-[10px] opacity-70 flex-1 group-hover:opacity-100 transition-opacity">
          Standard Operating Procedures - Full Archive
        </span>
        <span className="mr-3.5 font-mono text-[11px] text-cobalt opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all">-&gt;</span>
      </Link>
      {sop ? (
        <>
          <span className="font-mono text-[9px] tracking-[0.2em] text-rose-gold uppercase mb-3.5 block">
            {sop.sopNumber ? `${sop.sopNumber} - ` : ''}{sop.category ?? 'Article'}
          </span>
          <h2 className="font-serif text-[27px] font-light leading-[1.22] text-ink tracking-[-0.01em] mb-4 text-glossy">
            {sop.title}
          </h2>
          <span className="font-mono text-[9px] tracking-[0.14em] text-muted opacity-60 uppercase mb-4 block">
            {new Date(sop.publishedAt).toLocaleDateString('en-US', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </span>
          <p className="font-serif text-[16px] leading-[1.88] text-ink/80 font-normal mb-7">
            {sop.excerpt}
            {sop.excerpt.length >= 500 ? '...' : ''}
          </p>
          <Link
            href={`/sops/${sop.slug.current}`}
            className="inline-flex items-center gap-2.5 font-mono text-[9px] tracking-[0.2em] uppercase text-cobalt border border-cobalt px-6 py-2.5 rounded-steel hover:bg-cobalt hover:text-pearl transition-all"
          >
            Read Full SOP -&gt;
          </Link>
        </>
      ) : (
        <p className="font-serif text-[15px] text-ink/70 font-normal">
          The first SOP is being drafted. Check back shortly.
        </p>
      )}
    </section>
  )
}
