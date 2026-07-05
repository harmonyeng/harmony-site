export function Navbar() {
  return (
    <nav
      className="h-[52px] flex items-center justify-center px-9 sticky top-0 z-40"
      style={{
        background: 'linear-gradient(90deg, #0F3580 0%, #1A4FAD 50%, #0F3580 100%)',
        borderBottom: '1px solid rgba(196,144,106,0.22)',
        boxShadow: '0 1px 24px rgba(26,79,173,0.28)',
        borderRadius: '0 0 10px 10px',
      }}
    >
      <div
        className="font-sans text-[13px] tracking-[0.18em] text-gold uppercase"
        style={{ textShadow: '0 0 22px rgba(200,169,110,0.32)' }}
      >
        Harmony Engineering
      </div>
    </nav>
  )
}
