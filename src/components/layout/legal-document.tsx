import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { B1GFooter } from "@/components/sections/footer";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import type { BreadcrumbItem } from "@/lib/seo";
import { LEGAL_UPDATED } from "@/lib/seo";
import { FadeIn } from "@/components/animation/fade-in";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  afterParagraphs?: string[];
};

type LegalDocumentProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  intro: string[];
  sections: LegalSection[];
};

export function LegalDocument({ breadcrumbs, title, intro, sections }: LegalDocumentProps) {
  return (
    <main className="min-h-screen bg-white">
      <B1GHeader />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <article className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <FadeIn className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 lg:p-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#E01E26] mb-3">
            Last updated: {LEGAL_UPDATED}
          </p>
          <h1 className="text-h1-b1g leading-[1.15] font-bold tracking-tight text-[#12141F] mb-6">
            {title}
          </h1>
          <div className="space-y-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed mb-10">
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.heading} className="border-t border-slate-200 pt-8">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#12141F] mb-4">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed mb-3"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-3 space-y-2">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">
                          •
                        </span>
                        <span className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.afterParagraphs?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed mt-3"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </FadeIn>
      </article>

      <B1GFooter />
    </main>
  );
}
