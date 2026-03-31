import appIcon from "../assets/App Icon.png";
import screenHome from "../assets/Simulator App Screens/home screen.png";
import screenDetail from "../assets/Simulator App Screens/detail view.png";
import screenStats from "../assets/Simulator App Screens/stats.png";
import screenJourney from "../assets/onboarding screenshots /IMG_4413.PNG";
import screenNFC from "../assets/onboarding screenshots /IMG_4416.PNG";
import appStore1 from "../assets/AppStore  App Screenshots/image1.png";
import appStore2 from "../assets/AppStore  App Screenshots/image2.png";
import appStore3 from "../assets/AppStore  App Screenshots/image3.png";
import appStore4 from "../assets/AppStore  App Screenshots/image4.png";
import appStore5 from "../assets/AppStore  App Screenshots/image5.png";

function AppStoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="phone-frame">
      <img src={src} alt={alt} className="phone-screen-img" />
    </div>
  );
}

export function HomePage() {
  return (
    <main className="home-page">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-top">
          <div className="hero-identity">
            <img src={appIcon} alt="HabitBase" className="app-icon" />
            <div className="hero-identity-text">
              <span className="hero-app-name">HabitBase</span>
              <span className="hero-app-sub">Habit Tracker</span>
            </div>
          </div>

          <h1 className="hero-headline">
            Build habits that<br /><em>actually stick.</em>
          </h1>

          <p className="hero-sub">
            Most apps track streaks. HabitBase tracks real progress — from Struggling all the way to Flow. Science-backed, beautifully simple.
          </p>

          <div className="hero-actions">
            <a
              className="btn-primary"
              href="https://apps.apple.com/app/id6761305108"
              target="_blank"
              rel="noreferrer"
            >
              <AppStoreIcon />
              Download on the App Store
            </a>
            <span className="hero-legal">Free · Premium from £2.99/mo</span>
          </div>
        </div>

        <div className="hero-screenshots">
          {[
            { src: appStore1, alt: "Real habit science" },
            { src: appStore5, alt: "All your habits" },
            { src: appStore2, alt: "NFC real-world habits" },
            { src: appStore4, alt: "Know what's working" },
            { src: appStore3, alt: "Consistency you can see" },
          ].map((s, i) => (
            <div key={i} className="hero-screenshot-item">
              <img src={s.src} alt={s.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* ── PROGRESSION ── */}
      <section className="feature-section">
        <div className="feature-section-inner reverse">
          <div className="feature-copy">
            <p className="eyebrow">The Journey</p>
            <h2>From Struggling<br />to Flow.</h2>
            <p>Every habit starts at Struggling. Check in consistently and you'll climb through levels — Consistency, Momentum, Habit, Mastery, and finally Flow.</p>
            <p>The score system rewards showing up and penalises missing days, so your progress reflects reality, not just a streak counter that resets to zero.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> 10-level progression path</li>
              <li><span className="check">✓</span> Score-based levelling up and down</li>
              <li><span className="check">✓</span> Mastery Stages I–V after reaching Habit</li>
              <li><span className="check">✓</span> Habit complexity: Simple, Moderate, Complex</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame src={screenJourney} alt="Habit progression stages" />
          </div>
        </div>
      </section>

      {/* ── DAILY TRACKING ── */}
      <section className="feature-section feature-section--tinted">
        <div className="feature-section-inner">
          <div className="feature-copy">
            <p className="eyebrow">Daily Tracking</p>
            <h2>Everything due today,<br />nothing more.</h2>
            <p>Your habit list shows only what matters right now — today's habits, their current stage, and your progress bar. Clean, focused, zero clutter.</p>
            <p>Complete a habit with a tap. Undo it in seconds. Every check-in is recorded and feeds into your stats and progression score.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Due / Today / All filters</li>
              <li><span className="check">✓</span> Live progress bars per habit</li>
              <li><span className="check">✓</span> Stage badges (Struggling → Flow)</li>
              <li><span className="check">✓</span> Instant undo on completions</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame src={screenHome} alt="HabitBase daily habit list" />
          </div>
        </div>
      </section>

      {/* ── NFC ── */}
      <section className="feature-section">
        <div className="feature-section-inner reverse">
          <div className="feature-copy">
            <p className="eyebrow">HabitTap NFC</p>
            <h2>Tap your phone.<br />Habit done.</h2>
            <p>Link any NFC tag to a habit. Tap your phone to the tag and it's instantly marked complete — no unlocking, no opening the app, no scrolling.</p>
            <p>Put a tag on your gym bag, bedside table, desk, or front door. The tag stores an ID, not your data. Multiple people can use the same tag for different habits.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Works with any NFC sticker or tag</li>
              <li><span className="check">✓</span> No data stored on the tag</li>
              <li><span className="check">✓</span> Multiple users, one tag</li>
              <li><span className="check">✓</span> Gym, reading, skincare, supplements</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame src={screenNFC} alt="HabitTap NFC check-in" />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="feature-section feature-section--tinted">
        <div className="feature-section-inner">
          <div className="feature-copy">
            <p className="eyebrow">Stats & Insights</p>
            <h2>See what's working.<br />Fix what isn't.</h2>
            <p>Your strongest habits, your struggling ones, completion rates, best days, and trends over weeks, months, and years — all in one place.</p>
            <p>The calendar view shows every completed day at a glance. Micro-insights surface patterns you wouldn't notice on your own.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Weekly, monthly, yearly views</li>
              <li><span className="check">✓</span> Completion rate per habit</li>
              <li><span className="check">✓</span> Best day and needs-nudge day</li>
              <li><span className="check">✓</span> Streak history and longest streaks</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame src={screenStats} alt="HabitBase stats screen" />
          </div>
        </div>
      </section>

      {/* ── DETAIL / CALENDAR ── */}
      <section className="feature-section">
        <div className="feature-section-inner reverse">
          <div className="feature-copy">
            <p className="eyebrow">Habit Detail</p>
            <h2>Every day.<br />Every check-in.</h2>
            <p>Tap any habit to see its full history — a calendar of every completed day, current and longest streaks, sessions this month and year, and your reminder settings.</p>
            <p>iCloud backup keeps your data safe and synced across all your devices. Restore automatically when you switch phones or reinstall.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Full completion calendar</li>
              <li><span className="check">✓</span> Current and longest streak</li>
              <li><span className="check">✓</span> iCloud backup and sync</li>
              <li><span className="check">✓</span> Reminder management per habit</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame src={screenDetail} alt="Habit detail with calendar" />
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="pricing-section">
        <div className="pricing-inner">
          <p className="eyebrow" style={{ textAlign: "center" }}>Pricing</p>
          <h2 className="pricing-headline">Start free. Upgrade when you're ready.</h2>
          <p className="pricing-sub">The free version is fully functional. No crippled features, no paywalled streaks.</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-card-header">
                <span className="pricing-tier">Free</span>
                <span className="pricing-price">£0</span>
              </div>
              <ul className="pricing-list">
                <li>Up to 3 active habits</li>
                <li>Full progression system</li>
                <li>Stats and insights</li>
                <li>Reminders</li>
              </ul>
            </div>

            <div className="pricing-card pricing-card--featured">
              <div className="pricing-card-header">
                <span className="pricing-tier">Pro</span>
                <div>
                  <span className="pricing-price">£2.99</span>
                  <span className="pricing-per">/month</span>
                </div>
              </div>
              <ul className="pricing-list">
                <li>Unlimited habits</li>
                <li>HabitTap NFC check-ins</li>
                <li>Multiple reminders per habit</li>
                <li>Full stats history</li>
                <li>iCloud backup & sync</li>
              </ul>
              <div className="pricing-alts">
                <span>£17.99 / year</span>
                <span>·</span>
                <span>£44.99 lifetime</span>
              </div>
            </div>
          </div>

          <a
            className="btn-primary btn-center"
            href="https://apps.apple.com/app/id6761305108"
            target="_blank"
            rel="noreferrer"
          >
            <AppStoreIcon />
            Get HabitBase
          </a>
        </div>
      </section>
    </main>
  );
}
