"use client";

import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useIsDesktop } from "@/lib/useIsDesktop";

export default function DesktopSpline() {
  const isDesktop = useIsDesktop();
  const [loaded, setLoaded] = useState(false);

  if (!isDesktop) return null;

  return (
    <div
      className="
        relative
        w-full
        sm:h-[740px]
        overflow-hidden
        flex items-center justify-center
        -mt-30
        dark:-mb-25
      "
    >
      {/* Loader */}
      {!loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="h-8 w-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
        </motion.div>
      )}

      {/* Decorative blobs (desktop only) */}
      <div className="hidden sm:block pointer-events-none absolute left-1/2 -translate-x-1/2 -z-10">
        <div className="absolute -top-70 -left-[45rem] h-[32rem] w-[32rem] rounded-full bg-blue-500/40 dark:bg-blue-500/40 blur-3xl" />
        <div className="absolute -top-20 -right-[36rem] h-[22rem] w-[22rem] rounded-full bg-indigo-500/40 dark:bg-indigo-600/50 blur-3xl" />
      </div>

      {/* Spline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full"
      >
        <Spline
          scene="https://prod.spline.design/QMlYiySQ-OJLDbiS/scene.splinecode"
          onLoad={() => setLoaded(true)}
        />
      </motion.div>
    </div>
  );
}
