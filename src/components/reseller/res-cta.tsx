"use client";

import React from "react";
import { PageCta } from "@/components/layout/page-cta";
import { Users, Headphones } from "lucide-react";
import { buildIntentWhatsAppUrl } from "@/lib/seo";

export function ResCTA() {
  return (
    <PageCta
      title={
        <>
          Request <span className="text-brand-gradient font-bold">Reseller Details</span>
        </>
      }
      description="Ask for the current credit table, panel demonstration and reseller agreement before purchasing credits."
      primary={{
        href: buildIntentWhatsAppUrl("reseller"),
        label: "Request Reseller Details",
        icon: Users,
        external: true,
      }}
      secondary={{
        href: buildIntentWhatsAppUrl("reseller"),
        label: "Contact the Reseller Team",
        icon: Headphones,
        external: true,
      }}
    />
  );
}
