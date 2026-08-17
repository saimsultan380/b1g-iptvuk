import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { ReviewsHero, ReviewsBody, ReviewsForm, ReviewsDecision } from "@/components/reviews/reviews-page";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildPageMetadata, getSitePage, ROUTES } from "@/lib/seo";

const page = getSitePage(ROUTES.reviews)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={[...page.breadcrumbs]} />

      <ReviewsHero />
      <ReviewsBody />
      <ReviewsForm />
      <ReviewsDecision />
      <B1GFooter />
    </main>
  );
}
