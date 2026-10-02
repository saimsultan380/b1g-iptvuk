import type { NextConfig } from "next";

const CANONICAL_ORIGIN = "https://b1giptvplayers.com";
const SUBSCRIPTION_PLANS = "/b1g-player-subscription-plans/";
const HOME = "/b1g-iptv-uk/";

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

      // Root → canonical homepage
      {
        source: "/",
        destination: HOME,
        permanent: true,
      },
      {
        source: "/b1g-iptv-subscription",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },
      {
        source: "/b1g-iptv-subscription/",
        destination: SUBSCRIPTION_PLANS,
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
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },
      {
        source: "/subscription-plan/",
        destination: SUBSCRIPTION_PLANS,
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
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },
      {
        source: "/compare-plans/",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },

      // ── WordPress Migration Redirects ──────────────────────────────────

      {
        source: "/our-plans",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },
      {
        source: "/our-plans/",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },

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

      {
        source: "/subscription-plans",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },
      {
        source: "/subscription-plans/",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },

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

      {
        source: "/b1g-iptv",
        destination: HOME,
        permanent: true,
      },
      {
        source: "/b1g-iptv/",
        destination: HOME,
        permanent: true,
      },

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

      {
        source: "/buy-now",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },
      {
        source: "/buy-now/",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },

      {
        source: "/b1g-iptv-reviews",
        destination: "/b1g-player-reviews/",
        permanent: true,
      },
      {
        source: "/b1g-iptv-reviews/",
        destination: "/b1g-player-reviews/",
        permanent: true,
      },

      {
        source: "/b1g-iptv-subscription-plans",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },
      {
        source: "/b1g-iptv-subscription-plans/",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },

      {
        source: "/b1g-iptv-subscription-plans-uk",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },
      {
        source: "/b1g-iptv-subscription-plans-uk/",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },

      {
        source: "/b1g-player-iptv-subscription-guide-for-uk-2026",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },
      {
        source: "/b1g-player-iptv-subscription-guide-for-uk-2026/",
        destination: SUBSCRIPTION_PLANS,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
