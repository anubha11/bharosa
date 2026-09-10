import { useNavigate } from 'react-router-dom'
import { Page } from '../../components'

/** 4.4 — "Still unsure?" A quiet, non-modal prompt if the user lingers. */
export default function StillUnsure() {
  const navigate = useNavigate()

  return (
    <Page>
      <div className="pointer-events-none px-5 pt-3.5 opacity-50">
        <button aria-label="Back" className="text-xl leading-none text-navy">
          ←
        </button>
        <h1 className="pt-3.5 text-[24px] font-extrabold tracking-[-0.03em] text-navy">
          Three plans, and why
        </h1>
        <div className="mt-4 rounded-[20px] bg-white p-[18px] shadow-[0_1px_4px_rgba(16,24,40,.07)]">
          <div className="text-[17px] font-extrabold text-navy">Family Floater 10L</div>
          <div className="pt-1 text-[13px] text-muted">Niva Suraksha · 3 members · ₹1,940/mo</div>
        </div>
        <div className="mt-3 rounded-[20px] bg-white p-[18px] shadow-[0_1px_4px_rgba(16,24,40,.07)]">
          <div className="text-[17px] font-extrabold text-navy">Split cover 5L + 5L</div>
          <div className="pt-1 text-[13px] text-muted">Two policies · ₹2,210/mo</div>
        </div>
      </div>

      <div className="flex-1" />

      <div className="mx-4 mb-5 animate-rise rounded-[20px] bg-navy p-[18px]">
        <div className="flex items-start gap-3">
          <div className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[11px] bg-accent text-[14px] font-extrabold text-white">
            M
          </div>
          <div className="flex-1">
            <div className="text-[15px] font-bold leading-[1.45] text-white">
              Want to talk this through with someone?
            </div>
            <div className="pt-1.5 text-[13px] leading-[1.5] text-[#a9bcd8]">
              This choice is genuinely hard. No obligation, no follow-up calls.
            </div>
            <div className="flex gap-2 pt-3.5">
              <button
                onClick={() => navigate('/advisory/human')}
                className="rounded-[12px] bg-white px-3.5 py-2.5 text-[13.5px] font-bold text-navy"
              >
                Yes, connect me
              </button>
              <button
                onClick={() => navigate('/compare')}
                className="rounded-[12px] px-3 py-2.5 text-[13.5px] font-semibold text-[#a9bcd8]"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
