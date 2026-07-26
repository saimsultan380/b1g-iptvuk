"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Laptop,
  ListChecks,
} from "lucide-react";

const accessDevices = [
  "Samsung television",
  "LG television",
  "Windows computer",
  "Mac",
  "iPhone",
  "iPad",
  "Apple TV",
];

const checkListItems = [
  "Whether the app supports Xtream Codes",
  "Whether it supports an M3U playlist",
  "Whether an activation fee applies",
  "Whether the app is available in your region",
  "Whether your television model is compatible",
];

const Tick = () => (
  <svg
    className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function MoreDevices() {
  return (
    <section
      id="more-devices"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* ── Section Heading & Intro ── */}
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Use Your Subscription on{" "}
            <span className="text-brand-gradient font-bold">More Devices</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            The official app provides the recommended experience on Android and Firestick, but customers are not limited to those platforms. Where supported, the same account information can be added to a compatible alternative IPTV player.
          </p>
        </FadeIn>

        {/* ── Grid Layout: 2 Columns on Desktop, items-stretch ── */}
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
            
            {/* LEFT CARD: Access Devices */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <Laptop className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Alternative Platforms
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold leading-relaxed">
                  This may allow access on:
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {accessDevices.map((device, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {device}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-6">
                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  The application interface may differ, but the account normally uses the same username, password and server URL.
                </p>
              </div>
            </div>

            {/* RIGHT CARD: Pre-purchase Checklist */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                    <ListChecks className="h-4 w-4 stroke-[2]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                    Compatibility Checklist
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-semibold leading-relaxed">
                  Before paying for a third-party player, check:
                </p>

                <ul className="space-y-3.5 mb-6">
                  {checkListItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Tick />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-6">
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Make sure to verify compatibility on trial accounts where available before finalizing any third-party app purchases.
                </p>
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
