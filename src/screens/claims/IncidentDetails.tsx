import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button, Chip, Field } from '../../components'
import { useStore } from '../../store/store'

const WHO = ['Me', 'Mahesh (dad)', 'Sunita']

/** 8.3 — Incident details (step 2 of 4). */
export default function IncidentDetails() {
  const navigate = useNavigate()
  const claim = useStore((s) => s.claim)
  const updateClaim = useStore((s) => s.updateClaim)

  return (
    <Page>
      <TopBar label="Claim · step 2 of 4" />
      <Body>
        <h1 className="text-[23px] font-extrabold tracking-[-0.03em] text-navy">What happened?</h1>
        <p className="pt-1.5 text-[13.5px] text-muted">Plain words are fine. No medical terms needed.</p>

        <div className="flex flex-col gap-4 pt-[18px]">
          <div>
            <div className="pb-1.5 text-[12.5px] font-bold text-muted">Who is admitted?</div>
            <div className="flex flex-wrap gap-2">
              {WHO.map((w) => (
                <Chip
                  key={w}
                  label={w}
                  active={claim.patientLabel === w}
                  onClick={() =>
                    updateClaim({
                      patientLabel: w,
                      patient: w === 'Me' ? 'Aditya Rao' : w === 'Sunita' ? 'Sunita Rao' : 'Mahesh Rao',
                    })
                  }
                />
              ))}
            </div>
          </div>

          <Field
            label="In your words"
            value={claim.description}
            onChange={(v) => updateClaim({ description: v })}
            multiline
          />

          <div>
            <div className="pb-1.5 text-[12.5px] font-bold text-muted">Hospital</div>
            <div className="flex items-center justify-between rounded-[13px] border border-hairline2 bg-white p-3.5">
              <div>
                <div className="text-[14.5px] font-bold text-navy">{claim.hospital}</div>
                <div className="text-[12px] text-muted">{claim.hospitalArea} · from your network list</div>
              </div>
              <span className="rounded-full bg-[#eaf6f0] px-2.5 py-1.5 text-[10.5px] font-extrabold text-success">
                CASHLESS
              </span>
            </div>
          </div>

          <Field label="Admission date" value={claim.admissionDate} />
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/claims/documents')}>Continue</Button>
      </Footer>
    </Page>
  )
}
