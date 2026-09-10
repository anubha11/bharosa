interface FieldProps {
  label: string
  value: string
  onChange?: (value: string) => void
  multiline?: boolean
}

/**
 * A labelled text field. Editable when `onChange` is passed, otherwise a
 * read-only value box (the demo seeds most of these).
 */
export default function Field({ label, value, onChange, multiline = false }: FieldProps) {
  const boxClass =
    'w-full rounded-[13px] border border-hairline2 bg-white p-3.5 text-[14.5px] font-semibold text-navy outline-none focus:border-ink'

  return (
    <label className="block">
      <div className="pb-1.5 text-[12.5px] font-bold text-muted">{label}</div>
      {onChange ? (
        multiline ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={3}
            className={boxClass + ' min-h-[76px] leading-[1.5]'}
          />
        ) : (
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={boxClass}
          />
        )
      ) : (
        <div className={boxClass}>{value}</div>
      )}
    </label>
  )
}
