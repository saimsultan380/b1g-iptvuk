import type { NextConfig } from "next";

const CANONICAL_ORIGIN = "https://b1giptvplayers.com";

const nextConfig: NextConfig = {
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.b1giptvplayers.com" }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },

      // Root → new canonical homepage
      {
        source: "/",
        destination: "/b1g-iptv-uk/",
        permanent: true,
      },
      {
        source: "/b1g-iptv-subscription",
        destination: "/b1g-iptv-subscription-plans/",
        permanent: true,
      },
      {
        source: "/b1g-iptv-subscription/",
        destination: "/b1g-iptv-subscription-plans/",
        permanent: true,
      },
      {
        source: "/b1g-player-reseller",
        destination: "/b1g-iptv-reseller-panel/",
        permanent: true,
      },
      {
        source: "/b1g-player-reseller/",
        destination: "/b1g-iptv-reseller-panel/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us/",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/contact-us/",
        permanent: true,
      },
      {
        source: "/subscription-plan",
        destination: "/b1g-iptv-subscription-plans/",
        permanent: true,
      },
      {
        source: "/subscription-plan/",
        destination: "/b1g-iptv-subscription-plans/",
        permanent: true,
      },
      {
        source: "/installation-guide",
        destination: "/b1g-player-installation-guide/",
        permanent: true,
      },
      {
        source: "/installation-guide/",
        destination: "/b1g-player-installation-guide/",
        permanent: true,
      },
      {
        source: "/reseller-panel",
        destination: "/b1g-iptv-reseller-panel/",
        permanent: true,
      },
      {
        source: "/reseller-panel/",
        destination: "/b1g-iptv-reseller-panel/",
        permanent: true,
      },
      {
        source: "/setup-instructions",
        destination: "/b1g-player-installation-guide/",
        permanent: true,
      },
      {
        source: "/setup-instructions/",
        destination: "/b1g-player-installation-guide/",
        permanent: true,
      },
      {
        source: "/compare-plans",
        destination: "/b1g-iptv-subscription-plans/",
        permanent: true,
      },
      {
        source: "/compare-plans/",
        destination: "/b1g-iptv-subscription-plans/",
        permanent: true,
      },

      // ── WordPress Migration Redirects ──────────────────────────────────

      // /our-plans → /b1g-iptv-subscription-plans
      {
        source: "/our-plans",
        destination: "/b1g-iptv-subscription-plans/",
        permanent: true,
      },
      {
        source: "/our-plans/",
        destination: "/b1g-iptv-subscription-plans/",
        permanent: true,
      },

      // /reviews-what-our-customers-say → /b1g-player-reviews
      {
        source: "/reviews-what-our-customers-say",
        destination: "/b1g-player-reviews/",
        permanent: true,
      },
      {
        source: "/reviews-what-our-customers-say/",
        destination: "/b1g-player-reviews/",
        permanent: true,
      },

      // /iptv-reseller-panel-2026 → /b1g-iptv-reseller-panel
      {
        source: "/iptv-reseller-panel-2026",
        destination: "/b1g-iptv-reseller-panel/",
        permanent: true,
      },
      {
        source: "/iptv-reseller-panel-2026/",
        destination: "/b1g-iptv-reseller-panel/",
        permanent: true,
      },

      // /troubleshooting-fix-b1g-iptv-issues → /b1g-player-installation-guide
      {
        source: "/troubleshooting-fix-b1g-iptv-issues",
        destination: "/b1g-player-installation-guide/",
        permanent: true,
      },
      {
        source: "/troubleshooting-fix-b1g-iptv-issues/",
        destination: "/b1g-player-installation-guide/",
        permanent: true,
      },

      // /subscription-plans → /b1g-iptv-subscription-plans
      {
        source: "/subscription-plans",
        destination: "/b1g-iptv-subscription-plans/",
        permanent: true,
      },
      {
        source: "/subscription-plans/",
        destination: "/b1g-iptv-subscription-plans/",
        permanent: true,
      },

      // /iptv-reviews → /b1g-player-reviews
      {
        source: "/iptv-reviews",
        destination: "/b1g-player-reviews/",
        permanent: true,
      },
      {
        source: "/iptv-reviews/",
        destination: "/b1g-player-reviews/",
        permanent: true,
      },

      // /b1g-iptv → / (homepage)
      {
        source: "/b1g-iptv",
        destination: "/",
        permanent: true,
      },
      {
        source: "/b1g-iptv/",
        destination: "/",
        permanent: true,
      },

      // /reseller-panel → /iptv-reseller-panel
      {
        source: "/iptv-reseller-panel",
        destination: "/b1g-iptv-reseller-panel/",
        permanent: true,
      },
      {
        source: "/iptv-reseller-panel/",
        destination: "/b1g-iptv-reseller-panel/",
        permanent: true,
      },

      // /b1g-iptv (old WP slug) → new canonical homepage
      // Note: /b1g-iptv-uk is now a real page — no redirect needed
    ];
  },
};

export default nextConfig;
