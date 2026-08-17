"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { CheckCircle2 } from "lucide-react";

const included = [
  "One active stream",
  "Private username, password and server address",
  "Current advertised wider catalogue",
  "35,000+ live channels",
  "50,000+ films",
  "10,000+ TV series",
  "EPG where supplied",
  "Selected Catch-Up",
  "Available SD, HD, Full HD and 4K options",
  "B1G Player access on compatible devices",
  "Alternative-player guidance",
  "Installation and login assistance",
  "Customer account support",
];

export function SubFeatures() {
  return (
    <section id="included" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Included with <span className="text-brand-gradient font-bold">Every Plan</span>
          </h2>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <CheckCircle2 className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                The same core service
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 pt-4">
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                The main difference between standard plans is duration. Longer plans do not include better servers, additional channels or guaranteed higher resolution.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
