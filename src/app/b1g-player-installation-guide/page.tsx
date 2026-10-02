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
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata, getSitePage, ROUTES, absoluteUrl } from "@/lib/seo";

const page = getSitePage(ROUTES.installation)!;

const firestickHowToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Set up B1G Player on Firestick or Fire TV",
  description: page.description,
  url: absoluteUrl(page.path),
  step: [
    {
      "@type": "HowToStep",
      name: "Open Find or Search",
      text: "Open Find or Search on the Fire TV home screen.",
    },
    {
      "@type": "HowToStep",
      name: "Install Downloader",
      text: "Search for Downloader by AFTVnews. Install and open Downloader.",
    },
    {
      "@type": "HowToStep",
      name: "Allow unknown apps",
      text: "Where supported, allow Downloader under Install Unknown Apps.",
    },
    {
      "@type": "HowToStep",
      name: "Enter the code",
      text: "Enter verified Downloader code 4172090.",
    },
    {
      "@type": "HowToStep",
      name: "Confirm B1G Player",
      text: "Confirm the destination identifies B1G Player.",
    },
    {
      "@type": "HowToStep",
      name: "Download and install",
      text: "Download the APK and select Install.",
    },
    {
      "@type": "HowToStep",
      name: "Open and sign in",
      text: "Open B1G Player. Delete the downloaded installer to recover storage. Enter the username, password and server address.",
    },
    {
      "@type": "HowToStep",
      name: "Allow the first update",
      text: "Allow the initial catalogue and EPG update to finish.",
    },
  ],
};

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
      <JsonLd data={firestickHowToJsonLd} />

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
