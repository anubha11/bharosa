import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button } from '../../components'
import { useStore } from '../../store/store'

const TYPES = [
  {
    title: 'Renewal, 45 days ahead',
    body: 'A lapse resets every waiting period you’ve already served. The one alert worth having.',
  },
  {
    title: 'Claim status changes',
    body: 'Whenever your claim moves a stage or the insurer asks for something. So you never chase us.',
  },
]

/** 6.7 — Enable reminders. Exactly two notification types, no offers/spam. */
export default function Reminders() {
  const navigate = useNavigate()
  const setReminders = useStore((s) => s.setReminders)

  const finish = (on: boolean) => {
    setReminders(on)
    navigate('/home')
  }

  return (
    <Page>
      <TopBar />
      <Body>
        <h1 className="text-[25px] font-extrabold leading-[1.2] tracking-[-0.03em] text-navy">
          Two notifications. That’s all we’d use them for.
        </h1>
        <p className="pt-2 text-[13.5px] text-muted">No offers, no “we miss you”, no spam.</p>

        <div className="flex flex-col gap-3 pt-5">
          {TYPES.map((t) => (
            <div
              key={t.title}
              className="rounded-[16px] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,.05)]"
            >
              <div className="text-[14.5px] font-bold text-navy">{t.title}</div>
              <p className="pt-1.5 text-[13px] leading-[1.55] text-muted">{t.body}</p>
            </div>
          ))}
        </div>
      </Body>

      <Footer>
        <Button onClick={() => finish(true)}>Turn these on</Button>
        <Button variant="ghost" onClick={() => finish(false)}>
          Skip — I’ll check myself
        </Button>
      </Footer>
    </Page>
  )
}
