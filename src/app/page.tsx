import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GHeroSection } from "@/components/sections/b1g-hero-section";
import { WhatIsB1GPlayer } from "@/components/sections/what-is-b1g-player";
import { B1GPricing } from "@/components/sections/pricing";
import { WhatIsIncluded } from "@/components/sections/what-is-included";
import { LiveCategories } from "@/components/sections/live-categories";
import { AppFeatures } from "@/components/sections/app-features";
import { CompatibleDevices } from "@/components/sections/compatible-devices";
import { StartWatchingSteps } from "@/components/sections/steps";
import { TrialSection } from "@/components/sections/trial-section";
import { OneConnection } from "@/components/sections/one-connection";
import { PlaybackTips } from "@/components/sections/playback-tips";
import { SupportSection } from "@/components/sections/support-section";
import { B1GFAQ } from "@/components/sections/faq";
import { B1GCTABanner } from "@/components/sections/cta-banner";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata, SITE_PAGES, absoluteUrl } from "@/lib/seo";

const page = SITE_PAGES[0];

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: page.title,
  description: page.description,
  url: absoluteUrl(page.path),
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />
      <JsonLd data={webPageJsonLd} />

      <B1GHeroSection />
      <WhatIsB1GPlayer />
      <B1GPricing />
      <WhatIsIncluded />
      <LiveCategories />
      <AppFeatures />
      <CompatibleDevices />
      <StartWatchingSteps />
      <TrialSection />
      <OneConnection />
      <PlaybackTips />
      <SupportSection />
      <B1GFAQ />
      <B1GCTABanner />
      <B1GFooter />
    </main>
  );
}
