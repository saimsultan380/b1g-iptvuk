import React from "react";
import { LegalDocument } from "@/components/layout/legal-document";
import { buildPageMetadata, getSitePage, ROUTES, WHATSAPP_NUMBER_DISPLAY } from "@/lib/seo";

const page = getSitePage(ROUTES.refund)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function RefundPage() {
  return (
    <LegalDocument
      breadcrumbs={[...page.breadcrumbs]}
      title="B1G IPTV Refund and Cancellation Policy"
      intro={[
        "This policy explains how cancellation and refund requests are handled. It does not restrict statutory consumer rights.",
        "A blanket “no refunds” statement is not used.",
      ]}
      sections={[
        {
          heading: "Cancellation Before Activation",
          paragraphs: [
            "Contact support immediately. Where an order has not been accepted or supplied, the amount due will be returned.",
          ],
        },
        {
          heading: "UK Cooling-Off Rights",
          paragraphs: [
            "Online UK consumers commonly have a 14-day cancellation period, subject to applicable rules and exceptions.",
            "Where digital content or a service begins immediately, the effect on cancellation rights depends on the required information, request, consent and acknowledgement provided during checkout.",
            "Early supply does not remove remedies where the service is faulty, misdescribed, not provided with reasonable care or cannot lawfully be supplied.",
          ],
        },
        {
          heading: "Service Problems",
          paragraphs: ["Contact support if:"],
          bullets: [
            "The account cannot be activated",
            "The service materially differs from its description",
            "A confirmed fault cannot be corrected reasonably",
            "Access cannot lawfully be supplied",
            "An incorrect or duplicate payment was taken",
          ],
        },
        {
          heading: "Remedies",
          paragraphs: [
            "An appropriate correction, replacement, price reduction or refund may be offered depending on the circumstances and applicable law.",
          ],
        },
        {
          heading: "Compatibility Problems",
          paragraphs: [
            "A discretionary refund may not be appropriate where accurate compatibility information was supplied but the customer chose an unsupported device, incompatible player or inadequate network.",
            "Incorrect advice provided before purchase and statutory rights must still be considered.",
          ],
        },
        {
          heading: "One Unavailable Item",
          paragraphs: [
            "A temporary problem affecting one catalogue item does not automatically mean that the complete service has failed.",
            "The importance, duration and overall effect of the problem will be considered.",
          ],
        },
        {
          heading: "Requesting a Refund",
          paragraphs: ["Provide:"],
          bullets: [
            "Name",
            "Order reference",
            "Username, not password",
            "Purchase date",
            "Activation date",
            "Plan",
            "Amount",
            "Reason",
            "Device and player",
            "Troubleshooting completed",
            "Requested remedy",
          ],
          afterParagraphs: [
            `Send the request through the Contact page or WhatsApp ${WHATSAPP_NUMBER_DISPLAY} with the subject Refund Request.`,
          ],
        },
        {
          heading: "Refund Method",
          paragraphs: [
            "Approved refunds will normally be returned through the original payment method within the applicable legal period.",
          ],
        },
      ]}
    />
  );
}
