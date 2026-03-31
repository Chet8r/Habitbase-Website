const features = [
  {
    icon: '🔥',
    title: 'Momentum-based progression',
    desc: 'From Struggling to Habit to Zenith — every check-in moves you forward.',
  },
  {
    icon: '📲',
    title: 'NFC tap to complete',
    desc: 'Pair a tag to a habit. One tap and you\'re done. No unlocking, no scrolling.',
  },
  {
    icon: '📊',
    title: 'Streaks, stats & insights',
    desc: 'Calendars, trends, and daily micro-insights so you always know where you stand.',
  },
]

export function HomePage() {
  return (
    <main className="home">
      <span className="badge">
        <span className="badge-dot" />
        Available on the App Store
      </span>

      <h1 className="hero-headline">
        Build habits that<br /><em>actually stick.</em>
      </h1>

      <p className="hero-sub">
        HabitBase uses science-backed progression, gamification, and real-world NFC triggers to turn daily actions into lasting habits.
      </p>

      <div className="cta-row">
        <a
          className="btn-primary"
          href="https://apps.apple.com/app/id6761305108"
          target="_blank"
          rel="noreferrer"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download on the App Store
        </a>
      </div>

      {/* Phone mockup */}
      <div className="app-preview">
        <div className="phone-frame">
          <div className="phone-screen">
            <div className="phone-header">
              <span className="phone-title">Today</span>
              <span className="streak-pill">🔥 12 day streak</span>
            </div>

            <div className="score-bar">
              <div className="score-label">Daily Momentum Score</div>
              <div className="score-track">
                <div className="score-fill" />
              </div>
            </div>

            <div className="habit-item">
              <div className="habit-icon" style={{ background: 'rgba(124,92,252,0.15)' }}>🏋️</div>
              <div className="habit-info">
                <div className="habit-name">Morning Workout</div>
                <div className="habit-stage">Momentum · Score +8</div>
              </div>
              <div className="habit-check done">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="habit-item">
              <div className="habit-icon" style={{ background: 'rgba(245,166,35,0.15)' }}>📚</div>
              <div className="habit-info">
                <div className="habit-name">Read 20 min</div>
                <div className="habit-stage">Consistency · Score +3</div>
              </div>
              <div className="habit-check done">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="habit-item">
              <div className="habit-icon" style={{ background: 'rgba(52,211,153,0.15)' }}>💊</div>
              <div className="habit-info">
                <div className="habit-name">Take Supplements</div>
                <div className="habit-stage">Habit · Score +14</div>
              </div>
              <div className="habit-check" />
            </div>
          </div>
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
  )
}
