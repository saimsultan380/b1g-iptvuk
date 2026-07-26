"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Briefcase, CheckCircle } from "lucide-react";

const customerDetailsList = [
  "Correct app Downloader code (4172090)",
  "Step-by-step installation instructions",
  "Private account username",
  "Private account password",
  "IPTV server URL",
  "Basic login assistance",
];

const bestPractices = [
  {
    title: "Use Clear Pricing",
    desc: "Display duration, price, number of connections, support details, activation speed, and renewal terms.",
  },
  {
    title: "Explain Device Compatibility",
    desc: "Make it clear which devices use B1G Player and which require another compatible player application.",
  },
  {
    title: "Provide First-Line Support",
    desc: "Directly assist customers with app installation, login errors, device setup, renewals, and basic diagnostics.",
  },
  {
    title: "Keep Accurate Records",
    desc: "Track client names, usernames, start/expiry dates, pricing tiers, and client support histories.",
  },
  {
    title: "Avoid Unsupported Claims",
    desc: "Do not guarantee perfect uptime, availability of every channel/sport, buffer-free playback, or permanent content catalogs.",
  },
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

export function ResSupport() {
  return (
    <section
      id="reseller-support"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* LEFT COLUMN: Customer Support Help (lg:col-span-5) */}
          <FadeIn className="lg:col-span-5 rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <HelpCircle className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none font-heading">
                  Support Your Customers
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-5 leading-relaxed">
                Customers using supported Android and Fire TV devices can install the official app using Downloader code 4172090. Always supply them with:
              </p>

              {/* Supplying checklist */}
              <ul className="space-y-3 mb-6">
                {customerDetailsList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Tick />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-6 leading-relaxed border-t border-slate-100 pt-4">
                For other devices, recommend a compatible alternative player (e.g. Samsung/LG TVs, Apple devices, PC).
              </p>
            </div>

            {/* Redirection CTA */}
            <div className="border-t border-slate-100 pt-6 mt-6">
              <Link href="/b1g-player-installation-guide/">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 py-3 text-xs sm:text-sm font-semibold"
                >
                  <span>Share B1G Player Installation Guide</span>
                  <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* RIGHT COLUMN: Reseller Business Practices (lg:col-span-7) */}
          <FadeIn delay={0.1} className="lg:col-span-7 rounded-[12px] border border-slate-200 bg-white p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <Briefcase className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none font-heading">
                  Build a Professional Business
                </h3>
              </div>

              {/* Guidelines checklist */}
              <div className="space-y-4">
                {bestPractices.map((practice, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="h-4.5 w-4.5 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#12141F] leading-snug">
                        {practice.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-0.5">
                        {practice.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
