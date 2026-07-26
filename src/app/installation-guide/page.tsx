import type { Metadata } from "next";
import React from "react";
import { B1GHeader } from "@/components/sections/b1g-header";
import { InstHero } from "@/components/installation/inst-hero";
import { InstBeforeBegin } from "@/components/installation/inst-before-begin";
import { InstDownloaderInfo } from "@/components/installation/inst-downloader-info";
import { InstDeviceGuides } from "@/components/installation/inst-device-guides";
import { InstSecureLogin } from "@/components/installation/inst-secure-login";
import { InstUsageGuide } from "@/components/installation/inst-usage-guide";
import { InstTroubleshooting } from "@/components/installation/inst-troubleshooting";
import { InstFAQ } from "@/components/installation/inst-faq";
import { InstCTA } from "@/components/installation/inst-cta";
import { B1GFooter } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "B1G Player Installation Guide – Firestick & Android",
  description: "Install B1G Player on Firestick, Android TV, phones and tablets using Downloader code 4172090, then sign in with your B1G IPTV subscription details.",
};

export default function InstallationGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Header */}
      <B1GHeader />

      {/* 1. Hero Section */}
      <InstHero />

      {/* 2. Before You Begin */}
      <InstBeforeBegin />

      {/* 3. Official B1G Player Download Information */}
      <InstDownloaderInfo />

      {/* 4. Supported Devices Step-by-Step Guides (Modeled after image mockup) */}
      <InstDeviceGuides />

      {/* 5. Entering Your Secure Login */}
      <InstSecureLogin />

      {/* 6. Using the B1G Player App */}
      <InstUsageGuide />

      {/* 7. Common Installation Problems & Troubleshooting */}
      <InstTroubleshooting />

      {/* 8. Installation FAQs */}
      <InstFAQ />

      {/* 9. Complete Your B1G Player Setup Banner */}
      <InstCTA />

      {/* 10. Footer */}
      <B1GFooter />
    </main>
  );
}
