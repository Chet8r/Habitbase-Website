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
import screenLevels from "../assets/Simulator App Screens/Screenshot iPhone 17 Pro 16-11-2026 at 20.34.39.png";
import screenStartSmall from "../assets/Simulator App Screens/Screenshot iPhone 17 Pro 16-11-2026 at 16.45.17.png";
import screenHome from "../assets/Simulator App Screens/Screenshot iPhone 17 Pro 16-11-2026 at 16.41.27.png";
import screenDetail from "../assets/Simulator App Screens/Screenshot iPhone 17 Pro 16-11-2026 at 16.48.31.png";
import screenTimebox from "../assets/Simulator App Screens/Screenshot iPhone 17 Pro 16-11-2026 at 14.44.46.png";
import screenAllDone from "../assets/Simulator App Screens/img2.png";
import screenCircle from "../assets/Simulator App Screens/Screenshot iPhone 17 Pro 16-11-2026 at 16.35.04.png";
import screenConsistencyCup from "../assets/Simulator App Screens/Screenshot iPhone 17 Pro 16-11-2026 at 15.11.42.png";
import screenStepCup from "../assets/Simulator App Screens/Screenshot iPhone 17 Pro 16-11-2026 at 15.30.32.png";
import appStore1 from "../assets/AppStore  App Screenshots/01.png";
import appStore2 from "../assets/AppStore  App Screenshots/02.png";
import appStore3 from "../assets/AppStore  App Screenshots/03.png";
import appStore4 from "../assets/AppStore  App Screenshots/04.png";
import appStore5 from "../assets/AppStore  App Screenshots/05.png";
import appStore6 from "../assets/AppStore  App Screenshots/06.png";
import appStore7 from "../assets/AppStore  App Screenshots/07.png";
import appStore8 from "../assets/AppStore  App Screenshots/08.png";

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
      <img src={src} alt={alt} className="phone-screen-img" loading="lazy" />
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
    { src: appStore1, alt: "8 levels, from Struggling to Flow" },
    { src: appStore2, alt: "Start small, scale later" },
    { src: appStore3, alt: "One slip won't undo you" },
    { src: appStore4, alt: "Compete with friends in a Consistency Cup" },
    { src: appStore5, alt: "Every habit, one clean screen" },
    { src: appStore6, alt: "Timebox your day" },
    { src: appStore7, alt: "Race your friends in a Step Cup" },
    { src: appStore8, alt: "Share your wins with your Circle" },
  ];
  const featureImages = [
    { src: screenLevels, alt: "The 8 levels, from Struggling to Flow" },
    { src: screenStartSmall, alt: "Choosing a smaller version of a habit" },
    { src: screenHome, alt: "HabitBase daily habit list" },
    { src: screenDetail, alt: "Habit detail with slip buffer and calendar" },
    { src: screenTimebox, alt: "Timebox day planner" },
    { src: screenAllDone, alt: "All-done card with today's habits" },
    { src: screenCircle, alt: "Milestone post in the Circle feed" },
    { src: screenConsistencyCup, alt: "Consistency Cup podium" },
    { src: screenStepCup, alt: "Step Cup daily race" },
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
            Most apps track streaks. HabitBase tracks real progress: start small, bounce back from slips, and climb 8 levels from Struggling to Flow, with friends cheering you on.
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
            <span className="hero-legal">Free · Pro from £3.99/mo</span>
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
            <p>Every habit climbs 8 levels: Struggling, Consistency, Momentum, Habit, three levels of Mastery, and finally Flow. Each one you reach, the hard part fades a little more.</p>
            <p>The score system rewards showing up and absorbs the occasional slip, so your progress reflects reality, not just a streak counter that resets to zero.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> 8 levels from Struggling to Flow</li>
              <li><span className="check">✓</span> Score-based levelling up and down</li>
              <li><span className="check">✓</span> Three Mastery levels before Flow</li>
              <li><span className="check">✓</span> Habit complexity: Simple, Moderate, Complex</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenLevels}
              alt="The 8 levels, from Struggling to Flow"
              onOpen={() => setLightboxIdx(featureOffset + 0)}
            />
          </div>
        </div>
      </section>

      {/* ── START SMALL ── */}
      <section className="feature-section feature-section--tinted">
        <div className="feature-section-inner">
          <div className="feature-copy">
            <p className="eyebrow">Start Small</p>
            <h2>Start small.<br />Scale later.</h2>
            <p>Based on BJ Fogg's Tiny Habits. Begin a new habit with a smaller version that's easy to repeat, like ten deep breaths before a full meditation. For a short phase, the small version is the habit, and anything extra is a bonus.</p>
            <p>Pick a suggested smaller version or write your own. Reach the check-ins you need within the misses allowed and you graduate to the full habit, with reward points already on the board.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Stabilise first, or go straight to the full habit</li>
              <li><span className="check">✓</span> Suggested smaller versions, or write your own</li>
              <li><span className="check">✓</span> A clear target: check-ins needed, misses allowed</li>
              <li><span className="check">✓</span> Reward points when you graduate</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenStartSmall}
              alt="Choosing a smaller version of a habit"
              onOpen={() => setLightboxIdx(featureOffset + 1)}
            />
          </div>
        </div>
      </section>

      {/* ── DAILY TRACKING ── */}
      <section className="feature-section">
        <div className="feature-section-inner reverse">
          <div className="feature-copy">
            <p className="eyebrow">Daily Tracking</p>
            <h2>Everything due today,<br />nothing more.</h2>
            <p>Your habit list shows only what matters right now: today's habits, their current level, and your progress bar. Clean, focused, zero clutter.</p>
            <p>Complete a habit with a tap. Undo it in seconds. Every check-in is recorded and feeds into your streak and your next level.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Today / All filters with state dropdown</li>
              <li><span className="check">✓</span> Live progress bars per habit</li>
              <li><span className="check">✓</span> Level badges (Struggling → Flow)</li>
              <li><span className="check">✓</span> Instant undo on check-ins</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenHome}
              alt="HabitBase daily habit list"
              onOpen={() => setLightboxIdx(featureOffset + 2)}
            />
          </div>
        </div>
      </section>

      {/* ── SLIP BUFFER / DETAIL ── */}
      <section className="feature-section feature-section--tinted">
        <div className="feature-section-inner">
          <div className="feature-copy">
            <p className="eyebrow">Never Restart</p>
            <h2>One slip won't<br />undo you.</h2>
            <p>Miss a day and the slip buffer steps in: one missed check-in is forgiven, and you get a window to check in before your score drops. Streak repairs, earned every 7 check-ins, bridge the gaps so one bad week doesn't wipe out your streak.</p>
            <p>Tap any habit for its full story: total check-ins, current and best streak, a year heatmap, a calendar of every day, and how far you are from the next level.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Slip buffer forgives a single miss</li>
              <li><span className="check">✓</span> Up to 3 streak repairs per habit</li>
              <li><span className="check">✓</span> Holiday Mode keeps streaks and scores safe</li>
              <li><span className="check">✓</span> Year heatmap and full calendar</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenDetail}
              alt="Habit detail with slip buffer and calendar"
              onOpen={() => setLightboxIdx(featureOffset + 3)}
            />
          </div>
        </div>
      </section>

      {/* ── TIMEBOX ── */}
      <section className="feature-section">
        <div className="feature-section-inner reverse">
          <div className="feature-copy">
            <p className="eyebrow">Timebox</p>
            <h2>Give every habit<br />its time.</h2>
            <p>Drag today's habits and tasks onto a timeline to plan your day. HabitBase nudges you when each block starts, and ticking off a habit's block checks the habit in.</p>
            <p>Jot tasks in the brain dump as they come to you, then drop them into a time when you're ready. With Pro, it syncs with your Apple Reminders too.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Drag-and-drop day timeline</li>
              <li><span className="check">✓</span> A nudge when each block starts</li>
              <li><span className="check">✓</span> Daily planning reminder</li>
              <li><span className="check">✓</span> Brain dump inbox for tasks</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenTimebox}
              alt="Timebox day planner"
              onOpen={() => setLightboxIdx(featureOffset + 4)}
            />
          </div>
        </div>
      </section>

      {/* ── CELEBRATIONS ── */}
      <section className="feature-section feature-section--tinted">
        <div className="feature-section-inner">
          <div className="feature-copy">
            <p className="eyebrow">Celebrations</p>
            <h2>Momentum you<br />can feel.</h2>
            <p>Level up, hit a streak milestone or reach a big check-in count, and HabitBase celebrates with you. Share the moment with your Circle, with a photo if you like.</p>
            <p>Finish every habit due today and the all-done card appears, ready to save or share. Been away for a while? A gentle "Welcome back" summary shows where things stand.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Level-up and milestone celebrations</li>
              <li><span className="check">✓</span> Share milestones to your Circle</li>
              <li><span className="check">✓</span> All-done card to save or share</li>
              <li><span className="check">✓</span> Gentle "Welcome back" summary</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenAllDone}
              alt="All-done card with today's habits"
              onOpen={() => setLightboxIdx(featureOffset + 5)}
            />
          </div>
        </div>
      </section>

      {/* ── CIRCLE ── */}
      <section className="feature-section">
        <div className="feature-section-inner reverse">
          <div className="feature-copy">
            <p className="eyebrow">Circle</p>
            <h2>Share your wins<br />with friends.</h2>
            <p>Add friends and share only the habits you choose. When you level up or reach a milestone, it shows in your Circle, and friends can cheer you on with a reaction.</p>
            <p>Only friends you've accepted see what you share. Circle needs a free account; everything else in HabitBase works without one.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Share only the habits you choose</li>
              <li><span className="check">✓</span> Milestone posts, with a photo if you like</li>
              <li><span className="check">✓</span> Emoji reactions from friends</li>
              <li><span className="check">✓</span> Only accepted friends can see</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenCircle}
              alt="Milestone post in the Circle feed"
              onOpen={() => setLightboxIdx(featureOffset + 6)}
            />
          </div>
        </div>
      </section>

      {/* ── CONSISTENCY CUP ── */}
      <section className="feature-section feature-section--tinted">
        <div className="feature-section-inner">
          <div className="feature-copy">
            <p className="eyebrow">Consistency Cup</p>
            <h2>Who's the most<br />consistent?</h2>
            <p>Start a Cup with friends and each keep a habit you share, on its own schedule. The podium ranks everyone by how reliably they show up, not by who does the most.</p>
            <p>See who's done theirs today and follow everyone's days on the calendar. You pick the dates, up to 90 days, for up to 10 people.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> Everyone keeps their own habit</li>
              <li><span className="check">✓</span> Live podium by completion rate</li>
              <li><span className="check">✓</span> See who's checked in today</li>
              <li><span className="check">✓</span> Up to 10 people and 90 days</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenConsistencyCup}
              alt="Consistency Cup podium"
              onOpen={() => setLightboxIdx(featureOffset + 7)}
            />
          </div>
        </div>
      </section>

      {/* ── STEP CUP ── */}
      <section className="feature-section">
        <div className="feature-section-inner reverse">
          <div className="feature-copy">
            <p className="eyebrow">Step Cup</p>
            <h2>Race your friends<br />every day.</h2>
            <p>A daily step race with friends, using Apple Health. Walk the most before the race ends and you win that day's cup.</p>
            <p>Weekly and monthly winners keep the bigger race going. HabitBase only reads your step count, and never writes to Apple Health.</p>
            <ul className="feature-list">
              <li><span className="check">✓</span> A new race every day</li>
              <li><span className="check">✓</span> Weekly and monthly winners</li>
              <li><span className="check">✓</span> One cup for every day you win</li>
              <li><span className="check">✓</span> Steps read from Apple Health</li>
            </ul>
          </div>
          <div className="feature-visual">
            <PhoneFrame
              src={screenStepCup}
              alt="Step Cup daily race"
              onOpen={() => setLightboxIdx(featureOffset + 8)}
            />
          </div>
        </div>
      </section>

      {/* ── PROGRESSION REFERENCE ── */}
      <section className="prog-section">
        <div className="prog-inner">
          <p className="eyebrow" style={{ textAlign: "center" }}>The numbers</p>
          <h2 className="prog-headline">What does it take to reach each level?</h2>
          <p className="prog-sub">
            Every habit climbs 8 levels on its way to Flow. The table below shows how many successful check-ins it takes to move from one level to the next.
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
                  <th className="prog-th-level">Level</th>
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
          <p className="eyebrow" style={{ textAlign: "center" }}>Roadmap</p>
          <h2 className="roadmap-headline">Off the roadmap, into the app.</h2>

          <div className="roadmap-grid">
            <div className="roadmap-card">
              <span className="roadmap-status">Shipped</span>
              <h3>Stabilisation Mode</h3>
              <p>Built around the 2-minute rule. Start any new habit with a smaller version that's easy to repeat, so you build the identity first and the routine second.</p>
            </div>

            <div className="roadmap-card">
              <span className="roadmap-status">Shipped</span>
              <h3>Accountability</h3>
              <p>Now Circle and Cups. Share habits with friends, cheer on each other's milestones, and go head to head in Consistency and Step Cups.</p>
            </div>

            <div className="roadmap-card">
              <span className="roadmap-status">Shipped</span>
              <h3>Holiday Mode</h3>
              <p>Put your habits on holiday for the dates you pick. No misses, no penalties, no broken streaks. Your progress is paused until you're back.</p>
            </div>

            <div className="roadmap-card">
              <span className="roadmap-status roadmap-status--soon">Coming soon</span>
              <h3>Light & Dark Mode</h3>
              <p>A proper light theme alongside the existing dark one, with a toggle in settings so HabitBase fits your phone and your eyes at any time of day.</p>
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
                <li>Full 8-level progression</li>
                <li>Timebox, reminders and Holiday Mode</li>
                <li>Circle, and join any Cup</li>
                <li>Start 1 Cup at a time</li>
                <li>iCloud backup</li>
              </ul>
            </div>

            <div className="pricing-card pricing-card--featured">
              <div className="pricing-card-header">
                <span className="pricing-tier">Pro</span>
                <div>
                  <span className="pricing-price">£3.99</span>
                  <span className="pricing-per">/month</span>
                </div>
              </div>
              <ul className="pricing-list">
                <li>Unlimited habits</li>
                <li>Weekly, monthly and yearly Habit Stats</li>
                <li>Apple Reminders sync</li>
                <li>Start as many Cups as you like</li>
              </ul>
              <div className="pricing-alts">
                <span>£24.99 / year</span>
                <span>·</span>
                <span>£59.99 lifetime</span>
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
