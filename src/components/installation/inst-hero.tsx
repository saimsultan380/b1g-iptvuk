"use client";

import React from "react";
import { PageHero } from "@/components/layout/page-hero";
import { Download, Headphones, ShieldCheck, KeyRound } from "lucide-react";
import { ROUTES, buildIntentWhatsAppUrl } from "@/lib/seo";

export function InstHero() {
  return (
    <PageHero
      titleParts={[
        { text: "B1G Player Installation Guide for" },
        { text: "All Supported Devices", className: "text-brand-gradient font-bold" },
      ]}
      paragraphs={[
        "Install B1G Player directly on compatible Fire TV and Android devices, or add your B1G IPTV account to a compatible third-party player on Samsung, LG, Apple, Windows and Mac devices.",
        "Follow only the method written for your device. Do not attempt to install an Android APK on Samsung Tizen, LG webOS or Apple products.",
      ]}
      primaryCta={{
        href: ROUTES.subscription,
        label: "View B1G IPTV Plans",
        icon: Download,
      }}
      secondaryCta={{
        href: buildIntentWhatsAppUrl("setupSupport"),
        label: "Contact Setup Support",
        icon: Headphones,
        external: true,
      }}
      trustItems={[
        { icon: Download, label: "Device-specific setup" },
        { icon: KeyRound, label: "Private login details" },
        { icon: ShieldCheck, label: "Verified app sources" },
      ]}
    />
  );
}
