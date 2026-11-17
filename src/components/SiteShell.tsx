import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { syncHead } from '../seo'

export function SiteShell() {
  const { pathname } = useLocation()
  useEffect(() => syncHead(pathname), [pathname])

  return (
    <div className="page-wrapper">
      <Outlet />

      <footer className="site-footer">
        <span className="footer-brand">© 2026 HabitBase</span>
        <ul className="footer-links">
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </footer>
    </div>
  )
}
