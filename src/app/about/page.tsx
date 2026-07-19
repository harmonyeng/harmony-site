import { Navbar } from '@/components/layout/Navbar'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-[760px] mx-auto px-8 py-14">

        {/* Back link */}
        <div className="mb-12 pb-5 border-b border-cobalt/10">
          <Link href="/" className="font-mono text-[9px] tracking-[0.15em] text-cobalt uppercase opacity-60 hover:opacity-100 transition-opacity">
            &larr; Home
          </Link>
        </div>

        {/* Header */}
        <h1 className="font-serif text-[32px] font-light text-ink leading-[1.2] mb-8 text-glossy">
          Engineering the Home. Running the Business. Living the Life.
        </h1>

        {/* Intro */}
        <div className="font-serif text-[17px] leading-[1.9] text-ink/85 space-y-6 mb-12">
          <p className="font-serif text-[18px] text-cobalt font-normal leading-[1.7] pl-6 border-l-2 border-cobalt/30">
            You know that feeling &mdash; watching everyone else&apos;s life flow so easily, while you&apos;re
            standing in the middle of your own mess, not sure which thread to pull first?
          </p>
          <p>
            I&apos;m Lital &mdash; a Practical Industrial Engineer, currently finishing my B.Sc.,
            and the founder of Harmony Engineering.
          </p>
          <p>
            Here&apos;s the part nobody tells you: I was managing teams at work. I was doing well
            in my studies. And I would still come home every single evening and get completely
            lost in my own tasks. Different arena, same person &mdash; so why did one flow and
            the other fall apart?
          </p>
          <p>
            The answer changed everything for me: I stopped treating my home like &ldquo;just
            life&rdquo; and started treating it like what it actually is &mdash; a system. The
            same one I manage at work, the same one I studied in school. And once I looked at
            it that way, the rules I already knew showed up everywhere: every problem is asking
            for a solution. There is always a solution &mdash; even when it takes time to
            actually put it in place.
          </p>
          <p>
            For the past seven years, I&apos;ve worked inside industries where a single
            bottleneck can shut down an entire operation &mdash; production floors, logistics,
            medical equipment supply chains, where there&apos;s zero margin for error.
            That&apos;s not theory for me. That&apos;s Tuesday.
          </p>
        </div>

        {/* Section divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-cobalt/10" />
          <span className="font-mono text-[9px] tracking-[0.2em] text-cobalt uppercase">
            What I Actually Do
          </span>
          <div className="h-px flex-1 bg-cobalt/10" />
        </div>

        {/* Body */}
        <div className="font-serif text-[17px] leading-[1.9] text-ink/85 space-y-6 mb-12">
          <p>
            Harmony Engineering takes the same principles that keep a business running &mdash;
            process mapping, bottleneck analysis, workflow design &mdash; and applies them to
            two places most people never think to engineer: their home, and the day-to-day
            operations of their own small business.
          </p>
          <p>
            If you&apos;re a business owner who&apos;s sat through consultants who talk in
            dashboards and frameworks and left you more confused than when you walked in &mdash;
            this is the opposite of that. No jargon. No 40-slide deck. I look at where the
            actual mess is, find the bottleneck, and build you a system that works &mdash; one
            you can actually run without a manual.
          </p>

          {/* Two tracks */}
          <div className="space-y-6 my-8">
            <div className="p-6 border border-cobalt/15 rounded-steel">
              <p className="font-mono text-[9px] tracking-[0.18em] text-cobalt uppercase mb-3">
                For Businesses &amp; Organizations
              </p>
              <p className="font-serif text-[16px] leading-[1.85] text-ink/85">
                I bring a cold, analytical, and battle-tested engineering perspective.
                I specialize in identifying operational bottlenecks, optimizing logistics,
                and turning slow, bleeding systems into highly profitable, efficient operations.
                If your business is losing resources, I know exactly where to look &mdash;
                and how to fix it.
              </p>
            </div>
            <div className="p-6 border border-cobalt/15 rounded-steel">
              <p className="font-mono text-[9px] tracking-[0.18em] text-cobalt uppercase mb-3">
                For Mothers &amp; Families
              </p>
              <p className="font-serif text-[16px] leading-[1.85] text-ink/85">
                I am not offering you &ldquo;home organization tips.&rdquo; I am offering a
                systematic mindset shift. This is a must-have framework for any mother who
                wants to stop putting out fires and start running her home like the
                high-performing operation it is &mdash; creating real space for breathing,
                growth, and peace of mind.
              </p>
            </div>
          </div>

          <p>
            Because whether it&apos;s your household or your business: you don&apos;t need to
            be perfect, and you don&apos;t need 100% in every category. You need a system that
            gets you the result you actually need &mdash; not the one everyone else expects
            from you.
          </p>
        </div>

        {/* CTA */}
        <div className="border-t border-cobalt/10 pt-10 text-center">
          <p className="font-serif text-[20px] font-light text-ink mb-6">
            Let&apos;s turn your chaos into planned harmony.
          </p>
          <Link
            href="/"
            className="font-mono text-[9px] tracking-[0.2em] uppercase text-cobalt border border-cobalt px-8 py-3 rounded-steel hover:bg-cobalt hover:text-pearl transition-all inline-block"
          >
            Back to Home
          </Link>
        </div>

      </main>
    </>
  )
}
