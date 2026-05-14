// Place at: src/components/ui/input.tsx
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`w-full border-b border-cobalt/13 py-3 bg-transparent font-serif text-[15px] italic text-ink placeholder-muted placeholder-opacity-55 outline-none focus:border-cobalt transition-colors ${className}`}
      {...props}
    />
  )
)
Input.displayName = 'Input'
