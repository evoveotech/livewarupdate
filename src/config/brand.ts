/**
 * Brand configuration for white-label deployments.
 * Customize these values to rebrand the app.
 */
export const BRAND = {
  /** Display name (e.g. "Live War Update") */
  siteName: 'Live War Update',
  /** Full page title */
  appTitle: 'Live War Update - Real-Time Global Intelligence Dashboard',
  /** Base URL for canonical, OG, etc. (e.g. "https://theflickdaily.com") */
  siteUrl: 'https://theflickdaily.com',
  /** Author for meta tags (empty = omit). Use @handle for X/Twitter. */
  author: '',
  /** Show Pro / upgrade links in footer and menus */
  showProLinks: false,
  /** Footer tagline (e.g. "by YourCompany") */
  footerTagline: '',
  /** Links in footer — set to empty array to hide external links */
  footerLinks: [] as { label: string; href: string }[],
  /** Show GitHub icon, community widget, GitHub panel, and attribution links (set false for private/proprietary look) */
  showGitHubLinks: false,
} as const;
