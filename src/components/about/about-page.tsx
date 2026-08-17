"use client";

import React from "react";
import { PageHero } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/animation/fade-in";
import { PageCta } from "@/components/layout/page-cta";
import { MessageCircle, Calendar, ShieldCheck, Eye, FlaskConical } from "lucide-react";
import { ROUTES } from "@/lib/seo";

export function AboutHero() {
  return (
    <PageHero
      titleParts={[
        { text: "About" },
        { text: "B1G IPTV Players", className: "text-brand-gradient font-bold" },
      ]}
      paragraphs={[
        "B1G IPTV Players brings plan information, device compatibility, installation instructions and customer-support routes together in one place.",
        "Our aim is to explain what customers receive, how the B1G Player app works and which setup method applies before a customer pays.",
      ]}
      primaryCta={{
        href: ROUTES.contact,
        label: "Contact B1G IPTV Players",
        icon: MessageCircle,
      }}
      secondaryCta={{
        href: ROUTES.subscription,
        label: "View Subscription Plans",
        icon: Calendar,
      }}
      trustItems={[
        { icon: Eye, label: "Clear distinctions" },
        { icon: FlaskConical, label: "Test before longer plans" },
        { icon: ShieldCheck, label: "Private account details" },
      ]}
    />
  );
}

const distinctions = [
  "B1G Player is the viewing application.",
  "B1G IPTV is the active subscription account.",
  "Other platforms may require a compatible independent player.",
  "A standard account includes one active stream.",
  "Picture quality and catalogue availability can vary.",
  "Third-party player charges can be separate.",
];

const approach = [
  {
    title: "Explain before selling",
    body: "Prices, subscription durations, connection limits and device requirements should be visible before payment.",
  },
  {
    title: "Check the actual device",
    body: "Customers should confirm the exact model and operating system rather than relying only on the brand name.",
  },
  {
    title: "Test the real setup",
    body: "Where available, a trial should be tested on the device and connection the customer intends to use.",
  },
  {
    title: "Avoid unrealistic promises",
    body: "We do not describe every source as 4K or promise that internet delivery can never experience interruption.",
  },
  {
    title: "Protect account information",
    body: "Passwords, playlist URLs and private server details should not be posted publicly.",
  },
  {
    title: "Respect lawful access",
    body: "Services and accounts must be supplied and used only where the relevant rights and permissions exist.",
  },
];

const contactUses = [
  "Trial requests",
  "Plan questions",
  "Device checks",
  "Installation assistance",
  "Login support",
  "Refund requests",
  "Privacy enquiries",
  "Copyright concerns",
  "Reseller applications",
];

export function AboutBody() {
  return (
    <>
      <section id="why-this-website" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              Why This Website{" "}
              <span className="text-brand-gradient font-bold">Exists</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
              Streaming setup becomes confusing when an application is described as a subscription and a subscription is described as an application.
            </p>
          </FadeIn>
          <FadeIn className="w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4">We use clear distinctions:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {distinctions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="our-approach" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              Our <span className="text-brand-gradient font-bold">Approach</span>
            </h2>
          </FadeIn>
          <FadeIn className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {approach.map((item) => (
                <div key={item.title} className="rounded-[12px] border border-slate-200 bg-white p-6">
                  <h3 className="text-base sm:text-lg font-bold text-[#12141F] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="who-operates" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              Who Operates the{" "}
              <span className="text-brand-gradient font-bold">Website</span>
            </h2>
          </FadeIn>
          <FadeIn className="w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 space-y-3">
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                B1G IPTV Players is the trading name used on this website for B1G Player app information, B1G IPTV subscription plans and UK customer support.
              </p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                Contact, privacy, refund and copyright requests should be sent through the Contact page or WhatsApp support channel listed there.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="third-party" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              Third-Party <span className="text-brand-gradient font-bold">Independence</span>
            </h2>
          </FadeIn>
          <FadeIn className="w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-3">
                References to Amazon, Android, Google, Samsung, LG, Apple, Microsoft and independent viewing applications describe compatibility only.
              </p>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                Third-party trade marks belong to their owners, and their inclusion does not imply sponsorship or endorsement.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="contact-routes" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="w-full max-w-4xl mb-10">
            <h2 className="text-h2 font-bold tracking-tight text-[#12141F]">
              Contact <span className="text-brand-gradient font-bold">B1G IPTV Players</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
              Use the Contact page for:
            </p>
          </FadeIn>
          <FadeIn className="w-full">
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {contactUses.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#E01E26] font-bold text-base leading-none select-none mt-0.5">•</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <PageCta
        title={
          <>
            Contact <span className="text-brand-gradient font-bold">B1G IPTV Players</span>
          </>
        }
        description="Ask about a trial, a plan, a device or installation before you pay."
        primary={{
          href: ROUTES.contact,
          label: "Contact B1G IPTV Players",
          icon: MessageCircle,
        }}
        secondary={{
          href: ROUTES.subscription,
          label: "View Subscription Plans",
          icon: Calendar,
        }}
      />
    </>
  );
}
