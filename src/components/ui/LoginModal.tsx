'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'

interface LoginModalProps {
  open: boolean
  onClose: () => void
}

// Password policy: 8+ chars, letters + numbers + special char
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/

export function LoginModal({ open, onClose }: LoginModalProps) {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }

    if (isSignup && !PASSWORD_REGEX.test(password)) {
      setError('Password must be at least 8 characters and include a letter, a number, and a special character (!@#$…).')
      return
    }

    setLoading(true)
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      if (result?.error) {
        setError('Invalid credentials. Please try again.')
      } else {
        onClose()
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: 'rgba(8,8,8,0.55)', backdropFilter: 'blur(3px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-[360px] px-10 py-12 border border-cobalt/13 rounded-steel"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, #F9F9F5 0%, #EDECEA 100%)',
          boxShadow: '0 28px 64px rgba(0,0,0,0.22)',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-4 font-mono text-sm text-muted opacity-45 hover:opacity-100 transition-opacity"
          aria-label="Close"
        >✕</button>

        <h2 className="font-serif text-2xl font-light text-ink mb-1">Command Access</h2>
        <p className="font-mono text-[9px] tracking-[0.16em] text-muted uppercase mb-9 opacity-65">
          {isSignup ? 'Create your account' : 'Sign in to your account'}
        </p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-b border-cobalt/13 py-3 bg-transparent font-serif text-[15px] italic text-ink placeholder-muted placeholder-opacity-55 outline-none focus:border-cobalt transition-colors mb-6"
        />

        <input
          type="password"
          placeholder={isSignup ? 'Choose a password' : 'Password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          className="w-full border-b border-cobalt/13 py-3 bg-transparent font-serif text-[15px] italic text-ink placeholder-muted placeholder-opacity-55 outline-none focus:border-cobalt transition-colors mb-6"
        />

        {isSignup && (
          <p className="font-mono text-[8.5px] tracking-[0.1em] text-muted opacity-60 mb-5 leading-relaxed">
            Min. 8 characters · must include letters, numbers & a special character
          </p>
        )}

        {error && (
          <p className="font-mono text-[8.5px] tracking-[0.1em] text-rose-600 mb-4">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-cobalt text-pearl font-mono text-[9.5px] tracking-[0.22em] uppercase py-4 rounded-steel mb-5 hover:opacity-85 transition-opacity disabled:opacity-50"
        >
          {loading ? 'Authenticating…' : 'Authenticate'}
        </button>

        <p
          className="font-mono text-[9px] tracking-[0.12em] text-cobalt text-center cursor-pointer opacity-60 hover:opacity-100 uppercase transition-opacity"
          onClick={() => { setIsSignup(!isSignup); setError('') }}
        >
          {isSignup ? 'Already have an account? Sign in →' : 'New here? Create account →'}
        </p>
      </div>
    </div>
  )
}
