import { useNavigate } from 'react-router-dom'
import { Page, AvatarM } from '../../components'
import { BRAND } from '../../data/content'

/** 7.3 — Milestone check-in. Surfaced ~4 months post-purchase. */
export default function Milestone() {
  const navigate = useNavigate()

  return (
    <Page>
      <div className="pointer-events-none px-5 pt-3.5 opacity-50">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-[9px] bg-ink text-[14px] font-extrabold text-white">
            B
          </div>
          <div className="text-[17px] font-extrabold text-ink">{BRAND.name}</div>
        </div>
        <div className="mt-4 rounded-[20px] bg-white p-[18px]">
          <div className="text-[18px] font-extrabold text-navy">Family Floater 10L</div>
          <div className="pt-1 text-[13px] text-muted">Active · 4 months in</div>
        </div>
      </div>

      <div className="flex-1" />

      <div className="mx-4 mb-5 animate-rise rounded-[22px] bg-white p-5 shadow-[0_-6px_30px_rgba(15,27,52,.12)]">
        <div className="flex items-start gap-3">
          <AvatarM size={38} className="flex-none rounded-[13px]" />
          <div>
            <div className="text-[12px] font-bold text-[#8492a8]">
              {BRAND.aiAdvisor} · 4 months since you bought
            </div>
            <div className="pt-1.5 text-[16.5px] font-bold leading-[1.4] text-navy">
              Still have questions about anything in your policy?
            </div>
            <p className="pt-2 text-[13.5px] leading-[1.55] text-muted">
              Most people think of something around now — what counts as an emergency, whether a test
              is covered, how to add someone. Free to ask, always.
            </p>
          </div>
        </div>
        <div className="flex gap-2.5 pt-4">
          <button
            onClick={() => navigate('/advisory/intake')}
            className="flex-1 rounded-[14px] bg-ink py-3.5 text-center text-[14px] font-bold text-white"
          >
            Yes, one thing
          </button>
          <button
            onClick={() => navigate('/home')}
            className="rounded-[14px] px-4 py-3.5 text-center text-[14px] font-semibold text-muted"
          >
            All good
          </button>
        </div>
      </div>
    </Page>
  )
}
