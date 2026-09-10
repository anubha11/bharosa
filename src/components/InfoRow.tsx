import type { ReactNode } from 'react'

interface InfoRowProps {
  k: ReactNode
  v: ReactNode
  note?: ReactNode
  /** Called when the "?" affordance is tapped (renders it only if provided). */
  onExplain?: () => void
  last?: boolean
}

/** A key / value row with an optional sub-note and an optional "explain" dot. */
export default function InfoRow({ k, v, note, onExplain, last = false }: InfoRowProps) {
  return (
    <div className={['py-3.5', last ? '' : 'border-b border-[#eef1f6]'].join(' ')}>
      <div className="flex items-baseline justify-between gap-2.5">
        <div className="flex items-center gap-1.5 text-[13.5px] text-muted">
          <span>{k}</span>
          {onExplain && (
            <button
              onClick={onExplain}
              aria-label="Explain this"
              className="flex h-4 w-4 items-center justify-center rounded-full border border-[#b9cbe6] text-[10px] font-extrabold text-accent"
            >
              ?
            </button>
          )}
        </div>
        <div className="text-right text-[14px] font-bold text-navy">{v}</div>
      </div>
      {note && <div className="pt-1.5 text-[12.5px] leading-[1.45] text-[#8492a8]">{note}</div>}
    </div>
  )
}
