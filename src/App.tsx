import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ROUTES } from './routes'
import DevIndex from './screens/DevIndex'
import ScreenNav from './components/ScreenNav'

/** Scroll the app column back to the top on every route change. */
function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollReset />
      <Routes>
        {ROUTES.map((r) => (
          <Route key={r.id} path={r.path} element={<r.component />} />
        ))}
        <Route path="/dev" element={<DevIndex />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ScreenNav />
    </>
  )
}
