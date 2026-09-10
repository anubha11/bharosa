import { Link } from 'react-router-dom'
import { Page } from '../components'
import { ROUTES } from '../routes'
import { BRAND } from '../data/content'
import { useStore } from '../store/store'

/**
 * Developer index — not part of the product. A flat list of every screen so
 * reviewers can jump straight to any of the 41 routes, plus a demo reset.
 * Reachable only at /dev.
 */
export default function DevIndex() {
  const resetDemo = useStore((s) => s.resetDemo)

  const stages = [...new Set(ROUTES.map((r) => r.stage))]

  return (
    <Page>
      <div className="no-scrollbar flex-1 overflow-auto px-5 py-6">
        <div className="text-[15px] font-extrabold tracking-[-0.02em] text-navy">
          {BRAND.name} — 41 screens
        </div>
        <p className="pt-1 text-[12.5px] leading-[1.5] text-muted">
          Every screen is a real route. This index is a dev aid, not a product screen.
        </p>

        <button
          onClick={() => {
            resetDemo()
            location.reload()
          }}
          className="mt-3 rounded-[10px] border border-hairline bg-white px-3 py-2 text-[12.5px] font-bold text-ink"
        >
          Reset demo data
        </button>

        <div className="flex flex-col gap-5 pt-5">
          {stages.map((stage) => (
            <div key={stage}>
              <div className="pb-2 text-[11px] font-extrabold uppercase tracking-[0.07em] text-[#8492a8]">
                {stage}
              </div>
              <div className="flex flex-col gap-1.5">
                {ROUTES.filter((r) => r.stage === stage).map((r) => (
                  <Link
                    key={r.id}
                    to={r.path.replace(':planId', 'family-floater-10l')}
                    className="flex items-center gap-2.5 rounded-[10px] border border-hairline2 bg-white px-3 py-2.5 hover:border-ink"
                  >
                    <span className="w-9 flex-none font-mono text-[11px] text-accent">{r.id}</span>
                    <span className="text-[13px] font-semibold text-[#22314f]">{r.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  )
}
