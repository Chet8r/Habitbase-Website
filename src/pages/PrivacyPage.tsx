import { Link } from "react-router-dom";

const sections = [
  {
    title: "Data Stored on Your Device",
    paragraphs: [
      "All habit data you create, including habit names, schedules, check-in history, reminders, progress levels, NFC tag links, activity events, and archived or deleted habits, is stored locally on your device using on-device storage. This data never leaves your device except through iCloud backup, which is optional and described below.",
      "HabitBase does not require an account to use the app.",
    ],
  },
  {
    title: "iCloud Backup",
    paragraphs: [
      "If you choose to enable iCloud backup in the app settings, your habit data is saved to your personal iCloud account. This data is controlled entirely by you through your Apple ID. We have no access to your iCloud backup data.",
    ],
  },
  {
    title: "Reminders and Notifications",
    paragraphs: [
      "If you enable reminders, the app schedules notifications locally on your device using iOS system APIs. No notification content or scheduling data is sent to any external server.",
    ],
  },
  {
    title: "NFC",
    paragraphs: [
      "If you use HabitTap NFC check-ins, NFC tag identifiers are read and processed locally on your device and stored with the associated habit. NFC data is never transmitted outside of your device.",
    ],
  },
  {
    title: "Analytics",
    paragraphs: [
      "HabitBase uses PostHog to collect anonymous product analytics in production builds. This includes events such as app opens, feature interactions, and general usage patterns. Analytics events are sent to PostHog servers hosted in the EU (eu.i.posthog.com).",
      "Analytics data is used solely to understand how the app is used and to guide improvements. It is not used for advertising or shared with other parties. Analytics are not collected in development builds.",
    ],
    link: {
      text: "PostHog Privacy Policy",
      href: "https://posthog.com/privacy",
    },
  },
  {
    title: "In-App Purchases",
    paragraphs: [
      "HabitBase uses RevenueCat to manage in-app purchases, subscriptions, and purchase restoration. RevenueCat processes purchase-related data necessary to validate and maintain your subscription status. This may include a device identifier and purchase receipt data provided by Apple.",
    ],
    link: {
      text: "RevenueCat Privacy Policy",
      href: "https://www.revenuecat.com/privacy",
    },
  },
  {
    title: "What We Do Not Do",
    bullets: [
      "We do not sell your personal information.",
      "We do not use your data for advertising.",
      "We do not share your data with third parties beyond what is needed to operate analytics and purchases.",
      "We do not require an account or collect your name or email address.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "HabitBase is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided personal information through the app, please contact us and we will address it promptly.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      'If this policy is updated, the new version will be posted at this URL with a revised "Last updated" date. Continued use of the app after a policy change constitutes acceptance of the updated terms.',
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about this privacy policy can be sent to Chetan Rajesh.",
    ],
    link: { text: "Chet8r@gmail.com", href: "mailto:Chet8r@gmail.com" },
  },
];

export function PrivacyPage() {
  return (
    <main className="inner-page">
      <Link to="/" className="back-link">
        ← Back
      </Link>

      <h1>Privacy Policy</h1>
      <div className="policy-intro">
        <p className="page-meta">Last updated: May 18, 2026</p>

        <p>
          HabitBase is built and maintained by Chetan Rajesh. This policy
          explains what data the app handles, where it is stored, and which
          third-party services are used to support the app.
        </p>
      </div>

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
          {section.link && (
            <p>
              <a href={section.link.href} target="_blank" rel="noreferrer">
                {section.link.text}
              </a>
            </p>
          )}
        </div>
      ))}
    </main>
  );
}
