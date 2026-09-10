import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Page, ChatBubble, AvatarM, AdvisorFab, PlainWords } from '../../components'
import { BRAND } from '../../data/content'
import { useStore } from '../../store/store'

const BUDGETS = ['Under ₹1,500', '₹1,500–2,500', '₹2,500+', 'Not sure yet']

interface IntakeProps {
  /** Open a "plain words" card on mount (used by the /advisory/education route). */
  initialTerm?: string
}

/** 3.2 — Conversational intake. One question per turn, referencing prior answers. */
export default function Intake({ initialTerm }: IntakeProps) {
  const navigate = useNavigate()
  const setProfile = useStore((s) => s.setProfile)
  const { city, dependents } = useStore((s) => s.profile)
  const [term, setTerm] = useState<string | null>(initialTerm ?? null)

  const whoLine =
    dependents === 'Just me'
      ? 'just you'
      : dependents.replace('Me and my ', 'your ').replace('Me, spouse and kids', 'your spouse and kids')

  const answer = (budget: string) => {
    setProfile({ monthlyBudget: budget === 'Not sure yet' ? 'Around ₹2,000' : budget })
    navigate('/advisory/recap')
  }

  return (
    <Page>
      <div className="flex items-center gap-2.5 border-b border-[#e4e8f0] bg-white px-5 pb-3 pt-2.5">
        <button onClick={() => navigate(-1)} aria-label="Back" className="text-xl leading-none text-navy">
          ←
        </button>
        <AvatarM size={34} />
        <div className="flex-1">
          <div className="text-[14.5px] font-bold text-navy">{BRAND.aiAdvisor}</div>
          <div className="text-[11.5px] font-semibold text-success">Advisor · online</div>
        </div>
        <Link
          to="/advisory/human"
          className="rounded-full border border-[#ccd6e6] px-3 py-1.5 text-[12.5px] font-bold text-ink"
        >
          Real human
        </Link>
      </div>

      <div className="no-scrollbar flex min-h-0 flex-1 flex-col gap-3 overflow-auto p-[18px]">
        <ChatBubble from="meera">
          You said {city}, and that you’d want {whoLine} covered too. Are they both under 60?
        </ChatBubble>
        <ChatBubble from="user">Dad’s 58, mum’s 54</ChatBubble>
        <ChatBubble from="meera">
          Good — under 60 keeps things simpler and cheaper. Does either of them have blood pressure or
          diabetes that a doctor has named?
        </ChatBubble>
        <ChatBubble from="user">Dad has BP, on tablets</ChatBubble>
        <ChatBubble from="meera">
          Very common, and it doesn’t stop him being covered. It usually means a{' '}
          <button
            onClick={() => setTerm('waiting-period')}
            className="border-b border-dashed border-accent font-semibold text-accent"
          >
            waiting period
          </button>{' '}
          on BP-related claims. Tap it and I’ll explain.
        </ChatBubble>
        <ChatBubble from="meera">Last one — what monthly amount feels comfortable?</ChatBubble>

        <div className="flex flex-wrap gap-2 pt-1">
          {BUDGETS.map((b) => (
            <button
              key={b}
              onClick={() => answer(b)}
              className="rounded-full border border-[#b9cbe6] bg-wash px-3.5 py-2.5 text-[13px] font-semibold text-ink"
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2.5 border-t border-[#e4e8f0] bg-white px-[18px] pb-[18px] pt-3">
        <div className="flex-1 rounded-full border border-hairline px-4 py-3 text-[13.5px] text-[#8492a8]">
          Type your answer instead…
        </div>
        <button
          onClick={() => answer('Not sure yet')}
          aria-label="Send"
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-ink text-[17px] text-white"
        >
          ↑
        </button>
      </div>

      <AdvisorFab bottom={92} />

      {term && <PlainWords termKey={term} onClose={() => setTerm(null)} />}
    </Page>
  )
}
