"use client";

import React from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { KeyRound, Lock, Server, User } from "lucide-react";

const fields = [
  {
    title: "Username",
    icon: User,
    body: "The username belongs to the active account and may be case-sensitive.",
  },
  {
    title: "Password",
    icon: Lock,
    body: "Enter it exactly without adding spaces.",
  },
  {
    title: "Server address",
    icon: Server,
    body: "Use the complete address, including http:// or https:// and any supplied port number. The server address may differ from the public website domain.",
  },
  {
    title: "Profile name",
    icon: KeyRound,
    body: "This is normally a label chosen by the customer, such as “Living Room”. It does not usually affect authentication.",
  },
];

export function InstLoginDetails() {
  return (
    <section id="login-details" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="w-full max-w-4xl mb-10">
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
            Understand Your{" "}
            <span className="text-brand-gradient font-bold">Login Details</span>
          </h2>
        </FadeIn>
        <FadeIn className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.map((field) => {
              const Icon = field.icon;
              return (
                <div key={field.title} className="rounded-[12px] border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] shrink-0">
                      <Icon className="h-4 w-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#12141F] leading-none">
                      {field.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    {field.body}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
