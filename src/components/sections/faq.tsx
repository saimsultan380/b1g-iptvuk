"use client";

import React from "react";
import { FaqSection } from "@/components/layout/faq-section";

const faqList = [
  {
    question: "What is B1G Player?",
    answer:
      "B1G Player is the viewing application used with an active B1G IPTV account on compatible devices. It organises available live television, films, TV series and programme information into an accessible interface.",
  },
  {
    question: "Is B1G Player the same as B1G IPTV?",
    answer:
      "No. B1G Player is the viewing application. B1G IPTV is the active subscription account used with the application.",
  },
  {
    question: "Is there a B1G free trial?",
    answer:
      "A B1G free trial may be available for new customers who want to test compatibility before choosing a longer plan. Contact support to confirm the current trial duration, conditions, and availability.",
  },
  {
    question: "What is the B1G Player subscription?",
    answer:
      "A B1G Player subscription generally refers to the B1G IPTV subscription/account used to access the available service through B1G Player or another compatible player. The app itself and the subscription should be treated as separate components.",
  },
  {
    question: "Can I download a B1G APK?",
    answer:
      "A B1G APK is an Android application package. If an APK installation is required for your compatible Android device, use the installation method and file supplied or recommended by the service and make sure it matches your device.",
  },
  {
    question: "Is B1G Player available on Firestick?",
    answer:
      "Compatible Firestick and Fire TV devices can use the supported B1G Player installation method. Always check your exact Fire OS device before installation.",
  },
  {
    question: "What do people mean by “b1gplayer”?",
    answer:
      "“b1gplayer” is simply another way users may type B1G Player when searching for the app or service online.",
  },
  {
    question: "Is “big player” the same as B1G Player?",
    answer:
      "Some users may type “big player” when searching for B1G Player. For the correct app and installation information, use the B1G Player name and check your device compatibility.",
  },
  {
    question: "What is B1GTV?",
    answer:
      "“B1GTV” or “B1G TV” can be used as a search variation for people looking for B1G television services or B1G Player information. The specific product should always be confirmed before installation or purchase.",
  },
  {
    question: "How much does a B1G IPTV Subscription cost?",
    answer:
      "Plans currently start at £10 for one month. Three months cost £20, six months cost £30, and twelve months plus one free month cost £45.",
  },
  {
    question: "Does every source play in 4K?",
    answer:
      "No. Picture quality varies by source, device, display, player, and connection.",
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
    question: "How quickly is the account activated?",
    answer: "Activation begins after the order and payment have been checked.",
  },
  {
    question: "Does the plan renew automatically?",
    answer:
      "It should expire at the end of its term unless recurring renewal is clearly offered and accepted.",
  },
];

export function B1GFAQ() {
  return <FaqSection title="Frequently Asked Questions" items={faqList} />;
}
