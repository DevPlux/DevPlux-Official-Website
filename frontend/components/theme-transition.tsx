"use client";

import { useTheme } from "@/context/theme-context";
import ThemeTransitionOverlay from "@/components/theme-transition-overlay";

export default function ThemeTransition() {
  const { isTransitioning } = useTheme();
  return <ThemeTransitionOverlay isActive={isTransitioning} />;
}
