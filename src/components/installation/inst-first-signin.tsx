"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { ListChecks } from "lucide-react";

const checks = [
  "Confirm the device date and time zone.",
  "Enter every field exactly.",
  "Let the first update finish.",
  "Open one live item.",
  "Open one on-demand item.",
  "Check EPG information.",
  "Test audio and subtitles.",
  "Add a few favourites.",
  "Keep the activation message securely.",
];

export function InstFirstSignIn() {
  return (
    <section id="first-sign-in" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            First Sign-In <span className="text-brand-gradient font-bold">Checklist</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <ListChecks className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                After you sign in
              </h3>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {checks.map((item, idx) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26] font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed pt-0.5">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
