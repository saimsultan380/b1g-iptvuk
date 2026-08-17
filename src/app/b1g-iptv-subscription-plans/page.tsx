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
import { buildPageMetadata, getSitePage, ROUTES } from "@/lib/seo";

const page = getSitePage(ROUTES.subscription)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function SubscriptionPlansPage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

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
