import type { ReactNode } from 'react'

interface SheetProps {
  children: ReactNode
  onClose?: () => void
  /** Dim + blur the content behind the sheet. */
  scrim?: boolean
}

/** A bottom sheet that slides up over the current screen. */
export default function Sheet({ children, onClose, scrim = true }: SheetProps) {
  return (
    <div className="absolute inset-0 z-30 flex flex-col justify-end">
      {scrim && (
        <button
          aria-label="Dismiss"
          onClick={onClose}
          className="absolute inset-0 bg-navy/25"
        />
      )}
      <div className="relative animate-sheet rounded-t-[26px] bg-white px-[22px] pb-7 pt-6 shadow-[0_-8px_40px_rgba(15,27,52,.18)]">
        {children}
      </div>
    </div>
  )
}
