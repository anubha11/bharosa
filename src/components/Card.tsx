import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** Tone of the surface. */
  tone?: 'white' | 'wash' | 'amber' | 'navy'
  className?: string
}

const tones = {
  white: 'bg-white text-navy shadow-[0_1px_3px_rgba(16,24,40,.06)]',
  wash: 'bg-wash text-[#22314f]',
  amber: 'bg-amberwash text-[#5f4718]',
  navy: 'bg-navy text-white',
}

export default function Card({ children, tone = 'white', className = '', ...rest }: CardProps) {
  return (
    <div className={['rounded-card p-[18px]', tones[tone], className].join(' ')} {...rest}>
      {children}
    </div>
  )
}
