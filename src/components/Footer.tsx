import type { ReactNode } from 'react'

/** Sticky bottom action area holding the primary CTA (and optional sub-actions). */
export default function Footer({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-1.5 px-5 pb-6 pt-4">{children}</div>
}
