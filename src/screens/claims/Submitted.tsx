import { useNavigate } from 'react-router-dom'
import { Page, Button } from '../../components'
import { CLAIM_TIMELINE } from '../../data/content'
import { useStore } from '../../store/store'

/** 8.6 — Submitted. Claim number + "here's what happens now". */
export default function Submitted() {
  const navigate = useNavigate()
  const claim = useStore((s) => s.claim)

  return (
    <Page>
      <div className="no-scrollbar flex min-h-0 flex-1 animate-rise flex-col gap-5 overflow-auto px-6 pt-14">
        <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[20px] bg-success text-[26px] text-white">
          ✓
        </div>
        <div>
          <h1 className="text-[27px] font-extrabold leading-[1.15] tracking-[-0.03em] text-navy">
            Claim submitted. Here’s what happens now.
          </h1>
          <p className="pt-2 text-[13.5px] text-muted">
            Claim {claim.id} · {claim.patient} · {claim.hospital}
          </p>
        </div>

        <div className="rounded-[20px] bg-white px-[18px] py-1.5 shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          {CLAIM_TIMELINE.map((t, i) => (
            <div
              key={t.what}
              className={[
                'flex gap-3.5 py-3.5',
                i < CLAIM_TIMELINE.length - 1 ? 'border-b border-[#eef1f6]' : '',
              ].join(' ')}
            >
              <div className="w-16 flex-none pt-0.5 font-mono text-[12px] text-accent">{t.when}</div>
              <div className="flex-1">
                <div className="text-[14px] font-bold text-navy">{t.what}</div>
                <div className="pt-1 text-[12.5px] leading-[1.5] text-muted">{t.note}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[13.5px] leading-[1.6] text-muted">
          No calls, no following up. If anything stalls, we chase the insurer.
        </p>
      </div>

      <div className="px-6 pb-7 pt-5">
        <Button onClick={() => navigate('/claims/tracker')}>See live status</Button>
      </div>
    </Page>
  )
}
