'use client'

import { CommandButton } from '@/components/ui/CommandButton'
import { LoginModal } from '@/components/ui/LoginModal'
import { useState } from 'react'

export function Navbar() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <nav
        className="h-[52px] flex items-center justify-between px-9 sticky top-0 z-40"
        style={{
          background: 'linear-gradient(90deg, #0F3580 0%, #1A4FAD 50%, #0F3580 100%)',
          borderBottom: '1px solid rgba(196,144,106,0.22)',
          boxShadow: '0 1px 24px rgba(26,79,173,0.28)',
          borderRadius: '0 0 10px 10px',
        }}
      >
        {/* Left: Login link */}
        <button
          className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase hover:text-gold transition-colors cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          Login <span className="text-white/20 mx-2">|</span> Sign up
        </button>

        {/* Center: Brand */}
        <div className="absolute left-1/2 -translate-x-1/2 font-sans text-[13px] tracking-[0.18em] text-gold uppercase"
          style={{ textShadow: '0 0 22px rgba(200,169,110,0.32)' }}>
          Harmony Engineering
        </div>

        {/* Right: 3D Command Button */}
        <CommandButton onClick={() => setModalOpen(true)} />
      </nav>

      <LoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
