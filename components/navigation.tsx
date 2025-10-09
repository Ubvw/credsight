"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-border bg-background/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="text-xl font-bold">CREDSIGHT</div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm text-foreground/80 transition-colors hover:text-foreground"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm text-foreground/80 transition-colors hover:text-foreground"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm text-foreground/80 transition-colors hover:text-foreground"
          >
            About
          </button>
          <Button size="sm" asChild>
            <Link href="/analyze">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              About
            </button>
            <Button size="sm" className="w-full" asChild>
              <Link href="/analyze">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
