"use client";

import { useState } from "react";

type Offset = { x: number; y: number };

const darkenColor = (hex: string, percent: number) => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;

  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;

  r = Math.max(0, Math.floor(r * (1 - percent)));
  g = Math.max(0, Math.floor(g * (1 - percent)));
  b = Math.max(0, Math.floor(b * (1 - percent)));

  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase()
  );
};

interface FolderProps {
  color?: string;
  items?: React.ReactNode[];
  className?: string;
}

export default function Folder({
  color = "#5227FF",
  items = [],
  className = "",
}: FolderProps) {
  const maxItems = 3;
  const papers = [...items.slice(0, maxItems)];

  while (papers.length < maxItems) papers.push(null);

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState<Offset[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const folderBack = darkenColor(color, 0.08);
  const paper1 = darkenColor("#ffffff", 0.1);
  const paper2 = darkenColor("#ffffff", 0.05);

  const handleClick = () => {
    setOpen((prev) => !prev);
    if (open) {
      setPaperOffsets(
        Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
      );
      setHoveredIndex(null);
    }
  };

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    index: number
  ) => {
    if (!open) return;
    setHoveredIndex(index);

    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    let x, y;
    if ("touches" in e) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
    } else {
        x = e.clientX;
        y = e.clientY;
    }

    const offsetX = (x - (rect.left + rect.width / 2)) * 0.15;
    const offsetY = (y - (rect.top + rect.height / 2)) * 0.15;

    setPaperOffsets((prev) => {
      const copy = [...prev];
      copy[index] = { x: offsetX, y: offsetY };
      return copy;
    });
  };

  const handleLeave = (index: number) => {
    setHoveredIndex(null);
    setPaperOffsets((prev) => {
      const copy = [...prev];
      copy[index] = { x: 0, y: 0 };
      return copy;
    });
  };

  return (
    <div className={`inline-block ${className}`}>
      <div
        onClick={handleClick}
        className={`
          relative cursor-pointer transition-all duration-200
          w-[clamp(120px,30vw,220px)]
          aspect-[5/4]
          ${open ? "-translate-y-1" : "hover:-translate-y-1"}
        `}
      >
        {/* BACK PANEL */}
        <div
          className="relative w-full h-full rounded-b-xl rounded-tr-xl"
          style={{ background: folderBack }}
        >
          {/* TAB */}
          <div
            className="absolute bottom-[98%] left-0 w-[25%] h-[12%] rounded-t-md"
            style={{ background: folderBack }}
          />

          {/* PAPERS */}
          {papers.map((item, index) => {
            const baseTransform = open
              ? index === 0
                ? `translate(-120%, -70%) rotate(-15deg)`
                : index === 1
                ? `translate(10%, -70%) rotate(15deg)`
                : `translate(-50%, -110%) rotate(5deg)`
              : `translate(-50%, 10%)`;

            const paperColor = index === 0 ? "#fee2e2" : index === 1 ? "#dbeafe" : "#fef9c3";

            return (
              <div
                key={index}
                onMouseMove={(e) => handleMove(e, index)}
                onTouchMove={(e) => handleMove(e, index)}
                onMouseLeave={() => handleLeave(index)}
                onTouchEnd={() => handleLeave(index)}
                className={`
                  absolute rounded-md rounded-tl-none transition-all duration-700 ease-out
                  hover:scale-110
                `}
                style={{
                  zIndex: hoveredIndex === index ? 50 : 20 + index, 
                  bottom: "10%",
                  left: "50%",
                  width: `${70 + index * 10}%`,
                  height: `${80 - index * 10}%`,
                  background: paperColor,
                  transform: `
                    ${baseTransform}
                    translate(${paperOffsets[index].x}px, ${paperOffsets[index].y}px)
                  `,
                }}
              >
                {/* Mini Folder Tab */}
                <div 
                    className="absolute bottom-full left-0 w-1/3 h-[15%] rounded-t-lg"
                    style={{ background: paperColor }}
                />
                {item}
              </div>
            );
          })}

          {/* FRONT LEFT */}
          <div
            className="absolute z-30 w-full h-full rounded-xl origin-bottom transition-all duration-300"
            style={{
              background: color,
              transform: open
                ? "skew(15deg) scaleY(0.6)"
                : "skew(0deg) scaleY(1)",
            }}
          />

          {/* FRONT RIGHT */}
          <div
            className="absolute z-30 w-full h-full rounded-xl origin-bottom transition-all duration-300"
            style={{
              background: color,
              transform: open
                ? "skew(-15deg) scaleY(0.6)"
                : "skew(0deg) scaleY(1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
