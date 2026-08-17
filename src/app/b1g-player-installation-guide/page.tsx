import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { InstHero } from "@/components/installation/inst-hero";
import { InstBeforeBegin } from "@/components/installation/inst-before-begin";
import { InstLoginDetails } from "@/components/installation/inst-login-details";
import { InstQuickRoute } from "@/components/installation/inst-quick-route";
import { InstDeviceGuides } from "@/components/installation/inst-device-guides";
import { InstFirstSignIn } from "@/components/installation/inst-first-signin";
import { InstTroubleshooting } from "@/components/installation/inst-troubleshooting";
import { InstSafety } from "@/components/installation/inst-safety";
import { InstFAQ } from "@/components/installation/inst-faq";
import { InstCTA } from "@/components/installation/inst-cta";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, getSitePage, ROUTES } from "@/lib/seo";

const page = getSitePage(ROUTES.installation)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function InstallationGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <InstHero />
      <InstBeforeBegin />
      <InstLoginDetails />
      <InstQuickRoute />
      <InstDeviceGuides />
      <InstFirstSignIn />
      <InstTroubleshooting />
      <InstSafety />
      <InstFAQ />
      <InstCTA />
      <B1GFooter />
    </main>
  );
}
