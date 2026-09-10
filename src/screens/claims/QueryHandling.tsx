import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button, SectionLabel } from '../../components'
import { useStore } from '../../store/store'

/** 8.8 — Query handling. Translates the insurer's request into plain language. */
export default function QueryHandling() {
  const navigate = useNavigate()
  const resolveQuery = useStore((s) => s.resolveQuery)

  const upload = () => {
    resolveQuery()
    navigate('/claims/tracker')
  }

  return (
    <Page>
      <TopBar />
      <Body>
        <SectionLabel mono>QUERY RAISED · 9 SEP</SectionLabel>
        <h1 className="pt-2 text-[23px] font-extrabold leading-[1.2] tracking-[-0.03em] text-navy">
          They want the doctor’s admission note. That’s all.
        </h1>

        <div className="mt-4 rounded-[18px] bg-white p-[18px] shadow-[0_1px_3px_rgba(16,24,40,.06)]">
          <div className="text-[12px] font-bold tracking-[0.04em] text-[#8492a8]">
            WHAT THE INSURER WROTE
          </div>
          <p className="pt-2 font-mono text-[13.5px] leading-[1.55] text-[#6b7a94]">
            “Kindly furnish treating physician’s initial assessment sheet with indication for surgical
            intervention.”
          </p>
          <div className="my-4 h-px bg-[#eef1f6]" />
          <div className="text-[12px] font-bold tracking-[0.04em] text-accent">WHAT THAT MEANS</div>
          <p className="pt-2 text-[14.5px] leading-[1.6] text-[#22314f]">
            The page where the doctor wrote why dad needed surgery. Ask the ward nurse for the
            “initial assessment sheet” — they hand these out daily. A checking step, not a worry.
          </p>
        </div>

        <div className="mt-3.5 rounded-[16px] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,.05)]">
          <div className="text-[14px] font-bold text-navy">Reply by 14 Sep</div>
          <div className="pt-1 text-[12.5px] text-muted">
            Five days. We’ll remind you on the 11th, and again if it gets close.
          </div>
        </div>
      </Body>

      <Footer>
        <Button onClick={upload}>Upload the note</Button>
        <Button variant="ghost" onClick={() => navigate('/advisory/human')}>
          I can’t get it — help me
        </Button>
      </Footer>
    </Page>
  )
}
