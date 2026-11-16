import type { ReactNode } from "react";
import { Link } from "react-router-dom";

// Source of truth: PRIVACY_POLICY.txt in the HabitBase app repo.
// Keep this page's wording in sync with that file.

const email = <a href="mailto:Chet8r@gmail.com">Chet8r@gmail.com</a>;

const sections: { title: string; body: ReactNode }[] = [
  {
    title: "On your phone only",
    body: (
      <>
        <p>
          Your habits, check-ins, schedules, reminders, Timebox plans, brain dump and settings are stored on your phone. We don't receive them, except what you choose to share in Circle (see below). You don't need an account for any of this.
        </p>
        <ul>
          <li>
            Apple Reminders. If you turn on Reminders sync, HabitBase reads and updates the reminder lists you choose, on your phone. Your reminders are never sent to us.
          </li>
          <li>
            iCloud backup. If you turn it on, your habits are saved to your own iCloud account. We can't see it.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Accounts (optional)",
    body: (
      <>
        <p>
          You need an account only for Circle, and to hear back about support tickets. You sign in with Apple or with a code sent to your email. We keep:
        </p>
        <ul>
          <li>your email address (Apple may give us a private relay address instead),</li>
          <li>an Apple user identifier, if you use Sign in with Apple,</li>
          <li>the name Apple shares when you first sign in, if you allow it,</li>
          <li>your display name, and a username made from it,</li>
          <li>your profile photo, if you add one,</li>
          <li>when you were last active. You can hide this from friends.</li>
        </ul>
        <p>
          Anyone who searches for your exact username, or who you send a friend request to, sees your name, photo and username.
        </p>
      </>
    ),
  },
  {
    title: "Circle",
    body: (
      <>
        <p>
          When you share habits in Circle, we store for each shared habit: its name and emoji, its stage, its streaks, how many times it's been done, and the days it was done this year. Milestones you share become posts with those numbers, and you can add a photo to a post. Friends can react with an emoji.
        </p>
        <p>
          Only people you've accepted as friends see your shared habits, posts and photos. We also store your friends, your friend requests, the people you've blocked, and the reports you send. Username searches are kept for one day.
        </p>
        <p>
          You can stop sharing a habit, delete a post or photo, remove a friend or block someone at any time.
        </p>
      </>
    ),
  },
  {
    title: "Cups (challenges)",
    body: (
      <>
        <ul>
          <li>
            In a Consistency Cup, everyone in it sees your name, photo, the habit you picked and its schedule, and which days you did it between the Cup's dates.
          </li>
          <li>In a Step Cup, everyone in it sees your daily step count.</li>
        </ul>
        <p>
          Steps come from Apple Health, only with your permission. We read only your step count, and only for the Step Cups you're in. HabitBase never writes to Apple Health. Health data is never used for advertising or marketing, never sold, and never stored in iCloud.
        </p>
      </>
    ),
  },
  {
    title: "Notifications",
    body: (
      <p>
        Habit reminders are scheduled on your phone. For Circle notifications (friend requests, reactions, Cup results), we store your device's push token and time zone. These notifications are sent through Expo's push service and Apple's Push Notification service.
      </p>
    ),
  },
  {
    title: "Smaller-version suggestions",
    body: (
      <p>
        When you add a smaller version of a habit, the habit's name is sent to our server and to Anthropic's Claude API, which suggests smaller versions. Suggestions are stored by habit name so they can be reused. A random ID for your install limits how many you can ask for each day. Nothing else about you is sent.
      </p>
    ),
  },
  {
    title: "Support tickets",
    body: (
      <p>
        Feature requests and bug reports you send in the app are stored with your account. If you're not signed in, they're stored with the email address you give, so we can reply.
      </p>
    ),
  },
  {
    title: "Purchases",
    body: (
      <p>
        Apple handles payments, and we never see your card details. RevenueCat tells the app whether you have Pro, using a random ID for your install and your purchase history.
      </p>
    ),
  },
  {
    title: "Analytics",
    body: (
      <p>
        In the App Store version, PostHog (EU) records how the app is used, such as which screens and features are opened, and errors the app runs into. It also works out your rough location (country and city) from your IP address. Events are linked to a random ID for your install, not to your name or email.
      </p>
    ),
  },
  {
    title: "Who processes data for us",
    body: (
      <>
        <ul>
          <li>Supabase: database, sign-in, photo storage and server functions. Hosted in London, UK.</li>
          <li>PostHog: analytics and error reports. Hosted in the EU.</li>
          <li>RevenueCat: subscriptions.</li>
          <li>Anthropic: smaller-version suggestions.</li>
          <li>Expo and Apple: push notifications.</li>
          <li>Apple: Sign in with Apple, Apple Health, iCloud and App Store payments.</li>
        </ul>
        <p>
          Some of these services are outside the UK. When data goes outside the UK, it's protected by those services' standard data protection terms.
        </p>
        <p>
          We don't sell your data. We don't use it for advertising, and we don't track you across other companies' apps or websites.
        </p>
      </>
    ),
  },
  {
    title: "How long we keep it",
    body: (
      <p>
        We keep account data until you delete your account. Username searches are kept for one day. A post or photo you delete is removed from Circle straight away, and its file is deleted soon after.
      </p>
    ),
  },
  {
    title: "Deleting your account",
    body: (
      <p>
        In the app, go to Settings, tap your profile, then Delete account. This deletes your account and everything above: profile, photos, posts, reactions, friends, requests, tickets and Cup entries. If you used Sign in with Apple, it also removes HabitBase from your Apple ID. Cups you were in carry on without you. Habits on your phone stay on your phone. Apple keeps billing a subscription until you cancel it in your Apple ID's Subscriptions settings.
      </p>
    ),
  },
  {
    title: "Safety",
    body: (
      <p>
        Everyone who signs in agrees to the Circle rules, which have no tolerance for objectionable content or abusive users. You can report or block someone from the three-dots menu on their post or profile. We review reports within 24 hours and remove content that breaks the rules.
      </p>
    ),
  },
  {
    title: "Your rights",
    body: (
      <>
        <p>
          You can ask for a copy of your data, or ask us to correct or delete it, by emailing {email}.
        </p>
        <p>We use your data:</p>
        <ul>
          <li>to provide the features you ask for: your account, Circle and Cups;</li>
          <li>
            with your consent, for Apple Health and notifications. You can turn these off in iOS Settings at any time;
          </li>
          <li>for our legitimate interests in keeping Circle safe and improving the app.</li>
        </ul>
        <p>
          If you're unhappy with how we handle your data, you can complain to the UK Information Commissioner's Office at{" "}
          <a href="https://ico.org.uk" target="_blank" rel="noreferrer">
            ico.org.uk
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Children",
    body: <p>You must be at least 13 to create an account and use Circle.</p>,
  },
  {
    title: "Changes",
    body: (
      <p>
        If we change this policy, we'll update this page and the date at the top.
      </p>
    ),
  },
  {
    title: "Contact",
    body: <p>Questions about this policy can be sent to Chetan Rajesh at {email}.</p>,
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
        <p className="page-meta">Last updated: November 13, 2026</p>

        <p>
          HabitBase is built and maintained by Chetan Rajesh. This policy explains what stays on your phone, what goes to our servers and other services, and what you can do about it. If you have a question, email {email}.
        </p>
      </div>

      {sections.map((section, i) => (
        <div key={section.title}>
          {i > 0 && <div className="section-divider" />}
          <h2>{section.title}</h2>
          {section.body}
        </div>
      ))}
    </main>
  );
}
