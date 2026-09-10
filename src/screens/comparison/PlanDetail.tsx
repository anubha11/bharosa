import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Page, Body, Footer, Button, InfoRow, PlainWords } from '../../components'
import { BRAND, PLAN_DETAIL, PLAN_EXCLUSIONS, planById } from '../../data/content'
import { useStore } from '../../store/store'

/** 4.2 — Plan detail. Full breakdown + an explicit "what this does NOT cover". */
export default function PlanDetail() {
  const navigate = useNavigate()
  const { planId } = useParams()
  const plan = planById(planId)
  const selectPlan = useStore((s) => s.selectPlan)
  const [term, setTerm] = useState<string | null>(null)

  const choose = () => {
    selectPlan(plan.id)
    navigate('/buy/confirm')
  }

  return (
    <Page>
      <div className="border-b border-[#e4e8f0] bg-white px-5 pb-[18px] pt-3">
        <button onClick={() => navigate(-1)} aria-label="Back" className="text-xl leading-none text-navy">
          ←
        </button>
        <div className="flex items-end justify-between pt-3">
          <div>
            <div className="text-[22px] font-extrabold tracking-[-0.02em] text-navy">{plan.name}</div>
            <div className="pt-1 text-[13px] text-muted">{BRAND.insurer} · you, mum, dad</div>
          </div>
          <div className="text-right">
            <div className="text-[22px] font-extrabold text-navy">
              ₹{plan.monthly.toLocaleString('en-IN')}
            </div>
            <div className="text-[12px] text-muted">/month</div>
          </div>
        </div>
      </div>

      <Body>
        <div className="rounded-[18px] bg-white px-4 shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          {PLAN_DETAIL.map((d, i) => (
            <InfoRow
              key={d.k}
              k={d.k}
              v={d.v}
              note={d.note}
              onExplain={d.term ? () => setTerm(d.term!) : undefined}
              last={i === PLAN_DETAIL.length - 1}
            />
          ))}
        </div>

        <div className="mt-3 rounded-[16px] bg-amberwash p-4">
          <div className="text-[13px] font-extrabold tracking-[0.03em] text-[#8a5a00]">
            WHAT THIS DOES NOT COVER
          </div>
          <p className="pt-1.5 text-[13.5px] leading-[1.6] text-[#5f4718]">{PLAN_EXCLUSIONS}</p>
        </div>
      </Body>

      <Footer>
        <Button onClick={choose}>Choose this plan</Button>
        <Button variant="ghost" onClick={() => navigate('/advisory/intake')}>
          Ask {BRAND.aiAdvisor} about this plan
        </Button>
      </Footer>

      {term && <PlainWords termKey={term} onClose={() => setTerm(null)} />}
    </Page>
  )
}
