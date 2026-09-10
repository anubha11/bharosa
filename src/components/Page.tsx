import type { ReactNode } from 'react'

interface PageProps {
  children: ReactNode
  /** Dark navy full-bleed background (used for ad-style and confirmation screens). */
  dark?: boolean
  className?: string
}

/**
 * The app canvas. A phone-width column, viewport-tall, centred on the pale
 * `canvas` letterbox on wider screens. Screens compose their own TopBar /
 * Body / Footer inside it.
 */
export default function Page({ children, dark = false, className = '' }: PageProps) {
  return (
    <div className="flex min-h-screen w-full justify-center bg-canvas">
      <div
        className={[
          'relative flex h-screen w-full max-w-app flex-col overflow-hidden',
          dark ? 'bg-navy text-white' : 'bg-surface text-navy',
          className,
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  )
}
