'use client'

interface CommandButtonProps {
  onClick: () => void
}

export function CommandButton({ onClick }: CommandButtonProps) {
  function handleClick() {
    playMechanicalClick()
    onClick()
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Command Center — Login or Sign up"
      title="Command Center"
      className="relative flex items-center justify-center w-[38px] h-[38px] rounded-full border-none cursor-pointer transition-all duration-75 active:scale-90"
      style={{
        background: 'radial-gradient(circle at 36% 30%, #4d84d8 0%, #2358b5 28%, #1A4FAD 54%, #0d3282 80%, #07205a 100%)',
        boxShadow:
          '3px 3px 7px rgba(0,0,0,0.58), -1px -1px 3px rgba(255,255,255,0.10), inset 0 1.5px 2px rgba(255,255,255,0.20), inset 0 -2px 5px rgba(0,0,0,0.50)',
      }}
    >
      {/* Inner ring highlight */}
      <span
        className="absolute inset-[2px] rounded-full pointer-events-none"
        style={{
          border: '1.5px solid transparent',
          borderTopColor: 'rgba(255,255,255,0.24)',
          borderLeftColor: 'rgba(255,255,255,0.10)',
        }}
      />
      {/* Deep inner ring */}
      <span
        className="absolute inset-[6px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(255,255,255,0.07)' }}
      />
      {/* Icon */}
      <svg
        className="relative z-10 w-[15px] h-[15px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8A96E"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    </button>
  )
}

// Subtle mechanical click via Web Audio API
function playMechanicalClick() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'square'
    osc.frequency.setValueAtTime(920, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(175, ctx.currentTime + 0.068)
    gain.gain.setValueAtTime(0.044, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.072)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.072)
  } catch {
    // AudioContext unavailable — silent fallback
  }
}
