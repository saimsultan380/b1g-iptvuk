"use client";

import { useEffect } from "react";
import { isClickSoundControl, playButtonClickSound } from "@/lib/click-sound";

export function ButtonClickSound() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.button !== 0) return;
      if (!isClickSoundControl(event.target)) return;
      playButtonClickSound();
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
