"use client";

import { ChartThemeProvider } from "@/components/provider/chart-theme-provider";
import { ThemeProvider } from "@/components/provider/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ChartThemeProvider>{children}</ChartThemeProvider>
    </ThemeProvider>
  );
}
