import type { Metadata } from "next";
import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { ResHero } from "@/components/reseller/res-hero";
import { ResIntro } from "@/components/reseller/res-intro";
import { ResBenefits } from "@/components/reseller/res-benefits";
import { ResFeatures } from "@/components/reseller/res-features";
import { ResCreditsWork } from "@/components/reseller/res-credits-work";
import { ResPackages } from "@/components/reseller/res-packages";
import { ResActivation } from "@/components/reseller/res-activation";
import { ResSupport } from "@/components/reseller/res-support";
import { ResResponsibilities } from "@/components/reseller/res-responsibilities";
import { ResFAQ } from "@/components/reseller/res-faq";
import { ResCTA } from "@/components/reseller/res-cta";
import { B1GFooter } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "B1G Player Reseller UK – Panel, Credits & IPTV Plans",
  description: "Join the B1G Player reseller programme in the UK. Manage B1G IPTV subscriptions, customer accounts and credits through one organised reseller panel.",
};

export default function ResellerPanelPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Header */}
      <B1GHeader />

      {/* 1. Hero Section */}
      <ResHero />

      {/* 2. Reseller Programme Intro */}
      <ResIntro />

      {/* 3. Why Become a Reseller Benefits */}
      <ResBenefits />

      {/* 4. Reseller Panel Features */}
      <ResFeatures />

      {/* 5. How Credits Work */}
      <ResCreditsWork />

      {/* 6. Reseller Packages Grid */}
      <ResPackages />

      {/* 7. How to Become a Reseller Steps */}
      <ResActivation />

      {/* 8. Customer Support Guidelines & Best Practices */}
      <ResSupport />

      {/* 9. Reseller Responsibilities */}
      <ResResponsibilities />

      {/* 10. Reseller FAQs */}
      <ResFAQ />

      {/* 11. Call-To-Action Banner */}
      <ResCTA />

      {/* 12. Footer */}
      <B1GFooter />
    </main>
  );
}
