import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button } from '../../components'

/** 6.5 — Claims explainer (4 of 5). Cashless vs reimbursement, calmly, before it's needed. */
export default function ClaimsExplainer() {
  const navigate = useNavigate()

  return (
    <Page>
      <TopBar label="Setup · 4 of 5" />
      <Body>
        <h1 className="text-[24px] font-extrabold leading-[1.2] tracking-[-0.03em] text-navy">
          If you ever need to claim
        </h1>
        <p className="pt-2 text-[13.5px] leading-[1.55] text-muted">
          Two minutes now, so you’re not learning it in a hospital corridor.
        </p>

        <div className="flex flex-col gap-3 pt-4">
          <div className="rounded-[18px] bg-white p-[18px] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
            <div className="flex items-center gap-2.5">
              <span className="rounded-full bg-[#eaf6f0] px-2.5 py-1.5 text-[11px] font-extrabold text-success">
                EASIER
              </span>
              <span className="text-[16.5px] font-extrabold text-navy">Cashless</span>
            </div>
            <p className="pt-2.5 text-[14px] leading-[1.6] text-[#42536f]">
              Show the e-card at a network hospital. They settle with the insurer directly. You pay
              only what’s excluded.
            </p>
          </div>

          <div className="rounded-[18px] bg-white p-[18px] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
            <div className="text-[16.5px] font-extrabold text-navy">Reimbursement</div>
            <p className="pt-2.5 text-[14px] leading-[1.6] text-[#42536f]">
              Anywhere else, you pay, keep every document, and we file for the money back. Slower —
              15–21 days — but it works everywhere.
            </p>
          </div>

          <div className="rounded-[16px] bg-wash p-4 text-[13.5px] leading-[1.6] text-[#22314f]">
            Remember one thing: tell us 48 hours before a planned admission, or within 24 hours of an
            emergency. That prevents most claim trouble.
          </div>
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/onboarding/advisor')}>Continue</Button>
      </Footer>
    </Page>
  )
}
