"use client";

import { useTheme } from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { ITheme, ThemeManager } from "@visactor/vchart";
import defaultDarkTheme from "@visactor/vchart-theme/public/dark.json";
import defaultLightTheme from "@visactor/vchart-theme/public/light.json";
import mobileDarkTheme from "@visactor/vchart-theme/public/mobileDark.json";
import mobileLightTheme from "@visactor/vchart-theme/public/mobileLight.json";
import { customDarkTheme, customLightTheme } from "@/lib/constants";

type ChartTheme = "light" | "dark" | "system";

interface ChartThemeContextI {
  theme: ChartTheme | undefined;
}

export const ChartThemeContext = createContext<ChartThemeContextI>({
  theme: undefined,
});

export function ChartThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme: modeTheme } = useTheme();
  const [theme, setTheme] = useState<ChartTheme>("system");

  useEffect(() => {
    registerTheme();
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      if (modeTheme === "light" || modeTheme === "dark") {
        setTheme(modeTheme);
        ThemeManager.setCurrentTheme(modeTheme);
      } else if (modeTheme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        setTheme("system");
        ThemeManager.setCurrentTheme(systemTheme);
      }
    };

    updateTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (modeTheme === "system") {
        updateTheme();
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [modeTheme]);

  return (
    <ChartThemeContext.Provider value={{ theme }}>
      {children}
    </ChartThemeContext.Provider>
  );
}

export function useChartTheme() {
  const context = useContext(ChartThemeContext);
  if (!context) {
    throw new Error("useChartTheme must be used within a ChartThemeProvider");
  }
  return context;
}

const registerTheme = () => {
  // Temporary solution to get the font from the body
  // issue: https://github.com/VisActor/VChart/issues/3145
  const font = window
    .getComputedStyle(document.body)
    .getPropertyValue("--font-gabarito")
    .trim();
  const lightTheme: Partial<ITheme> = {
    ...(isMobile
      ? (mobileLightTheme as unknown as Partial<ITheme>)
      : (defaultLightTheme as unknown as Partial<ITheme>)),
    ...customLightTheme,
    fontFamily: font,
  };
  const darkTheme: Partial<ITheme> = {
    ...(isMobile
      ? (mobileDarkTheme as unknown as Partial<ITheme>)
      : (defaultDarkTheme as unknown as Partial<ITheme>)),
    ...customDarkTheme,
    fontFamily: font,
  };
  ThemeManager.registerTheme("light", lightTheme);
  ThemeManager.registerTheme("dark", darkTheme);
};
