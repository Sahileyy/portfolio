"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function PointerHighlight({
  children,
  rectangleClassName,
  pointerClassName,
  containerClassName,
  name,
}: Readonly<{
  children: React.ReactNode;
  rectangleClassName?: string;
  pointerClassName?: string;
  containerClassName?: string;
  name?: string;
}>) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateDimensions);

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <span
      className={cn("relative inline-block w-fit align-middle", containerClassName)}
      ref={containerRef}
    >
      <span className="relative z-10 px-1 py-0.5 inline-block">{children}</span>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <motion.span
          className="pointer-events-none absolute inset-0 z-0 block"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.span
            className={cn(
              "border-blue-500 bg-blue-500/10 dark:bg-blue-400/10 absolute inset-0 rounded-sm border block",
              rectangleClassName
            )}
            initial={{
              width: 0,
              height: dimensions.height,
            }}
            whileInView={{
              width: dimensions.width,
              height: dimensions.height,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
          <motion.span
            className="pointer-events-none absolute inline-flex items-center gap-1"
            initial={{ opacity: 0, x: 0, y: dimensions.height }}
            whileInView={{
              opacity: 1,
              x: dimensions.width + 2,
              y: dimensions.height + 2,
            }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.15, ease: "easeInOut" },
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span style={{ transform: "rotate(-90deg)" }} className="inline-flex">
              <Pointer className={cn("text-blue-500 dark:text-blue-400 h-4 w-4 drop-shadow-sm", pointerClassName)} />
            </span>
            {name && (
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-blue-500 text-white shadow-sm -mt-3 select-none">
                {name}
              </span>
            )}
          </motion.span>
        </motion.span>
      )}
    </span>
  );
}

const Pointer = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
    </svg>
  );
};

export function PointerHighlightDemo() {
  return (
    <div className="mx-auto max-w-lg py-20 text-2xl font-bold tracking-tight md:text-4xl">
      The best way to grow is to{" "}
      <PointerHighlight>
        <span>collaborate</span>
      </PointerHighlight>
    </div>
  );
}
