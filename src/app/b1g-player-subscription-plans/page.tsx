import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { SubHero } from "@/components/subscription/sub-hero";
import { SubCompare } from "@/components/subscription/sub-compare";
import { SubPricing } from "@/components/subscription/sub-pricing";
import { SubFeatures } from "@/components/subscription/sub-features";
import { SubConnection } from "@/components/subscription/sub-connection";
import { SubActivationSteps } from "@/components/subscription/sub-activation-steps";
import { SubConsiderations } from "@/components/subscription/sub-considerations";
import { SubRenew } from "@/components/subscription/sub-renew";
import { SubFAQ } from "@/components/subscription/sub-faq";
import { SubCTA } from "@/components/subscription/sub-cta";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, ROUTES } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "B1G IPTV Subscription UK – Plans, Prices & Trial",
  description:
    "Compare B1G IPTV Subscription plans for 1, 3, 6 or 12 months, see what is included and request a device trial before ordering.",
  path: "/b1g-player-subscription-plans/",
});

const breadcrumbs = [
  { name: "Home", path: ROUTES.home },
  { name: "Subscription Plans", path: "/b1g-player-subscription-plans/" },
];

export default function B1GPlayerSubscriptionPlansPage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <SubHero />
      <SubCompare />
      <SubPricing />
      <SubFeatures />
      <SubConnection />
      <SubActivationSteps />
      <SubConsiderations />
      <SubRenew />
      <SubFAQ />
      <SubCTA />
      <B1GFooter />
    </main>
  );
}
