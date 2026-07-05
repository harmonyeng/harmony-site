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
          <p>
            I&apos;m Lital. A Practical Industrial Engineer, a current B.Sc. Engineering student,
            a mother of four, a partner, and the strategist behind Harmony Engineering.
          </p>
          <p>
            For the past seven years, I&apos;ve lived and breathed production floors, logistics,
            and medical equipment supply chains &mdash; an industry with zero margin for error,
            where a single supply chain bottleneck can cost a human life. At work, I&apos;m the one
            who manages high-pressure crises, streamlines complex operations, and solves the
            impossible. I am the person colleagues and executives turn to when they need answers.
          </p>
          <p className="font-serif text-[18px] font-normal text-ink italic">
            I&apos;ve always been in complete control.
          </p>
          <p>
            Until the day I walked through my own front door.
          </p>
          <p>
            The house was chaotic. The kids were glued to screens. My husband was dealing with
            a severe back injury. And I? I stood in the middle of the living room, completely
            drained, without a drop of energy to make dinner or clear the floor.
          </p>
          <p>
            That was the moment the sharpest question of my life hit me:
          </p>
          <p className="font-serif text-[18px] text-cobalt font-normal leading-[1.7] pl-6 border-l-2 border-cobalt/30">
            How is it possible that I run multi-layered logistical systems at work with my
            eyes closed &mdash; but the moment I cross my own threshold, I lose control?
          </p>
          <p>
            It wasn&apos;t that I was failing. It was that I was applying the wrong framework.
          </p>
          <p>
            Home management isn&apos;t a survival task. Home management is running a business.
            A complex, multi-variable operation with limited resources that demands constant
            optimization. Once I shifted that framework, everything changed.
          </p>
        </div>

        {/* Section divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-cobalt/10" />
          <span className="font-mono text-[9px] tracking-[0.2em] text-cobalt uppercase">
            From the Factory Floor to the Kitchen Floor
          </span>
          <div className="h-px flex-1 bg-cobalt/10" />
        </div>

        {/* Body */}
        <div className="font-serif text-[17px] leading-[1.9] text-ink/85 space-y-6 mb-12">
          <p>
            The methodologies that drive the world&apos;s most efficient corporations &mdash; Lean,
            smart inventory management, workflow optimization, and resource synergy &mdash; are
            exactly the tools that can turn any chaotic environment into a well-oiled machine.
            I know this because I&apos;ve stress-tested every single one of them. At home.
            With four kids. On three hours of sleep. While scaling a business.
          </p>
          <p>Today, through Harmony Engineering, I execute on two parallel tracks:</p>

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
                I am not offering you &ldquo;home organization tips.&rdquo; I am offering a systematic
                mindset shift. This is a must-have framework for any mother who wants to stop
                putting out fires and start running her home like the high-performing operation
                it is &mdash; creating real space for breathing, growth, and peace of mind.
              </p>
            </div>
          </div>

          <p>
            Engineering isn&apos;t just formulas on a page. It&apos;s a way of life. Whether we are
            talking about a medical supply warehouse or the chaos of a Tuesday morning with
            four kids &mdash; the operational principles are exactly the same.
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
