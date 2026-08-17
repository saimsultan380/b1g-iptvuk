"use client";

import React from "react";
import { FaqSection } from "@/components/layout/faq-section";

const faqList = [
  {
    question: "Is B1G Player the same as B1G IPTV?",
    answer:
      "No. B1G Player is the viewing application. B1G IPTV is the active subscription account used with the application.",
  },
  {
    question: "Which devices run the B1G Player app directly?",
    answer:
      "Compatible Fire TV and Android devices. Other platforms normally use a compatible third-party player.",
  },
  {
    question: "How much does a B1G IPTV Subscription cost?",
    answer:
      "Plans currently start at £10 for one month. Three months cost £20, six months cost £30 and twelve months plus one free month cost £45.",
  },
  {
    question: "Does every source play in 4K?",
    answer:
      "No. Picture quality varies by source, device, display, player and connection.",
  },
  {
    question: "Can I use the account on two televisions?",
    answer:
      "A standard account permits one active stream. Request a multi-connection option if two screens must play simultaneously.",
  },
  {
    question: "Is the third-party player fee included?",
    answer:
      "Not automatically. Some Smart TV and mobile applications charge their own fee.",
  },
  {
    question: "Can I request a free trial?",
    answer:
      "A short trial may be available for new-customer compatibility testing. Support confirms its exact conditions.",
  },
  {
    question: "How quickly is the account activated?",
    answer:
      "Activation begins after the order and payment have been checked.",
  },
  {
    question: "Does the plan renew automatically?",
    answer:
      "It should expire at the end of its term unless recurring renewal is clearly offered and accepted.",
  },
];

export function B1GFAQ() {
  return <FaqSection items={faqList} />;
}
