"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/animation/fade-in";
import {
  Tv,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Cast,
  Download,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

interface DeviceGuide {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  showDownloaderCode?: boolean;
  steps: {
    title: string;
    description: string;
  }[];
  notes?: string[];
}

const deviceGuidesList: DeviceGuide[] = [
  {
    id: "firestick",
    name: "Amazon Firestick & Fire TV",
    icon: Cast,
    title: "How to Install B1G Player on Firestick",
    subtitle: "Amazon Firestick remains one of the most popular devices for IPTV media player installation.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Install Downloader",
        description: "From the Firestick home screen: Open Find. Select Search. Enter Downloader. Choose the Downloader app by AFTVnews. Select Download. Wait for installation. Open Downloader.",
      },
      {
        title: "Enable Installation Permission",
        description: "Open Settings → My Fire TV → Developer Options → Install Unknown Apps. Enable Downloader. If Developer Options are hidden: Open Settings. Choose My Fire TV. Open About. Highlight the device name. Press the select button several times. Return to My Fire TV. Open Developer Options.",
      },
      {
        title: "Enter the Code",
        description: "Open Downloader and enter the official Downloader Code: 4172090. Select Go. Confirm that the page displays the official B1G Player app before downloading.",
      },
      {
        title: "Install the App",
        description: "When the file has downloaded: Select Install. Wait for completion. Select Done or Open. Delete the APK file if you want to recover storage space.",
      },
      {
        title: "Add App to Home Screen",
        description: "Open your applications. Highlight B1G Player. Press the menu button. Select Move to Front.",
      },
      {
        title: "Sign In",
        description: "Open the app and enter your username, password and server URL exactly as supplied with your active subscription. Select login or add account. Allow the categories to load completely.",
      },
    ],
  },
  {
    id: "android-tv",
    name: "Android TV & Android Boxes",
    icon: Tv,
    title: "How to Install B1G Player on Android TV & Boxes",
    subtitle: "Use Downloader or a compatible installation method.",
    showDownloaderCode: true,
    steps: [
      {
        title: "Install Downloader",
        description: "Download and install Downloader from the Google Play Store.",
      },
      {
        title: "Enter Downloader Code",
        description: "Enter: 4172090.",
      },
      {
        title: "Install B1G Player",
        description: "Download the application file, allow install permissions when prompted, and complete the installation.",
      },
      {
        title: "Sign In",
        description: "Launch the app and enter your username, password and server URL.",
      },
    ],
    notes: [
      "Menu names differ between television manufacturers and Android versions.",
    ],
  },
  {
    id: "android-phone",
    name: "Android Smartphones & Tablets",
    icon: Smartphone,
    title: "Android Phone and Tablet Setup",
    subtitle: "Quickly set up B1G Player on your mobile Android devices.",
    steps: [
      {
        title: "Download the APK",
        description: "Open the official download link (http://aftv.news/4172090) through your mobile browser. Download the B1G Player APK.",
      },
      {
        title: "Allow Permissions & Install",
        description: "Open the completed download file. Allow installation from the browser or file manager if prompted. Select Install.",
      },
      {
        title: "Sign In & Load",
        description: "Open B1G Player. Enter your B1G IPTV login information (username, password, server URL). Wait for the categories to load.",
      },
    ],
    notes: [
      "Android may display a security warning because the application is being installed outside the Play Store. Continue only when the file came from the official source.",
    ],
  },
  {
    id: "samsung-tv",
    name: "Samsung Smart TVs",
    icon: Tv,
    title: "Samsung Smart TV Setup",
    subtitle: "Samsung televisions do not normally run the Android version of B1G Player. Install a compatible alternative player.",
    steps: [
      {
        title: "Select an IPTV App",
        description: "Open the Samsung App Store. Search for and install a compatible player app. Possible options include: IBO Player, SmartOne IPTV, CR7 Player, or other Xtream Codes-compatible players.",
      },
      {
        title: "Enter Login Credentials",
        description: "Open the app. Choose Xtream Codes or the supported login method. Enter your username, password, and the server URL exactly as supplied.",
      },
      {
        title: "Save & Reload",
        description: "Save the profile. Restart the application to load the available channel listings.",
      },
    ],
    notes: [
      "Some third-party applications require a separate activation payment. These charges are set by the application developer and are not included with your B1G IPTV subscription.",
    ],
  },
  {
    id: "lg-tv",
    name: "LG Smart TVs",
    icon: Tv,
    title: "LG Smart TV Setup",
    subtitle: "LG televisions use applications available through the LG Content Store.",
    steps: [
      {
        title: "Install Compatible Player",
        description: "Open the LG Content Store. Search for and install a compatible player. Options include IBO Player, SmartOne IPTV, CR7 Player, or other compatible players.",
      },
      {
        title: "Configure Xtream Codes",
        description: "Open the player. Select Xtream Codes API or M3U. Enter the account information (username, password, and server URL).",
      },
      {
        title: "Save & Launch",
        description: "Save the profile. Restart the application and allow the available categories to load.",
      },
    ],
    notes: [
      "Availability depends on television model, webOS version and country.",
      "Third-party applications may require a separate developer activation fee.",
    ],
  },
  {
    id: "apple-tv",
    name: "Apple TV Setup",
    icon: Cast,
    title: "Apple TV Setup",
    subtitle: "Apple TV users need a compatible application from the Apple App Store.",
    steps: [
      {
        title: "Install a Player",
        description: "Open the Apple App Store. Install a compatible player. Possible players include: IBO Player Pro, VU IPTV Player, or other supported tvOS applications.",
      },
      {
        title: "Log In using Xtream Codes",
        description: "Open the app. Select the supported login method. Enter the username, password, and server URL. Save the account details.",
      },
    ],
    notes: [
      "The official Android B1G Player APK cannot be installed on Apple TV.",
    ],
  },
  {
    id: "ios-devices",
    name: "iPhone & iPad Setup",
    icon: Smartphone,
    title: "iPhone and iPad Setup",
    subtitle: "Use a compatible IPTV player from the Apple App Store.",
    steps: [
      {
        title: "Install Compatible App",
        description: "Search the App Store for supported players. Possible options include: iPlayTV AIO, VU IPTV Player, IBO Player Pro, or other compatible iOS apps.",
      },
      {
        title: "Configure Credentials",
        description: "Open the app. Enter the B1G IPTV subscription details (username, password, server URL) supplied after activation.",
      },
    ],
    notes: [
      "Some third-party applications may charge a separate developer fee.",
    ],
  },
  {
    id: "windows-pc",
    name: "Windows PCs",
    icon: Monitor,
    title: "Windows Setup",
    subtitle: "Use a compatible IPTV player for Windows.",
    steps: [
      {
        title: "Install Player",
        description: "Open the Microsoft Store or trusted developer source. Install a supported player.",
      },
      {
        title: "Sign In",
        description: "Open the app. Choose Xtream Codes or M3U login. Enter the supplied details. Save the profile and allow the categories to load.",
      },
    ],
    notes: [
      "Do not install applications from unknown download pages.",
    ],
  },
  {
    id: "mac-computer",
    name: "Mac Computers",
    icon: Laptop,
    title: "Mac Setup",
    subtitle: "Mac users can install a compatible player through the Mac App Store or a trusted developer source.",
    steps: [
      {
        title: "Install Supported Client",
        description: "Open the Mac App Store or download a compatible IPTV player from a trusted developer source. Install the application.",
      },
      {
        title: "Configure Account",
        description: "Open the application. Select the supported login method (Xtream Codes API or M3U). Enter the username, password, and server URL. Save the profile and wait for loading to complete.",
      },
    ],
  },
];

export function InstDeviceGuides() {
  const [activeTab, setActiveTab] = useState("firestick");
  const contentRef = useRef<HTMLDivElement>(null);

  const activeGuide = deviceGuidesList.find((g) => g.id === activeTab) || deviceGuidesList[0];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    
    // Smoothly scroll down to the content pane on smaller screen sizes
    setTimeout(() => {
      if (contentRef.current) {
        const yOffset = -80; // Offset to keep it below our sticky header bar
        const y = contentRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section
      id="device-guides"
      className="w-full py-12 sm:py-20 bg-slate-50/50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Unified Grid Layout for both Mobile and Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          
          {/* Left Column Sidebar (lg:col-span-4) - Full Width Menu on Mobile */}
          <div className="lg:col-span-4 flex flex-col gap-6 bg-white border border-slate-200 rounded-[12px] p-6 lg:sticky lg:top-24">
            <div>
              <span className="text-[11px] font-bold text-[#E01E26] uppercase tracking-wider block mb-1">
                Installation Guide
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#12141F] mb-1 font-heading">
                Supported Devices for B1G Player
              </h2>
              <p className="text-xs text-slate-500 font-semibold mb-6">
                B1G Player supports a wide range of devices.
              </p>

              {/* Device Tabs Menu */}
              <div className="flex flex-col gap-2.5">
                {deviceGuidesList.map((device) => {
                  const Icon = device.icon;
                  const isActive = activeTab === device.id;
                  return (
                    <button
                      key={device.id}
                      onClick={() => handleTabClick(device.id)}
                      className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-[12px] border transition-all duration-200 focus:outline-none ${
                        isActive
                          ? "border-[#E01E26] bg-red-50/30 text-[#E01E26]"
                          : "border-transparent bg-white hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                            isActive ? "bg-red-100 text-[#E01E26]" : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          <Icon className="h-4.5 w-4.5 stroke-[2]" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold tracking-tight">
                          {device.name}
                        </span>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isActive ? "text-[#E01E26] translate-x-0.5" : "text-slate-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column Content Pane (lg:col-span-8) - Rendered directly below on Mobile */}
          <div
            ref={contentRef}
            className="lg:col-span-8 rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between min-h-[600px] relative scroll-mt-24"
          >
            
            <div>
              {/* Header Title */}
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12141F] mb-3 font-heading">
                {activeGuide.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-6 leading-relaxed max-w-2xl">
                {activeGuide.subtitle}
              </p>

              {/* Tag box for Downloader Code if applicable */}
              {activeGuide.showDownloaderCode && (
                <div className="inline-flex items-center gap-3 p-3 rounded-[12px] border border-red-100 bg-red-50/50 mb-6 select-none">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E01E26] text-white">
                    <Download className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block leading-none mb-0.5">
                      Downloader Code
                    </span>
                    <span className="text-sm font-extrabold text-[#E01E26] leading-none">
                      4172090
                    </span>
                  </div>
                </div>
              )}

              {/* Devices Mockup Image (matches provided screenshot 2) */}
              <div className="relative w-full max-w-md mx-auto my-8 select-none flex items-center justify-center">
                <Image
                  src="/hero-image.PNG"
                  alt="B1G Player Supported Devices mockup"
                  width={500}
                  height={300}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Numbered Steps */}
              <ol className="space-y-6 relative border-l-2 border-slate-100 pl-6 ml-3">
                {activeGuide.steps.map((step, idx) => (
                  <li key={idx} className="relative">
                    {/* Circle number */}
                    <span className="absolute -left-[37px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-red-50 border border-red-100 text-[#E01E26] font-bold text-xs">
                      {idx + 1}
                    </span>
                    
                    <h3 className="text-xs sm:text-sm font-bold text-[#12141F] mb-1.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Note box footer if applicable */}
            {activeGuide.notes && activeGuide.notes.length > 0 && (
              <div className="border-t border-slate-100 pt-5 mt-8 space-y-2">
                {activeGuide.notes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-[#E01E26] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
