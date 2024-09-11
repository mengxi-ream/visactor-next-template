import type { ITheme } from "@visactor/vchart";

const customCommonTheme: Partial<ITheme> = {};
export const customDarkTheme: Partial<ITheme> = {
  ...customCommonTheme,
  background: "#020817",
};
export const customLightTheme: Partial<ITheme> = { ...customCommonTheme };
