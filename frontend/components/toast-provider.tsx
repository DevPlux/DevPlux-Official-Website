"use client";

import { Toaster } from "react-hot-toast";
import { useTheme } from "@/context/theme-context";

export default function ToastProvider() {
  const { theme } = useTheme();

  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: "",
        style: {
          background: theme === "dark" ? "#1f2937" : "#ffffff",
          color: theme === "dark" ? "#f9fafb" : "#111827",
          border: `1px solid ${theme === "dark" ? "#374151" : "#e5e7eb"}`,
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
          padding: "0.75rem 1rem",
        },
        success: {
          style: {
            background: theme === "dark" ? "#065f46" : "#ecfdf5",
            color: theme === "dark" ? "#d1fae5" : "#065f46",
            border: `1px solid ${theme === "dark" ? "#047857" : "#a7f3d0"}`,
          },
          iconTheme: {
            primary: theme === "dark" ? "#10b981" : "#059669",
            secondary: theme === "dark" ? "#d1fae5" : "#ecfdf5",
          },
        },
        error: {
          style: {
            background: theme === "dark" ? "#7f1d1d" : "#fef2f2",
            color: theme === "dark" ? "#fecaca" : "#991b1b",
            border: `1px solid ${theme === "dark" ? "#991b1b" : "#fecaca"}`,
          },
          iconTheme: {
            primary: theme === "dark" ? "#f87171" : "#dc2626",
            secondary: theme === "dark" ? "#fef2f2" : "#fee2e2",
          },
        },
        loading: {
          style: {
            background: theme === "dark" ? "#374151" : "#f9fafb",
            color: theme === "dark" ? "#d1d5db" : "#4b5563",
            border: `1px solid ${theme === "dark" ? "#4b5563" : "#d1d5db"}`,
          },
        },
      }}
    />
  );
}
