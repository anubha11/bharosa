import { Link } from 'react-router-dom'

/**
 * Persistent "Talk to a real advisor" button. Shown on the advisory
 * intake / recap / quote screens as an escalation point.
 */
export default function AdvisorFab({ bottom = 24 }: { bottom?: number }) {
  return (
    <Link
      to="/advisory/human"
      style={{ bottom }}
      className="absolute right-4 z-20 flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-[13px] font-bold text-white shadow-[0_8px_20px_-6px_rgba(15,27,52,.6)]"
    >
      <span className="h-2 w-2 rounded-full bg-[#4fd18b]" />
      Talk to a real advisor
    </Link>
  )
}
