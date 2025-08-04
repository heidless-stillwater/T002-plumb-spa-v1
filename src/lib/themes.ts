'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/icons/logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => (
    <a
      href={href}
      onClick={() => setIsMenuOpen(false)}
      className={cn(
        'text-muted-foreground transition-colors hover:text-primary',
        className
      )}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-[23px] w-[23px] text-primary" />
            <span className="hidden font-bold sm:inline-block text-[23px]">
              FlowPro Plumbing
            </span>
          </Link>
        </div>
        
        <nav className="hidden items-center gap-6 text-lg font-medium md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} className="text-[18px]" />
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <a
            href="tel:8888567890"
            className="hidden items-center gap-2 text-[18px] font-medium text-muted-foreground transition-colors hover:text-primary sm:flex"
          >
            <Phone className="h-4 w-4" />
            <span>8888 567 890</span>
          </a>
          <a href="#contact">
            <Button className="text-[18px]">Start Here</Button>
          </a>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <Logo className="h-6 w-6 text-primary" />
                    <span className="font-bold">FlowPro Plumbing</span>
                  </Link>
                  <SheetTrigger asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetTrigger>
                </div>
                <nav className="mt-8 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      {...link}
                      className="text-lg"
                    />
                  ))}
                </nav>
                 <a
                  href="tel:8888567890"
                  className="mt-auto flex items-center justify-center gap-2 rounded-md border p-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  <span>8888 567 890</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}