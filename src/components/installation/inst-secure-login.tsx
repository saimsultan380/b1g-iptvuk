"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { KeyRound, ShieldAlert, Hourglass, CheckSquare } from "lucide-react";

const credentialParameters = [
  { name: "Username", desc: "Enter the username exactly as received." },
  { name: "Password", desc: "Check all capital letters, numbers and symbols." },
  { name: "Server URL", desc: "Enter the complete address." },
];

const loginRestrictions = [
  "Add extra spaces",
  "Remove http:// or https:// unless instructed",
  "Add an unnecessary slash",
  "Replace characters",
  "Use an expired account",
];

const loadAssets = [
  "Channel categories",
  "Movie information",
  "Television-series data",
  "Programme-guide details",
  "Channel logos",
  "Artwork",
];

const WarningDot = () => (
  <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#E01E26] mt-2" />
);

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

export function InstSecureLogin() {
  return (
    <section
      id="secure-login"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* LEFT COLUMN: Entering Your Secure Login (lg:col-span-7) */}
          <FadeIn className="lg:col-span-7 rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <KeyRound className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  Entering Your Secure Login
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
                Every active B1G IPTV subscription includes private account information.
              </p>

              {/* Login parameters grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {credentialParameters.map((param, idx) => (
                  <div key={idx} className="p-3.5 rounded-[12px] border border-slate-100 bg-slate-50/20">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {param.name}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 leading-snug">
                      {param.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Do not restrictions */}
              <div className="border-t border-slate-100 pt-4 mb-6">
                <h4 className="text-xs sm:text-sm font-bold text-[#E01E26] mb-3">
                  Do not:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {loginRestrictions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <WarningDot />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Profile name card footer */}
            <div className="border-t border-slate-100 pt-4 mt-6">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Profile Name
              </span>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Choose a clear name such as: <strong className="text-slate-800">B1G IPTV</strong>, <strong className="text-slate-800">Main TV</strong>, <strong className="text-slate-800">Living Room</strong>, or <strong className="text-slate-800">Firestick</strong>. The profile name does not affect the login.
              </p>
            </div>
          </FadeIn>

          {/* RIGHT COLUMN: First Account Load (lg:col-span-5) */}
          <FadeIn delay={0.1} className="lg:col-span-5 rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <Hourglass className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  First Account Load
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
                The first login may take longer because the application needs to compile and load:
              </p>

              {/* Assets List */}
              <ul className="space-y-3.5 mb-6">
                {loadAssets.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning notes */}
            <div className="border-t border-slate-100 pt-4 mt-6 space-y-2">
              <div className="flex items-start gap-2">
                <ShieldAlert className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                <p className="text-xs text-[#E01E26] font-semibold leading-relaxed">
                  Avoid repeatedly closing the app while it is processing.
                </p>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed pl-6.5">
                If the account contains a large library, the first load may take several minutes.
              </p>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
