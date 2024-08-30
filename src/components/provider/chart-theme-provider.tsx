"use client";

import { useTheme } from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { ITheme, ThemeManager } from "@visactor/vchart";
import defaultDarkTheme from "@visactor/vchart-theme/public/dark.json";
import defaultLightTheme from "@visactor/vchart-theme/public/light.json";
// import mobileDarkTheme from "@visactor/vchart-theme/public/mobileDark.json";
import mobileLightTheme from "@visactor/vchart-theme/public/mobileLight.json";
import { customDarkTheme, customLightTheme } from "@/config/chart-theme";

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
        ThemeManager.setCurrentTheme(formalThemeName(modeTheme));
      } else if (modeTheme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        setTheme("system");
        ThemeManager.setCurrentTheme(formalThemeName(systemTheme));
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
      ? (defaultDarkTheme as unknown as Partial<ITheme>)
      : (defaultDarkTheme as unknown as Partial<ITheme>)),
    ...customDarkTheme,
    fontFamily: font,
  };
  // TODO: hover color bug when change theme
  ThemeManager.registerTheme(formalThemeName("light"), lightTheme);
  // console.log("all theme 1", ThemeManager.themeExist("dark"));
  ThemeManager.registerTheme(formalThemeName("dark"), darkTheme);
  // console.log("all theme 2", ThemeManager.themeExist("dark"));
};

const formalThemeName = (theme: ChartTheme) => {
  // ? DISCUSS: we have only "light" theme in the ThemeManager by default
  // ?          register "light" theme will have some kind of conflict
  // ?          but even "dark" theme is not in the ThemeManager by default
  // ?          register "dark" theme will still have some kind of conflict
  // ?          This may due to the strict mode in development environment
  // ?          Uncomment the return and console.log(theme, exist) codes to explore more
  // return theme;
  return `custom${theme.charAt(0).toUpperCase() + theme.slice(1)}`;
};
