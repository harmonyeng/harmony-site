import { sanityClient } from '../../../../sanity/lib/client'
import { sopBySlugQuery, allSopsQuery } from '../../../../sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Sop } from '@/lib/types'
import { Navbar } from '@/components/layout/Navbar'

export const revalidate = 60

interface Props {
  params: { slug: string }
}

// Generate static paths for all SOPs at build time
export async function generateStaticParams() {
  const sops = await sanityClient.fetch<{ slug: { current: string } }[]>(
    `*[_type == "sop"] { slug }`
  )
  return sops.map((s) => ({ slug: s.slug.current }))
}

export default async function SopPage({ params }: Props) {
  const [sop, allSops] = await Promise.all([
    sanityClient.fetch<Sop>(sopBySlugQuery, { slug: params.slug }),
    sanityClient.fetch<Sop[]>(allSopsQuery),
  ])

  if (!sop) notFound()

  return (
    <>
      <Navbar />
      <main className="max-w-[1120px] mx-auto grid grid-cols-[1fr_300px] gap-0 min-h-[calc(100vh-52px)]">

        {/* 2/3: Main article content */}
        <article className="px-12 py-14 border-r border-cobalt/10">
          <Link href="/sops" className="font-mono text-[9px] tracking-[0.15em] text-cobalt uppercase opacity-60 hover:opacity-100 transition-opacity mb-8 block">
            ← All SOPs
          </Link>

          <span className="font-mono text-[9px] tracking-[0.2em] text-rose-gold uppercase mb-3.5 block opacity-85">
            {sop.sopNumber ? `${sop.sopNumber} · ` : ''}{sop.category ?? 'Article'}
          </span>

          <h1 className="font-serif text-[34px] font-light leading-[1.18] text-ink tracking-[-0.01em] mb-4">
            {sop.title}
          </h1>

          <span className="font-mono text-[9px] tracking-[0.14em] text-muted opacity-55 uppercase mb-10 block">
            {new Date(sop.publishedAt).toLocaleDateString('en-US', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </span>

          <div className="portable-text">
            {sop.body ? (
              <PortableText value={sop.body} />
            ) : (
              <p className="font-serif text-[15.5px] italic text-muted leading-[1.88]">
                {sop.excerpt}
              </p>
            )}
          </div>
        </article>

        {/* 1/3: Sidebar archive (newest to oldest) */}
        <aside className="px-7 py-14">
          <div className="font-mono text-[9px] tracking-[0.22em] text-cobalt uppercase mb-6 pb-4 border-b border-cobalt/10">
            All SOPs
          </div>
          <nav className="flex flex-col gap-0">
            {allSops.map((s, i) => (
              <div key={s._id}>
                <Link
                  href={`/sops/${s.slug.current}`}
                  className={`block py-4 group transition-colors rounded-steel -mx-2 px-2 hover:bg-cobalt/[0.04] ${s._id === sop._id ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                >
                  {s.sopNumber && (
                    <span className="font-mono text-[8px] tracking-[0.15em] text-rose-gold uppercase block mb-1 opacity-80">
                      {s.sopNumber}
                    </span>
                  )}
                  <span className={`font-serif text-[13.5px] font-light leading-[1.35] block group-hover:text-cobalt transition-colors ${s._id === sop._id ? 'text-cobalt font-normal' : 'text-ink'}`}>
                    {s.title}
                  </span>
                  <span className="font-mono text-[8px] tracking-[0.1em] text-muted opacity-50 uppercase mt-1 block">
                    {new Date(s.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </span>
                </Link>
                {i < allSops.length - 1 && <div className="h-px bg-cobalt/8" />}
              </div>
            ))}
          </nav>
        </aside>
      </main>
    </>
  )
}
