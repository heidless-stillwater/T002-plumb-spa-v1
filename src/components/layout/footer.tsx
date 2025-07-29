import Link from "next/link";
import Logo from "@/components/icons/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-6 w-6 text-muted-foreground" />
          <span className="text-sm font-bold font-headline text-muted-foreground">
            FlowPro Plumbing
          </span>
        </Link>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} FlowPro Plumbing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
