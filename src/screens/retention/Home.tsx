import { Link, useNavigate } from 'react-router-dom'
import { Page, BottomNav, BrandMark } from '../../components'
import { BRAND, planById } from '../../data/content'
import { inr } from '../../lib/format'
import { useStore } from '../../store/store'

/** 7.1 — Home dashboard. The persistent hub. */
export default function Home() {
  const navigate = useNavigate()
  const policy = useStore((s) => s.policy)!
  const firstName = useStore((s) => s.profile.fullName.split(' ')[0])
  const claim = useStore((s) => s.claim)
  const plan = planById(policy.planId)

  const claimInFlight = claim.history.length > 0 && claim.status !== 'settled'
  const claimStatusLabel: Record<string, string> = {
    submitted: 'Submitted — with the insurer',
    'pre-approved': 'Pre-approval granted',
    'query-raised': 'One document needed',
    'under-review': 'Under final review',
  }

  const actions = [
    { label: 'Talk to advisor', to: '/advisory/intake' },
    { label: 'Find a hospital', to: '/onboarding/hospitals' },
    { label: 'File a claim', to: '/claims/new' },
  ]

  return (
    <Page>
      <div className="flex items-center justify-between px-5 pb-1 pt-2.5">
        <BrandMark />
        <div className="h-8 w-8 rounded-full bg-hairline2" />
      </div>

      <div className="no-scrollbar flex min-h-0 flex-1 flex-col overflow-auto px-5">
        <div className="pt-3 text-[14px] text-muted">Morning, {firstName}</div>

        <div className="mt-3 rounded-[20px] bg-white p-[18px] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-[#eaf6f0] px-2.5 py-1.5 text-[11.5px] font-extrabold text-success">
              ACTIVE
            </span>
            <span className="text-[12px] text-muted">Renews {policy.renewalDate}</span>
          </div>
          <div className="pt-3 text-[18px] font-extrabold text-navy">{plan.name}</div>
          <div className="pt-1 text-[13px] text-muted">
            {['You', ...policy.members.slice(1).map((m) => m.split(' ')[0])].join(', ')} ·{' '}
            {BRAND.insurer}
          </div>
          <div className="mt-3.5 flex items-end justify-between border-t border-[#eef1f6] pt-4">
            <div>
              <div className="text-[11.5px] text-[#8492a8]">Cover left this year</div>
              <div className="text-[20px] font-extrabold text-ink">₹{inr(policy.sumInsured)}</div>
            </div>
            <Link to="/onboarding/ecard" className="text-[13px] font-bold text-accent">
              View e-card
            </Link>
          </div>
        </div>

        {claimInFlight && (
          <button
            onClick={() => navigate('/claims/tracker')}
            className="mt-3 w-full rounded-[18px] bg-white p-4 text-left shadow-[0_1px_2px_rgba(16,24,40,.05)]"
          >
            <div className="flex items-center justify-between">
              <span
                className={[
                  'rounded-full px-2.5 py-1.5 text-[11px] font-extrabold',
                  claim.status === 'query-raised'
                    ? 'bg-amberwash text-[#8a5a00]'
                    : 'bg-wash text-ink',
                ].join(' ')}
              >
                CLAIM {claim.id}
              </span>
              <span className="text-[13px] font-bold text-accent">Track →</span>
            </div>
            <div className="pt-2.5 text-[14px] font-bold text-navy">
              {claimStatusLabel[claim.status] ?? 'In progress'}
            </div>
            <div className="pt-1 text-[12.5px] text-muted">
              {claim.patient} · {claim.hospital} · ₹{inr(claim.claimedAmount)} claimed
            </div>
          </button>
        )}

        <div className="flex gap-2.5 pt-4">
          {actions.map((a) => (
            <button
              key={a.label}
              onClick={() => navigate(a.to)}
              className="flex-1 rounded-[16px] bg-white p-3 text-left shadow-[0_1px_2px_rgba(16,24,40,.05)]"
            >
              <div className="h-[30px] w-[30px] rounded-[10px] bg-wash" />
              <div className="pt-2.5 text-[13px] font-bold leading-[1.3] text-navy">{a.label}</div>
            </button>
          ))}
        </div>

        <div className="pt-[18px]">
          <div className="text-[13px] font-extrabold uppercase tracking-[0.04em] text-muted">
            Worth knowing
          </div>
          <button
            onClick={() => navigate('/home/cards')}
            className="mt-3 w-full rounded-[18px] bg-white p-4 text-left shadow-[0_1px_2px_rgba(16,24,40,.05)]"
          >
            <div className="text-[14.5px] font-bold leading-[1.4] text-navy">
              Did you know your plan covers 60 days of post-discharge follow-up?
            </div>
            <div className="pt-1.5 text-[13px] text-muted">
              Tests and medicines after a stay count too. Most people pay these out of pocket without
              realising.
            </div>
          </button>
        </div>

        <div className="flex-1 pb-4" />
      </div>

      <BottomNav />
    </Page>
  )
}
