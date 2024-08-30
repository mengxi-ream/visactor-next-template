"use client";

import { ChartThemeProvider } from "@/components/provider/chart-theme-provider";
import { ModeThemeProvider } from "@/components/provider/mode-theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModeThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ChartThemeProvider>{children}</ChartThemeProvider>
    </ModeThemeProvider>
  );
}
