import React from "react";
import { LegalDocument } from "@/components/layout/legal-document";
import { buildPageMetadata, getSitePage, ROUTES, WHATSAPP_NUMBER_DISPLAY } from "@/lib/seo";

const page = getSitePage(ROUTES.terms)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function TermsPage() {
  return (
    <LegalDocument
      breadcrumbs={[...page.breadcrumbs]}
      title="B1G IPTV Terms and Conditions"
      intro={[
        `These terms form the agreement between the customer and the operator of this website trading as B1G IPTV Players when using the website, requesting a trial, purchasing a subscription or applying for reseller access.`,
        "Nothing in these terms removes rights that cannot legally be excluded.",
      ]}
      sections={[
        {
          heading: "Operator Details",
          bullets: [
            "Trading name: B1G IPTV Players",
            `Telephone or WhatsApp: ${WHATSAPP_NUMBER_DISPLAY}`,
            "Contact: use the Contact page or WhatsApp support channel",
          ],
        },
        {
          heading: "Eligibility",
          paragraphs: [
            "Customers must be at least 18, able to enter a contract and authorised to use the selected payment method.",
            "Personal subscriptions are for lawful private use. Commercial resellers must accept separate terms.",
          ],
        },
        {
          heading: "Services",
          paragraphs: [
            "Depending on the accepted order, we may provide time-limited subscription access, private login details, compatibility trials, installation guidance, account support and approved reseller access.",
            "B1G Player is a viewing application. Installing it does not create an active account.",
          ],
        },
        {
          heading: "Orders and Payments",
          paragraphs: [
            "The customer must receive clear information about the price, duration, connection allowance, compatibility and renewal arrangement before ordering.",
            "An order is accepted when payment and required details have been checked and activation is confirmed.",
          ],
        },
        {
          heading: "Activation",
          paragraphs: [
            "Activation times are estimates unless expressly guaranteed.",
            "Where supply begins during a statutory cancellation period, any required request, consent and acknowledgement must be obtained and recorded.",
          ],
        },
        {
          heading: "Subscription Term and Renewal",
          paragraphs: [
            "The account runs from activation until its expiry date.",
            "Unless recurring payment is clearly offered and accepted, the plan does not renew automatically.",
          ],
        },
        {
          heading: "Connections and Devices",
          paragraphs: [
            "A standard subscription permits one active stream.",
            "Customers are responsible for a compatible device, display, internet connection and home network.",
          ],
        },
        {
          heading: "Account Security",
          paragraphs: [
            "Credentials must be kept private. Suspected loss, exposure or unauthorised use must be reported promptly.",
            "We may reset or temporarily restrict a compromised account.",
          ],
        },
        {
          heading: "Acceptable Use",
          paragraphs: ["Customers must not:"],
          bullets: [
            "Publicly share credentials",
            "Exceed connection limits",
            "Restream or redistribute access",
            "Resell without approval",
            "Infringe intellectual-property rights",
            "Bypass security or rights restrictions",
            "Attack or overload systems",
            "Use fraudulent payment information",
          ],
        },
        {
          heading: "Catalogue and Quality",
          paragraphs: [
            "Catalogue items, EPG, Catch-Up, languages and picture quality can change.",
            "SD, HD, Full HD and 4K describe available source options rather than a guarantee for every item.",
          ],
        },
        {
          heading: "Trials",
          paragraphs: [
            "Trials are temporary compatibility checks and can be restricted by duration, catalogue or connection allowance.",
          ],
        },
        {
          heading: "Support",
          paragraphs: [
            "Support covers reasonable account, installation and login help. It does not include repairing a customer’s broadband, television or independent application.",
          ],
        },
        {
          heading: "Refunds and Cancellation",
          paragraphs: [
            "The Refund Policy forms part of these terms. Statutory consumer remedies remain available where applicable.",
          ],
        },
        {
          heading: "Suspension and Termination",
          paragraphs: [
            "Accounts may be suspended for serious or repeated breaches, public sharing, fraud, security threats, unauthorised resale or legal requirements.",
          ],
        },
        {
          heading: "Liability",
          paragraphs: [
            "Liability that cannot legally be excluded remains unaffected.",
            "We are not responsible for problems caused solely by unsupported equipment, the customer’s internet provider, misuse or an unrelated third-party application.",
          ],
        },
        {
          heading: "Governing Law",
          paragraphs: [
            "These terms are governed by the law of England and Wales. UK consumers retain any mandatory protection and appropriate access to their home courts.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions or complaints should be sent through the Contact page or WhatsApp ${WHATSAPP_NUMBER_DISPLAY} with the order reference.`,
          ],
        },
      ]}
    />
  );
}
