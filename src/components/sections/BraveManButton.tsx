import Link from 'next/link'

export function BraveManButton() {
  return (
    <div>
      <div className="font-mono text-[9px] tracking-[0.24em] text-muted uppercase mb-4 flex items-center gap-2.5 opacity-75 after:content-[''] after:flex-1 after:h-px after:bg-cobalt/13">
        For Partners
      </div>
      <Link
        href="/brave-man"
        className="group w-full border border-cobalt rounded-steel px-[18px] py-5 flex items-center gap-3.5 hover:bg-cobalt transition-colors"
        style={{ textDecoration: 'none' }}
      >
        <div className="w-8 h-8 border border-cobalt/30 rounded-full flex items-center justify-center text-[14px] flex-shrink-0 group-hover:border-white/25 transition-colors">
          ⚙
        </div>
        <div>
          <div className="font-serif text-[15px] font-normal text-cobalt tracking-[0.06em] group-hover:text-pearl transition-colors">
            Brave Man Access
          </div>
          <div className="font-mono text-[8px] tracking-[0.14em] text-muted uppercase mt-0.5 group-hover:text-white/50 transition-colors">
            The home manager's operational guide
          </div>
        </div>
      </Link>
    </div>
  )
}
