import type { NextConfig } from "next";

const CANONICAL_ORIGIN = "https://b1gplayer.uk";

const nextConfig: NextConfig = {
  // Enforce trailing slashes site-wide (routes, Link, and metadata canonicals)
  trailingSlash: true,

  async redirects() {
    return [
      // WWW → non-WWW (permanent). Covers all routes including dynamic paths.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.b1gplayer.uk" }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },

      // Old route slugs → client-approved canonical URLs
      {
        source: "/subscription-plan",
        destination: "/b1g-iptv-subscription/",
        permanent: true,
      },
      {
        source: "/subscription-plan/",
        destination: "/b1g-iptv-subscription/",
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
        destination: "/b1g-player-reseller/",
        permanent: true,
      },
      {
        source: "/reseller-panel/",
        destination: "/b1g-player-reseller/",
        permanent: true,
      },

      // Legacy / broken paths → canonical pages
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
        destination: "/b1g-iptv-subscription/",
        permanent: true,
      },
      {
        source: "/compare-plans/",
        destination: "/b1g-iptv-subscription/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
