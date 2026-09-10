import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button } from '../../components'
import { BRAND } from '../../data/content'
import { inr } from '../../lib/format'
import { useStore } from '../../store/store'

/** 6.3 — Digital e-card (2 of 5). Also reachable from the dashboard / bottom nav. */
export default function Ecard() {
  const navigate = useNavigate()
  const policy = useStore((s) => s.policy)!
  const holder = useStore((s) => s.profile.fullName)
  const dependents = policy.members.slice(1)

  return (
    <Page>
      <TopBar label="Setup · 2 of 5" />
      <Body>
        <h1 className="text-[24px] font-extrabold tracking-[-0.03em] text-navy">Your e-card is ready</h1>
        <p className="pt-1.5 text-[13.5px] text-muted">
          What a hospital desk asks for. Save it now, not at 2am.
        </p>

        <div className="mt-4 rounded-[22px] bg-navy p-5 shadow-[0_8px_24px_-8px_rgba(18,50,110,.5)]">
          <div className="flex items-start justify-between">
            <div className="text-[13px] font-extrabold text-white">{BRAND.name}</div>
            <div className="font-mono text-[11px] text-[#9fb4d4]">CASHLESS</div>
          </div>
          <div className="pt-[22px] text-[19px] font-extrabold text-white">{holder}</div>
          <div className="text-[12.5px] text-[#a9bcd8]">+ {dependents.join(', ')}</div>

          <div className="flex gap-[22px] pt-5">
            <div>
              <div className="text-[10.5px] tracking-[0.06em] text-[#7f92b0]">POLICY NO</div>
              <div className="pt-1 font-mono text-[13.5px] text-white">{policy.number}</div>
            </div>
            <div>
              <div className="text-[10.5px] tracking-[0.06em] text-[#7f92b0]">VALID TILL</div>
              <div className="pt-1 font-mono text-[13.5px] text-white">{policy.renewalDate}</div>
            </div>
          </div>

          <div className="flex items-end justify-between pt-[18px]">
            <div>
              <div className="text-[10.5px] tracking-[0.06em] text-[#7f92b0]">SUM INSURED</div>
              <div className="text-[17px] font-extrabold text-white">₹{inr(policy.sumInsured)}</div>
            </div>
            <div
              className="h-[52px] w-[52px] rounded-[10px]"
              style={{
                background: 'repeating-linear-gradient(90deg,#fff 0 3px,#12326e 3px 6px)',
              }}
            />
          </div>
        </div>

        <div className="flex gap-2.5 pt-4">
          <button className="flex-1 rounded-[14px] border border-hairline2 bg-white p-3.5 text-[13.5px] font-bold text-ink">
            Save to phone
          </button>
          <button className="flex-1 rounded-[14px] border border-hairline2 bg-white p-3.5 text-[13.5px] font-bold text-ink">
            Share
          </button>
        </div>

        <div className="mt-3 rounded-[14px] bg-wash p-3.5 text-[13px] leading-[1.55] text-[#22314f]">
          Send it to your parents — they can use it without you there.
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/onboarding/hospitals')}>Continue</Button>
      </Footer>
    </Page>
  )
}
