import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Page, Sheet, Button, ChatBubble } from '../../components'
import { BRAND } from '../../data/content'

type Choice = 'chat' | 'call' | null

/** 3.6 — Human escalation. Opens over the current screen; context carries over. */
export default function HumanEscalation() {
  const navigate = useNavigate()
  const [choice, setChoice] = useState<Choice>(null)

  return (
    <Page>
      <div className="pointer-events-none flex flex-1 flex-col gap-3 p-[18px] opacity-40">
        <ChatBubble from="meera">Based on covering your parents in Mumbai…</ChatBubble>
        <ChatBubble from="user">can I speak to a person</ChatBubble>
      </div>

      <Sheet onClose={() => navigate(-1)}>
        {choice === null ? (
          <>
            <div className="flex items-center justify-between">
              <div className="text-[21px] font-extrabold tracking-[-0.02em] text-navy">
                Talk to a real advisor
              </div>
              <button onClick={() => navigate(-1)} aria-label="Close" className="text-[17px] text-[#8492a8]">
                ✕
              </button>
            </div>
            <p className="pt-2 text-[14px] leading-[1.55] text-muted">
              IRDAI-certified, salaried, no commission. Free, and nothing restarts — {BRAND.aiAdvisor}{' '}
              passes on everything you’ve said.
            </p>

            <div className="flex flex-col gap-2.5 pt-[18px]">
              <button
                onClick={() => setChoice('chat')}
                className="flex items-center justify-between rounded-[15px] bg-ink px-4 py-4 text-left text-white"
              >
                <div>
                  <div className="text-[15px] font-bold">Chat now</div>
                  <div className="text-[12.5px] opacity-75">Someone is free — about 40 seconds</div>
                </div>
                <span>→</span>
              </button>
              <button
                onClick={() => setChoice('call')}
                className="flex items-center justify-between rounded-[15px] border border-hairline px-4 py-4 text-left"
              >
                <div>
                  <div className="text-[15px] font-bold text-navy">Request a call</div>
                  <div className="text-[12.5px] text-muted">Pick a slot — today or later</div>
                </div>
                <span className="text-muted">→</span>
              </button>
            </div>

            <div className="pt-3.5 text-center text-[12px] text-[#8492a8]">
              No script. Ask them anything, including “should I not buy this?”
            </div>
          </>
        ) : (
          <>
            <div className="text-[21px] font-extrabold tracking-[-0.02em] text-navy">
              {choice === 'chat'
                ? `${BRAND.humanAdvisor} is joining…`
                : `Call requested with ${BRAND.humanAdvisor}`}
            </div>
            <p className="pt-2 text-[14px] leading-[1.55] text-muted">
              {choice === 'chat'
                ? 'You’re next in the queue — about 40 seconds. Everything you told Meera is already on their screen, so you won’t repeat yourself.'
                : 'You’ll get a text with slots for today and tomorrow. The advisor sees the whole conversation before they call — no starting over, no script.'}
            </p>
            <div className="mt-4 rounded-[14px] bg-wash p-3.5 text-[13px] leading-[1.55] text-[#22314f]">
              {BRAND.humanAdvisorBlurb}
            </div>
            <div className="pt-4">
              <Button onClick={() => navigate(-1)}>Back to where I was</Button>
            </div>
          </>
        )}
      </Sheet>
    </Page>
  )
}
