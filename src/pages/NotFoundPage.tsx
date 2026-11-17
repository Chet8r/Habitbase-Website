import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="inner-page contact-page">
      <Link to="/" className="back-link">
        ← Back
      </Link>

      <h1>Page not found</h1>
      <p className="contact-copy">
        There's nothing at this address. It may have moved, or the link may have a typo.
      </p>
      <p className="contact-copy contact-note">
        <Link to="/">Go to the HabitBase homepage</Link>
      </p>
    </main>
  );
}
