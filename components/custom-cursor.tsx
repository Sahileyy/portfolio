"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Smooth springs for cursor position
  const cursorX = useSpring(-100, { damping: 28, stiffness: 350, mass: 0.5 });
  const cursorY = useSpring(-100, { damping: 28, stiffness: 350, mass: 0.5 });
  const dotX = useSpring(-100, { damping: 40, stiffness: 1200, mass: 0.1 });
  const dotY = useSpring(-100, { damping: 40, stiffness: 1200, mass: 0.1 });

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse)
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) {
        cursorX.jump(e.clientX);
        cursorY.jump(e.clientY);
        dotX.jump(e.clientX);
        dotY.jump(e.clientY);
        setIsVisible(true);
      } else {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        dotX.set(e.clientX);
        dotY.set(e.clientY);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor='pointer'], summary"
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden hidden md:block">
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none transition-[width,height,background-color,border-color] duration-150 ease-out"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 40 : 26,
          height: isHovered ? 40 : 26,
          scale: isClicked ? 0.8 : 1,
          borderColor: isHovered ? "rgba(59, 130, 246, 0.7)" : "rgba(142, 141, 136, 0.45)",
          backgroundColor: isHovered ? "rgba(59, 130, 246, 0.12)" : "rgba(142, 141, 136, 0.04)",
        }}
      />

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none transition-colors duration-150"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 6 : 4,
          height: isHovered ? 6 : 4,
          backgroundColor: isHovered ? "#3b82f6" : "#EDEDEB",
        }}
      />
    </div>
  );
}
