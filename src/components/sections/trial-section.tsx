"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical } from "lucide-react";
import { ROUTES } from "@/lib/seo";

const trialChecks = [
  "Use the same device you intend to keep.",
  "Test in the room where you normally watch.",
  "Allow the first catalogue update to finish.",
  "Open several live and on-demand items.",
  "Check EPG, search, favourites, audio and subtitles.",
  "Test during your normal viewing hours.",
  "Confirm that one active connection is sufficient.",
  "Report repeatable problems before the trial ends.",
];

const Tick = () => (
  <svg className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function TrialSection() {
  return (
    <section id="trial" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Test B1G IPTV Before Choosing a{" "}
            <span className="text-brand-gradient font-bold">Longer Plan</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            A trial helps confirm whether the application, device and internet connection work together.
          </p>
        </FadeIn>

        <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <FadeIn>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <FlaskConical className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                For a useful test:
              </h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 w-full mb-8">
              {trialChecks.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tick />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            </FadeIn>
            <div className="border-t border-slate-100 pt-5 space-y-3">
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Trial availability, duration and any catalogue restrictions are confirmed before activation.
              </p>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                A successful trial confirms compatibility during the test period. It does not guarantee that every catalogue item will remain unchanged.
              </p>
              <Link href={ROUTES.contact} className="inline-flex">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold"
                >
                  <span>Request a B1G IPTV Trial</span>
                  <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
                </Button>
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
}
