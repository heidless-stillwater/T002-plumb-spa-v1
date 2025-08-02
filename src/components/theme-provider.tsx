'use client';

import * as React from 'react';
import { appThemes } from '@/lib/themes';

type Theme = {
  name: string;
  light: { [key: string]: string };
  dark: { [key: string]: string };
};

type ThemeProviderState = {
  theme: string;
  mode: 'light' | 'dark';
  setTheme: (theme: string) => void;
  setMode: (mode: 'light' | 'dark') => void;
};

const initialState: ThemeProviderState = {
  theme: 'blue',
  mode: 'light',
  setTheme: () => null,
  setMode: () => null,
};

const ThemeProviderContext =
  React.createContext<ThemeProviderState>(initialState);

function findThemeByName(themeName: string): Theme | undefined {
  const allThemes = [
    ...appThemes.primaryColorsThemes,
    ...appThemes.daisyUIThemes,
    ...appThemes.bespokeThemes,
    ...appThemes.greyscaleThemes,
  ];
  return allThemes.find((t) => t.name === themeName);
}

function useApplyTheme() {
  const [themeName, setThemeName] = React.useState<string>('blue');
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const storedMode = localStorage.getItem('mode');
    if (storedTheme) setThemeName(storedTheme);
    if (storedMode) setMode(storedMode as 'light' | 'dark');
  }, []);

  React.useEffect(() => {
    const theme = findThemeByName(themeName);
    if (!theme) return;
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(mode);
    const themeColors = mode === 'light' ? theme.light : theme.dark;
    for (const [key, value] of Object.entries(themeColors)) {
      root.style.setProperty(key, value);
    }
  }, [themeName, mode]);

  const handleSetTheme = (newThemeName: string) => {
    setThemeName(newThemeName);
    localStorage.setItem('theme', newThemeName);
  };

  const handleSetMode = (newMode: 'light' | 'dark') => {
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  return { themeName, mode, setTheme: handleSetTheme, setMode: handleSetMode };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { themeName, mode, setTheme, setMode } = useApplyTheme();
  
  return (
    <ThemeProviderContext.Provider value={{ theme: themeName, mode, setTheme, setMode }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
