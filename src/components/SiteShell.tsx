import { Link, Outlet } from 'react-router-dom'

export function SiteShell() {
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
