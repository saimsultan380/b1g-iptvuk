"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Download, Clipboard, Check, AlertCircle } from "lucide-react";

export function InstDownloaderInfo() {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const copyToClipboard = (text: string, isCode: boolean) => {
    navigator.clipboard.writeText(text);
    if (isCode) {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  return (
    <section
      id="downloader-info"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <FadeIn className="w-full max-w-4xl mb-10 mx-auto text-center">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Official B1G Player <span className="text-brand-gradient font-bold">Download Information</span>
          </h2>
        </FadeIn>

        {/* Credentials Card (Centered, max-w-2xl) */}
        <FadeIn className="w-full max-w-3xl mx-auto">
          <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                  <Download className="h-4 w-4 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                  Official Download Credentials
                </h3>
              </div>

              {/* Grid of Code & URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Downloader Code */}
                <div className="p-4 rounded-[12px] border border-slate-100 bg-slate-50/50">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Official Downloader Code
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-[#E01E26] tracking-tight">
                      4172090
                    </span>
                    <button
                      onClick={() => copyToClipboard("4172090", true)}
                      className="text-slate-400 hover:text-[#E01E26] transition-colors p-1.5 rounded-lg border border-slate-200 bg-white"
                      title="Copy Code"
                    >
                      {copiedCode ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Clipboard className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Direct Download Address */}
                <div className="p-4 rounded-[12px] border border-slate-100 bg-slate-50/50">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Official Download Address
                  </span>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 break-all select-all font-mono">
                      http://aftv.news/4172090
                    </span>
                    <button
                      onClick={() => copyToClipboard("http://aftv.news/4172090", false)}
                      className="text-slate-400 hover:text-[#E01E26] transition-colors p-1.5 rounded-lg border border-slate-200 bg-white shrink-0"
                      title="Copy URL"
                    >
                      {copiedUrl ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Clipboard className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom info remarks */}
            <div className="border-t border-slate-100 pt-5 mt-6 space-y-3">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                <p className="text-xs text-[#E01E26] font-semibold leading-relaxed">
                  Use only the official code and address shown on the B1G Player website or supplied by the support team.
                </p>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed pl-6.5">
                Installation details can change after application updates, so check the current guide if the code does not work.
              </p>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
