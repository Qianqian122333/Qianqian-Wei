"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { useSplash } from "./SplashContext";

export default function SplashOverlay() {
  const { entered, enter } = useSplash();
  const [phase, setPhase] = useState<"idle" | "flipping" | "done">("idle");
  const [tilted, setTilted] = useState(false);

  const triggerTilt = useCallback(() => {
    if (tilted || phase !== "idle") return;
    setTilted(true);
    setTimeout(() => setTilted(false), 600);
  }, [tilted, phase]);

  const handleClick = useCallback(() => {
    if (phase !== "idle") return;
    setPhase("flipping");
    setTimeout(() => {
      setPhase("done");
      enter();
    }, 1200);
  }, [phase, enter]);

  // Once entered, don't render overlay
  if (entered || phase === "done") {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 bg-background flex flex-col items-center justify-center gap-8 px-6 ${
        phase === "flipping" ? "pointer-events-none" : ""
      }`}
    >
      {/* Notebook image with hover tilt + click flip */}
      <div
        className="cursor-pointer"
        style={{ perspective: "1200px" }}
        onClick={handleClick}
        onMouseEnter={triggerTilt}
      >
        <Image
          src="/notebook.webp"
          alt="Qianqian's Notebook"
          width={800}
          height={800}
          priority
          className={`w-[450px] sm:w-[600px] md:w-[800px] h-auto object-contain transition-transform ease-out select-none ${
            phase === "flipping"
              ? "splash-book-flip"
              : tilted
                ? "duration-500 rotate-[3deg] scale-[1.02]"
                : "duration-500 rotate-0 scale-100"
          }`}
        />
      </div>

      {/* Text */}
      <div className="text-center font-kalam space-y-2">
        <p className="text-foreground text-xl sm:text-2xl md:text-2xl font-bold">
          You discovered Qianqian&apos;s notebook! 🥺💖
        </p>
        {/* Desktop */}
        <p className="hidden md:block text-primary text-base sm:text-lg md:text-xl splash-hint-pulse">
          Click the notebook to discover her secrets ~ ✨
        </p>
        {/* Mobile */}
        <p className="md:hidden text-primary text-lg sm:text-xl splash-hint-pulse">
          Tap the notebook to discover her secrets ~ ✨
        </p>
      </div>
    </div>
  );
}
