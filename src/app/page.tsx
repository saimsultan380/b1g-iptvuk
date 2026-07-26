import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GHeroSection } from "@/components/sections/b1g-hero-section";
import { WhatIsB1GPlayer } from "@/components/sections/what-is-b1g-player";
import { WhyUKViewers } from "@/components/sections/why-uk-viewers";
import { LiveCategories } from "@/components/sections/live-categories";
import { B1GPricing } from "@/components/sections/pricing";
import { WhatIsIncluded } from "@/components/sections/what-is-included";
import { CompatibleDevices } from "@/components/sections/compatible-devices";
import { DownloadApp } from "@/components/sections/download-app";
import { MoreDevices } from "@/components/sections/more-devices";
import { StartWatchingSteps } from "@/components/sections/steps";
import { PlaybackTips } from "@/components/sections/playback-tips";
import { B1GFAQ } from "@/components/sections/faq";
import { B1GCTABanner } from "@/components/sections/cta-banner";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, SITE_PAGES } from "@/lib/seo";

const page = SITE_PAGES[0];

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <B1GHeroSection />
      <WhatIsB1GPlayer />
      <WhyUKViewers />
      <LiveCategories />
      <B1GPricing />
      <WhatIsIncluded />
      <CompatibleDevices />
      <DownloadApp />
      <MoreDevices />
      <StartWatchingSteps />
      <PlaybackTips />
      <B1GFAQ />
      <B1GCTABanner />
      <B1GFooter />
    </main>
  );
}
