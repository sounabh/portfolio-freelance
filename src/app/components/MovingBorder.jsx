"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/app/libs/utils";

export function Button({
  borderRadius = "1rem",
  children,
  as: Component = "div",
  containerClassName,
  borderClassName,
  duration = 1500, // Faster default duration
  className,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        "relative h-16 w-[700px] overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="25%" ry="25%">
          <div
            className={cn(
              "h-[320px] w-[320px] bg-[radial-gradient(#ff0000_40%,transparent_65%)] opacity-[0.8]", // Increased size and red glow
              borderClassName
            )}
          />
        </MovingBorder>
      </div>
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center gap-4 border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl px-4",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 1500, // Faster animation
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).y
  );

  const opacity = useTransform(progress, (val) => {
    if (!pathRef.current) return 1;
    
    const totalLength = pathRef.current.getTotalLength();
    const progressRatio = val / totalLength;
    
    // Fully visible during top and right edges
    if (progressRatio < 0.5) return 1;
    
    // Fade out during bottom edge (right to left)
    if (progressRatio < 0.75) {
      return 1 - (progressRatio - 0.5) * 4; // Faster fade out
    }
    
    // Fade in during left edge
    return (progressRatio - 0.75) * 4; // Faster fade in
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
          opacity,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};