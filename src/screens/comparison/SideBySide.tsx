import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Footer, Button } from '../../components'
import { COMPARE_COLUMNS, COMPARE_ROWS } from '../../data/content'
import { useStore } from '../../store/store'

/** 4.3 — Side-by-side. Opt-in comparison table across the 3 plans. */
export default function SideBySide() {
  const navigate = useNavigate()
  const selectPlan = useStore((s) => s.selectPlan)

  const select = () => {
    selectPlan('family-floater-10l')
    navigate('/buy/confirm')
  }

  return (
    <Page>
      <TopBar
        right={
          <button
            onClick={() => navigate('/compare')}
            className="ml-auto rounded-full border border-[#ccd6e6] px-3 py-2 text-[12.5px] font-bold text-ink"
          >
            Back to cards
          </button>
        }
      />

      <div className="no-scrollbar flex min-h-0 flex-1 flex-col overflow-auto">
        <div className="px-5 pt-3.5">
          <h1 className="text-[23px] font-extrabold tracking-[-0.03em] text-navy">Side by side</h1>
          <p className="pt-1.5 text-[13px] text-muted">
            Same three plans, no reasoning. Scroll sideways.
          </p>
        </div>

        <div className="no-scrollbar mt-4 overflow-x-auto px-5">
          <div className="flex min-w-max gap-2.5">
            <div className="w-[104px] flex-none">
              <div className="h-[74px]" />
              {COMPARE_ROWS.map((r) => (
                <div
                  key={r}
                  className="flex h-[58px] items-center border-t border-[#e4e8f0] text-[12.5px] font-bold text-muted"
                >
                  {r}
                </div>
              ))}
            </div>

            {COMPARE_COLUMNS.map((c) => (
              <div
                key={c.planId}
                className="w-[132px] flex-none rounded-[16px] bg-white p-3 shadow-[0_1px_3px_rgba(16,24,40,.06)]"
              >
                <div className="h-[62px]">
                  <div className="text-[13.5px] font-extrabold leading-[1.25] text-navy">{c.name}</div>
                  <div className="pt-1 text-[14px] font-extrabold text-ink">{c.monthlyLabel}</div>
                </div>
                {c.values.map((v, i) => (
                  <div
                    key={i}
                    className="flex h-[58px] items-center border-t border-[#eef1f6] text-[13px] font-semibold leading-[1.35] text-[#22314f]"
                  >
                    {v}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1" />
      </div>

      <Footer>
        <Button onClick={select}>Select Family Floater 10L</Button>
      </Footer>
    </Page>
  )
}
