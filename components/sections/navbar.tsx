"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { companyProfile } from "@/constants/company-profile"
import { Button } from "@/components/ui/button"

const navHrefMap: Record<string, string> = {
  Home: "#home",
  Services: "#services",
  Projects: "#projects",
  About: "#about",
  Contact: "#contact",
}

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="w-full bg-background text-foreground shadow-[0_10px_30px_hsl(var(--foreground)/0.12)]">
        <div className="bg-accent px-4 py-1.5 text-center text-xs text-accent-foreground">
          Use your project planning call to start building with confidence.
        </div>
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="text-3xl font-semibold leading-none tracking-tight text-foreground">
            {companyProfile.brand}
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {companyProfile.navLinks.map((link) => (
              <a
                key={link}
                href={navHrefMap[link] ?? "#home"}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button asChild className="h-9 bg-accent px-5 text-accent-foreground hover:bg-accent/90">
              <a href="#contact">Start Project</a>
            </Button>
          </div>

          <Button
            size="icon"
            className="bg-accent text-accent-foreground hover:bg-accent/90 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
