"use client";

import React from "react";
import { PageCta } from "@/components/layout/page-cta";
import { CreditCard, FileText } from "lucide-react";
import { ROUTES, buildIntentWhatsAppUrl } from "@/lib/seo";

export function SubCTA() {
  return (
    <PageCta
      title={
        <>
          Choose <span className="text-brand-gradient font-bold">My Plan</span>
        </>
      }
      description="Select the duration that suits you, or read the refund policy before paying for a longer term."
      primary={{
        href: buildIntentWhatsAppUrl("buySubscription"),
        label: "Choose My Plan",
        icon: CreditCard,
        external: true,
      }}
      secondary={{
        href: ROUTES.refund,
        label: "Read the Refund Policy",
        icon: FileText,
      }}
    />
  );
}
