import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button } from '../../components'
import { useStore } from '../../store/store'

/** 8.4 — Document checklist (step 3 of 4). One document at a time, with why + state. */
export default function DocumentChecklist() {
  const navigate = useNavigate()
  const documents = useStore((s) => s.claim.documents)
  const uploadDoc = useStore((s) => s.uploadDoc)

  const done = documents.filter((d) => d.state === 'uploaded').length
  const togo = documents.length - done

  return (
    <Page>
      <TopBar label="Claim · step 3 of 4" />
      <Body>
        <h1 className="text-[23px] font-extrabold tracking-[-0.03em] text-navy">
          Documents, one at a time
        </h1>
        <p className="pt-1.5 text-[13.5px] text-muted">
          Phone photos are fine. {done} done, {togo} to go.
        </p>

        <div className="flex flex-col gap-2.5 pt-4">
          {documents.map((d) => {
            const uploaded = d.state === 'uploaded'
            return (
              <div
                key={d.id}
                className="rounded-[16px] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,.05)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-[14.5px] font-bold text-navy">{d.name}</div>
                    <div className="pt-1 text-[12.5px] leading-[1.5] text-muted">{d.why}</div>
                  </div>
                  <div
                    className={[
                      'whitespace-nowrap rounded-full px-2.5 py-1.5 text-[11px] font-extrabold',
                      uploaded ? 'bg-[#eaf6f0] text-success' : 'bg-[#eaf1fb] text-ink',
                    ].join(' ')}
                  >
                    {uploaded ? 'UPLOADED' : 'NEEDED'}
                  </div>
                </div>
                {!uploaded && (
                  <button
                    onClick={() => uploadDoc(d.id)}
                    className="mt-3 w-full rounded-[13px] border border-dashed border-[#b9cbe6] p-3.5 text-center text-[13.5px] font-bold text-ink"
                  >
                    Take a photo
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <p className="pt-3.5 text-[12.5px] leading-[1.55] text-[#6b7a94]">
          Missing something? Upload what you have and we’ll tell you exactly what’s left. Nothing gets
          silently rejected.
        </p>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/claims/review')}>Continue</Button>
      </Footer>
    </Page>
  )
}
