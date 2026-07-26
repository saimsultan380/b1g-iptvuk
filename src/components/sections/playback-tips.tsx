"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Sparkles, Info } from "lucide-react";

const tipsList = [
  "Use a stable broadband connection.",
  "Connect televisions and streaming boxes through Ethernet where possible.",
  "Keep Wi-Fi devices close to the router.",
  "Avoid large downloads while watching.",
  "Close unused background applications.",
  "Restart the player if it becomes unresponsive.",
  "Restart the router if the network becomes unstable.",
  "Keep B1G Player updated.",
  "Select a stream quality suitable for the connection.",
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

export function PlaybackTips() {
  return (
    <section
      id="playback-tips"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* ── Section Heading & Intro ── */}
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Tips for <span className="text-brand-gradient font-bold">Better Playback</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Streaming performance depends on both the service and the customer’s own equipment.
          </p>
        </FadeIn>

        {/* ── Tips Box Card (Pure White, No Shadow) ── */}
        <FadeIn className="w-full">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between">
            
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <Sparkles className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  For better results:
                </h3>
              </div>

              {/* 2-Column List on Large Screens */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 w-full">
                {tipsList.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Info Highlight */}
            <div className="border-t border-slate-100 pt-5 mt-8 flex items-start gap-2.5">
              <Info className="h-4.5 w-4.5 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                Higher-resolution streams require stronger and more stable broadband performance.
              </p>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
