"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Tv,
  Monitor,
  Smartphone,
  Laptop,
  Cast,
  Download,
  AlertTriangle,
  ChevronRight,
  TabletSmartphone,
} from "lucide-react";
import { FadeIn } from "@/components/animation/fade-in";
import { TelvisNativeButton } from "@/components/animation/telvis-motion";

interface DeviceGuide {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  showDownloaderCode?: boolean;
  steps: { title: string; description: string }[];
  notes?: string[];
}

const deviceGuidesList: DeviceGuide[] = [
  {
    id: "firestick",
    name: "Firestick and Fire TV",
    icon: Cast,
    title: "Install B1G Player on Firestick or Fire TV",
    subtitle: "Device menus vary by Fire OS version.",
    showDownloaderCode: true,
    steps: [
      { title: "Open Find or Search", description: "Open Find or Search on the Fire TV home screen." },
      { title: "Install Downloader", description: "Search for Downloader by AFTVnews. Install and open Downloader." },
      { title: "Allow unknown apps", description: "Where supported, allow Downloader under Install Unknown Apps." },
      { title: "Enter the code", description: "Enter verified Downloader code 4172090." },
      { title: "Confirm B1G Player", description: "Confirm the destination identifies B1G Player." },
      { title: "Download and install", description: "Download the APK and select Install." },
      { title: "Open and sign in", description: "Open B1G Player. Delete the downloaded installer to recover storage. Enter the username, password and server address." },
      { title: "Allow the first update", description: "Allow the initial catalogue and EPG update to finish." },
    ],
    notes: [
      "Verify code 4172090 before every new installation. If it opens an unexpected page, stop and contact support.",
      "Some newer or restricted devices may not permit third-party installations.",
    ],
  },
  {
    id: "android-tv",
    name: "Android TV and boxes",
    icon: Tv,
    title: "Install B1G Player on Android TV or Android Box",
    subtitle: "Use Downloader by AFTVnews and the verified B1G Player code.",
    showDownloaderCode: true,
    steps: [
      { title: "Update the device", description: "Update the Android device and check available storage." },
      { title: "Install Downloader", description: "Use the Play Store to install Downloader by AFTVnews." },
      { title: "Install B1G Player", description: "Download and install B1G Player using code 4172090." },
      { title: "Sign in", description: "Open the application, enter the account details and allow the first update to complete." },
    ],
    notes: [
      "Avoid unbranded low-powered boxes where possible. A device can technically install the app but still struggle with a large catalogue.",
    ],
  },
  {
    id: "android-mobile",
    name: "Android phone or tablet",
    icon: Smartphone,
    title: "Install on Android Phone or Tablet",
    subtitle: "Use the same verified Downloader route as other Android devices.",
    showDownloaderCode: true,
    steps: [
      { title: "Update the device", description: "Update the Android device and check available storage." },
      { title: "Install Downloader", description: "Use the Play Store to install Downloader by AFTVnews." },
      { title: "Install B1G Player", description: "Download and install B1G Player using code 4172090." },
      { title: "Sign in", description: "Open the application, enter the account details and allow the first update to complete." },
    ],
  },
  {
    id: "samsung",
    name: "Samsung Smart TV",
    icon: Tv,
    title: "Set Up B1G IPTV on Samsung Smart TV",
    subtitle: "Samsung televisions normally use Tizen rather than Android.",
    steps: [
      { title: "Open the Samsung app store", description: "Search for a compatible IPTV player, for example CR7 Player, IBO Player/Pro, Hot IPTV or Smart One." },
      { title: "Check the developer", description: "Check the developer and any separate fee." },
      { title: "Install and open", description: "Install and open the application." },
      { title: "Add the account", description: "Select Add User, Add Playlist or Xtream Codes API. Enter a profile name, username, password and the complete server address." },
      { title: "Save and load", description: "Save the profile and allow the catalogue and EPG to load." },
    ],
    notes: [
      "Some applications use a device ID or MAC address and require separate activation through the player developer’s genuine website.",
    ],
  },
  {
    id: "lg",
    name: "LG Smart TV",
    icon: Monitor,
    title: "Set Up B1G IPTV on LG Smart TV",
    subtitle: "LG televisions normally use webOS.",
    steps: [
      { title: "Open the LG Content Store", description: "Find a compatible webOS player, for example CR7 Player, IBO Player/Pro, Hot IPTV or Smart One." },
      { title: "Review the app", description: "Review its app information and fee." },
      { title: "Install and open", description: "Install and open it." },
      { title: "Add the account", description: "Choose Xtream Codes or M3U, enter the account details and save the profile." },
      { title: "Wait for the update", description: "Wait for the first catalogue update." },
    ],
    notes: [
      "The third-party application charge is separate from the B1G IPTV Subscription.",
    ],
  },
  {
    id: "ios",
    name: "iPhone or iPad",
    icon: TabletSmartphone,
    title: "Set Up on iPhone or iPad",
    subtitle: "Use a compatible App Store player supporting Xtream Codes or M3U.",
    steps: [
      { title: "Open the App Store", description: "Choose a compatible player supporting Xtream Codes or M3U, for example iPlayTV AIO, IBO Player Pro or GSE Smart IPTV." },
      { title: "Review the app", description: "Review the developer, privacy information and app fee." },
      { title: "Install and add the account", description: "Install and open it. Add a new account and enter the supplied details." },
      { title: "Save and update", description: "Save the profile and allow the categories to update." },
    ],
    notes: [
      "Do not install an Android APK or unknown configuration profile on an Apple device.",
    ],
  },
  {
    id: "apple-tv",
    name: "Apple TV",
    icon: Cast,
    title: "Set Up on Apple TV",
    subtitle: "Install a compatible player from the Apple TV App Store.",
    steps: [
      { title: "Install a compatible player", description: "Install a compatible player from the Apple TV App Store, for example iPlayTV AIO, IBO Player Pro or GSE Smart IPTV." },
      { title: "Choose the login method", description: "Open the application and choose the supported login method." },
      { title: "Enter the account", description: "Enter the account directly or use the player developer’s genuine device-linking page." },
      { title: "Save and refresh", description: "Save the profile, return to Apple TV and refresh the account." },
    ],
    notes: [
      "Entering long URLs using a television remote can cause typing errors. Check every character.",
    ],
  },
  {
    id: "windows",
    name: "Windows",
    icon: Monitor,
    title: "Set Up on Windows",
    subtitle: "Choose a reputable compatible desktop player from the Microsoft Store.",
    steps: [
      { title: "Choose a player", description: "Choose a reputable compatible desktop player, for example IPTV Smarters Expert or IBO Player." },
      { title: "Download from the Microsoft Store", description: "Download it from the Microsoft Store. Avoid modified installers and unofficial codec packs." },
      { title: "Install and sign in", description: "Install and open the player. Choose Xtream Codes or M3U, enter the account details and save the profile." },
      { title: "Test playback", description: "Test live and on-demand playback." },
    ],
  },
  {
    id: "mac",
    name: "Mac",
    icon: Laptop,
    title: "Set Up on Mac",
    subtitle: "Find a player compatible with the Mac’s operating system and processor.",
    steps: [
      { title: "Download from an official source", description: "Download it from the App Store or official publisher." },
      { title: "Install and add the account", description: "Install and open it, then add the B1G IPTV account." },
      { title: "Allow the update", description: "Allow the initial update to complete." },
      { title: "Test playback", description: "Test audio, subtitles and full-screen playback." },
    ],
  },
  {
    id: "mag",
    name: "MAG or portal device",
    icon: Tv,
    title: "MAG and Portal Devices",
    subtitle: "Use this method only if support confirms the exact device and portal format.",
    steps: [
      { title: "Contact support first", description: "Support may require the device model, MAC address, portal address, account duration and connection allowance." },
    ],
    notes: [
      "Never send the device identifier publicly.",
    ],
  },
];

export function InstDeviceGuides() {
  const [activeTab, setActiveTab] = useState("firestick");
  const contentRef = useRef<HTMLDivElement>(null);
  const activeGuide = deviceGuidesList.find((g) => g.id === activeTab) || deviceGuidesList[0];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setTimeout(() => {
      if (contentRef.current) {
        const y = contentRef.current.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section
      id="device-guides"
      data-no-reveal
      className="w-full py-12 sm:py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          <div className="lg:col-span-4 flex flex-col gap-6 bg-white border border-slate-200 rounded-[12px] p-6 lg:sticky lg:top-24">
            <div>
              <FadeIn>
                <span className="text-[11px] font-bold text-[#E01E26] uppercase tracking-wider block mb-1">
                  Installation Guide
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#12141F] mb-1 font-heading">
                  Device setup methods
                </h2>
                <p className="text-xs text-slate-500 font-semibold mb-6">
                  Choose the method written for your device.
                </p>
              </FadeIn>
              <div className="flex flex-col gap-2.5">
                {deviceGuidesList.map((device, index) => {
                  const Icon = device.icon;
                  const isActive = activeTab === device.id;
                  return (
                    <TelvisNativeButton
                      key={device.id}
                      type="button"
                      kind="card"
                      index={index}
                      onClick={() => handleTabClick(device.id)}
                      className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-[12px] border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E01E26]/30 ${
                        isActive
                          ? "border-[#E01E26] bg-red-50 text-[#E01E26]"
                          : "border-transparent bg-white hover:bg-slate-50 text-[#12141F]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                            isActive ? "bg-red-100 text-[#E01E26]" : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          <Icon className="h-4 w-4 stroke-[2]" />
                        </div>
                        <span
                          className={`text-xs sm:text-sm font-bold tracking-tight ${
                            isActive ? "text-[#E01E26]" : "text-[#12141F]"
                          }`}
                        >
                          {device.name}
                        </span>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 ${isActive ? "text-[#E01E26]" : "text-slate-300"}`}
                      />
                    </TelvisNativeButton>
                  );
                })}
              </div>
            </div>
          </div>

          <FadeIn preset="media" className="lg:col-span-8">
          <div
            ref={contentRef}
            className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between min-h-[600px] scroll-mt-24"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12141F] mb-3 font-heading">
                {activeGuide.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-6 leading-relaxed max-w-2xl">
                {activeGuide.subtitle}
              </p>
              {activeGuide.showDownloaderCode && (
                <div className="inline-flex items-center gap-3 p-3 rounded-[12px] border border-red-100 bg-red-50/50 mb-6">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E01E26] text-white">
                    <Download className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block leading-none mb-0.5">
                      Downloader Code
                    </span>
                    <span className="text-sm font-extrabold text-[#E01E26] leading-none">4172090</span>
                  </div>
                </div>
              )}
              <div className="relative w-full max-w-md mx-auto my-8 flex items-center justify-center">
                <Image
                  src="/hero-image.PNG"
                  alt="B1G Player app displayed on compatible television and mobile devices"
                  width={500}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
              <ol className="space-y-6 relative border-l-2 border-slate-100 pl-6 ml-3">
                {activeGuide.steps.map((step, idx) => (
                  <li key={step.title} className="relative">
                    <span className="absolute -left-[37px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-red-50 border border-red-100 text-[#E01E26] font-bold text-xs">
                      {idx + 1}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            {activeGuide.notes && activeGuide.notes.length > 0 && (
              <div className="border-t border-slate-100 pt-5 mt-8 space-y-2">
                {activeGuide.notes.map((note) => (
                  <div key={note} className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
