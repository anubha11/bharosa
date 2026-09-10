import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button, AvatarM } from '../../components'
import { BRAND } from '../../data/content'

const FEELINGS = ['Hard', 'Okay', 'Easier than expected']

/** 8.10 — Post-claim follow-up. A human check-in 3 days later from Meera. */
export default function PostClaimFollowup() {
  const navigate = useNavigate()
  const [feeling, setFeeling] = useState('Easier than expected')

  return (
    <Page>
      <TopBar />
      <Body className="gap-[18px]">
        <div className="flex items-start gap-3">
          <AvatarM size={44} className="flex-none rounded-[15px]" />
          <div>
            <div className="text-[12px] font-bold text-[#8492a8]">
              {BRAND.aiAdvisor} · 3 days after settlement
            </div>
            <div className="pt-1.5 text-[20px] font-extrabold leading-[1.3] tracking-[-0.02em] text-navy">
              How is your dad doing?
            </div>
          </div>
        </div>

        <div className="rounded-[18px] bg-white p-[18px] text-[14.5px] leading-[1.6] text-[#22314f] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          “The claim’s closed, but I wanted to check in. His follow-up tests and medicines are covered
          for 60 days — send me the prescriptions and I’ll tell you which bills to keep.”
        </div>

        <div className="rounded-[18px] bg-white p-[18px] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          <div className="text-[14px] font-bold text-navy">How did the claim feel?</div>
          <div className="pt-1 text-[12.5px] text-muted">
            One tap, straight to the team that handled it.
          </div>
          <div className="flex gap-2 pt-3.5">
            {FEELINGS.map((f) => (
              <button
                key={f}
                onClick={() => setFeeling(f)}
                className={[
                  'flex-1 rounded-[12px] border py-3 text-center text-[13px] font-bold',
                  feeling === f
                    ? 'border-ink bg-ink text-white'
                    : 'border-hairline text-[#22314f]',
                ].join(' ')}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/home')}>Send and go home</Button>
        <Button variant="ghost" onClick={() => navigate('/renewal')}>
          Jump ahead: renewal →
        </Button>
      </Footer>
    </Page>
  )
}
