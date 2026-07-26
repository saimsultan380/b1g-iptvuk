"use client";

import React from "react";
import Image from "next/image";

export function B1GHeroMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none py-2 flex items-center justify-center">
      <div className="relative w-full flex items-center justify-center">
        <Image
          src="/hero-image.PNG"
          alt="B1G Player App Interface Preview"
          width={1000}
          height={600}
          priority
          className="w-full h-auto object-contain max-h-[45vh] sm:max-h-[55vh] lg:max-h-none"
        />
      </div>
    </div>
  );
}
