import React from "react";
import { LegalDocument } from "@/components/layout/legal-document";
import { buildPageMetadata, getSitePage, ROUTES, WHATSAPP_NUMBER_DISPLAY } from "@/lib/seo";

const page = getSitePage(ROUTES.privacy)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      breadcrumbs={[...page.breadcrumbs]}
      title="B1G IPTV Privacy Policy"
      intro={[
        "This notice explains how the operator of this website trading as B1G IPTV Players processes personal information through the website, support channels, trials, subscriptions and reseller enquiries.",
      ]}
      sections={[
        {
          heading: "Data Controller",
          bullets: [
            "Trading name: B1G IPTV Players",
            `Privacy contact: WhatsApp ${WHATSAPP_NUMBER_DISPLAY} or the Contact page, with the subject Privacy`,
          ],
        },
        {
          heading: "Information We Collect",
          bullets: [
            "Name",
            "Email and telephone number",
            "Billing and transaction information",
            "Order reference",
            "Subscription and account information",
            "Device and operating-system details",
            "Support messages",
            "IP address and security logs",
            "Website analytics",
            "Cookie preferences",
            "Review text and permission",
            "Reseller business information",
            "Marketing preferences",
          ],
          afterParagraphs: [
            "Never send passwords, banking passwords or complete payment-card details.",
          ],
        },
        {
          heading: "Why We Use Information",
          paragraphs: ["We may use information to:"],
          bullets: [
            "Answer enquiries",
            "Process orders",
            "Activate accounts",
            "Provide support",
            "Prevent fraud",
            "Protect account security",
            "Maintain tax and legal records",
            "Manage reseller relationships",
            "Publish reviews with permission",
            "Send necessary service messages",
            "Send optional marketing where lawful",
            "Establish or defend legal claims",
          ],
        },
        {
          heading: "Lawful Bases",
          paragraphs: [
            "Relevant lawful bases may include contract, legal obligation, legitimate interests and consent.",
          ],
        },
        {
          heading: "Information Sharing",
          paragraphs: ["Information may be shared with:"],
          bullets: [
            "Hosting and security providers",
            "Payment processors",
            "Email and support systems",
            "Messaging platforms selected by the customer",
            "Subscription infrastructure providers",
            "Analytics providers",
            "Accountants and professional advisers",
            "Regulators, courts or authorities where legally required",
          ],
        },
        {
          heading: "International Transfers",
          paragraphs: [
            "Where information is transferred outside the UK, appropriate lawful safeguards should be used.",
          ],
        },
        {
          heading: "Retention",
          paragraphs: [
            "Information is kept only for as long as needed for the enquiry, order, support, tax, security, review-verification, reseller or marketing purpose it was collected for. It is not retained indefinitely without a defined reason.",
          ],
        },
        {
          heading: "Customer Rights",
          paragraphs: ["Depending on applicable law, customers may request:"],
          bullets: [
            "Access",
            "Correction",
            "Deletion",
            "Restriction",
            "Objection",
            "Portability",
            "Withdrawal of consent",
            "Information about automated decisions",
          ],
          afterParagraphs: [
            `Requests should be sent through the Contact page or WhatsApp ${WHATSAPP_NUMBER_DISPLAY} with the subject Privacy.`,
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Essential cookies are used to operate the website. Analytics and marketing cookies, where used, should not load before valid consent where consent is required.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "Reasonable technical and organisational measures should protect personal information, including restricted access and secure account systems.",
          ],
        },
        {
          heading: "Complaints and Contact",
          paragraphs: [
            `Privacy enquiries: Contact page or WhatsApp ${WHATSAPP_NUMBER_DISPLAY}.`,
            "UK customers may also complain to the Information Commissioner’s Office.",
          ],
        },
      ]}
    />
  );
}
