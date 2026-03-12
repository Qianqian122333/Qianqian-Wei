import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        {/* Copyright */}
        <p className="text-sm text-foreground/50">
          © {new Date().getFullYear()} Qianqian Wei. All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <Link
            href="https://www.linkedin.com/in/qianqianwei112233/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/50 transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/Qianqian122333"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground/50 transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
