import type { Metadata } from "next";

/** Canonical production origin — always non-www, no trailing slash on origin. */
export const SITE_ORIGIN = "https://b1gplayer.uk";

export const SITE_NAME = "B1G Player";

export const SITE_TITLE =
  "B1G Player – Official IPTV App & B1G IPTV Subscription";

export const SITE_DESCRIPTION =
  "B1G Player is the official app for B1G IPTV subscriptions. Access live TV, sports, movies and series on supported Firestick and Android devices.";

/** Canonical route paths (always trailing slash except homepage `/`). */
export const ROUTES = {
  home: "/",
  subscription: "/b1g-iptv-subscription/",
  installation: "/b1g-player-installation-guide/",
  reseller: "/b1g-player-reseller/",
  contact: "/contact/",
} as const;

/** Official support WhatsApp (E.164 without + for wa.me links). */
export const WHATSAPP_NUMBER_E164 = "447848177296";
export const WHATSAPP_NUMBER_DISPLAY = "+44 7848 177296";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER_E164}`;

/** WhatsApp chat URL with an optional prefilled message. */
export function buildWhatsAppUrl(message?: string): string {
  if (!message?.trim()) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message.trim())}`;
}

/** Common short intents so the owner knows the source site + what the visitor wants. */
export const WHATSAPP_INTENTS = {
  freeTrial:
    "Hi, I came from b1gplayer.uk. I want to start a free trial.",
  getStarted:
    "Hi, I came from b1gplayer.uk. I want to get started with B1G IPTV.",
  buySubscription:
    "Hi, I came from b1gplayer.uk. I want to buy a B1G IPTV subscription.",
  support:
    "Hi, I came from b1gplayer.uk. I need support with B1G Player.",
  subscriptionSupport:
    "Hi, I came from b1gplayer.uk. I need help with a B1G IPTV subscription.",
  reseller:
    "Hi, I came from b1gplayer.uk. I'm interested in becoming a reseller.",
  contact:
    "Hi, I came from b1gplayer.uk. I have an enquiry.",
} as const;

export type WhatsAppIntent = keyof typeof WHATSAPP_INTENTS;

export function buildIntentWhatsAppUrl(intent: WhatsAppIntent): string {
  return buildWhatsAppUrl(WHATSAPP_INTENTS[intent]);
}

/** Prefilled order message so the owner can see the source site + plan. */
export function buildPlanWhatsAppUrl(planName: string, price: string): string {
  return buildWhatsAppUrl(
    `Hi, I came from b1gplayer.uk. I want the ${planName} plan (${price}).`
  );
}

/** Prefilled reseller package message. */
export function buildResellerPackageWhatsAppUrl(
  packageName: string,
  price: string
): string {
  return buildWhatsAppUrl(
    `Hi, I came from b1gplayer.uk. I want the ${packageName} (${price}).`
  );
}

/**
 * Prefer explicit env in preview/staging; production always resolves to non-www.
 * Strips trailing slash and any accidental www. prefix from the origin.
 */
export function getSiteOrigin(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    (process.env.VERCEL_ENV === "production"
      ? SITE_ORIGIN
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : SITE_ORIGIN);

  try {
    const url = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
    }
    return url.origin;
  } catch {
    return SITE_ORIGIN;
  }
}

/** True when the last path segment looks like a static file (e.g. sitemap.xml). */
function hasFileExtension(pathname: string): boolean {
  const last = pathname.split("/").filter(Boolean).pop() ?? "";
  return /\.[a-z0-9]+$/i.test(last);
}

/** Ensure path is absolute pathname with trailing slash (except `/` and file URLs). */
export function canonicalPath(path: string): string {
  if (!path || path === "/") return "/";
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  const withoutQuery = trimmed.split("?")[0]?.split("#")[0] ?? trimmed;
  if (hasFileExtension(withoutQuery)) {
    return withoutQuery.endsWith("/")
      ? withoutQuery.slice(0, -1)
      : withoutQuery;
  }
  return withoutQuery.endsWith("/") ? withoutQuery : `${withoutQuery}/`;
}

/** Absolute canonical URL (non-www + trailing slash on page paths). */
export function absoluteUrl(path: string = "/"): string {
  const origin = getSiteOrigin();
  const pathname = canonicalPath(path);
  return pathname === "/" ? `${origin}/` : `${origin}${pathname}`;
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  /** When true, skip the root title template (title already includes brand). */
  absoluteTitle?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = true,
}: PageSeoInput): Metadata {
  const pathname = canonicalPath(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: pathname,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} – Official IPTV App`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/** Indexed marketing routes used by sitemap + internal SEO checks. */
export const SITE_PAGES = [
  {
    path: ROUTES.home,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    changeFrequency: "weekly" as const,
    priority: 1,
    breadcrumbs: [{ name: "Home", path: ROUTES.home }],
  },
  {
    path: ROUTES.subscription,
    title: "B1G Player Subscription UK – B1G IPTV Plans & Trial",
    description:
      "Compare B1G Player plans with a B1G IPTV subscription. Choose 1, 3, 6 or 12 months, get instant activation and receive setup support in the UK.",
    changeFrequency: "weekly" as const,
    priority: 0.9,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Subscription Plans", path: ROUTES.subscription },
    ],
  },
  {
    path: ROUTES.installation,
    title: "B1G Player Installation Guide – Firestick & Android",
    description:
      "Install B1G Player on Firestick, Android TV, phones and tablets using Downloader code 4172090, then sign in with your B1G IPTV subscription details.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Installation Guide", path: ROUTES.installation },
    ],
  },
  {
    path: ROUTES.reseller,
    title: "B1G Player Reseller UK – Panel, Credits & IPTV Plans",
    description:
      "Join the B1G Player reseller programme in the UK. Manage B1G IPTV subscriptions, customer accounts and credits through one organised reseller panel.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Reseller Panel", path: ROUTES.reseller },
    ],
  },
  {
    path: ROUTES.contact,
    title: "Contact B1G Player – Free Trial, Setup & Subscription Help",
    description:
      "Contact B1G Player for a free trial, B1G IPTV subscription advice, Firestick and Android setup help, renewals and reseller enquiries in the UK.",
    changeFrequency: "monthly" as const,
    priority: 0.7,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Contact Us", path: ROUTES.contact },
    ],
  },
] as const;
