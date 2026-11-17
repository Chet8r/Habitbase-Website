// Page titles, descriptions and social tags.
// scripts/prerender.mjs writes these into each page's HTML at build time, and
// SiteShell keeps the title in sync when visitors move between pages.

export const SITE_URL = "https://www.habitbase.co.uk";
export const APP_STORE_URL = "https://apps.apple.com/app/id6761305108";

export interface PageMeta {
  /** URL path the page is served at. */
  path: string;
  /** File written to dist/ for this page. */
  file: string;
  title: string;
  description: string;
  /** False for pages that shouldn't appear in search results or the sitemap. */
  indexable: boolean;
}

const homeDescription =
  "HabitBase is a habit tracker built on 8 levels from Struggling to Flow. Start small, plan your day, and keep each other going with friends in Circle and Cups.";

export const pages: PageMeta[] = [
  {
    path: "/",
    file: "index.html",
    title: "HabitBase – Habit Tracker for iPhone",
    description: homeDescription,
    indexable: true,
  },
  {
    path: "/privacy",
    file: "privacy.html",
    title: "Privacy Policy – HabitBase",
    description:
      "What stays on your phone, what HabitBase sends to its servers and other services, and how to delete your account and data.",
    indexable: true,
  },
  {
    path: "/contact",
    file: "contact.html",
    title: "Contact – HabitBase",
    description:
      "Get help with HabitBase, ask a privacy question or send feedback. Email us, or use Settings → Feedback in the app.",
    indexable: true,
  },
  {
    path: "/404",
    file: "404.html",
    title: "Page not found – HabitBase",
    description: "This page doesn't exist. Head back to the HabitBase homepage.",
    indexable: false,
  },
];

const notFound = pages.find((p) => p.file === "404.html")!;

export function pageFor(pathname: string): PageMeta {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return pages.find((p) => p.indexable && p.path === path) ?? notFound;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// Structured data for the homepage: the site's name for Google, and the app itself.
const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: "HabitBase", url: `${SITE_URL}/` },
    {
      "@type": "MobileApplication",
      name: "HabitBase",
      description: homeDescription,
      operatingSystem: "iOS",
      applicationCategory: "LifestyleApplication",
      url: `${SITE_URL}/`,
      installUrl: APP_STORE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
    },
  ],
};

/** The page-specific tags that go in <head>. Tags shared by every page live in index.html. */
export function headTags(page: PageMeta): string {
  const url = `${SITE_URL}${page.path}`;
  const tags = [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
  ];
  if (page.indexable) {
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:url" content="${url}" />`,
    );
  } else {
    tags.push(`<meta name="robots" content="noindex" />`);
  }
  if (page.path === "/") {
    const json = JSON.stringify(homeStructuredData).replace(/</g, "\\u003c");
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }
  return tags.join("\n    ");
}

export function sitemap(): string {
  const urls = pages
    .filter((p) => p.indexable)
    .map((p) => `  <url><loc>${SITE_URL}${p.path}</loc></url>`);
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
    ``,
  ].join("\n");
}

/** Updates the head after client-side navigation, so the tab title and canonical URL match the page. */
export function syncHead(pathname: string) {
  const page = pageFor(pathname);
  document.title = page.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", page.description);
  if (page.indexable) {
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `${SITE_URL}${page.path}`);
  }
}
