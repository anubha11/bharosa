import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button, SectionLabel } from '../../components'
import { BRAND, RENEWAL_ROWS } from '../../data/content'

/** 9.1 — Renewal reminder. 45 days out, stakes stated plainly. */
export default function RenewalReminder() {
  const navigate = useNavigate()

  return (
    <Page>
      <TopBar backTo="/home" />
      <Body>
        <SectionLabel mono>45 DAYS TO GO</SectionLabel>
        <h1 className="pt-2 text-[24px] font-extrabold leading-[1.2] tracking-[-0.03em] text-navy">
          Your cover renews on 8 September 2027
        </h1>
        <p className="pt-2 text-[13.5px] leading-[1.55] text-muted">
          Nothing to re-decide. Here’s what changes and what doesn’t.
        </p>

        <div className="mt-4 rounded-[20px] bg-white px-[18px] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          {RENEWAL_ROWS.map((r, i) => (
            <div
              key={r.k}
              className={['py-3.5', i < RENEWAL_ROWS.length - 1 ? 'border-b border-[#eef1f6]' : ''].join(' ')}
            >
              <div className="flex items-baseline justify-between gap-3">
                <div className="text-[13.5px] text-muted">{r.k}</div>
                <div className="text-right text-[14.5px] font-bold text-navy">{r.v}</div>
              </div>
              <div className="pt-1.5 text-[12.5px] leading-[1.5] text-[#8492a8]">{r.note}</div>
            </div>
          ))}
        </div>

        <div className="mt-3.5 rounded-[16px] bg-wash p-4 text-[13.5px] leading-[1.6] text-[#22314f]">
          Let it lapse and dad’s 2-year BP wait restarts from zero. That’s why we’re reminding you
          this early.
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/renewal/renew')}>Review and renew</Button>
        <Button variant="ghost" onClick={() => navigate('/advisory/intake')}>
          Should I change anything? Ask {BRAND.aiAdvisor}
        </Button>
      </Footer>
    </Page>
  )
}
