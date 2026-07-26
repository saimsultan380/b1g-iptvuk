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
      // Legacy / broken paths → canonical pages (prevent soft-404 duplicates)
      {
        source: "/setup-instructions",
        destination: "/installation-guide/",
        permanent: true,
      },
      {
        source: "/setup-instructions/",
        destination: "/installation-guide/",
        permanent: true,
      },
      {
        source: "/compare-plans",
        destination: "/subscription-plan/",
        permanent: true,
      },
      {
        source: "/compare-plans/",
        destination: "/subscription-plan/",
        permanent: true,
      },
      {
        source: "/b1g-iptv-subscription",
        destination: "/subscription-plan/",
        permanent: true,
      },
      {
        source: "/b1g-iptv-subscription/",
        destination: "/subscription-plan/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
