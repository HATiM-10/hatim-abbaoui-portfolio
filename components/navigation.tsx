"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            {/* Logo */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 relative flex-shrink-0">
              <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-md flex items-center justify-center relative overflow-hidden group-hover:shadow-lg transition-shadow">
                {/* Circuit pattern background */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="30" cy="30" r="2" fill="white" />
                    <circle cx="70" cy="30" r="2" fill="white" />
                    <circle cx="50" cy="50" r="3" fill="white" />
                    <circle cx="30" cy="70" r="2" fill="white" />
                    <circle cx="70" cy="70" r="2" fill="white" />
                    <line x1="30" y1="30" x2="50" y2="50" stroke="white" strokeWidth="1" />
                    <line x1="70" y1="30" x2="50" y2="50" stroke="white" strokeWidth="1" />
                    <line x1="30" y1="70" x2="50" y2="50" stroke="white" strokeWidth="1" />
                    <line x1="70" y1="70" x2="50" y2="50" stroke="white" strokeWidth="1" />
                  </svg>
                </div>

                {/* Main letters */}
                <div className="relative z-10">
                  <span className="text-white font-bold text-sm sm:text-base">HA</span>
                </div>

                {/* Gear accent */}
                <div className="absolute bottom-0.5 right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5">
                  <svg viewBox="0 0 24 24" fill="white" className="w-full h-full opacity-90">
                    <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
                  </svg>
                </div>
              </div>
            </div>

            <span className="text-base sm:text-lg font-bold text-primary whitespace-nowrap">
              HATIM ABBAOUI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 active:scale-95 transition-transform"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-3 space-y-1 border-t border-border mt-2 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-2.5 px-3 rounded-md active:scale-98"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
