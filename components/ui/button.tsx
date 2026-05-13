import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-mono text-[9.5px] tracking-[0.2em] uppercase rounded-steel transition-all duration-200 cursor-pointer disabled:opacity-50'

    const variants = {
      default: 'bg-cobalt text-pearl hover:opacity-85',
      outline: 'border border-cobalt text-cobalt hover:bg-cobalt hover:text-pearl',
      ghost:   'text-cobalt hover:bg-cobalt/5',
    }

    const sizes = {
      sm: 'px-4 py-2',
      md: 'px-6 py-2.5',
      lg: 'px-8 py-3.5',
    }

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
