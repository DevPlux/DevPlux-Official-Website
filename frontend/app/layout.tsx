import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import BackgroundEffects from "@/components/background-effects";
import ThemeTransition from "@/components/theme-transition";
import ToastProvider from "@/components/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevPlux IT Solutions",
  description:
    "DevPlux Technologies builds modern software solutions, including web, mobile, and AI-powered systems for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-black dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Light Mode Backgrounds (Lighter Blues) */}
        <div
          className="bg-[#93c5fd] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] opacity-70
  sm:w-[68.75rem] dark:bg-[#3b82f6] dark:opacity-90"
        ></div>

        <div
          className="bg-[#7dd3fc] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] opacity-60
  sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#0ea5e9] dark:opacity-80"
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Navbar />
            <BackgroundEffects />

            {/* Theme Transition */}
            <ThemeTransition />

            {children}

            <ToastProvider />

            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
