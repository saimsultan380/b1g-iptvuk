"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { MonitorPlay } from "lucide-react";

export function SubConnection() {
  return (
    <section id="one-connection" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            One Connection and{" "}
            <span className="text-brand-gradient font-bold">Multiple Devices</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <MonitorPlay className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                One active stream
              </h3>
            </div>
            <p className="text-sm text-[#4A4A4A] leading-relaxed mb-3">
              The account may be saved on compatible personal devices, but a standard plan permits one active stream.
            </p>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              Ask about multi-connection pricing before payment if more than one screen needs to play simultaneously.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
