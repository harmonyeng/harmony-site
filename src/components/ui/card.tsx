// Place at: src/components/ui/card.tsx
interface CardProps { children: React.ReactNode; className?: string }

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`border border-cobalt/13 rounded-steel bg-white/25 ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: CardProps) {
  return <div className={`px-6 pt-6 pb-2 ${className}`}>{children}</div>
}

export function CardContent({ children, className = '' }: CardProps) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>
}
