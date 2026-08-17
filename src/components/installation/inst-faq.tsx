"use client";

import React from "react";
import { FaqSection } from "@/components/layout/faq-section";

const items = [
  {
    question: "What is the B1G Player Downloader code?",
    answer: "The current code is 4172090. Confirm it identifies B1G Player before installing.",
  },
  {
    question: "Can B1G Player be installed directly on Samsung or LG?",
    answer: "Normally no. Those televisions use a compatible app-store player.",
  },
  {
    question: "Does the app provide a subscription?",
    answer: "No. An active trial or paid account is required.",
  },
  {
    question: "Why is Developer Options missing on Firestick?",
    answer:
      "Menu availability varies by model and operating system. Some devices may restrict third-party installations.",
  },
  {
    question: "Can the same details be used on another compatible player?",
    answer:
      "Normally yes, subject to supported login formats and the active connection limit.",
  },
];

export function InstFAQ() {
  return <FaqSection id="faq" title="Installation FAQs" items={items} />;
}
