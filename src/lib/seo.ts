import type { Metadata } from "next";

/** Canonical production host — always non-www. */
export const SITE_HOST = "b1giptvplayers.com";

/** Canonical production origin — always non-www, no trailing slash on origin. */
export const SITE_ORIGIN = `https://${SITE_HOST}`;

/** Canonical homepage path (not `/`, which redirects here). */
export const HOME_PATH = "/b1g-iptv-uk/";

/** Prefix so WhatsApp messages always name the current site, never a retired domain. */
export const WHATSAPP_FROM_SITE = `Hi, I came from ${SITE_HOST}.`;

export const SITE_NAME = "B1G Player";

export const SITE_TITLE =
  "B1G Player: B1G IPTV App & B1G APK + B1G Player Subscription";

export const SITE_DESCRIPTION =
  "Install B1G Player on a compatible Firestick, Fire TV or Android device, choose a B1G IPTV Subscription from £10 and receive the private login details and setup guidance needed to get started.";

/** Canonical route paths (always trailing slash except homepage `/`). */
export const ROUTES = {
  home: HOME_PATH,
  subscription: "/b1g-player-subscription-plans/",
  installation: "/b1g-player-installation-guide/",
  devices: "/b1g-player-supported-devices/",
  reviews: "/b1g-player-reviews/",
  reseller: "/b1g-iptv-reseller-panel/",
  contact: "/contact-us/",
  about: "/about-us/",
  terms: "/terms-and-conditions/",
  privacy: "/privacy-policy/",
  refund: "/refund-policy/",
  dmca: "/dmca-policy/",
} as const;

export const LEGAL_UPDATED = "18 August 2026";

export const TRADING_NAME = "B1G IPTV Players";
export const LEGAL_OPERATOR_NAME = TRADING_NAME;
export const OPERATING_COUNTRY = "United Kingdom";

export const SUPPORT_WHATSAPP_DISPLAY = "+44 7848 177296";
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
  freeTrial: `${WHATSAPP_FROM_SITE} I want to start a free trial.`,
  getStarted: `${WHATSAPP_FROM_SITE} I want to get started with B1G IPTV.`,
  buySubscription: `${WHATSAPP_FROM_SITE} I want to buy a B1G IPTV subscription.`,
  support: `${WHATSAPP_FROM_SITE} I need support with B1G Player.`,
  subscriptionSupport: `${WHATSAPP_FROM_SITE} I need help with a B1G IPTV subscription.`,
  planQuestion: `${WHATSAPP_FROM_SITE} I have a question about B1G IPTV plans.`,
  deviceCheck: `${WHATSAPP_FROM_SITE} I want to check whether my device is compatible.`,
  setupSupport: `${WHATSAPP_FROM_SITE} I need setup support for B1G Player.`,
  reseller: `${WHATSAPP_FROM_SITE} I'm interested in becoming a reseller.`,
  contact: `${WHATSAPP_FROM_SITE} I have an enquiry.`,
  refund: `${WHATSAPP_FROM_SITE} I would like to discuss a refund request.`,
  copyright: `${WHATSAPP_FROM_SITE} I need to send a copyright or takedown notice.`,
  privacy: `${WHATSAPP_FROM_SITE} I have a privacy enquiry.`,
} as const;

export type WhatsAppIntent = keyof typeof WHATSAPP_INTENTS;

export function buildIntentWhatsAppUrl(intent: WhatsAppIntent): string {
  return buildWhatsAppUrl(WHATSAPP_INTENTS[intent]);
}

/** Prefilled order message so the owner can see the source site + plan. */
export function buildPlanWhatsAppUrl(planName: string, price: string): string {
  return buildWhatsAppUrl(
    `${WHATSAPP_FROM_SITE} I want the ${planName} plan (${price}).`
  );
}

/** Prefilled reseller package message. */
export function buildResellerPackageWhatsAppUrl(
  packageName: string,
  price: string
): string {
  return buildWhatsAppUrl(
    `${WHATSAPP_FROM_SITE} I want the ${packageName} (${price}).`
  );
}

/** Other-site hosts that must never appear in this project's canonicals, sitemap or Open Graph. */
const RETIRED_HOSTS = new Set(["b1gplayer.uk", "www.b1gplayer.uk"]);

/**
 * Prefer explicit env in preview/staging; production always resolves to non-www.
 * Strips trailing slash and any accidental www. prefix from the origin.
 * Maps retired domains to the current canonical host so leftover env cannot leak the old URL.
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
    const hostname = url.hostname.toLowerCase();
    if (RETIRED_HOSTS.has(hostname)) {
      return SITE_ORIGIN;
    }
    if (hostname.startsWith("www.")) {
      url.hostname = hostname.slice(4);
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
  /** When false, emit noindex, follow. Defaults to true. */
  index?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = true,
  index = true,
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
          alt: "B1G Player app displayed on compatible television and mobile devices",
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
      index,
      follow: true,
    },
  };
}

export const SUBSCRIPTION_PLANS = [
  { name: "1 Month", price: "10", displayPrice: "£10" },
  { name: "3 Months", price: "20", displayPrice: "£20" },
  { name: "6 Months", price: "30", displayPrice: "£30" },
  { name: "12 Months + 1 Free", price: "45", displayPrice: "£45" },
] as const;

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: TRADING_NAME,
    url: absoluteUrl(HOME_PATH),
    logo: absoluteUrl("/icons/icon-512.png"),
    image: absoluteUrl("/og-image.png"),
    description: SITE_DESCRIPTION,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: WHATSAPP_NUMBER_DISPLAY,
      contactType: "customer support",
      areaServed: "GB",
      availableLanguage: "English",
    },
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: TRADING_NAME,
    url: absoluteUrl(HOME_PATH),
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: TRADING_NAME,
      url: absoluteUrl(HOME_PATH),
    },
  };
}

export function buildHomeServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "B1G Player IPTV Subscription",
    description: SITE_DESCRIPTION,
    url: absoluteUrl(HOME_PATH),
    provider: {
      "@type": "Organization",
      name: TRADING_NAME,
      url: absoluteUrl(HOME_PATH),
    },
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    areaServed: {
      "@type": "Country",
      name: OPERATING_COUNTRY,
    },
  };
}

export function buildSubscriptionOfferCatalogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "B1G Player Subscription Plans",
    url: absoluteUrl(ROUTES.subscription),
    itemListElement: SUBSCRIPTION_PLANS.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price,
      priceCurrency: "GBP",
      url: absoluteUrl(ROUTES.subscription),
      seller: {
        "@type": "Organization",
        name: TRADING_NAME,
      },
    })),
  };
}

export function buildSubscriptionServiceJsonLd(title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "B1G Player Subscription",
    description,
    url: absoluteUrl(ROUTES.subscription),
    provider: {
      "@type": "Organization",
      name: TRADING_NAME,
      url: absoluteUrl(HOME_PATH),
    },
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    areaServed: {
      "@type": "Country",
      name: OPERATING_COUNTRY,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "GBP",
      lowPrice: "10",
      highPrice: "45",
      offerCount: SUBSCRIPTION_PLANS.length,
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
    includeInSitemap: true,
    breadcrumbs: [{ name: "Home", path: ROUTES.home }],
  },
  {
    path: ROUTES.subscription,
    title: "B1G Player Subscription UK – Plans, Prices & Trial",
    description:
      "Compare B1G Player subscription prices for 1, 3, 6 and 12 months, see what each plan includes and request a UK device trial before ordering.",
    changeFrequency: "weekly" as const,
    priority: 0.9,
    includeInSitemap: true,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Subscription Plans", path: ROUTES.subscription },
    ],
  },
  {
    path: ROUTES.installation,
    title: "B1G Player Setup Guide – Firestick, Smart TV & Mobile",
    description:
      "Set up B1G Player on Firestick and Android, or connect a B1G IPTV account through compatible Smart TV, Apple, Windows and mobile players.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    includeInSitemap: true,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Installation Guide", path: ROUTES.installation },
    ],
  },
  {
    path: ROUTES.devices,
    title: "B1G Player Supported Devices – Firestick, TV, Mobile & PC",
    description:
      "Check B1G Player compatibility with Firestick, Android TV, Smart TVs, Apple devices, Windows and Mac, including alternative player options.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    includeInSitemap: true,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Supported Devices", path: ROUTES.devices },
    ],
  },
  {
    path: ROUTES.reviews,
    title: "B1G Player Reviews UK – Genuine Customer Feedback",
    description:
      "Read genuine B1G Player and B1G IPTV customer feedback, learn how reviews are checked and share an honest experience.",
    changeFrequency: "monthly" as const,
    priority: 0.6,
    includeInSitemap: false,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Reviews", path: ROUTES.reviews },
    ],
  },
  {
    path: ROUTES.reseller,
    title: "B1G Player Reseller Panel UK – Credits & Wholesale Plans",
    description:
      "Compare B1G Player reseller credit options, panel functions, customer-account tools and application requirements for UK resellers.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    includeInSitemap: true,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Reseller Panel", path: ROUTES.reseller },
    ],
  },
  {
    path: ROUTES.contact,
    title: "B1G Player Free Trial UK – Contact Subscription Support",
    description:
      "Request a B1G Player trial or ask about subscription plans, compatible devices, setup, activation, renewals, refunds or reseller access.",
    changeFrequency: "monthly" as const,
    priority: 0.7,
    includeInSitemap: true,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Contact Us", path: ROUTES.contact },
    ],
  },
  {
    path: ROUTES.about,
    title: "About B1G IPTV Players – B1G Player App & UK Support",
    description:
      "Learn how B1G IPTV Players provides B1G Player subscription information, device guidance, installation instructions and account support for UK customers.",
    changeFrequency: "monthly" as const,
    priority: 0.6,
    includeInSitemap: true,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "About Us", path: ROUTES.about },
    ],
  },
  {
    path: ROUTES.terms,
    title: "Terms and Conditions – B1G IPTV Players",
    description:
      "Read the terms covering B1G IPTV subscriptions, trials, payments, account use, connections, support, cancellation and service changes.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
    includeInSitemap: true,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Terms and Conditions", path: ROUTES.terms },
    ],
  },
  {
    path: ROUTES.privacy,
    title: "Privacy Policy – B1G IPTV Players",
    description:
      "Learn what information B1G IPTV Players collects, why it is used, who receives it, how long it is kept and your UK privacy rights.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
    includeInSitemap: true,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Privacy Policy", path: ROUTES.privacy },
    ],
  },
  {
    path: ROUTES.refund,
    title: "Refund and Cancellation Policy – B1G IPTV Players",
    description:
      "Read how to request cancellation or a refund for B1G IPTV orders, including activation, service faults, compatibility and duplicate payments.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
    includeInSitemap: true,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "Refund Policy", path: ROUTES.refund },
    ],
  },
  {
    path: ROUTES.dmca,
    title: "DMCA and Copyright Policy – B1G IPTV Players",
    description:
      "Report allegedly infringing website material or service access and provide the details needed for a B1G IPTV copyright review.",
    changeFrequency: "yearly" as const,
    priority: 0.3,
    includeInSitemap: true,
    breadcrumbs: [
      { name: "Home", path: ROUTES.home },
      { name: "DMCA Policy", path: ROUTES.dmca },
    ],
  },
] as const;

export function getSitePage(path: string) {
  return SITE_PAGES.find((page) => page.path === path);
}
