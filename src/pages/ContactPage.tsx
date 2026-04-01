import { Link } from "react-router-dom";

export function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <Link to="/" className="back-link">
        ← Back
      </Link>

      <h1>Contact</h1>
      <p className="contact-copy">
        For support, privacy questions, or general enquiries, email:
      </p>

      <p>
        <a className="contact-email" href="mailto:Chet8r@gmail.com">
          Chet8r@gmail.com
        </a>
      </p>
    </main>
  );
}
