"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Wrench } from "lucide-react";

const problems = [
  { title: "Login rejected", body: "Re-enter the credentials without spaces and confirm the account has not expired." },
  { title: "Catalogue not loading", body: "Allow more time, restart the app and check the internet connection." },
  { title: "One item unavailable", body: "Test several other items before reinstalling anything." },
  { title: "EPG blank", body: "Refresh the guide and confirm the correct device time zone." },
  { title: "Playback stopping", body: "Check Wi-Fi strength, restart the router and test a lower resolution." },
  { title: "App running slowly", body: "Check device storage and memory." },
  { title: "No sound", body: "Test the audio track and device output setting." },
  { title: "Missing subtitles", body: "The selected source may not include them." },
  { title: "Two screens interrupting each other", body: "The account may have only one active connection." },
];

export function InstTroubleshooting() {
  return (
    <section id="troubleshooting" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Common Setup <span className="text-brand-gradient font-bold">Problems</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((item) => (
              <div key={item.title} className="rounded-[12px] border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Wrench className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#12141F] leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
