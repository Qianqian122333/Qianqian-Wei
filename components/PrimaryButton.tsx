"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

export default function PrimaryButton({
  children,
  href,
  onClick,
  className = "",
  target,
  rel,
}: PrimaryButtonProps) {
  const pathname = usePathname();
  const textColor = pathname === "/" ? "text-foreground" : "text-[#1A1A1A]";

  const base = `inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 ${textColor} font-semibold transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50`;
  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${className}`}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  );
}
