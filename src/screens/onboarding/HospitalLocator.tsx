import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button } from '../../components'
import { HOSPITALS } from '../../data/content'

/** 6.4 — Hospital locator (3 of 5). Static styled map + pinned list, cashless framing. */
export default function HospitalLocator() {
  const navigate = useNavigate()

  return (
    <Page>
      <TopBar label="Setup · 3 of 5" />
      <Body>
        <h1 className="text-[24px] font-extrabold tracking-[-0.03em] text-navy">
          Cashless hospitals near you
        </h1>
        <p className="pt-1.5 text-[13.5px] text-muted">
          62 in Mumbai. Here the insurer pays the hospital directly — no paying and claiming back.
        </p>

        <div
          className="mt-4 flex h-[130px] items-center justify-center rounded-[18px]"
          style={{
            background: 'repeating-linear-gradient(135deg,#e4e9f2 0 8px,#eef1f7 8px 16px)',
          }}
        >
          <div className="font-mono text-[11.5px] text-[#6b7a94]">map view · Mumbai, 62 pins</div>
        </div>

        <div className="flex flex-col gap-2.5 pt-3.5">
          {HOSPITALS.map((h) => (
            <div
              key={h.name}
              className="flex items-center justify-between gap-3 rounded-[16px] bg-white p-3.5 shadow-[0_1px_2px_rgba(16,24,40,.05)]"
            >
              <div>
                <div className="text-[14.5px] font-bold text-navy">{h.name}</div>
                <div className="pt-1 text-[12.5px] text-muted">
                  {h.area} · {h.distanceKm} km
                </div>
              </div>
              <div className="whitespace-nowrap rounded-full bg-[#eaf6f0] px-2.5 py-1.5 text-[11px] font-extrabold text-success">
                CASHLESS
              </div>
            </div>
          ))}
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/onboarding/claims')}>Continue</Button>
      </Footer>
    </Page>
  )
}
