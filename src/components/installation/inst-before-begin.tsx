"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckSquare } from "lucide-react";
import { ROUTES } from "@/lib/seo";

const prepareList = [
  "Confirm the device model. Check the manufacturer, complete model and operating system.",
  "Check compatibility. Use the Supported Devices page.",
  "Activate an account. Obtain a trial or paid subscription.",
  "Prepare the login. Keep the username, password and server address available.",
  "Check storage. Remove unused files or apps where necessary.",
  "Update the device. Install current operating-system updates.",
  "Restart the device and router.",
  "Use a stable connection. Ethernet or strong Wi-Fi is preferable.",
  "Use only verified applications.",
  "Keep credentials private.",
];

export function InstBeforeBegin() {
  return (
    <section id="before-begin" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Complete These Steps{" "}
            <span className="text-brand-gradient font-bold">Before Setup</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <CheckSquare className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                Preparation checklist
              </h3>
            </div>
            <ol className="space-y-3 mb-6">
              {prepareList.map((item, idx) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#E01E26] font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed pt-0.5">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
            <Link href={ROUTES.devices}>
              <Button
                variant="outline"
                className="rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-5 py-3 text-xs sm:text-sm font-semibold hover:bg-red-50"
              >
                Check Supported Devices
                <ArrowRight className="ml-2 h-4 w-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
