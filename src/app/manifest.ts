import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "B1G Player",
    short_name: "B1G Player",
    description:
      "Official B1G Player IPTV app for B1G IPTV subscriptions on Firestick and Android devices.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#E01E26",
    icons: [
      {
        src: "/icons/icon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
