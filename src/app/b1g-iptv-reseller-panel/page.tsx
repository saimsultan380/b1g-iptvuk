import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { ResHero } from "@/components/reseller/res-hero";
import { ResFeatures } from "@/components/reseller/res-features";
import { ResCreditsWork } from "@/components/reseller/res-credits-work";
import { ResResponsibilities } from "@/components/reseller/res-responsibilities";
import { ResSupport } from "@/components/reseller/res-support";
import { ResGuarantee } from "@/components/reseller/res-guarantee";
import { ResApply } from "@/components/reseller/res-apply";
import { ResCTA } from "@/components/reseller/res-cta";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, getSitePage, ROUTES } from "@/lib/seo";

const page = getSitePage(ROUTES.reseller)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function ResellerPanelPage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <ResHero />
      <ResFeatures />
      <ResCreditsWork />
      <ResResponsibilities />
      <ResSupport />
      <ResGuarantee />
      <ResApply />
      <ResCTA />
      <B1GFooter />
    </main>
  );
}
