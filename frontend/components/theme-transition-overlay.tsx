"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ThemeTransitionOverlay({
  isActive,
}: {
  isActive: boolean;
}) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="
            fixed inset-0 z-[9999]
            pointer-events-none
            bg-gradient-to-br
            from-slate-900 via-black to-slate-800
          "
          initial={{
            clipPath: "circle(0% at 0% 0%)",
          }}
          animate={{
            clipPath: "circle(150% at 100% 100%)",
          }}
          exit={{
            clipPath: "circle(0% at 100% 100%)",
          }}
          transition={{
            duration: 0.45, // 🔑 shorter = smoother
            ease: [0.4, 0, 0.2, 1], // material easing
          }}
        />
      )}
    </AnimatePresence>
  );
}
