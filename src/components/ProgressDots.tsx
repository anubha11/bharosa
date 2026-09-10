interface ProgressDotsProps {
  step: number
  total: number
}

/** The 3-segment purchase-flow progress indicator. */
export default function ProgressDots({ step, total }: ProgressDotsProps) {
  return (
    <div className="flex flex-1 gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={[
            'h-1 flex-1 rounded-full',
            i < step ? 'bg-accent' : 'bg-hairline2',
          ].join(' ')}
        />
      ))}
    </div>
  )
}
