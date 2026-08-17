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
    ];
  },
};

export default nextConfig;
