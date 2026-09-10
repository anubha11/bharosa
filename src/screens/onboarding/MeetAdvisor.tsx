import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button, AvatarM } from '../../components'
import { BRAND } from '../../data/content'

/** 6.6 — Meet your advisor (5 of 5). Meera as an ongoing contact; names Rohit Menon. */
export default function MeetAdvisor() {
  const navigate = useNavigate()

  return (
    <Page>
      <TopBar label="Setup · 5 of 5" />
      <Body className="gap-5">
        <div className="flex items-center gap-3.5 pt-4">
          <AvatarM size={64} className="rounded-[22px]" />
          <div>
            <div className="text-[21px] font-extrabold tracking-[-0.02em] text-navy">
              {BRAND.aiAdvisor}
            </div>
            <div className="text-[13px] text-muted">Your advisor · not a chatbot queue</div>
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          <p className="text-[16px] leading-[1.6] text-[#22314f]">
            “I’m still here — not just for buying. If a hospital says something confusing, a claim
            gets stuck, or you want to check whether something’s covered, message me. Same
            conversation, no starting over.”
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <button
            onClick={() => navigate('/advisory/intake')}
            className="flex items-center justify-between rounded-[15px] border border-hairline2 bg-white p-3.5"
          >
            <div className="text-[14.5px] font-bold text-navy">Message {BRAND.aiAdvisor}</div>
            <span className="text-muted">→</span>
          </button>
          <button
            onClick={() => navigate('/advisory/human')}
            className="flex items-center justify-between rounded-[15px] border border-hairline2 bg-white p-3.5 text-left"
          >
            <div>
              <div className="text-[14.5px] font-bold text-navy">{BRAND.humanAdvisor}</div>
              <div className="text-[12.5px] text-muted">The human advisor you spoke to</div>
            </div>
            <span className="text-muted">→</span>
          </button>
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/onboarding/reminders')}>Continue</Button>
      </Footer>
    </Page>
  )
}
