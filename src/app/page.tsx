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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Header */}
      <B1GHeader />

      {/* 1. Hero Section */}
      <B1GHeroSection />

      {/* 2. What Is B1G Player Section */}
      <WhatIsB1GPlayer />

      {/* 3. Why UK Viewers Choose B1G IPTV */}
      <WhyUKViewers />

      {/* 4. Live Television, Sports, Movies and Series */}
      <LiveCategories />

      {/* 5. Official B1G IPTV Subscription Plans */}
      <B1GPricing />

      {/* 6. What Is Included with a B1G IPTV Subscription? */}
      <WhatIsIncluded />

      {/* 7. Compatible Devices */}
      <CompatibleDevices />

      {/* 8. Download the Official B1G Player App */}
      <DownloadApp />

      {/* 9. Use Your Subscription on More Devices */}
      <MoreDevices />

      {/* 10. Start Watching in Four Steps */}
      <StartWatchingSteps />

      {/* 11. Tips for Better Playback */}
      <PlaybackTips />

      {/* 12. Frequently Asked Questions */}
      <B1GFAQ />

      {/* 13. Call-To-Action Banner */}
      <B1GCTABanner />

      {/* 14. Footer */}
      <B1GFooter />
    </main>
  );
}
