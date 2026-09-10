import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'light' | 'ghost' | 'onDark'

const base =
  'inline-flex w-full items-center justify-center rounded-[15px] px-4 py-4 text-[15px] font-bold transition-colors disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-navy',
  light: 'bg-white text-ink border border-hairline2 hover:border-ink',
  ghost: 'bg-transparent text-ink py-3 hover:text-navy',
  onDark: 'bg-white text-navy hover:bg-white/90',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
}

export default function Button({ variant = 'primary', children, className = '', ...rest }: ButtonProps) {
  return (
    <button className={[base, variants[variant], className].join(' ')} {...rest}>
      {children}
    </button>
  )
}
