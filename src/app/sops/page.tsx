import { sanityClient } from '../../../sanity/lib/client'
import { allSopsQuery } from '../../../sanity/lib/queries'
import Link from 'next/link'
import type { Sop } from '@/lib/types'
import { Navbar } from '@/components/layout/Navbar'

export const revalidate = 60

export default async function SopsPage() {
  const sops = await sanityClient.fetch<Sop[]>(allSopsQuery)

  return (
    <>
      <Navbar />
      <main className="max-w-[760px] mx-auto px-8 py-14">
        <div className="flex items-center gap-4 mb-12 pb-5 border-b border-cobalt/10">
          <Link href="/" className="font-mono text-[9px] tracking-[0.15em] text-cobalt uppercase opacity-60 hover:opacity-100 transition-opacity">
            ← Home
          </Link>
          <h1 className="font-mono text-[10px] tracking-[0.24em] text-cobalt uppercase">
            Standard Operating Procedures — Archive
          </h1>
        </div>

        {sops.length === 0 ? (
          <p className="font-serif text-[15px] italic text-muted opacity-60">
            No SOPs published yet. The Chief Engineer is preparing the first one.
          </p>
        ) : (
          <div className="flex flex-col gap-0">
            {sops.map((sop, i) => (
              <div key={sop._id}>
                <Link
                  href={`/sops/${sop.slug.current}`}
                  className="group block py-7 hover:bg-cobalt/[0.02] rounded-steel transition-colors -mx-4 px-4"
                >
                  <span className="font-mono text-[8.5px] tracking-[0.18em] text-rose-gold uppercase mb-2 block opacity-85">
                    {sop.sopNumber ? `${sop.sopNumber} · ` : ''}{sop.category ?? 'Article'}
                  </span>
                  <h2 className="font-serif text-[21px] font-light text-ink mb-2 leading-[1.25] group-hover:text-cobalt transition-colors">
                    {sop.title}
                  </h2>
                  <span className="font-mono text-[9px] tracking-[0.13em] text-muted opacity-55 uppercase">
                    {new Date(sop.publishedAt).toLocaleDateString('en-US', {
                      day: 'numeric', month: 'long', year: 'numeric',
                    })}
                  </span>
                </Link>
                {i < sops.length - 1 && <div className="h-px bg-cobalt/8" />}
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}
