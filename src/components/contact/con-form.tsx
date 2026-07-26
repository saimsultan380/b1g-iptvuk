"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";

const enquiryTypes = [
  "Free Trial",
  "Subscription Question",
  "New Activation",
  "B1G Player Installation",
  "Login Support",
  "Renewal or Upgrade",
  "Reseller Enquiry",
  "General Question",
];

const deviceTypes = [
  "Firestick",
  "Fire TV",
  "Android TV",
  "Google TV",
  "Android Phone",
  "Android Tablet",
  "Samsung TV",
  "LG TV",
  "Apple TV",
  "iPhone or iPad",
  "Windows",
  "Mac",
  "Other",
];

export function ConForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    enquiryType: "Free Trial",
    deviceType: "Firestick",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Mock form submission timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact-form"
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Title */}
        <FadeIn className="text-center mb-10">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[#E01E26] mb-3">
            <MessageSquare className="h-4.5 w-4.5 stroke-[2]" />
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-[#12141F] font-heading">
            Send Your <span className="text-brand-gradient font-bold">Enquiry</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-semibold max-w-xl mx-auto">
            Fill in the support enquiry form below and our response team will get back to you.
          </p>
        </FadeIn>

        {/* Form Container with Border and no shadow */}
        <FadeIn className="w-full rounded-[12px] border border-slate-200 bg-white p-6 sm:p-10 relative overflow-hidden">
          
          {isSubmitted ? (
            <div className="text-center py-10 flex flex-col items-center justify-center">
              <div className="h-14 w-14 rounded-full bg-red-50 text-[#E01E26] flex items-center justify-center mb-5">
                <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141F] mb-2 font-heading">
                Enquiry Sent Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-md leading-relaxed mb-6">
                Thank you for contacting B1G Player. Our UK support team will respond to your enquiry shortly.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    whatsapp: "",
                    enquiryType: "Free Trial",
                    deviceType: "Firestick",
                    message: "",
                  });
                }}
                className="rounded-[12px] border-2 border-[#E01E26] bg-white text-[#12141F] hover:bg-red-50 text-xs sm:text-sm font-semibold px-6 py-2.5"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name & Email grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="flex flex-col">
                  <label htmlFor="fullName" className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                    Full Name <span className="text-[#E01E26]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#12141F] placeholder-slate-400 focus:outline-none focus:border-[#E01E26] focus:ring-1 focus:ring-[#E01E26]"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                    Email Address <span className="text-[#E01E26]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#12141F] placeholder-slate-400 focus:outline-none focus:border-[#E01E26] focus:ring-1 focus:ring-[#E01E26]"
                  />
                </div>

              </div>

              {/* WhatsApp Number & Enquiry Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* WhatsApp Number */}
                <div className="flex flex-col">
                  <label htmlFor="whatsapp" className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+44 7123 456789"
                    className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#12141F] placeholder-slate-400 focus:outline-none focus:border-[#E01E26] focus:ring-1 focus:ring-[#E01E26]"
                  />
                </div>

                {/* Enquiry Type */}
                <div className="flex flex-col">
                  <label htmlFor="enquiryType" className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                    Enquiry Type
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#12141F] focus:outline-none focus:border-[#E01E26] focus:ring-1 focus:ring-[#E01E26] appearance-none"
                  >
                    {enquiryTypes.map((type, idx) => (
                      <option key={idx} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Device Type */}
              <div className="flex flex-col">
                <label htmlFor="deviceType" className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                  Device Type
                </label>
                <select
                  id="deviceType"
                  name="deviceType"
                  value={formData.deviceType}
                  onChange={handleChange}
                  className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#12141F] focus:outline-none focus:border-[#E01E26] focus:ring-1 focus:ring-[#E01E26] appearance-none"
                >
                  {deviceTypes.map((device, idx) => (
                    <option key={idx} value={device}>
                      {device}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5">
                  Message <span className="text-[#E01E26]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your device type, question, or installation details..."
                  className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#12141F] placeholder-slate-400 focus:outline-none focus:border-[#E01E26] focus:ring-1 focus:ring-[#E01E26] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-[12px] bg-gradient-to-r from-[#E01E26] via-[#EE2830] to-[#B5121A] text-white py-3.5 text-xs sm:text-sm font-semibold shine-effect flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4 shrink-0 stroke-[2.5]" />
                  <span>{isSubmitting ? "Sending..." : "Send Your Enquiry"}</span>
                </Button>
              </div>

            </form>
          )}

        </FadeIn>

      </div>
    </section>
  );
}
