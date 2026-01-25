"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type LampDividerProps = {
  className?: string;
  /** Height in px */
  height?: number;
};

export function LampDivider({ className, height = 220 }: LampDividerProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden bg-black", className)}
      style={{ height }}
      aria-hidden="true"
    >
      {/* Original lamp shape, cropped to divider height */}
      <div className="relative flex h-full w-full items-start justify-center isolate">
        {/* Left cone (wider than original, so it feels full-width) */}
        <motion.div
          initial={{ opacity: 0.35, width: "22rem" }}
          whileInView={{ opacity: 1, width: "46rem" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 top-[-22px] h-56 w-[46rem] overflow-visible bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          {/* mask bottom + left to avoid "cyan rectangle" */}
          <div className="absolute bottom-0 left-0 h-40 w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 h-full w-44 bg-black [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right cone */}
        <motion.div
          initial={{ opacity: 0.35, width: "22rem" }}
          whileInView={{ opacity: 1, width: "46rem" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 top-[-22px] h-56 w-[46rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute bottom-0 right-0 h-full w-44 bg-black [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 h-40 w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* soften center / remove harsh banding */}
        <div className="absolute top-1/2 h-48 w-full translate-y-10 scale-x-150 bg-black blur-2xl" />
        <div className="absolute top-1/2 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* center glow */}
        <div className="absolute top-10 h-36 w-[32rem] rounded-full bg-cyan-500/50 blur-3xl" />

        {/* divider line = the actual boundary */}
        <motion.div
          initial={{ opacity: 0, width: "18rem" }}
          whileInView={{ opacity: 1, width: "52rem" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-cyan-400/70"
        />

        {/* bottom fade to ensure ambitions starts clean */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-black" />
      </div>
    </div>
  );
}