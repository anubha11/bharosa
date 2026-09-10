import { useNavigate } from 'react-router-dom'
import { Page, Sheet, Button } from '../../components'
import { inr } from '../../lib/format'
import { useStore } from '../../store/store'

/** 8.1 — Claim entry. Reachable any time; fast-path note for an active admission. */
export default function ClaimEntry() {
  const navigate = useNavigate()
  const policy = useStore((s) => s.policy)!
  const startClaim = useStore((s) => s.startClaim)

  const begin = () => {
    startClaim()
    navigate('/claims/type')
  }

  return (
    <Page>
      <div className="pointer-events-none px-5 pt-3.5 opacity-45">
        <div className="text-[14px] text-muted">Morning, Aditya</div>
        <div className="mt-3 rounded-[20px] bg-white p-[18px]">
          <div className="text-[18px] font-extrabold text-navy">Family Floater 10L</div>
          <div className="pt-1 text-[13px] text-muted">Active · ₹{inr(policy.sumInsured)} cover left</div>
        </div>
      </div>

      <Sheet onClose={() => navigate('/home')}>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[23px] font-extrabold tracking-[-0.03em] text-navy">File a claim</div>
            <p className="pt-2 text-[14px] leading-[1.55] text-muted">
              Nothing is final until you submit. Stop and come back any time.
            </p>
          </div>
          <button onClick={() => navigate('/home')} aria-label="Close" className="text-[17px] text-[#8492a8]">
            ✕
          </button>
        </div>

        <div className="mt-[18px] rounded-[16px] bg-wash p-4 text-[13.5px] leading-[1.6] text-[#22314f]">
          If someone’s being admitted now, start here — we handle the hospital paperwork in parallel.
        </div>

        <div className="flex flex-col gap-2.5 pt-4">
          <Button onClick={begin}>Start a claim</Button>
          <Button variant="ghost" onClick={() => navigate('/advisory/human')}>
            Call me instead — I’d rather explain it
          </Button>
        </div>
      </Sheet>
    </Page>
  )
}
