"use client"
import { useState } from 'react'

export function QuestionForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [question, setQuestion] = useState('')
  const [email, setEmail] = useState('')

  async function handleSubmit() {
    if (!question.trim()) return
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xqevnjgl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, email }),
      })
      if (res.ok) {
        setStatus('done')
        setQuestion('')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <p className="font-mono text-[9px] tracking-[0.15em] text-cobalt uppercase mb-4">Ask a Question</p>
      {status === 'done' ? (
        <p className="font-serif text-[14px] text-ink/80 leading-relaxed">
          Thank you - your question has been received. The Chief Engineer will review it shortly.
        </p>
      ) : (
        <>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full h-[100px] bg-transparent border border-cobalt/20 rounded-steel p-3 font-serif text-[14px] text-ink placeholder:text-ink/40 resize-none focus:outline-none focus:border-cobalt/50 transition-colors mb-2"
            placeholder="Ask me anything about home management, systems, or operations..."
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-cobalt/20 rounded-steel p-3 font-serif text-[14px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-cobalt/50 transition-colors mb-2"
            placeholder="Your email (optional - if you want a reply)"
          />
          <p className="font-mono text-[8px] tracking-[0.1em] text-ink/50 mt-1 mb-3">
            Questions are published anonymously - Chief Engineer replies marked *
          </p>
          <button
            onClick={handleSubmit}
            disabled={status === 'sending'}
            className="font-mono text-[9px] tracking-[0.13em] text-white uppercase bg-cobalt px-4 py-2 rounded-steel hover:bg-cobalt-dark transition-colors inline-block disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Submit Question'}
          </button>
          {status === 'error' && (
            <p className="font-mono text-[8px] text-red-500 mt-2">Something went wrong. Please try again.</p>
          )}
        </>
      )}
    </div>
  )
}
