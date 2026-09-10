import { useNavigate } from 'react-router-dom'
import { Page } from '../../components'
import { BRAND } from '../../data/content'

/** 1.1 — Discovery content. Myth-busting card, ad-style, dark. */
export default function Discovery() {
  const navigate = useNavigate()

  return (
    <Page dark>
      <div className="flex items-center justify-between px-5 pb-1 pt-4 text-[13px] font-semibold text-white/60">
        <span>Sponsored</span>
        <button onClick={() => navigate('/')} aria-label="Close">
          ✕
        </button>
      </div>

      <div className="no-scrollbar flex min-h-0 flex-1 flex-col justify-center gap-[22px] overflow-auto px-5 pb-5">
        <div className="font-mono text-[12px] tracking-[0.08em] text-[#7fb2ee]">MYTH 03 OF 07</div>
        <h1 className="text-[32px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white">
          “I’m 25 and healthy. Why do I need health insurance?”
        </h1>
        <div className="h-px bg-white/20" />
        <p className="text-[16px] leading-[1.55] text-[#dbe3f0]">
          Because it’s priced on the day you buy it, not the day you need it. At 25 you pay the least
          you ever will, and waiting periods start ticking while nothing is wrong.
        </p>
        <p className="text-[16px] leading-[1.55] text-[#dbe3f0]">
          Three days in a Mumbai hospital for dengue: <strong className="text-white">₹1,24,000</strong>.
          Cover for it: ₹640 a month.
        </p>
        <div className="flex items-center gap-2.5 pt-1.5">
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-accent text-[15px] font-extrabold text-white">
            B
          </div>
          <div className="text-[13px] font-semibold text-[#9fb4d4]">
            {BRAND.name} · plain-language health cover
          </div>
        </div>
      </div>

      <div className="px-5 pb-7">
        <button
          onClick={() => navigate('/readiness')}
          className="w-full rounded-[16px] bg-white px-4 py-4 text-[15px] font-bold text-navy"
        >
          Check your insurance readiness
        </button>
        <div className="pt-3 text-center text-[12px] text-[#7f92b0]">
          40 seconds. No sign-up, no calls unless you ask.
        </div>
      </div>
    </Page>
  )
}
