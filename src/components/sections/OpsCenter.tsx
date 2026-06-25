'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
export function OpsCenter() {
  const { data: session } = useSession()
  const [question, setQuestion] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  async function handleSubmit() {
    if (!session) {
      window.dispatchEvent(new CustomEvent('open-login-modal'))
      return
    }
    if (!question.trim()) return
    setLoading(true)
    try {
      await fetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: question }),
      })
      setSubmitted(true)
      setQuestion('')
    } catch {
      // fail silently for now — production should add error toast
    } finally {
      setLoading(false)
    }
  }
  return (
    <section className="border border-cobalt/13 rounded-steel overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center border-b border-cobalt/13">
        <Link href="/ops-center" className="bg-cobalt text-pearl font-mono text-[9px] tracking-[0.22em] uppercase px-[18px] py-[10px] whitespace-nowrap hover:opacity-90 transition-opacity">
          Ops Center
        </Link>
        <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-cobalt px-4 py-[10px] opacity-65 flex-1">
          Community Questions & Discussion
        </span>
        <Link
          href="/think-tank"
          className="mr-3.5 font-mono text-[8px] tracking-[0.13em] text-gold uppercase border border-gold/60 px-3 py-[5px] rounded-steel hover:bg-gold/10 transition-colors whitespace-nowrap"
        >
          Think-Tank Archive ↗
        </Link>
      </div>
      {/* Body */}
      <div className="p-7">
        {submitted ? (
          <p className="font-serif text-[15px] italic text-muted py-4 text-center">
            Your question has been submitted. The Chief Engineer will respond shortly. ★
          </p>
        ) : (
          <>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask the Chief Engineer a question…"
              rows={3}
              className="w-full border-b border-cobalt/13 py-3 bg-transparent font-serif text-[15px] italic text-ink placeholder-muted placeholder-opacity-50 outline-none focus:border-cobalt transition-colors resize-none"
            />
            <div className="flex justify-end mt-3.5">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="font-mono text-[9px] tracking-[0.18em] uppercase bg-cobalt text-pearl px-[22px] py-2.5 rounded-steel hover:opacity-85 transition-opacity disabled:opacity-50"
              >
                {loading ? 'Submitting…' : 'Submit Question'}
              </button>
            </div>
            <p className="font-mono text-[8.5px] tracking-[0.1em] text-ink/70 text-center mt-3">
              {session ? `Logged in as ${session.user?.email}` : 'Login required to submit · '} Chief Engineer replies marked ★
            </p>
          </>
        )}
      </div>
    </section>
  )
}
