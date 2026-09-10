import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body } from '../../components'
import { useStore } from '../../store/store'

/** 8.2 — Claim type (step 1 of 4). Cashless vs reimbursement, plus an "I don't know" escape. */
export default function ClaimType() {
  const navigate = useNavigate()
  const updateClaim = useStore((s) => s.updateClaim)

  const choose = (type: 'cashless' | 'reimbursement') => {
    updateClaim({ type })
    navigate('/claims/incident')
  }

  return (
    <Page>
      <TopBar label="Claim · step 1 of 4" />
      <Body>
        <h1 className="text-[23px] font-extrabold tracking-[-0.03em] text-navy">
          Which situation are you in?
        </h1>
        <p className="pt-1.5 text-[13.5px] text-muted">Not sure? Pick the first — we can switch later.</p>

        <div className="flex flex-col gap-3 pt-[18px]">
          <button
            onClick={() => choose('cashless')}
            className="rounded-[18px] bg-white p-[18px] text-left shadow-[0_1px_3px_rgba(16,24,40,.06)]"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-[17px] font-extrabold text-navy">Cashless</span>
              <span className="rounded-full bg-[#eaf6f0] px-2.5 py-1.5 text-[10.5px] font-extrabold text-success">
                NO MONEY UPFRONT
              </span>
            </div>
            <p className="pt-2.5 text-[14px] leading-[1.6] text-[#42536f]">
              The hospital is in our network and the bill isn’t paid yet. We settle with them directly.
            </p>
          </button>

          <button
            onClick={() => choose('reimbursement')}
            className="rounded-[18px] bg-white p-[18px] text-left shadow-[0_1px_3px_rgba(16,24,40,.06)]"
          >
            <div className="text-[17px] font-extrabold text-navy">Reimbursement</div>
            <p className="pt-2.5 text-[14px] leading-[1.6] text-[#42536f]">
              You’ve already paid, or the hospital isn’t in our network. Send the bills, we pay you back.
            </p>
          </button>

          <button
            onClick={() => navigate('/advisory/human')}
            className="rounded-[18px] border border-dashed border-[#c3ccdb] p-4 text-left"
          >
            <div className="text-[14px] font-bold text-ink">I genuinely don’t know which</div>
            <div className="pt-1 text-[13px] text-muted">
              Tell us the hospital name and we’ll work it out.
            </div>
          </button>
        </div>
      </Body>
    </Page>
  )
}
