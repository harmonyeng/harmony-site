interface BrandStampProps {
  size?: number
  rotation?: number
  className?: string
}

export function BrandStamp({ size = 108, rotation = 6, className = '' }: BrandStampProps) {
  return (
    <div
      className={className}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center center',
        filter: 'drop-shadow(1px 3px 6px rgba(26,79,173,0.18)) drop-shadow(0 1px 2px rgba(0,0,0,0.10))',
        transition: 'opacity 0.3s, transform 0.3s',
      }}
    >
      <svg
        viewBox="0 0 130 130"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Harmony Engineering stamp — Est. 2025"
        role="img"
      >
        {/* Ink-bleed impression layer */}
        <rect x="4" y="4" width="122" height="122" rx="18" ry="18"
          fill="rgba(26,79,173,0.035)" stroke="none" />
        {/* Outer frame */}
        <rect x="6" y="6" width="118" height="118" rx="17" ry="17"
          fill="none" stroke="#1A4FAD" strokeWidth="2.4" />
        {/* Dashed inner border */}
        <rect x="11" y="11" width="108" height="108" rx="13" ry="13"
          fill="none" stroke="#C4906A" strokeWidth="1.2" strokeDasharray="5 2.8" />
        {/* Text */}
        <text x="65" y="50" textAnchor="middle"
          fontFamily="'Space Mono', monospace" fontSize="11.5" fontWeight="700"
          fill="#1A4FAD" letterSpacing="2">HARMONY</text>
        <text x="65" y="67" textAnchor="middle"
          fontFamily="'Space Mono', monospace" fontSize="11.5" fontWeight="700"
          fill="#1A4FAD" letterSpacing="2">ENGINEERING</text>
        <line x1="20" y1="76" x2="110" y2="76"
          stroke="#C4906A" strokeWidth="1" opacity="0.7" />
        <text x="65" y="93" textAnchor="middle"
          fontFamily="'Space Mono', monospace" fontSize="10"
          fill="#C4906A" letterSpacing="1">— EST. 2025 —</text>
      </svg>
    </div>
  )
}
