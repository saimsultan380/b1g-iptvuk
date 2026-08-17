"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ListChecks, ArrowRight } from "lucide-react";
import { ROUTES, buildIntentWhatsAppUrl } from "@/lib/seo";

const checks = [
  "Your device is compatible.",
  "The required player can be installed.",
  "Your connection is stable.",
  "One active stream is sufficient.",
  "Important categories are currently available.",
  "Third-party player fees are understood.",
  "Trial and refund conditions have been read.",
];

export function SubConsiderations() {
  return (
    <section id="before-choosing" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Before Choosing a{" "}
            <span className="text-brand-gradient font-bold">Longer Subscription</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <ListChecks className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                Confirm:
              </h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {checks.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 pt-5 flex flex-col sm:flex-row gap-3">
              <a href={buildIntentWhatsAppUrl("freeTrial")} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="primary"
                  className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 py-3 text-xs sm:text-sm font-semibold"
                >
                  Request a trial
                  <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
                </Button>
              </a>
              <Link href={ROUTES.refund}>
                <Button
                  variant="outline"
                  className="rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-5 py-3 text-xs sm:text-sm font-semibold hover:bg-red-50"
                >
                  Read the Refund Policy
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
              If uncertain, request a trial or start with the shortest paid term.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
