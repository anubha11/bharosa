import type { ReactNode } from 'react'

/** Scrollable content region between the top bar and the footer CTA. */
export default function Body({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={['no-scrollbar flex min-h-0 flex-1 flex-col overflow-auto px-5 pt-4', className].join(
        ' ',
      )}
    >
      {children}
    </div>
  )
}
