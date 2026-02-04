"use client";

import { useRef } from "react";
// import VariableProximity from "@/components/VariableProximity"; // this is your uploaded file

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-[65vh] flex flex-col justify-center px-8 lg:px-24 py-24 bg-[#f2f2f2]"
    >
      {/* VariableProximity is missing
      <VariableProximity
        label="Hey, I'm Sahil. I build websites and MERN stack applications as a developer and freelancer. No big words — just real work and the projects that shaped my journey."
        fromFontVariationSettings="'wght' 400"
        toFontVariationSettings="'wght' 900"
        containerRef={containerRef}
        radius={120}
        className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900 max-w-4xl"
      />
      */}
      <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900 max-w-4xl">
         Hey, I'm Sahil. I build websites and MERN stack applications.
      </div>

      {/* Optional CTA buttons */}
      <div className="mt-10 flex gap-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-lg text-lg font-medium hover:opacity-80 transition"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="px-6 py-3 bg-white border border-black rounded-lg text-lg font-medium hover:bg-black hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
