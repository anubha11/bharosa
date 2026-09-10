import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button } from '../../components'
import { planById } from '../../data/content'
import { rupees } from '../../lib/format'
import { useStore } from '../../store/store'

/** 5.1 — Selection confirmation. Restates the choice + the two trade-offs accepted. */
export default function SelectionConfirm() {
  const navigate = useNavigate()
  const plan = planById(useStore((s) => s.profile.selectedPlanId))

  return (
    <Page>
      <TopBar />
      <Body>
        <h1 className="text-[25px] font-extrabold leading-[1.2] tracking-[-0.03em] text-navy">
          This is what you’re choosing, in your words.
        </h1>

        <div className="mt-[18px] rounded-[20px] bg-white p-5 shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          <p className="text-[15.5px] leading-[1.65] text-[#22314f]">
            A ₹10 lakh pot covering you, mum and dad together in Mumbai, for{' '}
            {rupees(plan.monthly)} a month. You picked it for the missing room-rent cap, and because
            one policy beat juggling two.
          </p>
          <div className="my-[18px] h-px bg-[#eef1f6]" />
          <p className="text-[13.5px] leading-[1.6] text-muted">
            You knowingly accepted two things: dad’s BP claims wait 2 years, and a large claim draws
            from the same pot as yours.
          </p>
        </div>

        <div className="mt-3.5 flex flex-col gap-2.5">
          {[
            ['Annual premium', rupees(plan.annual)],
            ['Cover starts', 'Today, once paid'],
            ['Free-look period', '30 days, full refund'],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between text-[14px] text-muted">
              <span>{k}</span>
              <span className="font-bold text-navy">{v}</span>
            </div>
          ))}
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/buy/details')}>Yes — let’s set it up</Button>
        <Button variant="ghost" onClick={() => navigate('/compare')}>
          Go back to comparison
        </Button>
      </Footer>
    </Page>
  )
}
