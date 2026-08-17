"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { MonitorPlay, AlertCircle } from "lucide-react";

const whenToAsk = [
  "Two televisions need to play simultaneously",
  "Two household members regularly watch at the same time",
  "The account will be active on two screens",
  "Simultaneous mobile and television viewing is required",
];

export function OneConnection() {
  return (
    <section id="one-connection" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            One Active Connection{" "}
            <span className="text-brand-gradient font-bold">Explained</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            <p>A standard subscription includes one active stream at a time.</p>
            <p>
              The account may be saved on multiple compatible personal devices, but starting playback on a second screen can interrupt the first session or trigger an account-security check.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <MonitorPlay className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                Ask about a multi-connection option before ordering if:
              </h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {whenToAsk.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 pt-4 flex items-start gap-2.5">
              <AlertCircle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Installing the login on several devices does not automatically increase the active connection allowance.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
