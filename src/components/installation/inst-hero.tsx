"use client";

import React from "react";
import { PageHero } from "@/components/layout/page-hero";
import { Download, Headphones, ShieldCheck, KeyRound } from "lucide-react";
import { ROUTES, buildIntentWhatsAppUrl } from "@/lib/seo";

export function InstHero() {
  return (
    <PageHero
      titleParts={[
        { text: "B1G Player Setup Guide for" },
        { text: "Firestick, Smart TV and Mobile", className: "text-brand-gradient font-bold" },
      ]}
      paragraphs={[
        "Set up B1G Player on compatible Firestick and Android devices using the current Downloader route, then enter the username, password and server address supplied with your active account. Samsung, LG, Apple, Windows and Mac devices can use a compatible alternative player where supported.",
      ]}
      primaryCta={{
        href: ROUTES.subscription,
        label: "Compare B1G Player Plans",
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
