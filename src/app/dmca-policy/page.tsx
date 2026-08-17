import React from "react";
import { LegalDocument } from "@/components/layout/legal-document";
import { buildPageMetadata, getSitePage, ROUTES, WHATSAPP_NUMBER_DISPLAY } from "@/lib/seo";

const page = getSitePage(ROUTES.dmca)!;

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function DmcaPage() {
  return (
    <LegalDocument
      breadcrumbs={[...page.breadcrumbs]}
      title="B1G IPTV DMCA and Copyright Takedown Policy"
      intro={[
        "The operator of this website trading as B1G IPTV Players respects copyright, trade marks and other intellectual-property rights.",
        "The Digital Millennium Copyright Act is United States law. This policy provides a general notice-and-review process under the law applicable to the operator and complaint.",
      ]}
      sections={[
        {
          heading: "What Can Be Reported",
          bullets: [
            "Website text or images",
            "A download link",
            "Allegedly unauthorised account access",
            "Trade-mark misuse",
            "Customer or reseller infringement",
            "Material allegedly supplied without permission",
          ],
        },
        {
          heading: "Required Notice Information",
          paragraphs: ["Include:"],
          bullets: [
            "Full name and organisation",
            "Contact details",
            "Identification of the protected work or right",
            "Evidence of ownership or authority",
            "Exact URL, account or location",
            "Description of the alleged infringement",
            "Relevant territory or registration",
            "Good-faith accuracy statement",
            "Physical or electronic signature",
          ],
          afterParagraphs: [
            "A general allegation without a specific location may be difficult to investigate.",
          ],
        },
        {
          heading: "Where to Send a Notice",
          bullets: [
            `WhatsApp or Contact page: ${WHATSAPP_NUMBER_DISPLAY}`,
            "Subject: Copyright/Takedown Notice",
          ],
        },
        {
          heading: "Review Process",
          paragraphs: ["We may:"],
          bullets: [
            "Acknowledge the notice",
            "Request missing information",
            "Preserve relevant records",
            "Restrict identified material temporarily",
            "Contact the affected party",
            "Seek legal advice",
            "Remove or restore material",
            "Respond with the outcome that can lawfully be disclosed",
          ],
          afterParagraphs: ["A complaint does not automatically prove infringement."],
        },
        {
          heading: "Response or Counter-Notice",
          paragraphs: [
            "An affected person may explain why the use is authorised, licensed, mistaken or otherwise lawful and provide supporting evidence.",
            "Where a formal US DMCA process genuinely applies, its statutory notice and counter-notice requirements must be followed separately.",
          ],
        },
        {
          heading: "Repeat Infringement",
          paragraphs: [
            "Serious or repeated infringement may result in account or reseller suspension under the Terms and Conditions.",
          ],
        },
        {
          heading: "Misleading Complaints",
          paragraphs: [
            "Do not submit a knowingly false, abusive or fraudulent complaint. Notices must be made with a reasonable good-faith basis.",
          ],
        },
      ]}
    />
  );
}
