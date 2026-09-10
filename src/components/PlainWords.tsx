import { useNavigate } from 'react-router-dom'
import { GLOSSARY } from '../data/content'
import Sheet from './Sheet'
import Button from './Button'

interface PlainWordsProps {
  termKey: string
  onClose: () => void
}

/**
 * The "IN PLAIN WORDS" card — a dismissible bottom sheet that explains an
 * insurance term in 2–3 sentences plus why it exists.
 */
export default function PlainWords({ termKey, onClose }: PlainWordsProps) {
  const navigate = useNavigate()
  const entry = GLOSSARY[termKey] ?? GLOSSARY['waiting-period']

  return (
    <Sheet onClose={onClose}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-mono text-[11.5px] tracking-[0.06em] text-accent">IN PLAIN WORDS</div>
          <div className="pt-1.5 text-[21px] font-extrabold tracking-[-0.02em] text-navy">
            {entry.term}
          </div>
        </div>
        <button onClick={onClose} aria-label="Close" className="text-[17px] text-[#8492a8]">
          ✕
        </button>
      </div>

      <p className="pt-3 text-[14.5px] leading-[1.6] text-[#42536f]">{entry.plain}</p>

      <div className="mt-4 rounded-[14px] bg-wash p-3.5 text-[13.5px] leading-[1.55] text-[#22314f]">
        {entry.why}
      </div>

      <div className="flex gap-2.5 pt-4">
        <Button variant="light" onClick={onClose}>
          Got it
        </Button>
        <Button
          onClick={() => {
            onClose()
            navigate('/advisory/human')
          }}
        >
          Tell me more
        </Button>
      </div>
    </Sheet>
  )
}
