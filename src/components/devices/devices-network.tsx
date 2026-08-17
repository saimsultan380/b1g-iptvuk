"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Wifi, MessageCircle, Download } from "lucide-react";
import { ROUTES, buildIntentWhatsAppUrl } from "@/lib/seo";
import { FaqSection } from "@/components/layout/faq-section";
import { PageCta } from "@/components/layout/page-cta";

const speeds = [
  "Approximately 5–10 Mbps for many SD or HD sources",
  "Approximately 10–25 Mbps for many Full HD sources",
  "25 Mbps or more for high-bitrate 4K",
];

const choosing = [
  "Choose Fire TV or Android if direct B1G Player access is important.",
  "Keep a Samsung or LG app-store setup if you prefer not to add an external HDMI device.",
  "Use a phone, tablet or computer for personal viewing and testing.",
];

const faqs = [
  {
    question: "Can I save the account on several devices?",
    answer: "Yes, where compatible. The active connection limit still applies.",
  },
  {
    question: "Is every Smart TV supported?",
    answer: "No. Compatibility depends on its operating system, region and available applications.",
  },
  {
    question: "Can I use a games console or Roku?",
    answer: "Do not assume support. Ask with the exact model before ordering.",
  },
  {
    question: "Are third-party app fees included?",
    answer: "No, unless expressly stated in the order.",
  },
  {
    question: "What should I send for a compatibility check?",
    answer: "Send the manufacturer, complete model, operating system and current player name.",
  },
];

export function DevicesNetworkChoice() {
  return (
    <>
      <section id="network" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              Internet and Network{" "}
              <span className="text-brand-gradient font-bold">Requirements</span>
            </h2>
          </FadeIn>
          <FadeIn className="w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <Wifi className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  Practical planning ranges include:
                </h3>
              </div>
              <ul className="space-y-2.5 mb-4">
                {speeds.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                These are not guarantees. Leave capacity for other household devices and test the connection at the television.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="choosing" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              Choosing the{" "}
              <span className="text-brand-gradient font-bold">Right Device</span>
            </h2>
          </FadeIn>
          <FadeIn className="w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <ul className="space-y-3 mb-4">
                {choosing.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                A newer streaming device can sometimes perform better than an older built-in Smart TV platform.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <FaqSection id="device-faq" title="Device FAQs" items={faqs} />

      <PageCta
        title={
          <>
            Ask About <span className="text-brand-gradient font-bold">My Device</span>
          </>
        }
        description="Send the manufacturer, complete model and operating system for a compatibility check."
        primary={{
          href: buildIntentWhatsAppUrl("deviceCheck"),
          label: "Ask About My Device",
          icon: MessageCircle,
          external: true,
        }}
        secondary={{
          href: ROUTES.installation,
          label: "Open Installation Guide",
          icon: Download,
        }}
      />
    </>
  );
}
