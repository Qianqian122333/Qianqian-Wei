"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

// import { Button } from "@/components/ui/button";

/* ───── nav data ───── */
const projectsSubItems = [
  { label: "Kaleido ColorLab", href: "/projects/kaleido-colorlab" },
  { label: "Gaahliri Shop", href: "/projects/gaahliri-shop" },
];

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects", children: projectsSubItems },
  { label: "Service & Contact", href: "/service-contact" },
];

/* ───── Desktop / Tablet nav (md+) ───── */
function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex" viewport={false}>
      <NavigationMenuList>
        {navItems.map((item) =>
          item.children ? (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-40 gap-1 p-2">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm md:text-base"
                        >
                          {child.label}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

/* ───── Mobile nav (< md) ───── */
function MobileNav() {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:text-primary focus:outline-none"
          >
            <Menu className="h-5 w-5" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenuSub key={item.label}>
                <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.label} asChild>
                      <Link href={child.href}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem key={item.label} asChild>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ),
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

/* ───── logo map (pathname prefix → logo) ───── */
const logoMap: Record<string, string> = {
  "/projects/kaleido-colorlab": "/logo-colorlab.png",
};

function useLogo() {
  const pathname = usePathname();
  for (const [prefix, src] of Object.entries(logoMap)) {
    if (pathname.startsWith(prefix)) return src;
  }
  return "/logo-default.png";
}

/* ───── Nav (exported) ───── */
export default function Nav() {
  const logoSrc = useLogo();

  return (
    <header className="sticky top-0 z-50 w-full bg-background backdrop-blur-sm border-b border-foreground">
      <div className="mx-auto flex h-16 max-w-9xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={logoSrc}
            alt="Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop / Tablet */}
        <DesktopNav />

        {/* Mobile */}
        <MobileNav />
      </div>
    </header>
  );
}
