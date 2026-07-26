import type { Metadata } from "next";
import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { ConHero } from "@/components/contact/con-hero";
import { ConHelpOptions } from "@/components/contact/con-help-options";
import { ConForm } from "@/components/contact/con-form";
import { ConWhatToInclude } from "@/components/contact/con-what-to-include";
import { ConReseller } from "@/components/contact/con-reseller";
import { ConFAQ } from "@/components/contact/con-faq";
import { ConCTA } from "@/components/contact/con-cta";
import { B1GFooter } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Contact B1G Player – Free Trial, Setup & Subscription Help",
  description: "Contact B1G Player for a free trial, B1G IPTV subscription advice, Firestick and Android setup help, renewals and reseller enquiries in the UK.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Header */}
      <B1GHeader />

      {/* 1. Hero Section */}
      <ConHero />

      {/* 2. How Can We Help Options */}
      <ConHelpOptions />

      {/* 3. Sleek Contact Enquiry Form */}
      <ConForm />

      {/* 4. What to Include & Pre-contact Troubleshooting checklist */}
      <ConWhatToInclude />

      {/* 5. Reseller Enquiries Info */}
      <ConReseller />

      {/* 6. Contact FAQs */}
      <ConFAQ />

      {/* 7. Call-To-Action Banner */}
      <ConCTA />

      {/* 8. Footer */}
      <B1GFooter />
    </main>
  );
}
