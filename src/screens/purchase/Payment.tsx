import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button } from '../../components'
import { PAYMENT_LINES, PAYMENT_METHODS, PAYMENT_TOTAL } from '../../data/content'
import { rupees } from '../../lib/format'
import { useStore } from '../../store/store'

/** 5.5 — Payment. Line-item breakdown + method tabs. Mocked — no gateway. */
export default function Payment() {
  const navigate = useNavigate()
  const purchase = useStore((s) => s.purchase)
  const [method, setMethod] = useState('upi')

  const pay = () => {
    purchase()
    navigate('/buy/covered')
  }

  return (
    <Page>
      <TopBar />
      <Body>
        <h1 className="text-[23px] font-extrabold tracking-[-0.03em] text-navy">Payment</h1>

        <div className="mt-4 rounded-[18px] bg-white p-[18px] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          {PAYMENT_LINES.map((l, i) => (
            <div
              key={l.k}
              className={[
                'flex justify-between pb-2.5 text-[14px] text-muted',
                i === PAYMENT_LINES.length - 1 ? 'border-b border-[#eef1f6] pb-3' : '',
              ].join(' ')}
            >
              <span>{l.k}</span>
              <span className="font-bold text-navy">{l.v}</span>
            </div>
          ))}
          <div className="flex items-baseline justify-between pt-3.5">
            <span className="text-[15px] font-bold text-navy">Total today</span>
            <span className="text-[24px] font-extrabold text-ink">{rupees(PAYMENT_TOTAL)}</span>
          </div>
        </div>

        <div className="pt-4 text-[12.5px] font-bold uppercase tracking-[0.04em] text-muted">Pay with</div>
        <div className="flex flex-col gap-2.5 pt-2.5">
          {PAYMENT_METHODS.map((m) => {
            const on = method === m.id
            return (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={[
                  'flex items-center gap-3 rounded-[15px] bg-white p-3.5 text-left',
                  on ? 'border-2 border-ink' : 'border border-hairline2',
                ].join(' ')}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-wash text-[11px] font-extrabold text-ink">
                  {m.badge}
                </div>
                <div className="flex-1">
                  <div className="text-[14.5px] font-bold text-navy">{m.label}</div>
                  <div className="text-[12.5px] text-muted">{m.sub}</div>
                </div>
                {on && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[11px] text-white">
                    ✓
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </Body>

      <Footer>
        <Button onClick={pay}>Pay {rupees(PAYMENT_TOTAL)}</Button>
        <div className="pt-1 text-center text-[12px] text-[#8492a8]">
          30-day free look. Cancel in that window, get everything back.
        </div>
      </Footer>
    </Page>
  )
}
