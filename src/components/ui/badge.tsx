// Place at: src/components/ui/badge.tsx
interface BadgeProps { children: React.ReactNode; className?: string; variant?: 'default' | 'outline' }

export function Badge({ children, className = '', variant = 'default' }: BadgeProps) {
  const base = 'inline-flex items-center font-mono text-[8px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full'
  const variants = {
    default: 'bg-cobalt text-pearl',
    outline: 'border border-cobalt text-cobalt',
  }
  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>
}
