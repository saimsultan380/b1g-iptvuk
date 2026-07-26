import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const siteName = "B1G Player";
const siteTitle = "B1G Player – Official IPTV App & B1G IPTV Subscription";
const siteDescription =
  "B1G Player is the official app for B1G IPTV subscriptions. Access live TV, sports, movies and series on supported Firestick and Android devices.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "B1G Player",
    "B1G IPTV",
    "IPTV app",
    "Firestick IPTV",
    "Android TV IPTV",
    "UK IPTV",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "B1G Player – Official IPTV App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "default",
  },
  other: {
    "msapplication-TileColor": "#E01E26",
    "msapplication-TileImage": "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#12141F" },
  ],
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/icons/icon-512.png`,
  image: `${siteUrl}/og-image.png`,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased light"
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-white text-[#12141F] selection:bg-[#E01E26] selection:text-white font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
