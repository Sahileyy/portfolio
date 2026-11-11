"use client";

import { FileText } from "lucide-react";
import {
  SketchBrands,
  SketchBusinesses,
  SketchDesignDev,
  SketchCreate,
  SketchMade,
  SketchFreelance,
  SketchWebsites,
  SketchGlobe,
} from "./sketch-icons";

interface HeroSectionProps {
  onOpenCv?: () => void;
}

export default function HeroSection({ onOpenCv }: HeroSectionProps) {
  return (
    <section id="home" className="max-w-2xl">
      <div className="space-y-2.5 sm:space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-lg sm:text-2xl font-medium tracking-tight text-balance text-[#141413] dark:text-[#EDEDEB]">
            Sahil Krishna
          </h1>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#84837E] dark:text-[#8E8D88] font-mono">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500"></span>
            </span>
            <span>available for work</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
          <h2 className="text-xs sm:text-base text-[#84837E] dark:text-[#8E8D88] text-balance">
            Full-Stack Developer &amp; Software Engineer
          </h2>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-sm text-[#84837E] dark:text-[#8E8D88]">
            <SketchGlobe size={13} className="w-3.5 h-3.5 shrink-0" />
            <span>Kerala, India</span>
          </div>
        </div>
      </div>

      <div className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4 text-[13.5px] sm:text-base leading-relaxed text-[#5E5D59] dark:text-[#A3A29D]">
        <p>
          I design and build{" "}
          <span className="whitespace-nowrap">
            brands
            <span className="inline-flex items-center align-[-0.15em] ml-[5px]">
              <SketchBrands />
            </span>
            ,
          </span>{" "}
          interfaces, applications, and digital products for{" "}
          <span className="whitespace-nowrap">
            businesses
            <span className="inline-flex items-center align-[-0.15em] ml-[5px]">
              <SketchBusinesses />
            </span>
          </span>{" "}
          and founders turning ideas into something real. I bring{" "}
          <span className="whitespace-nowrap">
            <span className="animated-underline text-[#141413] dark:text-[#EDEDEB]">
              design and development
            </span>
            <span className="inline-flex items-center align-[-0.15em] ml-[5px]">
              <SketchDesignDev />
            </span>
          </span>{" "}
          together to{" "}
          <span className="whitespace-nowrap">
            create
            <span className="inline-flex items-center align-[-0.15em] ml-[5px]">
              <SketchCreate />
            </span>
          </span>{" "}
          work that feels distinctive, intuitive, and thoughtfully{" "}
          <span className="whitespace-nowrap">
            made
            <span className="inline-flex items-center align-[-0.15em] ml-[5px]">
              <SketchMade />
            </span>
            .
          </span>
        </p>

        <p>
          Available for{" "}
          <span className="whitespace-nowrap">
            <span className="animated-underline text-[#141413] dark:text-[#EDEDEB]">
              freelance projects &amp; engineering roles
            </span>
            <span className="inline-flex items-center align-[-0.15em] ml-[5px]">
              <SketchFreelance />
            </span>
          </span>{" "}
          across full-stack Next.js and Node.js solutions, UI systems,{" "}
          <span className="whitespace-nowrap">
            websites
            <span className="inline-flex items-center align-[-0.15em] ml-[5px]">
              <SketchWebsites />
            </span>
            ,
          </span>{" "}
          SaaS applications, and custom cloud architecture.
        </p>
      </div>

      {/* CV Call-To-Action (Matching Theme & Design) */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenCv}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[#141413] dark:bg-[#EDEDEB] text-[#FAFAF8] dark:text-[#121211] hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-xs"
            >
              <FileText size={14} />
              <span>View CV</span>
              <span className="text-[10px] sm:text-xs opacity-60 font-mono">PDF</span>
            </button>
      </div>
    </section >
  );
}
