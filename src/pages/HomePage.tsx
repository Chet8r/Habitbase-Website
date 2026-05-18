import { useState } from "react";
import {
  LEVELS,
  LEVEL_COLOR,
  FREQ_SHORT,
  progression,
  fmtDays,
  type Difficulty,
} from "../utils/progression";
import { Lightbox } from "../components/Lightbox";
import appIcon from "../assets/App Icon.png";
import screenHome from "../assets/Simulator App Screens/img1.png";
import screenActivity from "../assets/Simulator App Screens/img2.png";
import screenDetail from "../assets/Simulator App Screens/img3.png";
import screenStats from "../assets/Simulator App Screens/img4.png";
import screenJourney from "../assets/Simulator App Screens/img5.png";
import screenNFC from "../assets/Simulator App Screens/img8.PNG";
import screenCues from "../assets/Simulator App Screens/img7.png";
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

function PhoneFrame({
  src,
  alt,
  onOpen,
}: {
  src: string;
  alt: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className="phone-frame phone-frame--clickable"
      onClick={onOpen}
      aria-label={`Enlarge: ${alt}`}
    >
      <img src={src} alt={alt} className="phone-screen-img" />
    </button>
  );
}

export function HomePage() {
  const [progDiff, setProgDiff] = useState<Difficulty>("simple");
  const progRows = LEVELS.map((lv) => ({
    lv,
    cells: [1, 2, 3, 4, 5, 6, 7].map((f) => {
      const d = progression(progDiff, f);
      return d.levels.find((e) => e.lv === lv)!;
    }),
  }));
  const progTotals = [1, 2, 3, 4, 5, 6, 7].map((f) => progression(progDiff, f));

  const heroImages = [
    { src: appStore1, alt: "Real habit science" },
    { src: appStore5, alt: "All your habits" },
    { src: appStore2, alt: "NFC real-world habits" },
    { src: appStore4, alt: "Know what's working" },
    { src: appStore3, alt: "Consistency you can see" },
  ];
  const featureImages = [
    { src: screenJourney, alt: "Habit progression stages" },
    { src: screenHome, alt: "HabitBase daily habit list" },
    { src: screenNFC, alt: "HabitTap NFC check-in" },
    { src: screenStats, alt: "HabitBase stats screen" },
    { src: screenDetail, alt: "Habit detail with calendar" },
    { src: screenCues, alt: "Setting a habit cue" },
    { src: screenActivity, alt: "Activity feed and celebrations" },
  ];
  const lightboxImages = [...heroImages, ...featureImages];
  const featureOffset = heroImages.length;
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

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
            Most apps track streaks. HabitBase tracks real progress, built on cues, habit stacking, slip buffers, and a six-phase progression from Struggling to Flow.
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
          {heroImages.map((s, i) => (
            <button
              key={i}
              type="button"
              className="hero-screenshot-item hero-screenshot-item--clickable"
              onClick={() => setLightboxIdx(i)}
              aria-label={`Enlarge: ${s.alt}`}
            >
              <img src={s.src} alt={s.alt} />
            </button>
          ))}
        </div>
      </section>

      {/* ── PROGRESSION ── */}
      <section className="feature-section">
        <div className="feature-section-inner reverse">
          <div className="feature-copy">
            <p className="eyebrow">The Journey</p>
            <h2>From Struggling<br />to Flow.</h2>
            <p>Every habit moves through six phases: Struggling, Consistency, Momentum, Habit, Mastery, and finally Flow. Each one you reach, the hard part fades a little more.</p>
            <p>The score system rewards showing up and absorbs the occasional slip, so your progress reflects reality, not just a streak counter that resets to zero.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> 6-phase progression path</li>
              <li><span className="check">✓</span> Score-based levelling up and down</li>
              <li><span className="check">✓</span> Three Mastery stages before Flow</li>
              <li><span className="check">✓</span> Habit complexity: Simple, Moderate, Complex</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenJourney}
              alt="Habit progression stages"
              onOpen={() => setLightboxIdx(featureOffset + 0)}
            />
          </div>
        </div>
      </section>

      {/* ── DAILY TRACKING ── */}
      <section className="feature-section feature-section--tinted">
        <div className="feature-section-inner">
          <div className="feature-copy">
            <p className="eyebrow">Daily Tracking</p>
            <h2>Everything due today,<br />nothing more.</h2>
            <p>Your habit list shows only what matters right now: today's habits, their current stage, and your progress bar. Clean, focused, zero clutter.</p>
            <p>Complete a habit with a tap. Undo it in seconds. Every check-in is recorded and feeds into your stats and progression score.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Today / All filters with state dropdown</li>
              <li><span className="check">✓</span> Live progress bars per habit</li>
              <li><span className="check">✓</span> Stage badges (Struggling → Flow)</li>
              <li><span className="check">✓</span> Instant undo on completions</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenHome}
              alt="HabitBase daily habit list"
              onOpen={() => setLightboxIdx(featureOffset + 1)}
            />
          </div>
        </div>
      </section>

      {/* ── NFC ── */}
      <section className="feature-section">
        <div className="feature-section-inner reverse">
          <div className="feature-copy">
            <p className="eyebrow">HabitTap NFC</p>
            <h2>Tap your phone.<br />Habit done.</h2>
            <p>Link any NFC tag to a habit. Tap your phone to the tag and it's instantly marked complete, with no unlocking, no opening the app, and no scrolling.</p>
            <p>Put a tag on your gym bag, bedside table, desk, or front door. The tag stores an ID, not your data. Multiple people can use the same tag for different habits.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Works with any NFC sticker or tag</li>
              <li><span className="check">✓</span> No data stored on the tag</li>
              <li><span className="check">✓</span> Multiple users, one tag</li>
              <li><span className="check">✓</span> Gym, reading, skincare, supplements</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenNFC}
              alt="HabitTap NFC check-in"
              onOpen={() => setLightboxIdx(featureOffset + 2)}
            />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="feature-section feature-section--tinted">
        <div className="feature-section-inner">
          <div className="feature-copy">
            <p className="eyebrow">Stats & Insights</p>
            <h2>See what's working.<br />Fix what isn't.</h2>
            <p>Active days streak, full-year heatmap, the habit closest to its next level, weekday performance, and recovery pace, all on one screen.</p>
            <p>Completion rings shift between weekly, monthly, and yearly views so trends and weak spots surface without digging.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Weekly, monthly, yearly completion rings</li>
              <li><span className="check">✓</span> Full-year activity heatmap</li>
              <li><span className="check">✓</span> Best day and needs-attention day</li>
              <li><span className="check">✓</span> Closest level-up and recovery pace</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenStats}
              alt="HabitBase stats screen"
              onOpen={() => setLightboxIdx(featureOffset + 3)}
            />
          </div>
        </div>
      </section>

      {/* ── DETAIL / CALENDAR ── */}
      <section className="feature-section">
        <div className="feature-section-inner reverse">
          <div className="feature-copy">
            <p className="eyebrow">Habit Detail</p>
            <h2>Every day.<br />Every check-in.</h2>
            <p>Tap any habit to see its full history: a calendar of every completed day, current and longest streaks, sessions this month and year, and your reminder settings.</p>
            <p>iCloud backup keeps a rotating 3-slot history of your habits and one-tap restores them if you switch phones or reinstall.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Full completion calendar</li>
              <li><span className="check">✓</span> Current and longest streak</li>
              <li><span className="check">✓</span> iCloud backup with 3-slot rotation</li>
              <li><span className="check">✓</span> Multiple reminders per habit</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenDetail}
              alt="Habit detail with calendar"
              onOpen={() => setLightboxIdx(featureOffset + 4)}
            />
          </div>
        </div>
      </section>

      {/* ── HABIT CUES & STACKING ── */}
      <section className="feature-section feature-section--tinted">
        <div className="feature-section-inner">
          <div className="feature-copy">
            <p className="eyebrow">Cues & Stacking</p>
            <h2>Anchor every habit<br />to a trigger.</h2>
            <p>Pick a time-of-day cue like "after waking up" or "before bed", write your own, or stack a habit onto an existing one so finishing one prompts the next.</p>
            <p>Habits with cues are easier to start because they're tied to something you already do. Optional cue reminders fire automatically on the times you set.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> 7 preset time-of-day cues</li>
              <li><span className="check">✓</span> Custom cue text with per-day times</li>
              <li><span className="check">✓</span> Habit stacking with auto check-in prompts</li>
              <li><span className="check">✓</span> Optional auto-generated cue reminders</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenCues}
              alt="Setting a habit cue"
              onOpen={() => setLightboxIdx(featureOffset + 5)}
            />
          </div>
        </div>
      </section>

      {/* ── ACTIVITY & PERFECT DAY ── */}
      <section className="feature-section">
        <div className="feature-section-inner reverse">
          <div className="feature-copy">
            <p className="eyebrow">Activity & Celebrations</p>
            <h2>Momentum you<br />can feel.</h2>
            <p>The activity feed records every check-in, miss, level-up, and recovered streak so you can scroll back through your progress whenever you need a reminder of how far you've come.</p>
            <p>When you complete every habit due today, the Perfect Day card unlocks. A shareable celebration with your streaks, levels, and habits of the day.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Chronological activity feed</li>
              <li><span className="check">✓</span> Level-up and milestone celebrations</li>
              <li><span className="check">✓</span> Perfect Day card you can share</li>
              <li><span className="check">✓</span> Gentle "Welcome back" recovery summary</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenActivity}
              alt="Activity feed and celebrations"
              onOpen={() => setLightboxIdx(featureOffset + 6)}
            />
          </div>
        </div>
      </section>

      {/* ── PROGRESSION REFERENCE ── */}
      <section className="prog-section">
        <div className="prog-inner">
          <p className="eyebrow" style={{ textAlign: "center" }}>The numbers</p>
          <h2 className="prog-headline">What does it take to reach each phase?</h2>
          <p className="prog-sub">
            Every habit moves through six phases on its way to Flow. The table below shows how many successful check-ins it takes to move from one phase to the next.
          </p>

          <div className="prog-toggle" role="tablist" aria-label="Difficulty">
            {(["simple", "moderate", "complex"] as Difficulty[]).map((d) => (
              <button
                key={d}
                role="tab"
                aria-selected={progDiff === d}
                className={`prog-toggle-pill ${progDiff === d ? "is-active" : ""}`}
                onClick={() => setProgDiff(d)}
              >
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </button>
            ))}
          </div>

          <div className="prog-table-wrap">
            <table className="prog-table">
              <thead>
                <tr>
                  <th className="prog-th-level">Phase</th>
                  {[1, 2, 3, 4, 5, 6, 7].map((f) => (
                    <th key={f}>{FREQ_SHORT[f]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {progRows.map(({ lv, cells }) => (
                  <tr
                    key={lv}
                    className={
                      lv === "Habit" ? "prog-milestone prog-milestone--habit" : ""
                    }
                  >
                    <td className="prog-td-level">
                      <span
                        className="prog-dot"
                        style={{ background: LEVEL_COLOR[lv] }}
                        aria-hidden
                      />
                      {lv}
                    </td>
                    {cells.map((entry, i) => (
                      <td key={i} className="prog-td-num">
                        {entry.needed > 0 ? entry.needed : "—"}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="prog-total">
                  <td className="prog-td-level">Total to Flow</td>
                  {progTotals.map((d, i) => (
                    <td key={i} className="prog-td-num">
                      <span className="prog-total-checks">{d.totalChecks}</span>
                      <span className="prog-total-time">{fmtDays(d.totalDays)}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <p className="prog-footnote">
            Pick your difficulty. Each column is a different schedule, from once a week up to daily. The bottom row shows the total check-ins to reach Flow and roughly how long that takes in real time.
          </p>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="roadmap-section">
        <div className="roadmap-inner">
          <p className="eyebrow" style={{ textAlign: "center" }}>What's next</p>
          <h2 className="roadmap-headline">Coming to HabitBase.</h2>

          <div className="roadmap-grid">
            <div className="roadmap-card">
              <h3>Stabilisation Mode</h3>
              <p>Built around the 2-minute rule. Shrink any habit down to a version you can finish in two minutes for a short period so you build the identity first, the routine second.</p>
            </div>

            <div className="roadmap-card">
              <h3>Accountability</h3>
              <p>Share a habit with a friend. See each other's progress, nudge each other when one of you slips, and keep momentum going together.</p>
            </div>

            <div className="roadmap-card">
              <h3>Light & Dark Mode</h3>
              <p>A proper light theme alongside the existing dark one, with a toggle in settings so HabitBase fits your phone and your eyes at any time of day.</p>
            </div>

            <div className="roadmap-card">
              <h3>Holiday Mode</h3>
              <p>Put any habit on holiday for a selected period. No misses, no penalties, no broken streaks. Your progress is paused until you're back.</p>
            </div>
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
                <li>Cues, stacking, and reminders</li>
                <li>iCloud backup</li>
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
                <li>Full Overview and stats screen</li>
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

      {lightboxIdx !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onNavigate={setLightboxIdx}
        />
      )}
    </main>
  );
}
