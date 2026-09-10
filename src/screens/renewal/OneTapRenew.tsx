import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button } from '../../components'
import { RENEWAL_PREMIUM } from '../../data/content'
import { rupees } from '../../lib/format'
import { useStore } from '../../store/store'

/** 9.2 — One-tap renew. Same plan / people / insurer, no fresh declaration. */
export default function OneTapRenew() {
  const navigate = useNavigate()
  const policy = useStore((s) => s.policy)!

  return (
    <Page>
      <TopBar />
      <Body>
        <h1 className="text-[24px] font-extrabold tracking-[-0.03em] text-navy">Renew in one tap</h1>
        <p className="pt-1.5 text-[13.5px] text-muted">
          Same plan, same people, same insurer. No forms, no fresh declaration.
        </p>

        <div className="mt-4 rounded-[20px] bg-white p-[18px] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          <div className="text-[17.5px] font-extrabold text-navy">Family Floater 10L</div>
          <div className="pt-1 text-[13px] text-muted">
            {['You', ...policy.members.slice(1).map((m) => m.split(' ')[0])].join(', ')} · 09 Sep 2027
            → 08 Sep 2028
          </div>
          <div className="mt-3.5 flex items-baseline justify-between border-t border-[#eef1f6] pt-4">
            <div className="text-[15px] font-bold text-navy">Total</div>
            <div className="text-[24px] font-extrabold text-ink">{rupees(RENEWAL_PREMIUM)}</div>
          </div>
          <div className="pt-1.5 text-[12.5px] text-[#8492a8]">
            ₹1,560 more — standard age-band revision, not a penalty for claiming.
          </div>
        </div>

        <div className="mt-3.5 flex items-center gap-3 rounded-[15px] border-2 border-ink bg-white p-3.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-wash text-[13px] font-extrabold text-ink">
            UPI
          </div>
          <div className="flex-1">
            <div className="text-[14.5px] font-bold text-navy">UPI · rao.aditya@okbank</div>
            <div className="text-[12.5px] text-muted">Saved from last year</div>
          </div>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[11px] text-white">
            ✓
          </span>
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/home')}>Renew for {rupees(RENEWAL_PREMIUM)}</Button>
        <div className="pt-1 text-center text-[12px] text-[#8492a8]">
          Cover continues without a day’s gap.
        </div>
      </Footer>
    </Page>
  )
}
