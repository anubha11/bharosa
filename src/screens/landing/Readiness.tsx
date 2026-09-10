import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button, Chip } from '../../components'
import { AGE_BANDS } from '../../lib/calculator'
import { useStore, type DependentChoice, type ExistingCover } from '../../store/store'

const DEPS: DependentChoice[] = [
  'Just me',
  'Me and my parents',
  'Me and my spouse',
  'Me, spouse and kids',
]
const COVERS: ExistingCover[] = ['Yes', 'No', 'Not sure']

/** 2.2 — Readiness check. Three tap-through questions, no typing. */
export default function Readiness() {
  const navigate = useNavigate()
  const { ageBand, dependents, existingCover } = useStore((s) => s.profile)
  const setProfile = useStore((s) => s.setProfile)

  return (
    <Page>
      <TopBar progress={0.33} />

      <Body>
        <h1 className="text-[25px] font-extrabold leading-[1.2] tracking-[-0.03em] text-navy">
          Three taps, then we’ll talk about what fits.
        </h1>
        <p className="pt-2 text-[13.5px] text-muted">Nothing to type. No phone number yet.</p>

        <div className="flex flex-col gap-[22px] pt-[22px]">
          <div>
            <div className="text-[14px] font-bold text-navy">How old are you, roughly?</div>
            <div className="flex flex-wrap gap-2 pt-2.5">
              {AGE_BANDS.map((a) => (
                <Chip
                  key={a}
                  label={a}
                  active={ageBand === a}
                  onClick={() => setProfile({ ageBand: a })}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="text-[14px] font-bold text-navy">Who would this cover?</div>
            <div className="flex flex-col gap-2 pt-2.5">
              {DEPS.map((d) => (
                <Chip
                  key={d}
                  label={d}
                  block
                  active={dependents === d}
                  onClick={() => setProfile({ dependents: d })}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="text-[14px] font-bold text-navy">Any cover already? Office policy counts.</div>
            <div className="flex gap-2 pt-2.5">
              {COVERS.map((c) => (
                <div key={c} className="flex-1">
                  <Chip
                    label={c}
                    fill
                    active={existingCover === c}
                    onClick={() => setProfile({ existingCover: c })}
                  />
                </div>
              ))}
            </div>
            <p className="pt-2 text-[12.5px] leading-[1.5] text-[#6b7a94]">
              “Not sure” is normal — most office policies are thinner than people expect.
            </p>
          </div>
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/advisory')}>Done — what next?</Button>
      </Footer>
    </Page>
  )
}
