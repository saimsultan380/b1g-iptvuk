import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { AboutHero, AboutBody } from "@/components/about/about-page";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata, getSitePage, ROUTES, absoluteUrl } from "@/lib/seo";

const page = getSitePage(ROUTES.about)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: page.title,
  description: page.description,
  url: absoluteUrl(page.path),
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />
      <JsonLd data={aboutJsonLd} />

      <AboutHero />
      <AboutBody />
      <B1GFooter />
    </main>
  );
}
