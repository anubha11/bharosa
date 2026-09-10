import { BRAND } from '../data/content'

interface BrandMarkProps {
  /** Show the "Bharosa" wordmark next to the glyph. */
  wordmark?: boolean
  size?: number
  className?: string
}

export default function BrandMark({ wordmark = true, size = 28, className = '' }: BrandMarkProps) {
  return (
    <div className={['flex items-center gap-2.5', className].join(' ')}>
      <div
        className="flex items-center justify-center rounded-[32%] bg-ink font-extrabold text-white"
        style={{ width: size, height: size, fontSize: size * 0.5 }}
        aria-hidden
      >
        B
      </div>
      {wordmark && (
        <div className="text-[17px] font-extrabold tracking-[-0.02em] text-ink">{BRAND.name}</div>
      )}
    </div>
  )
}
