import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Tracker } from '../../components'
import { inr } from '../../lib/format'
import { useStore } from '../../store/store'

/** 8.7 — Live status tracker. Vertical stepper driven by the claim history. */
export default function StatusTracker() {
  const navigate = useNavigate()
  const claim = useStore((s) => s.claim)

  const showQuery = claim.status === 'query-raised'
  const showResolution = claim.status === 'under-review' || claim.status === 'settled'

  return (
    <Page>
      <TopBar backTo="/home" />
      <Body>
        <h1 className="text-[23px] font-extrabold tracking-[-0.03em] text-navy">Your claim</h1>
        <p className="pt-1.5 text-[13px] text-muted">
          {claim.id} · ₹{inr(claim.claimedAmount)} claimed · updated 20 min ago
        </p>

        <div className="mt-[18px] rounded-[20px] bg-white px-[18px] py-5 shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          <Tracker history={claim.history} status={claim.status} />
        </div>

        {showQuery && (
          <button
            onClick={() => navigate('/claims/query')}
            className="mt-3.5 w-full rounded-[16px] bg-amberwash p-4 text-left"
          >
            <div className="text-[14px] font-bold text-[#8a5a00]">
              The insurer has asked for one more thing
            </div>
            <p className="pt-1.5 text-[13px] leading-[1.55] text-[#5f4718]">
              Nothing’s wrong. A routine question about the admission note.
            </p>
            <div className="pt-2.5 text-[13.5px] font-extrabold text-[#8a5a00]">See what they need →</div>
          </button>
        )}

        {showResolution && (
          <button
            onClick={() => navigate('/claims/resolution')}
            className="mt-3.5 w-full rounded-[16px] bg-wash p-4 text-left"
          >
            <div className="text-[14px] font-bold text-ink">Reply received — under final review</div>
            <p className="pt-1.5 text-[13px] leading-[1.55] text-[#22314f]">
              We’ll notify you the moment it settles. You can preview the settlement breakdown now.
            </p>
            <div className="pt-2.5 text-[13.5px] font-extrabold text-ink">See settlement →</div>
          </button>
        )}
      </Body>

      <Footer>
        <button
          onClick={() => navigate('/advisory/human')}
          className="rounded-[15px] border border-[#ccd6e6] p-3.5 text-center text-[13.5px] font-bold text-ink"
        >
          Talk to Rohit about this claim
        </button>
      </Footer>
    </Page>
  )
}
