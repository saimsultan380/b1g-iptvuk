import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { ConHero } from "@/components/contact/con-hero";
import { ConTrialTest } from "@/components/contact/con-trial-test";
import { ConInfoLimits } from "@/components/contact/con-info-limits";
import { ConDetails } from "@/components/contact/con-details";
import { ConForm } from "@/components/contact/con-form";
import { ConCTA } from "@/components/contact/con-cta";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata, getSitePage, ROUTES, absoluteUrl } from "@/lib/seo";

const page = getSitePage(ROUTES.contact)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: page.title,
  description: page.description,
  url: absoluteUrl(page.path),
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />
      <JsonLd data={contactJsonLd} />

      <ConHero />
      <ConTrialTest />
      <ConInfoLimits />
      <ConDetails />
      <ConForm />
      <ConCTA />
      <B1GFooter />
    </main>
  );
}
