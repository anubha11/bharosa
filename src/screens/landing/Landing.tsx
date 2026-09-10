import { Link, useNavigate } from 'react-router-dom'
import { Page, Chip, BrandMark, Button } from '../../components'
import { AGE_BANDS, CITIES, estimateStayCost } from '../../lib/calculator'
import { inr } from '../../lib/format'
import { useStore } from '../../store/store'

/** 2.1 — Landing with the hero cost calculator. */
export default function Landing() {
  const navigate = useNavigate()
  const { city, ageBand } = useStore((s) => s.profile)
  const setProfile = useStore((s) => s.setProfile)

  const cost = estimateStayCost(city, ageBand)
  const ageStart = ageBand.split('–')[0]

  return (
    <Page>
      <div className="flex items-center justify-between px-5 pb-1.5 pt-2.5">
        <BrandMark />
        <Link to="/dev" className="text-[13px] font-semibold text-muted">
          Help
        </Link>
      </div>

      <div className="no-scrollbar flex min-h-0 flex-1 flex-col overflow-auto">
        <div className="px-5 pt-3.5">
          <h1 className="text-[27px] font-extrabold leading-[1.15] tracking-[-0.03em] text-navy">
            What would a hospital stay actually cost you?
          </h1>
          <p className="pt-2.5 text-[14px] leading-[1.5] text-muted">
            Two taps. Real numbers from your city.
          </p>
        </div>

        <div className="mx-5 mt-[18px] rounded-[20px] bg-white p-[18px] shadow-[0_2px_8px_rgba(16,24,40,.07)]">
          <div className="text-[12px] font-bold uppercase tracking-[0.04em] text-muted">Your city</div>
          <div className="flex flex-wrap gap-2 pt-2.5">
            {CITIES.map((c) => (
              <Chip key={c} label={c} active={city === c} onClick={() => setProfile({ city: c })} />
            ))}
          </div>

          <div className="pt-[18px] text-[12px] font-bold uppercase tracking-[0.04em] text-muted">
            Roughly your age
          </div>
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

          <div className="mt-5 rounded-[16px] bg-wash p-4">
            <div className="text-[13px] font-semibold text-[#42536f]">
              Three ordinary days — dengue, appendicitis, a bad fall — in {city}
            </div>
            <div className="pt-1.5 text-[36px] font-extrabold tracking-[-0.03em] text-ink">
              ≈ ₹{inr(cost)}
            </div>
            <div className="pt-1 text-[12px] text-[#6b7a94]">
              Room, surgeon, tests, medicines. Private hospital, shared room.
            </div>
          </div>
        </div>

        <div className="mx-5 mt-4 rounded-[16px] bg-white p-4 shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          <div className="text-[15px] font-bold text-navy">Buying now is the cheap, boring decision</div>
          <p className="pt-1.5 text-[13.5px] leading-[1.55] text-muted">
            Premiums are set by your age at purchase, so at {ageStart} you lock in your lowest rate.
            Waiting periods start today too — so by the time you need cover, it is active.
          </p>
        </div>

        <div className="flex-1" />

        <div className="flex flex-col gap-1 px-5 pb-6 pt-[18px]">
          <Button onClick={() => navigate('/readiness')}>Talk to someone — free, no obligation</Button>
          <Button variant="ghost" onClick={() => navigate('/readiness')}>
            Just exploring
          </Button>
        </div>
      </div>
    </Page>
  )
}
