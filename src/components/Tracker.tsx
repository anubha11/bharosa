import type { ClaimStatus, ClaimTransition } from '../store/store'

interface TrackerProps {
  history: ClaimTransition[]
  status: ClaimStatus
}

const STAGES: { status: ClaimStatus; label: string; pendingNote: string }[] = [
  { status: 'submitted', label: 'Submitted', pendingNote: 'Not sent yet' },
  { status: 'pre-approved', label: 'Pre-approval granted', pendingNote: 'Usually same-day for an emergency' },
  { status: 'query-raised', label: 'Query raised', pendingNote: 'Only if the insurer needs something' },
  { status: 'under-review', label: 'Under final review', pendingNote: 'Waiting on your reply' },
  { status: 'settled', label: 'Settled', pendingNote: 'Expected within 7 days of the query being closed' },
]

/** Vertical claim stepper. Marks each stage done / query / pending from the claim history. */
export default function Tracker({ history, status }: TrackerProps) {
  return (
    <div>
      {STAGES.map((stage, i) => {
        const hit = history.find((h) => h.status === stage.status)
        const isQuery = stage.status === 'query-raised' && !!hit
        const done = !!hit && !isQuery
        const last = i === STAGES.length - 1

        const dot = isQuery
          ? 'bg-warning text-[#4a3400]'
          : done
            ? 'bg-success text-white'
            : 'bg-hairline2 text-muted'

        const labelColor = isQuery
          ? 'text-[#8a5a00]'
          : done
            ? 'text-navy'
            : 'text-[#8492a8]'

        return (
          <div key={stage.status} className="flex gap-3.5">
            <div className="flex flex-none flex-col items-center">
              <div
                className={[
                  'flex h-[22px] w-[22px] items-center justify-center rounded-full text-[11px] font-extrabold',
                  dot,
                ].join(' ')}
              >
                {isQuery ? '!' : done ? '✓' : ''}
              </div>
              {!last && <div className="min-h-[34px] w-0.5 flex-1 bg-hairline2" />}
            </div>
            <div className="flex-1 pb-4">
              <div className={['text-[14.5px] font-bold', labelColor].join(' ')}>{stage.label}</div>
              <div className="pt-1 text-[12.5px] leading-[1.5] text-muted">
                {hit ? `${hit.at} · ${hit.note}` : stage.pendingNote}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
