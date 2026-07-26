"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import {
  AlertTriangle,
  RefreshCw,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

interface TroubleshootingItem {
  title: string;
  checks: string[];
  footerText?: string;
}

const troubleshootList: TroubleshootingItem[] = [
  {
    title: "Downloader Code Does Not Work",
    checks: [
      "The code is entered as 4172090",
      "Downloader has internet access",
      "The code has not changed",
      "The device date and time are correct",
    ],
    footerText: "Contact support for the current download route.",
  },
  {
    title: "App Will Not Install",
    checks: [
      "Available storage is sufficient",
      "Installation permissions are enabled",
      "Device is compatible",
      "APK has downloaded completely",
    ],
  },
  {
    title: "Login Is Incorrect",
    checks: [
      "Check username, password and server URL",
      "Remove accidental spaces before/after",
      "Copy and paste details where possible",
    ],
  },
  {
    title: "Content Does Not Load",
    checks: [
      "Try restarting the app",
      "Try restarting the device",
      "Try restarting the router",
      "Check that the subscription is active",
      "Wait longer for the first library load",
    ],
  },
  {
    title: "Buffering Issues",
    checks: [
      "Use Ethernet instead of Wi-Fi",
      "Ensure strong Wi-Fi signal",
      "Close background downloads",
      "Select a lower-quality stream",
      "Restart the router",
    ],
  },
  {
    title: "EPG Is Missing",
    checks: [
      "Allow time for guide details to load",
      "Refresh the EPG from app settings",
    ],
  },
  {
    title: "One Channel Does Not Work",
    checks: [
      "Test another channel",
      "If only one source is affected, the issue may be temporary",
    ],
  },
  {
    title: "Whole Account Does Not Work",
    checks: [
      "Check whether subscription has expired",
      "Contact support with your order reference",
    ],
    footerText: "Do not post private details publicly.",
  },
  {
    title: "Third-Party Player Requests Payment",
    checks: [
      "Alternative application activation charges are separate from B1G IPTV",
    ],
  },
];

const updateSteps = [
  "Confirm the subscription is active.",
  "Keep the login details available.",
  "Check whether the existing app must be removed.",
  "Avoid unofficial update links.",
  "Allow the app to finish installing.",
];

const reinstallTriggers = [
  "Device reset",
  "App corruption",
  "Failed update",
  "Storage issue",
  "Fire TV software change",
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

export function InstTroubleshooting() {
  return (
    <section
      id="troubleshooting"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
              <AlertTriangle className="h-4 w-4 stroke-[2]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E01E26]">
              Problem Solver
            </h3>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Common Installation <span className="text-brand-gradient font-bold">Problems</span>
          </h2>
        </FadeIn>

        {/* Troubleshooting Grid */}
        <FadeIn className="w-full mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
            {troubleshootList.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full hover:border-slate-300 transition-colors"
              >
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#12141F] mb-4">
                    {item.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {item.checks.map((check, checkIdx) => (
                      <li key={checkIdx} className="flex items-start gap-2">
                        <Tick />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {check}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {item.footerText && (
                  <div className="border-t border-slate-100 pt-3 mt-3 flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#E01E26] font-semibold leading-relaxed">
                      {item.footerText}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Update & Reinstall Double Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
          
          {/* Updating B1G Player */}
          <FadeIn className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <RefreshCw className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  Updating B1G Player
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
                Use the approved official download method when a newer version becomes available. Before updating:
              </p>

              <ul className="space-y-3 mb-6">
                {updateSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Reinstalling the App */}
          <FadeIn delay={0.1} className="rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <RefreshCw className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  Reinstalling the App
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
                Reinstallation may be needed after:
              </p>

              <ul className="space-y-3 mb-6">
                {reinstallTriggers.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-4 mt-6">
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Keep your account details before deleting the app. After reinstalling, enter the same active login information unless support provides updated details.
              </p>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
