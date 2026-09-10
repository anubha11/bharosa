interface AvatarMProps {
  size?: number
  className?: string
}

/** Meera's chat-presence avatar — the rounded navy "M". */
export default function AvatarM({ size = 34, className = '' }: AvatarMProps) {
  return (
    <div
      className={['flex items-center justify-center rounded-[30%] bg-ink font-extrabold text-white', className].join(' ')}
      style={{ width: size, height: size, fontSize: size * 0.42 }}
      aria-hidden
    >
      M
    </div>
  )
}
