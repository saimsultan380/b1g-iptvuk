"use client";

import React from "react";
import { PageCta } from "@/components/layout/page-cta";
import { MonitorSmartphone, Headphones } from "lucide-react";
import { ROUTES, buildIntentWhatsAppUrl } from "@/lib/seo";

export function InstCTA() {
  return (
    <PageCta
      title={
        <>
          Check <span className="text-brand-gradient font-bold">Supported Devices</span>
        </>
      }
      description="Confirm compatibility, then contact setup support if a device menu or login field does not match these instructions."
      primary={{
        href: ROUTES.devices,
        label: "Check Supported Devices",
        icon: MonitorSmartphone,
      }}
      secondary={{
        href: buildIntentWhatsAppUrl("setupSupport"),
        label: "Contact Setup Support",
        icon: Headphones,
        external: true,
      }}
    />
  );
}
