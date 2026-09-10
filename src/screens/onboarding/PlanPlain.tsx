import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button } from '../../components'

/** 6.2 — Your plan, in plain words (1 of 5). COVERED / NOT COVERED. */
export default function PlanPlain() {
  const navigate = useNavigate()

  return (
    <Page>
      <TopBar label="Setup · 1 of 5" />
      <Body>
        <h1 className="text-[24px] font-extrabold tracking-[-0.03em] text-navy">
          Your plan, in plain words
        </h1>

        <div className="flex flex-col gap-3 pt-4">
          <div className="rounded-[18px] bg-white p-[18px] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
            <div className="text-[12.5px] font-extrabold tracking-[0.05em] text-success">COVERED</div>
            <p className="pt-2 text-[14px] leading-[1.65] text-[#22314f]">
              Any hospital stay over 24 hours — surgery, dengue, an accident, a heart problem. Room,
              ICU, surgeon, tests, medicines, and 60 days of follow-up. Cashless at 8,400 hospitals,
              62 in Mumbai.
            </p>
          </div>

          <div className="rounded-[18px] bg-white p-[18px] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
            <div className="text-[12.5px] font-extrabold tracking-[0.05em] text-[#b3261e]">NOT COVERED</div>
            <p className="pt-2 text-[14px] leading-[1.65] text-[#22314f]">
              Doctor visits without admission, dental and cosmetic work, and dad’s BP claims until
              October 2028 — that last one you knew about.
            </p>
          </div>

          <div className="rounded-[18px] bg-white px-[18px] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
            <div className="flex justify-between border-b border-[#eef1f6] py-3.5">
              <div>
                <div className="text-[14px] font-bold text-navy">Sum insured</div>
                <div className="pt-1 text-[12.5px] text-[#8492a8]">
                  Most the insurer pays a year, shared by all three
                </div>
              </div>
              <div className="whitespace-nowrap pl-3 text-[15px] font-extrabold text-ink">₹10L</div>
            </div>
            <div className="flex justify-between py-3.5">
              <div>
                <div className="text-[14px] font-bold text-navy">Initial waiting period</div>
                <div className="pt-1 text-[12.5px] text-[#8492a8]">
                  Accidents covered today, illnesses after 30 days
                </div>
              </div>
              <div className="whitespace-nowrap pl-3 text-[15px] font-extrabold text-ink">30 days</div>
            </div>
          </div>
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/onboarding/ecard')}>Continue</Button>
      </Footer>
    </Page>
  )
}
