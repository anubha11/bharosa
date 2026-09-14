import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES, type RouteDef } from '../routes'
import { useStore } from '../store/store'

/**
 * Global "jump to any screen" utility. A small floating bubble (bottom-right,
 * beneath where the advisor FAB sits) that opens a searchable list of all 41
 * routes grouped by stage. This is navigation scaffolding for exploring/
 * demoing the app — not a product screen — so it stays understated and out
 * of the way of the actual UI.
 */
export default function ScreenNav() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const resetDemo = useStore((s) => s.resetDemo)

  const stages = useMemo(() => [...new Set(ROUTES.map((r) => r.stage))], [])
  const q = query.trim().toLowerCase()
  const filtered = q
    ? ROUTES.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.id.toLowerCase().includes(q) ||
          r.stage.toLowerCase().includes(q),
      )
    : null

  const go = (path: string) => {
    navigate(path.replace(':planId', 'family-floater-10l'))
    setOpen(false)
    setQuery('')
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close screen navigator' : 'Jump to any screen'}
        title="Jump to any screen"
        className="fixed bottom-4 right-4 z-[999] flex h-11 w-11 items-center justify-center rounded-full bg-navy/70 text-white opacity-70 shadow-[0_6px_18px_-4px_rgba(15,27,52,.55)] backdrop-blur transition hover:opacity-100 focus-visible:opacity-100"
      >
        {open ? (
          <span className="text-[18px] leading-none">✕</span>
        ) : (
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <rect x="2" y="2" width="6.5" height="6.5" rx="1.5" />
            <rect x="11.5" y="2" width="6.5" height="6.5" rx="1.5" />
            <rect x="2" y="11.5" width="6.5" height="6.5" rx="1.5" />
            <rect x="11.5" y="11.5" width="6.5" height="6.5" rx="1.5" />
          </svg>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[998] flex items-end justify-center bg-navy/30 sm:items-center sm:p-4"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[82vh] w-full max-w-[420px] flex-col rounded-t-[22px] bg-white shadow-[0_20px_60px_rgba(15,27,52,.35)] sm:rounded-[20px]"
          >
            <div className="flex items-center justify-between border-b border-hairline2 px-5 py-4">
              <div>
                <div className="text-[16px] font-extrabold text-navy">Jump to a screen</div>
                <div className="text-[12px] text-muted">All 41 · any stage · any time</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="text-[18px] text-muted"
              >
                ✕
              </button>
            </div>

            <div className="px-5 pt-3.5">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search screens — “claim”, “quote”, “9.2”…"
                className="w-full rounded-full border border-hairline2 px-4 py-2.5 text-[13.5px] outline-none focus:border-ink"
              />
            </div>

            <div className="no-scrollbar flex-1 overflow-auto px-5 py-3.5">
              {filtered ? (
                <div className="flex flex-col gap-1.5">
                  {filtered.map((r) => (
                    <ScreenRow key={r.id} route={r} active={location.pathname === r.path} onClick={() => go(r.path)} />
                  ))}
                  {filtered.length === 0 && (
                    <div className="py-6 text-center text-[13px] text-muted">
                      No screens match “{query}”.
                    </div>
                  )}
                </div>
              ) : (
                stages.map((stage) => (
                  <div key={stage} className="pb-4">
                    <div className="pb-1.5 text-[11px] font-extrabold uppercase tracking-[0.07em] text-[#8492a8]">
                      {stage}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {ROUTES.filter((r) => r.stage === stage).map((r) => (
                        <ScreenRow
                          key={r.id}
                          route={r}
                          active={location.pathname === r.path}
                          onClick={() => go(r.path)}
                        />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex items-center justify-between border-t border-hairline2 px-5 py-3">
              <button
                onClick={() => {
                  resetDemo()
                  window.location.reload()
                }}
                className="text-[12.5px] font-bold text-ink"
              >
                Reset demo data
              </button>
              <div className="text-[12px] text-muted">{location.pathname}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ScreenRow({
  route,
  active,
  onClick,
}: {
  route: RouteDef
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={[
        'flex items-center gap-2.5 rounded-[10px] border px-3 py-2.5 text-left',
        active ? 'border-ink bg-wash' : 'border-hairline2 bg-white hover:border-ink',
      ].join(' ')}
    >
      <span className="w-9 flex-none font-mono text-[11px] text-accent">{route.id}</span>
      <span className="flex-1 text-[13px] font-semibold text-[#22314f]">{route.name}</span>
      {active && <span className="text-[10px] font-extrabold text-ink">HERE</span>}
    </button>
  )
}
