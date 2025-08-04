'use client'

import * as React from 'react'
import { Check, Palette, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/components/theme-provider'
import { appThemes, type ThemeCategory, type ThemeDefinition } from '@/lib/themes'
import { Switch } from './ui/switch'

const categoryLabels: Record<ThemeCategory, string> = {
  bespokeThemes: 'Bespoke',
  primaryColorsThemes: 'Primary Colors',
  daisyUIThemes: 'DaisyUI Themes',
  greyscaleThemes: 'Greyscale',
  customThemes: 'Custom',
}

const descriptiveThemeNames: Record<string, string> = {
  'Ruby & Sky': 'Ruby & Sky',
  'Coolish Slate': 'Coolish Slate',
  'Fuchsia & Cyan': 'Fuchsia & Cyan',
  'Indigo & Amber': 'Indigo & Amber',
  'Indigo Night': 'Indigo Night',
  'Emerald Isle': 'Emerald Isle',
  SET_1_PALETTE_0: 'Ocean Breeze',
  SET_1_PALETTE_1: 'Cosmic Indigo',
  SET_1_PALETTE_2: 'Coral Grove',
  SET_1_PALETTE_3: 'Red Sky',
  SET_1_PALETTE_4: 'Cool Slate',
  SET_1_PALETTE_5: 'Pastel Sky',
  SET_1_PALETTE_6: 'Neon Fusion',
  SET_1_PALETTE_7: 'Material Blue',
  SET_1_PALETTE_8: 'Vaporwave Violet',
  SET_1_PALETTE_9: 'Growth Green',
};

function getDescriptiveThemeName(themeName: string): string {
    return descriptiveThemeNames[themeName] || themeName;
}

function ThemeColorSwatch({ theme, size = 'sm' }: { theme: ThemeDefinition; size?: 'sm' | 'md' }) {
    const { mode } = useTheme();
    const sizeClasses = size === 'md' ? 'w-4 h-4' : 'w-3 h-3'

    const primaryColor = theme[mode]['--primary'];
    const accentColor = theme.light['--accent']; // Use a fixed accent for swatch consistency
    
    return (
        <div className="relative flex items-center justify-center" style={{ width: size === 'md' ? '20px' : '16px', height: size === 'md' ? '20px' : '16px' }}>
            <div 
                className={`${sizeClasses} rounded-full border border-border/50`} 
                style={{ backgroundColor: `hsl(${primaryColor})`, position: 'absolute', top: 0, left: 0 }} 
            />
            <div 
                className={`${sizeClasses} rounded-full border border-border/50`} 
                style={{ backgroundColor: `hsl(${accentColor})`, position: 'absolute', bottom: 0, right: 0 }} 
            />
        </div>
    )
}

function ModeToggle() {
  const { mode, toggleMode } = useTheme()

  return (
    <div className="flex items-center justify-between px-2 py-1.5">
        <div className="flex items-center gap-2">
         {mode === 'light' ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
        <span className="text-sm font-medium">{mode === 'light' ? 'Light' : 'Dark'} Mode</span>
        </div>
      <Switch checked={mode === 'dark'} onCheckedChange={toggleMode} aria-label="Toggle dark mode" />
    </div>
  )
}

function ThemeMenuItem({ theme, category, isActive }: { 
  theme: ThemeDefinition; 
  category: ThemeCategory;
  isActive: boolean;
}) {
  const { setColorTheme } = useTheme()

  return (
    <DropdownMenuItem
      onClick={() => setColorTheme(category, theme.name)}
      className="flex items-center justify-between gap-2 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        {theme.symbol && (
          <span className="text-sm font-medium" style={{ color: `hsl(${theme.swatchColor})` }}>
            {theme.symbol}
          </span>
        )}
        <span>{getDescriptiveThemeName(theme.name)}</span>
      </div>
      <div className="flex items-center gap-2">
        <ThemeColorSwatch theme={theme} />
        {isActive && <Check className="h-4 w-4" />}
      </div>
    </DropdownMenuItem>
  )
}

export function ThemeSwitcher() {
  const { colorTheme, category: activeCategory } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="end">
        <ModeToggle />
        <DropdownMenuSeparator />
        
        {(Object.keys(appThemes) as ThemeCategory[]).map((cat) => (
          appThemes[cat].length > 0 &&
          <DropdownMenuSub key={cat}>
            <DropdownMenuSubTrigger>
              <Palette className="mr-2 h-4 w-4" />
              <span>{categoryLabels[cat]}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-48 max-h-96 overflow-y-auto">
              {appThemes[cat].map((theme) => (
                <ThemeMenuItem
                  key={theme.name}
                  theme={theme}
                  category={cat}
                  isActive={colorTheme === theme.name && activeCategory === cat}
                />
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}