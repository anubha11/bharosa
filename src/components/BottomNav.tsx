import { NavLink } from 'react-router-dom'
import { BRAND } from '../data/content'

const items = [
  { to: '/home', label: 'Home' },
  { to: '/onboarding/ecard', label: 'E-card' },
  { to: '/claims/new', label: 'Claims' },
  { to: '/advisory/intake', label: BRAND.aiAdvisor },
]

/** The persistent bottom tab bar for the retention / claims side of the app. */
export default function BottomNav() {
  return (
    <nav className="flex border-t border-[#e4e8f0] bg-white px-2 pb-5 pt-3">
      {items.map((it) => (
        <NavLink
          key={it.to}
          to={it.to}
          className={({ isActive }) =>
            [
              'flex-1 text-center text-[11.5px] font-semibold',
              isActive ? 'font-bold text-ink' : 'text-[#8492a8]',
            ].join(' ')
          }
        >
          {it.label}
        </NavLink>
      ))}
    </nav>
  )
}
