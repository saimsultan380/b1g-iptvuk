import type { Metadata } from "next";
import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { SubHero } from "@/components/subscription/sub-hero";
import { SubConsiderations } from "@/components/subscription/sub-considerations";
import { SubPricing } from "@/components/subscription/sub-pricing";
import { SubCompare } from "@/components/subscription/sub-compare";
import { SubFeatures } from "@/components/subscription/sub-features";
import { SubAppAccess } from "@/components/subscription/sub-app-access";
import { SubActivationSteps } from "@/components/subscription/sub-activation-steps";
import { SubTrial } from "@/components/subscription/sub-trial";
import { SubRenew } from "@/components/subscription/sub-renew";
import { SubFAQ } from "@/components/subscription/sub-faq";
import { SubCTA } from "@/components/subscription/sub-cta";
import { B1GFooter } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "B1G Player Subscription UK – B1G IPTV Plans & Trial",
  description: "Compare B1G Player plans with a B1G IPTV subscription. Choose 1, 3, 6 or 12 months, get instant activation and receive setup support in the UK.",
};

export default function SubscriptionPlansPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Header */}
      <B1GHeader />

      {/* 1. Hero Section */}
      <SubHero />

      {/* 2. Choose a Subscription That Fits Your Viewing */}
      <SubConsiderations />

      {/* 3. Official B1G IPTV Subscription Plans */}
      <SubPricing />

      {/* 4. Compare the Plans */}
      <SubCompare />

      {/* 5. What Your Subscription Includes */}
      <SubFeatures />

      {/* 6. B1G Player App Included & Alternative Device Access */}
      <SubAppAccess />

      {/* 7. How Activation Works */}
      <SubActivationSteps />

      {/* 8. Try the Service Before Choosing a Longer Plan */}
      <SubTrial />

      {/* 9. Renewing Your Subscription */}
      <SubRenew />

      {/* 10. Subscription FAQs */}
      <SubFAQ />

      {/* 11. Choose Your B1G IPTV Subscription */}
      <SubCTA />

      {/* 12. Footer */}
      <B1GFooter />
    </main>
  );
}
