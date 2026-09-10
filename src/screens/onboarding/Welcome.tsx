import { useNavigate } from 'react-router-dom'
import { Page, Button, AvatarM } from '../../components'
import { ONBOARDING_STEPS } from '../../data/content'

/** 6.1 — In-app welcome. Sets the expectation of 5 short screens. */
export default function Welcome() {
  const navigate = useNavigate()

  return (
    <Page>
      <div className="no-scrollbar flex min-h-0 flex-1 flex-col gap-[22px] overflow-auto px-6 pt-[70px]">
        <AvatarM size={70} className="rounded-[24px]" />
        <div>
          <h1 className="text-[29px] font-extrabold leading-[1.15] tracking-[-0.03em] text-navy">
            You’re covered. Let’s get you set up in 2 minutes.
          </h1>
          <p className="pt-3 text-[14.5px] leading-[1.6] text-muted">
            Five short screens, then you’re done.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          {ONBOARDING_STEPS.map((t, i) => (
            <div
              key={t}
              className="flex items-center gap-3 rounded-[14px] bg-white p-3.5 shadow-[0_1px_2px_rgba(16,24,40,.05)]"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-wash text-[11px] font-extrabold text-ink">
                {i + 1}
              </div>
              <div className="text-[14px] font-semibold text-[#22314f]">{t}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-7 pt-5">
        <Button onClick={() => navigate('/onboarding/plan')}>Start</Button>
      </div>
    </Page>
  )
}
