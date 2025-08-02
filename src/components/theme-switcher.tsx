'use client';

import * as React from 'react';
import { Moon, Sun, Check, Palette } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { appThemes } from '@/lib/themes';

const ThemeSymbol = ({ symbol }: { symbol?: 'circle' | 'square' | 'star' }) => {
  if (!symbol) return null;
  const symbolMap = {
    circle: '●',
    square: '■',
    star: '★',
  };
  return <span className="mr-2">{symbolMap[symbol]}</span>;
};

export function ThemeSwitcher() {
  const { theme, mode, setTheme, setMode } = useTheme();

  const renderThemeMenuItems = (
    themes: typeof appThemes.primaryColorsThemes
  ) => {
    return themes.map((t) => (
      <DropdownMenuItem key={t.name} onClick={() => setTheme(t.name)}>
        <div
          className="mr-2 h-4 w-4 rounded-sm border"
          style={{ backgroundColor: t.swatchColor }}
        />
        <ThemeSymbol symbol={t.symbol} />
        <span className="capitalize">{t.name}</span>
        {theme === t.name && <Check className="ml-auto h-4 w-4" />}
      </DropdownMenuItem>
    ));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-between px-2 py-1.5">
          <span className="text-sm font-medium">Mode</span>
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            <Switch
              checked={mode === 'dark'}
              onCheckedChange={(checked) => setMode(checked ? 'dark' : 'light')}
              aria-label="Toggle dark mode"
            />
            <Moon className="h-4 w-4" />
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Primary Colors</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {renderThemeMenuItems(appThemes.primaryColorsThemes)}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>DaisyUI</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {appThemes.daisyUIThemes.length > 0 ? (
                renderThemeMenuItems(appThemes.daisyUIThemes)
              ) : (
                <DropdownMenuItem disabled>No themes</DropdownMenuItem>
              )}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Bespoke</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {appThemes.bespokeThemes.length > 0 ? (
                renderThemeMenuItems(appThemes.bespokeThemes)
              ) : (
                <DropdownMenuItem disabled>No themes</DropdownMenuItem>
              )}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Greyscale</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {appThemes.greyscaleThemes.length > 0 ? (
                renderThemeMenuItems(appThemes.greyscaleThemes)
              ) : (
                <DropdownMenuItem disabled>No themes</DropdownMenuItem>
              )}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
