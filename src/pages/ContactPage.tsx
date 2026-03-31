import { Link } from 'react-router-dom'

export function ContactPage() {
  return (
    <main className="inner-page">
      <Link to="/" className="back-link">
        ← Back
      </Link>

      <h1>Contact</h1>
      <p className="page-meta">Support, privacy questions, or general feedback.</p>

      <p style={{ fontSize: 14, color: '#777', lineHeight: 1.8 }}>
        HabitBase is a one-person project. Reach out directly — I read every message.
      </p>

      <div className="contact-block">
        <div className="contact-item">
          <div className="contact-item-label">Email</div>
          <a href="mailto:Chet8r@gmail.com">Chet8r@gmail.com</a>
        </div>
        <div className="contact-item">
          <div className="contact-item-label">GitHub</div>
          <a
            href="https://github.com/Chet8r/Habitbase-Website"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Chet8r/Habitbase-Website
          </a>
        </div>
      </div>
    </main>
  )
}
