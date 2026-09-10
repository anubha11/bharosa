import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button } from '../../components'
import { BRAND } from '../../data/content'
import { useStore } from '../../store/store'

/** 8.5 — Pre-submission check (step 4 of 4). Optional human review before filing. */
export default function PreSubmission() {
  const navigate = useNavigate()
  const submitClaim = useStore((s) => s.submitClaim)
  const markClaimReviewed = useStore((s) => s.markClaimReviewed)

  const submit = (reviewed: boolean) => {
    if (reviewed) markClaimReviewed()
    submitClaim()
    navigate('/claims/submitted')
  }

  return (
    <Page>
      <TopBar label="Claim · step 4 of 4" />
      <Body>
        <h1 className="text-[23px] font-extrabold leading-[1.2] tracking-[-0.03em] text-navy">
          Want a human to check this before it goes in?
        </h1>

        <div className="mt-4 rounded-[20px] bg-white p-[18px] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          <div className="flex items-start gap-3">
            <div className="h-[38px] w-[38px] flex-none rounded-[13px] bg-hairline2" />
            <div>
              <div className="text-[14.5px] font-bold text-navy">{BRAND.humanAdvisor}</div>
              <div className="text-[12.5px] text-muted">
                Claims advisor · 9 years · handles 40 of these a week
              </div>
            </div>
          </div>
          <p className="pt-3 text-[14px] leading-[1.6] text-[#42536f]">
            “Most first claims get queried over something small — a missing signature, a date that
            doesn’t match. Five minutes from me usually saves a week.”
          </p>
          <div className="mt-3.5 rounded-[13px] bg-wash p-3.5 text-[13px] text-[#22314f]">
            Free, adds about 2 hours. Your claim date is today either way.
          </div>
        </div>
      </Body>

      <Footer>
        <Button onClick={() => submit(true)}>Yes, have {BRAND.humanAdvisor.split(' ')[0]} check it</Button>
        <Button variant="ghost" onClick={() => submit(false)}>
          Submit it now
        </Button>
      </Footer>
    </Page>
  )
}
