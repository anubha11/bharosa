import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, PlanCard } from '../../components'
import { PLANS } from '../../data/content'
import { useStore } from '../../store/store'

/** 4.1 — Recommendations. The 3 plan cards, tappable, plus an explicit escape. */
export default function Recommendations() {
  const navigate = useNavigate()
  const selectPlan = useStore((s) => s.selectPlan)

  return (
    <Page>
      <TopBar
        right={
          <button
            onClick={() => navigate('/compare/table')}
            className="ml-auto rounded-full border border-[#ccd6e6] px-3 py-2 text-[12.5px] font-bold text-ink"
          >
            Side-by-side table
          </button>
        }
      />

      <Body>
        <h1 className="text-[24px] font-extrabold tracking-[-0.03em] text-navy">Three plans, and why</h1>
        <p className="pt-1.5 text-[13.5px] text-muted">
          Tap a card for full detail. Nothing hidden behind a “know more”.
        </p>

        <div className="flex flex-col gap-3 pt-4">
          {PLANS.map((p) => (
            <PlanCard
              key={p.id}
              plan={p}
              to={`/compare/plan/${p.id}`}
              onClick={() => selectPlan(p.id)}
            />
          ))}
        </div>
      </Body>

      <Footer>
        <button
          onClick={() => navigate('/compare/unsure')}
          className="py-2.5 text-center text-[13.5px] font-semibold text-muted"
        >
          None of these feel right
        </button>
      </Footer>
    </Page>
  )
}
