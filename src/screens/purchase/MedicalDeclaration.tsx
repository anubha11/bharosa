import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button, ProgressDots } from '../../components'
import { DECLARED_EFFECT, MEDICAL_QUESTIONS } from '../../data/content'
import { useStore } from '../../store/store'

/** 5.3 — Medical declaration (step 2 of 3). Plain framing, live effect on the flagged answer. */
export default function MedicalDeclaration() {
  const navigate = useNavigate()
  const answers = useStore((s) => s.profile.medicalAnswers)
  const setMedicalAnswer = useStore((s) => s.setMedicalAnswer)

  return (
    <Page>
      <TopBar label="2 of 3" />
      <div className="px-5 pt-1">
        <ProgressDots step={2} total={3} />
      </div>

      <Body>
        <h1 className="text-[23px] font-extrabold tracking-[-0.03em] text-navy">Health declaration</h1>

        <div className="mt-3.5 rounded-[16px] bg-wash p-4">
          <div className="text-[14px] font-bold text-ink">Read this before you answer</div>
          <p className="pt-1.5 text-[13.5px] leading-[1.6] text-[#22314f]">
            Saying yes doesn’t get you rejected. It adds a waiting period or a small extra premium,
            and we’ll show you the exact effect before you pay. Saying no to something you do have is
            what gets claims refused years later.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 pt-4">
          {MEDICAL_QUESTIONS.map((m) => {
            const val = answers[m.id]
            const showFlag = m.flagKey && val === 'yes'
            return (
              <div
                key={m.id}
                className="rounded-[15px] bg-white p-3.5 shadow-[0_1px_2px_rgba(16,24,40,.05)]"
              >
                <div className="text-[14px] font-semibold leading-[1.45] text-navy">{m.q}</div>
                <div className="flex gap-2 pt-3">
                  {(['yes', 'no'] as const).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setMedicalAnswer(m.id, opt)}
                      className={[
                        'flex-1 rounded-[11px] border py-2.5 text-[13px] font-bold capitalize',
                        val === opt
                          ? 'border-ink bg-ink text-white'
                          : 'border-hairline2 bg-white text-muted',
                      ].join(' ')}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {showFlag && (
                  <div className="mt-2.5 rounded-[11px] bg-amberwash p-3 text-[12.5px] leading-[1.5] text-[#8a5a00]">
                    {DECLARED_EFFECT}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/buy/nominee')}>Continue</Button>
        <Button variant="ghost" onClick={() => navigate('/advisory/human')}>
          I’m unsure how to answer one of these
        </Button>
      </Footer>
    </Page>
  )
}
