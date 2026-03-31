import { Link } from 'react-router-dom'

export function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <Link to="/" className="back-link">
        ← Back
      </Link>

      <section className="contact-hero">
        <div className="contact-hero-copy">
          <p className="eyebrow">Contact</p>
          <h1>Get in touch</h1>
          <p className="contact-lead">
            For support, privacy questions, or general feedback, use the details below.
            Messages are read directly and replied to as soon as possible.
          </p>
        </div>
      </section>

      <section className="contact-grid" aria-label="Contact details">
        <article className="contact-inline">
          <div className="contact-card-label">Email</div>
          <a className="contact-card-link" href="mailto:Chet8r@gmail.com">
            Chet8r@gmail.com
          </a>
          <p className="contact-card-note">
            Best for support requests, privacy questions, and general enquiries.
          </p>
        </article>
      </section>
    </main>
  )
}
