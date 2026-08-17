"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { MessageSquare, Phone } from "lucide-react";
import { WHATSAPP_NUMBER_DISPLAY, buildIntentWhatsAppUrl } from "@/lib/seo";

const subjects = [
  "Trial",
  "Plan question",
  "Device compatibility",
  "Installation",
  "Login",
  "Playback",
  "Renewal",
  "Payment",
  "Refund",
  "Reseller",
  "Privacy",
  "Copyright",
  "Other",
];

export function ConDetails() {
  return (
    <section id="support-enquiries" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Support <span className="text-brand-gradient font-bold">Enquiries</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Choose the correct subject:
          </p>
        </FadeIn>
        <FadeIn className="w-full mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {subjects.map((subject) => (
              <div
                key={subject}
                className="rounded-[12px] border border-slate-200 bg-white p-4 text-xs sm:text-sm font-semibold text-slate-800 text-center"
              >
                {subject}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="w-full">
          <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                <Phone className="h-4 w-4 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                Contact details
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-800">
              <li>WhatsApp: {WHATSAPP_NUMBER_DISPLAY}</li>
              <li>Support hours: Monday to Saturday, 10:00–20:00 UK time</li>
              <li>Expected response: usually within a few hours during support hours</li>
            </ul>
            <p className="mt-4 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
              Privacy, copyright and refund requests can be sent through the same WhatsApp number or the Contact form, with the correct subject selected.
            </p>
            <a
              href={buildIntentWhatsAppUrl("contact")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-xs sm:text-sm font-bold text-[#E01E26]"
            >
              <MessageSquare className="h-4 w-4 stroke-[2.5]" />
              Message support on WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
