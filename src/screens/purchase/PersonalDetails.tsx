import { useNavigate } from 'react-router-dom'
import { Page, TopBar, Body, Footer, Button, ProgressDots, Field } from '../../components'
import { useStore } from '../../store/store'

/** 5.2 — Personal details (step 1 of 3). Seeded with Aditya's data, editable. */
export default function PersonalDetails() {
  const navigate = useNavigate()
  const p = useStore((s) => s.profile)
  const setProfile = useStore((s) => s.setProfile)

  return (
    <Page>
      <TopBar label="1 of 3" />
      <div className="px-5 pt-1">
        <ProgressDots step={1} total={3} />
      </div>

      <Body>
        <h1 className="text-[23px] font-extrabold tracking-[-0.03em] text-navy">Your details</h1>
        <p className="pt-1.5 text-[13.5px] text-muted">
          As on your Aadhaar or PAN. Mismatches are what get policies stuck.
        </p>

        <div className="flex flex-col gap-3.5 pt-[18px]">
          <Field label="Full name (as on PAN)" value={p.fullName} onChange={(v) => setProfile({ fullName: v })} />
          <Field label="Date of birth" value={p.dob} onChange={(v) => setProfile({ dob: v })} />
          <Field label="Mobile" value={p.mobile} onChange={(v) => setProfile({ mobile: v })} />
          <Field label="Email" value={p.email} onChange={(v) => setProfile({ email: v })} />
          <Field label="Address" value={p.address} onChange={(v) => setProfile({ address: v })} multiline />
        </div>
      </Body>

      <Footer>
        <Button onClick={() => navigate('/buy/medical')}>Continue</Button>
      </Footer>
    </Page>
  )
}
