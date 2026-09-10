import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button } from '../../components'
import { inr } from '../../lib/format'
import { useStore } from '../../store/store'

/** 8.9 — Resolution. Settlement breakdown + a visible appeal path even on a normal settlement. */
export default function Resolution() {
  const navigate = useNavigate()
  const claim = useStore((s) => s.claim)
  const advanceClaim = useStore((s) => s.advanceClaim)
  const s = claim.settlement

  // Reaching this screen in the demo walkthrough settles the claim.
  useEffect(() => {
    advanceClaim('settled', `₹${inr(s.paid)} paid to ${claim.hospital}`)
  }, [advanceClaim, claim.hospital, s.paid])

  const rows: [string, string][] = [
    ['Hospital bill', `₹${inr(s.bill)}`],
    ['Approved and paid', `₹${inr(s.paid)}`],
    ['Not covered', `₹${inr(s.notCovered)}`],
    ['Paid by you', `₹${inr(s.notCovered)}`],
    ['Settled on', s.settledOn],
  ]

  return (
    <Page>
      <TopBar backTo="/claims/tracker" />
      <Body>
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[18px] bg-success text-[24px] text-white">
          ✓
        </div>
        <h1 className="pt-3.5 text-[26px] font-extrabold leading-[1.15] tracking-[-0.03em] text-navy">
          Settled. The hospital has been paid.
        </h1>
        <p className="pt-2 text-[14px] leading-[1.55] text-muted">
          You owe the hospital nothing more for this admission.
        </p>

        <div className="mt-4 rounded-[20px] bg-white px-[18px] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          {rows.map(([k, v], i) => (
            <div
              key={k}
              className={[
                'flex items-baseline justify-between py-3.5',
                i < rows.length - 1 ? 'border-b border-[#eef1f6]' : '',
              ].join(' ')}
            >
              <div className="text-[13.5px] text-muted">{k}</div>
              <div className="text-[14.5px] font-bold text-navy">{v}</div>
            </div>
          ))}
        </div>

        <div className="mt-3.5 rounded-[16px] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,.05)]">
          <div className="text-[14px] font-bold text-navy">
            Why ₹{inr(s.notCovered)} was not covered
          </div>
          <p className="pt-1.5 text-[13px] leading-[1.55] text-muted">{s.notCoveredBreakdown}</p>
        </div>

        <div className="mt-3.5 rounded-[16px] bg-wash p-4 text-[13.5px] leading-[1.6] text-[#22314f]">
          Cover left for the rest of the year:{' '}
          <strong className="text-ink">₹{inr(s.remainingCover)}</strong>. It resets to ₹10,00,000 on
          renewal.
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/claims/followup')}>View settlement letter</Button>
        <Button variant="ghost" onClick={() => navigate('/advisory/human')}>
          Something looks wrong — start an appeal with Rohit
        </Button>
      </Footer>
    </Page>
  )
}
