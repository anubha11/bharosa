import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface TopBarProps {
  /** Show the back chevron. Defaults to true. */
  back?: boolean
  /** Where back goes. Defaults to browser history (-1). */
  backTo?: string
  /** Small label on the right, e.g. "Setup · 1 of 5". */
  label?: string
  /** Arbitrary right-side content (a pill button, a link). Overrides `label`. */
  right?: ReactNode
  /** Thin progress bar fill 0–1, rendered between the chevron and the right slot. */
  progress?: number
}

export default function TopBar({ back = true, backTo, label, right, progress }: TopBarProps) {
  const navigate = useNavigate()
  const goBack = () => (backTo ? navigate(backTo) : navigate(-1))

  return (
    <div className="flex items-center gap-3 px-5 pb-1 pt-3">
      {back ? (
        <button
          onClick={goBack}
          aria-label="Back"
          className="-m-1 p-1 text-xl leading-none text-navy"
        >
          ←
        </button>
      ) : (
        <span className="w-2" />
      )}

      {progress !== undefined && (
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-hairline2">
          <div
            className="h-1 rounded-full bg-accent transition-all"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      )}

      {right ?? (label && <div className="ml-auto text-xs font-bold text-muted">{label}</div>)}
    </div>
  )
}
