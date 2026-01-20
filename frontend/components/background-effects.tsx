"use client";

import { useTheme } from "@/context/theme-context";
import StarsCanvas from "@/components/space";

export default function BackgroundEffects() {
  const { theme } = useTheme();

  // Only render stars in dark mode
  if (theme !== "dark") return null;

  return <StarsCanvas />;
}
