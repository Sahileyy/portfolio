"use client";

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

export default function HeroSection() {
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

      {/* <div className="mt-6 flex flex-wrap items-center gap-2">
        <a
          href="https://www.linkedin.com/in/sahil-krishna-cb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#EAE8E2] dark:border-[#242321] bg-[#F3F2EE]/60 dark:bg-[#1B1A19]/60 text-[#141413] dark:text-[#EDEDEB] hover:bg-[#EAE8E2] dark:hover:bg-[#242321] hover:border-[#D5D3CC] dark:hover:border-[#383734] transition-all"
        >
          <Linkedin size={13} className="shrink-0 text-[#84837E] dark:text-[#8E8D88]" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/Sahileyy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#EAE8E2] dark:border-[#242321] bg-[#F3F2EE]/60 dark:bg-[#1B1A19]/60 text-[#141413] dark:text-[#EDEDEB] hover:bg-[#EAE8E2] dark:hover:bg-[#242321] hover:border-[#D5D3CC] dark:hover:border-[#383734] transition-all"
        >
          <Github size={13} className="shrink-0 text-[#84837E] dark:text-[#8E8D88]" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.instagram.com/sahilkrishna.cb?igsh=MWpsdXR1MGJ2N2VqZw=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#EAE8E2] dark:border-[#242321] bg-[#F3F2EE]/60 dark:bg-[#1B1A19]/60 text-[#141413] dark:text-[#EDEDEB] hover:bg-[#EAE8E2] dark:hover:bg-[#242321] hover:border-[#D5D3CC] dark:hover:border-[#383734] transition-all"
        >
          <Instagram size={13} className="shrink-0 text-[#84837E] dark:text-[#8E8D88]" />
          <span>Instagram</span>
        </a>
        <a
          href="mailto:sahilkrishnacb@gmail.com"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#EAE8E2] dark:border-[#242321] bg-[#F3F2EE]/60 dark:bg-[#1B1A19]/60 text-[#141413] dark:text-[#EDEDEB] hover:bg-[#EAE8E2] dark:hover:bg-[#242321] hover:border-[#D5D3CC] dark:hover:border-[#383734] transition-all"
        >
          <Mail size={13} className="shrink-0 text-[#84837E] dark:text-[#8E8D88]" />
          <span>Email</span>
        </a>
      </div> */}
    </section>
  );
}
