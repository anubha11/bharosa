import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  /** Mono, accent-blue treatment (used for "MYTH 03 OF 07", "QUERY RAISED · 9 SEP"). */
  mono?: boolean
  className?: string
}

export default function SectionLabel({ children, mono = false, className = '' }: SectionLabelProps) {
  return (
    <div
      className={[
        mono
          ? 'font-mono text-[11.5px] tracking-[0.06em] text-accent'
          : 'text-[13px] font-extrabold uppercase tracking-[0.04em] text-muted',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
