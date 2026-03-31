import appIcon from "../assets/App Icon.png";
import screen1 from "../assets/AppStore  App Screenshots/image1.png";
import screen2 from "../assets/AppStore  App Screenshots/image5.png";
import screen3 from "../assets/AppStore  App Screenshots/image2.png";

const features = [
  {
    icon: "🔥",
    title: "Momentum-based progression",
    desc: "From Struggling to Habit to Zenith — every check-in moves you forward on a science-backed path.",
  },
  {
    icon: "📲",
    title: "NFC tap to complete",
    desc: "Pair a physical tag to any habit. Tap your phone and it's done — no unlocking, no scrolling.",
  },
  {
    icon: "📊",
    title: "Streaks, stats & insights",
    desc: "Calendars, trends, completion rates, and daily micro-insights to keep you improving.",
  },
];

export function HomePage() {
  return (
    <main className="home">
      <img src={appIcon} alt="HabitBase" className="app-icon" />

      <span className="badge">
        <span className="badge-dot" />
        Available on the App Store
      </span>

      <h1 className="hero-headline">
        Build habits that
        <br />
        <em>actually stick.</em>
      </h1>

      <p className="hero-sub">
        HabitBase uses science-backed progression, gamification, and real-world
        NFC triggers to turn daily actions into lasting habits.
      </p>

      <div className="cta-row">
        <a
          className="btn-primary"
          href="https://apps.apple.com/app/id6761305108"
          target="_blank"
          rel="noreferrer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on the App Store
        </a>
      </div>

      {/* Real app screenshots */}
      <div className="screenshots-row">
        <div className="screenshot-wrap side">
          <img src={screen1} alt="Habit progression from Struggling to Flow" />
        </div>
        <div className="screenshot-wrap main">
          <img src={screen2} alt="HabitBase home screen" />
        </div>
        <div className="screenshot-wrap side">
          <img src={screen3} alt="Streak calendar and stats" />
        </div>
      </div>

      {/* Features strip */}
      <div className="features">
        {features.map((f) => (
          <div key={f.title} className="feature-cell">
            <span className="feature-icon">{f.icon}</span>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
