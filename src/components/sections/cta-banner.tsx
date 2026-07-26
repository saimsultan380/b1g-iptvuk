"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Tv, Calendar, ShieldCheck, KeyRound, Headphones } from "lucide-react";

export function B1GCTABanner() {
  return (
    <section
      id="cta-banner"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Banner Box Container with Border and no shadow */}
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-12 text-center flex flex-col items-center">
          
          {/* Header Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#12141F] max-w-2xl font-heading mb-4">
            Start Your <span className="text-brand-gradient font-bold">B1G Player Experience</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-500 font-semibold leading-relaxed max-w-3xl mb-8">
            Choose a B1G IPTV subscription, install the official app and access available live television, sports, movies and television series through one organised platform.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            
            {/* Primary Button */}
            <Link href="#pricing" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white px-8 py-3.5 text-xs sm:text-sm font-semibold shine-effect"
              >
                <Calendar className="mr-2 h-4 w-4 stroke-[2.5]" />
                <span>View B1G IPTV Plans</span>
              </Button>
            </Link>

            {/* Secondary Button */}
            <Link href="#download-app" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] px-8 py-3.5 text-xs sm:text-sm font-semibold hover:bg-red-50"
              >
                <Tv className="mr-2 h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                <span>Install B1G Player</span>
              </Button>
            </Link>

          </div>

          {/* Closing Trust Row */}
          <div className="w-full border-t border-slate-100 pt-6 mt-2">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-400 font-bold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                <span>Official App</span>
              </div>
              <span className="hidden sm:inline text-slate-200 select-none">•</span>
              <div className="flex items-center gap-1.5">
                <KeyRound className="h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                <span>Secure Login</span>
              </div>
              <span className="hidden sm:inline text-slate-200 select-none">•</span>
              <div className="flex items-center gap-1.5">
                <Headphones className="h-4 w-4 text-[#E01E26] stroke-[2.5]" />
                <span>UK Customer Assistance</span>
              </div>
            </div>
          </div>

        </FadeIn>

      </div>
    </section>
  );
}
