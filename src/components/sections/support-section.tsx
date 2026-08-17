"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Headphones, ArrowRight, AlertCircle } from "lucide-react";
import { ROUTES } from "@/lib/seo";

const supportItems = [
  "Device compatibility",
  "Subscription-plan selection",
  "Trial requests",
  "App installation",
  "Login errors",
  "Server-address entry",
  "Catalogue refreshes",
  "EPG checks",
  "Connection questions",
  "Renewals",
  "Payment enquiries",
  "Reseller applications",
];

export function SupportSection() {
  return (
    <section id="support" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            B1G Player{" "}
            <span className="text-brand-gradient font-bold">Support</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Support can assist with:
          </p>
        </FadeIn>

        <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <FadeIn>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <Headphones className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                Account and setup help
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {supportItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            </FadeIn>
            <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5 stroke-[2.5]" />
                <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                  When requesting technical support, include the device model, player name, approximate time and exact error. Never post a password, playlist URL or payment information publicly.
                </p>
              </div>
              <Link href={ROUTES.contact} className="shrink-0 w-full sm:w-auto">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-5 py-3 text-xs sm:text-sm font-semibold"
                >
                  <span>Contact Support</span>
                  <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
                </Button>
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
}
