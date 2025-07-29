'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { 
  Sun, Moon, Palette, Paintbrush, SwatchBook, Pipette, Grape, Cog,
  Trees, Terminal, CakeSlice, Hexagon, Palmtree, Building2, Sunset,
  Gamepad2, Heart, Ghost, Sprout, Droplets, Headphones, Wand,
  Brush, Gem, Mountain, Briefcase, FlaskConical, TestTube,
  GitFork, Coffee, Snowflake
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
  { name: 'forest', icon: Trees },
  { name: 'cyberpunk', icon: Terminal },
  { name: 'cupcake', icon: CakeSlice },
  { name: 'bumblebee', icon: Hexagon },
  { name: 'emerald', icon: Palmtree },
  { name: 'corporate', icon: Building2 },
  { name: 'synthwave', icon: Sunset },
  { name: 'retro', icon: Gamepad2 },
  { name: 'valentine', icon: Heart },
  { name: 'halloween', icon: Ghost },
  { name: 'garden', icon: Sprout },
  { name: 'aqua', icon: Droplets },
  { name: 'lofi', icon: Headphones },
  { name: 'pastel', icon: Wand },
  { name: 'fantasy', icon: Brush },
  { name: 'wireframe', icon: GitFork },
  { name: 'black', icon: Palette },
  { name: 'luxury', icon: Gem },
  { name: 'dracula', icon: Palmtree },
  { name: 'cmyk', icon: Palette },
  { name: 'autumn', icon: Mountain },
  { name: 'business', icon: Briefcase },
  { name: 'acid', icon: FlaskConical },
  { name: 'lemonade', icon: TestTube },
  { name: 'night', icon: Moon },
  { name: 'coffee', icon: Coffee },
  { name: 'winter', icon: Snowflake }
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
              {customThemes.map((t) => {
                const Icon = t.icon;
                return (
                  <DropdownMenuItem key={t.name} onClick={() => handleThemeChange(t.name)}>
                    <Icon className="mr-2 h-4 w-4" style={{ color: themePrimaryColors[t.name] }} />
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
