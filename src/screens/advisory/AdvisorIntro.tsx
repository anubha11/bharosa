import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button, AvatarM } from '../../components'
import { BRAND } from '../../data/content'
import { useStore } from '../../store/store'

const PRINCIPLES = [
  'No jargon. Any term gets explained where it appears.',
  'No pressure. Stop anywhere, nothing happens.',
  'A certified human advisor is one tap away. Free.',
]

/** 3.1 — Advisor intro. Meera introduces herself and her three principles. */
export default function AdvisorIntro() {
  const navigate = useNavigate()
  const dependents = useStore((s) => s.profile.dependents)

  const depsLine =
    dependents === 'Just me'
      ? 'So this is cover for you alone — that keeps things simple.'
      : `So you’re looking to cover ${dependents
          .replace('Me and my ', 'your ')
          .replace('Me, spouse and kids', 'your spouse and kids')} too.`

  return (
    <Page>
      <TopBar />
      <Body className="gap-[18px]">
        <AvatarM size={76} className="rounded-[26px]" />
        <div>
          <h1 className="text-[26px] font-extrabold tracking-[-0.03em] text-navy">
            Hi, I’m {BRAND.aiAdvisor}.
          </h1>
          <p className="pt-2.5 text-[14.5px] leading-[1.6] text-[#42536f]">
            I help people buy their first health policy. {depsLine} Let’s work out what makes sense.
          </p>
        </div>

        <div className="w-full rounded-[18px] bg-white px-4 py-1.5 shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          {PRINCIPLES.map((p, i) => (
            <div
              key={i}
              className={[
                'flex gap-3 py-3.5 text-[13.5px] leading-[1.5] text-[#42536f]',
                i < PRINCIPLES.length - 1 ? 'border-b border-[#eef1f6]' : '',
              ].join(' ')}
            >
              <span className="font-extrabold text-accent">0{i + 1}</span>
              <span>{p}</span>
            </div>
          ))}
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/advisory/intake')}>Let’s start</Button>
      </Footer>
    </Page>
  )
}
