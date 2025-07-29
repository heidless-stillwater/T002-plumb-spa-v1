'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Palette, Paintbrush, SwatchBook, Pipette, Grape, Cog } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';

const customThemes = [
  'forest', 'cyberpunk', 'cupcake', 'bumblebee', 'emerald', 'corporate', 
  'synthwave', 'retro', 'valentine', 'halloween', 'garden', 'aqua', 'lofi', 
  'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 
  'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter'
];

const primaryColors = [
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
];

const greyscaleColors = ['slate', 'gray', 'zinc', 'neutral', 'stone'];

const themePrimaryColors: { [key: string]: string } = {
  forest: '#28a745',
  cyberpunk: '#8a2be2',
  cupcake: '#e83e8c',
  bumblebee: '#ffc107',
  emerald: '#20c997',
  corporate: '#4e73df',
  synthwave: '#ff00ff',
  retro: '#ef7c8e',
  valentine: '#e83e8c',
  halloween: '#ff7f50',
  garden: '#28a745',
  aqua: '#00ffff',
  lofi: '#808080',
  pastel: '#ffc0cb',
  fantasy: '#6f42c1',
  wireframe: '#b8b8b8',
  black: '#000000',
  luxury: '#d4af37',
  dracula: '#ff79c6',
  cmyk: '#00ffff',
  autumn: '#d98c26',
  business: '#1e90ff',
  acid: '#7fff00',
  lemonade: '#f0e68c',
  night: '#343a40',
  coffee: '#6f4e37',
  winter: '#87ceeb',
};


export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [baseTheme, setBaseTheme] = useState('light');

  useEffect(() => {
    setMounted(true);
    if (theme) {
      const currentBase = theme.replace(/-dark$/, '');
      setBaseTheme(currentBase);
    }
  }, [theme]);
  
  if (!mounted) {
    return null;
  }
  
  const isDark = resolvedTheme?.endsWith('-dark') || resolvedTheme === 'dark';

  const handleThemeChange = (newTheme: string) => {
    setBaseTheme(newTheme);
    setTheme(isDark ? `${newTheme}-dark` : newTheme);
  };

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? `${baseTheme}-dark` : baseTheme);
  };
  
  const currentThemeIcon = isDark ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {currentThemeIcon}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-between px-2 py-1.5">
          <span className="text-sm font-medium">Dark Mode</span>
          <Switch
            checked={isDark}
            onCheckedChange={handleToggle}
            aria-label="Toggle dark mode"
          />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Paintbrush className="mr-2 h-4 w-4" />
            <span>Custom</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {customThemes.map((t) => (
                <DropdownMenuItem key={t} onClick={() => handleThemeChange(t)} style={{ color: themePrimaryColors[t] }}>
                  <Pipette className="mr-2 h-4 w-4" style={{ color: themePrimaryColors[t] }} />
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <SwatchBook className="mr-2 h-4 w-4" />
            <span>Primary Colors</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {primaryColors.map((color) => (
                <DropdownMenuItem key={color} onClick={() => handleThemeChange(color)}>
                  <Grape className="mr-2 h-4 w-4" style={{ color }}/>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Palette className="mr-2 h-4 w-4" />
            <span>Greyscale</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {greyscaleColors.map((color) => (
                <DropdownMenuItem key={color} onClick={() => handleThemeChange(color)}>
                   <Cog className="mr-2 h-4 w-4" style={{ color }} />
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
