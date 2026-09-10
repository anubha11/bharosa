import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button, ProgressDots, Field, Chip } from '../../components'
import { useStore } from '../../store/store'

const RELATIONSHIPS = ['Mother', 'Father', 'Spouse', 'Sibling']

/** 5.4 — Nominee (step 3 of 3). */
export default function Nominee() {
  const navigate = useNavigate()
  const { nomineeName, nomineeRelationship } = useStore((s) => s.profile)
  const setProfile = useStore((s) => s.setProfile)

  return (
    <Page>
      <TopBar label="3 of 3" />
      <div className="px-5 pt-1">
        <ProgressDots step={3} total={3} />
      </div>

      <Body>
        <h1 className="text-[23px] font-extrabold tracking-[-0.03em] text-navy">Nominee</h1>
        <p className="pt-1.5 text-[13.5px] leading-[1.55] text-muted">
          Who the insurer pays if you can’t claim yourself. Changeable any time, free.
        </p>

        <div className="flex flex-col gap-3.5 pt-[18px]">
          <Field
            label="Nominee’s full name"
            value={nomineeName}
            onChange={(v) => setProfile({ nomineeName: v })}
          />
          <div>
            <div className="pb-1.5 text-[12.5px] font-bold text-muted">Relationship</div>
            <div className="flex flex-wrap gap-2">
              {RELATIONSHIPS.map((r) => (
                <Chip
                  key={r}
                  label={r}
                  active={nomineeRelationship === r}
                  onClick={() => setProfile({ nomineeRelationship: r })}
                />
              ))}
            </div>
          </div>
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/buy/payment')}>Continue to payment</Button>
      </Footer>
    </Page>
  )
}
