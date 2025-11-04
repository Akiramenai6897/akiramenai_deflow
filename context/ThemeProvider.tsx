"use client";

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

const AppThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default AppThemeProvider;
