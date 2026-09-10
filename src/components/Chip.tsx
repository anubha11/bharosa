interface ChipProps {
  label: string
  active?: boolean
  onClick?: () => void
  /** Full-width block style with a left-aligned label (the "who would this cover" list). */
  block?: boolean
  /** Full-width pill, centred label (the 3-up "existing cover" row). */
  fill?: boolean
}

export default function Chip({ label, active = false, onClick, block = false, fill = false }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'cursor-pointer border text-[13px] font-semibold transition-colors',
        block
          ? 'w-full rounded-[14px] px-4 py-3.5 text-left'
          : fill
            ? 'w-full rounded-[14px] px-2 py-3 text-center'
            : 'rounded-full px-3.5 py-2',
        active
          ? 'border-ink bg-ink text-white'
          : 'border-hairline bg-white text-[#22314f] hover:border-ink',
      ].join(' ')}
    >
      {label}
    </button>
  )
}
