import { Link } from 'react-router-dom'
import type { Plan } from '../data/content'
import AvatarM from './AvatarM'

interface PlanCardProps {
  plan: Plan
  to?: string
  onClick?: () => void
  /** Show Meera's one-line reasoning under the card. */
  withReasoning?: boolean
  /** Emphasise the recommended plan with a heavier border + "MY PICK". */
  highlightRecommended?: boolean
}

export default function PlanCard({
  plan,
  to,
  onClick,
  withReasoning = true,
  highlightRecommended = true,
}: PlanCardProps) {
  const recommended = highlightRecommended && plan.recommended

  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          {recommended && (
            <div className="text-[11px] font-extrabold tracking-[0.06em] text-ink">MY PICK</div>
          )}
          <div className="pt-1 text-[18px] font-extrabold text-navy">{plan.name}</div>
          <div className="text-[13px] text-muted">{plan.scope}</div>
        </div>
        <div className="text-right">
          <div className="text-[20px] font-extrabold text-navy">
            ₹{plan.monthly.toLocaleString('en-IN')}
          </div>
          <div className="text-[12px] text-muted">per month</div>
        </div>
      </div>

      <div className="mt-3 rounded-[12px] bg-wash px-3.5 py-2.5 text-[13px] font-bold text-ink">
        {plan.benefit}
      </div>

      {withReasoning && (
        <div className="flex gap-2.5 pt-3">
          <AvatarM size={26} className="flex-none" />
          <div className="text-[13px] leading-[1.5] text-[#42536f]">{plan.why}</div>
        </div>
      )}
    </>
  )

  const cls = [
    'block cursor-pointer rounded-card bg-white p-[18px] text-left',
    recommended
      ? 'border-2 border-ink shadow-[0_2px_8px_rgba(16,24,40,.08)]'
      : 'shadow-[0_1px_4px_rgba(16,24,40,.07)]',
  ].join(' ')

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={cls}>
        {inner}
      </Link>
    )
  }
  return (
    <button type="button" onClick={onClick} className={cls + ' w-full'}>
      {inner}
    </button>
  )
}
