"use client";

import React from "react";
import { ShieldCheck, Zap, Headphones } from "lucide-react";

export function B1GTrustRow() {
  return (
    <div className="w-full rounded-2xl sm:rounded-full border border-slate-200 bg-white p-3 sm:p-4">
      <div className="grid grid-cols-3 divide-x divide-slate-200/90 text-center items-center">
        {/* Item 1 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-1 sm:px-4">
          <div className="flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
            <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
          </div>
          <span className="text-xs sm:text-xs lg:text-sm font-semibold text-slate-800 tracking-tight leading-tight">
            Official B1G Player App
          </span>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-1 sm:px-4">
          <div className="flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
          </div>
          <span className="text-xs sm:text-xs lg:text-sm font-semibold text-slate-800 tracking-tight leading-tight">
            Instant Activation
          </span>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-1 sm:px-4">
          <div className="flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26]">
            <Headphones className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
          </div>
          <span className="text-xs sm:text-xs lg:text-sm font-semibold text-slate-800 tracking-tight leading-tight">
            UK Customer Support
          </span>
        </div>
      </div>
    </div>
  );
}
