import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Data Stored on Your Device',
    paragraphs: [
      'All habit data you create — including habit names, schedules, check-in history, reminders, progress levels, NFC tag links, activity events, and archived or deleted habits — is stored locally on your device.',
      'This data does not leave your device except through optional iCloud backup. HabitBase does not require an account to use the app.',
    ],
  },
  {
    title: 'iCloud Backup',
    paragraphs: [
      'If you enable iCloud backup in settings, your habit data is saved to your personal iCloud account. This data is controlled by you through your Apple ID. We do not have access to your iCloud backup data.',
    ],
  },
  {
    title: 'Reminders and Notifications',
    paragraphs: [
      'If you enable reminders, the app schedules notifications locally on your device using iOS system APIs. No notification content or scheduling data is sent to an external server.',
    ],
  },
  {
    title: 'NFC',
    paragraphs: [
      'If you use NFC habit check-ins, NFC tag identifiers are read and processed locally on your device and stored with the associated habit. NFC data is not transmitted outside your device.',
    ],
  },
  {
    title: 'Analytics',
    paragraphs: [
      'HabitBase uses PostHog to collect anonymous product analytics in production builds. This includes events such as app opens, feature interactions, and general usage patterns. Analytics events are sent to PostHog servers hosted in the EU.',
      'Analytics data is used only to understand how the app is used and to guide improvements. It is not used for advertising or shared beyond the analytics service.',
    ],
  },
  {
    title: 'In-App Purchases',
    paragraphs: [
      'HabitBase uses RevenueCat to manage in-app purchases and subscriptions. RevenueCat processes purchase-related data needed to validate your subscription, which may include a device identifier and purchase receipt data provided by Apple.',
    ],
  },
  {
    title: 'What We Do Not Do',
    bullets: [
      'We do not sell your personal information.',
      'We do not use your data for advertising.',
      'We do not require an account or collect your name or email to use the app.',
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      'HabitBase is not directed at children under 13. If you believe a child has provided personal information through the app, contact us and the issue will be addressed promptly.',
    ],
  },
  {
    title: 'Changes to This Policy',
    paragraphs: [
      'If this policy is updated, the new version will be posted here with a revised date.',
    ],
  },
]

export function PrivacyPage() {
  return (
    <main className="inner-page">
      <Link to="/" className="back-link">
        ← Back
      </Link>

      <h1>Privacy Policy</h1>
      <p className="page-meta">Last updated: March 31, 2026 · HabitBase by Chetan Rajesh</p>

      <p style={{ fontSize: 14, color: '#777', lineHeight: 1.8 }}>
        HabitBase is built and maintained by Chetan Rajesh. This policy explains what data the app handles, why, and how.
      </p>

      {sections.map((section, i) => (
        <div key={section.title}>
          {i > 0 && <div className="section-divider" />}
          <h2>{section.title}</h2>
          {section.paragraphs?.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {section.bullets && (
            <ul>
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </main>
  )
}
