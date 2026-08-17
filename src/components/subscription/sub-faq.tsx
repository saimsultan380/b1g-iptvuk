"use client";

import React from "react";
import { FaqSection } from "@/components/layout/faq-section";

const items = [
  {
    question: "Does every plan include the same core catalogue?",
    answer: "That is the intended standard-plan structure. Duration is the main difference between plans.",
  },
  {
    question: "Is the £45 option thirteen months in total?",
    answer: "Yes. Twelve paid months plus one additional month.",
  },
  {
    question: "Can I upgrade the connection allowance?",
    answer: "Ask support before starting simultaneous playback.",
  },
  {
    question: "Are third-party application fees included?",
    answer: "No, unless the order expressly includes them.",
  },
  {
    question: "Can catalogue availability change?",
    answer:
      "Yes. Dynamic catalogue changes can occur, while statutory consumer rights still apply where relevant.",
  },
  {
    question: "Can I test before buying?",
    answer: "A short trial may be available for compatibility testing.",
  },
];

export function SubFAQ() {
  return <FaqSection id="subscription-faq" title="Subscription FAQs" items={items} />;
}
