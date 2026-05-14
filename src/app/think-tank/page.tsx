import { sanityClient } from '../../../sanity/lib/client'
import { thinkTankQuery } from '../../../sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import type { Question } from '@/lib/types'
import { Navbar } from '@/components/layout/Navbar'

export const revalidate = 60

export default async function ThinkTankPage() {
  const discussions = await sanityClient.fetch<Question[]>(thinkTankQuery)

  return (
    <>
      <Navbar />
      <main className="max-w-[760px] mx-auto px-8 py-14">
        <div className="flex items-center gap-4 mb-12 pb-5 border-b border-cobalt/10">
          <Link href="/" className="font-mono text-[9px] tracking-[0.15em] text-cobalt uppercase opacity-60 hover:opacity-100 transition-opacity">
            ← Home
          </Link>
          <h1 className="font-mono text-[10px] tracking-[0.24em] text-cobalt uppercase">
            The Think-Tank — Read-Only Archive
          </h1>
        </div>

        <p className="font-serif text-[15px] italic text-muted mb-10 leading-[1.8]">
          A curated archive of community questions and Chief Engineer responses.
        </p>

        {discussions.length === 0 ? (
          <p className="font-serif text-[15px] italic text-muted opacity-60">
            No archived discussions yet.
          </p>
        ) : (
          <div className="flex flex-col gap-10">
            {discussions.map((q) => (
              <div key={q._id} className="border border-cobalt/10 rounded-steel p-7">
                {/* Question */}
                <div className="mb-6">
                  <span className="font-mono text-[8.5px] tracking-[0.15em] text-muted uppercase opacity-60 block mb-2">
                    {q.authorName ?? 'Community Member'}
                    {q.relatedSop && (
                      <> · Re: <Link href={`/sops/${q.relatedSop.slug.current}`} className="text-cobalt hover:opacity-80">{q.relatedSop.title}</Link></>
                    )}
                  </span>
                  <p className="font-serif text-[15px] font-light text-ink leading-[1.75]">{q.body}</p>
                </div>

                {/* Chief Engineer reply */}
                {q.answer && (
                  <div className="border-l-2 border-gold pl-5 pt-1">
                    <span className="font-mono text-[8.5px] tracking-[0.15em] text-gold uppercase block mb-2">
                      ★ Chief Engineer
                      {q.answeredAt && (
                        <> · {new Date(q.answeredAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</>
                      )}
                    </span>
                    <div className="portable-text">
                      <PortableText value={q.answer} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}
