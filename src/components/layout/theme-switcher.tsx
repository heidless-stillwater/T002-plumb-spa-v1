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
                <DropdownMenuItem key={t} onClick={() => handleThemeChange(t)}>
                  <Pipette className="mr-2 h-4 w-4" style={{ color: `hsl(var(--primary))`}} />
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
