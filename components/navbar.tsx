"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-500/20">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">
            Zia Vision
          </span>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/vision" className="text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors">
            Vision
          </Link>
          <Link href="/dream" className="text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors">
            Dream
          </Link>
          <Link href="/learn" className="text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors">
            Learn
          </Link>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 glass-container border-b md:hidden">
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="/vision"
                className="text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Vision
              </Link>
              <Link
                href="/dream"
                className="text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dream
              </Link>
              <Link
                href="/learn"
                className="text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

