"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { AlertCircle, FileText, CheckCircle } from "lucide-react";

const detailsList = [
  "Full name",
  "Email address or contact number",
  "Device type & exact model",
  "IPTV application name",
  "Trial or paid-account status",
  "Username or order reference",
  "Any error message displayed",
  "Clear description of the issue",
  "Steps already attempted",
];

const preChecks = [
  "Restarting the application",
  "Restarting the device",
  "Restarting the router",
  "Checking credentials accuracy",
  "Removing accidental spaces",
  "Confirming account active status",
  "Testing another channel source",
  "Updating to latest app version",
];

const scopeList = [
  "One channel",
  "One category",
  "All content",
  "Login",
  "App installation",
  "The subscription itself",
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

export function ConWhatToInclude() {
  return (
    <section
      id="pre-contact-checks"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* LEFT COLUMN: What to Include (lg:col-span-5) */}
          <FadeIn className="lg:col-span-5 rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <FileText className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none font-heading">
                  What to Include in Your Message
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
                To help us resolve your enquiry quickly, please provide as much of the following as possible:
              </p>

              <ul className="space-y-3 mb-6">
                {detailsList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning block */}
            <div className="border-t border-slate-100 pt-4 mt-6 flex items-start gap-2.5">
              <AlertCircle className="h-4.5 w-4.5 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
              <p className="text-xs text-[#E01E26] font-semibold leading-relaxed">
                Do not send payment-card information or passwords for unrelated accounts.
              </p>
            </div>
          </FadeIn>

          {/* RIGHT COLUMN: Before Contacting Support (lg:col-span-7) */}
          <FadeIn delay={0.1} className="lg:col-span-7 rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <CheckCircle className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none font-heading">
                  Before Contacting Support
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
                Most streaming playback issues can be resolved with a few simple steps. Please try:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {preChecks.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Explain scope block */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="text-xs sm:text-sm font-bold text-[#12141F] mb-3">
                  Please let us know whether the issue affects:
                </h4>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {scopeList.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#E01E26]" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
