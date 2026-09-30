"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(255, 255, 255)",
  width,
  height,
  className,
  maxOpacity = 0.3,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const lastDimensionsRef = useRef({ width: 0, height: 0 });

  const memoizedColor = useMemo(() => {
    const toRGBA = (colorStr: string) => {
      if (typeof window === "undefined") {
        return "rgba(255, 255, 255,";
      }
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) return "rgba(255, 255, 255,";
      ctx.fillStyle = colorStr;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
      return `rgba(${r}, ${g}, ${b},`;
    };
    return toRGBA(color);
  }, [color]);

  const palette = useMemo(() => {
    const list: string[] = [];
    const steps = 60;
    for (let i = 0; i <= steps; i++) {
      const alpha = (i / steps) * maxOpacity;
      list.push(`${memoizedColor}${alpha.toFixed(3)})`);
    }
    return list;
  }, [memoizedColor, maxOpacity]);

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, w: number, h: number) => {
      const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      const cols = Math.floor(w / (squareSize + gridGap));
      const rows = Math.floor(h / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }

      return { cols, rows, squares, dpr };
    },
    [squareSize, gridGap, maxOpacity]
  );

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity]
  );

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number
    ) => {
      ctx.clearRect(0, 0, w, h);

      const dprStep = (squareSize + gridGap) * dpr;
      const dprSize = squareSize * dpr;
      const paletteLen = palette.length - 1;
      const invMax = maxOpacity > 0 ? 1 / maxOpacity : 1;

      for (let i = 0; i < cols; i++) {
        const x = i * dprStep;
        for (let j = 0; j < rows; j++) {
          const opacity = squares[i * rows + j];
          if (opacity <= 0.005) continue;
          const idx = Math.min(paletteLen, Math.max(0, Math.round(opacity * invMax * paletteLen)));
          ctx.fillStyle = palette[idx];
          ctx.fillRect(x, j * dprStep, dprSize, dprSize);
        }
      }
    },
    [palette, squareSize, gridGap, maxOpacity]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let gridParams: ReturnType<typeof setupCanvas>;

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth;
      const newHeight = height || container.clientHeight;
      if (!newWidth || !newHeight) return;

      const prev = lastDimensionsRef.current;
      // On mobile, scrolling collapses/expands the address bar by ~50-80px.
      // Avoid resetting canvas buffer if width is unchanged and height changed by < 150px.
      const widthChanged = Math.abs(newWidth - prev.width) > 2;
      const heightChanged = Math.abs(newHeight - prev.height) > 150;

      if (prev.width > 0 && !widthChanged && !heightChanged) {
        return;
      }

      lastDimensionsRef.current = { width: newWidth, height: newHeight };
      gridParams = setupCanvas(canvas, newWidth, newHeight);
    };

    updateCanvasSize();

    let lastRenderTime = 0;
    const FRAME_INTERVAL = 1000 / 24; // ~24 fps = organic ambient flicker with zero CPU contention

    const animate = (time: number) => {
      if (!isInView) return;
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = time - lastRenderTime;
      if (elapsed < FRAME_INTERVAL) return;

      const deltaTime = elapsed / 1000;
      lastRenderTime = time;

      if (gridParams) {
        updateSquares(gridParams.squares, deltaTime);
        drawGrid(
          ctx,
          canvas.width,
          canvas.height,
          gridParams.cols,
          gridParams.rows,
          gridParams.squares,
          gridParams.dpr
        );
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);

  return (
    <div
      ref={containerRef}
      className={cn("h-full w-full pointer-events-none select-none touch-none will-change-transform transform-gpu", className)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none select-none touch-none w-full h-full block will-change-transform transform-gpu"
      />
    </div>
  );
};
