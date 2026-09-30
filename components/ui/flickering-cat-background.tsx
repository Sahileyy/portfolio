"use client";

import React from "react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { CAT_MASK } from "@/components/ui/cat-mask";
import { cn } from "@/lib/utils";

const maskStyles: React.CSSProperties = {
  WebkitMaskImage: `url('${CAT_MASK}')`,
  WebkitMaskSize: "var(--cat-mask-size, min(85vw, 680px))",
  WebkitMaskPosition: "var(--cat-mask-pos, 130px calc(50% + 45px))",
  WebkitMaskRepeat: "no-repeat",
  maskImage: `url('${CAT_MASK}')`,
  maskSize: "var(--cat-mask-size, min(85vw, 680px))",
  maskPosition: "var(--cat-mask-pos, 130px calc(50% + 45px))",
  maskRepeat: "no-repeat",
};

interface FlickeringCatBackgroundProps {
  className?: string;
  gridColor?: string;
  catColor?: string;
}

export function FlickeringCatBackground({
  className,
  gridColor = "#FFFFFF",
  catColor = "#FFFFFF",
}: FlickeringCatBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-start select-none",
        className
      )}
    >
      {/* Background ambient flickering dots with soft radial gradient */}
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(900px_circle_at_35%_center,white,transparent)] motion-safe:animate-pulse opacity-20 md:opacity-30 dark:opacity-25 md:dark:opacity-35"
        squareSize={3}
        gridGap={5}
        color={gridColor}
        maxOpacity={0.05}
        flickerChance={0.12}
      />

      {/* Cat silhouette flickering dots (responsive: smaller & centered on mobile, larger & left-offset on desktop) */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center md:justify-start motion-safe:animate-fade-in [--cat-mask-size:min(70vw,260px)] [--cat-mask-pos:center_195px] md:[--cat-mask-size:min(85vw,680px)] md:[--cat-mask-pos:130px_calc(50%_+_45px)] opacity-75 md:opacity-100"
        style={{
          ...maskStyles,
          animation: "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      >
        <FlickeringGrid
          squareSize={2}
          gridGap={2.5}
          color={catColor}
          maxOpacity={0.34}
          flickerChance={0.2}
        />
      </div>
    </div>
  );
}

export const FlickeringGridDemo2 = FlickeringCatBackground;
export default FlickeringCatBackground;
