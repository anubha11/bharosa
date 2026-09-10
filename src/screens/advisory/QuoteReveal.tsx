import { useNavigate } from 'react-router-dom'
import { Page, Body, Footer, Button, ChatBubble, AvatarM, PlanCard, AdvisorFab } from '../../components'
import { BRAND, PLANS } from '../../data/content'
import { useStore } from '../../store/store'

/** 3.5 — Quote reveal. Meera presents 3 plans, one recommended, each with reasoning. */
export default function QuoteReveal() {
  const navigate = useNavigate()
  const selectPlan = useStore((s) => s.selectPlan)

  return (
    <Page>
      <div className="flex items-center gap-2.5 border-b border-[#e4e8f0] bg-white px-5 pb-3 pt-2.5">
        <button onClick={() => navigate(-1)} aria-label="Back" className="text-xl leading-none text-navy">
          ←
        </button>
        <AvatarM size={32} />
        <div className="text-[14.5px] font-bold text-navy">{BRAND.aiAdvisor}</div>
      </div>

      <Body>
        <ChatBubble from="meera">
          Covering your parents in Mumbai, dad’s BP, about ₹2,000 a month — here are the three I’d put
          in front of a friend, and why.
        </ChatBubble>

        <div className="flex flex-col gap-3 pt-3.5">
          {PLANS.map((p) => (
            <PlanCard
              key={p.id}
              plan={p}
              to={`/compare/plan/${p.id}`}
              onClick={() => selectPlan(p.id)}
            />
          ))}
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/compare/table')}>Compare these three</Button>
        <Button variant="ghost" onClick={() => navigate('/advisory/intake')}>
          Ask {BRAND.aiAdvisor} something first
        </Button>
      </Footer>

      <AdvisorFab bottom={132} />
    </Page>
  )
}
