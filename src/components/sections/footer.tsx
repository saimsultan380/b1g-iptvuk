"use client";

import React from "react";
import Link from "next/link";
import { B1GLogo } from "@/components/brand/b1g-logo";
import { ROUTES, buildIntentWhatsAppUrl } from "@/lib/seo";

const navigationLinks = [
  { name: "Home", href: ROUTES.home },
  { name: "Subscription Plans", href: ROUTES.subscription },
  { name: "Installation Guide", href: ROUTES.installation },
  { name: "Supported Devices", href: ROUTES.devices },
];

const supportLinks = [
  { name: "Contact Us", href: ROUTES.contact },
  { name: "Reviews", href: ROUTES.reviews },
  { name: "Reseller Panel", href: ROUTES.reseller },
  { name: "About Us", href: ROUTES.about },
];

const legalLinks = [
  { name: "Terms and Conditions", href: ROUTES.terms },
  { name: "Privacy Policy", href: ROUTES.privacy },
  { name: "Refund Policy", href: ROUTES.refund },
  { name: "DMCA Policy", href: ROUTES.dmca },
];

export function B1GFooter() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <B1GLogo size="md" />
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-sm">
              B1G Player is the viewing application used with an active B1G IPTV account on compatible Fire TV and Android devices, with guided setup support for UK customers.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F] mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={buildIntentWhatsAppUrl("freeTrial")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                >
                  Request a Free Trial
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12141F] mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-500 hover:text-[#E01E26] font-semibold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs text-slate-400 font-semibold">
              © {new Date().getFullYear()} B1G IPTV Players. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed max-w-4xl">
              B1G Player is a viewing application. Installing the app does not provide an active catalogue. A B1G IPTV subscription supplies the private login details used with the application. Third-party trade marks belong to their owners and do not imply sponsorship or endorsement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
