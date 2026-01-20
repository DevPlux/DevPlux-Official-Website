"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isTransitioning: boolean;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleTheme = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setTheme((prev) => {
        const next = prev === "light" ? "dark" : "light";
        document.documentElement.classList.toggle("dark", next === "dark");
        localStorage.setItem("theme", next);
        return next;
      });
    }, 180); // 👈 sync with overlay mid-animation
  };

  // 🔑 stop transition after animation duration
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 700); // must match overlay animation

      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;

    if (stored) {
      setTheme(stored);
      if (stored === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useTheme must be used inside ThemeContextProvider");
  return ctx;
}
