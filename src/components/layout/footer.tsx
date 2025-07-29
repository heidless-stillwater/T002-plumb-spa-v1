import Link from "next/link";
import Logo from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Send, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const legalLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
  ]

  const socialLinks = [
    { href: '#', icon: <Facebook className="h-5 w-5" /> },
    { href: '#', icon: <Twitter className="h-5 w-5" /> },
    { href: '#', icon: <Instagram className="h-5 w-5" /> },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 text-muted-foreground">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Column 1: About Us */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                FlowPro Plumbing
              </span>
            </Link>
            <p className="text-sm">
              Your trusted partner for all residential and commercial plumbing needs. Fast, reliable, and professional solutions are just a call away.
            </p>
          </div>

          {/* Column 2: Contact & Legal */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Contact Info</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" /><span>Woodberry Down, London N4 2TG</span></li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary flex-shrink-0" /><a href="mailto:jon@test.com" className="hover:text-primary">jon@test.com</a></li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary flex-shrink-0" /><a href="tel:8888567890" className="hover:text-primary">8888 567 890</a></li>
              </ul>
            </div>
             <div>
              <h3 className="font-semibold text-foreground mb-2">Legal</h3>
               <ul className="space-y-2 text-sm">
                {legalLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div>
            <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for tips and promotions.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-grow" />
              <Button type="submit" size="icon" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-left">
            &copy; {currentYear} FlowPro Plumbing. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}