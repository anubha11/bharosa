import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button, AdvisorFab } from '../../components'
import { buildRecap } from '../../lib/recap'
import { useStore } from '../../store/store'

/** 3.3 — "Here's what I'm hearing" recap. Plain-language summary, each row editable. */
export default function Recap() {
  const navigate = useNavigate()
  const recap = buildRecap(useStore((s) => s.profile))

  return (
    <Page>
      <TopBar />
      <Body>
        <h1 className="text-[25px] font-extrabold leading-[1.2] tracking-[-0.03em] text-navy">
          Here’s what I’m hearing.
        </h1>
        <p className="pt-2 text-[14px] text-muted">Before I suggest anything — did I get this right?</p>

        <div className="mt-[18px] rounded-[20px] bg-white px-[18px] py-1 shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          {recap.map((r, i) => (
            <div
              key={r.key}
              className={[
                'flex items-start justify-between gap-3.5 py-[15px]',
                i < recap.length - 1 ? 'border-b border-[#eef1f6]' : '',
              ].join(' ')}
            >
              <div className="flex-1">
                <div className="text-[12px] font-bold uppercase tracking-[0.03em] text-[#8492a8]">
                  {r.label}
                </div>
                <div className="pt-1 text-[14.5px] font-semibold leading-[1.45] text-navy">{r.value}</div>
              </div>
              <button
                onClick={() => navigate('/advisory/intake')}
                className="pt-3.5 text-[13px] font-bold text-accent"
              >
                Edit
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-[16px] bg-wash p-4 text-[13.5px] leading-[1.55] text-[#22314f]">
          Straight talk: dad’s BP has to be declared. It costs a little more. Hiding it is what gets
          claims rejected years later.
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/advisory/quote')}>Yes, that’s right</Button>
        <Button variant="ghost" onClick={() => navigate('/advisory/human')}>
          I’d rather check this with a human
        </Button>
      </Footer>

      <AdvisorFab bottom={132} />
    </Page>
  )
}
