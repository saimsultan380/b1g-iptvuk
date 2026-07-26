"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { CreditCard, MessageSquare } from "lucide-react";

export function InstCTA() {
  return (
    <section
      id="cta"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Banner Box Container with Border and no shadow */}
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center flex flex-col items-center">
          
          {/* Header Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#12141F] max-w-2xl font-heading mb-4">
            Complete Your <span className="text-brand-gradient font-bold">B1G Player Setup</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed max-w-3xl mb-8">
            Install the official app on Android or Firestick, or use a compatible alternative player on another device.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            
            {/* Primary Button */}
            <Link href="/b1g-iptv-subscription" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
              >
                <CreditCard className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>View B1G IPTV Plans</span>
              </Button>
            </Link>

            {/* Secondary Button */}
            <Link href="/#faq" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-8 py-3.5 text-xs sm:text-sm font-semibold hover:bg-red-50"
              >
                <MessageSquare className="mr-2 h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                <span>Contact Setup Support</span>
              </Button>
            </Link>

          </div>

        </FadeIn>

      </div>
    </section>
  );
}
