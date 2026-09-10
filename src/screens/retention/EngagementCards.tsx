import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer } from '../../components'
import { ENGAGEMENT_CARDS } from '../../data/content'

/** 7.2 — Engagement cards. A small rotating set of value reminders, never pushed. */
export default function EngagementCards() {
  const navigate = useNavigate()
  const [dismissed, setDismissed] = useState<number[]>([])

  return (
    <Page>
      <TopBar backTo="/home" />
      <Body>
        <h1 className="text-[23px] font-extrabold tracking-[-0.03em] text-navy">Worth knowing</h1>
        <p className="pt-1.5 text-[13px] text-muted">
          A few cards a month, on the dashboard. Never pushed.
        </p>

        <div className="flex flex-col gap-3 pt-4">
          {ENGAGEMENT_CARDS.map((c, i) =>
            dismissed.includes(i) ? null : (
              <div
                key={c.title}
                className="rounded-[18px] bg-white p-4 shadow-[0_1px_3px_rgba(16,24,40,.06)]"
              >
                <div className="flex items-start justify-between gap-2.5">
                  <div className="font-mono text-[11px] tracking-[0.05em] text-accent">{c.tag}</div>
                  <button
                    onClick={() => setDismissed((d) => [...d, i])}
                    aria-label="Dismiss"
                    className="text-[14px] text-[#a5b0c2]"
                  >
                    ✕
                  </button>
                </div>
                <div className="pt-2 text-[15.5px] font-bold leading-[1.4] text-navy">{c.title}</div>
                <p className="pt-1.5 text-[13.5px] leading-[1.55] text-muted">{c.body}</p>
                <div className="pt-3 text-[13px] font-bold text-accent">{c.cta}</div>
              </div>
            ),
          )}
        </div>
      </Body>

      <Footer>
        <button
          onClick={() => navigate('/home/milestone')}
          className="py-3 text-center text-[13.5px] font-semibold text-ink"
        >
          Next: 3-month check-in →
        </button>
      </Footer>
    </Page>
  )
}
