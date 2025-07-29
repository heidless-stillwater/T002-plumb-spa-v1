'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { 
  Sun, Moon, Palette, Paintbrush, SwatchBook, Pipette, Grape, Cog,
  Trees, Terminal, CakeSlice, Hexagon, Palmtree, Building2, Sunset,
  Gamepad2, Heart, Ghost, Sprout, Droplets, Headphones, Wand,
  Brush, Gem, Mountain, Briefcase, FlaskConical, TestTube,
  GitFork, Coffee, Snowflake, Home
} from 'lucide-react';

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
  { name: 'forest', icon: Trees, color: '#28a745' },
  { name: 'cyberpunk', icon: Terminal, color: '#8a2be2' },
  { name: 'cupcake', icon: CakeSlice, color: '#e83e8c' },
  { name: 'bumblebee', icon: Hexagon, color: '#ffc107' },
  { name: 'emerald', icon: Palmtree, color: '#20c997' },
  { name: 'corporate', icon: Building2, color: '#4e73df' },
  { name: 'synthwave', icon: Sunset, color: '#ff00ff' },
  { name: 'retro', icon: Gamepad2, color: '#ef7c8e' },
  { name: 'valentine', icon: Heart, color: '#e83e8c' },
  { name: 'halloween', icon: Ghost, color: '#ff7f50' },
  { name: 'garden', icon: Sprout, color: '#28a745' },
  { name: 'aqua', icon: Droplets, color: '#00ffff' },
  { name: 'lofi', icon: Headphones, color: '#808080' },
  { name: 'pastel', icon: Wand, color: '#ffc0cb' },
  { name: 'fantasy', icon: Brush, color: '#6f42c1' },
  { name: 'wireframe', icon: GitFork, color: '#b8b8b8' },
  { name: 'black', icon: Palette, color: '#000000' },
  { name: 'luxury', icon: Gem, color: '#d4af37' },
  { name: 'dracula', icon: Palmtree, color: '#ff79c6' },
  { name: 'cmyk', icon: Palette, color: '#00ffff' },
  { name: 'autumn', icon: Mountain, color: '#d98c26' },
  { name: 'business', icon: Briefcase, color: '#1e90ff' },
  { name: 'acid', icon: FlaskConical, color: '#7fff00' },
  { name: 'lemonade', icon: TestTube, color: '#f0e68c' },
  { name: 'night', icon: Moon, color: '#343a40' },
  { name: 'coffee', icon: Coffee, color: '#6f4e37' },
  { name: 'winter', icon: Snowflake, color: '#87ceeb' }
];

const primaryColors = [
  { name: 'red', color: 'red' },
  { name: 'orange', color: 'orange' },
  { name: 'amber', color: 'amber' },
  { name: 'yellow', color: 'yellow' },
  { name: 'lime', color: 'lime' },
  { name: 'green', color: 'green' },
  { name: 'teal', color: 'teal' },
  { name: 'cyan', color: 'cyan' },
  { name: 'sky', color: 'skyblue' },
  { name: 'blue', color: 'blue' },
  { name: 'indigo', color: 'indigo' },
  { name: 'violet', color: 'violet' },
  { name: 'purple', color: 'purple' },
  { name: 'fuchsia', color: 'fuchsia' },
  { name: 'pink', color: 'pink' },
  { name: 'rose', color: 'rose' }
];

const greyscaleColors = [
    { name: 'slate', color: 'slategray' },
    { name: 'gray', color: 'gray' },
    { name: 'zinc', color: 'zinc' },
    { name: 'neutral', color: 'neutral' },
    { name: 'stone', color: 'stone' }
];


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
  
  const isDark = resolvedTheme?.endsWith('-dark');

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
            checked={!!isDark}
            onCheckedChange={handleToggle}
            aria-label="Toggle dark mode"
          />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleThemeChange('light')}>
          <Home className="mr-2 h-4 w-4" />
          <span>Default</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Paintbrush className="mr-2 h-4 w-4" />
            <span>Custom</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {customThemes.map((t) => {
                const Icon = t.icon;
                return (
                  <DropdownMenuItem key={t.name} onClick={() => handleThemeChange(t.name)}>
                    <Icon className="mr-2 h-4 w-4" style={{ color: t.color }} />
                    {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
                  </DropdownMenuItem>
                )
              })}
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
              {primaryColors.map((colorTheme) => (
                <DropdownMenuItem key={colorTheme.name} onClick={() => handleThemeChange(colorTheme.name)}>
                  <Pipette className="mr-2 h-4 w-4" style={{ color: colorTheme.color }}/>
                  {colorTheme.name.charAt(0).toUpperCase() + colorTheme.name.slice(1)}
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
              {greyscaleColors.map((colorTheme) => (
                <DropdownMenuItem key={colorTheme.name} onClick={() => handleThemeChange(colorTheme.name)}>
                   <Cog className="mr-2 h-4 w-4" style={{ color: colorTheme.color }} />
                  {colorTheme.name.charAt(0).toUpperCase() + colorTheme.name.slice(1)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
