'use client'

import { useState, useEffect } from 'react'
import { BrandStamp } from '@/components/ui/BrandStamp'

interface SplashGateProps {
  headline: string
}

export function SplashGate({ headline }: SplashGateProps) {
  const [revealed, setRevealed] = useState(false)
  const [hidden, setHidden] = useState(false)

  function reveal() {
    if (revealed) return
    setRevealed(true)

    // Reveal the main site
    const main = document.getElementById('main-site')
    if (main) {
      main.style.opacity = '1'
    }

    // Hide splash from DOM after animation completes
    setTimeout(() => setHidden(true), 1500)
  }

  // Desktop: hover-reveal via mouse enter
  function handleMouseEnter() {
    reveal()
  }

  // Mobile: tap-reveal
  function handleClick() {
    reveal()
  }

  if (hidden) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center flex-col gap-8 cursor-pointer select-none
        ${revealed ? 'pointer-events-none' : ''}`}
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 20% 14%, #F9F9F5 0%, transparent 58%), radial-gradient(ellipse at 80% 88%, #ECEBE3 0%, transparent 52%), linear-gradient(155deg, #F8F8F4 0%, #F1F0E8 45%, #EDECEA 100%)',
        opacity: revealed ? 0 : 1,
        transition: revealed ? 'opacity 0.35s ease 0.78s' : undefined,
      }}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      role="button"
      aria-label="Enter Harmony Engineering"
    >
      {/* Vertical split panels */}
      <div
        className="splash-panel-left"
        style={revealed ? { transform: 'translateX(-100%)' } : undefined}
      />
      <div
        className="splash-panel-right"
        style={revealed ? { transform: 'translateX(100%)' } : undefined}
      />

      {/* Content */}
      <div className="animate-stamp-drop">
        <BrandStamp size={148} rotation={-5} />
      </div>

      <p
        className="font-mono text-[10px] tracking-[0.27em] text-cobalt text-center uppercase leading-[2.1] opacity-60 max-w-[290px]"
        style={{ animation: 'fadeUp 0.9s 0.5s both' }}
      >
        Harmony Engineering:<br />
        {headline}
      </p>

      <span
        className="font-sans text-[10px] tracking-[0.26em] text-muted uppercase opacity-50"
        style={{ animation: 'fadeUp 0.9s 0.95s both' }}
      >
        Hover or tap to enter
      </span>
    </div>
  )
}
