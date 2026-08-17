"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";
import { ROUTES, WHATSAPP_FROM_SITE, buildWhatsAppUrl } from "@/lib/seo";

const enquiryTypes = [
  "Trial",
  "Plan question",
  "Device compatibility",
  "Installation",
  "Login",
  "Playback",
  "Renewal",
  "Payment",
  "Refund",
  "Reseller",
  "Privacy",
  "Copyright",
  "Other",
];

export function ConForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    device: "",
    player: "",
    country: "",
    connections: "1",
    enquiryType: "Trial",
    message: "",
    lawfulUse: false,
    privacy: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.lawfulUse || !formData.privacy) {
      alert("Please confirm lawful personal use and accept the privacy policy.");
      return;
    }
    const message = [
      `${WHATSAPP_FROM_SITE} Subject: ${formData.enquiryType}.`,
      `Name: ${formData.fullName}`,
      `Email or WhatsApp: ${formData.contact}`,
      `Device and model: ${formData.device}`,
      `Player installed: ${formData.player}`,
      `Country: ${formData.country}`,
      `Connections required: ${formData.connections}`,
      `What I would like to test: ${formData.message}`,
    ].join("\n");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  };

  const fieldClass =
    "w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#12141F] placeholder-slate-400 focus:outline-none focus:border-[#E01E26] focus:ring-1 focus:ring-[#E01E26]";

  return (
    <section id="trial-form" className="w-full py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="text-center mb-10">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] mb-3">
            <MessageSquare className="h-4 w-4 stroke-[2]" />
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Trial Request <span className="text-brand-gradient font-bold">Form</span>
          </h2>
        </FadeIn>

        <div className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-10">
          {isSubmitted ? (
            <div className="text-center py-10 flex flex-col items-center justify-center">
              <div className="h-14 w-14 rounded-full bg-red-50 text-[#E01E26] flex items-center justify-center mb-5">
                <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141F] mb-2 font-heading">
                Thank you.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-md leading-relaxed">
                Support will review your device information and confirm whether trial access is available. Do not install applications from an unconfirmed link while waiting.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <FadeIn className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                    Name <span className="text-[#E01E26]">*</span>
                  </label>
                  <input name="fullName" required value={formData.fullName} onChange={handleChange} className={fieldClass} />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                    Email or WhatsApp <span className="text-[#E01E26]">*</span>
                  </label>
                  <input name="contact" required value={formData.contact} onChange={handleChange} className={fieldClass} />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                    Device and model <span className="text-[#E01E26]">*</span>
                  </label>
                  <input name="device" required value={formData.device} onChange={handleChange} className={fieldClass} />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                    Player installed
                  </label>
                  <input name="player" value={formData.player} onChange={handleChange} className={fieldClass} />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                    Country <span className="text-[#E01E26]">*</span>
                  </label>
                  <input name="country" required value={formData.country} onChange={handleChange} className={fieldClass} />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                    Connections required
                  </label>
                  <input name="connections" value={formData.connections} onChange={handleChange} className={fieldClass} />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">Subject</label>
                <select name="enquiryType" value={formData.enquiryType} onChange={handleChange} className={`${fieldClass} appearance-none`}>
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                  What would you like to test? <span className="text-[#E01E26]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${fieldClass} resize-none`}
                />
              </div>
              <label className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <input type="checkbox" name="lawfulUse" checked={formData.lawfulUse} onChange={handleChange} className="mt-1" />
                I confirm this request is for lawful personal use.
              </label>
              <label className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} className="mt-1" />
                I accept the{" "}
                <Link href={ROUTES.privacy} className="text-[#E01E26] underline">
                  Privacy Policy
                </Link>
                .
              </label>
              </FadeIn>
              <Button
                type="submit"
                className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs sm:text-sm font-semibold"
              >
                <Send className="h-4 w-4 mr-2 stroke-[2.5]" />
                Request Trial Access
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
