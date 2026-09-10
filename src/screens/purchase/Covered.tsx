import { useNavigate } from 'react-router-dom'
import { Page, Button } from '../../components'
import { BRAND } from '../../data/content'
import { inr } from '../../lib/format'
import { useStore } from '../../store/store'

/** 5.6 — "You're covered". Warm confirmation, straight into onboarding. */
export default function Covered() {
  const navigate = useNavigate()
  const policy = useStore((s) => s.policy)!
  const firstName = useStore((s) => s.profile.fullName.split(' ')[0])

  const rows: [string, string][] = [
    ['Cover', `₹${inr(policy.sumInsured)}`],
    ['Who', ['You', ...policy.members.slice(1).map((m) => m.split(' ')[0])].join(', ')],
    ['Active from', `Today, ${policy.startTime}`],
    ['Policy number', policy.number],
  ]

  return (
    <Page dark>
      <div className="no-scrollbar flex min-h-0 flex-1 animate-rise flex-col gap-5 overflow-auto px-6 pt-[60px]">
        <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[22px] bg-success text-[28px] text-white">
          ✓
        </div>
        <div>
          <h1 className="text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            You’re covered.
          </h1>
          <p className="pt-3 text-[15px] leading-[1.6] text-[#c3d4ec]">
            You, mum and dad have ₹10 lakh of hospital cover. Not tomorrow, not once a document
            arrives. Now, {firstName}.
          </p>
        </div>

        <div className="rounded-[20px] bg-white/10 p-[18px]">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 text-[14px]">
              <span className="text-[#a9bcd8]">{k}</span>
              <span className="font-bold text-white">{v}</span>
            </div>
          ))}
        </div>

        <p className="text-[13.5px] leading-[1.55] text-[#a9bcd8]">
          No PDF-and-disappear. {BRAND.aiAdvisor} walks you through what you bought — two minutes,
          right here.
        </p>
      </div>

      <div className="px-6 pb-7 pt-5">
        <Button variant="onDark" onClick={() => navigate('/onboarding')}>
          Continue
        </Button>
      </div>
    </Page>
  )
}
